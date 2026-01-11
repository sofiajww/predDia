// src/pages/RiskFactorsPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../App.css";

export default function RiskFactorsPage() {
  const ctx = useOutletContext();
  const lang = ctx?.lang || "id";

  const articles = useMemo(
    () => [
      {
        title: lang === "id" ? "Faktor Risiko Diabetes" : "Diabetes Risk Factors",
        url: "https://www.alodokter.com/ketahui-faktor-risiko-diabetes-dan-cara-mengendalikannya",
        img: "/images/ar1.jpg",
      },
      {
        title:
          lang === "id"
            ? "Pencegahan Diabetes Tipe 2"
            : "Type 2 Diabetes Prevention",
        url: "https://www.alodokter.com/diabetes-tipe-2/pencegahan",
        img: "/images/ar2.jpg",
      },
      {
        title: lang === "id" ? "Aktivitas Fisik" : "Physical Activity",
        url: "https://hellosehat.com/kebugaran/minimal-aktivitas-fisik-bagi-orang-dewasa/",
        img: "/images/ar3.jpg",
      },
      {
        title: lang === "id" ? "Pola Makan Sehat" : "Healthy Eating",
        url: "https://keslan.kemkes.go.id/view_artikel/3467/pola-makan-yang-sehat/",
        img: "/images/ar4.jpg",
      },
      {
        title: lang === "id" ? "Kendalikan Gula Darah" : "Manage Blood Sugar",
        url: "https://hellosehat.com/diabetes/cara-mengontrol-gula-darah/",
        img: "/images/ar5.jpg",
      },
      {
        title: lang === "id" ? "Obesitas & Risiko" : "Obesity & Risk",
        url: "https://www.alodokter.com/obesitas",
        img: "/images/ar6.jpg",
      },
      {
        title: lang === "id" ? "Berhenti Merokok" : "Quit Smoking",
        url: "https://ayosehat.kemkes.go.id/cara-berhenti-merokok",
        img: "/images/ar7.jpg",
      },
      {
        title: lang === "id" ? "Tekanan Darah" : "Blood Pressure",
        url: "https://hellosehat.com/jantung/tekanan-darah-normal/",
        img: "/images/ar8.jpg",
      },
    ],
    [lang]
  );

  const perPage = 4;
  const totalPages = Math.ceil(articles.length / perPage);
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [lang]);

  const pagedArticles = useMemo(() => {
    const start = (page - 1) * perPage;
    return articles.slice(start, start + perPage);
  }, [articles, page]);

  const goTo = (p) => {
    const next = Math.min(Math.max(p, 1), totalPages);
    setPage(next);
  };

  return (
    <div className="predia-page predia-edu">
      <main className="container pt-4 pb-0" id="main-content">
        {/* DISCLAIMER */}
        <div className="predia-alert">
          <b>{lang === "id" ? "Catatan:" : "Note:"}</b>{" "}
          {lang === "id"
            ? "Informasi ini bersifat edukatif. Jika kamu punya keluhan atau hasil prediksi risiko tinggi, sebaiknya konsultasi ke tenaga kesehatan."
            : "This information is educational. If you have symptoms or a high-risk prediction, consult a healthcare professional."}
        </div>

        {/* HERO */}
        <section className="predia-edu-section risk-hero">
          <div className="risk-hero-wrap">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-6">
                <div className="risk-hero-inner">
                  <div className="risk-kicker">
                    {lang === "id" ? "HEALTH & WELLNESS" : "HEALTH & WELLNESS"}
                  </div>

                  <h1 className="risk-hero-title">
                    {lang === "id" ? "Faktor Risiko Diabetes" : "Diabetes Risk Factors"}
                  </h1>

                  <p className="risk-hero-lead">
                    {lang === "id"
                      ? "Kenali faktor risiko sejak dini. Sebagian faktor tidak bisa diubah, tapi banyak yang bisa diturunkan lewat kebiasaan sederhana."
                      : "Know your risk early. Some factors can't be changed, but many can be reduced through simple habits."}
                  </p>

                  <div className="d-flex gap-2 flex-wrap mt-3">
                    <Link to="/login" className="btn btn-secondary">
                      {lang === "id" ? "Cek Risiko Sekarang" : "Check Risk Now"}
                    </Link>
                    <Link to="/lifestyle" className="btn btn-white-outline">
                      {lang === "id" ? "Panduan Lifestyle" : "Lifestyle Guide"}
                    </Link>
                  </div>

                  <div className="risk-hero-note">
                    {lang === "id"
                      ? "⚠️ Ini edukasi, bukan diagnosis."
                      : "⚠️ Educational only, not a diagnosis."}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src="/images/risk.png"
                  alt="Risk hero"
                  className="risk-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CENTER INFO */}
        <section className="predia-edu-section">
          <div className="risk-center">
            <h2 className="predia-h2" style={{ marginBottom: 6 }}>
              {lang === "id"
                ? "Kenapa penting tahu faktor risiko?"
                : "Why do risk factors matter?"}
            </h2>
            <p className="predia-p" style={{ marginBottom: 0 }}>
              {lang === "id"
                ? "Karena diabetes sering berkembang pelan-pelan tanpa gejala. Dengan tahu faktor risiko, kamu bisa ambil langkah pencegahan lebih cepat."
                : "Because diabetes can develop slowly without symptoms. Knowing risks helps you take prevention steps earlier."}
            </p>
          </div>
        </section>

        {/* ZIGZAG BLOCKS */}
        <section className="predia-edu-section">
          <div className="risk-blocks">
            {/* BLOCK 1 */}
            <div className="risk-row">
              <div className="risk-tile risk-tile--img">
                <img
                  src="/images/risk1.jpg"
                  alt="Risk factor illustration 1"
                  className="risk-tile-img"
                />
              </div>

              <div className="risk-tile risk-tile--green">
                <h2 className="risk-tile-title">
                  {lang === "id"
                    ? "Faktor Risiko yang Tidak Bisa Diubah"
                    : "Non-modifiable Risk Factors"}
                </h2>

                <p className="risk-tile-text">
                  {lang === "id"
                    ? "Ada faktor risiko yang memang tidak bisa kita ubah, namun penting untuk diketahui agar kamu lebih waspada dan bisa melakukan pencegahan lebih awal."
                    : "Some risk factors cannot be changed, but knowing them helps you stay alert and take early prevention steps."}
                </p>

                <ul className="risk-tile-list">
                  <li>
                    <b>{lang === "id" ? "Riwayat keluarga" : "Family history"}:</b>{" "}
                    {lang === "id"
                      ? "orang tua/saudara kandung diabetes meningkatkan risiko."
                      : "having parents/siblings with diabetes increases risk."}
                  </li>
                  <li>
                    <b>{lang === "id" ? "Usia" : "Age"}:</b>{" "}
                    {lang === "id"
                      ? "risiko meningkat seiring bertambahnya usia."
                      : "risk increases with age."}
                  </li>
                  <li>
                    <b>
                      {lang === "id"
                        ? "Riwayat diabetes gestasional"
                        : "History of gestational diabetes"}
                      :
                    </b>{" "}
                    {lang === "id"
                      ? "pernah diabetes saat hamil → risiko lebih tinggi ke depan."
                      : "diabetes during pregnancy increases future risk."}
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="risk-row risk-row--reverse">
              <div className="risk-tile risk-tile--white">
                <h2 className="risk-tile-title">
                  {lang === "id"
                    ? "Faktor Risiko yang Bisa Diubah"
                    : "Modifiable Risk Factors"}
                </h2>

                <p className="risk-tile-text">
                  {lang === "id"
                    ? "Kabar baiknya, banyak faktor risiko diabetes yang bisa diturunkan. Ini biasanya berkaitan dengan kebiasaan sehari-hari."
                    : "Good news: many diabetes risk factors can be reduced, mostly related to daily habits."}
                </p>

                <ul className="risk-tile-list">
                  <li>
                    <b>{lang === "id" ? "Berat badan berlebih" : "Excess weight"}:</b>{" "}
                    {lang === "id"
                      ? "obesitas meningkatkan resistensi insulin."
                      : "obesity increases insulin resistance."}
                  </li>
                  <li>
                    <b>
                      {lang === "id"
                        ? "Kurang aktivitas fisik"
                        : "Low physical activity"}
                      :
                    </b>{" "}
                    {lang === "id"
                      ? "jarang bergerak membuat gula lebih sulit terkontrol."
                      : "sedentary lifestyle makes glucose harder to control."}
                  </li>
                  <li>
                    <b>
                      {lang === "id"
                        ? "Pola makan tinggi gula/ultra-proses"
                        : "High-sugar/ultra-processed diet"}
                      :
                    </b>{" "}
                    {lang === "id"
                      ? "memicu lonjakan gula darah dan penambahan berat badan."
                      : "triggers sugar spikes and weight gain."}
                  </li>
                </ul>

                <div className="mt-3">
                  <Link to="/lifestyle" className="btn btn-secondary">
                    {lang === "id" ? "Lihat Tips Sehat" : "See Healthy Tips"}
                  </Link>
                </div>
              </div>

              <div className="risk-tile risk-tile--img">
                <img
                  src="/images/risk2.jpg"
                  alt="Risk factor illustration 2"
                  className="risk-tile-img"
                />
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="risk-row">
              <div className="risk-tile risk-tile--img">
                <img
                  src="/images/risk3.jpg"
                  alt="Risk factor illustration 3"
                  className="risk-tile-img"
                />
              </div>

              <div className="risk-tile risk-tile--green">
                <h2 className="risk-tile-title">
                  {lang === "id"
                    ? "Tanda-Tanda Kamu Perlu Lebih Waspada"
                    : "Signs You Should Be More Alert"}
                </h2>

                <p className="risk-tile-text">
                  {lang === "id"
                    ? "Kadang gejala diabetes/prediabetes tidak terasa jelas. Tapi ada beberapa kondisi yang membuat kamu sebaiknya melakukan cek gula darah."
                    : "Diabetes/prediabetes can be subtle. These situations suggest you should consider checking your blood sugar."}
                </p>

                <ul className="risk-tile-list">
                  <li>
                    {lang === "id"
                      ? "Sering haus dan sering buang air kecil."
                      : "Frequent thirst and urination."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Mudah lelah, mengantuk, atau sulit fokus."
                      : "Easily tired, sleepy, or hard to focus."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Berat badan turun tanpa sebab jelas."
                      : "Unexplained weight loss."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Luka sulit sembuh / sering infeksi."
                      : "Slow-healing wounds / frequent infections."}
                  </li>
                </ul>

                <div className="risk-goodbox">
                  {lang === "id"
                    ? "✅ Kalau kamu punya beberapa tanda di atas + faktor risiko, cek lebih lanjut itu langkah bijak."
                    : "✅ If you have multiple signs above + risk factors, getting checked is a wise step."}
                </div>
              </div>
            </div>

            {/* BLOCK 4 */}
            <div className="risk-row risk-row--reverse">
              <div className="risk-tile risk-tile--white">
                <h2 className="risk-tile-title">
                  {lang === "id"
                    ? "Pencegahan Sederhana yang Paling Efektif"
                    : "Simple Prevention That Works"}
                </h2>

                <p className="risk-tile-text">
                  {lang === "id"
                    ? "Pencegahan diabetes paling kuat justru datang dari kebiasaan kecil yang konsisten. Mulai dari yang paling mudah dulu."
                    : "The strongest prevention comes from small consistent habits. Start with the easiest ones."}
                </p>

                <ul className="risk-tile-list">
                  <li>
                    {lang === "id"
                      ? "Kurangi minuman manis dan camilan tinggi gula."
                      : "Reduce sugary drinks and high-sugar snacks."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Gerak minimal 30 menit sehari (jalan cepat sudah cukup)."
                      : "Move at least 30 minutes daily (brisk walking is enough)."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Perbanyak protein & serat (sayur, buah, kacang, biji-bijian)."
                      : "Increase protein & fiber (vegetables, fruits, nuts, whole grains)."}
                  </li>
                  <li>
                    {lang === "id" ? "Tidur cukup dan kelola stres." : "Get enough sleep and manage stress."}
                  </li>
                </ul>

                <div className="mt-3">
                  <Link to="/lifestyle" className="btn btn-secondary me-2">
                    {lang === "id" ? "Panduan Lifestyle" : "Lifestyle Guide"}
                  </Link>
                  <Link to="/login" className="btn btn-white-outline">
                    {lang === "id" ? "Cek Risiko Sekarang" : "Check Risk Now"}
                  </Link>
                </div>
              </div>

              <div className="risk-tile risk-tile--img">
                <img
                  src="/images/risk4.jpg"
                  alt="Risk factor illustration 4"
                  className="risk-tile-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BMI CALCULATOR */}
        <section className="predia-edu-section">
          <div className="predia-card">
            <div className="row align-items-start g-4">
              <div className="col-lg-5">
                <h2 className="predia-h2">
                  {lang === "id" ? "Kalkulator BMI" : "BMI Calculator"}
                </h2>

                <p className="predia-p">
                  {lang === "id"
                    ? "BMI (Body Mass Index) membantu memperkirakan apakah berat badan kamu termasuk ideal, kurang, atau berlebih. Berat badan berlebih adalah salah satu faktor risiko utama diabetes tipe 2."
                    : "BMI (Body Mass Index) helps estimate whether your weight is under, normal, or overweight. Excess weight is a major risk factor for type 2 diabetes."}
                </p>

                <div className="predia-infobox">
                  <b>{lang === "id" ? "Tips:" : "Tip:"}</b>{" "}
                  {lang === "id"
                    ? "Jika BMI kamu tinggi, fokus awal yang paling efektif adalah kurangi minuman manis + tambah aktivitas (jalan cepat)."
                    : "If your BMI is high, the most effective first steps are reducing sugary drinks + increasing activity (brisk walking)."}
                </div>

                <div className="mt-2">
                  <a
                    href="https://calcmate.org/id/health/bmi"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary me-2"
                  >
                    {lang === "id" ? "Buka Kalkulator BMI" : "Open BMI Calculator"}
                  </a>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="risk-bmi-iframe">
                  <iframe
                    title="BMI Calculator"
                    src="https://calcmate.org/id/health/bmi"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={{ width: "100%", height: "100%", border: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Artikel + pagination ===== */}
        <section className="predia-edu-section article-section">
          <div className="predia-card">
            <h2 className="section-title">
              {lang === "id" ? "Artikel Pencegahan & Risiko" : "Prevention & Risk Articles"}
            </h2>
            <p style={{ color: "#64748b", marginTop: 8, maxWidth: 760 }}>
              {lang === "id"
                ? "Baca referensi dari sumber tepercaya untuk pencegahan dan faktor risiko diabetes."
                : "Read trusted sources about prevention and diabetes risk factors."}
            </p>

            <div className="predia-article-grid-v2">
              {pagedArticles.map((a) => (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="predia-article-card-v2"
                  style={{ backgroundImage: `url(${a.img})` }}
                >
                  <div className="predia-article-overlay-v2" />
                  <div className="predia-article-text-v2">
                    <h3 className="predia-article-title-v2">{a.title}</h3>
                    <div className="predia-article-link-v2">
                      {lang === "id" ? "Baca Selengkapnya" : "Learn More"}
                      <span className="predia-article-underline-v2" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="predia-pagination">
              <button
                type="button"
                className="predia-page-btn"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const n = idx + 1;
                return (
                  <button
                    key={n}
                    type="button"
                    className={"predia-page-btn" + (page === n ? " is-active" : "")}
                    onClick={() => goTo(n)}
                  >
                    {n}
                  </button>
                );
              })}

              <button
                type="button"
                className="predia-page-btn"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* CSS 1 BLOK SAJA (bersih, jarak rapet, natural) */}
        <style>{`
          /* spacing section: lebih kecil (sebelumnya kebanyakan) */
          .predia-edu-section{
            padding: 24px 16px;
          }

          /* =========================================
             HERO
          ========================================= */
          .risk-hero-wrap{
            border-radius: 18px;
            overflow: hidden;
            background: #fff;
            border: 1px solid rgba(59,93,80,.12);
            box-shadow: 0 10px 26px rgba(0,0,0,.06);
          }
          .risk-hero-inner{ padding: 34px 30px; }
          .risk-kicker{
            font-size: 12px;
            letter-spacing: .18em;
            font-weight: 900;
            color: #3b5d50;
            opacity: .95;
            margin-bottom: 10px;
          }
          .risk-hero-title{
            font-size: clamp(34px, 4vw, 56px);
            line-height: 1.05;
            margin: 0 0 12px 0;
            font-weight: 900;
            color: #1f2b25;
          }
          .risk-hero-lead{
            margin: 0;
            color: #4b5a54;
            font-size: 16px;
            line-height: 1.7;
            max-width: 520px;
          }
          .risk-hero-note{
            margin-top: 14px;
            font-size: 13px;
            color: #6c757d;
          }
          .risk-hero-img{
            width: 100%;
            height: 100%;
            min-height: 360px;
            max-height: 520px;
            object-fit: cover;
            display: block;
            background: #eef4f1;
          }

          /* =========================================
             CENTER INFO
          ========================================= */
          .risk-center{
            text-align: center;
            max-width: 820px;
            margin: 0 auto;
            padding: 8px 8px 0;
          }

          /* =========================================
             ZIGZAG BLOCKS
          ========================================= */
          .risk-blocks{
            border-radius: 18px;
            overflow: hidden;
            border: 1px solid rgba(59,93,80,.14);
            box-shadow: 0 10px 26px rgba(0,0,0,.06);
            background: #fff;
          }
          .risk-row{
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 360px;
          }
          .risk-tile{ padding: 34px; position: relative; }
          .risk-tile--img{ padding: 0; background: #eef4f1; min-height: 360px; }
          .risk-tile-img{ width: 100%; height: 100%; display: block; object-fit: cover; }
          .risk-tile--green{ background: #3b5d50; color: #fff; }
          .risk-tile--white{ background: #fff; color: #1f2b25; }
          .risk-tile-title{
            font-weight: 900;
            font-size: clamp(22px, 2.2vw, 30px);
            margin: 0 0 12px 0;
            line-height: 1.1;
          }
          .risk-tile-text{
            margin: 0 0 12px 0;
            line-height: 1.7;
            font-size: 15px;
            opacity: .95;
          }
          .risk-tile-list{
            padding-left: 18px;
            margin: 10px 0 0 0;
            line-height: 1.7;
            font-size: 14px;
            opacity: .92;
          }
          .risk-goodbox{
            margin-top: 12px;
            background: rgba(255,255,255,.12);
            border: 1px solid rgba(255,255,255,.22);
            padding: 12px;
            border-radius: 12px;
            font-weight: 700;
            opacity: .95;
          }

          /* =========================================
             NATURAL CENTER for BMI
          ========================================= */
          .predia-edu-section .predia-card{
            max-width: 980px;
            margin: 0 auto;
          }

          .predia-h2{
            text-align: center;
            font-weight: 900;
            margin-bottom: 12px;
          }
          .predia-p{
            text-align: center;
            max-width: 760px;
            margin: 0 auto 18px;
            line-height: 1.85;
            color: #4b5a54;
          }

          .predia-edu-section .mt-2,
          .predia-edu-section .mt-3{
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 10px;
          }

          .predia-infobox{
            max-width: 760px;
            margin: 0 auto;
            border-left: 3px solid rgba(59,93,80,.75);
            background: rgba(59,93,80,.06);
            border-radius: 12px;
            padding: 12px 14px;
          }

          .risk-bmi-iframe{
            width: 100%;
            height: 520px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(0,0,0,.08);
            background: #fff;
          }

          @media (max-width: 991px){
            .risk-hero-inner{ padding: 26px 20px; }
            .risk-row{ grid-template-columns: 1fr; }
            .risk-tile{ padding: 22px 18px; }
            .risk-tile--img{ min-height: 260px; }
            .risk-bmi-iframe{ height: 600px; }
            .predia-p{ max-width: 100%; }
          }
        .predia-edu-section:nth-last-of-type(2){
  padding-bottom: 8px;
}
.predia-edu-section:last-of-type{
  padding-top: 8px;
}
.predia-edu-section:last-of-type .predia-card{
  margin-bottom: 0;
}
/* PAKSA DEKATKAN ARTIKEL KE BMI */
.article-section{
  margin-top: -64px;   /* NAIKKAN ARTIKEL */
}
/* rapatkan artikel ke footer */
.article-section{
  margin-bottom: -40px;
}

        `}</style>
      </main>
    </div>
  );
}
