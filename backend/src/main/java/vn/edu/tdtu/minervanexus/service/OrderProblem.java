package vn.edu.tdtu.minervanexus.service;

public class OrderProblem extends IllegalArgumentException {
    private final int status;
    public OrderProblem(int status, String message) { super(message); this.status = status; }
    public int getStatus() { return status; }
}
