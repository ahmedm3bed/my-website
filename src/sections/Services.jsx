import useScrollReveal from "../hooks/useScrollReveal";

const services = [
  { number: "01", title: "واجهات زجاجية", description: "تصميم وتنفيذ الواجهات الزجاجية للمحلات والشركات والمباني بتصميمات عصرية." },
  { number: "02", title: "أعمال الألوميتال", description: "تنفيذ أبواب وشبابيك الألوميتال بأعلى جودة ومقاسات دقيقة وتشطيبات مميزة." },
  { number: "03", title: "أبواب زجاج", description: "أبواب زجاجية للمنازل والمكاتب والمحلات بتصميم أنيق وعصري." },
  { number: "04", title: "كبائن الشاور", description: "تصميم وتنفيذ كبائن الشاور الزجاجية بمختلف التصميمات والمقاسات." },
  { number: "05", title: "الدرابزين الزجاجي", description: "درابزينات زجاجية للسلالم والبلكونات بتصميمات تجمع بين الأمان والجمال." },
  { number: "06", title: "الكلادينج والواجهات", description: "تنفيذ واجهات المباني والمحلات بتصميمات احترافية ومظهر عصري." },
];

function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="section services-section section-dark" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span>ما نقدمه</span>
          <h2>خدماتنا</h2>
          <p>مجموعة متكاملة من حلول الزجاج والألوميتال لتلبية احتياجات المنازل والمشروعات التجارية.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className={`service-card cut-panel reveal ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 90}ms`, background: "var(--steel)", borderColor: "rgba(170,180,190,0.2)", color: "#fff" }}
              key={service.number}
            >
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p style={{ color: "var(--aluminum)" }}>{service.description}</p>
              <a href="#contact">اطلب الخدمة ←</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;