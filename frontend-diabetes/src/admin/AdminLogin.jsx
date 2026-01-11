// src/admin/AdminLogin.jsx
import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/admin/login", { email, password });

      const token = res.data?.token;
      const admin = res.data?.user; // backend login admin sudah mengembalikan 'user' = admin

      if (!token || !admin) {
        setError("Login gagal, data admin tidak ditemukan.");
        return;
      }

      // simpan token admin
      localStorage.setItem("admin_token", token);
      // simpan info admin
      localStorage.setItem("admin_user", JSON.stringify(admin));

      // redirect ke dashboard admin
      nav("/admin");
    } catch (err) {
      // ambil message dari response Laravel, fallback ke 'Login gagal'
      const msg = err?.response?.data?.message || "Login gagal";
      setError(msg);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h2>Login Admin</h2>
      {error && <div style={{ color: "crimson", marginBottom: 12 }}>{error}</div>}

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10 }}
            placeholder="admin@gmail.com"
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 10 }}
            placeholder="admin123"
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: 10,
            width: "100%",
            background: "#3b5d50",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
