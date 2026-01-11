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
  /* ---------- TOP SECTION WRAP ---------- */
.lp-top{
  padding: 34px 0 42px;
  background:
    radial-gradient(900px 520px at 10% 5%, rgba(255, 208, 88, .22), transparent 58%),
    radial-gradient(900px 520px at 92% 0%, rgba(62, 180, 137, .18), transparent 60%),
    radial-gradient(700px 420px at 50% 55%, rgba(15, 63, 53, .06), transparent 62%),
    linear-gradient(180deg, #f7fbf9 0%, #eef7f3 55%, #f8fbfa 100%);
  color: #0f172a;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.lp-top::before{
  content:"";
  position:absolute;
  left:-20%;
  top:-120px;
  width:140%;
  height:180px;
  background: linear-gradient(
    90deg,
    rgba(62,180,137,0),
    rgba(62,180,137,.22),
    rgba(255,208,88,.22),
    rgba(62,180,137,0)
  );
  filter: blur(18px);
  opacity:.85;
  transform: rotate(-2deg);
  pointer-events:none;
}

/* ---------- TOPBAR ---------- */
.lp-top .lp-topbar{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.lp-top .lp-brand{
  display:flex;
  gap: 12px;
  align-items:flex-start;
  min-width: 0;
}

.lp-top .lp-badge{
  background: rgba(15, 63, 53, .10);
  border: 1px solid rgba(15, 63, 53, .18);
  color: #0f3f35;
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 900;
  letter-spacing: .3px;
  flex: 0 0 auto;
}

.lp-top .lp-title{
  font-weight: 950;
  letter-spacing: -0.2px;
  color:#0f172a;
  line-height: 1.15;
  font-size: 20px;
}

.lp-top .lp-sub{
  margin-top: 4px;
  color: rgba(15, 23, 42, .72);
  font-size: 14px;
  line-height: 1.6;
  max-width: 70ch;
}

/* ---------- ACTION BUTTONS ---------- */
.lp-top .lp-actions{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items:center;
  justify-content:flex-end;
}

.lp-top .lp-linkbtn{
  text-decoration:none !important;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 900;
  border: 1px solid rgba(15, 23, 42, .14);
  background: rgba(255,255,255,.88);
  color: #0f172a !important;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease, filter .15s ease;
}

.lp-top .lp-linkbtn:hover{
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(0,0,0,.10);
  border-color: rgba(62, 180, 137, .35);
}

.lp-top .lp-linkbtn-primary{
  border: 1px solid rgba(15, 63, 53, .20);
  background: linear-gradient(135deg, rgba(15,63,53,.95), rgba(17,94,77,.92));
  color:#fff !important;
  box-shadow: 0 14px 30px rgba(15,63,53,.18);
}
.lp-top .lp-linkbtn-primary:hover{
  box-shadow: 0 18px 40px rgba(15,63,53,.22);
}

/* ---------- QUICK GRID (4 kotak atas) ---------- */
.lp-top .lp-quickgrid{
  margin-top: 18px;
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.lp-top .lp-quick{
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, .10);
  background: rgba(255,255,255,.78);
  backdrop-filter: blur(6px);
  box-shadow: 0 14px 34px rgba(0,0,0,.06);
  padding: 14px 14px;
  display:flex;
  align-items:center;
  gap: 12px;
  text-decoration:none !important;
  color: inherit !important;
  position: relative;
  overflow: hidden;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease, filter .15s ease;
}

.lp-top .lp-quick::after{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(420px 160px at 15% 0%, rgba(255,208,88,.18), transparent 60%),
    radial-gradient(420px 160px at 85% 10%, rgba(62,180,137,.16), transparent 60%);
  opacity:.9;
  pointer-events:none;
}

.lp-top .lp-quick:hover{
  transform: translateY(-2px);
  box-shadow: 0 20px 46px rgba(0,0,0,.10);
  border-color: rgba(255, 208, 88, .55);
  filter: brightness(1.01);
}

.lp-top .lp-quick-ico{
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: rgba(15,63,53,.10);
  border: 1px solid rgba(15,63,53,.14);
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
}

/* icon block */
.lp-top .lp-ico-why::after,
.lp-top .lp-ico-flow::after,
.lp-top .lp-ico-explore::after,
.lp-top .lp-ico-start::after{
  content:"";
  position:absolute;
  inset: 12px;
  border-radius: 12px;
  background: rgba(15,63,53,.55);
}
.lp-top .lp-ico-flow::after{ background: rgba(15,63,53,.45); }
.lp-top .lp-ico-explore::after{ background: rgba(15,63,53,.50); }
.lp-top .lp-ico-start::after{ background: rgba(15,63,53,.60); }

.lp-top .lp-quick-title{ font-weight: 950; color:#0f172a; position:relative; z-index:1; }
.lp-top .lp-quick-sub{ color: rgba(15,23,42,.68); font-size: 13px; position:relative; z-index:1; }
.lp-top .lp-quick-arrow{ margin-left:auto; font-weight: 950; opacity:.75; position:relative; z-index:1; }

/* ---------- NOTE ---------- */
.lp-top .lp-note{
  margin-top: 16px;
  border-radius: 16px;
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(15, 23, 42, .10);
  box-shadow: 0 14px 34px rgba(0,0,0,.06);
  padding: 12px 12px;
  display:flex;
  gap: 12px;
  align-items:flex-start;
}

.lp-top .lp-note-ico{
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display:grid;
  place-items:center;
  background: rgba(255, 208, 88, .34);
  border: 1px solid rgba(255, 208, 88, .55);
  font-weight: 950;
  color: #0f172a;
  flex: 0 0 auto;
}

.lp-top .lp-note-title{ font-weight: 950; color:#0f172a; line-height:1.1; }
.lp-top .lp-note-sub{ color: rgba(15, 23, 42, .72); line-height: 1.6; font-size: 14px; }

/* ---------- EXPLORE (4 card) ---------- */
.lp-top #explore{ margin-top: 22px; }
.lp-top .home-head{ margin-bottom: 14px; }
.lp-top .home-h2{ margin:0; font-weight: 950; letter-spacing: -0.2px; color:#0f172a; }
.lp-top .home-desc{ margin-top: 8px; color: rgba(15,23,42,.72); max-width: 80ch; }

.lp-top .home-cardgrid{
  display:grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 14px;
  margin-top: 12px;
}

.lp-top .home-card{
  border-radius: 20px !important;
  padding: 16px 16px 14px;
  border: 1px solid rgba(15, 63, 53, .18) !important;
  background:
    radial-gradient(520px 220px at 12% 0%, rgba(255,208,88,.18), transparent 60%),
    linear-gradient(180deg, #e8f2ef 0%, #eef5f3 100%) !important;
  box-shadow: 0 18px 45px rgba(0,0,0,.08) !important;
  text-decoration:none !important;
  color: #0f172a !important;
  min-height: 210px;
  display:flex;
  flex-direction: column;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}

.lp-top .home-card:hover{
  transform: translateY(-2px);
  border-color: rgba(62,180,137,.35) !important;
  box-shadow: 0 22px 55px rgba(0,0,0,.12) !important;
}

.lp-top .home-card-top{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 10px;
}

.lp-top .home-card-ico{
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(15,63,53,.10);
  border: 1px solid rgba(15,63,53,.14);
  position: relative;
}
.lp-top .home-card-ico::after{
  content:"";
  position:absolute;
  inset: 14px;
  border-radius: 10px;
  background: rgba(15,63,53,.55);
}
.lp-top .home-ico-risk::after{ background: rgba(15,63,53,.48); }
.lp-top .home-ico-life::after{ background: rgba(15,63,53,.52); }
.lp-top .home-ico-about::after{ background: rgba(15,63,53,.60); }
.lp-top .home-ico-edu::after{ background: rgba(15,63,53,.56); }

.lp-top .home-card-arrow{ font-weight: 950; opacity: .75; }
.lp-top .home-card-title{ font-weight: 950; letter-spacing: -0.2px; margin: 6px 0 6px; }
.lp-top .home-card-text{ color: rgba(15, 23, 42, .72); line-height: 1.55; margin: 0; flex: 1; }
.lp-top .home-card-link{ color: #0f3f35; font-weight: 800; margin-top: 12px; }

/* ---------- WHY SECTION (di bawah, scoped ke landing sections ini) ---------- */
.home-section .lp-why{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 16px;
  margin-top: 12px;
}

.home-section .lp-why-points{
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(15,23,42,.10);
  border-radius: 18px;
  box-shadow: 0 14px 34px rgba(0,0,0,.06);
  padding: 16px 16px;
}

.home-section .lp-why-row{
  display:flex;
  gap: 12px;
  align-items:flex-start;
  padding: 14px 6px;
  border-bottom: 1px solid rgba(0,0,0,.06);
}
.home-section .lp-why-row:last-child{ border-bottom: 0; }

.home-section .lp-why-ic{
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: rgba(62,180,137,.12);
  border: 1px solid rgba(62,180,137,.20);
  flex: 0 0 auto;
}

.home-section .lp-why-title{ font-weight: 950; color:#0f172a; }
.home-section .lp-why-sub{ margin-top: 4px; color: rgba(15,23,42,.72); line-height: 1.6; font-size: 14px; }

.home-section .lp-why-side{
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(15,23,42,.10);
  border-radius: 18px;
  box-shadow: 0 14px 34px rgba(0,0,0,.06);
  padding: 14px 14px;
}

.home-section .lp-stat{
  display:flex;
  gap: 12px;
  align-items:center;
  padding: 10px 10px;
  border-radius: 16px;
  background: rgba(62,180,137,.08);
  border: 1px solid rgba(62,180,137,.14);
}
.home-section .lp-stat-num{
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display:grid;
  place-items:center;
  background: rgba(62,180,137,.14);
  border: 1px solid rgba(62,180,137,.22);
  font-weight: 950;
  color: #0f3f35;
}
.home-section .lp-stat-txt{ color: rgba(15,23,42,.78); font-weight: 800; font-size: 13.5px; line-height: 1.3; }

.home-section .lp-why-quote{
  margin-top: 12px;
  border-radius: 18px;
  padding: 12px 12px;
  background: rgba(255,208,88,.10);
  border: 1px solid rgba(255,208,88,.22);
  position: relative;
  overflow: hidden;
}
.home-section .lp-quote-mark{
  position:absolute;
  top: 6px;
  right: 14px;
  font-size: 56px;
  font-weight: 950;
  opacity: .18;
}
.home-section .lp-quote-text{
  font-weight: 850;
  color: rgba(15,23,42,.78);
  line-height: 1.6;
}

/* ---------- PRED FLOW ---------- */
.home-section .pred-flow{
  margin-top: 10px;
  border-radius: 18px;
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(15,23,42,.10);
  box-shadow: 0 14px 34px rgba(0,0,0,.06);
  overflow: hidden;
}
.home-section .pred-flow-step{
  display:flex;
  gap: 12px;
  padding: 14px 14px;
  border-bottom: 1px solid rgba(0,0,0,.06);
  align-items:flex-start;
}
.home-section .pred-flow-step:last-child{ border-bottom: 0; }

.home-section .pred-flow-no{
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display:grid;
  place-items:center;
  background: rgba(255,208,88,.22);
  border: 1px solid rgba(255,208,88,.35);
  color: #92400e;
  font-weight: 950;
  flex: 0 0 auto;
}

.home-section .pred-flow-title{ font-weight: 950; color:#0f172a; }
.home-section .pred-flow-text{ margin-top: 4px; color: rgba(15,23,42,.72); line-height: 1.6; font-size: 14px; }

.home-section .home-hi{
  display:inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255,208,88,.22);
  border: 1px solid rgba(255,208,88,.30);
  color: #92400e;
  font-weight: 950;
}

/* ---------- FINAL CTA (home-cta) ---------- */
.home-cta{
  padding: 66px 0;
  background:
    radial-gradient(900px 420px at 20% 30%, rgba(62,180,137,.10), transparent 60%),
    radial-gradient(900px 420px at 80% 20%, rgba(255,208,88,.14), transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f7fbf9 100%);
  border-top: 1px solid rgba(0,0,0,.06);
}

.home-cta .home-cta-title{
  font-weight: 950;
  letter-spacing: -0.3px;
  color:#0f172a;
}
.home-cta .home-cta-sub{
  margin: 12px auto 18px;
  max-width: 80ch;
  color: rgba(15,23,42,.72);
}

/* tombol kuning yang kamu pakai: home-btn-primary */
.home-btn-primary.btn.btn-secondary,
a.btn.btn-secondary.home-btn-primary,
button.btn.btn-secondary.home-btn-primary{
  background: linear-gradient(135deg,#FFD54F,#FBC02D) !important;
  border: none !important;
  color: #1b1f1d !important;
  font-weight: 950 !important;
  border-radius: 999px !important;
  padding: 12px 22px !important;
  box-shadow: 0 16px 40px rgba(0,0,0,.18);
}
.home-btn-primary.btn.btn-secondary:hover,
a.btn.btn-secondary.home-btn-primary:hover{
  filter: brightness(1.06);
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 992px){
  .lp-top .lp-topbar{ flex-direction: column; align-items:flex-start; }
  .lp-top .lp-actions{ justify-content:flex-start; }
  .lp-top .lp-quickgrid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .lp-top .home-cardgrid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .home-section .lp-why{ grid-template-columns: 1fr; }
}
@media (max-width: 576px){
  .lp-top .lp-quickgrid{ grid-template-columns: 1fr; }
  .lp-top .home-cardgrid{ grid-template-columns: 1fr; }
}
  /* =========================================================
   LANDING PAGE – FIX SECTION #how (Cara Prediksi)
   Target: rapihin area note + tombol biar nyatu & gak “ngambang”
   Aman: scoped ke #how aja
========================================================= */

#how.home-section-alt{
  /* bikin background section lebih “jadi” dan mengurangi kesan putih kosong */
  background:
    radial-gradient(900px 420px at 15% 20%, rgba(59,93,80,.10), transparent 60%),
    radial-gradient(900px 420px at 85% 30%, rgba(255,213,79,.10), transparent 60%),
    linear-gradient(180deg, #f7fbf9 0%, #eef4f1 55%, #f8fbfa 100%);
  padding-bottom: 64px; /* rapihin jarak bawah biar gak kebanyakan kosong */
}

/* samain lebar pred-flow + foot biar sejajar */
#how .pred-flow{
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}

#how .pred-flow-foot{
  max-width: 980px;
  margin: 14px auto 0;
  padding: 14px 14px;
  border-radius: 16px;

  /* bikin “foot” berasa 1 paket dengan card step */
  background: rgba(255,255,255,.86);
  border: 1px solid rgba(59,93,80,.14);
  box-shadow: 0 14px 34px rgba(0,0,0,.06);

  align-items: center;
}

/* note biar rapi dan gak kepanjangan */
#how .pred-flow-note{
  margin: 0;
  color: rgba(17,24,39,.72);
  max-width: 64ch;
}

/* tombol & link kanan: jadi 1 bar yang rapi */
#how .pred-flow-actions{
  margin-left: auto;
  gap: 10px;
  align-items: center;
}

/* tombol kuning tetap sama, cuma rapihin feel */
#how .pred-flow-actions .home-btn-primary{
  border-radius: 999px !important;
  padding: 12px 22px !important;
}

/* link “Baca Edukasi” jangan kayak teks doang (tetap link, tapi lebih kebaca) */
#how .pred-flow-link{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(59,93,80,.06);
  border: 1px solid rgba(59,93,80,.14);
  text-decoration: none !important;
  font-weight: 900;
}

/* responsive: foot stack rapi */
@media (max-width: 768px){
  #how .pred-flow-foot{
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  #how .pred-flow-actions{
    margin-left: 0;
    width: 100%;
  }
  #how .pred-flow-actions .home-btn-primary,
  #how .pred-flow-link{
    width: 100%;
    justify-content: center;
  }
}
/* ===== FINAL: KOTAK HIJAU #3b5d50 ===== */
.lp-top .home-card{
  background:
    radial-gradient(420px 200px at 12% 10%, rgba(59,93,80,.35), transparent 62%),
    radial-gradient(420px 200px at 90% 18%, rgba(59,93,80,.25), transparent 62%),
    linear-gradient(
      180deg,
      rgba(230,240,237,.98),
      rgba(200,224,217,.92)
    ) !important;

  border: 1.5px solid rgba(59,93,80,.55) !important;
  box-shadow:
    0 24px 64px rgba(59,93,80,.18),
    0 18px 40px rgba(0,0,0,.08) !important;

  color: #0f172a !important;
}

/* hover lebih “hidup” */
.lp-top .home-card:hover{
  transform: translateY(-3px);
  border-color: #3b5d50 !important;
  box-shadow:
    0 30px 80px rgba(59,93,80,.28),
    0 22px 60px rgba(0,0,0,.10) !important;
}

/* icon kotak kecil di card */
.lp-top .home-card-ico{
  background: rgba(59,93,80,.18) !important;
  border: 1px solid rgba(59,93,80,.45) !important;
}
.lp-top .home-card-ico::after{
  background: #3b5d50 !important;
}

/* judul & teks */
.lp-top .home-card-title{
  color: #0b1f1a !important;
}
.lp-top .home-card-text{
  color: rgba(11,31,26,.78) !important;
}

/* link bawah (aksi) */
.lp-top .home-card-link{
  color: #3b5d50 !important;
  font-weight: 900;
}
/* =========================================================
   BACKGROUND LANDING – HIJAU #3b5d50 + AKSEN KUNING
   Berlaku untuk section lp-top (background besar)
========================================================= */

.lp-top{
  background:
    /* aksen kuning kiri atas */
    radial-gradient(
      900px 520px at 8% 6%,
      rgba(255, 208, 88, .30),
      transparent 60%
    ),

    /* aksen kuning kanan */
    radial-gradient(
      800px 480px at 92% 12%,
      rgba(255, 208, 88, .22),
      transparent 62%
    ),

    /* hijau lembut tengah */
    radial-gradient(
      1000px 600px at 50% 45%,
      rgba(59, 93, 80, .18),
      transparent 65%
    ),

    /* gradasi utama hijau */
    linear-gradient(
      180deg,
      #f1f7f5 0%,
      #dfeee8 35%,
      #cfe4dc 70%,
      #eaf4f1 100%
    ) !important;

  color: #0f172a;
}

/* garis aksen biar berasa desain (opsional tapi cakep) */
.lp-top::before{
  content:"";
  position:absolute;
  left:-20%;
  top:-140px;
  width:140%;
  height:220px;
  background: linear-gradient(
    90deg,
    rgba(59,93,80,0),
    rgba(59,93,80,.35),
    rgba(255,208,88,.45),
    rgba(59,93,80,.35),
    rgba(59,93,80,0)
  );
  filter: blur(26px);
  opacity:.75;
  transform: rotate(-2deg);
  pointer-events:none;
}

/* biar section bawah nyambung halus */
.lp-top{
  border-bottom: 1px solid rgba(59,93,80,.18);
}

/* =========================================================
   SECTION #how – BACKGROUND HIJAU #3b5d50 + AKSEN KUNING
   Fokus: area Cara Prediksi saja
========================================================= */

#how.home-section-alt{
  background:
    /* aksen kuning kiri */
    radial-gradient(
      900px 500px at 12% 18%,
      rgba(255, 208, 88, .28),
      transparent 60%
    ),

    /* aksen kuning kanan */
    radial-gradient(
      800px 480px at 88% 22%,
      rgba(255, 208, 88, .22),
      transparent 62%
    ),

    /* glow hijau tengah */
    radial-gradient(
      1000px 600px at 50% 45%,
      rgba(59, 93, 80, .22),
      transparent 65%
    ),

    /* base hijau lembut */
    linear-gradient(
      180deg,
      #eef5f2 0%,
      #d6e7e0 35%,
      #c4ddd3 70%,
      #eaf4f1 100%
    );

  padding-top: 56px;
  padding-bottom: 72px;
  border-top: 1px solid rgba(59,93,80,.18);
  border-bottom: 1px solid rgba(59,93,80,.18);
}

/* judul & deskripsi biar kontras */
#how .home-h2{
  color: #0f172a;
}

#how .home-desc{
  color: rgba(15,23,42,.72);
}

/* card langkah prediksi – biar makin “nempel” */
#how .pred-flow{
  background: rgba(255,255,255,.88);
  border: 1px solid rgba(59,93,80,.20);
}

/* angka step kuning biar nyambung */
#how .pred-flow-no{
  background: rgba(255,208,88,.28);
  border: 1px solid rgba(255,208,88,.40);
  color: #7a4a00;
}

/* foot (note + tombol) nyatu sama card */
#how .pred-flow-foot{
  background: rgba(255,255,255,.88);
  border: 1px solid rgba(59,93,80,.20);
}

`}</style>

      {/* ================= TOP SECTION ================= */}
      <section className="lp-top" id="top">
        <div className="container">
          <div className="lp-topbar">
            <div className="lp-brand">
              <div className="lp-badge">PredDia</div>
              <div className="lp-meta">
                <div className="lp-title">{isID ? "Beranda" : "Home"}</div>
                <div className="lp-sub">
                  {isID
                    ? "Platform Prediksi risiko diabetes dan edukasi diabetes untuk pencegahan awal yang lebih baik."
                    : "Early diabetes risk screening + prevention education."}
                </div>
              </div>
            </div>

            <div className="lp-actions">
              <Link to="/education" className="lp-linkbtn">
                {isID ? "Baca Edukasi" : "Read Education"}
              </Link>
              <Link to="/login" className="lp-linkbtn lp-linkbtn-primary">
                {isID ? "Mulai Prediksi" : "Start Prediction"}
              </Link>
            </div>
          </div>

          {/* QUICKGRID (tetap yang kecil di atas, tidak diubah) */}
          <div className="lp-quickgrid" aria-label="Quick access">
            <a href="#explore" className="lp-quick lp-quick-1">
              <div className="lp-quick-ico lp-ico-why" aria-hidden="true" />
              <div className="lp-quick-text">
                <div className="lp-quick-title">{isID ? "Jelajahi PredDia" : "Explore PredDia"}</div>
                <div className="lp-quick-sub">{isID ? "Edukasi • Risiko • Gaya Hidup" : "Education • Risk • Lifestyle"}</div>
              </div>
              <div className="lp-quick-arrow">→</div>
            </a>

              <a href="#features" className="lp-quick lp-quick-3">
              <div className="lp-quick-ico lp-ico-explore" aria-hidden="true" />
              <div className="lp-quick-text">
                <div className="lp-quick-title">{isID ? "Kenapa PredDia" : "Why PredDia"}</div>
                <div className="lp-quick-sub">
                  {isID ? "Alasan singkat & jelas" : "Clear reasons"}
                </div>
              </div>
              <div className="lp-quick-arrow">→</div>
            </a>

            <a href="#how" className="lp-quick lp-quick-2">
              <div className="lp-quick-ico lp-ico-flow" aria-hidden="true" />
              <div className="lp-quick-text">
                <div className="lp-quick-title">{isID ? "Cara Prediksi" : "Prediction Flow"}</div>
                <div className="lp-quick-sub">{isID ? "4 langkah Prediksi" : "4 prediction steps"}</div>
              </div>
              <div className="lp-quick-arrow">→</div>
            </a>


            <a href="#cta" className="lp-quick lp-quick-4">
              <div className="lp-quick-ico lp-ico-start" aria-hidden="true" />
              <div className="lp-quick-text">
                <div className="lp-quick-title">{isID ? "Mulai" : "Start"}</div>
                <div className="lp-quick-sub">{isID ? "Langsung Prediksi" : "Go to prediction"}</div>
              </div>
              <div className="lp-quick-arrow">→</div>
            </a>
          </div>

          <div className="lp-note">
            <div className="lp-note-ico" aria-hidden="true">
              i
            </div>
            <div className="lp-note-text">
              <div className="lp-note-title">{isID ? "Catatan" : "Note"}</div>
              <div className="lp-note-sub">
                {isID
                  ? "PredDia bersifat edukatif dan bukan pengganti diagnosis. Jika kamu punya gejala atau riwayat, pertimbangkan pemeriksaan dan konsultasi."
                  : "PredDia is educational and not a diagnosis. If you have symptoms or history, consider testing and consulting."}
              </div>
            </div>
          </div>

          {/* ================= 4 KOTAK IJO (HOME-CARDGRID) DIPINDAH KE ATAS ================= */}
          <div id="explore">
            <div className="home-head">
              <h2 className="home-h2">{isID ? "Jelajahi PredDia" : "Explore PredDia"}</h2>
              <p className="home-desc">
                {isID
                  ? "Pilih topik yang kamu butuhkan untuk lanjut belajar."
                  : "Pick a topic you need to continue learning."}
              </p>
            </div>

            <div className="home-cardgrid">
              <Link to="/education" className="home-card home-card-1">
                <div className="home-card-top">
                  <div className="home-card-ico home-ico-edu" aria-hidden="true" />
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

              <Link to="/risk-factors" className="home-card home-card-2">
                <div className="home-card-top">
                  <div className="home-card-ico home-ico-risk" aria-hidden="true" />
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

              <Link to="/lifestyle" className="home-card home-card-3">
                <div className="home-card-top">
                  <div className="home-card-ico home-ico-life" aria-hidden="true" />
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

              <Link to="/about" className="home-card home-card-4">
                <div className="home-card-top">
                  <div className="home-card-ico home-ico-about" aria-hidden="true" />
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
        </div>
      </section>

      {/* ================= WHY (REPLACE FEATURES) ================= */}
      <section className="home-section" id="features">
        <div className="container">
          <div className="home-head">
            <h2 className="home-h2">{isID ? "Kenapa PredDia?" : "About PredDia"}</h2>
            <p className="home-desc">
              {isID
                ? "PredDia adalah website skrining awal risiko diabetes yang membantu kamu memahami hasil dan menemukan langkah lanjutan yang tepat."
                : "PredDia is an early diabetes risk-screening website that helps you understand results and choose the right next steps."}
            </p>
          </div>

          <div className="lp-why">
            <div className="lp-why-points">
              <div className="lp-why-row">
                <div className="lp-why-ic lp-why-ic-1" aria-hidden="true" />
                <div className="lp-why-text">
                  <div className="lp-why-title">{isID ? "Skrining Risiko (Awal)" : "Early Risk Screening"}</div>
                  <div className="lp-why-sub">
                    {isID
                      ? "Kamu bisa mulai skrining dengan mengisi data kesehatan sederhana untuk mendapatkan gambaran tingkat risiko."
                      : "Start screening by entering simple health data to get an early risk overview."}
                  </div>
                </div>
              </div>

              <div className="lp-why-row">
                <div className="lp-why-ic lp-why-ic-2" aria-hidden="true" />
                <div className="lp-why-text">
                  <div className="lp-why-title">{isID ? "Edukasi & Informasi Terarah" : "Guided Education"}</div>
                  <div className="lp-why-sub">
                    {isID
                      ? "Tersedia materi edukasi: penjelasan diabetes, faktor risiko, pencegahan, dan kebiasaan yang mendukung hidup sehat."
                      : "Learn about diabetes, risk factors, prevention, and healthy habits through structured educational content."}
                  </div>
                </div>
              </div>

              <div className="lp-why-row">
                <div className="lp-why-ic lp-why-ic-3" aria-hidden="true" />
                <div className="lp-why-text">
                  <div className="lp-why-title">{isID ? "Arah Lanjutan Setelah Hasil" : "Next Steps After Results"}</div>
                  <div className="lp-why-sub">
                    {isID
                      ? "Setelah melihat hasil, kamu diarahkan ke langkah yang relevan—mulai dari edukasi, pencegahan, sampai saran pemeriksaan bila diperlukan."
                      : "After seeing the result, you’re guided to relevant next steps—education, prevention, and when to consider testing."}
                  </div>
                </div>
              </div>
            </div>

            <aside className="lp-why-side">
              <div className="lp-why-stats">
                <div className="lp-stat">
                  <div className="lp-stat-num">1</div>
                  <div className="lp-stat-txt">
                    {isID ? "Skrining awal untuk gambaran risiko" : "Early screening for risk overview"}
                  </div>
                </div>
                <div className="lp-stat">
                  <div className="lp-stat-num">2</div>
                  <div className="lp-stat-txt">
                    {isID ? "Halaman edukasi utama yang bisa kamu jelajahi" : "Main education pages to explore"}
                  </div>
                </div>
                <div className="lp-stat">
                  <div className="lp-stat-num">✓</div>
                  <div className="lp-stat-txt">
                    {isID ? "Ringkas, fokus, dan mudah dibaca" : "Concise, focused, and readable"}
                  </div>
                </div>
              </div>

              <div className="lp-why-quote">
                <div className="lp-quote-mark">“</div>
                <div className="lp-quote-text">
                  {isID
                    ? "Tujuannya sederhana: bantu kamu memahami risiko sejak awal, lalu tahu langkah sehat berikutnya."
                    : "The goal is simple: help you understand risk early and take the next healthy step."}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (PREDICTION ONLY) ================= */}
      <section className="home-section home-section-alt" id="how">
        <div className="container">
          <div className="home-head">
            <h2 className="home-h2">{isID ? "Cara Prediksi" : "Prediction Flow"}</h2>
            <p className="home-desc">
              {isID
                ? "Prediksi Diabetes menggunakan data kesehatan sederhana guna melihat risiko diabetes anda untuk pencegahan lebih awal."
                : "Prediction uses simple health data to assess your diabetes risk for early prevention."}
            </p>
          </div>

          <div className="pred-flow">
            <div className="pred-flow-step">
              <div className="pred-flow-no">1</div>
              <div className="pred-flow-body">
                <div className="pred-flow-title">{isID ? "Masuk ke Halaman Prediksi" : "Open Prediction Page"}</div>
                <div className="pred-flow-text">
                  {isID ? "Klik tombol " : "Click "}
                  <span className="home-hi">{isID ? "Mulai Prediksi" : "Start Prediction"}</span>
                  {isID ? " untuk membuka form." : " to open the form."}
                </div>
              </div>
            </div>

            <div className="pred-flow-step">
              <div className="pred-flow-no">2</div>
              <div className="pred-flow-body">
                <div className="pred-flow-title">{isID ? "Isi Data yang Diminta" : "Fill Required Inputs"}</div>
                <div className="pred-flow-text">
                  {isID
                    ? "Masukkan data kesehatan sederhana sesuai yang kamu ketahui."
                    : "Enter simple health inputs based on what you know."}
                </div>
              </div>
            </div>

            <div className="pred-flow-step">
              <div className="pred-flow-no">3</div>
              <div className="pred-flow-body">
                <div className="pred-flow-title">{isID ? "Kirim untuk Diproses" : "Submit to Process"}</div>
                <div className="pred-flow-text">
                  {isID
                    ? "Klik tombol prediksi, sistem akan memproses data kamu."
                    : "Click predict, the system will process your inputs."}
                </div>
              </div>
            </div>

            <div className="pred-flow-step">
              <div className="pred-flow-no">4</div>
              <div className="pred-flow-body">
                <div className="pred-flow-title">{isID ? "Baca Hasil & Arahan" : "Read Result & Guidance"}</div>
                <div className="pred-flow-text">
                  {isID
                    ? "Lihat kategori risiko dan arahan langkah berikutnya (edukatif, bukan diagnosis)."
                    : "View risk category and next-step guidance (educational, not a diagnosis)."}
                </div>
              </div>
            </div>
          </div>

          <div className="pred-flow-foot">
            <div className="pred-flow-note">
              {isID
                ? "Jika kamu punya gejala atau riwayat, pertimbangkan cek gula darah dan konsultasi tenaga kesehatan."
                : "If you have symptoms or history, consider testing and consulting professionals."}
            </div>

            <div className="pred-flow-actions">
              <Link to="/login" className="btn btn-secondary home-btn-primary">
                {isID ? "Mulai Prediksi" : "Start Prediction"}
              </Link>
              <Link to="/education" className="pred-flow-link">
                {isID ? "Baca Edukasi →" : "Read Education →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="home-cta" id="cta">
        <div className="container text-center">
          <h2 className="home-cta-title">
            {isID ? "Siap Mengecek Risiko Diabetes?" : "Ready to Check Diabetes Risk?"}
          </h2>
          <p className="home-cta-sub">
            {isID
              ? "Mulai skrining sekarang, lalu lanjutkan dengan edukasi dan langkah pencegahan."
              : "Start screening now, then continue with education and prevention steps."}
          </p>
          <Link to="/login" className="btn btn-secondary home-btn-primary">
            {isID ? "Mulai Prediksi" : "Start Prediction"}
          </Link>
        </div>
      </section>
    </>
  );
}
