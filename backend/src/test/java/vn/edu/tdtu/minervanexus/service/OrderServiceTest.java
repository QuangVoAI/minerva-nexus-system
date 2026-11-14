package vn.edu.tdtu.minervanexus.service;

import org.junit.jupiter.api.*;
import vn.edu.tdtu.minervanexus.common.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;
import java.time.*;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OrderServiceTest {
    DeliveryOrderRepository repository = mock(DeliveryOrderRepository.class);
    OrderService service = new OrderService(repository, new SlaRuleService(), new OrderStateMachine());
    DeliveryOrderDocument valid() {
        var o = new DeliveryOrderDocument(); o.setTrackingCode("MN-7F49C3A18B22"); o.setHubId("H1"); o.setAreaId("A1"); o.setServiceLevel(ServiceLevel.STANDARD); o.setSlaDeadline(Instant.now().plusSeconds(86400));
        var p = new DeliveryOrderDocument.Party(); p.name="Example"; p.phone="0901234567"; p.address="123 Test Street"; o.setSender(p); o.setRecipient(p); return o;
    }
    @BeforeEach void setup() { when(repository.save(any())).thenAnswer(i -> i.getArgument(0)); }
    @Test void blankPartyRejectedWithoutSave() { var o=valid();o.getSender().name=" ";assertThrows(IllegalArgumentException.class,()->service.create(o,"staff"));verify(repository,never()).save(any()); }
    @Test void createDiscardsInjectedStateAndHistory() { var o=valid(); o.setStatus(OrderStatus.DELIVERED);o.setFailureCount(7);o.getStatusHistory().add(new DeliveryOrderDocument.StatusEvent());var result=service.create(o,"staff");assertEquals(OrderStatus.PENDING,result.getStatus());assertEquals(0,result.getFailureCount());assertEquals(1,result.getStatusHistory().size()); }
    @Test void genericFailedCannotBypassAttemptCounter() {var o=valid();o.setStatus(OrderStatus.IN_TRANSIT);when(repository.findById("1")).thenReturn(Optional.of(o));assertThrows(IllegalArgumentException.class,()->service.transition("1",OrderStatus.FAILED,"staff","x"));verify(repository,never()).save(any());}
    @Test void thirdFailureRecordsBothEdgesWithOneSave() {var o=valid();o.setStatus(OrderStatus.IN_TRANSIT);o.setFailureCount(2);when(repository.findById("1")).thenReturn(Optional.of(o));var result=service.reportFailure("1","staff","ABSENT","note");assertEquals(OrderStatus.RETURN_PENDING,result.getStatus());assertEquals(3,result.getFailureCount());assertEquals(2,result.getStatusHistory().size());assertEquals(OrderStatus.FAILED,result.getStatusHistory().get(0).toStatus);assertEquals(OrderStatus.RETURN_PENDING,result.getStatusHistory().get(1).toStatus);verify(repository,times(1)).save(o);}
    @Test void firstAndSecondFailureStayFailed() {for(int n=0;n<2;n++){var o=valid();o.setStatus(OrderStatus.IN_TRANSIT);o.setFailureCount(n);when(repository.findById("1")).thenReturn(Optional.of(o));var result=service.reportFailure("1","staff","ABSENT","");assertEquals(OrderStatus.FAILED,result.getStatus());assertEquals(n+1,result.getFailureCount());assertEquals(1,result.getStatusHistory().size());}}
    @Test void invalidInputsNeverSave() {for(int n=0;n<7;n++){var o=valid();switch(n){case 0->o.setTrackingCode("short");case 1->o.setSlaDeadline(Instant.now().minusSeconds(1));case 2->o.setRecipient(null);case 3->o.getSender().phone="abc";case 4->o.setHubId(" ");case 5->o.setAreaId(null);case 6->o.setServiceLevel(null);}assertThrows(IllegalArgumentException.class,()->service.create(o,"staff"));}verify(repository,never()).save(any());}
    @Test void blankFailureReasonAndActorRejectedWithoutMutation() {var o=valid();o.setStatus(OrderStatus.IN_TRANSIT);when(repository.findById("1")).thenReturn(Optional.of(o));assertThrows(IllegalArgumentException.class,()->service.reportFailure("1","staff"," ",""));assertThrows(IllegalArgumentException.class,()->service.reportFailure("1"," ","ABSENT",""));assertEquals(0,o.getFailureCount());verify(repository,never()).save(any());}
    @Test void receiveOverdueOrderWarnsInsteadOfBlocking() {var o=valid();o.setSlaDeadline(Instant.now().minusSeconds(1));when(repository.findById("1")).thenReturn(Optional.of(o));var result=service.receive("1","staff");assertEquals(OrderStatus.READY_TO_DISPATCH,result.getStatus());assertEquals(SlaRiskLevel.BREACHED,result.getSlaAssessment().riskLevel);}
    @Test void cancellationAuditIncludesBeforeAfterAndReason() {var o=valid();when(repository.findById("1")).thenReturn(Optional.of(o));var result=service.cancel("1","staff","customer requested");var audit=result.getAuditEvents().get(0);assertEquals(OrderStatus.PENDING,audit.fromStatus);assertEquals(OrderStatus.CANCELLED,audit.toStatus);assertEquals("customer requested",audit.note);assertEquals("ORDER_CANCELLED",audit.reasonCode);}
    @Test void cancellationRequiresReasonBeforeMutation() {var o=valid();when(repository.findById("1")).thenReturn(Optional.of(o));assertThrows(IllegalArgumentException.class,()->service.transition("1",OrderStatus.CANCELLED,"staff"," "));assertEquals(OrderStatus.PENDING,o.getStatus());verify(repository,never()).save(any());}
}
