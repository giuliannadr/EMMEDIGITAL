import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorVariant = "default" | "pointer" | "view";

export const CustomCursor = () => {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const mousePosRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  // Smooth spring following - Optimized for 144Hz+ monitors
  const springConfig = { stiffness: 800, damping: 45, mass: 0.3 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const updatePosition = () => {
      mouseX.set(mousePosRef.current.x);
      mouseY.set(mousePosRef.current.y);
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("[data-cursor='pointer']")) {
        setVariant("pointer");
      } else if (target.closest("[data-cursor='view']")) {
        setVariant("view");
      } else {
        setVariant("default");
      }
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted || isTouchDevice) return null;

  const sizes: Record<CursorVariant, { w: number; h: number }> = {
    default: { w: 12, h: 12 },
    pointer: { w: 44, h: 44 },
    view: { w: 90, h: 90 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Cursor principal con mix-blend-mode difference */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 rounded-full pointer-events-none hidden md:flex items-center justify-center z-[999999] mix-blend-difference bg-white will-change-[transform,width,height]"
            style={{
              x,
              y,
              translateX: "-50%",
              translateY: "-50%",
              width: sizes[variant].w,
              height: sizes[variant].h,
            }}
            transition={{ 
              width: { type: "spring", stiffness: 400, damping: 30 },
              height: { type: "spring", stiffness: 400, damping: 30 }
            }}
          >
            {variant === "view" && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[11px] text-black font-black font-mono tracking-tighter select-none"
              >
                VER
              </motion.span>
            )}
          </motion.div>

          {/* Punto secundario que sigue con más delay (efecto trailing) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none hidden md:block z-[999998] mix-blend-difference bg-white will-change-transform"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};