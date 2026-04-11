import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsTop(latest < 50);
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${!isTop ? 'bg-[#900B0E]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
    >
      <div className="w-full px-6 py-6 flex justify-between items-center text-white text-[10px] md:text-xs font-sans tracking-[0.1em] md:tracking-[0.2em] uppercase">
        <div className="flex-1 flex justify-start">
          <a href="#brand" className="hover:opacity-70 transition-opacity">NOSOTROS</a>
        </div>
        
        {/* Center Hamburger Menu Icon */}
        <div className="flex-1 flex justify-center cursor-pointer group">
          <div className="space-y-[4px] w-6 md:w-8 group-hover:scale-110 transition-transform">
            <div className="h-[1px] w-full bg-white transition-all group-hover:w-3/4 mx-auto"></div>
            <div className="h-[1px] w-full bg-white transition-all group-hover:w-full mx-auto"></div>
            <div className="h-[1px] w-full bg-white transition-all group-hover:w-1/2 mx-auto"></div>
          </div>
        </div>

        <div className="flex-1 flex justify-end gap-6">
          <a href="#projects" className="hidden md:block hover:opacity-70 transition-opacity">PROYECTOS</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACTO</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
