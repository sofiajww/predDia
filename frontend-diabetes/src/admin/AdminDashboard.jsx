// src/admin/AdminDashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/**
 * ✅ Dashboard Admin (STATISTIK SAJA)
 * - Kelola Website + CMS + Site Settings DIHAPUS
 * - Tampilan statistik tetap sama
 */
const THEME = {
  primary: "#3b5d50",
  soft: "#e9f2ee",
  border: "#d8e6df",
  text: "#0f172a",
  muted: "#64748b",
  white: "#fff",
  danger: "#ef4444",
};

const PIE_COLORS = [THEME.primary, THEME.danger];

// ✅ normalizer supaya "Non Diabetes" / "Non-Diabetes" kebaca sama
const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

export default function AdminDashboard() {
  // =========================
  // ✅ REAL DATA (from backend)
  // =========================
  const [dashLoading, setDashLoading] = useState(true);
  const [dashErr, setDashErr] = useState("");

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPredictions, setTotalPredictions] = useState(0);
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);
  const [monthlyRecap, setMonthlyRecap] = useState([
    { m: "Jan", v: 0 },
    { m: "Feb", v: 0 },
    { m: "Mar", v: 0 },
    { m: "Apr", v: 0 },
    { m: "May", v: 0 },
    { m: "Jun", v: 0 },
    { m: "Jul", v: 0 },
    { m: "Aug", v: 0 },
    { m: "Sep", v: 0 },
    { m: "Oct", v: 0 },
    { m: "Nov", v: 0 },
    { m: "Dec", v: 0 },
  ]);

  // ✅ FIX: ambil token admin yang benar
  // - prioritas: admin_token
  // - fallback: token (kalau dulu kamu simpan di key "token")
  const authHeaders = () => {
    const token =
      localStorage.getItem("admin_token") || localStorage.getItem("token");
    return token
      ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
      : { Accept: "application/json" };
  };

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getPredDate = (p) => {
    const iso =
      p?.tanggal_prediksi ?? p?.created_at ?? p?.updated_at ?? p?.tanggal ?? null;
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d;
  };

  // ✅ ambil string hasil dari beberapa kemungkinan field backend
  const getResultString = (p) =>
    norm(p?.hasil ?? p?.result ?? p?.prediksi ?? p?.status ?? p?.label ?? "");

  // ✅ Deteksi NEGATIVE dulu (paling penting: "non-diabetes" mengandung kata diabetes)
  const isNegative = (p) => {
    const r = getResultString(p);

    // paling rawan: "Negative (Non-Diabetes)" / "Non Diabetes"
    if (r.includes("non-diabetes") || r.includes("non diabetes")) return true;

    // variasi label negatif lain
    const negWords = [
      "negatif",
      "negative",
      "tidak diabetes",
      "bukan diabetes",
      "no diabetes",
      "not diabetes",
      "normal",
      "rendah",
      "risiko rendah",
      "low risk",
    ];
    return negWords.some((w) => r.includes(w));
  };

  // ✅ Deteksi POSITIVE (tetap aman karena sudah diblok oleh isNegative)
  const isPositive = (p) => {
    const r = getResultString(p);
    if (isNegative(p)) return false;

    const posWords = [
      "positif",
      "positive",
      "diabetes",
      "berisiko",
      "risiko tinggi",
      "high risk",
      "tinggi",
      "pre-diabetes",
      "prediabetes",
    ];
    return posWords.some((w) => r.includes(w));
  };

  const loadDashboardStats = async () => {
    setDashLoading(true);
    setDashErr("");

    try {
      // ✅ tetap pake UI yang sama, hanya betulin token header
      const [usersRes, predRes] = await Promise.all([
        api.get("/admin/pengguna", { headers: authHeaders() }),
        api.get("/admin/prediksi", { headers: authHeaders() }),
      ]);

      const users = usersRes?.data || [];
      const preds = predRes?.data || [];

      setTotalUsers(users.length);
      setTotalPredictions(preds.length);

      // ✅ hitung pos/neg dengan aturan baru
      const pos = preds.filter((p) => isPositive(p)).length;
      const neg = preds.filter((p) => isNegative(p)).length;

      setPositiveCount(pos);
      setNegativeCount(neg);

      const monthBuckets = Array.from({ length: 12 }, () => 0);
      preds.forEach((p) => {
        const d = getPredDate(p);
        if (!d) return;
        monthBuckets[d.getMonth()] += 1;
      });

      setMonthlyRecap(monthBuckets.map((v, i) => ({ m: monthNames[i], v })));
    } catch (e) {
      // ✅ kalau 401, berarti token tidak kebaca/expired → bersihin token admin
      if (e?.response?.status === 401) {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("token");
        // tidak mengubah UI: hanya memastikan user balik login admin
        setDashErr("Unauthenticated.");
        return;
      }

      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        e?.message ||
        "Gagal memuat statistik dashboard.";
      setDashErr(msg);
    } finally {
      setDashLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ====== CARD STAT (pakai data real) ======
  const statCards = useMemo(() => {
    return [
      {
        title: "Total Prediksi",
        value: String(totalPredictions),
        note: "Realtime dari backend",
        accent: THEME.primary,
        icon: "📊",
      },
      {
        title: "Total User",
        value: String(totalUsers),
        note: "Realtime dari backend",
        accent: THEME.primary,
        icon: "👥",
      },
      {
        title: "Positive",
        value: String(positiveCount),
        note: "Berdasarkan hasil prediksi",
        accent: THEME.danger,
        icon: "🔴",
      },
      {
        title: "Negative",
        value: String(negativeCount),
        note: "Berdasarkan hasil prediksi",
        accent: THEME.primary,
        icon: "🟢",
      },
    ];
  }, [totalPredictions, totalUsers, positiveCount, negativeCount]);

  const pieData = useMemo(() => {
    return [
      { name: "Negative (Non-Diabetes)", value: negativeCount },
      { name: "Positive (Diabetes)", value: positiveCount },
    ];
  }, [negativeCount, positiveCount]);

  const total = pieData.reduce((a, b) => a + b.value, 0);
  const pct = (val) => (total ? Math.round((val / total) * 100) : 0);

  return (
    <AdminLayout>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 12,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontWeight: 900 }}></h1>
          <div style={{ color: THEME.muted, marginTop: 6 }}>
            Home /{" "}
            <span style={{ color: THEME.primary, fontWeight: 900 }}>
              Dashboard
            </span>
          </div>
        </div>

        {/* ✅ refresh stats biar realtime */}
        <button
          onClick={loadDashboardStats}
          disabled={dashLoading}
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            background: THEME.white,
            color: THEME.primary,
            border: `1px solid ${THEME.border}`,
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          {dashLoading ? "Memuat..." : "Refresh"}
        </button>
      </div>

      {/* STATISTIK */}
      {dashErr ? (
        <div style={{ ...styles.alert, ...styles.alertError }}>{dashErr}</div>
      ) : null}

      <div style={styles.mobileScrollX}>
  <div style={styles.grid4}>
    {statCards.map((c) => (
      <div key={c.title} style={styles.card(THEME)}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={styles.label}>{c.title.toUpperCase()}</div>
            <div style={styles.value(THEME)}>{dashLoading ? "…" : c.value}</div>
            <div style={styles.note(THEME)}>{c.note}</div>
          </div>
          <div style={styles.iconBox(THEME)}>{c.icon}</div>
        </div>
        <div
          style={{
            height: 4,
            background: c.accent,
            borderRadius: 999,
            width: "42%",
            marginTop: 12,
          }}
        />
      </div>
    ))}
  </div>
</div>

      <div style={styles.mobileScrollX}></div>
      <div style={styles.grid2}>
        <div style={styles.card(THEME)}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div>
              <div style={{ fontWeight: 900 }}>Monthly Recap Report</div>
              <div style={{ fontSize: 12, color: THEME.muted, marginTop: 4 }}>
                Tren prediksi per bulan (realtime)
              </div>
            </div>
            <div style={styles.badge(THEME)}>Month</div>
          </div>

          <div style={{ height: 280, marginTop: 10 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyRecap}>
                <XAxis dataKey="m" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area
                  dataKey="v"
                  stroke={THEME.primary}
                  fill={THEME.soft}
                  strokeWidth={2}
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={styles.card(THEME)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 900 }}>Hasil Prediksi</div>
              <div style={{ fontSize: 12, color: THEME.muted, marginTop: 4 }}>
                Positive vs Negative
              </div>
            </div>
            <div style={styles.badge(THEME)}>Summary</div>
          </div>

          <div style={{ height: 160, marginTop: 8 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={3}
                >
                  {pieData.map((_, idx) => (
                    <Cell key={idx} fill={PIE_COLORS[idx]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{ marginTop: 8, display: "grid", gap: 10 }}>
            {pieData.map((p, idx) => (
              <div key={p.name}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ fontWeight: 900, color: THEME.text }}>{p.name}</span>
                  <span style={{ color: THEME.muted }}>
                    {p.value} • {pct(p.value)}%
                  </span>
                </div>
                <div style={styles.progressTrack(THEME)}>
                  <div
                    style={{
                      width: `${pct(p.value)}%`,
                      height: "100%",
                      borderRadius: 999,
                      background: PIE_COLORS[idx],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

const styles = {
  mobileScrollX: {
    width: "100%",
    maxWidth: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
    marginTop: 16,
    minWidth: 720, // ✅ PAKSA MELEBAR BIAR MOBILE BISA GESER
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 16,
    marginTop: 16,
    minWidth: 720, // ✅ PAKSA MELEBAR BIAR MOBILE BISA GESER
  },

  card: (T) => ({
    background: T.white,
    border: `1px solid ${T.border}`,
    borderRadius: 14,
    padding: 18,
    boxShadow: "0 2px 10px rgba(0,0,0,.04)",
    minWidth: 0,
  }),

  label: { fontSize: 11, color: "#94a3b8", fontWeight: 900, letterSpacing: 0.5 },
  value: (T) => ({ fontSize: 28, fontWeight: 900, marginTop: 8, color: T.text }),
  note: (T) => ({ fontSize: 12, color: T.muted, marginTop: 6 }),

  iconBox: (T) => ({
    width: 44,
    height: 44,
    borderRadius: 14,
    background: T.soft,
    display: "grid",
    placeItems: "center",
    fontSize: 20,
    border: `1px solid ${T.border}`,
  }),

  badge: (T) => ({
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 10,
    border: `1px solid ${T.border}`,
    background: T.soft,
    color: T.primary,
    fontWeight: 900,
  }),

  progressTrack: (T) => ({
    height: 8,
    background: T.soft,
    borderRadius: 999,
    marginTop: 6,
    border: `1px solid ${T.border}`,
  }),

  alert: {
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 13,
  },
  alertError: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#991b1b",
  },
};
