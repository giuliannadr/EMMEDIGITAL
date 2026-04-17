import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú abierto

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsTop(latest < 50);
  });

  const menuItems = [
    { name: 'Nosotros', href: '#brand' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' }
        }}
        animate={hidden && !isOpen ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${!isTop || isOpen ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
      >
        <div className="w-full px-6 py-6 flex justify-between items-center text-white text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
          
          
          {/* Hamburger Icon */}
          <div 
            className="flex-1 flex justify-center cursor-pointer group z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-[6px] w-6 md:w-8 relative">
              <motion.div 
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="h-[1px] w-full bg-white mx-auto origin-center"
              />
              <motion.div 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-[1px] w-full bg-white mx-auto"
              />
              <motion.div 
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="h-[1px] w-full bg-white mx-auto origin-center"
              />
            </div>
          </div>

          
        </div>
      </motion.nav>

      {/* FULL SCREEN MENU CON GLASSMORPHISM REAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40"
          >
            {/* El Panel de Vidrio */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-[90%] md:w-[600px] h-[70vh] bg-white/5 border border-white/20 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center gap-8"
              style={{
                boxShadow: "inset 0 0 15px rgba(255,255,255,0.05)",
              }}
            >
              {/* Brillo de borde superior (Glossy effect) */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter hover:text-[#FF0000] transition-colors"
                >
                  {item.name}.
                </motion.a>
              ))}

              <div className="absolute bottom-10 flex flex-col items-center opacity-30">
                <span className="text-[10px] font-mono tracking-[0.5em] uppercase italic">EMME DIGITAL</span>
                <span className="text-[8px] font-mono tracking-[0.2em] uppercase mt-2">Archive 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;