import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { adminAPI } from "../utils/api";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
      return;
    }

    fetchData();
  }, [isAdmin, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const usersResponse = await adminAPI.getAllUsers();
      setUsers(usersResponse.data);

      const contactsResponse = await adminAPI.getAllContacts();
      setContacts(contactsResponse.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.msg || "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await adminAPI.deleteUser(userId);
      setUsers((prev) => prev.filter((u) => u._id !== userId));
      alert("User deleted successfully");
    } catch {
      alert("Failed to delete user");
    }
  };

  const handleDeleteContact = async (contactId) => {
    if (!window.confirm("Are you sure you want to delete this contact message?")) return;

    try {
      await adminAPI.deleteContact(contactId);
      setContacts((prev) => prev.filter((c) => c._id !== contactId));
      alert("Contact message deleted successfully");
    } catch {
      alert("Failed to delete contact message");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{users.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Contacts</h3>
          <p className="stat-number">{contacts.length}</p>
        </div>
        <div className="stat-card">
          <h3>Admin Users</h3>
          <p className="stat-number">
            {users.filter((u) => u.role === "admin").length}
          </p>
        </div>
      </div>

      {/* Users */}
      <div className="section">
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users registered yet.</p>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone || "N/A"}</td>
                    <td>
                      <span className={`role-badge ${u.role}`}>
                        {u.role}
                      </span>
                    </td>
                    <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(u._id)}
                        className="delete-btn"
                        disabled={u.role === "admin"}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Contacts */}
      <div className="section">
        <h2>Contact Messages</h2>
        {contacts.length === 0 ? (
          <p>No contact messages yet.</p>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td className="message-cell">{c.message}</td>
                    <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteContact(c._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
