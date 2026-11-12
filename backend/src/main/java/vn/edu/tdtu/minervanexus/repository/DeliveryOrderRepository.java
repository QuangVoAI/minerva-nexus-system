package vn.edu.tdtu.minervanexus.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;

import java.util.Optional;

public interface DeliveryOrderRepository extends MongoRepository<DeliveryOrderDocument, String> {
    Optional<DeliveryOrderDocument> findByTrackingCode(String trackingCode);
    boolean existsByTrackingCode(String trackingCode);
}
