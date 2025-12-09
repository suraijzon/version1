import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "../styles/UserProfile.css"; // create this CSS file

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth();

  // Redirect if not logged in or not a regular user
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user.role !== "user") return <Navigate to="/" />;

  return (
    <div className="user-profile-container">
      <h1 className="page-title">User Profile</h1>

      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.avatar || "/default-avatar.png"}
            alt="User Avatar"
            className="profile-avatar"
          />
          <div>
            <h2 className="profile-name">{user.name || user.email}</h2>
            <p className="profile-role">{user.role.toUpperCase()}</p>
          </div>
        </div>

        <div className="profile-details">
          <h3>Account Details</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          {/* Add more user info here if needed */}
        </div>

        <div className="profile-actions">
          <button>Edit Profile</button>
          <button>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
