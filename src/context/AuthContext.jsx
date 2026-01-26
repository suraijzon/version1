// client/src/context/AuthContext.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};

/* -----------------------------------------
   Axios instance (single source of truth)
------------------------------------------ */
const api = axios.create({
  baseURL: API,
});

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ DEFINE FIRST
  const loadUser = async (token) => {
    try {
      const res = await axios.get(`${API}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
    } catch (err) {
      console.error('Failed to load user:', err);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    } finally {
      setLoading(false);
      return;
    }

  // ✅ USE AFTER DEFINITION
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token && !user) {
      loadUser(token);
    } else {
      setLoading(false);
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      setError(null);

      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      setUser(res.data.user);

      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.msg || "Invalid email or password";
      setError(message);
      return { success: false, error: message };
    }
  };

  const register = async (userData) => {
    try {
      setError(null);

      const res = await api.post("/api/auth/register", userData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      setUser(res.data.user);

      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.msg || "Registration failed";
      setError(message);
      return { success: false, error: message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete api.defaults.headers.common.Authorization;
    setUser(null);
  };

  /* -----------------------------------------
     Memoized context value (perf + stability)
  ------------------------------------------ */
  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      register,
      logout,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === "admin",
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
