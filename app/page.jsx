//Komponenter
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projekt from "./components/Projekt";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Projekt />
      </div>
      <div id="cta">
        <Cta />
      </div>
    </main>
  );
}
