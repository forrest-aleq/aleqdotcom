"use client";

import { useEffect, useRef, useState } from "react";
import type { Scenario } from "@/lib/scenarios";
import { COLLECTIONS } from "@/lib/scenarios";
import ScenarioCard from "@/components/ScenarioCard";

// The pack directory: search (⌘K), category chips, mode toggles, curated
// collections, then the grid. All filtering client-side.

export default function ScenarioLibrary({ items }: { items: Scenario[] }) {
  const works = Array.from(new Set(items.map((s) => s.work)));
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [mode, setMode] = useState("All");
  const [coll, setColl] = useState<string | null>(null);
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        search.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const needle = q.trim().toLowerCase();
  const shown = items.filter((s) => {
    if (coll && s.collection !== coll) return false;
    if (cat !== "All" && s.work !== cat) return false;
    if (mode !== "All" && s.mode !== mode.toLowerCase()) return false;
    if (needle && !(s.title + " " + s.one + " " + s.work + " " + s.industry).toLowerCase().includes(needle)) return false;
    return true;
  });

  return (
    <>
      <div className="scn-colls">
        {COLLECTIONS.map((c) => {
          const n = items.filter((s) => s.collection === c.name).length;
          const on = coll === c.name;
          return (
            <button
              key={c.name}
              className={"scn-coll" + (on ? " on" : "")}
              onClick={() => setColl(on ? null : c.name)}
              aria-pressed={on}
            >
              <span className="scn-coll-n mono">{n} packs</span>
              <span className="scn-coll-t">{c.name}</span>
              <span className="scn-coll-p">{c.blurb}</span>
            </button>
          );
        })}
      </div>

      <div className="scn-toolbar">
        <div className="scn-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          <input
            ref={search}
            type="search"
            placeholder="Search packs"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search scenario packs"
          />
          <kbd className="mono">⌘K</kbd>
        </div>
        <div className="scn-chips mono" role="tablist" aria-label="Filter by work area">
          {["All", ...works].map((w) => (
            <button key={w} role="tab" aria-selected={cat === w} className={"scn-chip" + (cat === w ? " on" : "")} onClick={() => setCat(w)}>
              {w}
            </button>
          ))}
        </div>
        <div className="scn-modes mono" role="tablist" aria-label="Filter by autonomy mode">
          {["All", "Auto", "Assist", "Manual"].map((m) => (
            <button key={m} role="tab" aria-selected={mode === m} className={"scn-chip" + (mode === m ? " on" : "")} onClick={() => setMode(m)}>
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="scn-grid">
        {shown.map((s) => (
          <ScenarioCard s={s} key={s.slug} />
        ))}
      </div>
      {shown.length === 0 && <p className="scn-empty mono">No packs match — clear a filter.</p>}
    </>
  );
}
