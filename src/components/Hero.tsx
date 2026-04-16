import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col md:flex-row bg-[#050505] overflow-hidden">
      
      {/* 1. BACKGROUND EDITORIAL */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/EMME-HERO.jpeg" 
          alt="Emme Digital Editorial"
          className="w-full h-full object-cover opacity-90 mix-blend-screen"
          style={{ filter: 'contrast(1.1) brightness(0.9)' }}
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
      </div>

      {/* 2. SUPERIOR: "EM" + "digital" (LADO IZQUIERDO) */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-1/2 md:w-1/2 md:h-full flex items-center justify-center"
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <filter id="chalkTexturizer" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* DESKTOP */}
          <svg x="5%" y="36%" width="90%" height="40%" viewBox="0 0 198 100" preserveAspectRatio="xMidYMid meet" className="hidden md:block overflow-visible">
            {/* Letras EM Rojas */}
            <path d="M 0,0 H 70 V 16 H 16 V 42 H 60 V 58 H 16 V 84 H 70 V 100 H 0 Z" fill="#FF0000" />
            <g>
              <path d="M 82,100 V 0 H 98 L 138,45 L 178,0 H 194 V 5 L 176,25 V 25 L 138,65 L 98,25 V 100 H 82 Z" fill="#FF0000" />
              <path d="M 182,45 L 198,27.3 V 100 H 182 V 45 Z" fill="#FF0000" />
            </g>

            {/* Texto "digital" - AHORA MÁS CHIQUITO */}
            <motion.text 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              x="2" 
              y="2" 
              fill="#F5F5F5"
              className="font-accent"
              style={{ 
                fontSize: "24px", 
                letterSpacing: "0"
              }}
            >
              digital
            </motion.text>
          </svg>

          {/* MOBILE */}
          <svg x="5%" y="41%" width="90%" height="50%" viewBox="0 0 194 100" preserveAspectRatio="xMidYMid meet" className="block md:hidden overflow-visible">
            <path d="M 0,0 H 70 V 16 H 16 V 42 H 60 V 58 H 16 V 84 H 70 V 100 H 0 Z" fill="#FF0000" />
            <g>
              <path d="M 82,100 V 0 H 98 L 138,45 L 178,0 H 194 V 5 L 176,25 V 25 L 138,65 L 98,25 V 100 H 82 Z" fill="#FF0000" />
              <path d="M 176,47 L 194,25 V 100 H 178 V 47 Z" fill="#FF0000" />
            </g>
            <motion.text 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              x="2" 
              y="5" 
              fill="#F5F5F5" 
              filter="url(#chalkTexturizer)"
              className="font-accent"
              style={{ 
                fontSize: "28px",
                letterSpacing: "0"
              }}
            >
              digital
            </motion.text>
          </svg>
        </svg>
      </motion.div>

      {/* 3. INFERIOR: "ME" CALADO (LADO DERECHO) */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-1/2 md:w-1/2 md:h-full flex items-center justify-center"
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
          <defs>
            <mask id="me-mask-desktop">
              <rect width="100%" height="100%" fill="white" />
              <svg x="5%" y="36%" width="90%" height="40%" viewBox="0 0 194 100" preserveAspectRatio="xMidYMid meet">
                <path d="M 0,100 V 0 H 16 L 56,46 L 96,0 H 112 V 100 H 96 V 24 L 56,70 L 16,24 V 100 Z" fill="black" />
                <path d="M 124,0 H 194 V 100 H 124 V 84 H 178 V 58 H 134 V 42 H 178 V 16 H 124 Z" fill="black" />
              </svg>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#FF0000" mask="url(#me-mask-desktop)" />
        </svg>

        <svg className="absolute inset-0 w-full h-full pointer-events-none block md:hidden">
          <defs>
            <mask id="me-mask-mobile">
              <rect width="100%" height="100%" fill="white" />
              <svg x="5%" y="5%" width="90%" height="55%" viewBox="0 0 194 100" preserveAspectRatio="xMidYMid meet">
                <path d="M 0,100 V 0 H 16 L 56,46 L 96,0 H 112 V 100 H 96 V 24 L 56,70 L 16,24 V 100 Z" fill="black" />
                <path d="M 124,0 H 194 V 100 H 124 V 84 H 178 V 58 H 134 V 42 H 178 V 16 H 124 Z" fill="black" />
              </svg>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#FF0000" mask="url(#me-mask-mobile)" />
        </svg>

        <div className="absolute right-12 lg:right-20 bottom-24 md:bottom-32 text-white font-sans text-xs xl:text-sm font-bold tracking-[0.2em] uppercase leading-relaxed max-w-[180px] text-right hidden md:block">
        SOMOS EL IMPULSO <br /> QUE TU MARCA NECESITA
        </div>
      </motion.div>

      {/* 4. BLOQUE GLOSSMORPHISM CENTRADO */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-16 z-50">
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#FF0000]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 min-w-[280px] md:min-w-[400px] flex flex-col items-center text-center">
             <div className="flex justify-between items-start mb-8 w-full">
               <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">Boutique Ref. 04</span>
               <div className="w-2.5 h-2.5 bg-[#FF0000] animate-pulse rounded-full"></div>
             </div>
            <p className="text-white font-sans text-xl md:text-3xl font-medium leading-tight tracking-tight mb-10 max-w-sm">
              “DEFINIMOS EL 
              <span className="relative inline-block mx-2 px-3 py-1">
                <span className="absolute inset-0 bg-white -rotate-1 scale-110"></span>
                <span className="relative italic font-serif text-[#FF0000]">NUEVO</span>
              </span> 
              ESTÁNDAR VISUAL.”
            </p>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-10 py-5 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] transition-all duration-300 bg-white text-[#050505] md:bg-transparent md:text-white md:border md:border-white/40"
            >
              Start Project 
              <svg width="22" height="10" viewBox="0 0 40 10" fill="none" stroke="currentColor" className="group-hover:translate-x-1 transition-transform">
                <path d="M0 5H38M38 5L33 1M38 5L33 9" strokeWidth="2"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* 5. OVERLAY DE COORDENADAS */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 hidden lg:block text-white/20 font-mono text-[9px] uppercase tracking-[0.6em] [writing-mode:vertical-rl] rotate-180">
        Ituzaingó, AR // 34.6655° S, 58.6658° W
      </div>
    </section>
  );
};

export default Hero;