"use client";

import { useState } from "react";

// Mobile-only "see more" for long stacked sections: the target is collapsed
// by CSS at small widths until this adds .expanded. Desktop never sees either.
export default function SeeMore({ target, label = "See more" }: { target: string; label?: string }) {
  const [open, setOpen] = useState(false);
  if (open) return null;
  return (
    <button
      className="see-more mono"
      onClick={() => {
        document.querySelector(target)?.classList.add("expanded");
        setOpen(true);
      }}
    >
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
    </button>
  );
}
