// src/pages/LandingPage.jsx
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const ctx = useOutletContext();
  const lang = ctx?.lang || "id";
  const isID = lang === "id";

  return (
    <>
      <style>{`
/* =========================================================
   LANDING (NO TOP)
   - Background putih
   - Explore (4 kotak) hijau solid kaya footer
   - Kenapa PredDia (PUTIH) pakai copy kamu (lebih berbobot)
   - Cara Prediksi (STEPPER) HIJAU SOLID (bukan tipis)
========================================================= */

:root{
  --g:#0e3f34;            /* hijau utama (footer vibes) */
  --g2:#0b332a;           /* hijau lebih gelap */
  --text:#0f172a;
  --muted:rgba(15,23,42,.72);
  --line:rgba(15,23,42,.10);
  --yellow:#f5c542;
  --yellow2:#f1b81f;
}

body{ background:#fff; }
a{ text-decoration:none !important; }

/* ---------- HEADERS ---------- */
.lp-head{
  text-align:center;
  margin-bottom: 14px;
}
.lp-title{
  margin:0;
  font-weight: 950;
  letter-spacing: -0.25px;
  color: var(--text);
  font-size: 28px;
}
.lp-underline{
  width: 72px;
  height: 5px;
  border-radius: 999px;
  background: var(--g);
  margin: 10px auto 0;
}
.lp-desc{
  margin: 10px auto 0;
  max-width: 90ch;
  color: var(--muted);
  line-height: 1.75;
  font-size: 15.5px;
}

/* =========================================================
   EXPLORE (4 KOTAK) — HIJAU SOLID
========================================================= */
#explore{ padding: 54px 0 24px; }

.home-cardgrid{
  display:grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 18px;
  margin-top: 18px;
}

.home-card{
  border-radius: 26px !important;
  padding: 22px 20px 18px;
  border: 1px solid rgba(255,255,255,.18) !important;

  background: linear-gradient(180deg, var(--g) 0%, var(--g2) 100%) !important;
  box-shadow: 0 18px 46px rgba(0,0,0,.20) !important;

  color: #fff !important;
  min-height: 240px;
  display:flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
}

/* glow tipis biar "mahal" */
.home-card::before{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(520px 220px at 12% 10%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(420px 200px at 86% 16%, rgba(255,208,88,.14), transparent 62%);
  opacity:.9;
  pointer-events:none;
}

.home-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 26px 68px rgba(0,0,0,.28) !important;
  filter: brightness(1.02);
}

.home-card-top{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}

.home-card-ico{
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.22);
  display:grid;
  place-items:center;
}

.ico-svg{ width: 26px; height: 26px; opacity:.98; }

.home-card-arrow{
  font-weight: 950;
  opacity: .90;
  color:#fff;
  font-size: 20px;
  padding-top: 6px;
}

.home-card-title{
  font-weight: 950;
  letter-spacing: -0.35px;
  margin: 6px 0 8px;
  color:#fff;
  font-size: 22px;
  position: relative;
  z-index: 1;
}

.home-card-text{
  color: rgba(255,255,255,.86);
  line-height: 1.65;
  margin: 0;
  flex: 1;
  font-size: 15px;
  position: relative;
  z-index: 1;
}

.home-card-link{
  color: rgba(255, 214, 79, .98);
  font-weight: 950;
  margin-top: 16px;
  font-size: 16px;
  position: relative;
  z-index: 1;
}

/* =========================================================
   KENAPA PREDIA — PUTIH (COPY KAMU)
========================================================= */
#features{
  padding: 64px 0;
  background:#fff;
  border-top: 1px solid rgba(0,0,0,.06);
}

.lp-why{
  margin-top: 22px;
  display:grid;
  grid-template-columns: 1.25fr .75fr;
  gap: 18px;
  align-items:start;
}

.lp-why-points,
.lp-why-side{
  background:#fff;
  border: 1px solid rgba(15,23,42,.10);
  border-radius: 22px;
  box-shadow: 0 18px 46px rgba(0,0,0,.06);
}

.lp-why-points{ padding: 18px 18px; }

.lp-why-row{
  display:flex;
  gap: 14px;
  align-items:flex-start;
  padding: 18px 10px;
  border-bottom: 1px solid rgba(0,0,0,.06);
}
.lp-why-row:last-child{ border-bottom: 0; }

.lp-why-ic{
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: rgba(14,63,52,.08);
  border: 1px solid rgba(14,63,52,.18);
  display:grid;
  place-items:center;
  flex: 0 0 auto;
}
.lp-why-ic svg{
  width: 26px;
  height: 26px;
  stroke: var(--g);
}

.lp-why-title{
  font-weight: 950;
  color: var(--text);
  font-size: 18px;
}
.lp-why-sub{
  margin-top: 8px;
  color: var(--muted);
  line-height: 1.75;
  font-size: 15px;
}

.lp-why-side{ padding: 18px; }

.lp-stat{
  display:flex;
  gap: 12px;
  align-items:center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(14,63,52,.06);
  border: 1px solid rgba(14,63,52,.12);
}
.lp-stat + .lp-stat{ margin-top: 12px; }

.lp-stat-num{
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display:grid;
  place-items:center;
  background: rgba(14,63,52,.12);
  border: 1px solid rgba(14,63,52,.22);
  font-weight: 950;
  color: var(--g);
  flex: 0 0 auto;
}

.lp-stat-txt{
  color: rgba(15,23,42,.82);
  font-weight: 900;
  font-size: 14px;
  line-height: 1.35;
}

.lp-why-quote{
  margin-top: 14px;
  border-radius: 18px;
  padding: 14px 14px;
  background: rgba(255,208,88,.12);
  border: 1px solid rgba(255,208,88,.26);
  position: relative;
  overflow: hidden;
}
.lp-quote-mark{
  position:absolute;
  top: 0px;
  right: 14px;
  font-size: 62px;
  font-weight: 950;
  opacity: .18;
}
.lp-quote-text{
  font-weight: 900;
  color: rgba(15,23,42,.82);
  line-height: 1.7;
  font-size: 15px;
}

/* =========================================================
   CARA PREDIKSI — STEPPER HIJAU SOLID (KAYA KOTAK)
========================================================= */
#how{
  padding: 64px 0;
  background:#fff;
  border-top: 1px solid rgba(0,0,0,.06);
}

.flow-wrap{
  margin-top: 22px;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
}

/* 4 kotak step ijo */
.flow-steps{
  display:grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 18px;
}

.flow-step{
  background: linear-gradient(180deg, var(--g) 0%, var(--g2) 100%);
  border-radius: 26px;
  padding: 22px 18px 20px;
  color: #fff;
  text-align: center;
  box-shadow: 0 18px 46px rgba(0,0,0,.22);
  position: relative;
  overflow: hidden;
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
}

/* glow tipis biar match explore */
.flow-step::before{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(520px 220px at 14% 8%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(420px 200px at 86% 16%, rgba(255,208,88,.12), transparent 62%);
  opacity:.9;
  pointer-events:none;
}

.flow-step:hover{
  transform: translateY(-4px);
  box-shadow: 0 26px 68px rgba(0,0,0,.28);
  filter: brightness(1.02);
}

.flow-ico{
  width: 56px;
  height: 56px;
  border-radius: 18px;
  margin: 0 auto 12px;
  display:grid;
  place-items:center;

  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.22);

  position: relative;
  z-index: 1;
}

.flow-ico svg{
  width: 26px;
  height: 26px;
  stroke: #fff;
}

.flow-no{
  margin-top: 2px;
  font-weight: 950;
  opacity: .92;
  letter-spacing: .04em;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

.flow-title{
  margin-top: 8px;
  font-weight: 950;
  color: #fff;
  font-size: 13.5px;
  text-transform: uppercase;
  letter-spacing: .04em;
  position: relative;
  z-index: 1;
}

.flow-sub{
  margin-top: 8px;
  color: rgba(255,255,255,.86);
  font-size: 13.5px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* note + action jadi 1 bar hijau juga */
.flow-foot{
  margin-top: 18px;
  padding: 18px 18px;

  border-radius: 24px;
  background: linear-gradient(180deg, var(--g) 0%, var(--g2) 100%);
  box-shadow: 0 18px 46px rgba(0,0,0,.22);

  display:flex;
  gap: 12px;
  align-items:center;
  justify-content:space-between;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}

.flow-foot::before{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(520px 220px at 14% 8%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(420px 200px at 86% 16%, rgba(255,208,88,.12), transparent 62%);
  opacity:.9;
  pointer-events:none;
}

.flow-note{
  display:flex;
  gap: 10px;
  align-items:flex-start;
  color: rgba(255,255,255,.88);
  line-height: 1.65;
  max-width: 78ch;
  position: relative;
  z-index: 1;
}

.flow-note-badge{
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.24);
  font-weight: 950;
  color: #fff;
  flex: 0 0 auto;
}

.flow-actions{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.btn-pill{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 950;
  border: 1px solid rgba(255,255,255,.22);
  background: rgba(255,255,255,.10);
  color: #fff;
  transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
}

.btn-pill:hover{
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(0,0,0,.22);
  filter: brightness(1.02);
}

.btn-primary{
  background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow2) 100%) !important;
  border: none !important;
  color: #1b1f1d !important;
  box-shadow: 0 16px 40px rgba(0,0,0,.24);
}
.btn-primary:hover{ filter: brightness(1.06); }

.link-soft{
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.22);
  color: #fff !important;
}

/* =========================================================
   CTA
========================================================= */
#cta{
  padding: 72px 0;
  background:#fff;
  border-top: 1px solid rgba(0,0,0,.06);
}

.cta-card{
  max-width: 980px;
  margin: 0 auto;
  border-radius: 26px;
  padding: 28px 18px;
  background:
    radial-gradient(900px 420px at 20% 30%, rgba(14,63,52,.08), transparent 60%),
    radial-gradient(900px 420px at 80% 20%, rgba(255,208,88,.10), transparent 60%),
    #fff;
  border: 1px solid rgba(15,23,42,.10);
  box-shadow: 0 18px 46px rgba(0,0,0,.08);
  text-align:center;
}
.cta-title{
  margin:0;
  font-weight: 950;
  letter-spacing: -0.3px;
  color: var(--text);
  font-size: 28px;
}
.cta-sub{
  margin: 12px auto 18px;
  max-width: 82ch;
  color: var(--muted);
  line-height: 1.75;
  font-size: 15.5px;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 992px){
  .home-cardgrid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .lp-why{ grid-template-columns: 1fr; }
  .flow-steps{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 576px){
  .home-cardgrid{ grid-template-columns: 1fr; }
  .flow-steps{ grid-template-columns: 1fr; }
}
      `}</style>

      {/* ================= EXPLORE ================= */}
      <section id="explore">
        <div className="container">
          <div className="lp-head">
            <h2 className="lp-title">{isID ? "Jelajahi PredDia" : "Explore PredDia"}</h2>
            <div className="lp-underline" />
            <p className="lp-desc">
              {isID
                ? "Pilih topik yang kamu butuhkan untuk lanjut belajar."
                : "Pick a topic you need to continue learning."}
            </p>
          </div>

          <div className="home-cardgrid">
            <Link to="/education" className="home-card">
              <div className="home-card-top">
                <div className="home-card-ico" aria-hidden="true">
                  <svg className="ico-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19.5V6.5c0-1 1-2 2-2h14v15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 18h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 8h7M7 11h9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="home-card-arrow">→</div>
              </div>
              <h3 className="home-card-title">{isID ? "Edukasi Diabetes" : "Diabetes Education"}</h3>
              <p className="home-card-text">
                {isID
                  ? "Dasar diabetes, tipe, gejala awal, dan kapan perlu pemeriksaan."
                  : "Basics, types, early symptoms, and when to get checked."}
              </p>
              <div className="home-card-link">{isID ? "Buka Edukasi" : "Open Education"}</div>
            </Link>

            <Link to="/risk-factors" className="home-card">
              <div className="home-card-top">
                <div className="home-card-ico" aria-hidden="true">
                  <svg className="ico-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="home-card-arrow">→</div>
              </div>
              <h3 className="home-card-title">{isID ? "Faktor Risiko" : "Risk Factors"}</h3>
              <p className="home-card-text">
                {isID
                  ? "Kenali pemicu risiko dan langkah pencegahan yang realistis."
                  : "Understand risk drivers and practical prevention steps."}
              </p>
              <div className="home-card-link">{isID ? "Lihat Faktor Risiko" : "Open Risk Factors"}</div>
            </Link>

            <Link to="/lifestyle" className="home-card">
              <div className="home-card-top">
                <div className="home-card-ico" aria-hidden="true">
                  <svg className="ico-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6.6-7 11-7 11z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="home-card-arrow">→</div>
              </div>
              <h3 className="home-card-title">{isID ? "Gaya Hidup Sehat" : "Healthy Lifestyle"}</h3>
              <p className="home-card-text">
                {isID
                  ? "Panduan kebiasaan harian: makan, aktivitas, tidur, dan stres."
                  : "Daily habits: eating, activity, sleep, and stress."}
              </p>
              <div className="home-card-link">{isID ? "Buka Gaya Hidup" : "Open Lifestyle"}</div>
            </Link>

            <Link to="/about" className="home-card">
              <div className="home-card-top">
                <div className="home-card-ico" aria-hidden="true">
                  <svg className="ico-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12a4 4 0 1 0-0.01 0z" stroke="white" strokeWidth="2"/>
                    <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="home-card-arrow">→</div>
              </div>
              <h3 className="home-card-title">{isID ? "Tentang PredDia" : "About PredDia"}</h3>
              <p className="home-card-text">
                {isID
                  ? "Tujuan, batasan hasil, privasi, dan langkah setelah skrining."
                  : "Purpose, limitations, privacy, and next steps."}
              </p>
              <div className="home-card-link">{isID ? "Baca Tentang Kami" : "Open About"}</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY (PUTIH) ================= */}
      <section id="features">
        <div className="container">
          <div className="lp-head">
            <h2 className="lp-title">{isID ? "Kenapa PredDia?" : "Why PredDia?"}</h2>
            <div className="lp-underline" />
            <p className="lp-desc">
              {isID
                ? "Skrining awal yang ringkas, ditambah edukasi yang relevan, dan arahan langkah berikutnya yang bisa ditindaklanjuti."
                : "Concise early screening, relevant education, and actionable next-step guidance."}
            </p>
          </div>

          <div className="lp-why">
            {/* KIRI — PENJELASAN UTAMA (COPY KAMU) */}
            <div className="lp-why-points">
              <div className="lp-why-row">
                <div className="lp-why-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="lp-why-title">{isID ? "Skrining Risiko Awal" : "Early Risk Screening"}</div>
                  <div className="lp-why-sub">
                    {isID
                      ? "PredDia membantu mengidentifikasi tingkat risiko diabetes secara dini melalui data kesehatan dasar yang umum diketahui, sehingga pengguna memiliki gambaran awal sebelum melakukan pemeriksaan lanjutan."
                      : "PredDia helps identify diabetes risk early using commonly known basic health data, giving users an initial overview before further checks."}
                  </div>
                </div>
              </div>

              <div className="lp-why-row">
                <div className="lp-why-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 19.5V6.5c0-1 1-2 2-2h14v15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 8h7M7 11h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="lp-why-title">{isID ? "Edukasi Terarah & Kontekstual" : "Guided, Contextual Education"}</div>
                  <div className="lp-why-sub">
                    {isID
                      ? "Hasil skrining dilengkapi dengan materi edukasi yang relevan, mencakup faktor risiko, pencegahan, dan pola hidup sehat yang sesuai dengan kondisi pengguna."
                      : "Screening results are complemented with relevant education on risk factors, prevention, and lifestyle habits aligned with the user’s context."}
                  </div>
                </div>
              </div>

              <div className="lp-why-row">
                <div className="lp-why-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="lp-why-title">{isID ? "Arahan Setelah Hasil" : "Guidance After Results"}</div>
                  <div className="lp-why-sub">
                    {isID
                      ? "PredDia tidak berhenti pada hasil prediksi. Pengguna diberikan arah langkah selanjutnya secara edukatif, termasuk kapan perlu memperhatikan gaya hidup dan kapan disarankan melakukan pemeriksaan lebih lanjut."
                      : "PredDia doesn’t stop at the prediction. Users receive educational next-step guidance, including when to focus on lifestyle and when to consider further testing."}
                  </div>
                </div>
              </div>
            </div>

            {/* KANAN — NILAI TAMBAH (WHY IT MATTERS) */}
            <aside className="lp-why-side">
              <div className="lp-stat">
                <div className="lp-stat-num">1</div>
                <div className="lp-stat-txt">
                  {isID ? "Berbasis data, bukan asumsi" : "Data-driven, not assumptions"}
                </div>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">2</div>
                <div className="lp-stat-txt">
                  {isID ? "Mendukung literasi kesehatan" : "Supports health literacy"}
                </div>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">✓</div>
                <div className="lp-stat-txt">
                  {isID ? "Dirancang untuk penggunaan non-medis" : "Designed for non-medical use"}
                </div>
              </div>

              <div className="lp-why-quote">
                <div className="lp-quote-mark">“</div>
                <div className="lp-quote-text">
                  {isID
                    ? "PredDia membantu pengguna memahami risiko secara lebih terukur, lalu mengarahkan langkah yang lebih tepat untuk pencegahan."
                    : "PredDia helps users understand risk more measurably and guides better prevention steps."}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= HOW (STEPPER HIJAU) ================= */}
      <section id="how">
        <div className="container">
          <div className="lp-head">
            <h2 className="lp-title">{isID ? "Cara Prediksi" : "How It Works"}</h2>
            <div className="lp-underline" />
            <p className="lp-desc">
              {isID
                ? "Ikuti alur sederhana berikut untuk melakukan skrining."
                : "Follow the simple flow below to run the screening."}
            </p>
          </div>

          <div className="flow-wrap">
            <div className="flow-steps">
              <div className="flow-step">
                <div className="flow-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 8v4M17 10h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flow-no">1.</div>
                <div className="flow-title">{isID ? "Registrasi / Login" : "Register / Login"}</div>
                <div className="flow-sub">
                  {isID ? "Masuk untuk mengakses form prediksi." : "Login to access the prediction form."}
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flow-no">2.</div>
                <div className="flow-title">{isID ? "Lengkapi Data" : "Fill Inputs"}</div>
                <div className="flow-sub">
                  {isID ? "Isi data kesehatan dasar sesuai yang kamu ketahui." : "Enter basic health inputs you know."}
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 3h8v4H8V3z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 7h12v14H6V7z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 11h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flow-no">3.</div>
                <div className="flow-title">{isID ? "Kirim Form" : "Submit"}</div>
                <div className="flow-sub">
                  {isID ? "Klik prediksi untuk memproses data." : "Submit to process your inputs."}
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flow-no">4.</div>
                <div className="flow-title">{isID ? "Selesai" : "Done"}</div>
                <div className="flow-sub">
                  {isID ? "Baca hasil & arahan edukatif." : "Read results & guidance."}
                </div>
              </div>
            </div>

            <div className="flow-foot">
              <div className="flow-note">
                <div className="flow-note-badge">i</div>
                <div>
                  {isID
                    ? "PredDia bersifat edukatif (bukan diagnosis). Jika kamu punya gejala/riwayat, pertimbangkan cek gula darah & konsultasi tenaga kesehatan."
                    : "PredDia is educational (not a diagnosis). If you have symptoms/history, consider testing & consulting professionals."}
                </div>
              </div>

              <div className="flow-actions">
                <Link to="/login" className="btn-pill btn-primary">
                  {isID ? "Mulai Prediksi" : "Start Prediction"}
                </Link>
                <Link to="/education" className="btn-pill link-soft">
                  {isID ? "Baca Edukasi" : "Read Education"} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">
              {isID ? "Siap Mengecek Risiko Diabetes?" : "Ready to Check Diabetes Risk?"}
            </h2>
            <p className="cta-sub">
              {isID
                ? "Mulai skrining sekarang, lalu lanjutkan dengan edukasi dan langkah pencegahan."
                : "Start screening now, then continue with education and prevention steps."}
            </p>
            <Link to="/login" className="btn-pill btn-primary">
              {isID ? "Mulai Prediksi" : "Start Prediction"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
