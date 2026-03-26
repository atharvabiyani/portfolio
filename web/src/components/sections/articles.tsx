"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Articles() {
  const reduce = useReducedMotion();

  return (
    <section
      id="writing"
      className="border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Articles"
          subtitle="Longer-form notes on infrastructure, cloud, and the human side of a technical career."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {site.articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={reduce ? undefined : { y: -5 }}
              className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {a.blurb}
              </p>
              <Link
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 transition group-hover:gap-2 group-hover:text-indigo-200"
              >
                Read on Medium
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
