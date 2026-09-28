import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useScrollReveal from "../hooks/useScrollReveal";
import { works } from "../data/works";
import "./WorkDetails.css";

/* ---------- سلايدر الصور ---------- */
function Carousel({ images, title, onOpen }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // الموقع RTL: dir = -1 للأمام (شمال)، و 1 للخلف (يمين)
  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;

    const step = el.firstElementChild.offsetWidth + 14;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft);

    // لو وصل للآخر يرجع للأول، ولو في الأول والخلف يروح للآخر
    if (dir === -1 && pos >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (dir === 1 && pos <= 4) {
      el.scrollTo({ left: -maxScroll, behavior: "smooth" });
      return;
    }

    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // تشغيل تلقائي كل 3 ثواني (بيقف لما تقف بالماوس أو تلمس السلايدر)
  useEffect(() => {
    if (paused || images.length < 2) return;
    const id = setInterval(() => scroll(-1), 3000);
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <button
        type="button"
        className="carousel-btn carousel-btn-right"
        onClick={() => scroll(1)}
        aria-label="السابق"
      >
        ›
      </button>

      <div className="carousel-track" ref={trackRef}>
        {images.map((src, i) => (
          <button
            type="button"
            className="carousel-item"
            key={i}
            onClick={() => onOpen(src)}
          >
            <img src={src} alt={`${title} ${i + 1}`} />
          </button>
        ))}
      </div>

      <button
        type="button"
        className="carousel-btn carousel-btn-left"
        onClick={() => scroll(-1)}
        aria-label="التالي"
      >
        ‹
      </button>
    </div>
  );
}

/* ---------- قسم واحد (عنوان + نص + صورة + معرض) ---------- */
function WorkSection({ section, index, onOpen }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`work-section reveal ${isVisible ? "is-visible" : ""} ${
        index % 2 === 1 ? "reverse" : ""
      }`}
    >
      <h2 className="work-section-title">{section.title}</h2>

      <div className="work-section-body">
        <div className="work-section-text">
          <p className="work-lead">{section.lead}</p>
          {section.paragraphs?.map((p, i) => (
            <p className="work-paragraph" key={i}>
              {p}
            </p>
          ))}
        </div>

        <button
          type="button"
          className="work-section-image"
          onClick={() => onOpen(section.image)}
        >
          <img src={section.image} alt={section.title} />
        </button>
      </div>

      {section.gallery?.length > 0 && (
        <>
          <h3 className="work-gallery-title">معرض الصور</h3>
          <Carousel
            images={section.gallery}
            title={section.title}
            onOpen={onOpen}
          />
        </>
      )}
    </section>
  );
}

/* ---------- الصفحة ---------- */
function WorkDetails() {
  const { slug } = useParams();
  const work = works.find((w) => w.slug === slug);
  const [activeImage, setActiveImage] = useState(null);

  // قفل الصورة المكبرة بزرار Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActiveImage(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!work) {
    return (
      <main className="work-details work-not-found">
        <div className="container">
          <h2>العمل غير موجود</h2>
          <Link to="/#works" className="back-link">
            ← الرجوع للأعمال
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="work-details">
      {/* الهيرو */}
      <header
        className="work-hero"
        style={{ backgroundImage: `url(${work.heroImage || work.image})` }}
      >
        <div className="work-hero-overlay" />
        <div className="container work-hero-content">
          <div className="work-breadcrumb">
            <Link to="/">الرئيسية</Link>
            <span>/</span>
            <Link to="/#works">أعمالنا</Link>
          </div>
          <h1>{work.title}</h1>
          <p>{work.subtitle}</p>
        </div>
      </header>

      {/* الأقسام */}
      <div className="container work-content">
        {work.sections.map((section, i) => (
          <WorkSection
            key={i}
            section={section}
            index={i}
            onOpen={setActiveImage}
          />
        ))}

        <div className="work-cta">
          <Link to="/#contact" className="navbar-contact">
            اطلب عرض سعر
          </Link>
        </div>
      </div>

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="" />
        </div>
      )}
    </main>
  );
}

export default WorkDetails;