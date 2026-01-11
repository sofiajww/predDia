// src/pages/Login.jsx
import React, { useState } from "react";
import api from "../api";

export default function Login() {
  const [role, setRole] = useState("user"); // 'user' atau 'admin'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {

    const endpoint = role === "admin" ? "/admin/api/login" : "/login";

    const res = await api.post(
    role === "admin" ? "/admin/login" : "/login",
      { email, password }
    );


    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", role);

    window.location.href = role === "admin" ? "/admin" : "/dashboard";
  } catch (err) {
    console.error(err.response?.data || err.message);
    setError(err.response?.data?.message || "Email atau password salah.");
  }
};
  // helper buat bikin link forgot password dengan query
  const forgotPasswordHref = `/forgot-password?role=${encodeURIComponent(
    role
  )}&email=${encodeURIComponent(email || "")}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 32,
          borderRadius: 12,
          width: 380,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: 8,
            color: "#333",
          }}
        >
          Login
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: 24,
            fontSize: 13,
            color: "#666",
          }}
        >
          Pilih role, lalu masukkan email dan password Anda.
        </p>

        {error && (
          <div
            style={{
              background: "#ffe5e5",
              color: "#b00020",
              padding: 10,
              borderRadius: 6,
              marginBottom: 16,
              fontSize: 13,
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
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
              Login sebagai
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

          {/* Password + ikon mata */}
          <div style={{ marginBottom: 10 }}>
            <label
              style={{
                display: "block",
                marginBottom: 4,
                fontSize: 13,
                color: "#444",
              }}
            >
              Password
            </label>

            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 36px 9px 9px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  fontSize: 14,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              >
                {showPassword ? (
                  /* EYE (2D) = sedang terlihat */
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"
                      stroke="#666"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="12" cy="12" r="3" stroke="#666" strokeWidth="2" />
                  </svg>
                ) : (
                  /* EYE OFF (2D) = sedang tersembunyi */
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 3L21 21"
                      stroke="#666"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.6 10.6A3 3 0 0013.4 13.4"
                      stroke="#666"
                      strokeWidth="2"
                    />
                    <path
                      d="M9.9 4.24A10.94 10.94 0 0121 12
                         10.94 10.94 0 0112 19
                         10.94 10.94 0 015.1 16.76"
                      stroke="#666"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot password (baru) */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 16,
            }}
          >
            <a
              href={forgotPasswordHref}
              style={{
                fontSize: 13,
                color: "#3b5d50",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Lupa password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "#3b5d50",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Login
          </button>

          {/* ✅ TAMBAHAN: Kembali ke Beranda (Publik) */}
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
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
            Kembali ke Beranda
          </button>

          <p
            style={{
              marginTop: 12,
              fontSize: 13,
              textAlign: "center",
              color: "#666",
            }}
          >
            Belum punya akun?{" "}
            <a href="/register" style={{ color: "#3b5d50", fontWeight: 600 }}>
              Daftar di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
