import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 'cm',
    num: '01',
    title: 'COMMUNITY\nMANAGER',
    description: 'Narrativa visual y estratégica para liderar la conversación digital.',
    includes: ['Estrategia Mensual', 'Gestión IG & TikTok', 'Copywriting', 'Ads'],
    process: ['Auditoría', 'Plan', 'Producción', 'Análisis']
  },
  {
    id: 'prod',
    num: '02',
    title: 'FOTOGRAFÍA\nY PRODUCCIÓN',
    description: 'Captura de esencia de producto con estética cinematográfica.',
    includes: ['Product Photo', 'Fashion Films', 'Art Direction', 'Retoque'],
    process: ['Concepto', 'Shooting', 'Edición', 'Entrega']
  },
  {
    id: 'web',
    num: '03',
    title: 'PÁGINAS\nWEB',
    description: 'Arquitecturas digitales de alto impacto y carga brutalista.',
    includes: ['Next.js / React', 'UX/UI Design', 'Motion Graphics', 'SEO'],
    process: ['Estructura', 'Diseño', 'Código', 'Launch']
  }
];

const Services = () => {
  const [active, setActive] = useState<string | null>(null);

  // Maneja el despliegue tanto por click (Mobile) como por Hover (Desktop opcional)
  const handleToggle = (id: string) => {
    setActive(prev => prev === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-[#050505] text-[#F5F5F5] px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full"></div>
              <span className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-50">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-sans font-black leading-[0.85] tracking-tighter uppercase">
              <span className="italic font-serif font-light lowercase text-[#FF0000] tracking-normal">Nuestros</span><br />Servicios
            </h2>
          </div>
          <p className="font-serif italic text-sm md:text-base opacity-40 max-w-[260px] leading-tight">
            Soluciones visuales para marcas que entienden el diseño como ventaja competitiva.
          </p>
        </div>

        {/* Listado de Servicios */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="border-b border-white/10"
              // En desktop se activa al pasar el mouse, en mobile solo click
              onMouseEnter={() => { if (window.innerWidth > 768) setActive(service.id) }}
              onMouseLeave={() => { if (window.innerWidth > 768) setActive(null) }}
            >
              <button 
                onClick={() => handleToggle(service.id)}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] outline-none"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className={`font-mono text-[10px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${active === service.id ? 'text-[#FF0000] translate-x-2' : 'opacity-20'}`}>
                    {service.num}
                  </span>
                  <h3 className={`text-3xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter uppercase transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-pre-line ${active === service.id ? 'text-[#FF0000] translate-x-4' : 'text-white'}`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Botón "+" / "x" */}
                <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full ${active === service.id ? 'bg-[#FF0000] border-[#FF0000] rotate-45' : 'border-white/10'}`}>
                  <span className="text-xl font-light text-white">+</span>
                </div>
              </button>

              <AnimatePresence>
                {active === service.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 pt-4 pr-20 pl-20 border-t border-white/5">
                      
                      {/* Descripción e Includes */}
                      <div className="md:col-span-5 flex flex-col gap-8">
                        <p className="text-lg md:text-xl font-serif italic text-gray-400 leading-snug">
                          "{service.description}"
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {service.includes.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 border-b border-white/5 pb-2">
                              <div className="w-1 h-1 bg-[#FF0000]"></div>
                              <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Workflow / Process */}
                      <div className="md:col-span-6 md:col-start-7">
                        <span className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-30 mb-6 block italic">Workflow</span>
                        {/* Grid de 2 columnas en mobile, 4 en desktop */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {service.process.map((step, i) => (
                            <div key={i} className="group/step relative aspect-square border border-white/10 p-3 flex flex-col justify-between hover:bg-[#FF0000] transition-all duration-500">
                              <span className="font-mono text-[9px] opacity-40 group-hover/step:opacity-100">0{i + 1}</span>
                              <h4 className="text-[11px] font-black uppercase leading-none tracking-tighter group-hover/step:text-white">
                                {step}
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;