import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#050505] min-h-screen px-6 md:px-16 py-12 flex flex-col justify-between text-white relative overflow-hidden">
      
      {/* Grano Digital */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      {/* 1. SECCIÓN SUPERIOR: Info Técnica */}
      <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase italic">// Digital Statement 2026</span>
          <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">Ituzaingó, AR // 34.66° S, 58.66° W</span>
        </div>
        <div className="text-right hidden md:block">
          <span className="text-[9px] font-mono opacity-40 uppercase tracking-[0.3em]">Code by @giulianna.dev</span>
        </div>
      </div>

      {/* 2. SECCIÓN CENTRAL: La "Doble Página" de Libro */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center flex-grow py-8">
        
        {/* Lado Izquierdo: Foto de Autor (Visible en Mobile y Desktop) */}
        <div className="col-span-1 md:col-span-4 relative group w-full max-w-[280px] md:max-w-none mx-auto md:mx-0">
          <div className="aspect-[3/4] md:max-h-[450px] overflow-hidden bg-[#111] grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/10 relative">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" 
              alt="Giuliana Di Rocco" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            {/* Tag vertical sobre la foto */}
            <div className="absolute top-4 left-[-30px] -rotate-90 text-[8px] font-mono tracking-[0.4em] opacity-40 uppercase whitespace-nowrap">
              AUTHOR_CREDITS_26
            </div>
          </div>
          {/* Nombre de fondo */}
          <div className="absolute -bottom-4 -right-4 z-20">
            <span className="text-4xl md:text-5xl font-black text-[#FF0000] opacity-30 italic leading-none font-serif">EMME.</span>
          </div>
        </div>

        {/* Lado Derecho: CTA Masivo y Bio */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-center items-start md:pl-8">
          <a href="mailto:hola@emmedigital.com" className="group relative mb-8">
            <h2 className="text-[12vw] md:text-[9vw] leading-[0.8] font-black tracking-tighter text-white transition-all duration-700 group-hover:text-[#FF0000] uppercase">
              START THE<br/>PROJECT_
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-[4px] bg-[#FF0000] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-full"></div>
          </a>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end w-full">
            <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest leading-loose opacity-50 max-w-sm">
              EMME DIGITAL — Crafting digital experiences that don't ask for permission. 
              Minimalism in form, maximalism in impact.
            </p>
            
            {/* Redes */}
            <div className="flex gap-6 text-xs font-black uppercase tracking-tighter">
              {['Instagram', 'Behance', 'LinkedIn'].map((item) => (
                <a key={item} href="#" className="hover:text-[#FF0000] hover:line-through transition-all underline decoration-[#FF0000] decoration-2 underline-offset-8">
                  {item[0]+item[1]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR: Botón WhatsApp y Legales */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6">
        
        <div className="flex gap-8 text-[9px] font-mono opacity-40 uppercase tracking-[0.2em] order-2 md:order-1">
          <span>© {new Date().getFullYear()} EMME_ARCHIVE</span>
          <span className="hidden md:inline">ALL RIGHTS RESERVED</span>
        </div>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/yournumber" 
          className="group relative w-full md:w-auto px-12 py-5 border-2 border-white/20 hover:border-[#FF0000] transition-all duration-500 overflow-hidden order-1 md:order-2 text-center"
        >
          <span className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
          <div className="relative z-10 flex items-center justify-center gap-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100">Talk to me</span>
            <span className="text-lg font-black italic font-serif">WHATSAPP_↗</span>
          </div>
        </a>

      </div>
    </footer>
  );
};

export default Footer;