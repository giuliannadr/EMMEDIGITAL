import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range, isItalic }: { children: React.ReactNode, progress: any, range: [number, number], isItalic?: boolean }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [15, 0]);

  return (
    <motion.span 
      style={{ opacity, y }} 
      className={`mr-3 mb-2 md:mb-6 inline-block z-10 relative ${
        isItalic 
          ? 'font-accent font-normal lowercase tracking-normal text-[#FF0000] text-[1.1em] px-2' 
          : ''
      }`}
    >
      {children}
    </motion.span>
  );
};

const BrandPresentation = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'] 
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 0.3], ['#050505', '#F5F5F5']);
  const color = useTransform(scrollYProgress, [0, 0.3], ['#F5F5F5', '#050505']);

  const manifesto = [
    { text: "EMME", italic: false },
    { text: "DIGITAL", italic: true },
    { text: "ES", italic: false },
    { text: "EL", italic: false },
    { text: "PROCESO", italic: false },
    { text: "DE", italic: false },
    { text: "PENSAR", italic: false },
    { text: "CON", italic: false },
    { text: "CRITERIO,", italic: true },
    { text: "CREAR", italic: false },
    { text: "CON", italic: false },
    { text: "INTENCIÓN", italic: true },
    { text: "Y", italic: false },
    { text: "COMUNICAR", italic: false },
    { text: "CON", italic: false },
    { text: "IMPACTO.", italic: true },
  ];

  return (
    <motion.section 
      id="brand" 
      ref={container}
      className="relative py-32 md:py-64 px-6 md:px-16 flex flex-col justify-center min-h-[130vh] overflow-hidden" 
      style={{ backgroundColor, color }}
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Header Editorial */}
        <div className="flex flex-col items-center gap-6 mb-16 text-center w-full max-w-[800px]">
          <motion.div 
            style={{ width: useTransform(scrollYProgress, [0, 0.2], [0, 60]) }}
            className="h-[1px] bg-[#FF0000]"
          />
          <p className="text-[10px] font-mono tracking-[0.5em] font-bold uppercase opacity-60">
            About the Agency
          </p>
          <p className="italic text-sm md:text-base opacity-70 max-w-[350px] leading-tight">
            La estética no pide permiso; se impone. Así es como reescribimos tu historia.
          </p>
        </div>

        {/* El Manifiesto */}
        <div className="flex flex-wrap items-center justify-center text-center">
          <p className="text-5xl md:text-7xl lg:text-[90px] font-sans font-black leading-[0.85] tracking-tighter uppercase flex flex-wrap max-w-[1000px] justify-center relative">
            {/* Sombra de fondo (Ghost text) */}
            <span className="absolute inset-0 text-black/5 mix-blend-overlay blur-sm -z-10 translate-y-1">
               {manifesto.map((w) => w.text).join(" ")}
            </span>
            
            {manifesto.map((word, i) => {
              const start = (i / manifesto.length) * 0.65; 
              const end = start + (1 / manifesto.length);
              return (
                <Word 
                  key={i} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                  isItalic={word.italic}
                >
                  {word.text}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Footer Editorial Mejorado */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-black/10 pt-12 w-full text-center md:text-left">
          
          {/* Columna Servicios */}
          <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-6 opacity-40">Servicios</span>
            <ul className="flex flex-col gap-4">
              {[
                "Estrategia, planificación y contenido",
                "Fotografía y Producción Audiovisual",
                "Diseño y Desarrollo de Páginas Web"
              ].map((service, idx) => (
                <li key={idx} className="flex items-start gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] mt-1.5 shrink-0" />
                  <p className="text-[11px] font-bold leading-tight uppercase tracking-wider">
                    {service}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Ubicación */}
          <div className="flex flex-col items-center md:items-start hidden md:flex">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-6 opacity-40">Studio</span>
            <p className="text-[11px] font-bold leading-relaxed uppercase tracking-wider">
              Buenos Aires / <br /> Zona Oeste
            </p>
          </div>

          {/* Columna Vacía para aire visual en Desktop */}
          <div className="hidden lg:block"></div>

          {/* Columna Since */}
          <div className="flex flex-col items-center md:items-end col-span-1">
             <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 opacity-40">Desde</span>
             <div className="relative">
               <p className="font-serif italic text-4xl leading-none">2026</p>
               <div className="h-[2px] w-8 bg-[#FF0000] mt-2 ml-auto" />
             </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default BrandPresentation;