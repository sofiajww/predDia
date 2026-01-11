// src/pages/ForgotPassword.jsx
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function ForgotPassword() {
  const navigate = useNavigate();
  const q = useQuery();

  const [role, setRole] = useState(q.get("role") || "user"); // user/admin
  const [email, setEmail] = useState(q.get("email") || "");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (!email.trim()) {
      setError("Email wajib diisi.");
      return;
    }

    try {
      setLoading(true);

      // ✅ endpoint sesuai role (silakan sesuaikan dengan backend kamu)
      const endpoint =
        role === "admin" ? "/admin/forgot-password" : "/forgot-password";

      const res = await api.post(endpoint, { email });

      // Demi keamanan, idealnya backend selalu balikin pesan generic:
      // "Jika email terdaftar, kami akan kirim instruksi."
      setInfo(
        res?.data?.message ||
          "Jika email terdaftar, kami akan mengirim instruksi reset password."
      );
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          "Gagal mengirim permintaan. Coba lagi nanti."
      );
    } finally {
      setLoading(false);
    }
  };

  const goBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
        padding: 16,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 32,
          borderRadius: 12,
          width: 420,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 8, color: "#333" }}>
          Lupa Password
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: 13,
            color: "#666",
            lineHeight: 1.4,
          }}
        >
          Masukkan email akun kamu. Kami akan kirim link untuk reset password.
        </p>

        {error && (
          <div
            style={{
              background: "#ffe5e5",
              color: "#b00020",
              padding: 10,
              borderRadius: 6,
              marginBottom: 12,
              fontSize: 13,
            }}
          >
            {error}
          </div>
        )}

        {info && (
          <div
            style={{
              background: "#e8fff1",
              color: "#1b6b3a",
              padding: 10,
              borderRadius: 6,
              marginBottom: 12,
              fontSize: 13,
            }}
          >
            {info}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Role */}
          <div style={{ marginBottom: 14 }}>
            <label
              style={{
                display: "block",
                marginBottom: 4,
                fontSize: 13,
                color: "#444",
              }}
            >
              Reset untuk role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            >
              <option value="user">Pengguna (User)</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: "block",
                marginBottom: 4,
                fontSize: 13,
                color: "#444",
              }}
            >
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              style={{
                width: "100%",
                padding: 9,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 10,
              background: "#3b5d50",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: 14,
              opacity: loading ? 0.8 : 1,
            }}
          >
            {loading ? "Mengirim..." : "Kirim Link Reset"}
          </button>

          <button
            type="button"
            onClick={goBackToLogin}
            style={{
              width: "100%",
              padding: 10,
              marginTop: 10,
              background: "transparent",
              border: "1px solid #d0d0d0",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 14,
              color: "#333",
            }}
          >
            Kembali ke Login
          </button>
        </form>

        <div style={{ marginTop: 14, fontSize: 12, color: "#777" }}>
          Tips: cek folder <b>Spam</b> / <b>Promotions</b> kalau email tidak masuk.
        </div>
      </div>
    </div>
  );
}
