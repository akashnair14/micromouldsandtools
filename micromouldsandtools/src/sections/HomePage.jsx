import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Team from "../../public/Team";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Team />
            <Gallery />
            <Contact />
            <Footer />
        </>
    );
}
