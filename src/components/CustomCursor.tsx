import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "pointer" | "view";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isMounted, setIsMounted] = useState(false);

  // Raw motion values for position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring following - Optimized for 144Hz+ monitors
  const springConfig = { stiffness: 650, damping: 35, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  const sizes: Record<CursorVariant, { w: number; h: number }> = {
    default: { w: 12, h: 12 },
    pointer: { w: 44, h: 44 },
    view: { w: 90, h: 90 },
  };

  return (
    <>
      {/* Cursor principal con mix-blend-mode difference */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none hidden md:flex items-center justify-center will-change-[transform,width,height]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 999999,
          mixBlendMode: "difference",
          backgroundColor: "#ffffff",
        }}
        animate={{
          width: sizes[variant].w,
          height: sizes[variant].h,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
        className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none hidden md:block will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 999998,
          mixBlendMode: "difference",
          backgroundColor: "#ffffff",
          opacity: 0.5,
        }}
      />
    </>
  );
};