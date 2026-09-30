import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import WorkDetails from "./pages/WorkDetails";

// يسكرول للقسم لو الرابط فيه #hash، وإلا يفتح الصفحة من فوق
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:slug" element={<WorkDetails />} />
      </Routes>

      <Footer />

      {/* زر الواتساب الثابت */}
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;