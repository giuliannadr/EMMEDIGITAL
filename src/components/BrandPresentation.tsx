import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range, isItalic }: { children: React.ReactNode, progress: any, range: [number, number], isItalic?: boolean }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [15, 0]);

  return (
    <motion.span 
      style={{ opacity, y }} 
      className={`mr-3 mb-2 md:mb-6 inline-block z-10 relative ${isItalic ? 'font-serif italic font-light lowercase tracking-normal text-[#FF0000]' : ''}`}
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

  // TEXTO REDUCIDO: Menos palabras, más impacto.
  const manifesto = [
    { text: "EMME", italic: false }, { text: "DIGITAL", italic: false },
    { text: "ES", italic: false }, { text: "DISEÑO", italic: true },
    { text: "DE", italic: false }, { text: "AUTOR.", italic: true },
    { text: "CREAMOS", italic: false }, { text: "EL", italic: false },
    { text: "NUEVO", italic: false }, { text: "ESTÁNDAR", italic: true },
    { text: "PARA", italic: false }, { text: "QUIENES", italic: false },
    { text: "NO", italic: false }, { text: "PIDEN", italic: false },
    { text: "PERMISO.", italic: true },
  ];

  const images = [
    { src: '/images/brand-presentation-1.jpeg', alt: 'Editorial 1', delay: 0.1, x: '-12%', y: '-10%' },
    { src: '/images/brand-presentation-2.jpeg', alt: 'Editorial 2', delay: 0.3, x: '18%', y: '5%' },
    { src: '/images/brand-presentation-3.jpeg', alt: 'Editorial 3', delay: 0.5, x: '-8%', y: '20%' },
  ];

  return (
    <motion.section 
      id="brand" 
      ref={container}
      className="relative py-32 md:py-64 px-6 md:px-16 flex flex-col justify-center min-h-[140vh] overflow-hidden" 
      style={{ backgroundColor, color }}
    >
      {/* 1. COLLAGE DE IMÁGENES DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {images.map((img, i) => (
          <motion.img 
            key={i}
            src={img.src}
            alt={img.alt}
            className="absolute object-cover w-[280px] h-[380px] md:w-[420px] md:h-[550px] opacity-0 mix-blend-multiply"
            style={{
              x: img.x,
              y: img.y,
              opacity: useTransform(scrollYProgress, [img.delay, img.delay + 0.2, img.delay + 0.4], [0, 0.5, 0]), 
              filter: useTransform(scrollYProgress, [img.delay, img.delay + 0.2], ['grayscale(1) contrast(1.2)', 'grayscale(0) contrast(1.1)'])
            }}
          />
        ))}
      </div>

      {/* 2. TEXTO DEL MANIFIESTO */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Header Editorial - SE MANTIENE LA FRASE QUE TE GUSTÓ */}
        <div className="flex flex-col items-center gap-6 mb-16 text-center w-full max-w-[800px]">
          <motion.div 
            style={{ width: useTransform(scrollYProgress, [0, 0.2], [0, 60]) }}
            className="h-[1px] bg-[#FF0000]"
          />
          <p className="text-[10px] font-mono tracking-[0.5em] font-bold uppercase opacity-60">
            About the Agency
          </p>
          <p className="font-serif italic text-sm md:text-base opacity-70 max-w-[350px] leading-tight">
            La estética no pide permiso; se impone. Así es como reescribimos tu historia.
          </p>
        </div>

        {/* El Manifiesto con resaltado RÁPIDO */}
        <div className="flex flex-wrap items-center justify-center text-center">
          <p className="text-5xl md:text-7xl lg:text-[90px] font-sans font-black leading-[0.85] tracking-tighter uppercase flex flex-wrap max-w-[1000px] justify-center relative">
            <span className="absolute inset-0 text-black/5 mix-blend-overlay blur-sm -z-10 translate-y-1">
               {manifesto.map((w) => w.text).join(" ")}
            </span>
            {manifesto.map((word, i) => {
              const start = (i / manifesto.length) * 0.65; // Aún más rápido para que no haya que scrollear tanto
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

        {/* Footer Editorial */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-black/10 pt-12 w-full text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 opacity-40">Services</span>
            <p className="text-xs font-bold leading-relaxed uppercase tracking-wider">
              Branding / Web Dev / Art Direction
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start hidden md:flex">
            <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 opacity-40">Location</span>
            <p className="text-xs font-bold leading-relaxed uppercase tracking-wider">
              Buenos Aires / Ituzaingó
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start col-span-1 lg:col-span-2 md:items-end">
             <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 opacity-40">Since</span>
             <p className="font-serif italic text-3xl">2026</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BrandPresentation;