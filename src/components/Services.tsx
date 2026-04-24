import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Pen, Activity, 
  Search, Video, Layers, CheckCircle2,
  Wind, Monitor, MessageSquare, Target, Sparkles, Rocket,
  ArrowUpRight, MessageCircle 
} from 'lucide-react';
import React from 'react';

interface ProcessStep {
  name: string;
  icon: React.ElementType;
  description: string;
}

interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  includes: string[];
  process: ProcessStep[];
}

const services: Service[] = [
  {
    id: 'cm-service',
    num: '01',
    title: 'GESTIÓN DE REDES SOCIALES',
    description: 'Convertimos tu presencia en redes en una herramienta real de crecimiento.',
    includes: ['Estrategia Mensual', 'Gestión de Instagram, Facebook y TikTok', 'Creación y edición de contenido', 'Redacción de copies', 'Análisis de métricas y estadísticas'],
    process: [
      { name: 'ANALIZAMOS', icon: Search, description: 'Analizamos tu negocio, tu público y lo que necesitás comunicar.' },
      { name: 'PLANIFICAMOS', icon: Compass, description: 'Transformamos ideas en un plan de contenido claro y bien definido.' },
      { name: 'EJECUTAMOS', icon: Pen, description: 'Creamos, editamos y publicamos el contenido que va a representar tu marca.' },
      { name: 'OPTIMIZAMOS', icon: Activity, description: 'Evaluamos resultados y ajustamos para que tus redes crezcan de verdad.' }
    ]
  },
  {
    id: 'prod-service',
    num: '02',
    title: 'FOTOGRAFÍA Y PRODUCCIÓN',
    description: 'Producción visual y estratégica para marcas que quieren diferenciarse.',
    includes: ['Cobertura de eventos y producciones', 'Sesiones de fotos para marcas y productos', 'Dirección creativa y planificación de contenido', 'Edición profesional de fotos y videos'],
    process: [
      { name: 'CONCEPTO Y ENFOQUE', icon: Target, description: 'Definimos la idea, el estilo visual y el objetivo del contenido según tu marca.' },
      { name: 'PLANIFICACIÓN', icon: Video, description: 'Organizamos cada detalle de la producción: referencias, locación, estética y dinámica.' },
      { name: 'PRODUCCIÓN', icon: Layers, description: 'Realizamos la sesión o cobertura, capturando contenido alineado a tu identidad.' },
      { name: 'EDICIÓN Y ENTREGA', icon: Sparkles, description: 'Seleccionamos, editamos y entregamos el material listo para usar en redes.' }
    ]
  },
  {
    id: 'web-service',
    num: '03',
    title: 'DISEÑO Y DESARROLLO WEB',
    description: 'Creamos tu esencia digital: un sitio que no solo se ve increíble, sino que está diseñado para vender.',
    includes: [
      'Validación paso a paso',
      'Diseño exclusivo y personalizado',
      'Optimizado para celulares (Responsive)',
      'Velocidad de carga superior',
      'Configuración de Google y puesta en marcha'
    ],
    process: [
      { name: 'ANÁLISIS', icon: MessageSquare, description: 'Entendemos tus objetivos de negocio para que la web sea tu mejor vendedor.' },
      { name: 'ESTRATEGIA', icon: Wind, description: 'Maquetamos el recorrido que harán tus clientes para asegurar que conviertan.' },
      { name: 'CREACIÓN', icon: Monitor, description: 'Construimos el sitio con validación constante para que sea 100% lo que esperás.' },
      { name: 'LANZAMIENTO', icon: Rocket, description: 'Encendemos los motores: configuración técnica y salida al mundo digital.' }
    ]
  }
];

const Services = () => {
  const [active, setActive] = useState<string | null>(null);
  const whatsappNumber = (import.meta as any).env.VITE_WHATSAPP_NUMBER; 

  const handleToggle = (id: string) => {
    setActive(prev => prev === id ? null : id);
  };

  return (
    <section id="services" className="py-16 md:py-32 bg-[#050505] text-[#F5F5F5] px-5 md:px-16 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6 border-b border-white/10 pb-8 md:pb-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#FF0000] rounded-full"></div>
              <span className="text-[8px] md:text-[9px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-50">Services</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-sans font-black leading-[0.85] tracking-tighter uppercase">
              <span className="font-accent font-normal lowercase text-[#FF0000] tracking-normal text-[1.1em] inline-block origin-left italic">
                Nuestros
              </span>
              <br />
              Servicios
            </h2>
          </div>
          <p className="italic text-xs md:text-base max-w-[220px] md:max-w-[260px] leading-tight text-left text-[#FF0000]">
            Soluciones visuales para marcas que entienden el diseño como ventaja competitiva.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-white/10"
              onMouseEnter={() => { if (window.innerWidth > 768) setActive(service.id) }}
              onMouseLeave={() => { if (window.innerWidth > 768) setActive(null) }}
            >
              <button 
                onClick={() => handleToggle(service.id)}
                className="w-full py-6 md:py-10 flex items-center justify-between text-left group outline-none"
              >
               <div className="flex items-center gap-4 md:gap-12">
  <span className={`font-mono text-[9px] md:text-[10px] transition-colors duration-700 ${active === service.id ? 'text-[#FF0000]' : 'opacity-20'}`}>
    {service.num}
  </span>
  <h3 className={`text-2xl md:text-6xl font-sans font-black leading-[0.95] md:leading-[0.9] tracking-tighter uppercase transition-colors duration-700 max-w-[200px] md:max-w-none ${active === service.id ? 'text-[#FF0000]' : 'text-white'}`}>
    {service.title}
  </h3>
</div>
                
                <div className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center border transition-all duration-700 rounded-full ${active === service.id ? 'bg-[#FF0000] border-[#FF0000] rotate-45' : 'border-white/10'}`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="absolute w-[10px] md:w-[12px] h-[1.2px] bg-white"></span>
                    <span className="absolute h-[10px] md:h-[12px] w-[1.2px] bg-white"></span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {active === service.id && (
                 <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: 'auto', 
        opacity: 1, 
        transition: { 
          height: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, 
          opacity: { duration: 0.5, delay: 0.15 } 
        } 
      }}
      exit={{ 
        height: 0, 
        opacity: 0, 
        transition: { 
          height: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }, 
          opacity: { duration: 0.3 } 
        } 
      }}
      className="overflow-hidden" // CRUCIAL para que el efecto de 'height' funcione
    >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10 md:pb-12 pt-4 md:pt-6 pr-2 md:pr-20 md:pl-20 border-t border-white/5 relative z-10">
                      
                      <div className="md:col-span-4 flex flex-col gap-8 md:gap-10">
                        <p className="text-base md:text-xl italic text-gray-400 leading-snug text-left pt-2 md:pt-4">
                          "{service.description}"
                        </p>
                        <div className="flex flex-col gap-y-3">
                          {service.includes.map((item, i) => (
                            <div key={`inc-${service.id}-${i}`} className="flex items-center gap-3 border-b border-white/[0.03] pb-2">
                              <CheckCircle2 size={14} strokeWidth={1.5} className="text-[#FF0000] shrink-0" />
                              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60 text-left">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <motion.a 
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola EMME Digital! Me gustaría consultar un presupuesto para el servicio de: ${service.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover="hover" 
                          className="mt-4 md:mt-6 group/btn relative inline-flex items-center justify-between bg-[#FF0000] text-white px-6 md:px-8 py-4 md:py-5 rounded-full overflow-hidden transition-colors duration-500 hover:bg-white hover:text-black border border-[#FF0000]"
                        >
                          <span className="font-mono text-[12px] md:text-[15px] font-bold uppercase tracking-normal z-10">
                            Quiero un presupuesto
                          </span>
                          <div className="flex items-center gap-2 z-10 ml-4 md:ml-6 shrink-0">
                            {/* FIX: Arrow icon con tamaño corregido vía className */}
                            <motion.div
                              variants={{ hover: { rotate: 45 } }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.div>
                          </div>
                        </motion.a>
                      </div>

                      <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
                        <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-30 mb-6 md:mb-10 block italic text-left">Flujo de trabajo</span>
                        <div className="flex flex-col gap-1">
                          {service.process.map((step, i) => {
                            const IconComponent = step.icon; 
                            return (
                              <motion.div 
                                key={`step-${service.id}-${i}`}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group/step flex items-start gap-4 md:gap-6 py-5 md:py-6 border-b border-white/[0.03] last:border-none relative"
                              >
                              <span className="font-accent text-5xl md:text-8xl text-[#FF0000]/15 absolute -left-2 md:-left-4 select-none italic leading-none z-0 transition-all duration-700">
  0{i + 1}
</span>

                                <div className="flex flex-col w-full relative z-10 pl-8 md:pl-10">
                                  <div className="flex items-start gap-4 md:gap-6">
                                    {/* FIX: Icono del workflow con tamaño responsivo vía className */}
                                    <div className="text-[#FF0000] opacity-100 md:opacity-0 md:group-hover/step:opacity-100 transition-all duration-500 md:-translate-x-4 md:group-hover/step:translate-x-0 mt-1 shrink-0">
                                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>

                                    <div className="flex flex-col">
                                      <h4 className="text-lg md:text-3xl font-sans font-black uppercase tracking-tighter group-hover/step:text-white transition-colors duration-500 text-left">
                                        {step.name}
                                      </h4>
                                      <p className="text-[10px] md:text-xs text-gray-400 mt-1.5 md:mt-2 max-w-[400px] md:max-w-[450px] leading-relaxed opacity-70 group-hover/step:opacity-100 transition-opacity duration-500 text-left">
                                        {step.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;