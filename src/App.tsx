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

    // Listeners para pausar/reanudar scroll desde otros componentes
    const stopScroll = () => lenis.stop();
    const startScroll = () => lenis.start();

    window.addEventListener('lenis-stop', stopScroll);
    window.addEventListener('lenis-start', startScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('lenis-stop', stopScroll);
      window.removeEventListener('lenis-start', startScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-[#050505] text-[#FAFAFA] min-h-screen font-sans selection:bg-[#FF0000] selection:text-white">
        
        {/* SEO Technical Setup */}
<Helmet>
  {/* El título pone el Marketing Digital primero, que es el motor de ella */}
  <title>EMME DIGITAL | Marketing Digital, Contenido Visual & Web Dev</title>
  
  {/* Una descripción clara y profesional, sin rodeos */}
  <meta name="description" content="Estrategias de Marketing Digital, gestión de Social Media, producción de fotos y videos profesionales y desarrollo web de alto impacto." />
  
  {/* Keywords enfocadas en lo que realmente hacen */}
  <meta name="keywords" content="Marketing Digital, Social Media, Producción de fotos, Producción de videos, Diseño Web, React, Emme Digital" />

  {/* Open Graph para que al compartir el link se entienda rápido qué hacen */}
  <meta property="og:title" content="EMME DIGITAL | Marketing Digital & Estrategia" />
  <meta property="og:description" content="Potenciamos marcas a través de contenido visual, redes sociales y desarrollo web profesional." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.jpg" /> 
  
  <link rel="canonical" href="https://emmedigital.ar" />
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