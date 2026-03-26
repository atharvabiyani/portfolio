"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[3px] origin-left bg-gradient-to-r from-indigo-400 via-sky-400 to-violet-400"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
