import "./Home.css";
import video from "../assets/vv.mp4";

function Home() {
  return (
    <section className="dh-hero" id="home">
      <video
        className="dh-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* الستارة الزرقاء الشفافة */}
      <div className="dh-hero__overlay" />

      {/* الكلام فوق الفيديو */}
      <div className="dh-hero__content">
        <h1>
          الوليد جلاس
          <br />
          أكبر شركه زجاج في مصر
        </h1>

        <p>
          على مدار أكثر من 60 عامًا، نقوم بتشكيل المساحات بحلولنا المبتكرة من
          الزجاج . من خلال عملية تعاونية يعمل فريقنا
          الملتزم عن قرب مع العملاء لتحويل أفكارهم إلى واقع ملموس.
        </p>

        <div className="dh-hero__buttons">
          <a href="#about" className="dh-hero__btn">من نحن</a>
          <a href="#services" className="dh-hero__btn">ماذا نفعل</a>
        </div>
      </div>

      <div className="dh-hero__scroll">
        <span>اكتشف المزيد</span>
        <span>↓</span>
      </div>
    </section>
  );
}

export default Home;