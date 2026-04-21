import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
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
    brandLogo: '/Tuli/tuli6.webp',
    category: 'Contenido Visual',
    description: 'Una propuesta basada en el uso de color y styling como recurso principal. La producción enfatiza el contraste, la textura y la expresión, generando imágenes directas y con identidad.',
    img: '/Tuli/tuli6.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Tuli/tuli5.webp', '/Tuli/tuli3.webp',  '/Tuli/tuli7.webp'],
    banner: '/Tuli/tuli8.webp',
    color: '#042759',
    mockup: ['/Tuli/tuli1.webp', '/Tuli/tuli2.webp'],
  },
  { 
    id: '02', 
    title: 'BIGBIG', 
    brandName: 'BigBig',
    brandHandle: '@bigbig.ba',
    brandLogo: '/BIG/big3.webp',
    category: 'Contenido Visual', 
    description: 'Prendas de abrigo con presencia marcan el tono de una propuesta pensada para invierno. Siluetas claras, volúmenes definidos y una paleta neutra acompañan una estética limpia, donde cada prenda toma protagonismo.', 
    img: '/BIG/big10.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/BIG/big10.webp', '/BIG/big11.webp', '/BIG/big4.webp', '/BIG/big8.webp'],
    banner: '/BIG/big3.webp',
    color: '#bcaa95' ,
    mockup: ['/BIG/big1.webp', '/BIG/big2.webp'],
  },
  { 
    id: '03', 
    title: 'Carolina', 
    brandName: 'Carolina Store Ropa',
    brandHandle: '@ccarolina.store',
    brandLogo: '/Carolina/carolina3.webp',
    category: 'Contenido Visual', 
    description: 'Una propuesta donde el lenguaje urbano se vuelve central. Texturas, color y locación se integran con naturalidad, mientras el styling marca el tono entre lo casual y lo expresivo.\n\nLa imagen se construye desde la actitud, con una impronta contemporánea y definida.', 
    img: '/Carolina/carolina2.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/Carolina/carolina5.webp', '/Carolina/carolina6.webp', '/Carolina/carolina3.webp', '/Carolina/carolina4.webp'],
    banner: '/Carolina/carolina1.webp',
    color: '#7a7a78',
    mockup: ['/Carolina/carolina1.webp', '/Carolina/carolina2.webp'],
  },
  {
    id: '04',
    title: 'Yosef Calzados',
    brandName: 'Yosef Calzados',
    brandHandle: '@yosef.calzados',
    brandLogo: '/Yosef/yosef4.webp',
    category: 'Contenido Visual',
    description: 'La producción se apoya en la ciudad como escenario. El styling define la imagen: botas protagonistas, siluetas definidas y una paleta cálida que refuerza el tono de la propuesta.\n\nEl resultado es una serie con impronta urbana, donde actitud y estilo se combinan de forma directa.',
    img: '/Yosef/yosef5.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Yosef/yosef9.webp', '/Yosef/yosef8.webp', '/Yosef/yosef3.webp', '/Yosef/yosef11.webp'],
    banner: '/Yosef/yosef10.webp',
    color: '#5c3b2e',
    mockup: ['/Yosef/yosef1.webp', '/Yosef/yosef2.webp'],
  },
  {
    id: '05',
    title: 'Freeport Eventos',
    brandName: 'Freeport Eventos',
    brandHandle: '@freeport.eventos',
    brandLogo: '/FreePort/freeport3.webp',
    category: 'Social Media',
    description: 'Freeport Eventos es un espacio donde la estética y la ambientación son protagonistas. Su comunicación se enfoca en los montajes y detalles que construyen la experiencia, mostrando el lugar en uso con una identidad visual de iluminación cuidada y encuadres amplios.\n\nEl objetivo: posicionar la marca como una opción exclusiva y versátil, destacando la versatilidad del espacio y la calidad del resultado final en cada evento.',
    img: '/FreePort/freeportport.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/FreePort/free2.webp', '/FreePort/free5.webp', '/FreePort/free7.webp', '/FreePort/free1.webp'],
    banner: '/FreePort/free8.webp',
    color: '#090844',
    mockup: ['/FreePort/freefeed.webp', '/FreePort/freefeed2.webp'],
  },
  {
    id: '06',
    title: 'The Padel Castelar',
    brandName: 'The Padel Castelar',
    brandHandle: '@thepadelcastelar',
    brandLogo: '/Padel/padel3.webp',
    category: 'Social Media',
    description: 'The Padel Castelar es un espacio enfocado en el entrenamiento y la comunidad. Su comunicación integra contenido dinámico en cancha con una identidad de colores intensos y tipografías marcadas que transmiten pura energía y acción.\n\nEl objetivo: posicionar una marca activa y accesible para todos los niveles, priorizando la mejora del juego y la conversión en cada pieza.',
    img: '/Padel/padelport.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Padel/padel2.webp', '/Padel/padel4.webp', '/Padel/padel3.webp', '/Padel/padel6.webp'],
    banner: '/Padel/padel5.webp',
    color: '#163e7b',
    mockup: ['/Padel/padelfeed.webp', '/Padel/padelfeed2.webp'],
  },
  {
    id: '07',
    title: 'Fem Salón',
    brandName: 'Fem Salón',
    brandHandle: '@fem.salon',
    brandLogo: '/Fem/fem4.webp',
    category: 'Social Media',
    description: 'EM es un salón de belleza de estética femenina, moderna y prolija. Su comunicación se centra en la experiencia y los resultados reales, combinando procesos técnicos con la naturalidad del día a día.\n\nA través de tonos neutros y luz natural, la identidad visual transmite un profesionalismo cercano. El objetivo: posicionar un espacio confiable y consistente, con foco absoluto en la calidad de cada transformación.',
    img: '/Fem/fem4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Fem/fem1.webp', '/Fem/fem6.webp', '/Fem/fem3.webp', '/Fem/fem4.webp'],
    banner: '/Fem/fembanner.webp',
    color: '#d1ab9b',
    mockup: ['/Fem/femfeed2.webp', '/Fem/femfeed.webp'],
  },
  {
    id: '09',
    title: 'Revista Plush',
    brandName: 'Roxana Zarecki',
    brandHandle: '',
    brandLogo: '/Roxana/roxana4.webp',
    category: 'Contenido Visual',
    description: 'La producción se apoya en una estética limpia y luminosa. La dirección prioriza la expresión y el movimiento, generando imágenes equilibradas donde la naturalidad y la simplicidad definen el resultado final.',
    img: '/Roxana/roxana2.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Roxana/roxana4.webp', '/Roxana/roxana9.webp'],
    banner: '/Roxana/roxana1.webp',
    color: '#8e302e',
    mockup: ['/Roxana/roxana1.webp', '/Roxana/roxana2.webp'],
  },
  {
    id: '10',
    title: 'Estancia Gaona',
    brandName: 'Estancia Gaona',
    brandHandle: '',
    brandLogo: '/Estancia/estancia4.webp',
    category: 'Social Media',
    description: 'Estancia Gaona es un restaurante donde el producto y el ambiente son protagonistas. Su comunicación combina procesos de cocina y momentos reales para transmitir una identidad auténtica, apoyada en una estética de tonos cálidos y texturas rústicas.\n\nEl objetivo: posicionar la marca como un punto de encuentro referente en Zona Oeste, destacando la tradición de la parrilla y la calidez de una experiencia cercana.',
    img: '/Estancia/estanciaport.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/Estancia/estancia4.webp', '/Estancia/estancia5.webp', '/Estancia/estancia6.webp', '/Estancia/estancia7.webp'],
    banner: '/Estancia/estancia10.webp',
    color: '#271918',
    mockup: ['/Estancia/estanciafeed.webp', '/Estancia/estanciafeed2.webp'],
  },
];

const categories = ['Todo', 'Social Media', 'Contenido Visual', 'Web'];

// --- UTILIDADES ---
const prefetchImages = (urls: string[]) => {
  if (typeof window === 'undefined') return;
  urls.forEach(url => {
    // Use <link rel=preload> for maximum browser priority
    const existing = document.querySelector(`link[href="${url}"]`);
    if (existing) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// --- SUBCOMPONENTES MEMOIZADOS ---

const ProjectCard = memo(({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) => {
  const handleMouseEnter = useCallback(() => {
    prefetchImages([...project.gallery, project.banner, ...project.mockup]);
  }, [project]);

  // Las primeras 4 imágenes tienen prioridad alta
  const fetchPriority = index < 4 ? "high" : "auto";
  const loading = index < 4 ? "eager" : "lazy";

  return (
    <motion.div 
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className="relative group overflow-hidden cursor-pointer bg-[#0A0A0A] aspect-[4/3] will-change-transform"
    >
      <motion.img 
        layoutId={`img-${project.id}`}
        src={project.img} 
        className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 will-change-transform" 
        style={{ imageRendering: 'auto' }} 
        alt={project.brandName} 
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
      <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start gap-2 pointer-events-none transition-transform duration-500 group-hover:scale-110 origin-bottom-left">
        <h3 className="text-xl font-black text-[#FF0000] uppercase italic leading-none tracking-tighter">
          {project.brandName}
        </h3>
        <div className="inline-block px-3 py-1 border border-white/40 text-white text-[8px] font-mono uppercase tracking-[0.2em] rounded-full italic bg-black/40 backdrop-blur-sm">
          {project.category}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectGrid = memo(({ projects, onProjectSelect }: { projects: Project[]; onProjectSelect: (p: Project) => void }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index}
          onClick={() => onProjectSelect(project)} 
        />
      ))}
    </div>
  );
});

ProjectGrid.displayName = 'ProjectGrid';

// Transition config reusable
const POPUP_TRANSITION = { type: 'spring', stiffness: 380, damping: 36, mass: 0.8 } as const;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('Todo');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  // Preload first 4 card images immediately on mount
  useEffect(() => {
    prefetchImages(allProjects.slice(0, 4).map(p => p.img));
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  const filteredProjects = useMemo(() => 
    allProjects.filter(p => activeTab === 'Todo' ? true : p.category === activeTab),
    [activeTab]
  );

  const visibleProjects = useMemo(() => 
    isExpanded ? filteredProjects : filteredProjects.slice(0, 4),
    [isExpanded, filteredProjects]
  );

  const closePopup = useCallback(() => {
    setSelectedProject(null);
    setShowGallery(false);
  }, []);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-[#F5F5F5] min-h-screen text-black font-sans overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase block mb-4 italic">Portfolio Archive</span>
            <h2 className="text-[14vw] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase">
              TRABAJOS REALES. <br />
              <span className="font-accent font-normal lowercase text-[#FF0000] tracking-normal text-[1.1em] inline-block italic leading-none">RESULTADOS REALES.</span>
            </h2>
          </div>
          <nav className="flex flex-col border-l-2 border-[#FF0000] pl-6 py-2 gap-y-5">
            {categories.map((cat, index) => (
              <button key={cat} onClick={() => setActiveTab(cat)} className="group text-left flex items-center gap-3 outline-none">
                <span className={`text-[9px] font-mono ${activeTab === cat ? 'text-[#FF0000]' : 'text-black/20'}`}>0{index}</span>
                <span className={`text-[13px] md:text-[15px] font-mono uppercase tracking-[0.25em] transition-all ${activeTab === cat ? 'text-black font-bold' : 'text-black/40 group-hover:text-black'}`}>{cat}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-2xl p-4 w-full h-fit">
            <AnimatePresence mode="popLayout">
              {visibleProjects.length > 0 ? (
                <ProjectGrid 
                  projects={visibleProjects} 
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
                  <h3 className="text-white/40 text-[12px] md:text-[14px] font-mono uppercase tracking-[0.3em] text-center">
                    Aun no tenemos proyectos de este servicio
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {filteredProjects.length > 4 && (
            <button onClick={() => setIsExpanded(!isExpanded)} className="mt-12 group flex flex-col items-center gap-2 outline-none">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#FF0000]/40 group-hover:text-black transition-colors">
                {isExpanded ? "[ Contraer archivo ]" : "[ Ver archivo completo ]"}
              </span>
            </button>
          )}
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
                layoutId={`card-${selectedProject.id}`}
                transition={POPUP_TRANSITION}
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
                    <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.15 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }} className="flex flex-col-reverse md:flex-row h-auto md:h-full w-full overflow-hidden">
                      <div className="w-full md:w-[40%] p-8 md:p-16 flex flex-col justify-between bg-white shrink-0 h-auto md:h-full border-r border-black/5">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-5 mb-12">
                            <img src={selectedProject.brandLogo} className="w-14 h-14 md:w-20 md:h-20 bg-black rounded-full object-cover shadow-lg" alt="logo" />
                            <div className="flex flex-col">
                              <span className="text-[16px] md:text-[20px] font-black uppercase tracking-tight leading-tight">{selectedProject.brandName}</span>
                              <span style={{ color: selectedProject.color }} className="text-[11px] md:text-[14px] font-mono uppercase font-bold tracking-[0.2em]">{selectedProject.brandHandle}</span>
                            </div>
                          </div>

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
                            <button 
                              onClick={() => setShowGallery(true)} 
                              className="bg-black text-white py-4 px-10 text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-[#FF0000] transition-all duration-500 shadow-xl group outline-none"
                            >
                              Explorar Contenido <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-between items-end pt-8 mt-20 md:mt-auto shrink-0">
                          <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em] italic text-left leading-relaxed">
                            Creative Development<br/>Portfolio 2026
                          </span>
                          <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em] italic">
                            EMME ©
                          </span>
                        </div>
                      </div>

                      <div 
                        style={{ backgroundColor: selectedProject.color }} 
                        className="w-full md:w-[60%] relative flex items-center justify-center p-4 py-12 md:p-14 h-auto md:h-full shrink-0 overflow-hidden"
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
                          <span className="text-[60vw] md:text-[30vw] font-black italic text-black leading-none uppercase tracking-tighter rotate-12 scale-110 md:scale-125 transform">
                            ARCHIVE
                          </span>
                        </div>
                        
                        <div className="relative z-10 w-full max-w-[850px] bg-white p-2 md:p-3 shadow-[0_40px_80px_rgba(0,0,0,0.3)] rounded-[2rem] md:rounded-[2.5rem]">
                          <div className="w-full h-20 md:h-36 rounded-t-[1.4rem] md:rounded-t-[1.8rem] mb-2 md:mb-3 relative overflow-hidden shadow-inner">
                            <img src={selectedProject.banner} className="w-full h-full object-cover" alt="banner" fetchPriority="high" decoding="async" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-center justify-between px-6 md:px-8">
                              <div className="flex flex-col">
                                <span className="text-white/50 text-[7px] md:text-[9px] font-mono uppercase tracking-[0.4em]">Case Study</span>
                                <span className="text-white text-[10px] md:text-[14px] font-black uppercase italic tracking-[0.3em]">
                                  {selectedProject.brandName}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-1.5 md:gap-3">
                            {selectedProject.gallery.length === 2 && (
                              <>
                                <div className="col-span-6 h-[210px] md:h-[350px] rounded-xl md:rounded-b-[1.8rem] overflow-hidden">
                                  <img src={selectedProject.gallery[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                                <div className="col-span-6 h-[210px] md:h-[350px] rounded-xl md:rounded-b-[1.8rem] overflow-hidden">
                                  <img src={selectedProject.gallery[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                              </>
                            )}

                            {selectedProject.gallery.length === 3 && (
                              <>
                                <div className="col-span-6 h-[210px] md:h-[240px] rounded-xl overflow-hidden">
                                  <img src={selectedProject.gallery[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                                <div className="col-span-6 h-[210px] md:h-[240px] rounded-xl overflow-hidden">
                                  <img src={selectedProject.gallery[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                                <div className="col-span-12 h-[210px] md:h-[280px] rounded-xl md:rounded-[1.8rem] overflow-hidden">
                                  <img src={selectedProject.gallery[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                              </>
                            )}

                            {selectedProject.gallery.length >= 4 && (
                              <>
                                <div className="col-span-7 h-[210px] md:h-[240px] rounded-xl overflow-hidden">
                                  <img src={selectedProject.gallery[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                                <div className="col-span-5 h-[210px] md:h-[240px] rounded-xl overflow-hidden">
                                  <img src={selectedProject.gallery[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                                <div className="col-span-5 h-[210px] md:h-[240px] rounded-xl md:rounded-[1.8rem] overflow-hidden">
                                  <img src={selectedProject.gallery[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                                <div className="col-span-7 h-[210px] md:h-[240px] rounded-xl md:rounded-[1.8rem] overflow-hidden">
                                  <img src={selectedProject.gallery[3]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 will-change-transform" alt="" fetchPriority="high" decoding="async" />
                                </div>
                              </>
                            )}
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

                        {selectedProject.mockup.slice(0, 2).map((src, i) => (
                          <div 
                            key={i} 
                            className="relative w-[230px] md:w-[240px] aspect-[9/19] shrink-0 mb-14 md:mb-0 cursor-pointer"
                          >
                            <div className="absolute inset-0 bg-[#080808] rounded-[2.8rem] md:rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[3px] border-[#1f1f22] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[30%] h-4 bg-black rounded-full z-30" />
                              <div className="absolute inset-[2.5px] rounded-[2.5rem] md:rounded-[2.7rem] bg-black overflow-hidden z-20">
                                <img src={src} className="w-full h-full object-cover" alt="interface" loading="eager" fetchPriority="high" decoding="async" />
                              </div>
                              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-25" />
                              <div className="absolute inset-0 border border-white/5 rounded-[2.8rem] md:rounded-[3rem] pointer-events-none z-30" />
                            </div>
                          </div>
                        ))}
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
      </div>
    </section>
  );
};

export default Projects;