"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#writing", label: "Articles" },
  { href: "#life", label: "Life" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[150] border-b border-white/[0.06] bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link
          href="#top"
          className="text-sm font-medium tracking-tight text-slate-100"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="ml-2 hidden text-slate-500 sm:inline">
            · Software Engineer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-slate-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.06] bg-slate-950/90 md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/[0.05]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
