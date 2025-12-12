import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Redirect if not logged in or not a regular user
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user.role !== "user") return <Navigate to="/" />;

  return (
    <div className="user-profile-page">
      {/* Header */}
      <div className="profile-header-section">
        <h1 className="welcome-text">Welcome, {user.name?.split(' ')[0] || 'User'}</h1>
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Profile Card */}
      <div className="profile-main-card">
        {/* User Avatar and Basic Info */}
        <div className="profile-top-section">
          <div className="avatar-container">
            <img
              src={user.avatar || "https://via.placeholder.com/80"}
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-basic-info">
              <h2 className="user-name">{user.name || "User Name"}</h2>
              <p className="user-email-small">{user.email}</p>
            </div>
          </div>
          <button className="edit-profile-btn">
            Edit
          </button>
        </div>

        {/* Personal Information Section */}
        <div className="info-section">
          <h3 className="section-heading">Personal Information</h3>

          <div className="info-grid">
            {/* First Name */}
            <div className="info-field">
              <label className="info-label">First Name</label>
              <div className="info-value">
                {user.name?.split(' ')[0] || 'Not Provided'}
              </div>
            </div>

            {/* Last Name */}
            <div className="info-field">
              <label className="info-label">Last Name</label>
              <div className="info-value">
                {user.name?.split(' ').slice(1).join(' ') || 'Not Provided'}
              </div>
            </div>

            {/* Gender */}
            <div className="info-field">
              <label className="info-label">Gender</label>
              <div className="info-value">
                {user.gender || 'Not Specified'}
              </div>
            </div>

            {/* Country */}
            <div className="info-field">
              <label className="info-label">Country</label>
              <div className="info-value">
                {user.country || 'Not Provided'}
              </div>
            </div>

            {/* Language */}
            <div className="info-field">
              <label className="info-label">Language</label>
              <div className="info-value">
                {user.language || 'English'}
              </div>
            </div>

            {/* Time Zone */}
            <div className="info-field">
              <label className="info-label">Time Zone</label>
              <div className="info-value">
                {user.timezone || 'Not Set'}
              </div>
            </div>
          </div>
        </div>

        {/* Email Address Section */}
        <div className="email-section">
          <h3 className="section-heading">My email Address</h3>
          
          <div className="email-item">
            <div className="email-icon-wrapper">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="email-details">
              <p className="email-address">{user.email}</p>
              <span className="email-status">
                {user.emailVerified ? '✓ Verified' : 'Not Verified'}
              </span>
            </div>
          </div>

          <button className="add-email-btn">
            + Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;