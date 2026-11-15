package vn.edu.tdtu.minervanexus.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.stereotype.Repository;
import vn.edu.tdtu.minervanexus.common.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.service.OrderProblem;
import java.time.Instant;
import java.util.*;
import java.util.regex.Pattern;

@Repository
public class DeliveryOrderSearch {
    private final MongoTemplate mongo;
    public DeliveryOrderSearch(MongoTemplate mongo) {this.mongo=mongo;}
    public record Filter(OrderStatus status,String areaId,String hubId,ServiceLevel serviceLevel,Instant from,Instant to,String q,int page,int size) {}
    public record Result(List<DeliveryOrderDocument> content,int page,int size,long totalElements,long totalPages) {}
    public Query query(Filter f) {
        if(f.page()<0||f.page()>100000||f.size()<1||f.size()>100)throw new OrderProblem(400,"page phải từ 0 đến 100000; size từ 1 đến 100.");
        if(f.from()!=null&&f.to()!=null&&f.from().isAfter(f.to()))throw new OrderProblem(400,"Khoảng ngày không hợp lệ.");
        var query=new Query();if(f.status()!=null)query.addCriteria(Criteria.where("status").is(f.status()));
        exact(query,"areaId",f.areaId());exact(query,"hubId",f.hubId());if(f.serviceLevel()!=null)query.addCriteria(Criteria.where("serviceLevel").is(f.serviceLevel()));
        if(f.from()!=null||f.to()!=null) {var c=Criteria.where("createdAt");if(f.from()!=null)c.gte(f.from());if(f.to()!=null)c.lte(f.to());query.addCriteria(c);}
        if(f.q()!=null&&!f.q().isBlank()) {if(f.q().length()>100)throw new OrderProblem(400,"q tối đa 100 ký tự.");var literal=Pattern.compile(Pattern.quote(f.q()),Pattern.CASE_INSENSITIVE);query.addCriteria(new Criteria().orOperator(Criteria.where("trackingCode").regex(literal),Criteria.where("orderCode").regex(literal)));}
        return query;
    }
    private void exact(Query q,String field,String value) {if(value!=null){if(value.isBlank()||value.length()>100)throw new OrderProblem(400,"Bộ lọc không hợp lệ: "+field);q.addCriteria(Criteria.where(field).is(value));}}
    public Result search(Filter f) {Query query=query(f);long total=mongo.count(query,DeliveryOrderDocument.class);query.with(Sort.by(Sort.Order.desc("createdAt"),Sort.Order.desc("id"))).skip((long)f.page()*f.size()).limit(f.size());return new Result(mongo.find(query,DeliveryOrderDocument.class),f.page(),f.size(),total,(total+f.size()-1)/f.size());}
}
