import { motion } from 'framer-motion';

const Footer = () => {
  // Configuración de WhatsApp desde variables de entorno
  const whatsappNumber = (import.meta as any).env.VITE_WHATSAPP_NUMBER || "";
  
  // Mensaje predeterminado para el cliente
  const message = "¡Hola! Vi el portfolio de EMME DIGITAL y me gustaría consultar por un proyecto.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="contact" className="bg-[#050505] min-h-screen px-6 md:px-16 py-12 flex flex-col justify-between text-white relative overflow-hidden">
      
      {/* Capa de Grano Digital */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      {/* 1. SECCIÓN SUPERIOR: Header del Footer */}
      <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF0000] uppercase italic">
            // Digital Statement 2026
          </span>
          <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">
           Zona Oeste, Buenos Aires.
          </span>
        </div>
        <div className="text-right hidden md:block">
          <span className="text-[9px] font-mono opacity-40 uppercase tracking-[0.3em]">
            Code by @giulianna.dev
          </span>
        </div>
      </div>

      {/* 2. SECCIÓN CENTRAL: Contenido Principal */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center flex-grow py-8">
        
        {/* Lado Izquierdo: Visual (Foto de Autor) - TAMAÑO ORIGINAL RESTAURADO */}
        <div className="col-span-1 md:col-span-4 relative group w-full mx-auto md:mx-0">
          <div className="aspect-[3/4.5] md:aspect-[3/4] overflow-hidden bg-[#111] grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/10 relative">
            <img 
              src="/big3.webp" 
              alt="Emme Digital" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
          {/* Nombre de marca en el fondo */}
          <div className="absolute -bottom-4 -right-4 z-20 pointer-events-none">
            <span className="text-4xl md:text-5xl font-black text-[#FF0000] opacity-30 italic leading-none font-serif">
              EMME.
            </span>
          </div>
        </div>

        {/* Lado Derecho: CTA Masivo y Bio */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-center items-start md:pl-8">
          <a href="mailto:hola@emmedigital.com" className="group relative mb-6">
            <h2 className="text-[9vw] md:text-[5.5vw] leading-[0.95] font-black tracking-tighter text-white transition-all duration-700 group-hover:text-[#FF0000] uppercase italic">
              LLEVEMOS TU MARCA <br className="hidden md:block" /> AL SIGUIENTE NIVEL_
            </h2>
            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FF0000] transition-all duration-700 group-hover:w-full"></div>
          </a>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end w-full">
            <p className="text-[10px] font-mono uppercase tracking-widest leading-loose opacity-50 max-w-sm">
              EMME DIGITAL — Creamos experiencias digitales con alma y propósito. 
              Minimalismo formal, impacto máximo.
            </p>
            
            {/* Instagram Link con Icono */}
            <a 
              href="https://instagram.com/emmedigital.ba" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 group/link"
            >
              <svg className="w-5 h-5 fill-white group-hover/link:fill-[#FF0000] transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/>
              </svg>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] group-hover/link:text-[#FF0000] transition-colors">
                @emmedigital.ba
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR: Legal y WhatsApp */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6">
        
        <div className="flex gap-8 text-[9px] font-mono opacity-40 uppercase tracking-[0.2em] order-2 md:order-1">
          <span>© 2026 EMME DIGITAL</span>
          <span className="hidden md:inline">BASED IN ARGENTINA</span>
        </div>

        {/* Botón WhatsApp Dinámico */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="group relative w-full md:w-auto px-10 py-4 border border-white/20 hover:border-[#FF0000] transition-all duration-500 overflow-hidden order-1 md:order-2 text-center"
        >
          <span className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
          <div className="relative z-10 flex items-center justify-center gap-4">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100">
              Talk to me
            </span>
            <span className="text-base font-black italic font-serif">
              WHATSAPP_↗
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;