import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Machinery from "./sections/Machinery";
import Gallery from "./sections/Gallery";
import WorksPage from "./sections/WorksPage";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Careers from "./sections/Careers";

// Automatically scrolls to top on route change (/works, /careers) unless a hash anchor is targeted
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Services />
                <Machinery />
                <Gallery />
                <Testimonials />
                <Team />
                <FAQ />
                <Contact />
              </main>
            }
          />
          <Route
            path="/works"
            element={
              <main>
                <WorksPage />
              </main>
            }
          />
          <Route
            path="/careers"
            element={
              <main>
                <Careers />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
