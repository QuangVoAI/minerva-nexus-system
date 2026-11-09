package vn.edu.tdtu.minervanexus.model;

import vn.edu.tdtu.minervanexus.common.UserRole;

public class User {
    private String userId;
    private String username;
    private String fullName;
    private UserRole role;
    private boolean active;

    public User() {}

    public User(String userId, String username, String fullName, UserRole role, boolean active) {
        this.userId = userId;
        this.username = username;
        this.fullName = fullName;
        this.role = role;
        this.active = active;
    }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public UserRole getRole() { return role; }
    public void setRole(UserRole role) { this.role = role; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    @Override
    public String toString() {
        return fullName + " (" + role.getDescription() + ")";
    }
}
