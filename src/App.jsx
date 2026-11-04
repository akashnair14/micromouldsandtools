import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export default function App() {
  // Scroll to hash on initial load if any
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
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
