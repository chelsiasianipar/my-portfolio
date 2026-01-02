import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (HOME PAGE)
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import CertificateSection from "./components/CertificateSection";
import Footer from "./components/Footer";

// Detail page
import ExperienceDetail from "./components/ExperienceDetail";

/* =========================
   HOME PAGE (ONE PAGE SCROLL)
========================= */
function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "education",
        "certificates",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .slide-up, .skill-card, .project-card"
    );
    elements.forEach((el) =>
      observerRef.current.observe(el)
    );

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* =========================
   APP WITH ROUTER
========================= */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ExperienceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
