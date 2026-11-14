package vn.edu.tdtu.minervanexus.service;

import org.junit.jupiter.api.*;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import vn.edu.tdtu.minervanexus.controller.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.time.Instant;
import java.util.Optional;

class OrderPublicTest {
    DeliveryOrderRepository repo=mock(DeliveryOrderRepository.class);
    MockMvc mvc=MockMvcBuilders.standaloneSetup(new OrderTrackingController(repo,java.time.Clock.fixed(Instant.parse("2026-11-14T00:00:00Z"),java.time.ZoneOffset.UTC))).setControllerAdvice(new OrderExceptionHandler()).build();
    @Test void publicResponseIsWhitelisted() throws Exception {var o=new DeliveryOrderDocument();o.setTrackingCode("MN-7F49C3A18B22");o.setAreaId("A1");var p=new DeliveryOrderDocument.Party();p.phone="PRIVATE_PHONE";o.setRecipient(p);var e=new DeliveryOrderDocument.StatusEvent();e.toStatus=o.getStatus();e.note="PRIVATE_NOTE";e.actorId="PRIVATE_ACTOR";e.changedAt=Instant.now();o.getStatusHistory().add(e);when(repo.findByTrackingCode(o.getTrackingCode())).thenReturn(Optional.of(o));mvc.perform(get("/api/tracking/"+o.getTrackingCode())).andExpect(status().isOk()).andExpect(jsonPath("$.recipient").doesNotExist()).andExpect(jsonPath("$.id").doesNotExist()).andExpect(jsonPath("$.timeline[0].note").doesNotExist()).andExpect(jsonPath("$.timeline[0].actorId").doesNotExist()).andExpect(jsonPath("$.statusLabel").value("PENDING"));}
    @Test void malformedAndUnknownHaveSameMessageAndThrottle() throws Exception {when(repo.findByTrackingCode(anyString())).thenReturn(Optional.empty());String a=mvc.perform(get("/api/tracking/bad")).andExpect(status().isNotFound()).andReturn().getResponse().getContentAsString();String b=mvc.perform(get("/api/tracking/MN-7F49C3A18B22")).andExpect(status().isNotFound()).andReturn().getResponse().getContentAsString();assertEquals(a,b);for(int i=2;i<30;i++)mvc.perform(get("/api/tracking/bad")).andExpect(status().isNotFound());mvc.perform(get("/api/tracking/bad")).andExpect(status().isTooManyRequests()).andExpect(header().string("Retry-After","60"));}
    @Test void searchRejectsInvalidBoundsAndRanges() {var search=new DeliveryOrderSearch(null);assertThrows(OrderProblem.class,()->search.query(new DeliveryOrderSearch.Filter(null,null,null,null,null,null,null,-1,20)));assertThrows(OrderProblem.class,()->search.query(new DeliveryOrderSearch.Filter(null,null,null,null,null,null,null,0,101)));assertThrows(OrderProblem.class,()->search.query(new DeliveryOrderSearch.Filter(null,null,null,null,Instant.now(),Instant.EPOCH,null,0,20)));}
}
