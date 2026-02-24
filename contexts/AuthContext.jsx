import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const s = localStorage.getItem("isdn_session");
    if (s) setUser(JSON.parse(s));
  }, []);

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("isdn_users") || "[]");
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      const session = { id: found.id, name: found.name, role: found.role, email: found.email };
      localStorage.setItem("isdn_session", JSON.stringify(session));
      setUser(session);
      // redirect by role
      if (found.role === "customer") navigate("/customer");
      else if (found.role === "rdc_staff") navigate("/rdc");
      else if (found.role === "head_office") navigate("/headoffice");
      else if (found.role === "driver") navigate("/driver");
      return { ok: true };
    }
    return { ok: false, message: "Invalid credentials" };
  }

  function logout() {
    localStorage.removeItem("isdn_session");
    setUser(null);
    navigate("/login");
  }

  function register(payload) {
    const users = JSON.parse(localStorage.getItem("isdn_users") || "[]");
    if (users.find(u => u.email === payload.email)) {
      return { ok: false, message: "Email already registered" };
    }
    const id = "u_" + Date.now();
    const newUser = { id, ...payload };
    users.push(newUser);
    localStorage.setItem("isdn_users", JSON.stringify(users));
    return { ok: true, user: newUser };
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
