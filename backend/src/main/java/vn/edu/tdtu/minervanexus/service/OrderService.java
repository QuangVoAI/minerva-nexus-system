package vn.edu.tdtu.minervanexus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;
import java.time.*;
import java.util.List;

@Service
public class OrderService {
    private final DeliveryOrderRepository repository;
    private final SlaRuleService slaRuleService;
    private final OrderStateMachine stateMachine;
    private final Clock clock;
    @Autowired
    public OrderService(DeliveryOrderRepository repository, SlaRuleService slaRuleService, OrderStateMachine stateMachine) {
        this(repository, slaRuleService, stateMachine, Clock.systemUTC());
    }
    public OrderService(DeliveryOrderRepository repository, SlaRuleService slaRuleService, OrderStateMachine stateMachine, Clock clock) {
        this.repository=repository; this.slaRuleService=slaRuleService; this.stateMachine=stateMachine; this.clock=clock;
    }
    public List<DeliveryOrderDocument> findAll() { return repository.findAll(); }
    public DeliveryOrderDocument findById(String id) {
        text(id,"id",100); return repository.findById(id).orElseThrow(()->new OrderProblem(404,"Không tìm thấy đơn hàng."));
    }
    public List<DeliveryOrderDocument.StatusEvent> timeline(String id) { return List.copyOf(findById(id).getStatusHistory()); }
    public DeliveryOrderDocument create(DeliveryOrderDocument input, String actorId) {
        actor(actorId); validate(input, true);
        if (repository.existsByTrackingCode(input.getTrackingCode())) throw new OrderProblem(409,"Mã vận đơn đã tồn tại.");
        // Copy only client-writable fields, including for callers using the legacy service signature.
        var o=new DeliveryOrderDocument();o.setTrackingCode(input.getTrackingCode());o.setOrderCode(input.getOrderCode());o.setHubId(input.getHubId());o.setAreaId(input.getAreaId());o.setSender(copy(input.getSender()));o.setRecipient(copy(input.getRecipient()));o.setServiceLevel(input.getServiceLevel());o.setSlaDeadline(input.getSlaDeadline());
        Instant now=clock.instant();o.setCreatedAt(now);event(o,OrderStatus.PENDING,actorId,"ORDER_CREATED","",now);return save(o,actorId,"ORDER_CREATED",now);
    }
    public DeliveryOrderDocument receive(String id,String actorId) { return transition(id,OrderStatus.READY_TO_DISPATCH,actorId,""); }
    public DeliveryOrderDocument cancel(String id,String actorId,String reason) { return transition(id,OrderStatus.CANCELLED,actorId,reason); }
    public DeliveryOrderDocument transition(String id,OrderStatus target,String actorId,String note) {
        actor(actorId); optional(note,"note",1000);
        if(target==null) throw new OrderProblem(400,"Thiếu trạng thái đích.");
        if(target==OrderStatus.FAILED) throw new OrderProblem(400,"Sử dụng thao tác báo thất bại để ghi nhận số lần giao.");
        if(target==OrderStatus.CANCELLED) text(note,"reason",1000);
        var o=findById(id);
        if(target==OrderStatus.READY_FOR_REDELIVERY && o.getFailureCount()>=3) throw new OrderProblem(409,"Đơn thất bại 3 lần phải chờ hoàn.");
        allowed(o.getStatus(),target);
        if(o.getStatus()==OrderStatus.PENDING && target==OrderStatus.READY_TO_DISPATCH) validate(o,false);
        Instant now=clock.instant();event(o,target,actorId,target==OrderStatus.CANCELLED?"ORDER_CANCELLED":"STATUS_CHANGE",note,now);return save(o,actorId,"STATUS_CHANGE",now);
    }
    public DeliveryOrderDocument reportFailure(String id,String actorId,String reasonCode,String note) {
        actor(actorId);text(reasonCode,"reasonCode",100);optional(note,"note",1000);var o=findById(id);allowed(o.getStatus(),OrderStatus.FAILED);
        if(o.getFailureCount()>=3) throw new OrderProblem(409,"Đơn đã đạt giới hạn số lần thất bại.");
        if(o.getFailureCount()==2) allowed(OrderStatus.FAILED,OrderStatus.RETURN_PENDING);
        Instant now=clock.instant();int count=o.getFailureCount()+1;var failure=new DeliveryOrderDocument.DeliveryException();failure.attemptNumber=count;failure.driverId=o.getCurrentAssignment()==null?null:o.getCurrentAssignment().driverId;failure.reasonCode=reasonCode;failure.note=note;failure.reportedAt=now;o.getExceptions().add(failure);o.setFailureCount(count);
        event(o,OrderStatus.FAILED,actorId,reasonCode,note,now);
        if(count==3) {event(o,OrderStatus.RETURN_PENDING,actorId,"MAX_FAILURES","",now);var r=new DeliveryOrderDocument.ReturnInfo();r.returnRequestedAt=now;r.reason="MAX_FAILURES";o.setReturnInfo(r);}
        return save(o,actorId,"DELIVERY_FAILURE",now);
    }
    public DeliveryOrderDocument assessSla(String id,String actorId) {actor(actorId);return save(findById(id),actorId,"SLA_ASSESSED",clock.instant());}
    private DeliveryOrderDocument save(DeliveryOrderDocument o,String actor,String action,Instant now) {
        o.setUpdatedAt(now);o.setSlaAssessment(slaRuleService.assess(o,now));var audit=new DeliveryOrderDocument.AuditEvent();audit.actorId=actor;audit.action=action;audit.occurredAt=now;
        if(!"SLA_ASSESSED".equals(action)) {
            var events=o.getStatusHistory();var last=events.get(events.size()-1);audit.fromStatus=last.fromStatus;audit.toStatus=last.toStatus;audit.reasonCode=last.reasonCode;audit.note=last.note;
            if("DELIVERY_FAILURE".equals(action)&&o.getFailureCount()==3&&events.size()>=2) {var failed=events.get(events.size()-2);audit.fromStatus=failed.fromStatus;audit.reasonCode=failed.reasonCode;audit.note=failed.note;}
        } else {audit.fromStatus=o.getStatus();audit.toStatus=o.getStatus();}
        o.getAuditEvents().add(audit);return repository.save(o);
    }
    private void event(DeliveryOrderDocument o,OrderStatus target,String actor,String reason,String note,Instant now) {
        var e=new DeliveryOrderDocument.StatusEvent();e.fromStatus=o.getStatusHistory().isEmpty()&&o.getCreatedAt()!=null&&"ORDER_CREATED".equals(reason)?null:o.getStatus();e.toStatus=target;e.actorId=actor;e.reasonCode=reason;e.note=note;e.changedAt=now;o.getStatusHistory().add(e);o.setStatus(target);
    }
    private void allowed(OrderStatus from,OrderStatus to) {try {stateMachine.requireAllowed(from,to);}catch(IllegalStateException e){throw new OrderProblem(409,e.getMessage());}}
    private void validate(DeliveryOrderDocument o,boolean future) {
        if(o==null) throw new OrderProblem(400,"Thiếu đơn hàng.");
        if(o.getTrackingCode()==null||!o.getTrackingCode().matches("[A-Z0-9][A-Z0-9-]{11,63}")) throw new OrderProblem(400,"trackingCode phải gồm 12–64 ký tự A-Z, 0-9, dấu gạch ngang.");
        text(o.getHubId(),"hubId",100);text(o.getAreaId(),"areaId",100);party(o.getSender(),"sender");party(o.getRecipient(),"recipient");optional(o.getOrderCode(),"orderCode",100);
        if(o.getServiceLevel()==null||o.getSlaDeadline()==null) throw new OrderProblem(400,"Thiếu serviceLevel hoặc slaDeadline.");
        if(future&&!o.getSlaDeadline().isAfter(clock.instant())) throw new OrderProblem(400,"slaDeadline phải ở tương lai.");
    }
    private void party(DeliveryOrderDocument.Party p,String name) {if(p==null) throw new OrderProblem(400,"Thiếu "+name);text(p.name,name+".name",150);text(p.address,name+".address",500);if(p.phone==null||!p.phone.matches("\\+?[0-9]{8,15}"))throw new OrderProblem(400,"Số điện thoại không hợp lệ: "+name);}
    private DeliveryOrderDocument.Party copy(DeliveryOrderDocument.Party p) {var c=new DeliveryOrderDocument.Party();c.name=p.name;c.phone=p.phone;c.address=p.address;return c;}
    private void actor(String value) {text(value,"actorId",100);}
    private void text(String value,String name,int max) {if(value==null||value.isBlank()||value.length()>max||value.chars().anyMatch(Character::isISOControl))throw new OrderProblem(400,"Giá trị không hợp lệ: "+name);}
    private void optional(String value,String name,int max) {if(value!=null&&(value.length()>max||value.chars().anyMatch(Character::isISOControl)))throw new OrderProblem(400,"Giá trị không hợp lệ: "+name);}
}
