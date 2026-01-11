// src/pages/ResetPassword.jsx
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function ResetPassword() {
  const navigate = useNavigate();
  const q = useQuery();

  const token = q.get("token") || "";
  const initialRole = q.get("role") || "user";
  const initialEmail = q.get("email") || "";

  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState(initialEmail);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ toggle masing-masing field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (!token) {
      setError("Token reset tidak ditemukan. Buka link dari email reset.");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    try {
      setLoading(true);

      const endpoint =
        role === "admin" ? "/admin/reset-password" : "/reset-password";

      const payload = {
        token,
        email,
        password,
        password_confirmation: confirmPassword,
      };

      const res = await api.post(endpoint, payload);

      setInfo(
        res?.data?.message || "Password berhasil diperbarui. Silakan login."
      );

      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          "Gagal reset password. Link mungkin kadaluarsa."
      );
    } finally {
      setLoading(false);
    }
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
          width: 440,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 8, color: "#333" }}>
          Reset Password
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: 18,
            fontSize: 13,
            color: "#666",
          }}
        >
          Buat password baru untuk akun kamu.
        </p>

        {!token && (
          <div
            style={{
              background: "#fff7e6",
              color: "#8a5a00",
              padding: 10,
              borderRadius: 6,
              marginBottom: 12,
              fontSize: 13,
            }}
          >
            Token tidak ada. Pastikan kamu membuka link reset dari email.
          </div>
        )}

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
              Role akun
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
          <div style={{ marginBottom: 14 }}>
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
              autoComplete="email"
            />
          </div>

          {/* Password Baru */}
          <div style={{ marginBottom: 14 }}>
            <label
              style={{
                display: "block",
                marginBottom: 4,
                fontSize: 13,
                color: "#444",
              }}
            >
              Password Baru
            </label>

            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 42px 9px 9px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  fontSize: 14,
                }}
                autoComplete="new-password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={eyeBtnStyle}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                title={showPassword ? "Sembunyikan" : "Tampilkan"}
              >
                {showPassword ? eyeSvg : eyeOffSvg}
              </button>
            </div>
          </div>

          {/* Konfirmasi Password */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: "block",
                marginBottom: 4,
                fontSize: 13,
                color: "#444",
              }}
            >
              Konfirmasi Password
            </label>

            <div style={{ position: "relative" }}>
              <input
                type={showConfirm ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 42px 9px 9px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  fontSize: 14,
                }}
                autoComplete="new-password"
              />

              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                style={eyeBtnStyle}
                aria-label={
                  showConfirm ? "Sembunyikan konfirmasi password" : "Tampilkan konfirmasi password"
                }
                title={showConfirm ? "Sembunyikan" : "Tampilkan"}
              >
                {showConfirm ? eyeSvg : eyeOffSvg}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !token}
            style={{
              width: "100%",
              padding: 10,
              background: "#3b5d50",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: loading || !token ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: 14,
              opacity: loading || !token ? 0.8 : 1,
            }}
          >
            {loading ? "Menyimpan..." : "Simpan Password Baru"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
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
      </div>
    </div>
  );
}

/* =========================
   Icon & Styles
========================= */

const eyeBtnStyle = {
  position: "absolute",
  right: 8,
  top: "50%",
  transform: "translateY(-50%)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  width: 28,
  height: 28,
  display: "grid",
  placeItems: "center",
};

const eyeSvg = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"
      stroke="#666"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="3" stroke="#666" strokeWidth="2" />
  </svg>
);

const eyeOffSvg = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 3L21 21" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M9.9 4.24A10.94 10.94 0 0121 12
         10.94 10.94 0 0112 19
         10.94 10.94 0 015.1 16.76"
      stroke="#666"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
