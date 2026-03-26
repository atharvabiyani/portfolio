"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const groups = [
  { key: "languages" as const, label: "Languages" },
  { key: "aiMl" as const, label: "AI / ML" },
  { key: "cloudDevOps" as const, label: "Cloud / DevOps" },
  { key: "toolsAndWorkflow" as const, label: "Tools" },
];

export function Tools() {
  const reduce = useReducedMotion();

  return (
    <section id="tools" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Tools & technologies"
          subtitle="Languages, AI/ML, cloud platforms, and day-to-day tooling I use to ship production systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((g, gi) => (
            <motion.div
              key={g.key}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-md"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {g.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {site.tools[g.key].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
