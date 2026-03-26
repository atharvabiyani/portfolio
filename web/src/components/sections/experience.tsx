"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Work"
          title="Experience"
          subtitle="Building identity, infrastructure, and product surfaces across cloud and enterprise teams."
        />

        <div className="relative">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent sm:left-[13px]"
            aria-hidden
          />
          <ul className="space-y-10">
            {site.experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.range}`}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative grid gap-2 pl-10 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8 sm:pl-14"
              >
                <span className="absolute left-0 top-1.5 flex size-7 items-center justify-center rounded-full border border-indigo-400/30 bg-slate-950/80 text-indigo-300 shadow-[0_0_24px_-4px_rgba(99,102,241,0.5)] sm:top-2 sm:size-8">
                  <Briefcase className="size-3.5 sm:size-4" aria-hidden />
                </span>
                <p className="text-sm font-medium text-indigo-200/90 sm:pt-1">
                  {job.range}
                </p>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-md transition hover:border-indigo-400/20 hover:bg-white/[0.035]">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {job.company}
                    </h3>
                    <span className="text-slate-500">·</span>
                    <p className="text-base text-slate-300">{job.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{job.team}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
