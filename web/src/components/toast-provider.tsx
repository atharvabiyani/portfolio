"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type ToastCtx = { show: (message: string) => void };

const ToastContext = createContext<ToastCtx | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((msg: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setMessage(msg);
    hideTimer.current = setTimeout(() => {
      setMessage(null);
      hideTimer.current = null;
    }, 2600);
  }, []);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {message ? (
          <motion.div
            role="status"
            aria-live="polite"
            initial={
              reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }
            }
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="pointer-events-none fixed bottom-8 left-1/2 z-[250] w-[min(92vw,22rem)] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-center text-sm text-slate-100 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.9)] backdrop-blur-xl"
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}
