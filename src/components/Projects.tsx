import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  brandTopic: string;
  id: string;
  title: string;
  brandName: string;
  brandHandle: string;
  brandLogo: string;
  category: string;
  description: string;
  img: string;
  aspect: string;
  gallery: string[];
  banner: string;
  color: string;
  mockup: string[];
}

const allProjects: Project[] = [
  {
    id: '01',
    title: 'Tuli Acosta',
    brandName: 'Tuli Acosta',
    brandHandle: '',
    brandTopic: '',
    brandLogo: '/Tuli/tuli6.webp',
    category: 'Contenido Visual',
    description: 'Una propuesta basada en el uso de color y styling como recurso principal. La producción enfatiza el contraste, la textura y la expresión, generando imágenes directas y con identidad.',
    img: '/Tuli/tuli6.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Tuli/tuli5.webp', '/Tuli/tuli3.webp',  '/Tuli/tuli7.webp'],
    banner: '/Tuli/tuli8.webp',
    color: '#042759',
    mockup: [],
  }, 
 
  {
    id: '06',
    title: 'The Padel Castelar',
    brandName: 'The Padel Castelar',
    brandHandle: '@thepadelcastelar',
    brandTopic: 'Deportes',
    brandLogo: '/Padel/padel-logo.webp',
    category: 'Social Media',
    description: 'The Padel Castelar es un espacio enfocado en el entrenamiento y la comunidad. Su comunicación integra contenido dinámico en cancha con una identidad de colores intensos y tipografías marcadas que transmiten pura energía y acción.\n\nEl objetivo: posicionar una marca activa y accesible para todos los niveles, priorizando la mejora del juego y la conversión en cada pieza.',
    img: '/Padel/padel2.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Padel/padel1.webp', '/Padel/padel2.webp', '/Padel/padel3.webp', '/Padel/padel4.webp'],
    banner: '/Padel/padelbanner.webp',
    color: '#163e7b',
    mockup: ['/Padel/padel-video1.mp4', '/Padel/padel-video2.mp4'],
  }, 
  {
    id: '13',
    title: '"Encaje" By Nylon',
    brandName: 'Nylon',
    brandHandle: '',
    brandTopic: 'Moda',
    brandLogo: '',
    category: 'Contenido Visual',
    description: 'El encaje como prenda logra hacernos sentir atrevidas, rebeldes y sexys por eso se puede decir que llega para enfatizar la belleza y la confianza de uno mismo.',
    img: '/Nylon/nylon2.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Nylon/nylon1.webp', '/Nylon/nylon2.webp', '/Nylon/nylon3.webp', '/Nylon/nylon4.webp'],
    banner: '/Nylon/nylon-banner.webp',
    color: '#4b0f0e',
    mockup: [],
  }, 
  {
    id: '12',
    title: 'Brutalismo Project',
    brandName: 'Brutalismo Project',
    brandHandle: '',
    brandTopic: 'Moda',
    brandLogo: '/Brutalismo/brutalismo-logo.webp',
    category: 'Contenido Visual',
    description: 'El brutalismo, un movimiento arquitectónico caracterizado por su uso del hormigón desnudo y líneas geométricas simples. \n\nEl énfasis en la autenticidad y la funcionalidad se traduce en la búsqueda de textiles y materiales que reflejen esta crudeza, así como en la adopción de siluetas estructuradas y formas angulares.',
    img: '/Brutalismo/brutalismo2.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Brutalismo/brutalismo1.webp', '/Brutalismo/brutalismo2.webp', '/Brutalismo/brutalismo3.webp', '/Brutalismo/brutalismo4.webp'],
    banner: '/Brutalismo/brutalismo-banner.webp',
    color: '#544b46',
    mockup: [],
  },
  { 
    id: '02', 
    title: 'BIGBIG', 
    brandName: 'BigBig',
    brandHandle: '@bigbig.ba',
    brandTopic: '',
    brandLogo: '/BIG/big3.webp',
    category: 'Contenido Visual', 
    description: 'Prendas de abrigo con presencia marcan el tono de una propuesta pensada para invierno. Siluetas claras, volúmenes definidos y una paleta neutra acompañan una estética limpia, donde cada prenda toma protagonismo.', 
    img: '/BIG/big3.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/BIG/big1.webp', '/BIG/big2.webp', '/BIG/big3.webp', '/BIG/big4.webp'],
    banner: '/BIG/big-banner.webp',
    color: '#bcaa95' ,
    mockup: [],
  },
  
  
  {
    id: '07',
    title: 'Fem Salón',
    brandName: 'Fem Salón',
    brandHandle: '@fem.salon',
    brandTopic: 'Peluquería',
    brandLogo: '/Fem/fem-logo.webp',
    category: 'Social Media',
    description: 'EM es un salón de belleza de estética femenina, moderna y prolija. Su comunicación se centra en la experiencia y los resultados reales, combinando procesos técnicos con la naturalidad del día a día.\n\nA través de tonos neutros y luz natural, la identidad visual transmite un profesionalismo cercano.\n\n El objetivo: posicionar un espacio confiable y consistente, con foco absoluto en la calidad de cada transformación.',
    img: '/Fem/fem1.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Fem/fem1.webp', '/Fem/fem2.webp', '/Fem/fem3.webp', '/Fem/fem4.webp'],
    banner: '/Fem/fembanner.webp',
    color: '#d1ab9b',
    mockup: ['/Fem/fem-video1.mp4', '/Fem/fem-video2.mp4'],
  },
  {
    id: '04',
    title: 'Yosef Calzados',
    brandName: 'Yosef Calzados',
    brandHandle: '@yosef.calzados',
    brandTopic: '',
    brandLogo: '/Yosef/yosef4.webp',
    category: 'Contenido Visual',
    description: 'La producción se apoya en la ciudad como escenario. El styling define la imagen: botas protagonistas, siluetas definidas y una paleta cálida que refuerza el tono de la propuesta.\n\nEl resultado es una serie con impronta urbana, donde actitud y estilo se combinan de forma directa.',
    img: '/Yosef/yosef5.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Yosef/yosef1.webp', '/Yosef/yosef2.webp', '/Yosef/yosef3.webp', '/Yosef/yosef4.webp'],
    banner: '/Yosef/yosef-banner.webp',
    color: '#5c3b2e',
    mockup: [],
  },{ 
    id: '03', 
    title: 'Carolina', 
    brandName: 'Carolina Store',
    brandHandle: '@ccarolina.store',
    brandTopic: '',
    brandLogo: '/Carolina/carolina-logo.webp',
    category: 'Contenido Visual', 
    description: 'Una propuesta donde el lenguaje urbano se vuelve central. Texturas, color y locación se integran con naturalidad, mientras el styling marca el tono entre lo casual y lo expresivo.\n\nLa imagen se construye desde la actitud, con una impronta contemporánea y definida.', 
    img: '/Carolina/carolina2.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/Carolina/carolina5.webp', '/Carolina/carolina6.webp', '/Carolina/carolina3.webp', '/Carolina/carolina4.webp'],
    banner: '/Carolina/carolina1.webp',
    color: '#7a7a78',
    mockup: [],
  },  {
    id: '10',
    title: 'Estancia Gaona',
    brandName: 'Estancia Gaona',
    brandHandle: '@estancia_gaona',
    brandTopic: 'Gastronomía',
    brandLogo: '/Estancia/estancia-logo.webp',
    category: 'Social Media',
    description: 'Estancia Gaona es un restaurante donde el producto y el ambiente son protagonistas. Su comunicación combina procesos de cocina y momentos reales para transmitir una identidad auténtica, apoyada en una estética de tonos cálidos y texturas rústicas.\n\nEl objetivo: posicionar la marca como un punto de encuentro referente en Zona Oeste, destacando la tradición de la parrilla y la calidez de una experiencia cercana.',
    img: '/Estancia/estancia2.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Estancia/estancia1.webp', '/Estancia/estancia2.webp', '/Estancia/estancia3.webp', '/Estancia/estancia4.webp'],
    banner: '/Estancia/estanciabanner.webp',
    color: '#271918',
    mockup: ['/Estancia/estancia-video1.mp4', '/Estancia/estancia-video2.mp4'],
  },
  {
    id: '09',
    title: 'Revista Plush',
    brandName: 'Roxana Zarecki',
    brandHandle: '',
    brandTopic: 'Belleza',
    brandLogo: '/Roxana/roxana4.webp',
    category: 'Contenido Visual',
    description: 'La producción se apoya en una estética limpia y luminosa. La dirección prioriza la expresión y el movimiento, generando imágenes equilibradas donde la naturalidad y la simplicidad definen el resultado final.',
    img: '/Roxana/roxana-portada.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Roxana/roxana1.webp', '/Roxana/roxana2.webp', '/Roxana/roxana3.webp', '/Roxana/roxana4.webp'],
    banner: '/Roxana/roxana-banner.webp',
    color: '#8e302e',
    mockup: [],
  },
  
  
 
 {
    id: '05',
    title: 'Freeport Eventos',
    brandName: 'Freeport Eventos',
    brandHandle: '@freeport.eventos',
    brandTopic: 'Salón de Eventos',
    brandLogo: '/FreePort/freeport-logo.webp',
    category: 'Social Media',
    description: 'Freeport Eventos es un espacio donde la estética y la ambientación son protagonistas. Su comunicación se enfoca en los montajes y detalles que construyen la experiencia, mostrando el lugar en uso con una identidad visual de iluminación cuidada y encuadres amplios.\n\nEl objetivo: posicionar la marca como una opción exclusiva y versátil, destacando la versatilidad del espacio y la calidad del resultado final en cada evento.',
    img: '/FreePort/freeport4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/FreePort/freeport1.webp', '/FreePort/freeport2.webp', '/FreePort/freeport3.webp', '/FreePort/freeport4.webp'],
    banner: '/FreePort/freeportbanner.webp',
    color: '#090844',
    mockup: ['/FreePort/freeport-video1.mp4', '/FreePort/freeport-video2.mp4'],
  },
  {
    id: '11',
    title: 'Berenice Cafetería',
    brandName: 'Berenice Cafetería',
    brandHandle: '',
    brandTopic: 'Gastronomía',
    brandLogo: '/Berenice/berenice2.webp',
    category: 'Contenido Visual',
    description: 'Una producción que celebra la llegada de la primavera a través de una experiencia de cafetería donde el café, las tortas y las meriendas se vuelven parte de un mismo ritual. \n\nEntre flores, luz natural y tonos cálidos, las imágenes buscan transmitir frescura, disfrute y esos momentos simples que acompañan la rutina con sabor y calma.',
    img: '/Berenice/berenice3.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Berenice/berenice1.webp', '/Berenice/berenice2.webp', '/Berenice/berenice3.webp', '/Berenice/berenice4.webp'],
    banner: '/Berenice/berenice-banner.webp',
    color: '#a56f2d',
    mockup: [],
  },
 
 

];

const categories = ['Todo', 'Social Media', 'Contenido Visual', 'Web'];

const prefetchImages = (urls: (string | undefined)[], priority = false) => {
  if (typeof window === 'undefined') return;
  urls.forEach(url => {
    if (!url || url.match(/\.(mp4|webm)$/i)) return;
    
    // Usamos el objeto Image para pre-cargar de forma más ligera y eficiente
    const img = new Image();
    if (priority) {
      // @ts-ignore - fetchPriority es soportado en navegadores modernos
      img.fetchPriority = 'high';
    }
    img.src = url;
  });
};

const ProjectCard = memo(({ project, onClick, index, isCarouselItem }: { project: Project; onClick: () => void; index: number; isCarouselItem?: boolean }) => {
  const handleMouseEnter = useCallback(() => {
    // Prefetch con prioridad alta al hover porque es muy probable que haga click
    prefetchImages([...project.gallery, project.banner, ...project.mockup], true);
  }, [project]);

  const fetchPriority = index < 4 ? "high" : "auto";
  const loading = index < 4 ? "eager" : "lazy";

  return (
    <motion.div 
      layoutId={isCarouselItem ? undefined : `card-${project.id}`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className="relative group overflow-hidden cursor-pointer rounded-xl isolate aspect-[4/3] will-change-transform border border-black/5"
    >
      <motion.img 
        layoutId={isCarouselItem ? undefined : `img-${project.id}`}
        src={project.img} 
        className="
          w-full h-full object-cover 
          /* Efecto Blanco y Negro a Color */
          grayscale group-hover:grayscale-0 
          /* Transiciones combinadas */
          transition-all duration-700 ease-in-out 
          group-hover:scale-105 
          will-change-transform
        " 
        style={{ imageRendering: 'auto' }} 
        alt={project.brandName} 
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
      
      {/* Overlay y Textos */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start gap-2 pointer-events-none transition-transform duration-300 group-hover:scale-105 origin-bottom-left will-change-transform">
        <h3 className="text-xl font-black text-[#FF0000] uppercase italic leading-none tracking-tighter">
          {project.brandName}
        </h3>
        <span className="text-[9px] font-mono text-white bold border-1 border-white/60 uppercase tracking-[0.2em] px-2 py-0.5 rounded-full">
          {project.category}
        </span>
      </div>
      
      {/* Gradiente de fondo para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
    </motion.div>
  );
}, (prev, next) => prev.project.id === next.project.id);

ProjectCard.displayName = 'ProjectCard';

const ProjectCarousel = memo(({ projects, onProjectSelect }: { projects: Project[]; onProjectSelect: (p: Project) => void }) => {
  // Duplicamos los items para que el loop sea infinito y fluido
  const displayProjects = useMemo(() => {
    if (projects.length === 0) return [];
    // Repetimos lo suficiente para asegurar un scroll continuo sin saltos
    return [...projects, ...projects, ...projects];
  }, [projects]);

  if (projects.length === 0) return null;

  const scrollDuration = projects.length * 5; // Segundos por ciclo completo de la lista original

  return (
    <div className="pause-on-hover relative overflow-hidden w-full py-4">
      <div 
        className="flex gap-4 w-max animate-marquee"
        style={{ 
          animationDuration: `${scrollDuration}s`,
        }}
      >
        {displayProjects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} 
            className="w-[75vw] sm:w-[40vw] lg:w-[calc(25vw-2rem)] flex-shrink-0"
          >
            <ProjectCard 
              project={project} 
              index={index}
              isCarouselItem={true}
              onClick={() => onProjectSelect(project)} 
            />
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 30s) linear infinite;
          animation-play-state: running;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
});

ProjectCarousel.displayName = 'ProjectCarousel';

const POPUP_TRANSITION = { type: 'spring', stiffness: 380, damping: 36, mass: 0.8 } as const;
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('Todo');
  const [showGallery, setShowGallery] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Estados para Video
  const [mutedStates, setMutedStates] = useState<{[key: number]: boolean}>({ 0: true, 1: true });
  const [expandedMedia, setExpandedMedia] = useState<string | null>(null);

  useEffect(() => {
    // Pre-cargar TODAS las portadas de los proyectos al inicio para que el grid sea instantáneo
    prefetchImages(allProjects.map(p => p.img), true);
    
    // Pre-cargar banners de los primeros 6 proyectos (los más probables de ver)
    prefetchImages(allProjects.slice(0, 6).map(p => p.banner));
    
    // Pre-cargar logos
    prefetchImages(allProjects.filter(p => p.brandLogo).map(p => p.brandLogo));
  }, []);

  // Pre-cargar galería completa con prioridad ultra alta cuando se selecciona un proyecto
  useEffect(() => {
    if (selectedProject) {
      prefetchImages([
        selectedProject.banner,
        ...selectedProject.gallery,
        ...selectedProject.mockup
      ], true);
    }
  }, [selectedProject]);

  useEffect(() => {
    document.body.style.overflow = (selectedProject || expandedMedia || lightboxIndex !== null) ? 'hidden' : 'unset';
  }, [selectedProject, expandedMedia, lightboxIndex]);

  // Silenciar videos de fondo cuando se expande uno a pantalla completa
  useEffect(() => {
    if (expandedMedia) {
      setMutedStates(prev => {
        const allMuted = { ...prev };
        Object.keys(allMuted).forEach(key => {
          allMuted[Number(key)] = true;
        });
        return allMuted;
      });
    }
  }, [expandedMedia]);

  // Navegación del lightbox
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const lightboxNext = useCallback(() => {
    if (!selectedProject || lightboxIndex === null || lightboxIndex === -1) return;
    setLightboxIndex((lightboxIndex + 1) % selectedProject.gallery.length);
  }, [lightboxIndex, selectedProject]);
  const lightboxPrev = useCallback(() => {
    if (!selectedProject || lightboxIndex === null || lightboxIndex === -1) return;
    setLightboxIndex((lightboxIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  }, [lightboxIndex, selectedProject]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, lightboxNext, lightboxPrev, closeLightbox]);

  const filteredProjects = useMemo(() => 
    allProjects.filter(p => activeTab === 'Todo' ? true : p.category === activeTab),
    [activeTab]
  );

  const closePopup = useCallback(() => {
    setSelectedProject(null);
    setShowGallery(false);
    setExpandedMedia(null);
  }, []);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
    setShowGallery(false);
    setLightboxIndex(null);
  }, []);

const toggleMute = (index: number, e: React.MouseEvent) => {
  e.stopPropagation();

  setMutedStates(prev => {
    // Si el que clickeamos ya tiene sonido (false), simplemente lo silenciamos
    if (prev[index] === false) {
      return { ...prev, [index]: true };
    }

    // Si queremos activar el sonido (pasar de true a false):
    // 1. Creamos un nuevo objeto con TODOS en true (silenciados)
    const newState = Object.keys(prev).reduce((acc, key) => {
      acc[Number(key)] = true;
      return acc;
    }, {} as {[key: number]: boolean});

    // 2. Activamos solo el que clickeamos
    return {
      ...newState,
      [index]: false
    };
  });
};

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-[#F5F5F5] min-h-screen text-black font-sans overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10"
        >
          <div>
            <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase block mb-4 italic">Portfolio Archive</span>
            <h2 className="text-[14vw] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase">
              TRABAJOS REALES, <br />
              <span className="font-accent font-normal lowercase text-[#FF0000] tracking-normal text-[1.1em] inline-block italic leading-none">RESULTADOS REALES.</span>
            </h2>
          </div>
          <nav className="flex flex-row md:flex-col flex-wrap md:flex-nowrap border-b-2 md:border-b-0 md:border-l-2 border-[#FF0000] pb-4 md:pb-0 md:pl-6 py-2 gap-x-6 gap-y-4 md:gap-y-5 w-full md:w-auto">
            {categories.map((cat, index) => (
              <button key={cat} onClick={() => setActiveTab(cat)} className="group text-left flex items-center gap-2 md:gap-3 outline-none">
                <span className={`text-[9px] font-mono ${activeTab === cat ? 'text-[#FF0000]' : 'text-black/20'}`}>0{index}</span>
                <span className={`text-[13px] md:text-[15px] font-mono uppercase tracking-[0.25em] transition-all ${activeTab === cat ? 'text-black font-bold' : 'text-black/40 group-hover:text-black'}`}>{cat}</span>
              </button>
            ))}
          </nav>
        </motion.div>

        {/* --- CARROUSEL PRINCIPAL --- */}
        <div className="flex flex-col items-center w-full">
          <div className="border-2 md:border-4 border-black rounded-3xl p-4 md:p-6 w-full overflow-hidden bg-white/50 backdrop-blur-sm shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <ProjectCarousel 
                  key={activeTab} // Reset carousel when tab changes for smooth animation restart
                  projects={filteredProjects} 
                  onProjectSelect={handleProjectSelect} 
                />
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-20 flex flex-col items-center justify-center w-full"
                >
                  <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase mb-2 italic">
                    Aviso de Archivo
                  </span>
                  <h3 className="text-black/40 text-[12px] md:text-[14px] font-mono uppercase tracking-[0.3em] text-center">
                    Aun no tenemos proyectos de este servicio
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- POPUP MODAL --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, transition: { duration: 0.18 } }} 
                exit={{ opacity: 0, transition: { duration: 0.2 } }} 
                onClick={closePopup} 
                className="absolute inset-0 bg-black/90 backdrop-blur-sm md:backdrop-blur-lg" 
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[1400px] bg-white overflow-y-auto md:overflow-hidden h-[90vh] md:h-[95vh] shadow-2xl rounded-sm z-[110] will-change-transform"
              >
                <button 
                  onClick={closePopup} 
                  className="absolute top-5 right-6 md:top-6 md:right-4 z-[150] text-white md:text-black hover:rotate-90 transition-all duration-500 outline-none"
                >
                  <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>

                <AnimatePresence mode="wait">
                 {!showGallery ? (
  <motion.div 
    key="main" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1, transition: { duration: 0.15 } }} 
    exit={{ opacity: 0, transition: { duration: 0.1 } }} 
    className="flex flex-col-reverse md:flex-row h-auto md:h-full w-full overflow-hidden"
  >
    {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
<div className={`w-full md:w-[40%] p-8 md:p-16 flex flex-col bg-white shrink-0 h-auto md:h-full border-r border-black/5 relative ${
  selectedProject.category === "Social Media" ? "justify-between" : "justify-center"
}`}>
  
  {/* CONTENEDOR DE TEXTO */}
  <div className="flex flex-col z-10">
    
    {/* LOGO Y NOMBRE: Solo para Social Media */}
    {selectedProject.category === "Social Media" && (
      <div className="flex items-center gap-2 mb-4 ">
        <div className="h-16 md:h-28 w-auto flex items-center justify-start shrink-0">
          <img
            src={selectedProject.brandLogo}
            className="h-full w-auto object-contain transition-all duration-500 hover:scale-105"
            alt="brand"
            style={{ maxWidth: '180px', display: 'block' }}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[18px] md:text-[22px] font-black uppercase tracking-tight leading-tight">
            {selectedProject.brandHandle}
          </span>
          <span 
            style={{ color: selectedProject.color }} 
            className="text-[11px] md:text-[14px] font-mono uppercase font-bold tracking-[0.2em]"
          >
            {selectedProject.brandTopic}
          </span>
        </div>
      </div>
    )}

    {/* TITULO Y DESCRIPCIÓN */}
    <h4 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter uppercase mb-8 italic leading-[0.85] text-left">
      {selectedProject.title}
    </h4>
    
    <p className="text-[14px] md:text-[12px] font-medium leading-relaxed uppercase opacity-60 max-w-md mb-6 text-left whitespace-pre-line">
      {selectedProject.description}
    </p>

    <div className="flex flex-col items-start gap-4">
      <div className="inline-block px-5 py-2 border border-black/10 text-black text-[10px] font-mono uppercase tracking-[0.3em] rounded-full italic bg-gray-50">
        {selectedProject.category}
      </div>

      {selectedProject.category === "Social Media" && (
        <button 
          onClick={() => setShowGallery(true)} 
          className="bg-[#FF0000] text-white py-4 px-10 text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-black active:scale-95 transition-all duration-300 shadow-xl group outline-none will-change-transform"
        >
          Explorar Videos <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
        </button>
      )}
    </div>
  </div>

  {/* FOOTER: Posicionado absolutamente para no romper el justify-center */}
 
</div>

    {/* COLUMNA DERECHA: VISUAL */}
    <div 
      style={{ backgroundColor: selectedProject.color }} 
      className="w-full md:w-[60%] relative flex items-center justify-center p-4 py-12 md:p-14 h-auto md:h-full shrink-0 overflow-hidden"
    >
      {/* Marca de agua ARCHIVE */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
        <span className="text-[60vw] md:text-[30vw] font-black italic text-black leading-none uppercase tracking-tighter rotate-12 scale-110 md:scale-125 transform">
          ARCHIVE
        </span>
      </div>
      
      {/* Card Blanca de Galería */}
      <div className="relative z-10 w-full max-w-[850px] bg-white p-2 md:p-3 shadow-[0_40px_80px_rgba(0,0,0,0.3)] rounded-[2rem] md:rounded-[2.5rem]">
        {/* Banner Superior */}
        <div 
          onClick={() => setLightboxIndex(-1)}
          className="w-full h-20 md:h-36 rounded-2xl md:rounded-4xl mb-2 md:mb-3 relative overflow-hidden shadow-inner cursor-zoom-in group/banner"
        >
          <img src={selectedProject.banner} className="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700" alt="banner" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-center px-6 md:px-8">
            <div className="flex flex-col">
              <span className="text-white/50 text-[7px] md:text-[9px] font-mono uppercase tracking-[0.4em]">{selectedProject.category}</span>
              <span className="text-white text-[10px] md:text-[14px] font-black uppercase italic tracking-[0.3em]">
                {selectedProject.brandName}
              </span>
            </div>
          </div>
        </div>

        {/* Grilla Dinámica de Galería */}
        <div className="grid grid-cols-12 gap-1.5 md:gap-3">
          {selectedProject.gallery.map((img, idx) => {
            // Lógica de spans según cantidad de fotos
            let colSpan = "col-span-6";
            if (selectedProject.gallery.length === 3 && idx === 2) colSpan = "col-span-12";
            if (selectedProject.gallery.length >= 4) {
              colSpan = (idx === 0 || idx === 3) ? "col-span-7" : "col-span-5";
            }
            
            return (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`${colSpan} h-[210px] md:h-[240px] md:rounded-4xl rounded-2xl overflow-hidden cursor-zoom-in group/gimg`}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover group-hover/gimg:scale-105 transition-transform duration-700" 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
        <div className="pb-2 md:pb-1" /> 
      </div>
    </div>
  </motion.div>

                  ) : (
                    <motion.div 
                      key="gallery" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1, transition: { duration: 0.15 } }} 
                      exit={{ opacity: 0, transition: { duration: 0.1 } }} 
                      className="relative w-full h-full bg-white flex flex-col overflow-hidden rounded-sm md:p-8 lg:p-14"
                    >
                      <div className="flex justify-between items-center p-8 pb-4 md:p-0 md:absolute md:top-8 md:left-8 md:right-8 lg:top-14 lg:left-14 lg:right-14 shrink-0 bg-white md:bg-transparent z-50">
                        <button 
                          onClick={() => setShowGallery(false)} 
                          className="relative z-[100] text-black hover:text-[#FF0000] transition-colors flex items-center gap-3 outline-none group cursor-pointer"
                        >
                          <div className="p-2.5 rounded-full border border-black/10 group-hover:border-[#FF0000] transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                          </div>
                          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] font-bold">Volver</span>
                        </button>

                        <div className="hidden md:flex flex-col items-end">
                          <span className="text-[10px] font-mono uppercase tracking-[0.6em] italic text-black/30 text-right">
                            {selectedProject.brandName} // ARCHIVE
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-start md:justify-center gap-0 md:gap-20 px-6 md:px-0 py-10 md:py-0 overflow-y-auto md:overflow-y-hidden overflow-x-hidden bg-white md:bg-transparent custom-scroll z-0 min-h-0">
                        <style dangerouslySetInnerHTML={{ __html: `
                          .custom-scroll::-webkit-scrollbar { width: 3px; }
                          .custom-scroll::-webkit-scrollbar-track { background: transparent; }
                          .custom-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.08); border-radius: 10px; }
                          @media (min-width: 768px) { 
                            .custom-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                            .custom-scroll::-webkit-scrollbar { display: none; } 
                          }
                        `}} />

                        {selectedProject.mockup.slice(0, 2).map((src, i) => {
                          const isVideo = src.match(/\.(mp4|webm)$/i);
                          
                          return (
                            <div 
                              key={i} 
                              className="relative w-[230px] md:w-[240px] aspect-[9/19] shrink-0 mb-14 md:mb-0 group/mockup"
                            >
                              <div 
                                onClick={() => setExpandedMedia(src)}
                                className="absolute inset-0 bg-[#080808] rounded-[2.8rem] md:rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[3px] border-[#1f1f22] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                              >
                                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[30%] h-4 bg-black rounded-full z-30" />
                                <div className="absolute inset-[2.5px] rounded-[2.5rem] md:rounded-[2.7rem] bg-black overflow-hidden z-20">
                                  {isVideo ? (
                                    <div className="relative w-full h-full">
                                      <video
                                        key={src}
                                        autoPlay
                                        loop
                                        muted={mutedStates[i] ?? true}
                                        playsInline
                                        preload="auto"
                                        className="w-full h-full object-cover"
                                      >
                                        <source src={src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>
                                      {/* Control de Sonido */}
                                      <button 
                                        onClick={(e) => toggleMute(i, e)}
                                        className="absolute bottom-6 right-4 z-40 p-2.5 bg-black/40 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/20 shadow-lg"
                                      >
                                        {mutedStates[i] ? (
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>
                                        ) : (
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
                                        )}
                                      </button>
                                    </div>
                                  ) : (
                                    <img src={src} className="w-full h-full object-cover" alt="interface" loading="eager" fetchPriority="high" decoding="async" />
                                  )}
                                </div>
                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-25" />
                                <div className="absolute inset-0 border border-white/5 rounded-[2.8rem] md:rounded-[3rem] pointer-events-none z-30" />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-auto p-8 md:p-0 md:absolute md:bottom-8 md:left-0 md:right-0 lg:bottom-14 flex justify-center shrink-0 border-t border-black/5 md:border-none bg-white md:bg-transparent z-10">
                        <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[1em] text-black/20 italic text-center">
                          Mobile Interface Showcase
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- MODAL PARA AGRANDAR (FULLSCREEN) --- */}
        <AnimatePresence>
          {expandedMedia && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[500] bg-black flex items-center justify-center p-4"
              onClick={() => setExpandedMedia(null)}
            >
              <button 
                onClick={() => setExpandedMedia(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white z-50 p-2 hover:scale-110 transition-transform outline-none"
              >
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className="w-6 h-6 md:w-8 md:h-8" // Tamaño responsivo aquí
  >
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
</button>
              
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative h-[85vh] aspect-[9/19] rounded-[3rem] overflow-hidden border-[6px] border-[#1f1f22]"
              >
                {expandedMedia.match(/\.(mp4|webm)$/i) ? (
                  <video key={expandedMedia} autoPlay controls className="w-full h-full object-cover">
                    <source src={expandedMedia} type="video/mp4" />
                  </video>
                ) : (
                  <img src={expandedMedia} className="w-full h-full object-cover" alt="Fullscreen" />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- LIGHTBOX CAROUSEL PARA GALERÍA --- */}
        <AnimatePresence>
          {lightboxIndex !== null && selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[400] bg-black/95 flex items-center justify-center p-4 md:p-10"
            >
              {/* Botón Cerrar */}
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 md:top-10 md:right-10 z-[210] text-white/50 hover:text-white transition-colors outline-none"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Navegación Izquierda */}
              {lightboxIndex !== -1 && (
                <button 
                  onClick={lightboxPrev}
                  className="absolute left-4 md:left-10 z-[210] text-white/50 hover:text-white transition-colors outline-none p-2"
                >
                  <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
              )}

              {/* Imagen Actual */}
              <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIndex}
                    src={lightboxIndex === -1 ? selectedProject.banner : selectedProject.gallery[lightboxIndex]}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="max-w-full max-h-full object-contain shadow-2xl pointer-events-auto select-none"
                    alt="Lightbox"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                  />
                </AnimatePresence>
                
                {/* Contador */}
                {lightboxIndex !== -1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 font-mono text-xs tracking-[0.3em]">
                    {lightboxIndex + 1} / {selectedProject.gallery.length}
                  </div>
                )}
              </div>

              {/* Navegación Derecha */}
              {lightboxIndex !== -1 && (
                <button 
                  onClick={lightboxNext}
                  className="absolute right-4 md:right-10 z-[210] text-white/50 hover:text-white transition-colors outline-none p-2"
                >
                  <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              )}

              {/* Overlay de cierre al hacer click fuera */}
              <div className="absolute inset-0 z-[205]" onClick={closeLightbox} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;