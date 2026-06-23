"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { init } from "@/lib/animations.js";

// Runs the scroll-reveal + operating-memory + tabs + feature-demo logic.
// Re-runs after every client-side navigation so new page content is wired up.
export default function SiteInit() {
  const pathname = usePathname();
  useEffect(() => {
    const id = requestAnimationFrame(() => init());
    return () => cancelAnimationFrame(id);
  }, [pathname]);
  return null;
}
