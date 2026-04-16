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
  gallery: string[]; // Obligatorio 4 imágenes para el mosaico
  banner: string;
  color: string;
}

const allProjects: Project[] = [
  { 
    id: '01', 
    title: 'BIGBIG', 
    brandName: 'BigBig',
    brandHandle: '@bigbig.ba',
    brandLogo: '/big3.webp',
    category: 'Contenido Visual', 
    description: 'Prendas de abrigo con presencia marcan el tono de una propuesta pensada para invierno. Siluetas claras, volúmenes definidos y una paleta neutra acompañan una estética limpia, donde cada prenda toma protagonismo.', 
    img: '/big3.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/big10.webp', '/big11.webp', '/big4.webp', '/big8.webp'],
    banner: '/big3.webp',
    color: '#bcaa95' 
  },
  { 
    id: '04', 
    title: 'Carolina', 
    brandName: 'Carolina Store Ropa',
    brandHandle: '@ccarolina.store',
    brandLogo: '/carolina3.webp',
    category: 'Contenido Visual', 
    description: 'Una propuesta donde el lenguaje urbano se vuelve central. Texturas, color y locación se integran con naturalidad, mientras el styling marca el tono entre lo casual y lo expresivo.\n\nLa imagen se construye desde la actitud, con una impronta contemporánea y definida.', 
    img: '/carolina3.webp', 
    aspect: 'aspect-[3/4]',
    gallery: ['/carolina5.webp', '/carolina6.webp', '/carolina3.webp', '/carolina4.webp'],
    banner: '/carolina1.webp',
    color: '#7a7a78'
  },
  {
    id: '06',
    title: 'Yosef Calzados',
    brandName: 'Yosef Calzados',
    brandHandle: '@yosef.calzados',
    brandLogo: '/yosef4.webp',
    category: 'Contenido Visual',
    description: 'La producción se apoya en la ciudad como escenario. El styling define la imagen: botas protagonistas, siluetas definidas y una paleta cálida que refuerza el tono de la propuesta.\n\nEl resultado es una serie con impronta urbana, donde actitud y estilo se combinan de forma directa.',
    img: '/yosef4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/yosef9.webp', '/yosef8.webp', '/yosef3.webp', '/yosef11.webp'],
    banner: '/yosef10.webp',
    color: '#5c3b2e'
  },
  {
    id: '07',
    title: 'Freeport Eventos',
    brandName: 'Freeport Eventos',
    brandHandle: '@freeport.eventos',
    brandLogo: '/freeport3.webp',
    category: 'Social Media',
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding.',
    img: '/freeport3.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/freeport1.webp', '/freeport2.webp', '/freeport3.webp', '/freeport1.webp'],
    banner: '/freeport1.webp',
    color: '#8B5CF6'
  },
  {
    id: '08',
    title: 'The Padel Castelar',
    brandName: 'The Padel Castelar',
    brandHandle: '@thepadelcastelar',
    brandLogo: '/padel3.webp',
    category: 'Social Media',
    description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico.',
    img: '/padel3.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/padel1.webp', '/padel2.webp', '/padel3.webp', '/padel1.webp'],
    banner: '/padel1.webp',
    color: '#F43F5E'
  },
  {
    id: '09',
    title: 'Fem Salón',
    brandName: 'Fem Salón',
    brandHandle: '@fem.salon',
    brandLogo: '/fem4.webp',
    category: 'Social Media',
    description: 'Gestión integral de redes sociales enfocada en branding.',
    img: '/fem4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/fem1.webp', '/fem2.webp', '/fem3.webp', '/fem4.webp'],
    banner: '/fem1.webp',
    color: '#06B6D4'
  },
  {
    id: '10',
    title: 'Roxana',
    brandName: 'Roxana',
     brandHandle: '',
    brandLogo: '/roxana4.webp',
    category: 'Contenido Visual',
    description: 'La producción se apoya en una estética limpia y luminosa. La dirección prioriza la expresión y el movimiento, generando imágenes equilibradas donde la naturalidad y la simplicidad definen el resultado final.',
    img: '/fem4.webp',
    aspect: 'aspect-[3/4]',
    gallery: ['/fem1.webp', '/fem2.webp', '/fem3.webp', '/fem4.webp'],
    banner: '/fem1.webp',
    color: '#06B6D4'
  },
];

const categories = ['Todo', 'Social Media', 'Contenido Visual', 'Web'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('Todo');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  const filteredProjects = allProjects.filter(p => activeTab === 'Todo' ? true : p.category === activeTab);
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  const closePopup = () => {
    setSelectedProject(null);
    setShowGallery(false);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-[#F5F5F5] min-h-screen text-black font-sans overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase block mb-4 italic">Portfolio Archive</span>
            <h2 className="text-[14vw] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase leading-[0.9]">
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
          <div className="bg-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-fit">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div 
                  key={project.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(project)}
                  className="relative group overflow-hidden cursor-pointer bg-[#0A0A0A] aspect-[4/3]"
                >
                  {/* Imagen con efecto hover B&N a Color */}
                  <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100" alt="" />
                  
                  {/* PUNTO 3: INFO FIJA ABAJO A LA IZQUIERDA */}
               <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start gap-2 pointer-events-none">
  {/* Cambio: text-[#FF0000] para el nombre en rojo */}
  <h3 className="text-xl font-black text-[#FF0000] uppercase italic leading-none tracking-tighter">
    {project.brandName}
  </h3>
  
  <div className="inline-block px-3 py-1 border border-white/40 text-white text-[8px] font-mono uppercase tracking-[0.2em] rounded-full italic bg-black/20 backdrop-blur-sm">
    {project.category}
  </div>
</div>
                  
                  {/* Overlay sutil para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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

{/* --- POPUP MODAL --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closePopup} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

{/* Máximo ancho ampliado - Cambio: overflow-y-auto en mobile para permitir scroll */}
<motion.div 
  initial={{ scale: 0.98, opacity: 0 }} 
  animate={{ scale: 1, opacity: 1 }} 
  exit={{ scale: 0.98, opacity: 0 }} 
  className="relative w-full max-w-[1400px] bg-white overflow-y-auto md:overflow-hidden h-[90vh] md:h-[88vh] shadow-2xl rounded-sm"
>
  
  {/* Botón Cerrar - Cambio: text-white en mobile para que se vea sobre el fondo de color, md:text-black en desktop */}
 {/* Botón Cerrar - Un poco más pequeño en mobile (w-8 h-8) */}
<button 
  onClick={closePopup} 
  /* absolute para que se mueva con el scroll y se quede dentro del margen del popup */
  /* top-10 en mobile para que no quede pegado al borde superior, top-6 en desktop */
  className="absolute top-5 right-6 md:top-6 md:right-4 z-[150] text-white md:text-black hover:rotate-90 transition-all duration-500 outline-none"
>
  <svg 
    /* Tamaño reducido en mobile (20px) y original en desktop (28px) */
    className="w-5 h-5 md:w-7 md:h-7" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
</button>

  <AnimatePresence mode="wait">
    {!showGallery ? (
      /* Cambio: flex-col-reverse para que la sección de arte (derecha) suba en mobile */
      <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col-reverse md:flex-row h-auto md:h-full w-full overflow-hidden">
        
        {/* LADO INFO - Cambio: h-auto en mobile para que el scroll funcione correctamente */}
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

            <div className="flex flex-col items-start gap-2">
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

          <div className="flex justify-between items-end border-t border-black/10 pt-8 mt-20 md:mt-auto shrink-0">
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em] italic text-left leading-relaxed">
              Creative Development<br/>Portfolio 2026
            </span>
            <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em] italic">
              EMME ©
            </span>
          </div>
        </div>

        {/* SECCIÓN DERECHA (ARTE) - Cambio: h-auto y padding extra (py-20) en mobile para centrar bien el contenido */}
       {/* SECCIÓN DERECHA (ARTE) - h-auto en mobile, h-full en desktop */}
<div 
  style={{ backgroundColor: selectedProject.color }} 
  className="w-full md:w-[60%] relative flex items-center justify-center p-4 py-12 md:p-14 h-auto md:h-full shrink-0 overflow-hidden"
>
  {/* Marca de agua */}
  <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
    <span className="text-[60vw] md:text-[30vw] font-black italic text-black leading-none uppercase tracking-tighter rotate-12 scale-110 md:scale-125 transform">
      ARCHIVE
    </span>
  </div>
  
  {/* CONTENEDOR BLANCO */}
  <div className="relative z-10 w-full max-w-[850px] bg-white p-2 md:p-3 shadow-[0_40px_80px_rgba(0,0,0,0.3)] rounded-[2rem] md:rounded-[2.5rem]">
    
    {/* BANNER DE IMAGEN - Altura original restaurada */}
    <div className="w-full h-20 md:h-36 rounded-t-[1.4rem] md:rounded-t-[1.8rem] mb-2 md:mb-3 relative overflow-hidden shadow-inner">
      <img src={selectedProject.banner} className="w-full h-full object-cover" alt="banner" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-center justify-between px-6 md:px-8">
        <div className="flex flex-col">
          <span className="text-white/50 text-[7px] md:text-[9px] font-mono uppercase tracking-[0.4em]">Case Study</span>
          <span className="text-white text-[10px] md:text-[14px] font-black uppercase italic tracking-[0.3em]">
            {selectedProject.brandName}
          </span>
        </div>
      </div>
    </div>

    {/* GRILLA DEL MOSAICO - Manteniendo la altura extra */}
    <div className="grid grid-cols-12 gap-1.5 md:gap-3">
      {/* Fila 1 */}
      <div className="col-span-7 h-[210px] md:h-[240px] rounded-xl md:rounded-b-[1.8rem] overflow-hidden">
        <img src={selectedProject.gallery[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="" />
      </div>
      <div className="col-span-5 h-[210px] md:h-[240px] rounded-xl md:rounded-b-[1.8rem]  overflow-hidden">
        <img src={selectedProject.gallery[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="" />
      </div>
      
      {/* Fila 2 */}
      <div className="col-span-5 h-[210px] md:h-[240px] rounded-xl md:rounded-[1.8rem] overflow-hidden">
        <img src={selectedProject.gallery[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="" />
      </div>
      <div className="col-span-7 h-[210px] md:h-[240px] rounded-xl md:rounded-[1.8rem] overflow-hidden">
        <img src={selectedProject.gallery[3]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="" />
      </div>
    </div>

    {/* Espacio final sin footer */}
    <div className="pb-2 md:pb-1" /> 
  </div>
</div>
      </motion.div>
                  ) : (
                    /* LA VISTA DE MOCKUPS SE BENEFICIA DEL ANCHO EXTRA */
               <motion.div 
  key="gallery" 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  exit={{ opacity: 0 }} 
  className="relative w-full h-full bg-white flex flex-col overflow-hidden rounded-sm md:p-8 lg:p-14"
>
  
  {/* --- HEADER --- */}
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

  {/* --- CONTENEDOR DE IPHONES --- */}
  {/* ELIMINADO: z-50. Se cambió por z-0 para que no interfiera con el header absolute */}
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

    {selectedProject.gallery.slice(0, 2).map((src, i) => (
      <div 
        key={i} 
        className="relative w-[230px] md:w-[240px] aspect-[9/19.5] shrink-0 mb-14 md:mb-0 cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#080808] rounded-[2.8rem] md:rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[3px] border-[#1f1f22] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[30%] h-4 bg-black rounded-full z-30" />
          <div className="absolute inset-[2.5px] rounded-[2.5rem] md:rounded-[2.7rem] bg-black overflow-hidden z-20">
            <img src={src} className="w-full h-full object-contain" alt="interface" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-25" />
          <div className="absolute inset-0 border border-white/5 rounded-[2.8rem] md:rounded-[3rem] pointer-events-none z-30" />
        </div>
      </div>
    ))}
  </div>

  {/* --- FOOTER --- */}
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