package vn.edu.tdtu.minervanexus.service;

import com.mongodb.client.*;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.EnabledIfSystemProperty;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.support.MongoRepositoryFactory;
import org.springframework.dao.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.*;
import vn.edu.tdtu.minervanexus.common.*;
import java.time.Instant;
import java.util.UUID;
import static org.junit.jupiter.api.Assertions.*;

@EnabledIfSystemProperty(named="m1.mongo.port",matches="[0-9]+")
class OrderMongoTest {
    MongoClient client;MongoTemplate mongo;DeliveryOrderRepository repository;OrderService service;
    @BeforeEach void setup() {int port=Integer.parseInt(System.getProperty("m1.mongo.port"));if(port<1||port>65535)throw new IllegalArgumentException("Invalid local port");client=MongoClients.create("mongodb://127.0.0.1:"+port+"/?serverSelectionTimeoutMS=5000");mongo=new MongoTemplate(client,"m1_test_"+UUID.randomUUID().toString().replace("-",""));new DeliveryOrderIndexes(mongo).run(null);repository=new MongoRepositoryFactory(mongo).getRepository(DeliveryOrderRepository.class);service=new OrderService(repository,new SlaRuleService(),new OrderStateMachine());}
    @AfterEach void cleanup() {if(mongo!=null)mongo.getDb().drop();if(client!=null)client.close();}
    DeliveryOrderDocument create() {var o=new DeliveryOrderDocument();o.setTrackingCode("MN-7F49C3A18B22");o.setHubId("H1");o.setAreaId("A1");o.setServiceLevel(ServiceLevel.EXPRESS);o.setSlaDeadline(Instant.now().plusSeconds(10000));var p=new DeliveryOrderDocument.Party();p.name="Test";p.phone="0901234567";p.address="Test address";o.setSender(p);o.setRecipient(p);return service.create(o,"tester");}
    @Test void embeddedHistoryAuditSlaAndThirdFailurePersistTogether() {var o=create();assertNotNull(o.getVersion());o.setStatus(OrderStatus.IN_TRANSIT);o.setFailureCount(2);repository.save(o);service.reportFailure(o.getId(),"tester","ABSENT","private note");var read=repository.findById(o.getId()).orElseThrow();assertEquals(OrderStatus.RETURN_PENDING,read.getStatus());assertEquals(3,read.getStatusHistory().size());assertEquals(2,read.getAuditEvents().size());assertEquals(1,read.getExceptions().size());assertNotNull(read.getSlaAssessment());assertNotNull(read.getReturnInfo());}
    @Test void uniqueTrackingAndOptimisticLockingEnforcedByMongo() {var o=create();var duplicate=new DeliveryOrderDocument();duplicate.setTrackingCode(o.getTrackingCode());assertThrows(DuplicateKeyException.class,()->repository.save(duplicate));var a=repository.findById(o.getId()).orElseThrow();var b=repository.findById(o.getId()).orElseThrow();a.setAreaId("A2");repository.save(a);b.setAreaId("A3");assertThrows(OptimisticLockingFailureException.class,()->repository.save(b));assertEquals("A2",repository.findById(o.getId()).orElseThrow().getAreaId());}
    @Test void literalSearchFiltersAndPagingWorkAgainstMongo() {create();var search=new DeliveryOrderSearch(mongo);assertEquals(1,search.search(new DeliveryOrderSearch.Filter(OrderStatus.PENDING,"A1",null,ServiceLevel.EXPRESS,null,null,"7F49",0,1)).totalElements());assertEquals(0,search.search(new DeliveryOrderSearch.Filter(null,null,null,null,null,null,".*",0,10)).totalElements());assertEquals(0,search.search(new DeliveryOrderSearch.Filter(null,null,null,null,null,null,null,1,1)).content().size());}
}
