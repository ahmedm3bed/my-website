import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.jpg";

const links = [
  { label: "الرئيسية", to: "/" },
  { label: "خدماتنا", to: "/#services" },
  { label: "أعمالنا", to: "/#works" },
  { label: "من نحن", to: "/#about" },
  { label: "اتصل بنا", to: "/#contact" },
];

// ⚠️ رقم التواصل
const PHONE_NUMBER = "01043070179";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // شفاف بس في الرئيسية وهو فوق خالص. غير كده أسود
  const solid = !isHome || scrolled || open;

  const handleClick = (to) => {
    setOpen(false);
    if (to === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${solid ? "navbar--solid" : "navbar--transparent"}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => handleClick("/")}>
          <img src={logo} alt="الشعار" />
        </Link>

        <div className={`nav-menu ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => handleClick(l.to)}>
              {l.label}
            </Link>
          ))}
        </div>

        <a href={`tel:${PHONE_NUMBER}`} className="navbar-phone" dir="ltr">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
          </svg>
          {PHONE_NUMBER}
        </a>

        <Link to="/#contact" className="navbar-contact">
          <svg
            className="phone-icon"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
          </svg>
          اطلب عرض سعر
        </Link>

        <button
          type="button"
          className={`menu-button ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;