import HeroSection from "../sections/Home";
import Services from "../sections/Services";
import Works from "../sections/Works";
import About from "../sections/About";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Works />
      <About />
      <Contact />
    </>
  );
}

export default Home;