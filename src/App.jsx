import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Team from "../public/Team";
import Gallery from "./sections/Gallery";
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
      <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Team />
                <Gallery />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Navbar />
                <Careers />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
