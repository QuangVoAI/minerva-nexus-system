package vn.edu.tdtu.minervanexus.repository;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.stereotype.Component;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;

/** Enforce uniqueness even when Boot's automatic annotation index creation is disabled. */
@Component
public class DeliveryOrderIndexes implements ApplicationRunner {
    private final MongoTemplate mongo;
    public DeliveryOrderIndexes(MongoTemplate mongo) {this.mongo=mongo;}
    @Override public void run(ApplicationArguments args) {mongo.indexOps(DeliveryOrderDocument.class).ensureIndex(new Index().on("trackingCode",Sort.Direction.ASC).unique());}
}
