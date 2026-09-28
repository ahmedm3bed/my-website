import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import { works } from "../data/works";

function Works() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="section works-section" id="works" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span>مشروعاتنا</span>
          <h2>أعمالنا</h2>
          <p>مجموعة من أعمالنا ومشروعاتنا التي نفذناها بأعلى معايير الجودة والدقة.</p>
        </div>

        <div className="works-grid">
          {works.map((work, i) => (
            <Link
              to={`/works/${work.slug}`}
              className={`work-card cut-panel reveal ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              key={work.slug}
            >
              <img src={work.image} alt={work.title} />
              <div className="work-overlay">
                <span>{work.category}</span>
                <h3>{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;