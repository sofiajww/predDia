// src/pages/LifestylePage.jsx
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../App.css";

export default function LifestylePage() {
  const ctx = useOutletContext();
  const lang = ctx?.lang || "id";

  return (
    <div className="predia-page predia-edu lifestyle-page">
      <main className="container py-4" id="main-content">
        {/* DISKLAIMER */}
        <div className="predia-alert">
          <b>{lang === "id" ? "Catatan:" : "Note:"}</b>{" "}
          {lang === "id"
            ? "Halaman ini edukatif. Untuk penderita diabetes yang sudah minum obat/insulin, perubahan makan & olahraga sebaiknya disesuaikan dengan saran tenaga kesehatan."
            : "This page is educational. If you take diabetes medication/insulin, adjust diet & exercise with healthcare guidance."}
        </div>

        {/* =======================
            HERO: informasi + foto
           ======================= */}
        <section className="predia-edu-section">
          <div className="predia-card predia-card--spaced">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="edu-kicker">LIFE WITH DIABETES</div>

                <h2 className="predia-h2" style={{ marginBottom: 10 }}>
                  {lang === "id"
                    ? "Hidup Sehat Bersama Diabetes Itu Bisa"
                    : "Healthy Living With Diabetes Is Possible"}
                </h2>

                <p className="predia-p" style={{ marginBottom: 12 }}>
                  {lang === "id"
                    ? "Mengelola diabetes bukan hanya soal obat, tetapi juga tentang kebiasaan sehari-hari. Melalui pola makan seimbang, aktivitas fisik teratur, manajemen stres, dan tidur yang cukup, kadar gula darah dapat lebih terkontrol dan kualitas hidup tetap terjaga."
                    : "Managing diabetes is not just about medication—it’s also daily habits. With balanced eating, regular activity, stress management, and enough sleep, blood sugar can be better controlled and quality of life maintained."}
                </p>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src="/images/lifedia.jpg"
                  alt="Lifestyle hero"
                  className="img-fluid predia-img"
                  style={{ maxHeight: 360, objectFit: "cover", borderRadius: 16 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =======================
            CENTER: teks tengah
           ======================= */}
        <section className="predia-edu-section">
          <div className="life-center">
            <h2 className="predia-h2" style={{ marginBottom: 8 }}>
              {lang === "id"
                ? "Mulai dari yang sederhana, tapi konsisten"
                : "Start simple, stay consistent"}
            </h2>
            <p className="predia-p" style={{ marginBottom: 0 }}>
              {lang === "id"
                ? "Kunci lifestyle adalah kebiasaan kecil yang bisa kamu lakukan tiap hari. Fokus satu hal dulu, kalau sudah stabil baru tambah yang lain."
                : "The key is small habits you can do daily. Focus on one thing first, then add more once it sticks."}
            </p>
          </div>
        </section>

        {/* ==========================================
            ZIGZAG 1-4 (HAPUS semua tombol Read more)
           ========================================== */}
        <section className="predia-edu-section">
          <div className="edu-blocks" style={{ borderRadius: 18, overflow: "hidden" }}>
            {/* 1 (HIJAU) */}
            <div className="life-row">
              <div className="life-tile life-tile--img">
                <img src="/images/life1.jpg" alt="Lifestyle 1" className="life-tile-img" />
              </div>

              <div className="life-tile life-tile--green">
                <h2 className="life-tile-title">
                  {lang === "id"
                    ? "Makna “Sehat” bagi Penderita Diabetes"
                    : "What “Healthy” Means for People with Diabetes"}
                </h2>

                <p className="life-tile-text">
                  {lang === "id"
                    ? "berarti menjaga gula darah tetap stabil, berat badan lebih terkontrol, dan mengurangi risiko komplikasi. Fokusnya bukan kesempurnaan, tetapi kebiasaan yang bisa dilakukan secara konsisten."
                    : "This means maintaining stable blood sugar, better controlling weight, and reducing the risk of complications. The focus isn't on perfection, but on habits that can be consistently implemented."}
                </p>

                <ul className="life-tile-list">
                  <li>
                    {lang === "id"
                      ? "Makan teratur dan seimbang dengan porsi yang sesuai."
                      : "Eat regularly and in a balanced way with appropriate portions."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Aktif bergerak meski dengan aktivitas ringan."
                      : "Be active even with light activities."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Tidur cukup dan kelola stres agar gula darah lebih stabil."
                      : "Get enough sleep and manage stress to keep your blood sugar more stable."}
                  </li>
                </ul>

                <p className="life-tile-text">
                  {lang === "id"
                    ? "Perubahan kecil yang dilakukan terus-menerus jauh lebih bermanfaat daripada perubahan besar yang sulit dipertahankan."
                    : "Small changes made consistently are much more beneficial than large changes that are difficult to maintain."}
                </p>
              </div>
            </div>

            {/* 2 (PUTIH) */}
            <div className="life-row life-row--reverse">
              <div className="life-tile life-tile--white">
                <h2 className="life-tile-title">
                  {lang === "id"
                    ? "Makan yang Lebih Aman buat Gula Darah"
                    : "Eating Habits That Support Blood Sugar"}
                </h2>

                <p className="life-tile-text">
                  {lang === "id"
                    ? "Kuncinya bukan ‘pantang’, tapi ‘porsi & pilihan’. Kamu tetap bisa makan enak, asal lebih terukur."
                    : "It’s not about strict bans—it's about portions and choices. You can still enjoy food, just more mindfully."}
                </p>

                <div className="predia-infobox" style={{ marginTop: 10 }}>
                  <b>
                    {lang === "id"
                      ? "Patokan gampang (Plate Method):"
                      : "Easy guide (Plate Method):"}
                  </b>
                  <ul style={{ marginBottom: 0, paddingLeft: 18 }}>
                    <li>
                      {lang === "id"
                        ? "½ piring: sayur + buah (lebih banyak sayur)."
                        : "½ plate: veggies + fruit (more veggies)."}
                    </li>
                    <li>
                      {lang === "id"
                        ? "¼ piring: protein (ikan, ayam, telur, tempe/tahu)."
                        : "¼ plate: protein (fish, chicken, eggs, tofu/tempeh)."}
                    </li>
                    <li>
                      {lang === "id"
                        ? "¼ piring: karbo (nasi, kentang, ubi, roti) — pilih yang lebih berserat."
                        : "¼ plate: carbs (rice, potatoes, bread) — choose higher-fiber options."}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="life-tile life-tile--img">
                <img src="/images/life2.jpg" alt="Lifestyle 2" className="life-tile-img" />
              </div>
            </div>

            {/* 3 (HIJAU) */}
            <div className="life-row">
              <div className="life-tile life-tile--img">
                <img src="/images/life3.jpg" alt="Lifestyle 3" className="life-tile-img" />
              </div>

              <div className="life-tile life-tile--green">
                <h2 className="life-tile-title">
                  {lang === "id" ? "Olahraga yang Aman & Realistis" : "Realistic & Safe Exercise"}
                </h2>

                <p className="life-tile-text">
                  {lang === "id"
                    ? "Olahraga untuk penderita diabetes tidak harus berat atau melelahkan. Yang paling penting adalah dilakukan secara rutin dan sesuai kemampuan. Aktivitas fisik membantu tubuh menggunakan insulin lebih efektif, sehingga gula darah lebih mudah terkontrol. Bahkan jalan kaki singkat setelah makan sudah bisa membantu mencegah lonjakan gula darah."
                    : "Exercise for people with diabetes doesn't have to be strenuous or exhausting. The most important thing is to do it regularly and within your ability. Physical activity helps the body use insulin more effectively, making blood sugar easier to control. Even a short walk after meals can help prevent blood sugar spikes."}
                </p>

                <ul className="life-tile-list">
                  <li>
                    {lang === "id"
                      ? "Mulai dari durasi pendek, sekitar 10–15 menit per hari, lalu tingkatkan secara bertahap sesuai kondisi tubuh."
                      : "Start with a short duration, around 10–15 minutes per day, then increase gradually according to your body condition."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Target aman: 150 menit/minggu intensitas sedang."
                      : "Common target: 150 min/week moderate intensity."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Tambahkan latihan kekuatan 2 kali per minggu, misalnya squat ringan atau push-up untuk membantu menjaga massa otot."
                      : "Add strength training twice a week, such as light squats or push-ups, to help maintain muscle mass."}
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 (PUTIH) */}
            <div className="life-row life-row--reverse">
              <div className="life-tile life-tile--white">
                <h2 className="life-tile-title">
                  {lang === "id" ? "Tidur, Stres, & Kebiasaan Kecil" : "Sleep, Stress, & Small Habits"}
                </h2>

                <p className="life-tile-text">
                  {lang === "id"
                    ? "Tidur yang kurang dan stres yang tidak terkelola dapat memengaruhi hormon tubuh, sehingga nafsu makan meningkat, keinginan makanan manis lebih sering muncul, dan gula darah menjadi lebih sulit dikontrol. Karena itu, menjaga kualitas tidur dan kondisi mental sama pentingnya dengan mengatur makan dan olahraga. Beberapa kebiasaan sederhana yang bisa membantu :"
                    : "Lack of sleep and unmanaged stress can affect the body's hormones, leading to increased appetite, increased cravings for sweets, and more difficult blood sugar control. Therefore, maintaining good sleep and mental well-being is just as important as managing your diet and exercise. Some simple habits that can help :"}
                </p>

                <ul className="life-tile-list">
                  <li>
                    {lang === "id"
                      ? "Hindari duduk terlalu lama dengan berdiri atau berjalan ringan 2–3 menit setiap 1 jam."
                      : "Avoid sitting for too long by standing or walking lightly for 2–3 minutes every hour."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Kelola stres secara sederhana, seperti latihan napas singkat, menulis jurnal, beribadah, atau meditasi."
                      : "Manage stress simply, such as brief breathing exercises, journaling, prayer, or meditation."}
                  </li>
                  <li>
                    {lang === "id"
                      ? "Kelola stres: napas 1 menit, journaling, ibadah/meditasi."
                      : "Manage stress: 1-minute breathing, journaling, prayer/meditation."}
                  </li>
                </ul>

                <div className="predia-goodbox" style={{ marginTop: 10 }}>
                  {lang === "id"
                    ? "✅ Fokus konsisten. 1 kebiasaan dulu sampai stabil, baru tambah."
                    : "✅ Consistency first. One habit at a time, then add more."}
                </div>
              </div>

              <div className="life-tile life-tile--img">
                <img src="/images/life4.jpg" alt="Lifestyle 4" className="life-tile-img" />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            “Panduan Makan yang Praktis”
           ========================================== */}
        <section className="predia-edu-section">
          <div className="predia-card predia-card--spaced">
            <div className="predia-mini-kicker">
              {lang === "id" ? "PANDUAN MAKAN HARIAN" : "DAILY EATING GUIDE"}
            </div>

            <h2 className="predia-h2" style={{ marginBottom: 10 }}>
              {lang === "id" ? "Panduan Makan Seimbang" : "Balanced-Eating Guide"}
            </h2>

            <p className="predia-p" style={{ marginBottom: 12 }}>
              {lang === "id"
                ? "Tujuannya sederhana: gula darah lebih stabil, kenyang lebih lama, dan badan tetap bertenaga. Ini panduan praktis yang bisa kamu pakai setiap hari (tanpa hitung kalori)."
                : "The goal is simple: steadier blood sugar, longer fullness, and better energy. Use this practical guide daily (no calorie counting needed)."}
            </p>

            <div className="row g-3">
              <InfoCard
                title={lang === "id" ? "1) Plate Method" : "1) Plate Method"}
                items={[
                  lang === "id"
                    ? "½ piring: sayur (utama) + buah (secukupnya)."
                    : "½ plate: veggies (main) + fruit (moderate).",
                  lang === "id"
                    ? "¼ piring: protein (ikan/ayam/telur/tempe/tahu)."
                    : "¼ plate: protein (fish/chicken/eggs/tofu/tempeh).",
                  lang === "id"
                    ? "¼ piring: karbo (nasi/ubi/kentang/roti) — pilih yang lebih berserat."
                    : "¼ plate: carbs (rice/potato/bread) — choose higher-fiber options.",
                ]}
              />

              <InfoCard
                title={lang === "id" ? "2) Karbo yang Lebih Aman" : "2) Smarter Carbs"}
                items={[
                  lang === "id"
                    ? "Pilih: nasi merah, oats, ubi, jagung, roti gandum (cek label)."
                    : "Choose: brown rice, oats, sweet potato, corn, whole-grain bread (check labels).",
                  lang === "id"
                    ? "Gabungkan karbo + protein + sayur biar gula naiknya lebih pelan."
                    : "Pair carbs with protein + veggies to reduce spikes.",
                  lang === "id"
                    ? "Batasi minuman manis (teh manis, soda, boba, jus kemasan)."
                    : "Limit sugary drinks (sweet tea, soda, sugary coffee).",
                ]}
              />

              <InfoCard
                title={lang === "id" ? "3) Lemak & Cara Masak" : "3) Fats & Cooking"}
                items={[
                  lang === "id"
                    ? "Kurangi gorengan, pilih: tumis sedikit minyak, rebus, kukus, panggang."
                    : "Reduce deep-fried foods; choose sauté, boil, steam, grill.",
                  lang === "id"
                    ? "Pakai lemak baik secukupnya: kacang, alpukat, minyak zaitun/kanola."
                    : "Use healthy fats in moderation: nuts, avocado, olive/canola oil.",
                  lang === "id"
                    ? "Kalau mau goreng: porsi kecil + jarang + seimbangkan dengan sayur."
                    : "If fried: small portion, less often, balance with veggies.",
                ]}
              />

              <InfoCard
                title={lang === "id" ? "4) Pola Jam Makan" : "4) Meal Timing"}
                items={[
                  lang === "id"
                    ? "Usahakan jam makan konsisten (jangan lompati makan kalau gampang lapar)."
                    : "Keep meal times consistent (avoid skipping if it triggers overeating).",
                  lang === "id"
                    ? "Snack kalau perlu: pilih yang tinggi protein/serat."
                    : "Snack if needed: prioritize protein/fiber.",
                  lang === "id"
                    ? "Minum air cukup. Kadang “lapar” itu sebenarnya haus."
                    : "Drink enough water—sometimes ‘hunger’ is thirst.",
                ]}
              />
            </div>

            <div className="predia-goodbox" style={{ marginTop: 14 }}>
              {lang === "id"
                ? "✅ Trik paling gampang: tambah sayur dulu, baru karbo. Kalau masih lapar, tambah protein."
                : "✅ Easiest trick: veggies first, then carbs. Still hungry? Add protein."}
            </div>
          </div>
        </section>

        {/* ==========================================
            IDE MENU
           ========================================== */}
        <section className="predia-edu-section">
          <div className="predia-card predia-card--spaced">
            <div className="predia-mini-kicker">
              {lang === "id" ? "IDE MENU" : "MEAL IDEAS"}
            </div>

            <h2 className="predia-h2" style={{ marginBottom: 8 }}>
              {lang === "id" ? "Contoh Menu Sehat" : "Healthy Meal Ideas"}
            </h2>

            <p className="predia-p" style={{ marginBottom: 14 }}>
              {lang === "id" ? "Ini ide menu yang bisa kamu pakai buat inspirasi." : "Use these as inspiration."}
            </p>

            <div className="row g-3">
              <RecipeCard
                img="/images/recipe1.jpg"
                badge={lang === "id" ? "Sarapan" : "Breakfast"}
                title={lang === "id" ? "Oat + Telur + Buah" : "Oats + Eggs + Fruit"}
                points={[
                  lang === "id" ? "1. Oats dimasak + chia/selai kacang tipis" : "1. Cooked oats + chia/peanut butter (thin)",
                  lang === "id" ? "2. Telur rebus/ceplok minyak minim" : "2. Boiled/low-oil eggs",
                  lang === "id" ? "3. Buah 1 porsi (apel/pear/papaya)" : "3. 1 serving fruit (apple/pear/papaya)",
                ]}
              />

              <RecipeCard
                img="/images/recipe2.jpg"
                badge={lang === "id" ? "Makan Siang" : "Lunch"}
                title={lang === "id" ? "Nasi + Telur + Capcay" : "Rice + Eggs + Cap cai"}
                points={[
                  lang === "id" ? "¼ piring nasi (boleh nasi merah)" : "¼ plate rice (brown rice optional)",
                  lang === "id" ? "Telur rebus/ceplok minyak minim" : "Boiled/low-oil eggs",
                  lang === "id" ? "Tambahkan capcay biar kenyang" : "Add cap cai for more fullness",
                ]}
              />

              <RecipeCard
                img="/images/recipe3.png"
                badge={lang === "id" ? "Makan Malam" : "Dinner"}
                title={lang === "id" ? "Ayam/Ikan Panggang + Tumis Sayur" : "Grilled Chicken/Fish + Stir-fry Veggies"}
                points={[
                  lang === "id" ? "Protein panggang/rebus (bukan goreng)" : "Grill/boil protein (not deep-fry)",
                  lang === "id" ? "Sayur 2 jenis (brokoli, buncis, wortel)" : "2 veggies (broccoli, beans, carrots)",
                  lang === "id" ? "Karbo kecil: ubi/kentang/nasi sedikit" : "Small carbs: sweet potato/potato/small rice",
                ]}
              />

              <RecipeCard
                img="/images/recipe4.jpg"
                badge={lang === "id" ? "Snack" : "Snack"}
                title={lang === "id" ? "Snack Anti-Lapar & Lebih Aman" : "More Blood-Sugar-Friendly Snacks"}
                points={[
                  lang === "id" ? "1. Yogurt plain + kacang" : "1. Plain yogurt + nuts",
                  lang === "id" ? "2. Buah + keju/edamame" : "2. Fruit + cheese/edamame",
                  lang === "id" ? "3. Roti gandum tipis + telur" : "3. Thin whole-grain toast + egg",
                ]}
              />
            </div>

            <div className="predia-infobox" style={{ marginTop: 14 }}>
              <b>{lang === "id" ? "Kalau kamu sering lapar:" : "If you get hungry often:"}</b>
              <ul style={{ marginBottom: 0, paddingLeft: 18 }}>
                <li>
                  {lang === "id"
                    ? "Tambah sayur + protein, bukan tambah minuman manis."
                    : "Add veggies + protein, not sugary drinks."}
                </li>
                <li>
                  {lang === "id"
                    ? "Kurangi porsi karbo sedikit tapi jangan hilang total."
                    : "Reduce carbs a bit, but don’t cut them entirely."}
                </li>
                <li>
                  {lang === "id"
                    ? "Coba jalan 10 menit setelah makan kalau memungkinkan."
                    : "Try a 10-minute walk after meals if possible."}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Lifestyle Tips ===== */}
        <section className="predia-edu-section">
          <div className="predia-card predia-card--spaced">
            <h2 className="predia-h2">
              {lang === "id" ? "Tips Lifestyle yang Realistis" : "Realistic Lifestyle Tips"}
            </h2>

            <div className="row g-3" style={{ marginTop: 10 }}>
              <TipBox
                title={lang === "id" ? "Minum" : "Drinks"}
                items={[
                  lang === "id" ? "Ganti minuman manis → air putih / infused water." : "Swap sugary drinks → water / infused water.",
                  lang === "id" ? "Kalau kopi/teh: kurangi gula bertahap." : "For coffee/tea: reduce sugar gradually.",
                  lang === "id" ? "Kalau pengen manis: pilih buah utuh, bukan jus." : "Craving sweet? Choose whole fruit, not juice.",
                ]}
              />
              <TipBox
                title={lang === "id" ? "Makan" : "Food"}
                items={[
                  lang === "id" ? "Mulai dari porsi: pakai piring lebih kecil." : "Start with portions: use a smaller plate.",
                  lang === "id" ? "Tambah sayur dulu sebelum nasi." : "Add vegetables before rice/carbs.",
                  lang === "id" ? "Protein tiap makan bantu kenyang lebih lama." : "Protein each meal helps you stay full longer.",
                ]}
              />
              <TipBox
                title={lang === "id" ? "Gerak" : "Movement"}
                items={[
                  lang === "id" ? "Jalan 10 menit setelah makan (kalau memungkinkan)." : "Walk 10 minutes after meals (if possible).",
                  lang === "id" ? "Target 30 menit/hari, tidak harus sekaligus." : "Aim 30 minutes/day, can be split.",
                  lang === "id" ? "Break duduk lama tiap 1 jam." : "Break long sitting every hour.",
                ]}
              />
              <TipBox
                title={lang === "id" ? "Tidur & Stres" : "Sleep & Stress"}
                items={[
                  lang === "id" ? "Kurangi scroll sebelum tidur (15–30 menit)." : "Reduce scrolling before bed (15–30 min).",
                  lang === "id" ? "Latihan napas 1 menit kalau cemas." : "Try 1-minute breathing when anxious.",
                  lang === "id" ? "Tidur konsisten lebih penting dari ‘sempurna’." : "Consistency matters more than perfection.",
                ]}
              />
            </div>

            <div style={{ marginTop: 18 }}>
              <Link to="/login" className="btn btn-secondary me-2">
                {lang === "id" ? "Cek Risiko di PredDia" : "Check Risk in PredDia"}
              </Link>
              <Link to="/risk-factors" className="btn btn-white-outline">
                {lang === "id" ? "Kembali ke Faktor Risiko" : "Back to Risk Factors"}
              </Link>
            </div>
          </div>
        </section>

        {/* Inline CSS */}
        <style>{`
          .lifestyle-page .predia-edu-section{
            margin-top: 22px;
            margin-bottom: 22px;
          }

          .lifestyle-page .predia-card{
            padding: 22px;
          }
          .lifestyle-page .predia-card--spaced{
            padding: 26px;
          }
          @media (max-width: 575px){
            .lifestyle-page .predia-card,
            .lifestyle-page .predia-card--spaced{
              padding: 16px;
            }
          }

          .predia-hero-note{
            margin-top: 10px;
            padding: 12px 14px;
            border-radius: 14px;
            border: 1px solid rgba(59,93,80,.14);
            background: rgba(59,93,80,.06);
            color: rgba(31,43,37,.88);
            line-height: 1.55;
          }

          .life-center{
            text-align: center;
            max-width: 920px;
            margin: 0 auto;
            padding: 10px 8px 0;
          }

          .life-row{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            min-height: 360px;
            align-items: stretch;
          }

          .life-tile{
            padding: 34px;
            position: relative;
          }

          .life-tile--img{
            padding: 0;
            background: #eef4f1;
            min-height: 360px;
            overflow: hidden;
          }
          .life-tile-img{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }

          .life-tile--green{
            background: #3b5d50;
            color: #fff;
          }
          .life-tile--white{
            background: #fff;
            color: #1f2b25;
          }

          .life-tile-title{
            font-weight: 900;
            font-size: clamp(22px, 2.2vw, 30px);
            margin: 0 0 12px 0;
            line-height: 1.1;
          }
          .life-tile-text{
            margin: 0 0 12px 0;
            line-height: 1.7;
            font-size: 15px;
            opacity: .95;
          }
          .life-tile-list{
            padding-left: 18px;
            margin: 10px 0 0 0;
            line-height: 1.7;
            font-size: 14px;
            opacity: .92;
          }

          @media (max-width: 991px){
            .life-row{ grid-template-columns: 1fr; }
            .life-tile{ padding: 22px 18px; }
            .life-tile--img{ min-height: 260px; }
          }

          .life-row + .life-row{
            border-top: 1px solid rgba(0,0,0,.10);
          }
          .life-row:not(.life-row--reverse) .life-tile--green,
          .life-row:not(.life-row--reverse) .life-tile--white{
            border-left: 1px solid rgba(0,0,0,.10);
          }
          .life-row.life-row--reverse .life-tile--img{
            border-left: 1px solid rgba(0,0,0,.10);
          }

          .lifestyle-page .predia-mini-card{
            padding: 0;
            overflow: hidden;
          }
          .recipe-img-wrap{
            width: 100%;
            height: 150px;
            background: #eef4f1;
            overflow: hidden;
          }
          .recipe-img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transform: scale(1);
            transition: transform .25s ease;
          }
          .lifestyle-page .predia-mini-card:hover .recipe-img{
            transform: scale(1.06);
          }
          .recipe-body{
            padding: 16px 16px 14px;
          }
          .recipe-body .predia-badge{
            margin-bottom: 10px;
          }
          .recipe-points{
            padding-left: 18px;
            margin: 0 0 12px 0;
            color: rgba(31,43,37,.78);
            font-size: 14px;
            line-height: 1.55;
          }
          .recipe-points li{ margin-bottom: 6px; }

          .lifestyle-page .predia-card{
            border: 1px solid rgba(59,93,80,.12);
            border-radius: 18px;
            background: linear-gradient(180deg, #ffffff 0%, #fbfcfb 100%);
            box-shadow: 0 14px 34px rgba(0,0,0,.06);
            position: relative;
          }
          .lifestyle-page .predia-card::before{
            content:"";
            position:absolute;
            inset:0;
            background: radial-gradient(900px 300px at 15% 0%, rgba(59,93,80,.10), transparent 60%);
            pointer-events:none;
          }
          .lifestyle-page .predia-card > *{ position: relative; z-index: 1; }

          .lifestyle-page .predia-mini-kicker{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 800;
            font-size: 12px;
            letter-spacing: .12em;
            color: rgba(59,93,80,.85);
            text-transform: uppercase;
            margin-bottom: 8px;
          }
          .lifestyle-page .predia-mini-kicker::before{
            content:"";
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: #3b5d50;
            box-shadow: 0 0 0 4px rgba(59,93,80,.12);
          }

          .lifestyle-page .predia-badge{
            display:inline-flex;
            align-items:center;
            gap:8px;
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 900;
            font-size: 12px;
            background: rgba(59,93,80,.10);
            color: #2f4a40;
            border: 1px solid rgba(59,93,80,.14);
          }

          .lifestyle-page .predia-mini-card{
            height: 100%;
            border-radius: 16px;
            border: 1px solid rgba(0,0,0,.08);
            background: #fff;
            box-shadow: 0 10px 22px rgba(0,0,0,.05);
            transition: transform .20s ease, box-shadow .20s ease, border-color .20s ease;
            position: relative;
          }
          .lifestyle-page .predia-mini-card:hover{
            transform: translateY(-6px);
            border-color: rgba(59,93,80,.18);
            box-shadow: 0 18px 42px rgba(0,0,0,.10);
          }

          .lifestyle-page .predia-tipbox{
            height: 100%;
            border-radius: 16px;
            border: 1px solid rgba(59,93,80,.10);
            background: linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%);
            padding: 18px;
            box-shadow: 0 10px 22px rgba(0,0,0,.05);
            transition: transform .20s ease, box-shadow .20s ease, border-color .20s ease;
            position: relative;
            overflow: hidden;
          }
          .lifestyle-page .predia-tipbox:hover{
            transform: translateY(-6px);
            border-color: rgba(59,93,80,.18);
            box-shadow: 0 18px 42px rgba(0,0,0,.10);
          }
          .lifestyle-page .predia-tipbox ul{ margin-top: 10px; }
          .lifestyle-page .predia-tipbox li{
            margin-bottom: 8px;
            line-height: 1.55;
          }

          .lifestyle-page .btn{
            border-radius: 12px;
            font-weight: 800;
            letter-spacing: .2px;
            padding: 10px 14px;
            transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
          }
          .lifestyle-page .btn:hover{
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(0,0,0,.10);
            filter: brightness(1.01);
          }
          .lifestyle-page .btn.btn-white-outline{
            background: #fff;
            border: 1px solid rgba(59,93,80,.20);
            color: #2f4a40;
          }
          .lifestyle-page .btn.btn-white-outline:hover{
            border-color: rgba(59,93,80,.35);
          }
        `}</style>
      </main>
    </div>
  );
}

/* ===== Components ===== */
function RecipeCard({ img, title, badge, points }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="predia-mini-card">
        <div className="recipe-img-wrap">
          <img src={img} alt={title} className="recipe-img" />
        </div>

        <div className="recipe-body">
          <div className="predia-badge">{badge}</div>
          <h4 className="predia-mini-title" style={{ marginTop: 10 }}>
            {title}
          </h4>

          <ul className="recipe-points">
            {points?.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TipBox({ title, items }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="predia-tipbox">
        <h4 className="predia-mini-title" style={{ marginBottom: 10 }}>
          {title}
        </h4>
        <ul
          style={{
            paddingLeft: 18,
            marginBottom: 0,
            fontSize: 14,
            color: "#444",
          }}
        >
          {items.map((t, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="col-12 col-md-6">
      <div className="predia-tipbox">
        <h4 className="predia-mini-title" style={{ marginBottom: 10 }}>
          {title}
        </h4>
        <ul
          style={{
            paddingLeft: 18,
            marginBottom: 0,
            fontSize: 14,
            color: "#444",
          }}
        >
          {items.map((t, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
