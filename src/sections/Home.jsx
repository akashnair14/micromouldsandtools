import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Gallery from "./Gallery";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Contact />
    </div>
  );
}
