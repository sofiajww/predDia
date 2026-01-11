// src/pages/Register.jsx
import React, { useState } from "react";
import api from "../api"; // axios instance

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await api.post("/register", form);

      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "/login";
    } catch (error) {
      console.log("REGISTER ERROR:", error.response?.data);

      // 🔥 TAMPILKAN ERROR VALIDASI LARAVEL
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];
        setErrorMsg(firstError);
      } else {
        setErrorMsg(
          error.response?.data?.message || "Terjadi kesalahan saat mendaftar."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "80px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>

      {errorMsg && (
        <div
          style={{
            background: "#ffdddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            color: "#7a0b0b",
            fontSize: 13,
          }}
        >
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <label>Nama Lengkap</label>
        <input
          type="text"
          name="name"
          placeholder="Masukkan nama"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* EMAIL */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Masukkan email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
          autoComplete="email"
        />

        {/* PASSWORD */}
        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Masukkan password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ ...inputStyle, paddingRight: "42px" }}
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

        {/* PASSWORD CONFIRM */}
        <label>Konfirmasi Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showConfirm ? "text" : "password"}
            name="password_confirmation"
            placeholder="Ulangi password"
            value={form.password_confirmation}
            onChange={handleChange}
            required
            style={{ ...inputStyle, paddingRight: "42px" }}
            autoComplete="new-password"
          />

          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            style={eyeBtnStyle}
            aria-label={
              showConfirm
                ? "Sembunyikan konfirmasi password"
                : "Tampilkan konfirmasi password"
            }
            title={showConfirm ? "Sembunyikan" : "Tampilkan"}
          >
            {showConfirm ? eyeSvg : eyeOffSvg}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#3b5d50",
            color: "white",
            border: "none",
            marginTop: "15px",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.85 : 1,
            fontWeight: 700,
          }}
        >
          {loading ? "Mendaftar..." : "Daftar"}
        </button>
      </form>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Sudah punya akun? <a href="/login">Login</a>
      </p>
    </div>
  );
}

/* =========================
   Styles & Icons (GLOBAL)
========================= */

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #aaa",
  borderRadius: "5px",
  fontSize: 14,
};

const eyeBtnStyle = {
  position: "absolute",
  right: 10,
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
