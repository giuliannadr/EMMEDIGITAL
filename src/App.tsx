import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import ReactGA from 'react-ga4';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Para SEO pro

// Componentes con Carga Diferida (Lazy Loading) para mejorar el FCP y LCP
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { CustomCursor } from './components/CustomCursor';

const BrandPresentation = lazy(() => import('./components/BrandPresentation'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

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
        
        {/* SEO */}
<Helmet>
  <title>EMME DIGITAL | Agencia de Marketing Digital en Argentina</title>
  <meta name="description" content="Agencia de Marketing Digital en Argentina. Gestionamos redes sociales, producimos contenido fotográfico y audiovisual, y desarrollamos sitios web de alto impacto para marcas que quieren crecer." />
  <meta name="keywords" content="marketing digital Argentina, agencia de marketing, redes sociales, community manager, producción fotográfica, edición audiovisual, diseño web, Emme Digital" />
  <meta name="author" content="EMME DIGITAL" />
  <meta name="robots" content="index, follow" />
  <meta name="google-site-verification" content="1CQZuZUAsgM-B6C3z_ITwYDNFA2GtaN09KlvzPx3Sto" />
  <link rel="canonical" href="https://emmedigital.com.ar" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://emmedigital.com.ar" />
  <meta property="og:site_name" content="EMME DIGITAL" />
  <meta property="og:locale" content="es_AR" />
  <meta property="og:title" content="EMME DIGITAL | Agencia de Marketing Digital en Argentina" />
  <meta property="og:description" content="Agencia de Marketing Digital en Argentina. Redes sociales, producción de contenido, edición audiovisual y desarrollo web para marcas que quieren resultados reales." />
  <meta property="og:image" content="https://emmedigital.com.ar/og-image.jpg" />
  <meta property="og:image:width" content="1080" />
  <meta property="og:image:height" content="1080" />
  <meta property="og:image:alt" content="EMME DIGITAL — Agencia de Marketing Digital" />

  {/* Twitter / X Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="EMME DIGITAL | Agencia de Marketing Digital en Argentina" />
  <meta name="twitter:description" content="Redes sociales, contenido visual y desarrollo web para marcas que quieren crecer." />
  <meta name="twitter:image" content="https://emmedigital.com.ar/og-image.jpg" />

  {/* JSON-LD — Structured Data */}
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EMME DIGITAL",
    "url": "https://emmedigital.com.ar",
    "logo": "https://emmedigital.com.ar/og-image.jpg",
    "description": "Agencia de Marketing Digital en Argentina especializada en redes sociales, producción de contenido fotográfico y audiovisual, y desarrollo web.",
    "areaServed": "AR",
    "serviceType": [
      "Marketing Digital",
      "Gestión de Redes Sociales",
      "Producción Fotográfica",
      "Edición Audiovisual",
      "Desarrollo Web"
    ],
    "sameAs": []
  })}</script>
</Helmet>

        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <Suspense fallback={<div className="h-screen bg-[#050505]" />}>
            <BrandPresentation />
          </Suspense>
          <Suspense fallback={<div className="h-screen bg-[#050505]" />}>
            <Services />
          </Suspense>
          <Suspense fallback={<div className="h-screen bg-[#F5F5F5]" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-40 bg-[#050505]" />}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
};

export default App;