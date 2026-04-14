import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importamos los iconos necesarios, incluyendo CheckCircle2 para el estilo outline
import { 
  Eye, Compass, Pen, Activity, 
  Search, Video, Layers, CheckCircle2,
  Wind, Monitor, Terminal, Zap 
} from 'lucide-react';

const services = [
  {
    id: 'cm',
    num: '01',
    title: 'COMMUNITY\nMANAGER',
    description: 'Narrativa visual y estratégica para liderar la conversación digital.',
    includes: ['Estrategia Mensual', 'Gestión IG & TikTok', 'Copywriting', 'Ads'],
    process: [
      { name: 'Auditoría', icon: <Search size={16} strokeWidth={1} /> },
      { name: 'Plan', icon: <Compass size={16} strokeWidth={1} /> },
      { name: 'Producción', icon: <Pen size={16} strokeWidth={1} /> },
      { name: 'Análisis', icon: <Activity size={16} strokeWidth={1} /> }
    ]
  },
  {
    id: 'prod',
    num: '02',
    title: 'FOTOGRAFÍA\nY PRODUCCIÓN',
    description: 'Captura de esencia de producto con estética cinematográfica.',
    includes: ['Product Photo', 'Fashion Films', 'Art Direction', 'Retoque'],
    process: [
      { name: 'Concepto', icon: <Eye size={16} strokeWidth={1} /> },
      { name: 'Shooting', icon: <Video size={16} strokeWidth={1} /> },
      { name: 'Edición', icon: <Layers size={16} strokeWidth={1} /> },
      { name: 'Entrega', icon: <CheckCircle2 size={16} strokeWidth={1} /> }
    ]
  },
  {
    id: 'web',
    num: '03',
    title: 'PÁGINAS\nWEB',
    description: 'Arquitecturas digitales de alto impacto y carga brutalista.',
    includes: ['Next.js / React', 'UX/UI Design', 'Motion Graphics', 'SEO'],
    process: [
      { name: 'Estructura', icon: <Wind size={16} strokeWidth={1} /> },
      { name: 'Diseño', icon: <Monitor size={16} strokeWidth={1} /> },
      { name: 'Código', icon: <Terminal size={16} strokeWidth={1} /> },
      { name: 'Launch', icon: <Zap size={16} strokeWidth={1} /> }
    ]
  }
];

const Services = () => {
  const [active, setActive] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActive(prev => prev === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-[#050505] text-[#F5F5F5] px-6 md:px-16 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full"></div>
              <span className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-50">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-sans font-black leading-[0.85] tracking-tighter uppercase">
              <span className="font-accent font-normal lowercase text-[#FF0000] tracking-normal text-[1.15em] inline-blockorigin-left italic">
                Nuestros
              </span>
              <br />
              Servicios
            </h2>
          </div>
          <p className="italic text-sm md:text-base opacity-40 max-w-[260px] leading-tight text-left">
            Soluciones visuales para marcas que entienden el diseño como ventaja competitiva.
          </p>
        </div>

        {/* Listado de Servicios */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="border-b border-white/10"
              onMouseEnter={() => { if (window.innerWidth > 768) setActive(service.id) }}
              onMouseLeave={() => { if (window.innerWidth > 768) setActive(null) }}
            >
              <button 
                onClick={() => handleToggle(service.id)}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] outline-none"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className={`font-mono text-[10px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${active === service.id ? 'text-[#FF0000]' : 'opacity-20'}`}>
                    {service.num}
                  </span>
                  <h3 className={`text-3xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter uppercase transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-pre-line ${active === service.id ? 'text-[#FF0000]' : 'text-white'}`}>
                    {service.title}
                  </h3>
                </div>
                
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
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 pt-6 pr-4 md:pr-20 md:pl-20 border-t border-white/5 relative z-10">
                      
                      {/* Lado A: Meta Info (Includes modificado) */}
                      <div className="md:col-span-4 flex flex-col gap-10 justify-center">
                        <p className="text-lg md:text-xl italic text-gray-400 leading-snug text-left">
                          "{service.description}"
                        </p>
                        <div className="grid grid-cols-1 gap-y-3.5">
                          {service.includes.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 border-b border-white/[0.03] pb-2.5">
                              {/* Icono CheckOutline: Círculo Rojo y Tilde Roja */}
                              <CheckCircle2 size={16} strokeWidth={1.5} className="text-[#FF0000] shrink-0" />
                              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-left">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Lado B: El Proceso Editorial (Sin Cambios) */}
                      <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
                        <span className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-30 mb-10 block italic text-left">Workflow</span>
                        <div className="flex flex-col gap-1">
                          {service.process.map((step, i) => (
                            <motion.div 
                              key={i}
                              initial={{ x: 30, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="group/step flex items-center gap-6 py-6 border-b border-white/[0.03] last:border-none relative"
                            >
                              <span className="font-accent text-6xl md:text-8xl text-white/[0.03] absolute -left-4 group-hover/step:text-[#FF0000]/10 transition-all duration-700 select-none italic leading-none z-0">
                                0{i + 1}
                              </span>

                              <div className="flex items-center justify-between w-full relative z-10 pl-6 md:pl-10">
                                <div className="flex items-center gap-6">
                                  <div className="text-[#FF0000] opacity-0 group-hover/step:opacity-100 transition-all duration-500 -translate-x-4 group-hover/step:translate-x-0">
                                    {step.icon}
                                  </div>
                                  <h4 className="text-xl md:text-3xl font-sans font-black uppercase tracking-tighter group-hover/step:text-white transition-colors duration-500 text-left">
                                    {step.name}
                                  </h4>
                                </div>
                                <span className="hidden md:block text-[9px] font-mono uppercase tracking-[0.5em] opacity-10 group-hover/step:opacity-30 transition-opacity">
                                  Step Phase
                                </span>
                              </div>
                            </motion.div>
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