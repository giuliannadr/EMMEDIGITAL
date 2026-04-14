import { useState, useEffect } from 'react';
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
  gallery?: string[];
  link?: string;
}

const allProjects: Project[] = [
  { 
    id: '01', 
    title: 'BIGBIG', 
    brandName: 'BigBig',
    brandHandle: '@bigbig.ba',
    brandLogo: '/bigbig3.webp',
    category: 'Community', 
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.', 
    img: '/bigbig3.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/bigbig1.webp', '/bigbig2.webp', '/bigbig3.webp']
  },
  { 
    id: '04', 
    title: 'Carolina', 
    brandName: 'Carolina Store Ropa',
    brandHandle: '@ccarolina.store',
    brandLogo: '/carolina3.webp',
    category: 'Community', 
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.', 
    img: '/carolina3.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/carolina2.webp', '/carolina1.webp', '/carolina3.webp']
  },
  { 
    id: '05', 
    title: 'Pappacena Carbone', 
    brandName: 'Pappacena Carbone',
    brandHandle: '@pappacenacarbone',
    brandLogo: '/pappacena3.webp',
    category: 'Community', 
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.', 
    img: '/pappacena4.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/pappacena1.webp', '/pappacena2.webp', '/pappacena3.webp']
  },
  {
    id: '06',
    title: 'Yosef Calzados',
    brandName: 'Yosef Calzados',
    brandHandle: '@yosef.calzados',
    brandLogo: '/yosef4.webp',
    category: 'Community',
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.',
    img: '/yosef4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/yosef1.webp', '/yosef2.webp', '/yosef3.webp']
  },
  {
    id: '07',
    title: 'Freeport Eventos',
    brandName: 'Freeport Eventos',
    brandHandle: '@freeport.eventos',
    brandLogo: '/freeport3.webp',
    category: 'Community',
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.',
    img: '/freeport3.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/freeport1.webp', '/freeport2.webp', '/freeport3.webp']
  },
  {
    id: '08',
    title: 'The Padel Castelar',
    brandName: 'The Padel Castelar',
    brandHandle: '@thepadelcastelar',
    brandLogo: '/padel3.webp',
    category: 'Community',
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.',
    img: '/padel3.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/padel1.webp', '/padel2.webp', '/padel3.webp']
  },
  {
    id: '09',
    title: 'Fem Salón',
    brandName: 'Fem Salón',
    brandHandle: '@fem.salon',
    brandLogo: '/fem4.webp',
    category: 'Community',
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.',
    img: '/fem4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/fem1.webp', '/fem2.webp', '/fem3.webp']
  }
];

const categories = ['Todo', 'Community', 'Producción', 'Web'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('Todo');
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullscreenImageIdx, setFullscreenImageIdx] = useState<number | null>(null);
  const [showCollage, setShowCollage] = useState(false);

  useEffect(() => {
    document.body.style.overflow = (selectedProject || fullscreenImageIdx !== null) ? 'hidden' : 'unset';
  }, [selectedProject, fullscreenImageIdx]);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeTab]);

  const filteredProjects = allProjects.filter(p => activeTab === 'Todo' ? true : p.category === activeTab);
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const imgs = selectedProject.gallery || [selectedProject.img];
    setFullscreenImageIdx((prev) => (prev !== null ? (prev + 1) % imgs.length : 0));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const imgs = selectedProject.gallery || [selectedProject.img];
    setFullscreenImageIdx((prev) => (prev !== null ? (prev - 1 + imgs.length) % imgs.length : 0));
  };

  const closePopup = () => {
    setSelectedProject(null);
    setShowCollage(false);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-[#F5F5F5] min-h-screen text-black overflow-x-hidden font-sans">
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10 text-left">
          <div className="relative">
            <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase block mb-4 italic">Portfolio Archive</span>
            <h2 className="text-[16vw] md:text-[110px] font-black leading-[0.75] tracking-tighter uppercase leading-[0.9]">
              SELECTED<br />
              <span className="font-accent font-normal lowercase text-[#FF0000] tracking-normal text-[1.1em] inline-block origin-left italic">works</span>
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

        {/* --- GRID --- */}
        <div className="flex flex-col items-center">
          <div className="bg-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-fit">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div 
                  key={project.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(project)}
                  className="relative group overflow-hidden cursor-pointer bg-[#0A0A0A] aspect-[4/3]"
                >
                  <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                    <h3 className="text-xl font-black text-white uppercase italic">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
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

        {/* --- POPUP PRINCIPAL --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closePopup} className="absolute inset-0 bg-black/98 backdrop-blur-xl" />
              
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-6xl bg-white overflow-hidden h-[95vh] md:h-[80vh] shadow-2xl rounded-sm">
                
                {/* Botón cerrar */}
                <button onClick={closePopup} className="absolute top-4 right-4 md:top-6 md:right-6 z-[150] text-black hover:rotate-90 transition-all duration-500 outline-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>

                <AnimatePresence mode="wait">
                  {!showCollage ? (
                    <motion.div 
                      key="split-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-hidden"
                    >
                      {/* LADO TEXTO */}
                      <div className="w-full md:w-[45%] p-6 md:p-14 flex flex-col justify-between bg-white min-h-max md:h-full">
                        <div>
                          <div className="flex items-center gap-4 mb-6 md:mb-10 text-left">
                            <img src={selectedProject.brandLogo} className="w-12 h-12 md:w-20 md:h-20 bg-black rounded-full object-cover border-2 border-black/5" alt="logo" />
                            <div className="flex flex-col">
                              <span className="text-[14px] md:text-[20px] font-black uppercase tracking-tight leading-tight">{selectedProject.brandName}</span>
                              <span className="text-[10px] md:text-[13px] font-mono text-[#FF0000] uppercase font-bold tracking-widest">{selectedProject.brandHandle}</span>
                            </div>
                          </div>
                          <h4 className="text-[clamp(1.8rem,5vw,4.5rem)] font-black tracking-tighter uppercase mb-6 italic text-left leading-[0.9]">{selectedProject.title}</h4>
                          <p className="text-[13px] md:text-[14px] font-medium leading-relaxed uppercase tracking-tight opacity-70 max-w-sm mb-8 text-left">{selectedProject.description}</p>
                          <div className="flex flex-col items-start gap-4 mb-8">
                            <div className="inline-block px-4 py-1.5 border border-black/20 text-black text-[9px] font-mono uppercase tracking-[0.3em] rounded-full italic">
                              {selectedProject.category}
                            </div>
                            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                              <button onClick={() => setShowCollage(true)} className="bg-black text-white py-3.5 px-8 text-[9px] font-mono uppercase tracking-[0.3em] hover:bg-[#FF0000] transition-colors shadow-lg group outline-none">
                                Ver todo el contenido <span className="inline-block transition-transform group-hover:translate-x-1.5">→</span>
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between items-end border-t border-black/10 pt-6 mt-6 shrink-0 pb-4 md:pb-0">
                          <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest italic text-left">© 2026<br/>EMME DIGITAL</span>
                          <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest italic">VOL. 01</span>
                        </div>
                      </div>

                      {/* LADO MOCKUPS VISTA PREVIA */}
                {/* LADO MOCKUPS VISTA PREVIA */}
<div className="w-full md:w-[55%] bg-[#FF0000] relative flex items-center justify-center p-10 md:p-12 overflow-hidden h-[350px] md:h-full shrink-0">
  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none">
    <span className="text-[25vw] font-black italic text-[#E60000] leading-none uppercase tracking-tighter rotate-12 scale-150 transform">WORKS</span>
  </div>
  
  <div className="relative z-10 w-full h-full flex items-center justify-center">
    {selectedProject.gallery && (
      /* Bajamos max-h de 300px a 240px en mobile para ganar padding lateral */
      <div className="flex gap-3 md:gap-8 items-center justify-center h-full max-h-[240px] md:max-h-[500px]">
        {selectedProject.gallery.slice(0, 2).map((src, i) => (
          <div 
            key={i} 
            onClick={() => setFullscreenImageIdx(i)} 
            className={`relative h-full aspect-[9/19] cursor-zoom-in group transition-transform hover:scale-[1.02] ${
              i === 0 ? '-translate-y-3 md:-translate-y-6' : 'translate-y-3 md:translate-y-6'
            }`}
          >
            {/* MOCKUP ESTRUCTURA */}
            <div className="absolute inset-0 bg-[#151515] rounded-[1.5rem] md:rounded-[2.8rem] shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-[3px] md:border-[5.5px] border-[#252525] ring-1 ring-black/40 overflow-hidden">
              {/* Notch para que se vea igual que el grande */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/4 h-2.5 bg-black rounded-full z-30 md:hidden" />
              
              <div className="absolute inset-[1.5px] md:inset-[3.5px] rounded-[1.3rem] md:rounded-[2.4rem] bg-[#121212] overflow-hidden z-20">
                <img src={src} className="w-full h-full object-contain" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>
                    </motion.div>
                  ) : (
                    /* GALERIA COLLAGE - AJUSTE ANCHO MOBILE */
                <motion.div 
  key="collage-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
  /* overflow-y-auto para permitir el scroll en mobile */
  className="w-full h-full bg-white flex flex-col relative overflow-y-auto md:overflow-hidden"
>
  {/* Header de Galería - Sticky para que no se pierda al bajar */}
  <div className="sticky top-0 bg-white/90 backdrop-blur-md z-50 p-5 md:p-6 border-b border-black/5 md:border-none">
    <button onClick={() => setShowCollage(false)} className="text-black hover:text-[#FF0000] transition-colors flex items-center gap-2 group outline-none">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Volver</span>
    </button>
  </div>

  {/* Contenedor de Mockups */}
  <div className="flex-1 flex flex-col md:flex-row items-center justify-start md:justify-center gap-14 md:gap-10 p-8 md:p-8 min-h-max md:min-h-0">
    {selectedProject.gallery?.slice(0, 3).map((src, i) => (
      <motion.div 
        key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
        onClick={() => setFullscreenImageIdx(i)}
        className="relative w-[70vw] h-[145vw] md:w-auto md:h-[480px] aspect-[9/19] cursor-zoom-in group transition-transform hover:scale-[1.03] flex-shrink-0"
      >
        {/* MOCKUP ESTRUCTURA #0b0e15 */}
        <div className="absolute inset-0 bg-[#0b0e15] rounded-[2.2rem] md:rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-[4.5px] md:border-[5px] border-[#1a1f2b] ring-1 ring-black/5 overflow-hidden">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/4 h-3 md:h-4 bg-black/40 rounded-full z-30" />
          <div className="absolute inset-[2px] md:inset-[3.5px] rounded-[1.9rem] md:rounded-[2.2rem] bg-[#0b0e15] overflow-hidden z-20">
            <img src={src} className="w-full h-full object-contain" alt="" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-25" />
        </div>
      </motion.div>
    ))}

    {/* Espaciador final para que el último mockup no pise la frase en mobile */}
    <div className="h-10 w-full md:hidden shrink-0" />
  </div>

  {/* FOOTER - Aseguramos visibilidad total */}
  <div className="relative py-12 md:py-10 flex justify-center shrink-0 bg-white border-t border-black/5 md:border-none">
     <span className="text-[10px] md:text-[9px] font-mono uppercase tracking-[0.8em] italic text-black/30 text-center px-6">
      {selectedProject.brandName} // ARCHIVE GALLERY
     </span>
     {/* Padding extra solo para mobile para evitar la barra del navegador */}
     <div className="h-4 md:hidden" />
  </div>
</motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

          {/* LIGHTBOX */}
          {fullscreenImageIdx !== null && selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 p-4 md:p-12">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 cursor-zoom-out" onClick={() => setFullscreenImageIdx(null)} />
              <button onClick={() => setFullscreenImageIdx(null)} className="absolute top-8 right-8 text-white z-[210] outline-none hover:rotate-90 transition-transform"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
              <button onClick={prevImage} className="absolute left-4 md:left-10 text-white z-[210] p-4 outline-none"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
              <button onClick={nextImage} className="absolute right-4 md:right-10 text-white z-[210] p-4 outline-none"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
              <motion.img key={fullscreenImageIdx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={(selectedProject.gallery || [selectedProject.img])[fullscreenImageIdx]} className="relative z-[205] max-w-full max-h-full object-contain shadow-2xl" />
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;