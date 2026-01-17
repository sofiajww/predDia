// src/pages/Dashboard.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import api, { flaskApi } from "../api";

// Komponen kecil untuk ikon info + tooltip (CLICK TO TOGGLE)
function Info({ text }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // tutup tooltip kalau klik di luar
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

const thStyle = {
  textAlign: "left",
  padding: "6px 10px",
  borderBottom: "1px solid #ddd",
  whiteSpace: "nowrap",
};

const tdStyle = {
  padding: "6px 10px",
  borderBottom: "1px solid #eee",
  whiteSpace: "nowrap",
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
      if (mq.removeEventListener) mq.removeEventListener("change", handleChange);
      else mq.removeListener(handleChange);
    };
  }, []);

  const [form, setForm] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [loading, setLoading] = useState(false);
  const [hasilTerakhir, setHasilTerakhir] = useState(null);
  const [error, setError] = useState("");
  const [riwayat, setRiwayat] = useState([]);

  // ============================
  // TEXT TERJEMAHAN
  // ============================
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

  // Penjelasan tooltip
  const fieldMeta = useMemo(
    () => ({
      Pregnancies: {
        label: { id: "Jumlah Kehamilan", en: "Pregnancies" },
        help:
          lang === "id"
            ? "Jumlah kehamilan. Jika laki-laki isi 0."
            : "Number of pregnancies. If male, fill 0.",
      },
      Glucose: {
        label: { id: "Glukosa", en: "Glucose" },
        help:
          lang === "id"
            ? "Kadar glukosa darah puasa (mg/dL)."
            : "Fasting glucose level (mg/dL).",
      },
      BloodPressure: {
        label: { id: "Tekanan Darah", en: "Blood Pressure" },
        help:
          lang === "id"
            ? "Tekanan darah diastolik (mmHg)."
            : "Diastolic blood pressure (mmHg).",
      },
      SkinThickness: {
        label: { id: "Ketebalan Kulit", en: "Skin Thickness" },
        help:
          lang === "id"
            ? "Ketebalan lipatan kulit triceps (mm)."
            : "Triceps skin fold thickness (mm).",
      },
      Insulin: {
        label: { id: "Insulin", en: "Insulin" },
        help:
          lang === "id"
            ? "Konsentrasi insulin (mu U/ml)."
            : "Insulin concentration (mu U/ml).",
      },
      BMI: {
        label: { id: "BMI", en: "BMI" },
        help: lang === "id" ? "Body Mass Index." : "Body Mass Index.",
      },
      DiabetesPedigreeFunction: {
        label: { id: "DPF", en: "Diabetes Pedigree Function" },
        help:
          lang === "id"
            ? "Indeks risiko berdasarkan riwayat keluarga."
            : "Risk index based on family history.",
      },
      Age: {
        label: { id: "Usia", en: "Age" },
        help: lang === "id" ? "Usia dalam tahun." : "Age in years.",
      },
    }),
    [lang]
  );

  const loadRiwayat = async () => {
    try {
      const res = await api.get("/prediksi/riwayat");
      if (res.data && Array.isArray(res.data.data)) {
        setRiwayat(res.data.data);
      } else {
        setRiwayat([]);
      }
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

  try {
    // ✅ PREDIKSI KE FLASK (bukan ke Laravel)
    const res = await flaskApi.post("/predict", {
      Pregnancies: Number(form.Pregnancies),
      Glucose: Number(form.Glucose),
      BloodPressure: Number(form.BloodPressure),
      SkinThickness: Number(form.SkinThickness),
      Insulin: Number(form.Insulin),
      BMI: Number(form.BMI),
      DiabetesPedigreeFunction: Number(form.DiabetesPedigreeFunction),
      Age: Number(form.Age),
    });

    const raw = res.data?.hasil ?? res.data?.prediction;
    const rawStr = String(raw).toLowerCase();

    let kategori = 0;
    if (raw === 1 || rawStr.includes("positif")) kategori = 1;

    setHasilTerakhir(kategori);

    // ✅ riwayat tetap ambil dari Laravel
    loadRiwayat();
  } catch (err) {
    console.error("ERROR:", err.response?.data);
    setError(
      lang === "id"
        ? "Terjadi kesalahan saat prediksi."
        : "An error occurred during prediction."
    );
  } finally {
    setLoading(false);
  }
};


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  const pesanHasil =
    hasilTerakhir === null
      ? ""
      : hasilTerakhir === 1
      ? pesanPositif[lang]
      : pesanNegatif[lang];

  const labelHasil =
    hasilTerakhir === null
      ? ""
      : hasilTerakhir === 1
      ? lang === "id"
        ? "Positif Diabetes"
        : "Positive Diabetes"
      : lang === "id"
      ? "Negatif Diabetes"
      : "Negative Diabetes";

  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* HEADER */}
      <header
        style={{
          background: "#3b5d50",
          color: "white",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>{labelText[lang].title}</h2>
          <small>{labelText[lang].subtitle}</small>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {user && (
            <span style={{ fontSize: 14 }}>
              {lang === "id" ? "Selamat datang, " : "Welcome, "}
              <strong>{user.name}</strong>
            </span>
          )}

          <button
            type="button"
            onClick={() => setLang((prev) => (prev === "id" ? "en" : "id"))}
            style={{
              background: "white",
              color: "#3b5d50",
              borderRadius: 20,
              padding: "6px 14px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {lang === "id" ? "EN" : "ID"}
          </button>

          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: 20,
              padding: "6px 14px",
              cursor: "pointer",
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
            minWidth: 0, // ✅ KUNCI: biar child grid bisa mengecil
          }}
        >
          {/* FORM */}
          <section
            style={{
              background: "white",
              padding: 24,
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              minWidth: 0, // ✅ aman
            }}
          >
            <h3>{labelText[lang].formTitle}</h3>

            {error && (
              <div
                style={{
                  background: "#fff3cd",
                  border: "1px solid #ffeeba",
                  padding: 10,
                  borderRadius: 8,
                  color: "#7a5b00",
                  marginBottom: 12,
                  fontSize: 13,
                }}
              >
                {error}
              </div>
            )}

            {hasilTerakhir !== null && (
              <div
                style={{
                  background: hasilTerakhir ? "#ffe5e5" : "#e5f7e5",
                  color: hasilTerakhir ? "#b00020" : "#136f2d",
                  padding: 12,
                  borderRadius: 6,
                  marginBottom: 12,
                }}
              >
                <b>
                  {labelText[lang].hasilLabel}
                  {labelHasil}
                </b>

                <div style={{ marginTop: 6 }}>{pesanHasil}</div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 12,
                }}
              >
                {Object.keys(form).map((key) => (
                  <div key={key}>
                    <label
                      style={{
                        fontSize: 13,
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
                      style={{
                        width: "100%",
                        padding: 8,
                        border: "1px solid #ccc",
                        borderRadius: 6,
                        fontSize: 13,
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 20,
                  width: "100%",
                  padding: 10,
                  background: "#3b5d50",
                  color: "white",
                  borderRadius: 6,
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {loading
                  ? lang === "id"
                    ? "Memproses..."
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
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              minWidth: 0, // ✅ KUNCI: biar scroll di dalamnya bisa jalan
            }}
          >
            <h3>{labelText[lang].riwayat}</h3>

            {riwayat.length === 0 ? (
              <p>{lang === "id" ? "Tidak ada riwayat." : "No history yet."}</p>
            ) : (
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  minWidth: 0, // ✅ KUNCI
                  overflowX: "auto",
                  overflowY: "hidden",
                  WebkitOverflowScrolling: "touch",
                  display: "block",
                  touchAction: "pan-x", // ✅ biar swipe kiri/kanan kebaca di HP
                  paddingBottom: 6,
                }}
              >
                <table
                  style={{
                    width: "max-content",
                    minWidth: 700,
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
  <tr>
    <th style={thStyle}>Tanggal</th>
    <th style={thStyle}>Hasil</th>
    <th style={thStyle}>Preg</th>
    <th style={thStyle}>Glucose</th>
    <th style={thStyle}>BP</th>
    <th style={thStyle}>Skin</th>
    <th style={thStyle}>Insulin</th>
    <th style={thStyle}>BMI</th>
    <th style={thStyle}>DPF</th>
    <th style={thStyle}>Age</th>
  </tr>
</thead>


                 <tbody>
  {Array.isArray(riwayat) && riwayat.length > 0 ? (
    riwayat.map((r) => (
      <tr key={r.id}>
        <td style={tdStyle}>{r.created_at}</td>
        <td style={tdStyle}>{r.hasil}</td>
        <td style={tdStyle}>{r.data_kesehatan?.Pregnancies}</td>
        <td style={tdStyle}>{r.data_kesehatan?.Glucose}</td>
        <td style={tdStyle}>{r.data_kesehatan?.BloodPressure}</td>
        <td style={tdStyle}>{r.data_kesehatan?.SkinThickness}</td>
        <td style={tdStyle}>{r.data_kesehatan?.Insulin}</td>
        <td style={tdStyle}>{r.data_kesehatan?.BMI}</td>
        <td style={tdStyle}>{r.data_kesehatan?.DiabetesPedigreeFunction}</td>
        <td style={tdStyle}>{r.data_kesehatan?.Age}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={10} style={{ textAlign: "center", padding: 12 }}>
        {lang === "id" ? "Tidak ada riwayat." : "No history yet."}
      </td>
    </tr>
  )}
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
