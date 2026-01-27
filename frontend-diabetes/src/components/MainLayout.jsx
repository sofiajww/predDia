// src/components/MainLayout.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../App.css";

export default function MainLayout() {
  const [lang, setLang] = useState("id");
  const [openLang, setOpenLang] = useState(false);
  const location = useLocation();
  const langWrapRef = useRef(null);

  // ✅ HERO hanya muncul di landing
  const isHome = location.pathname === "/";

  const activeKey = useMemo(() => {
    const p = location.pathname;
    if (p === "/") return "home";
    if (p.startsWith("/education")) return "education";
    if (p.startsWith("/risk-factors")) return "risk";
    if (p.startsWith("/lifestyle")) return "lifestyle";
    if (p.startsWith("/about")) return "about";
    return "";
  }, [location.pathname]);

  const navItemClass = (key) =>
    "nav-item" + (activeKey === key ? " active" : "");

  // ================================
  // === HERO BG SLIDESHOW (PER FOTO)
  // ================================
  const heroSlides = useMemo(
    () => [
      {
        src: "/images/hero-1.jpg",
        pos: "center",
        size: "cover",
      },
      {
        src: "/images/hero-2.png",
        pos: "50% 90%",
        size: "cover",
      },
      {
        src: "/images/hero-2.png",
        pos: "50% 90%",
        posMobile: "80% 10%", // coba ini biar tangan lebih ke pojok
        size: "cover",
      },
    ],
    []
  );

  const [heroIdx, setHeroIdx] = useState(0);
  const [heroFade, setHeroFade] = useState(false);

  // ✅ BONUS: interval slideshow hanya jalan saat di halaman "/"
  useEffect(() => {
    if (!isHome) return;

    const id = setInterval(() => {
      setHeroFade(true);

      setTimeout(() => {
        setHeroIdx((i) => (i + 1) % heroSlides.length);
        setHeroFade(false);
      }, 350);
    }, 6000);

    return () => clearInterval(id);
  }, [heroSlides.length, isHome]);

  const hero = heroSlides[heroIdx];

  // close dropdown pas klik di luar
  useEffect(() => {
    const onClickOutside = (e) => {
      if (langWrapRef.current && !langWrapRef.current.contains(e.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => window.scrollTo(0, 0));
    const t = setTimeout(() => window.scrollTo(0, 0), 50);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // ==================================================
  // === SCROLL REVEAL (SETELAH SCROLL RESET) ==========
  // ==================================================
  useEffect(() => {
    const runReveal = () => {
      document
        .querySelectorAll(
          ".section-title, p, h1, h2, h3, h4, h5, h6, li, .product-item, .feature, .post-entry, .card, .col"
        )
        .forEach((el) => {
          if (el.closest(".no-reveal")) return;
          el.classList.add("reveal");
        });

      const elements = Array.from(document.querySelectorAll(".reveal")).filter(
        (el) => !el.closest(".no-reveal")
      );
      if (!elements.length) return;

      elements.forEach((el) => {
        const r = el.getBoundingClientRect();
        const inView = r.top < window.innerHeight * 0.92 && r.bottom > 0;
        if (inView) el.classList.add("show");
        else el.classList.remove("show");
      });

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((el) => {
        if (!el.classList.contains("show")) observer.observe(el);
      });
    };

    runReveal();
    const t1 = setTimeout(runReveal, 80);
    const t2 = setTimeout(runReveal, 400);
    const t3 = setTimeout(runReveal, 900);

    const main = document.getElementById("main-content");
    const mo = new MutationObserver(() => runReveal());
    if (main) {
      mo.observe(main, { childList: true, subtree: true });
    }

    const onScroll = () => runReveal();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="PredDia navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            PredDia<span>.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsPredDia"
            aria-controls="navbarsPredDia"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsPredDia">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className={navItemClass("home")}>
                <Link className="nav-link" to="/">
                  {lang === "id" ? "Beranda" : "Home"}
                </Link>
              </li>

              <li className={navItemClass("education")}>
                <Link className="nav-link" to="/education">
                  {lang === "id" ? "Edukasi Diabetes" : "Diabetes Education"}
                </Link>
              </li>

              <li className={navItemClass("risk")}>
                <Link className="nav-link" to="/risk-factors">
                  {lang === "id"
                    ? "Faktor Risiko & Pencegahan"
                    : "Risk Factors & Prevention"}
                </Link>
              </li>

              <li className={navItemClass("lifestyle")}>
                <Link className="nav-link" to="/lifestyle">
                  {lang === "id" ? "Gaya Hidup Sehat" : "Healthy Lifestyle"}
                </Link>
              </li>

              <li className={navItemClass("about")}>
                <Link className="nav-link" to="/about">
                  {lang === "id" ? "Tentang Kami" : "About Us"}
                </Link>
              </li>
            </ul>

            {/* RIGHT CTA */}
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 align-items-center">
              {/* LANGUAGE */}
              <li className="nav-item me-2 position-relative" ref={langWrapRef}>
                <button
                  type="button"
                  className="nav-link d-flex align-items-center gap-1 predia-lang-toggle"
                  onClick={() => setOpenLang((v) => !v)}
                  aria-label="Change language"
                >
                  <img
                    src="/images/globe.svg"
                    alt="Language"
                    className="predia-lang-icon"
                  />
                  <span className="predia-lang-text">
                    {lang === "id" ? "Bahasa" : "Language"}
                  </span>
                </button>

                {openLang && (
                  <div className="predia-lang-menu">
                    <button
                      type="button"
                      onClick={() => {
                        setLang("id");
                        setOpenLang(false);
                      }}
                    >
                      Indonesia
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLang("en");
                        setOpenLang(false);
                      }}
                    >
                      English
                    </button>
                  </div>
                )}
              </li>

              {/* USER */}
              <li>
                <Link className="nav-link" to="/login" title="Login">
                  <img src="/images/user.svg" alt="User" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ HERO SLIDER (HANYA DI LANDING /) */}
      {isHome && (
        <div
          id="prediaHeroCarousel"
          className="carousel slide predia-hero-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className={`predia-hero-slide ${heroFade ? "hero-fade" : ""}`}
                style={{
  backgroundImage: `url(${hero.src})`,
  backgroundSize: hero.size,
  "--hero-pos": hero.pos,
  "--hero-pos-mobile": hero.posMobile || hero.pos,
}}

              >
                <div className="predia-hero-overlay" />
                <div className="container predia-hero-content">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-7 col-xl-6">
                      <div className="predia-hero-panel">
                        <h1 className="predia-hero-title">
                          {lang === "id" ? (
                            <>
                              Yuk,cek kondisi tubuhmu <br />
                              <span className="predia-hero-highlight">
                                sekarang!
                              </span>{" "}
                            </>
                          ) : (
                            <>
                              Come on, check your body condition.{" "}
                              <span className="predia-hero-highlight">
                                Right now!
                              </span>{" "}
                              <br />
                            </>
                          )}
                        </h1>

                        <p className="predia-hero-text">
                          {lang === "id"
                            ? "Kenali dirimu lebih baik, mulai dari langkah sederhana."
                            : "Quick screening using simple health data. Instant results + relevant suggestions."}
                        </p>

                        <div className="predia-hero-actions">
                          <Link to="/login" className="btn btn-secondary me-2">
                            {lang === "id"
                              ? "Mulai Prediksi"
                              : "Start Prediction"}
                          </Link>
                          <Link
                            to="/education"
                            className="btn btn-white-outline"
                          >
                            {lang === "id"
                              ? "Pelajari Diabetes"
                              : "Learn Diabetes"}
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* kanan kosong */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ISI HALAMAN */}
      <div id="main-content">
        <Outlet context={{ lang, setLang }} />
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer-section footer-compact no-reveal">
        <div className="container">
          {/* ===== TOP FOOTER ===== */}
          <div className="row g-3 align-items-start">
            {/* LEFT */}
            <div className="col-lg-5">
              <div className="footer-logo-wrap" style={{ marginBottom: 6 }}>
                <Link to="/" className="footer-logo">
                  PredDia<span>.</span>
                </Link>
              </div>

              <p
                style={{
                  maxWidth: 420,
                  marginBottom: 12,
                  lineHeight: 1.55,
                }}
              >
                {lang === "id"
                  ? "PredDia membantu melakukan skrining awal risiko diabetes berbasis data kesehatan sederhana. Hasil bukan diagnosis medis, namun dapat menjadi peringatan dini untuk langkah kesehatan yang lebih tepat."
                  : "PredDia helps provide early screening of diabetes risk using simple health data. Results are not a medical diagnosis, but can serve as an early alert for better health decisions."}
              </p>

              <ul
                className="list-unstyled d-flex gap-2 mb-0"
                style={{ marginTop: 6 }}
              >
                <li>
                  <a href="#fb" aria-label="Facebook">
                    <span className="fa fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#tw" aria-label="Twitter">
                    <span className="fa fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#ig" aria-label="Instagram">
                    <span className="fa fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#li" aria-label="LinkedIn">
                    <span className="fa fa-brands fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="col-lg-7">
              <div className="row g-2">
                <div className="col-6 col-md-4">
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Menu</div>
                  <ul className="list-unstyled mb-0">
                    <li style={{ marginBottom: 6 }}>
                      <Link to="/education">Edukasi Diabetes</Link>
                    </li>
                    <li style={{ marginBottom: 6 }}>
                      <Link to="/risk-factors">Faktor Risiko & Pencegahan</Link>
                    </li>
                    <li style={{ marginBottom: 6 }}>
                      <Link to="/lifestyle">Gaya Hidup Sehat</Link>
                    </li>
                    <li>
                      <Link to="/about">Tentang Kami</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-md-4">
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Akun</div>
                  <ul className="list-unstyled mb-0">
                    <li style={{ marginBottom: 6 }}>
                      <Link to="/login">Masuk</Link>
                    </li>
                    <li style={{ marginBottom: 6 }}>
                      <Link to="/register">Daftar</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-md-4">
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>
                    Catatan
                  </div>
                  <p
                    style={{
                      marginBottom: 0,
                      fontSize: 14,
                      opacity: 0.9,
                      lineHeight: 1.55,
                    }}
                  >
                    Informasi pada PredDia bersifat edukatif dan tidak
                    menggantikan konsultasi atau diagnosis dokter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM / COPYRIGHT ===== */}
          <div className="border-top" style={{ marginTop: 16 }}>
            <div
              className="row align-items-center"
              style={{ paddingTop: 12, paddingBottom: 10 }}
            >
              <div className="col-lg-6 text-center text-lg-start">
                <p className="mb-0">
                  © {new Date().getFullYear()} <b>PredDia</b>. Seluruh hak cipta
                  dilindungi.
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex gap-4 mb-0">
                  <li>
                    <a href="#terms">Ketentuan</a>
                  </li>
                  <li>
                    <a href="#privacy">Privasi</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================= END FOOTER ================= */}
    </>
  );
}
