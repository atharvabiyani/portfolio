"use client";

import type { StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import dogPhoto from "@/assets/portfolio/dog.jpg";
import pickleballPhoto from "@/assets/portfolio/pickleball.webp";
import tacosPhoto from "@/assets/portfolio/tacos.jpg";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const lifePhotos: StaticImageData[] = [dogPhoto, pickleballPhoto, tacosPhoto];

type GalleryItem = (typeof site.lifeGallery)[number];

const accentRing: Record<GalleryItem["accent"], string> = {
  indigo:
    "from-indigo-500/25 via-indigo-400/10 to-transparent group-hover:from-indigo-500/35",
  violet:
    "from-violet-500/25 via-violet-400/10 to-transparent group-hover:from-violet-500/35",
  sky: "from-sky-500/25 via-sky-400/10 to-transparent group-hover:from-sky-500/35",
};

function LifePhoto({
  item,
  photo,
  className,
  /** e.g. top bias so subject heads stay in frame under object-cover */
  imageObjectClassName = "object-center",
}: {
  item: GalleryItem;
  photo: StaticImageData;
  className?: string;
  imageObjectClassName?: string;
}) {
  const reduce = useReducedMotion();
  const [ok, setOk] = useState(true);

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.75)] lg:h-full ${className ?? ""}`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 z-0 h-36 w-36 rounded-full bg-gradient-to-br opacity-70 blur-2xl transition duration-500 ${accentRing[item.accent]}`}
        aria-hidden
      />
      <div className="relative z-[1] aspect-[4/3] min-h-[220px] w-full flex-1 overflow-hidden bg-slate-900 sm:min-h-[240px] lg:aspect-auto lg:h-full lg:min-h-[200px]">
        {ok ? (
          // eslint-disable-next-line @next/next/no-img-element -- bundled asset; see hero portrait
          <img
            src={photo.src}
            alt={item.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${imageObjectClassName}`}
            onError={() => setOk(false)}
          />
        ) : (
          <div className="relative flex min-h-[220px] items-center justify-center bg-slate-800/80 px-4 py-12 text-center text-sm text-slate-500">
            Add the matching JPEG to{" "}
            <code className="mx-1 rounded bg-white/10 px-1 font-mono text-xs">
              src/assets/portfolio/
            </code>{" "}
            (run <code className="mx-1 font-mono text-xs">npm run verify:images</code>).
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-4 pb-4 pt-16">
        <figcaption className="text-base font-semibold tracking-tight text-white">
          {item.caption}
        </figcaption>
        <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>
      </div>
    </motion.figure>
  );
}

export function Life() {
  const reduce = useReducedMotion();
  const [a, b, c] = site.lifeGallery;

  return (
    <section id="life" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Beyond code"
          title="Life"
          subtitle="The small rituals and people that keep the work grounded."
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl text-pretty text-lg leading-relaxed text-slate-400"
        >
          {site.life.body}
        </motion.p>

        <div className="grid grid-cols-6 gap-4 lg:grid-rows-2 lg:gap-5 lg:min-h-[420px]">
          <div className="col-span-6 lg:col-span-4 lg:row-span-2 lg:row-start-1 lg:col-start-1">
            <LifePhoto
              item={a}
              photo={lifePhotos[0]}
              className="min-h-[280px] lg:min-h-[420px]"
              imageObjectClassName="object-[50%_24%]"
            />
          </div>
          <div className="col-span-6 flex lg:col-span-2 lg:row-start-1 lg:col-start-5 lg:h-full lg:min-h-0">
            <LifePhoto
              item={b}
              photo={lifePhotos[1]}
              className="min-h-[220px] w-full lg:min-h-0"
            />
          </div>
          <div className="col-span-6 flex lg:col-span-2 lg:row-start-2 lg:col-start-5 lg:h-full lg:min-h-0">
            <LifePhoto
              item={c}
              photo={lifePhotos[2]}
              className="min-h-[220px] w-full lg:min-h-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
