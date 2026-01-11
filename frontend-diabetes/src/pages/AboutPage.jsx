// src/pages/AboutPage.jsx
import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../App.css";
import api from "../api";

export default function AboutPage() {
  const ctx = useOutletContext();
  const lang = ctx?.lang || "id";

  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [loading, setLoading] = useState(false);
  const [okMsg, setOkMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmitSaran = async (e) => {
    e.preventDefault();
    setOkMsg("");
    setErrMsg("");
    setLoading(true);

    try {
      await api.post("/saran", {
        nama: form.nama,
        email: form.email,
        pesan: form.pesan,
      });

      setOkMsg(
        lang === "id"
          ? "✅ Saran berhasil dikirim. Terima kasih!"
          : "✅ Suggestion sent. Thank you!"
      );
      setForm({ nama: "", email: "", pesan: "" });
    } catch (err) {
      const status = err?.response?.status;
      const data = err?.response?.data;

      const detail =
        data?.message ||
        (data?.errors ? Object.values(data.errors).flat().join(" | ") : "") ||
        err?.message ||
        "";

      setErrMsg(
        lang === "id"
          ? `Gagal mengirim saran${status ? ` (${status})` : ""}. ${detail}`.trim()
          : `Failed to send suggestion${status ? ` (${status})` : ""}. ${detail}`.trim()
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="predia-page predia-edu">
      <main className="container py-4">
        {/* ================= HERO ================= */}
        <section className="predia-edu-section">
          <div className="about-hero-wrap">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-6">
                <div className="about-hero-inner">
                  <div className="about-kicker">
                    {lang === "id" ? "TENTANG PREDIA" : "ABOUT PREDIA"}
                  </div>

                  <h1 className="about-hero-title">
                    {lang === "id" ? "Apa itu PredDia?" : "What is PredDia?"}
                  </h1>

                  <p className="about-hero-lead">
                    {lang === "id"
                      ? "PredDia adalah platform berbasis web yang membantu mengidentifikasi dan mengklasifikasikan risiko diabetes sejak dini melalui skrining sederhana serta edukasi kesehatan yang mudah dipahami."
                      : "PredDia is a web-based platform that helps identify and classify diabetes risk early through simple screening and easy-to-understand health education."}
                  </p>

                  <p className="about-hero-lead" style={{ marginTop: 10 }}>
                    {lang === "id"
                      ? "Dengan memanfaatkan data kesehatan dasar, PredDia memberikan gambaran tingkat risiko diabetes (seperti positif atau negatif diabetes) serta rekomendasi gaya hidup yang dapat diterapkan sebagai langkah pencegahan dan pengelolaan awal."
                      : "Utilizing basic health data, PredDia provides an overview of diabetes risk levels and lifestyle recommendations for early prevention and management."}
                  </p>

                  <p className="about-hero-lead" style={{ marginTop: 10 }}>
                    {lang === "id"
                      ? "Platform ini dirancang untuk meningkatkan kesadaran masyarakat terhadap kondisi kesehatannya dan mendorong perubahan gaya hidup yang lebih sehat secara bertahap."
                      : "This platform is designed to raise public awareness and encourage gradual lifestyle changes toward better health."}
                  </p>

                  <div className="d-flex gap-2 flex-wrap mt-3">
                    <Link to="/education" className="btn btn-white-outline">
                      {lang === "id" ? "Pelajari Edukasi" : "Learn Education"}
                    </Link>
                  </div>

                  <div className="about-hero-note">
                    {lang === "id"
                      ? "⚠️ PredDia bersifat edukatif dan tidak menggantikan diagnosis maupun konsultasi dengan tenaga kesehatan atau dokter."
                      : "⚠️ PredDia is educational and does not replace diagnosis or consultation with healthcare professionals."}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src="/images/about.jpg"
                  alt="About PredDia"
                  className="about-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FORM SARAN ================= */}
        <section className="predia-edu-section" style={{ marginTop: 28 }}>
          <div className="about-form-wrap">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <h2 className="predia-h2" style={{ marginBottom: 8 }}>
                  {lang === "id" ? "Saran & Masukan" : "Suggestions"}
                </h2>
                <p className="predia-p" style={{ marginBottom: 0 }}>
                  {lang === "id"
                    ? "Kirim saran atau kritik untuk membantu PredDia menjadi lebih baik."
                    : "Send suggestions to help PredDia improve."}
                </p>
              </div>

              <div className="col-lg-7">
                {okMsg && <div className="predia-goodbox mb-3">{okMsg}</div>}
                {errMsg && (
                  <div className="predia-errorbox mb-3">{errMsg}</div>
                )}

                <form onSubmit={onSubmitSaran}>
                  <div className="about-form-grid">
                    <div>
                      <label className="form-label">
                        {lang === "id" ? "Nama" : "Name"}
                      </label>
                      <input
                        name="nama"
                        value={form.nama}
                        onChange={onChange}
                        required
                        className="form-control"
                        placeholder={
                          lang === "id" ? "Nama lengkap" : "Full name"
                        }
                      />
                    </div>

                    <div>
                      <label className="form-label">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        className="form-control"
                        placeholder="nama@gmail.com"
                      />
                    </div>

                    <div className="about-form-full">
                      <label className="form-label">
                        {lang === "id" ? "Pesan" : "Message"}
                      </label>
                      <textarea
                        name="pesan"
                        value={form.pesan}
                        onChange={onChange}
                        required
                        rows={5}
                        className="form-control"
                        placeholder={
                          lang === "id"
                            ? "Tulis saran atau masukan..."
                            : "Write your suggestion..."
                        }
                      />
                    </div>

                    <div className="about-form-full">
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        disabled={loading}
                        style={{ borderRadius: 999, width: "100%" }}
                      >
                        {loading
                          ? lang === "id"
                            ? "Mengirim..."
                            : "Sending..."
                          : lang === "id"
                          ? "Kirim Saran"
                          : "Send Suggestion"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA BAWAH ================= */}
        <section className="predia-edu-section" style={{ marginTop: 34 }}>
          <div className="about-cta">
            <h3 className="about-cta-title">
              {lang === "id"
                ? "Mulai dari langkah kecil hari ini"
                : "Start with small steps today"}
            </h3>
            <p className="about-cta-text">
              {lang === "id"
                ? "Gunakan PredDia sebagai langkah awal untuk memahami risiko diabetes sejak dini."
                : "Use PredDia as a first step to understand diabetes risk early."}
            </p>
            <Link to="/login" className="btn btn-secondary">
              {lang === "id" ? "Mulai Prediksi" : "Start Prediction"}
            </Link>
          </div>
        </section>
      
        {/* ===== Inline CSS ===== */}
        <style>{`
          .about-hero-wrap{
            border-radius: 18px;
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(59,93,80,.12);
            box-shadow: 0 10px 26px rgba(0,0,0,.06);
          }
          .about-hero-inner{
            padding: 34px 30px;
          }
          .about-kicker{
            font-size: 12px;
            letter-spacing: .18em;
            font-weight: 900;
            color: #3b5d50;
            opacity: .95;
            margin-bottom: 10px;
          }
          .about-hero-title{
            font-size: clamp(34px, 4vw, 56px);
            line-height: 1.05;
            margin: 0 0 12px 0;
            font-weight: 900;
            color: #1f2b25;
          }
          .about-hero-lead{
            margin: 0;
            color: #4b5a54;
            font-size: 16px;
            line-height: 1.7;
            max-width: 560px;
          }
          .about-hero-note{
            margin-top: 14px;
            font-size: 13px;
            color: #6c757d;
          }
          .about-hero-img{
            width: 100%;
            height: 100%;
            min-height: 360px;
            max-height: 520px;
            object-fit: cover;
            display: block;
            background: #eef4f1;
          }

          .about-form-wrap{
            border-radius: 18px;
            background: #fff;
            padding: 22px 18px;
            border: 0;
            box-shadow: none;
          }
          .about-form-grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .about-form-full{
            grid-column: 1 / -1;
          }
          .about-mini-note{
            margin-top: 10px;
            font-size: 12px;
            color: #6c757d;
          }

          .about-cta{
            text-align: center;
            border-radius: 18px;
            padding: 28px 18px;
            border: 0;
            background: #eef4f1;
          }
          .about-cta-title{
            font-weight: 900;
            margin: 0 0 8px 0;
            color: #1f2b25;
            font-size: 26px;
          }
          .about-cta-text{
            margin: 0 0 14px 0;
            color: #4b5a54;
            line-height: 1.7;
          }

          @media (max-width: 991px){
            .about-hero-inner{ padding: 26px 20px; }
            .about-form-grid{ grid-template-columns: 1fr; }
            .about-hero-img{ max-height: 420px; }
          }
        `}</style>
      </main>
    </div>
  );
}
