"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Education() {
  const reduce = useReducedMotion();

  return (
    <section
      id="education"
      className="border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          subtitle="I'm pursuing my master's in AI while working full-time at Oracle—balancing cloud-native environments with agentic AI to build intelligent, reliable systems."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {site.education.map((edu, i) => (
            <motion.article
              key={edu.school}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-400/15" />
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/60 text-indigo-300">
                <GraduationCap className="size-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">
                {edu.school}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {edu.degree}
              </p>
              <p className="mt-3 text-sm font-medium text-indigo-200/80">
                {edu.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
