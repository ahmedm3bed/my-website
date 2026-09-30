import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span>تواصل معنا</span>
          <h2>اتصل بنا</h2>
          <p>لديك مشروع أو تريد معرفة المزيد عن خدماتنا؟ تواصل معنا وسنساعدك في اختيار الحل المناسب.</p>
        </div>

        <div className={`contact-container reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <span>الهاتف</span>
                <a href="tel:+201043070179">+201043070179</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <span>البريد الإلكتروني</span>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <span>العنوان</span>
                <p>حدائق اكتوبر \محافظه الجيزه \ مصر</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="الاسم" />
              <input type="tel" placeholder="رقم الهاتف" />
            </div>
            <input type="email" placeholder="البريد الإلكتروني" />
            <input type="text" placeholder="موضوع الرسالة" />
            <textarea rows="6" placeholder="اكتب رسالتك هنا..."></textarea>
            <button type="submit">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;