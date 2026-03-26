"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="projects"
      className="border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          subtitle="A few builds that blend full-stack delivery, ML pipelines, and thoughtful UX."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {site.projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.9)] backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-slate-950/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
              >
                <Github className="size-4" aria-hidden />
                GitHub
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
