package vn.edu.tdtu.minervanexus.service;

import org.junit.jupiter.api.Test;
import vn.edu.tdtu.minervanexus.common.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;
import java.time.Instant;
import java.util.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class OrderTransitionTest {
    @Test void everyStatusPairRespectsUnchangedEdgesAndFailureOperation() {
        Map<OrderStatus,Set<OrderStatus>> edges=Map.of(
            OrderStatus.PENDING,Set.of(OrderStatus.READY_TO_DISPATCH,OrderStatus.CANCELLED),
            OrderStatus.READY_TO_DISPATCH,Set.of(OrderStatus.ASSIGNED,OrderStatus.CANCELLED),
            OrderStatus.ASSIGNED,Set.of(OrderStatus.DRIVER_ACCEPTED,OrderStatus.READY_TO_DISPATCH),
            OrderStatus.DRIVER_ACCEPTED,Set.of(OrderStatus.IN_TRANSIT),
            OrderStatus.IN_TRANSIT,Set.of(OrderStatus.DELIVERED,OrderStatus.FAILED),
            OrderStatus.FAILED,Set.of(OrderStatus.READY_FOR_REDELIVERY,OrderStatus.RETURN_PENDING),
            OrderStatus.READY_FOR_REDELIVERY,Set.of(OrderStatus.ASSIGNED,OrderStatus.RETURN_PENDING),
            OrderStatus.RETURN_PENDING,Set.of(OrderStatus.RETURNED));
        for(var from:OrderStatus.values())for(var to:OrderStatus.values()) {
            var repo=mock(DeliveryOrderRepository.class);var service=new OrderService(repo,new SlaRuleService(),new OrderStateMachine());
            var o=new DeliveryOrderDocument();o.setStatus(from);o.setTrackingCode("MN-7F49C3A18B22");o.setHubId("H1");o.setAreaId("A1");o.setServiceLevel(ServiceLevel.STANDARD);o.setSlaDeadline(Instant.now().plusSeconds(86400));var p=new DeliveryOrderDocument.Party();p.name="Example";p.phone="0901234567";p.address="Address";o.setSender(p);o.setRecipient(p);when(repo.findById("1")).thenReturn(Optional.of(o));when(repo.save(any())).thenAnswer(i->i.getArgument(0));
            if(edges.getOrDefault(from,Set.of()).contains(to)&&to!=OrderStatus.FAILED) {assertEquals(to,service.transition("1",to,"actor","reason").getStatus(),from+"->"+to);verify(repo).save(o);}
            else {assertThrows(IllegalArgumentException.class,()->service.transition("1",to,"actor","reason"),from+"->"+to);assertEquals(from,o.getStatus());verify(repo,never()).save(any());}
        }
    }
}
