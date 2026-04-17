import { useEffect } from 'react';
import Lenis from 'lenis';
import ReactGA from 'react-ga4';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Para SEO pro

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPresentation from './components/BrandPresentation';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

// Inicialización de Analytics (Fuera del componente para evitar duplicados)
ReactGA.initialize("G-VYX0KVLCTJ");

const App = () => {
  useEffect(() => {
    // Reportar visita a Google Analytics
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname + window.location.search 
    });

    // Configuración de Lenis (Smooth Scroll)
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
    <HelmetProvider>
      <div className="bg-[#050505] text-[#FAFAFA] min-h-screen font-sans selection:bg-[#FF0000] selection:text-white">
        
        {/* SEO Technical Setup */}
        <Helmet>
          <title>EMME DIGITAL | Branding & Web Design con Criterio Humano</title>
          <meta name="description" content="Agencia boutique de diseño web y branding. Creamos experiencias digitales cálidas, humanas y de alto impacto." />
          <meta property="og:title" content="EMME DIGITAL | Branding & Web Design" />
          <meta property="og:description" content="Estética con intención para marcas que buscan impacto real." />
          <meta property="og:type" content="website" />
          {/* Aquí podés agregar el link a una imagen de preview si la tenés */}
          <meta property="og:image" content="/og-image.jpg" /> 
        </Helmet>

        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <BrandPresentation />
          <Services />
          <Projects />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;