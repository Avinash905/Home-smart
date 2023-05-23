import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="text-neutral-900 dark:text-neutral-200 dark:bg-neutral-800">
        <Navbar />
        <Hero />
        <Services />
        <Partners />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
