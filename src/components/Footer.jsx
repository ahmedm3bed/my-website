import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">
          <img
            src={logo}
            alt="زجاج وألوميتال"
            className="footer-logo"
          />

          <p>
            متخصصون في أعمال الزجاج والألوميتال
            بتصميمات عصرية وجودة عالية وتنفيذ احترافي.
          </p>
        </div>

        <div className="footer-column">
          <h3>روابط سريعة</h3>

          <a href="#home">الرئيسية</a>
          <a href="#services">خدماتنا</a>
          <a href="#works">أعمالنا</a>
          <a href="#about">من نحن</a>
          <a href="#contact">اتصل بنا</a>
        </div>

        <div className="footer-column">
          <h3>تواصل معنا</h3>

          <a href="tel:+201000000000">
            📞 +20 100 000 0000
          </a>

          <a href="mailto:info@example.com">
            ✉️ info@example.com
          </a>

          <p>
            📍 مصر
          </p>
        </div>

        <div className="footer-column">
          <h3>تابعنا</h3>

          <div className="social-links">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()}
            {" "}
            زجاج وألوميتال. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;