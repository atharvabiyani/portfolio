"use client";

import { ScrollProgress } from "@/components/scroll-progress";
import { ToastProvider } from "@/components/toast-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <ScrollProgress />
      {children}
    </ToastProvider>
  );
}
