"use client";

import { motion } from "framer-motion";
import { CopyEmailButton } from "@/components/copy-email-button";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-medium text-slate-200">{site.name}</p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} · Crafted with Next.js & Tailwind
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0.85 }}
          whileHover={{ opacity: 1 }}
          className="flex flex-wrap items-center gap-3"
        >
          <CopyEmailButton variant="compact" />
        </motion.div>
      </div>
    </footer>
  );
}
