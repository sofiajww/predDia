// src/pages/EducationPage.jsx
import React, { useMemo, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "../App.css";

export default function EducationPage() {
  const ctx = useOutletContext();
  const lang = ctx?.lang || "id";

  return (
    <div className="predia-page predia-edu">
      <main className="container py-4">
        {/* ✅ biar klik anchor gak ketutup navbar fixed */}
        <style>{`
          #prediabetes, #type1, #type2 { scroll-margin-top: 96px; }
        `}</style>

        {/* DISCLAIMER */}
        <div className="predia-alert">
          <b>{lang === "id" ? "Catatan:" : "Note:"}</b>{" "}
          {lang === "id"
            ? "Informasi di halaman ini bersifat edukatif dan tidak menggantikan konsultasi dengan dokter."
            : "This page is educational and does not replace medical consultation."}
        </div>

        {/* HERO */}
        <section className="edu-hero">
          <div className="edu-hero-wrap">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-5 edu-hero-left">
                <div className="edu-hero-inner">
                  <div className="edu-kicker">
                    {lang === "id" ? "EDUKASI DIABETES" : "DIABETES EDUCATION"}
                  </div>

                  <h1 className="edu-title">
                    {lang === "id"
                      ? "Pahami Diabetes, Mulai dari Hal Dasar"
                      : "Understand Diabetes, Start with the Basics"}
                  </h1>

                  <p className="edu-lead">
                    {lang === "id"
                      ? "Ringkasan singkat tentang apa itu diabetes, tipe-tipe diabetes, dan apa itu prediabetes sebagai alarm dini."
                      : "A quick overview of what diabetes is, its types, and prediabetes as an early warning."}
                  </p>

                  <div className="d-flex gap-2 flex-wrap mt-3">
                    <Link to="/login" className="btn btn-secondary">
                      {lang === "id" ? "Cek Risiko (Prediksi)" : "Check Risk (Prediction)"}
                    </Link>
                    <Link to="/lifestyle" className="btn btn-white-outline">
                      {lang === "id" ? "Baca Gaya Hidup Sehat" : "Healthy Lifestyle"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 edu-hero-right">
                <img
                  src="/images/edu.jpg"
                  alt="Diabetes education hero"
                  className="edu-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ICON CARDS */}
        <section className="edu-cats" style={{ paddingTop: 32, marginBottom: 32 }}>
          <div className="edu-cats-head">
            <h2 className="edu-cats-title">
              {lang === "id" ? "Pelajari apa itu Diabetes" : "Learn About Diabetes"}
            </h2>
            <p className="edu-cats-sub">
              {lang === "id"
                ? "Informasi mengenai diabetes dan tipe-tipe diabetes."
                : "Brief information about diabetes and its types."}
            </p>
          </div>

          <div className="edu-cats-grid">
            <a href="#prediabetes" className="edu-cat-link">
              <div className="edu-cat-card">
                <div className="edu-cat-icon">📈</div>
                <div className="edu-cat-text">{lang === "id" ? "Prediabetes" : "Prediabetes"}</div>
              </div>
            </a>

            <a href="#type1" className="edu-cat-link">
              <div className="edu-cat-card">
                <div className="edu-cat-icon">1️⃣</div>
                <div className="edu-cat-text">
                  {lang === "id" ? "Diabetes Tipe 1" : "Type 1 Diabetes"}
                </div>
              </div>
            </a>

            <a href="#type2" className="edu-cat-link">
              <div className="edu-cat-card">
                <div className="edu-cat-icon">2️⃣</div>
                <div className="edu-cat-text">
                  {lang === "id" ? "Diabetes Tipe 2" : "Type 2 Diabetes"}
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* BLOK 1-2-3-4 */}
        <section className="predia-edu-section">
          <div className="edu-blocks">
            {/* BLOCK 1 */}
            <div className="edu-grid">
              <div className="edu-tile edu-tile--green">
                <h3 className="edu-tile-title">
                  {lang === "id" ? "Apa itu Diabetes?" : "What is Diabetes?"}
                </h3>

                <p className="edu-tile-text">
                  {lang === "id"
                    ? "Diabetes adalah penyakit kronis yang ditandai dengan tingginya kadar gula di dalam darah. Glukosa atau gula adalah sumber energi utama bagi tubuh. Namun, pada penderita diabetes, glukosa tidak dapat digunakan oleh tubuh dengan efektif."
                    : "Diabetes is a chronic condition marked by high blood sugar levels. Glucose (sugar) is the body’s main energy source, but in diabetes the body can’t use glucose effectively."}
                </p>

                <p className="edu-tile-note">
                  {lang === "id"
                    ? "⚠️ Bisa berkembang pelan-pelan dan tahap awal kadang tanpa gejala jelas."
                    : "⚠️ It can develop slowly, and early stages may have no obvious symptoms."}
                </p>

                <div className="mt-3">
                  <Link to="/risk-factors" className="btn btn-white-outline">
                    {lang === "id" ? "Lihat Faktor Risiko" : "See Risk Factors"}
                  </Link>
                </div>
              </div>

              <div className="edu-tile edu-tile--img">
                <img src="/images/edu1.jpg" alt="Diabetes" className="edu-tile-img" />
              </div>
            </div>

            {/* BLOCK 2: Type 1 */}
            <div className="edu-grid edu-grid--reverse" id="type1">
              <div className="edu-tile edu-tile--img">
                <img
                  src="/images/edu2.jpg"
                  alt="Types of diabetes"
                  className="edu-tile-img"
                />
              </div>

              <div className="edu-tile edu-tile--white">
                <h3 className="edu-tile-title">
                  {lang === "id" ? "Tipe-Tipe Diabetes" : "Types of Diabetes"}
                </h3>

                <p className="edu-tile-text">
                  {lang === "id"
                    ? "Ada beberapa tipe diabetes. Yang paling umum adalah tipe 2, tapi tipe 1 dan gestasional juga penting dipahami."
                    : "There are several types of diabetes. Type 2 is the most common, but type 1 and gestational diabetes are also important to understand."}
                </p>

                <ul className="edu-tile-list">
                  <li>
                    <b>{lang === "id" ? "Tipe 1" : "Type 1"}</b>:{" "}
                    {lang === "id"
                      ? "Diabetes tipe 1 adalah gangguan autoimun yang menyebabkan kerusakan sel-sel yang memproduksi hormon insulin di dalam pankreas. Akibatnya, tubuh kekurangan insulin.Kurangnya produksi insulin dapat meningkatkan kadar glukosa darah. Biasanya gejala penyakit gula ini lebih sering terdeteksi pada usia yang lebih muda, terutama pada anak-anak atau remaja."
                      : "Type 1 diabetes is an autoimmune condition that damages insulin-producing cells in the pancreas. As a result, the body lacks insulin and blood glucose can rise. Symptoms are often detected at a younger age, especially in children or teenagers."}
                  </li>
                </ul>

                <div className="mt-3">
                  <Link to="/risk-factors" className="btn btn-secondary">
                    {lang === "id" ? "Lihat Faktor Risiko" : "See Risk Factors"}
                  </Link>
                </div>
              </div>
            </div>

            {/* BLOCK 3: Type 2 */}
            <div className="edu-grid" id="type2">
              <div className="edu-tile edu-tile--green">
                <h3 className="edu-tile-title">
                  {lang === "id" ? "Tipe 2 & Gestasional" : "Type 2 & Gestational"}
                </h3>

                <ul className="edu-tile-list">
                  <li>
                    <b>{lang === "id" ? "Tipe 2" : "Type 2"}</b>:{" "}
                    {lang === "id"
                      ? "Diabetes tipe 2 merupakan jenis yang paling umum terjadi, sering dialami orang dewasa terutama yang berumur di atas 30 tahun.Penyebab dasarnya berkaitan dengan gaya hidup tidak sehat. Hal ini memicu sejumlah kondisi yang menyebabkan tubuh tidak cukup memproduksi insulin dan/atau tidak mampu merespons insulin dengan baik."
                      : "Type 2 diabetes is the most common type and often occurs in adults, especially over age 30. The main cause is often linked to unhealthy lifestyle habits, leading to insulin resistance and/or reduced insulin production."}
                  </li>
                  <li>
                    <b>{lang === "id" ? "Tipe Gestasional" : "Gestational"}</b>:{" "}
                    {lang === "id"
                      ? "Diabetes gestasional adalah jenis penyakit gula yang terjadi pada masa kehamilan. Dengan penanganan yang tepat, kondisi ini bisa hilang setelah melahirkan. Namun, seseorang yang mengalami penyakit gula semasa kehamilan berisiko tinggi mengalami diabetes tipe 2 di kemudian hari."
                      : "Gestational diabetes occurs during pregnancy. With proper management it may improve after delivery, but it increases the risk of developing type 2 diabetes later in life."}
                  </li>
                </ul>

                <div className="mt-3">
                  <Link to="/lifestyle" className="btn btn-white-outline">
                    {lang === "id" ? "Mulai Gaya Hidup Sehat" : "Start a Healthy Lifestyle"}
                  </Link>
                  <Link to="/login" className="btn btn-secondary ms-2">
                    {lang === "id" ? "Cek Risiko" : "Check Risk"}
                  </Link>
                </div>
              </div>

              <div className="edu-tile edu-tile--img">
                <img src="/images/edu3.jpg" alt="Prediabetes" className="edu-tile-img" />
              </div>
            </div>
          </div>

          {/* BLOCK 4: Prediabetes */}
          <div className="edu-grid edu-grid--reverse" id="prediabetes">
            <div className="edu-tile edu-tile--img">
              <img
                src="/images/edu4.jpg"
                alt="Types of diabetes"
                className="edu-tile-img"
              />
            </div>

            <div className="edu-tile edu-tile--white">
              <h3 className="edu-tile-title">{lang === "id" ? "Prediabetes" : "Prediabetes"}</h3>

              <p className="edu-tile-text">{lang === "id" ? "" : "Prediabetes."}</p>

              <ul className="edu-tile-list">
                <li>
                  <b>{lang === "id" ? "Prediabetes" : "Prediabetes"}</b>:{" "}
                  {lang === "id"
                    ? "Kondisi di mana kadar gula darah lebih tinggi dari normal, tetapi belum cukup tinggi untuk didiagnosis sebagai diabetes. Prediabetes meningkatkan risiko terkena diabetes tipe 2, penyakit jantung, dan stroke."
                    : "A condition where blood sugar is higher than normal but not high enough for a diabetes diagnosis. Prediabetes increases the risk of type 2 diabetes, heart disease, and stroke."}
                </li>
              </ul>

              <div className="mt-3">
                <Link to="/risk-factors" className="btn btn-secondary">
                  {lang === "id" ? "Lihat Faktor Risiko" : "See Risk Factors"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TES (Stepper) */}
        <section className="predia-edu-section" style={{ paddingTop: 28 }}>
          <div className="predia-card">
            <div style={{ marginBottom: 14 }}>
              <h2 className="predia-h2" style={{ marginBottom: 6 }}>
                {lang === "id" ? "Pengenalan Risiko Diabetes" : "Introduction to Diabetes Risk"}
              </h2>
              <p className="predia-p" style={{ marginBottom: 0 }}>
                {lang === "id"
                  ? "Kenali apakah Anda memiliki faktor risiko diabetes sebelum melakukan evaluasi lanjutan."
                  : "Recognize if you have diabetes risk factors before further evaluation."}
              </p>
            </div>

            <PrediabetesStepperTest lang={lang} />
          </div>
        </section>
      </main>
    </div>
  );
}

function PrediabetesStepperTest({ lang = "id" }) {
  const navigate = useNavigate();

  // step index:
  // 0 start, 1 age, 2 gender, 3 family, 4 bp, 5 bmi, 6 activity, 7 result
  const [stepIndex, setStepIndex] = useState(0);

  const [answers, setAnswers] = useState({
    age: "",
    gender: "",
    family: "",
    bp: "",
    bmi: "",
    activity: "",
  });

  const stepLabels = useMemo(() => {
    return lang === "id"
      ? ["Mulai", "Usia", "Gender", "Keluarga", "Tensi", "BMI", "Aktif", "Hasil"]
      : ["Get Started", "Age", "Gender", "Family", "BP", "BMI", "Activity", "Result"];
  }, [lang]);

  const requiredField = useMemo(() => {
    // null = ga wajib isi (start/result)
    const map = [null, "age", "gender", "family", "bp", "bmi", "activity", null];
    return map[stepIndex] || null;
  }, [stepIndex]);

  const canNext = useMemo(() => {
    if (!requiredField) return true;
    return answers[requiredField] !== "";
  }, [requiredField, answers]);

  const isComplete = useMemo(() => {
    return (
      answers.age !== "" &&
      answers.gender !== "" &&
      answers.family !== "" &&
      answers.bp !== "" &&
      answers.bmi !== "" &&
      answers.activity !== ""
    );
  }, [answers]);

  const score = useMemo(() => {
    const mapScore = { low: 0, mid: 1, high: 2 };
    return (
      (mapScore[answers.age] ?? 0) +
      (mapScore[answers.gender] ?? 0) +
      (mapScore[answers.family] ?? 0) +
      (mapScore[answers.bp] ?? 0) +
      (mapScore[answers.bmi] ?? 0) +
      (mapScore[answers.activity] ?? 0)
    );
  }, [answers]);

  const level = useMemo(() => {
    if (!isComplete) return null;
    if (score <= 3) return "low";
    if (score <= 7) return "mid";
    return "high";
  }, [isComplete, score]);

  const resultCopy = useMemo(() => {
    if (!level) return null;

    const isID = lang === "id";

    if (level === "low") {
      return {
        title: isID ? "Risiko Rendah (skrining)" : "Low Risk (screening)",
        desc: isID
          ? "Berdasarkan jawaban kamu, kecenderungan risiko prediabetes relatif rendah. Tetap jaga pola makan dan rutin bergerak."
          : "Your answers suggest a relatively low tendency of prediabetes risk. Keep healthy habits.",
        tips: isID
          ? ["Batasi minuman manis", "Makan serat + protein", "Aktif 30 menit/hari"]
          : ["Limit sugary drinks", "Add fiber + protein", "Move 30 min/day"],
        cta: isID ? "Cek Diabetes (login dulu)" : "Check Diabetes (login first)",
        reset: isID ? "Ulangi Tes" : "Retake Test",
      };
    }

    if (level === "mid") {
      return {
        title: isID ? "Risiko Sedang (skrining)" : "Moderate Risk (screening)",
        desc: isID
          ? "Ada beberapa faktor risiko yang perlu diperhatikan. Mulai ubah kebiasaan dari hal kecil dan pertimbangkan cek gula darah berkala."
          : "Some risk factors are present. Start small changes and consider routine checks.",
        tips: isID
          ? ["Kurangi ultra-proses", "Tambah aktivitas fisik", "Pantau gula darah bila perlu"]
          : ["Reduce ultra-processed", "Increase activity", "Monitor glucose if needed"],
        cta: isID ? "Cek Diabetes (login dulu)" : "Check Diabetes (login first)",
        reset: isID ? "Ulangi Tes" : "Retake Test",
      };
    }

    return {
      title: isID ? "Risiko Tinggi (skrining)" : "High Risk (screening)",
      desc: isID
        ? "Ada beberapa faktor risiko kuat. Ini bukan diagnosis, tapi sebaiknya cek lebih lanjut dan gunakan PredDia untuk skrining risiko diabetes."
        : "Several strong risk factors are present. Not a diagnosis, but consider further checks and use PredDia.",
      tips: isID
        ? ["Pertimbangkan cek GDP/HbA1c", "Kurangi gula tambahan", "Tidur & stres terkelola"]
        : ["Consider FPG/HbA1c", "Cut added sugar", "Sleep & stress management"],
      cta: isID ? "Cek Diabetes (login dulu)" : "Check Diabetes (login first)",
      reset: isID ? "Ulangi Tes" : "Retake Test",
    };
  }, [level, lang]);

  const t  = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role === "admin") return navigate("/admin");
    if (token) return navigate("/dashboard");
    return navigate("/login");
  };

  const next = () => {
    if (!canNext) return;
    if (stepIndex >= 7) return;
    setStepIndex((i) => Math.min(i + 1, 7));
  };

  const back = () => setStepIndex((i) => Math.max(i - 1, 0));

  const reset = () => {
    setAnswers({ age: "", gender: "", family: "", bp: "", bmi: "", activity: "" });
    setStepIndex(0);
  };

  const pick = (field, value) => {
    setAnswers((p) => ({ ...p, [field]: value }));
  };

  const Option = ({ active, onClick, children }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          border: active ? "2px solid #3b5d50" : "1px solid #d9dee3",
          background: active ? "rgba(59,93,80,0.10)" : "#fff",
          fontWeight: active ? "700" : "500",
          width: "100%",
          textAlign: "left",
          padding: "10px 12px",
          borderRadius: 12,
          cursor: "pointer",
          marginTop: 10,
        }}
      >
        {children}
      </button>
    );
  };

 return (
  <div>
    <style>{`
      .pred-stepper { position: relative; padding: 10px 6px 0; margin-bottom: 18px; }
      .pred-stepper-line { position: absolute; left: 18px; right: 18px; top: 22px; height: 4px;
        background-image: radial-gradient(#3b5d50 1.6px, transparent 1.6px);
        background-size: 10px 4px; background-repeat: repeat-x; opacity: .9; }
      .pred-steps { display: flex; justify-content: space-between; gap: 10px; position: relative; z-index: 1; }
      .pred-step { display: flex; flex-direction: column; align-items: center; width: 90px; text-align: center; }
      .pred-dot { width: 34px; height: 34px; border-radius: 999px; display: grid; place-items: center;
        font-weight: 800; font-size: 14px; border: 2px solid #3b5d50; background: #fff; color: #3b5d50; }
      .pred-dot.active { background: #3b5d50; color: #fff; }
      .pred-dot.done { background: #3b5d50; color: #fff; opacity: .9; }
      .pred-step-label { margin-top: 10px; font-size: 13px; color: #222; font-weight: 600; line-height: 1.15; }
      .pred-step-label.muted { color: #6c757d; font-weight: 500; }
      .pred-step-card { border: 1px solid #eef1f4; border-radius: 14px; padding: 18px; background: #fff;
        box-shadow: 0 6px 18px rgba(0,0,0,.06); }

      /* tombol bawah biar rapi */
      .pred-nav { display:flex; justify-content: space-between; align-items:center; gap:12px; margin-top:16px; }
      .pred-nav-right { display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end; }
      .pred-btn-round { border-radius: 999px !important; }
      .pred-btn-disabled { opacity: .6; pointer-events: none; }
    `}</style>

    {/* ================== STEPPER ================== */}
    <div className="pred-stepper">
      <div className="pred-stepper-line" />
      <div className="pred-steps">
        {stepLabels.map((label, idx) => {
          const isActive = idx === stepIndex;
          const isDone = idx < stepIndex;
          return (
            <div className="pred-step" key={idx}>
              <div className={`pred-dot ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}>
                {idx === 0 ? "○" : idx}
              </div>
              <div className={`pred-step-label ${!isActive && !isDone ? "muted" : ""}`}>
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="pred-step-card">
      {/* STEP 0 */}
      {stepIndex === 0 && (
        <>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
            {lang === "id" ? "Tes Risiko Awal Diabetes " : "Initial Risk Test for Diabetes"}
          </h3>
          <p style={{ marginBottom: 0, color: "#444", fontSize: 14 }}>
            {lang === "id"
              ? "Jawab beberapa pertanyaan singkat. Tes ini bersifat edukatif dan bukan diagnosis."
              : "Answer a few quick questions. Educational screening only, not a diagnosis."}
          </p>

          <div style={{ marginTop: 14 }}>
            <button
              type="button"
              className="btn btn-secondary pred-btn-round"
              onClick={next}
            >
              {lang === "id" ? "Mulai" : "Start"}
            </button>
          </div>
        </>
      )}

      {/* STEP 1 */}
      {stepIndex === 1 && (
        <>
          <div style={{ fontWeight: 800 }}>{lang === "id" ? "Usia kamu?" : "Your age?"}</div>
          <Option active={answers.age === "low"} onClick={() => pick("age", "low")}>
            {lang === "id" ? "Di bawah 35 tahun" : "Under 35 years"}
          </Option>
          <Option active={answers.age === "mid"} onClick={() => pick("age", "mid")}>
            {lang === "id" ? "35–44 tahun" : "35–44 years"}
          </Option>
          <Option active={answers.age === "high"} onClick={() => pick("age", "high")}>
            {lang === "id" ? "45 tahun ke atas" : "45+ years"}
          </Option>
        </>
      )}

      {/* STEP 2 */}
      {stepIndex === 2 && (
        <>
          <div style={{ fontWeight: 800 }}>{lang === "id" ? "Gender kamu?" : "Your gender?"}</div>
          <Option active={answers.gender === "low"} onClick={() => pick("gender", "low")}>
            {lang === "id" ? "Perempuan" : "Female"}
          </Option>
          <Option active={answers.gender === "mid"} onClick={() => pick("gender", "mid")}>
            {lang === "id" ? "Laki-laki" : "Male"}
          </Option>
          <Option active={answers.gender === "high"} onClick={() => pick("gender", "high")}>
            {lang === "id" ? "Riwayat DM gestasional/hamil" : "Gestational diabetes/pregnant"}
          </Option>
        </>
      )}

      {/* STEP 3 */}
      {stepIndex === 3 && (
        <>
          <div style={{ fontWeight: 800 }}>
            {lang === "id" ? "Ada keluarga inti dengan diabetes?" : "Any close family with diabetes?"}
          </div>
          <Option active={answers.family === "low"} onClick={() => pick("family", "low")}>
            {lang === "id" ? "Tidak ada / tidak tahu" : "No / not sure"}
          </Option>
          <Option active={answers.family === "mid"} onClick={() => pick("family", "mid")}>
            {lang === "id" ? "Ada di keluarga besar" : "Yes (extended family)"}
          </Option>
          <Option active={answers.family === "high"} onClick={() => pick("family", "high")}>
            {lang === "id" ? "Ada (orang tua/saudara)" : "Yes (parents/siblings)"}
          </Option>
        </>
      )}

      {/* STEP 4 */}
      {stepIndex === 4 && (
        <>
          <div style={{ fontWeight: 800 }}>
            {lang === "id"
              ? "Pernah diberitahu tekanan darah tinggi?"
              : "Have you been told you have high blood pressure?"}
          </div>
          <Option active={answers.bp === "low"} onClick={() => pick("bp", "low")}>
            {lang === "id" ? "Tidak" : "No"}
          </Option>
          <Option active={answers.bp === "mid"} onClick={() => pick("bp", "mid")}>
            {lang === "id" ? "Kadang / borderline" : "Sometimes / borderline"}
          </Option>
          <Option active={answers.bp === "high"} onClick={() => pick("bp", "high")}>
            {lang === "id" ? "Ya" : "Yes"}
          </Option>
        </>
      )}

      {/* STEP 5 */}
      {stepIndex === 5 && (
        <>
          <div style={{ fontWeight: 800 }}>
            {lang === "id" ? "Kondisi berat badan (perkiraan)?" : "Your weight status (approx.)?"}
          </div>
          <Option active={answers.bmi === "low"} onClick={() => pick("bmi", "low")}>
            {lang === "id" ? "Normal" : "Normal"}
          </Option>
          <Option active={answers.bmi === "mid"} onClick={() => pick("bmi", "mid")}>
            {lang === "id" ? "Berat badan berlebih" : "Overweight"}
          </Option>
          <Option active={answers.bmi === "high"} onClick={() => pick("bmi", "high")}>
            {lang === "id" ? "Obesitas" : "Obesity"}
          </Option>
        </>
      )}

      {/* STEP 6 */}
      {stepIndex === 6 && (
        <>
          <div style={{ fontWeight: 800 }}>
            {lang === "id" ? "Aktivitas fisik kamu?" : "Your physical activity?"}
          </div>
          <Option active={answers.activity === "low"} onClick={() => pick("activity", "low")}>
            {lang === "id" ? "Rutin (≥ 3x/minggu)" : "Regular (≥ 3x/week)"}
          </Option>
          <Option active={answers.activity === "mid"} onClick={() => pick("activity", "mid")}>
            {lang === "id" ? "Kadang-kadang" : "Sometimes"}
          </Option>
          <Option active={answers.activity === "high"} onClick={() => pick("activity", "high")}>
            {lang === "id" ? "Jarang / hampir tidak pernah" : "Rarely / almost never"}
          </Option>
        </>
      )}

      {/* STEP 7 (RESULT) */}
      {stepIndex === 7 && (
        <>
          <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 6 }}>
            {lang === "id" ? "Hasil Tes" : "Your Result"}
          </h3>

          {level && resultCopy && (
            <div
              style={{
                marginTop: 12,
                borderRadius: 12,
                padding: 14,
                border:
                  level === "high"
                    ? "1px solid #f5c2c7"
                    : level === "mid"
                    ? "1px solid #ffe69c"
                    : "1px solid #c9ebc9",
                background:
                  level === "high"
                    ? "#ffe5e5"
                    : level === "mid"
                    ? "#fff3cd"
                    : "#e5f7e5",
                color:
                  level === "high"
                    ? "#b00020"
                    : level === "mid"
                    ? "#7a5b00"
                    : "#136f2d",
              }}
            >
              <div style={{ fontWeight: 900 }}>{resultCopy.title}</div>
              <div style={{ marginTop: 6, fontSize: 14 }}>{resultCopy.desc}</div>

              <ul style={{ marginTop: 10, marginBottom: 10, paddingLeft: 18 }}>
                {resultCopy.tips.map((t, i) => (
                  <li key={i} style={{ fontSize: 14 }}>
                    {t}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-white-outline pred-btn-round"
                  onClick={reset}
                >
                  {lang === "id" ? "Selesai" : "Done"}
                </button>

                <button
                  type="button"
                  className="btn btn-secondary pred-btn-round"
                  onClick={() => navigate("/login")}
                >
                  {lang === "id" ? "Cek Risiko" : "Check Risk"}
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ================== NAV BOTTOM (STEP 1-6) ================== */}
      {stepIndex >= 1 && stepIndex <= 6 && (
        <div className="pred-nav">
          <button
            type="button"
            className="btn btn-white-outline pred-btn-round"
            onClick={back}
          >
            {lang === "id" ? "Kembali" : "Back"}
          </button>

          <div className="pred-nav-right">
            <button
              type="button"
              className={`btn btn-secondary pred-btn-round ${
                !canNext ? "pred-btn-disabled" : ""
              }`}
              onClick={next}
              disabled={!canNext}
            >
              {lang === "id" ? "Lanjut" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);
}