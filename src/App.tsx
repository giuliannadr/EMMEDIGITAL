import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPresentation from './components/BrandPresentation';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] text-[#FAFAFA] min-h-screen font-sans selection:bg-[#FF0000] selection:text-white">
    <CustomCursor />
      <Navbar />
      <Hero />
      <BrandPresentation />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
