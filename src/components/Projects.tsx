import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  img: string;
  aspect: string;
}

const allProjects: Project[] = [
  { id: '01', title: 'DAZED', category: 'Community', description: 'Gestión integral de redes sociales enfocada en crecimiento orgánico y branding para marcas de moda emergentes.', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000', aspect: 'aspect-[3/4]' },
  { id: '02', title: 'WONDERLAND', category: 'Producción', description: 'Campaña visual de alto impacto explorando la dualidad entre lo digital y lo táctil.', img: 'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?q=80&w=1000', aspect: 'aspect-[1/1]' },
  { id: '03', title: 'LUMIÈRE', category: 'Producción', description: 'Dirección de arte y estilismo para editorial de lujo en entornos urbanos.', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000', aspect: 'aspect-[16/9]' },
  { id: '04', title: 'VOGUE_UX', category: 'Web', description: 'Arquitectura de información y diseño de interfaz para plataforma de contenidos.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000', aspect: 'aspect-[3/4]' },
  { id: '05', title: 'SYSTEMA', category: 'Web', description: 'Desarrollo de ecosistema digital con enfoque en performance y estética brutalista.', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000', aspect: 'aspect-[1/1]' },
  { id: '06', title: 'KINETIC', category: 'Producción', description: 'Captura de movimiento y post-producción para campaña de calzado deportivo.', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000', aspect: 'aspect-[16/9]' },
];

const categories = ['Todo', 'Community', 'Producción', 'Web'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('Todo');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeTab]);

  const filteredProjects = allProjects.filter(p => activeTab === 'Todo' ? true : p.category === activeTab);
  
  // Lógica: Solo mostramos 4 (una fila) si no está expandido
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  const getGridCols = () => {
    const count = visibleProjects.length;
    return {
      base: 1,
      sm: Math.min(count, 2),
      md: Math.min(count, 3),
      lg: Math.min(count, 4)
    };
  };

  const cols = getGridCols();

  return (
    <section className="py-24 px-6 md:px-16 bg-[#F5F5F5] min-h-screen text-black overflow-x-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @media (min-width: 640px) { .dynamic-grid { grid-template-columns: repeat(${cols.sm}, minmax(0, 1fr)) !important; } }
        @media (min-width: 768px) { .dynamic-grid { grid-template-columns: repeat(${cols.md}, minmax(0, 1fr)) !important; } }
        @media (min-width: 1024px) { .dynamic-grid { grid-template-columns: repeat(${cols.lg}, minmax(0, 1fr)) !important; } }
      `}} />

      <div className="max-w-[1500px] mx-auto">
        
        {/* Header con Línea Roja Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10 text-left">
          <div className="relative">
            <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase block mb-4 italic">Portfolio Archive</span>
            <h2 className="text-[16vw] md:text-[110px] font-black leading-[0.75] tracking-tighter uppercase">
              SELECTED<br />  <span className="italic font-serif font-light lowercase text-[#FF0000] tracking-normal">WORKS</span>
            </h2>
          </div>
          
          {/* Navegación con línea roja completa */}
          <nav className="flex flex-col border-l-2 border-[#FF0000] pl-6 py-2 gap-y-5 w-full md:w-auto">
            {categories.map((cat, index) => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)} 
                className="relative group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[9px] font-mono transition-colors ${activeTab === cat ? 'text-[#FF0000]' : 'text-black/20'}`}>
                    0{index}
                  </span>
                  <span className={`text-[13px] md:text-[15px] font-mono uppercase tracking-[0.25em] transition-all duration-300 ${
                    activeTab === cat ? 'text-black font-bold' : 'text-black/40 group-hover:text-black'
                  }`}>
                    {cat}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* Grid de Proyectos */}
        <div className="flex flex-col items-center"> 
          <motion.div 
            layout 
            className="bg-black p-4 grid dynamic-grid gap-4 w-full h-fit"
            style={{ gridTemplateColumns: `repeat(${cols.base}, minmax(0, 1fr))` }}
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="relative group overflow-hidden cursor-pointer bg-[#0A0A0A] w-full"
                >
                  <div className="relative w-full h-56 md:h-64 overflow-hidden">
                    <img src={project.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="" />
                    <div className="absolute inset-0 bg-[#FF0000]/0 group-hover:bg-[#FF0000]/90 transition-all duration-500 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-center px-4">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter italic">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Botón Ver Más Re-incorporado */}
          {filteredProjects.length > 4 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-12 group flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 group-hover:text-black transition-colors">
                {isExpanded ? "[ Contraer archivo ]" : "[ Ver archivo completo ]"}
              </span>
            </button>
          )}
        </div>

        {/* Modal (Sin cambios) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/98 backdrop-blur-xl" />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} 
                className="relative w-full max-w-6xl bg-white flex flex-col md:flex-row overflow-hidden max-h-[92vh] shadow-2xl"
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-[120] text-black hover:rotate-90 transition-all duration-500 bg-white shadow-lg md:shadow-none md:bg-transparent rounded-full p-2 md:p-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>

                <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col bg-white overflow-y-auto hide-scrollbar pt-16 md:pt-12">
                  <div className="flex justify-between items-center border-b border-black/10 pb-4 mb-8">
                    <span className="text-[9px] font-mono font-bold uppercase text-[#FF0000]">Vol. 01 // {selectedProject.id}</span>
                    <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest italic pr-12 md:pr-0">© 2026</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-8 items-center md:items-start">
                    <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden grayscale shadow-xl shrink-0">
                      <img src={selectedProject.img} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col text-left">
                      <h4 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black tracking-tighter uppercase leading-[0.8] mb-6 italic break-words">
                        {selectedProject.title}
                      </h4>
                      <p className="text-[clamp(11px,1.2vw,13px)] font-medium leading-relaxed uppercase tracking-tight mb-8 opacity-80">
                        {selectedProject.description}
                      </p>
                      <div className="inline-block self-start px-4 py-2 bg-black text-white text-[9px] font-mono uppercase tracking-widest">
                        {selectedProject.category}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex w-full md:w-5/12 bg-[#FF0000] p-12 relative flex-col justify-center text-white text-left overflow-hidden">
                  <div className="absolute top-[-5%] right-[-10%] opacity-10 text-[15vw] font-black italic select-none">EMME</div>
                  <div className="relative z-10">
                    <div className="w-12 h-[1px] bg-white mb-8" />
                    <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.85] tracking-tight uppercase italic mb-6">VISUAL<br/>MANIFESTO.</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">Brutalismo y Estética Editorial.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;