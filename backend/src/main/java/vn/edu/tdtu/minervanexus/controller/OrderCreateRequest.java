package vn.edu.tdtu.minervanexus.controller;

import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import java.time.Instant;

/** Explicit whitelist: persistence identity, lifecycle and assignment are never client input. */
public record OrderCreateRequest(String orderCode, String trackingCode, String hubId, String areaId,
        DeliveryOrderDocument.Party sender, DeliveryOrderDocument.Party recipient,
        ServiceLevel serviceLevel, Instant slaDeadline) {
    public DeliveryOrderDocument toDocument() {
        var o=new DeliveryOrderDocument();o.setOrderCode(orderCode);o.setTrackingCode(trackingCode);o.setHubId(hubId);o.setAreaId(areaId);o.setSender(sender);o.setRecipient(recipient);o.setServiceLevel(serviceLevel);o.setSlaDeadline(slaDeadline);return o;
    }
}
