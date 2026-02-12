// src/pages/Dashboard.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import api, { flaskApi } from "../api";

// Komponen Info/Tooltip
function Info({ text }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <span
      ref={ref}
      style={{
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        marginLeft: 6,
        userSelect: "none",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Info"
        style={{
          width: 18,
          height: 18,
          borderRadius: 999,
          border: "1px solid #3b5d50",
          background: "#eaf3ef",
          color: "#3b5d50",
          fontWeight: 800,
          fontSize: 12,
          lineHeight: "16px",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          padding: 0,
        }}
      >
        i
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 0,
            zIndex: 9999,
            width: 240,
            background: "#ffffff",
            border: "1px solid #dfe6e2",
            borderRadius: 10,
            padding: "10px 12px",
            boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
            fontSize: 12.5,
            color: "#333",
          }}
        >
          {text}
          <div
            style={{
              position: "absolute",
              top: -6,
              left: 10,
              width: 10,
              height: 10,
              background: "#fff",
              borderLeft: "1px solid #dfe6e2",
              borderTop: "1px solid #dfe6e2",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}
    </span>
  );
}

// Helper untuk Format Tanggal (Indonesia)
const formatTanggal = (isoString) => {
  if (!isoString) return "-";
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const thStyle = {
  textAlign: "left",
  padding: "12px 16px", // Padding lebih lega
  borderBottom: "2px solid #eee",
  whiteSpace: "nowrap",
  color: "#666",
  fontSize: "13px",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #f0f0f0",
  whiteSpace: "nowrap",
  fontSize: "14px",
  color: "#333",
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState("id");

  // RESPONSIVE helper
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handleChange = (e) => setIsMobile(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", handleChange);
    else mq.addListener(handleChange);

    return () => {
      if (mq.removeEventListener)
        mq.removeEventListener("change", handleChange);
      else mq.removeListener(handleChange);
    };
  }, []);

  const [form, setForm] = useState({
    Pregnancies: "",
    Glucose: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [loading, setLoading] = useState(false);
  const [hasilTerakhir, setHasilTerakhir] = useState(null);
  const [error, setError] = useState("");
  const [riwayat, setRiwayat] = useState([]);

  // TEXT TERJEMAHAN
  const pesanPositif = useMemo(
    () => ({
      id: "Hasil menunjukkan Anda berisiko diabetes. Sebaiknya lakukan pemeriksaan lanjutan dan konsultasi dengan dokter atau fasilitas kesehatan terdekat.",
      en: "Your result indicates a risk of diabetes. It’s recommended to get further testing and consult a doctor or a healthcare facility nearby.",
    }),
    []
  );

  const pesanNegatif = useMemo(
    () => ({
      id: "Hasil menunjukkan risiko diabetes rendah. Tetap pertahankan pola hidup sehat dan lakukan pemeriksaan berkala bila diperlukan.",
      en: "The result indicates a low risk of diabetes. Continue maintaining a healthy lifestyle and undergo regular check-ups if necessary.",
    }),
    []
  );

  const labelText = useMemo(
    () => ({
      id: {
        title: "Dashboard Prediksi Diabetes",
        subtitle: "Form klasifikasi & riwayat prediksi",
        formTitle: "Form Klasifikasi Diabetes",
        riwayat: "Riwayat Prediksi",
        prediksiBtn: "Prediksi",
        hasilLabel: "Hasil prediksi: ",
        logout: "Logout",
      },
      en: {
        title: "Diabetes Prediction Dashboard",
        subtitle: "Classification form & prediction history",
        formTitle: "Diabetes Classification Form",
        riwayat: "Prediction History",
        prediksiBtn: "Predict",
        hasilLabel: "Prediction result: ",
        logout: "Logout",
      },
    }),
    []
  );

  // META DATA FIELD
const fieldMeta = useMemo(
  () => ({
    Pregnancies: {
      label: { id: "Jumlah Kehamilan", en: "Pregnancies" },
      help:
        lang === "id"
          ? "Jumlah total kehamilan yang pernah dialami. Contoh: 0 (belum pernah hamil / pria), 1–3 (umum)."
          : "Total number of pregnancies. Example: 0 (never pregnant / male), 1–3 (common).",
    },

    Glucose: {
      label: { id: "Glukosa", en: "Glucose" },
      help:
        lang === "id"
          ? "Kadar glukosa darah puasa (mg/dL). Normal berkisar 70–99. Contoh: 85."
          : "Fasting blood glucose level (mg/dL). Normal range is 70–99. Example: 85.",
    },

    BMI: {
      label: { id: "BMI", en: "BMI" },
      help:
        lang === "id"
          ? "Indeks massa tubuh. Normal 18,5–24,9. Contoh: 22,5."
          : "Body Mass Index. Normal range is 18.5–24.9. Example: 22.5.",
    },

    DiabetesPedigreeFunction: {
      label: { id: "DPF", en: "Diabetes Pedigree Function" },
      help:
        lang === "id"
          ? "Skor risiko diabetes berdasarkan riwayat keluarga. Umumnya 0,1–0,5. Contoh: 0,35."
          : "Diabetes risk score based on family history. Commonly 0.1–0.5. Example: 0.35.",
    },

    Age: {
      label: { id: "Usia", en: "Age" },
      help:
        lang === "id"
          ? "Usia dalam tahun. Contoh: 30."
          : "Age in years. Example: 30.",
    },
  }),
  [lang]
);


  const loadRiwayat = async () => {
    try {
      const res = await api.get("/prediksi/riwayat");
      // Sort agar yang terbaru ada di atas (descending)
      const dataSorted = Array.isArray(res.data.data) 
        ? res.data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        : [];
      setRiwayat(dataSorted);
    } catch (err) {
      console.error("Gagal load riwayat:", err);
      setRiwayat([]);
    }
  };

  useEffect(() => {
    loadRiwayat();
    const loadUser = async () => {
      try {
        const res = await api.get("/user");
        setUser(res.data);
      } catch (err) {
        console.error("Gagal load user:", err);
      }
    };
    loadUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setHasilTerakhir(null);

    const dataInput = {
      
      Pregnancies: Number(form.Pregnancies),
      Glucose: Number(form.Glucose),
      BMI: Number(form.BMI),
      DiabetesPedigreeFunction: Number(form.DiabetesPedigreeFunction),
      Age: Number(form.Age),
    };

    try {
      // 1. Prediksi ke Python
      const res = await flaskApi.post("/predict", dataInput);
      
      const rawScore = res.data?.prediction_score; 
      const rawText = res.data?.prediction; 
      let kategori = 0;

      if (rawScore === 1) kategori = 1;
      else if (rawScore === 0) kategori = 0;
      else {
        const rawStr = String(rawText || "").toLowerCase();
        if (rawStr.includes("positif") || rawStr.includes("1")) kategori = 1;
      }

      // 2. Simpan ke Laravel
      const dataUntukDisimpan = {
        ...dataInput, 
        hasil: kategori === 1 ? "Positif Diabetes" : "Negatif Diabetes" 
      };

      await api.post("/prediksi", dataUntukDisimpan);

      // 3. Update UI
      setHasilTerakhir(kategori);
      loadRiwayat(); 

    } catch (err) {
      console.error("ERROR:", err);
      const errorMsg = err.response?.data?.message || "Terjadi kesalahan koneksi";
      setError(lang === "id" ? `Gagal: ${errorMsg}` : `Failed: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  const pesanHasil = hasilTerakhir === null ? "" : hasilTerakhir === 1 ? pesanPositif[lang] : pesanNegatif[lang];
  const labelHasil = hasilTerakhir === null ? "" : hasilTerakhir === 1 ? (lang === "id" ? "Positif Diabetes" : "Positive Diabetes") : (lang === "id" ? "Negatif Diabetes" : "Negative Diabetes");

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      {/* HEADER */}
      <header
        style={{
          background: "#3b5d50",
          color: "white",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 22 }}>{labelText[lang].title}</h2>
          <small style={{ opacity: 0.9 }}>{labelText[lang].subtitle}</small>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {user && (
            <span style={{ fontSize: 14 }}>
              {lang === "id" ? "Halo, " : "Hello, "}
              <strong>{user.name}</strong>
            </span>
          )}

          <button
            type="button"
            onClick={() => setLang((prev) => (prev === "id" ? "en" : "id"))}
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "white",
              borderRadius: 20,
              padding: "6px 14px",
              border: "1px solid rgba(255,255,255,0.4)",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 12
            }}
          >
            {lang === "id" ? "EN" : "ID"}
          </button>

          <button
            onClick={handleLogout}
            style={{
              background: "#d32f2f",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: "500"
            }}
          >
            {labelText[lang].logout}
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main style={{ padding: 32 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.5fr 2fr",
            gap: 24,
            minWidth: 0,
          }}
        >
          {/* FORM */}
          <section
            style={{
              background: "white",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              minWidth: 0,
            }}
          >
            <h3 style={{ marginTop: 0, color: "#2c3e50" }}>{labelText[lang].formTitle}</h3>

            {error && (
              <div
                style={{
                  background: "#fff3cd",
                  borderLeft: "4px solid #ffc107",
                  padding: "12px",
                  borderRadius: 4,
                  color: "#856404",
                  marginBottom: 16,
                  fontSize: 13,
                }}
              >
                {error}
              </div>
            )}

            {hasilTerakhir !== null && (
              <div
                style={{
                  background: hasilTerakhir ? "#ffebee" : "#e8f5e9",
                  color: hasilTerakhir ? "#c62828" : "#2e7d32",
                  padding: 16,
                  borderRadius: 8,
                  marginBottom: 20,
                  border: hasilTerakhir ? "1px solid #ffcdd2" : "1px solid #c8e6c9",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{hasilTerakhir ? "⚠️" : "✅"}</span>
                    <b style={{ fontSize: 16 }}>
                    {labelText[lang].hasilLabel}
                    {labelHasil}
                    </b>
                </div>
                <div style={{ fontSize: 14, lineHeight: "1.5" }}>{pesanHasil}</div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 16,
                }}
              >
                {Object.keys(form).map((key) => (
                  <div key={key}>
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: "600",
                        color: "#555",
                        marginBottom: 6,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {fieldMeta[key].label[lang]}
                      <Info text={fieldMeta[key].help} />
                    </label>

                    <input
                      name={key}
                      type="number"
                      value={form[key]}
                      onChange={handleChange}
                      required
                      placeholder="0"
                      onKeyDown={(e) => {
                        if (["e", "E", "+", "-"].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: 8,
                        fontSize: 14,
                        transition: "border 0.2s",
                        outline: "none"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#3b5d50"}
                      onBlur={(e) => e.target.style.borderColor = "#ddd"}
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 24,
                  width: "100%",
                  padding: "12px",
                  background: loading ? "#9aaead" : "#3b5d50",
                  color: "white",
                  borderRadius: 8,
                  fontWeight: "bold",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: 15,
                  boxShadow: "0 4px 6px rgba(59, 93, 80, 0.2)"
                }}
              >
                {loading
                  ? lang === "id"
                    ? "Sedang Memproses..."
                    : "Processing..."
                  : labelText[lang].prediksiBtn}
              </button>
            </form>
          </section>

          {/* RIWAYAT */}
          <section
            style={{
              background: "white",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              height: "fit-content"
            }}
          >
            <h3 style={{ marginTop: 0, color: "#2c3e50" }}>{labelText[lang].riwayat}</h3>

            {riwayat.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>📂</div>
                  {lang === "id" ? "Belum ada riwayat prediksi." : "No prediction history yet."}
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  minWidth: 0,
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    minWidth: 700,
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr style={{ background: "#f8f9fa" }}>
                      <th style={thStyle}>Tanggal</th>
                      <th style={thStyle}>Hasil</th>
                      <th style={thStyle}>Preg</th>
                      <th style={thStyle}>Gluc</th>
                      <th style={thStyle}>BMI</th>
                      <th style={thStyle}>DPF</th>
                      <th style={thStyle}>Age</th>
                    </tr>
                  </thead>

                  <tbody>
                    {riwayat.map((r) => {
                        // LOGIKA STYLING WARNA
                        const isPositif = String(r.hasil).toLowerCase().includes("positif");
                        
                        // Style Badge
                        const badgeStyle = {
                            display: "inline-block",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            border: isPositif ? "1px solid #ffcdd2" : "1px solid #c8e6c9",
                            background: isPositif ? "#ffebee" : "#e8f5e9",
                            color: isPositif ? "#c62828" : "#2e7d32"
                        };

                        return (
                            <tr key={r.id} style={{ transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background = "#fafafa"} onMouseOut={e => e.currentTarget.style.background = "white"}>
                                <td style={tdStyle}>
                                    {/* Panggil fungsi format tanggal di sini */}
                                    {formatTanggal(r.created_at)}
                                </td>
                                <td style={tdStyle}>
                                    <span style={badgeStyle}>
                                        {r.hasil}
                                    </span>
                                </td>
                                <td style={tdStyle}>{r.data_kesehatan?.Pregnancies}</td>
                                <td style={tdStyle}>
                                    <strong style={{ color: r.data_kesehatan?.Glucose > 140 ? "#e67e22" : "inherit"}}>
                                        {r.data_kesehatan?.Glucose}
                                    </strong>
                                </td>
                                <td style={tdStyle}>{r.data_kesehatan?.BMI}</td>
                                <td style={tdStyle}>{r.data_kesehatan?.DiabetesPedigreeFunction}</td>
                                <td style={tdStyle}>{r.data_kesehatan?.Age}</td>
                            </tr>
                        );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}