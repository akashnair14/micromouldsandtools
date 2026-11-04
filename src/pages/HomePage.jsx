import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Machinery from "../sections/Machinery";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import Team from "../sections/Team";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
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
  );
}
