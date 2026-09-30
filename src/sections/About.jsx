import { useEffect, useState } from "react";

import logo from "../assets/logo.jpg";
import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

/* =====================================================
   ✏️ عدّل البيانات دي بمعلومات شركتك
===================================================== */

// صورة صاحب الشركة (حط صورته في src/assets واستوردها بدل اللوجو)
const OWNER_IMAGE = logo;
const OWNER_NAME = "الوليد جلاس";
const OWNER_TITLE = "مؤسس ومدير الشركة";

const stats = [
  { icon: "trophy", to: 15, suffix: "+", label: "عامًا من الخبرة" },
  { icon: "users", to: 40, suffix: "+", label: "مهندس وفني" },
  { icon: "like", to: 300, suffix: "+", label: "عميل راضٍ" },
  { icon: "building", to: 500, suffix: "+", label: "مشروع منجز" },
];

// لو عندك لوجو الشريك حط رابط/استيراد الصورة في logo، وإلا هيظهر الاسم
const partners = [
  { name: "شريك 1", logo: "" },
  { name: "شريك 2", logo: "" },
  { name: "شريك 3", logo: "" },
  { name: "شريك 4", logo: "" },
  { name: "شريك 5", logo: "" },
  { name: "شريك 6", logo: "" },
];

const certificates = [
  { title: "شهادة الجودة", image: "" },
  { title: "شهادة الاعتماد", image: "" },
  { title: "شهادة التميز", image: "" },
];

/* ===================================================== */

const icons = {
  trophy: (
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
  ),
  users: (
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  ),
  like: (
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  ),
  building: (
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
  ),
};

/* عدّاد أرقام متحرك */
function CountUp({ to, suffix = "", active }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const duration = 1600;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);

  return (
    <>
      {n.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

function About() {
  const story = useScrollReveal();
  const statsReveal = useScrollReveal();
  const partnersReveal = useScrollReveal();
  const certsReveal = useScrollReveal();

  const vis = (v) => `reveal ${v ? "is-visible" : ""}`;

  return (
    <div id="about" className="ab-page">
      {/* ===== من نحن ===== */}
      <section className="ab-story" ref={story.ref}>
        <span className="ab-watermark" aria-hidden="true">
          أهلاً بكم
        </span>

        <div className={`container ab-story-grid ${vis(story.isVisible)}`}>
          <div className="ab-text">
            <span className="ab-label">تعرف على شركتنا</span>
            <h2>من نحن؟</h2>

            <p>
              نحن شركة متخصصة في تنفيذ أعمال الزجاج والألوميتال بمختلف أنواعها،
              ونسعى دائمًا لتقديم حلول تجمع بين الجودة العالية والتصميم العصري.
            </p>
            <p>
              نعمل على تنفيذ المشروعات باهتمام كبير بالتفاصيل، بداية من اختيار
              الخامات المناسبة وحتى التركيب والتشطيب النهائي، بأيدي فنيين
              ذوي خبرة طويلة في السوق.
            </p>
            <p>
              هدفنا أن نكون الاختيار الأول لعملائنا في الواجهات الزجاجية
              والأبواب والقواطيع وأعمال الألوميتال، بجودة تدوم وخدمة نفتخر بها.
            </p>

            <h3 className="ab-social-title">ابقى على تواصل</h3>
            <div className="ab-social">
              <a href="#" aria-label="فيسبوك">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="إنستجرام">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="يوتيوب">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 8.5a3 3 0 0 0-2-2C18 6 12 6 12 6s-6 0-8 .5a3 3 0 0 0-2 2C1.5 10.5 1.5 12 1.5 12s0 1.5.5 3.5a3 3 0 0 0 2 2C6 18 12 18 12 18s6 0 8-.5a3 3 0 0 0 2-2c.5-2 .5-3.5.5-3.5s0-1.5-.5-3.5z" />
                  <path d="M10 15l5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>

          <figure className="ab-owner">
            <div className="ab-owner-frame cut-panel">
              <img src={OWNER_IMAGE} alt={OWNER_NAME} />
            </div>
            <figcaption>
              <strong>{OWNER_NAME}</strong>
              <span>{OWNER_TITLE}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== الأرقام ===== */}
      <section className="ab-stats-section" ref={statsReveal.ref}>
        <div className={`container ab-stats ${vis(statsReveal.isVisible)}`}>
          {stats.map((s, i) => (
            <div
              className="ab-stat"
              key={s.label}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="ab-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {icons[s.icon]}
                </svg>
              </div>
              <strong>
                <CountUp to={s.to} suffix={s.suffix} active={statsReveal.isVisible} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== الشركاء ===== */}
      <section className="ab-partners" ref={partnersReveal.ref}>
        <div className={`container ${vis(partnersReveal.isVisible)}`}>
          <div className="ab-head">
            <span className="ab-label">نجاحنا</span>
            <h2>الشركاء الاستراتيجيين</h2>
            <p>نفخر بثقة شركائنا وعملائنا الذين شاركونا رحلة النجاح.</p>
          </div>

          <div className="ab-marquee">
            <div className="ab-marquee-track">
              {[...partners, ...partners].map((p, i) => (
                <div className="ab-partner" key={i}>
                  {p.logo ? <img src={p.logo} alt={p.name} /> : <span>{p.name}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== الشهادات ===== */}
      <section className="ab-certs" ref={certsReveal.ref}>
        <div className={`container ${vis(certsReveal.isVisible)}`}>
          <div className="ab-head">
            <span className="ab-label">اعتماداتنا</span>
            <h2>شهاداتنا</h2>
          </div>

          <div className="ab-certs-grid">
            {certificates.map((c, i) => (
              <div
                className="ab-cert"
                key={c.title}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {c.image ? (
                  <img src={c.image} alt={c.title} />
                ) : (
                  <div className="ab-cert-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                    </svg>
                    <span>{c.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;