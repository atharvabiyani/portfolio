"use client";

import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/toast-provider";
import { site } from "@/lib/site";

type Props = {
  variant?: "hero" | "compact";
  className?: string;
};

export function CopyEmailButton({ variant = "hero", className = "" }: Props) {
  const { show } = useToast();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.contactEmail);
      setCopied(true);
      show("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      show("Could not copy — try again");
    }
  }

  const base =
    variant === "hero"
      ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 backdrop-blur-md transition hover:border-indigo-400/30 hover:bg-white/[0.07]"
      : "inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 hover:border-white/20";

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${className}`}
      aria-label={`Copy email address ${site.contactEmail}`}
    >
      <Mail className="size-4 shrink-0 text-indigo-300/90" aria-hidden />
      <span className="truncate font-mono text-[13px] text-slate-300/95">
        {site.contactEmail}
      </span>
      {copied ? (
        <Check className="size-4 shrink-0 text-emerald-400" aria-hidden />
      ) : (
        <Copy className="size-4 shrink-0 text-slate-500" aria-hidden />
      )}
    </motion.button>
  );
}
