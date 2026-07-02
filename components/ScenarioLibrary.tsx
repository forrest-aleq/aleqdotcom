"use client";

import Link from "next/link";
import { useState } from "react";
import type { Scenario } from "@/lib/scenarios";

// Filterable card grid for the scenario library. Work-area chips filter
// client-side; every card shows its autonomy badge and difficulty.

export default function ScenarioLibrary({ items }: { items: Scenario[] }) {
  const works = Array.from(new Set(items.map((s) => s.work)));
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? items : items.filter((s) => s.work === active);

  return (
    <>
      <div className="scn-filters mono" role="tablist" aria-label="Filter scenarios by work area">
        {["All", ...works].map((w) => (
          <button
            key={w}
            role="tab"
            aria-selected={active === w}
            className={"scn-chip" + (active === w ? " on" : "")}
            onClick={() => setActive(w)}
          >
            {w}
          </button>
        ))}
      </div>
      <div className="scn-grid">
        {shown.map((s) => (
          <Link className="scn-card" href={`/scenarios/${s.slug}`} key={s.slug}>
            <div className="scn-card-tags mono">
              <span>{s.work}</span>
              <span className="scn-dot">·</span>
              <span>{s.industry}</span>
            </div>
            <div className="scn-card-t">{s.title}</div>
            <p className="scn-card-p">{s.one}</p>
            <div className="scn-card-foot mono">
              <span className={"scn-badge " + s.mode}>{s.mode === "auto" ? "Auto" : s.mode === "assist" ? "Assist" : "Manual"}</span>
              <span className="scn-diff">eval difficulty: {s.difficulty}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
