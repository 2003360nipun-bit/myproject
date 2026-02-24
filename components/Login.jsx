import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = login(email.trim(), password);
    if (!res.ok) {
      alert("Login failed: " + res.message);
    }
  }

  return (
    <div className="auth-card">
      <h2>ISDN Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <div style={{marginTop:10}}>
        <Link to="/register">Register new account</Link>
      </div>
    </div>
  );
}
