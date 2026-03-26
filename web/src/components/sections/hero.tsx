"use client";

import type { MotionValue } from "framer-motion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, PenLine } from "lucide-react";
import { useRef, useState } from "react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { site } from "@/lib/site";
import headshot from "@/assets/portfolio/headshot.jpeg";

function SocialLink({
  href,
  label,
  text,
  children,
}: {
  href: string;
  label: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-md transition-colors hover:border-indigo-400/35 hover:text-white"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
        {children}
      </span>
      <span className="text-sm font-medium tracking-tight">{text}</span>
    </motion.a>
  );
}

function HeroPortrait({ y }: { y: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      style={{ y }}
      className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-[340px]"
    >
      <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_40px_120px_-40px_rgba(99,102,241,0.45)] ring-1 ring-white/[0.06]">
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-transparent to-violet-500/15"
          aria-hidden
        />
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element -- bundled asset (/_next/static); avoids flaky /public reads (e.g. iCloud placeholders)
          <img
            src={headshot.src}
            alt={`${site.name} — profile photo`}
            width={headshot.width}
            height={headshot.height}
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-[1] flex items-center justify-center bg-gradient-to-br from-indigo-600/35 via-slate-900 to-slate-950"
          >
            <span className="bg-gradient-to-br from-white via-indigo-100 to-slate-400 bg-clip-text text-6xl font-semibold tracking-tight text-transparent sm:text-7xl">
              {site.initials}
            </span>
          </motion.div>
        )}
      </div>
      <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-slate-500 lg:text-left">
        Software · Cloud · ML
      </p>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden border-b border-white/[0.06] pb-20 pt-16 sm:pb-28 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: yBlob }}
          className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]"
          aria-hidden
        />
        <motion.div
          style={{ y: yBlob }}
          className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-violet-500/15 blur-[110px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities and thoughtful conversations
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            {site.role}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <SocialLink
              href={site.links.linkedin}
              label="LinkedIn"
              text="LinkedIn"
            >
              <Linkedin className="size-[18px]" />
            </SocialLink>
            <SocialLink href={site.links.github} label="GitHub" text="GitHub">
              <Github className="size-[18px]" />
            </SocialLink>
            <SocialLink
              href={site.links.medium}
              label="Medium articles"
              text="Medium articles"
            >
              <PenLine className="size-[18px]" />
            </SocialLink>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6"
          >
            <CopyEmailButton />
          </motion.div>
        </div>

        <HeroPortrait y={yPortrait} />
      </div>
    </section>
  );
}
