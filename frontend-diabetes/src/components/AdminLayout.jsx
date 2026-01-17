import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../api";

export default function AdminLayout({ children }) {
  const loc = useLocation();
  const [isMobile, setIsMobile] = useState(
  typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
);

useEffect(() => {
  const mq = window.matchMedia("(max-width: 768px)");
  const handler = (e) => setIsMobile(e.matches);

  if (mq.addEventListener) mq.addEventListener("change", handler);
  else mq.addListener(handler);

  return () => {
    if (mq.removeEventListener) mq.removeEventListener("change", handler);
    else mq.removeListener(handler);
  };
}, []);


  const menu = [
    { label: "Dashboard", to: "/admin", icon: "🏠" },
    { label: "Pengguna", to: "/admin/users", icon: "👥" },
    { label: "Prediksi", to: "/admin/predictions", icon: "📊" },
    { label: "Saran", to: "/admin/saran", icon: "💬" },
  ];

  const isActive = (to) =>
    to === "/admin" ? loc.pathname === "/admin" : loc.pathname.startsWith(to);

  const handleLogout = () => {
    const ok = window.confirm("Yakin ingin logout?");
    if (!ok) return;

    api
      .post("/logout")
      .catch(() => {
        // biar tidak muncul error cepat di console kalau backend balas 401/dll
      })
      .finally(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/login";
      });
  };

  return (
    <div
  style={{
    ...styles.app,
    gridTemplateColumns: isMobile ? "1fr" : "260px 1fr",
  }}
>
      {/* SIDEBAR */}
      <aside
  style={{
    ...styles.sidebar,

    // MOBILE OVERRIDE
    ...(isMobile
      ? {
          borderRight: "none",
          borderBottom: "1px solid #e5e7eb",
          padding: 16,
        }
      : {
          borderBottom: "none",
        }),
  }}
>

        <div style={styles.brand}>
          <div style={styles.brandBadge}>PD</div>
          <div>
            <div style={styles.brandName}>PredDia.</div>
            <div style={styles.brandSub}>Admin</div>
          </div>
        </div>

        <div style={styles.sectionTitle}>MENU</div>

        <nav style={{ display: "grid", gap: 6 }}>
          {menu.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              style={{
                ...styles.link,
                ...(isActive(m.to) ? styles.linkActive : {}),
              }}
            >
              <span>{m.icon}</span>
              <span>{m.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main style={styles.main}>
        {/* HEADER */}
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <h3 style={{ margin: 0 }}>Dashboard Admin</h3>
          </div>

          <div style={styles.headerRight}>
            <div style={styles.greeting}>
              Halo, <span style={{ fontWeight: 900 }}>Admin</span>
            </div>

            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <section
  style={{
    ...styles.content,
    minWidth: 0,
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
  }}
>
  {children}
</section>

      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    background: "#e9f2ee",
  },

  sidebar: {
    background: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    padding: 20,
  },

  brand: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    paddingBottom: 16,
    borderBottom: "1px solid #e5e7eb",
  },

  brandBadge: {
    width: 42,
    height: 42,
    borderRadius: 10,
    background: "#3b5d50",
    color: "white",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
  },

  brandName: { fontWeight: 900, color: "#1f2937" },
  brandSub: { fontSize: 12, color: "#6b7280" },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 12,
    fontWeight: 800,
    color: "#6b7280",
  },

  link: {
    display: "flex",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    textDecoration: "none",
    color: "#374151",
    fontWeight: 700,
  },

  linkActive: {
    background: "#e9f2ee",
    color: "#3b5d50",
  },

  main: {
    display: "grid",
    gridTemplateRows: "64px 1fr",
  },

  header: {
    background: "#3b5d50",
    color: "white",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  greeting: {
    fontSize: 14,
    opacity: 0.95,
    whiteSpace: "nowrap",
  },

  logoutBtn: {
    padding: "8px 12px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.12)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.25)",
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  content: {
    padding: 24,
  },
};
