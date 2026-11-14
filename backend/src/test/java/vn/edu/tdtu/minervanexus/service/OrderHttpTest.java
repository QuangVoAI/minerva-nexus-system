package vn.edu.tdtu.minervanexus.service;

import org.junit.jupiter.api.*;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import vn.edu.tdtu.minervanexus.controller.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.Optional;

class OrderHttpTest {
    DeliveryOrderRepository repo=mock(DeliveryOrderRepository.class);
    MockMvc mvc=MockMvcBuilders.standaloneSetup(new OrderController(new OrderService(repo,new SlaRuleService(),new OrderStateMachine()))).setControllerAdvice(new OrderExceptionHandler()).build();
    @Test void detailEndpointExists() throws Exception {when(repo.findById("missing")).thenReturn(Optional.empty());mvc.perform(get("/api/orders/missing")).andExpect(status().isNotFound());}
    @Test void emptyCreateIsBadRequest() throws Exception {mvc.perform(post("/api/orders").contentType("application/json").content("{}")).andExpect(status().isBadRequest());}
    @Test void timelineEndpointExists() throws Exception {when(repo.findById("1")).thenReturn(Optional.of(new DeliveryOrderDocument()));mvc.perform(get("/api/orders/1/timeline")).andExpect(status().isOk()).andExpect(content().json("[]"));}
}
