"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow ? (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300/90"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-pretty text-base leading-relaxed text-slate-400"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
