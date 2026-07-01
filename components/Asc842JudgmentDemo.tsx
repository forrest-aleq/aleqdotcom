"use client";

import { useState } from "react";

type Je = [side: "DR" | "CR", acct: string, amt: string];

type Scenario = {
  id: string;
  tag: string;
  label: string;
  facts: { k: string; v: string }[];
  change: string;
  callTitle: string;
  cite: string;
  body: string;
  outcome: "manual" | "posted" | "stopped";
  je?: Je[];
  needs?: string[];
};

// Classification and the discount rate are inputs your team sets today —
// Aleq doesn't run the 5-criteria test or resolve implicit-vs-IBR on its
// own yet. Once those are set, the PV math, commencement entry, and
// monthly amortization run automatically and are genuinely solid. The
// short-term exemption is a real, working mechanism. Remeasurement on
// modification isn't wired up yet — a real gap, not a soft one.
const SCENARIOS: Scenario[] = [
  {
    id: "classify",
    tag: "classify the lease",
    label: "535 Mission · office space",
    facts: [
      { k: "Term", v: "60 months · no renewal option · no purchase option" },
      { k: "Fair value / PV", v: "$2.6M asset value vs. $1.84M PV of payments" },
    ],
    change: "Operating vs. finance turns on the 5 criteria in ASC 842-10-25-2 — a judgment call your team makes.",
    callTitle: "You classify it, Aleq schedules it",
    cite: "ASC 842-10-25-2",
    body: "Give Aleq the classification and the discount rate — implicit where determinable, otherwise your incremental borrowing rate — and it computes the present value, books the commencement entry, and runs the amortization schedule every period from there.",
    outcome: "manual",
    needs: [
      "Run the 5-criteria test (ownership transfer, purchase option, term vs. economic life, PV vs. fair value, specialized use)",
      "Confirm the discount rate — implicit rate or your incremental borrowing rate",
      "Aleq takes it from there: PV, ROU asset, liability, and the full amortization schedule",
    ],
  },
  {
    id: "shortterm",
    tag: "short-term lease",
    label: "9-month equipment rental",
    facts: [
      { k: "Term", v: "9 months · no purchase option" },
      { k: "Election", v: "Short-term exemption elected on this asset class" },
    ],
    change: "A lease this short, with no purchase option, doesn't need a right-of-use asset at all — if you've elected the exemption.",
    callTitle: "No ROU asset or liability recognized",
    cite: "ASC 842-20-25-2",
    body: "Once you flag a lease as short-term with no purchase option, Aleq skips balance-sheet recognition entirely and expenses the payments straight-line over the term — the exemption mechanism runs on its own from the flag.",
    outcome: "posted",
    je: [
      ["DR", "Rent expense", "$2,400"],
      ["CR", "Cash / accrued rent", "$2,400"],
    ],
  },
  {
    id: "modify",
    tag: "the deal changes",
    label: "Term extended +24 months",
    facts: [
      { k: "Existing lease", v: "535 Mission · period 13 of 60 · $1,792,400 liability" },
      { k: "Change", v: "Landlord agrees to extend the term 24 months at a reset rate" },
    ],
    change: "A modification should remeasure the liability at the current rate and adjust the ROU asset by the same delta.",
    callTitle: "Not wired up yet",
    cite: "ASC 842-10-25",
    body: "This is a real gap, not a soft one: today, editing a lease's term or rate updates the lease record but doesn't recompute the liability, adjust the ROU asset, or rebuild the schedule. Remeasurement on modification is next on our roadmap — until it ships, handle a modification as a new lease record.",
    outcome: "stopped",
  },
];

export default function Asc842JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="Lease accounting scenarios">
        {SCENARIOS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={x.id === activeId}
            className={"gx-judg-tab" + (x.id === activeId ? " on" : "") + (x.outcome === "stopped" ? " stop" : "")}
            onClick={() => setActiveId(x.id)}
          >
            <span className="gx-judg-tag">{x.tag}</span>
            <span className="gx-judg-label">{x.label}</span>
          </button>
        ))}
      </div>

      <div className="gx-main gx-judg-main" key={s.id}>
        <div className="gx-bar">
          <svg className="gx-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
          <span className="gx-bar-t">Lease accounting</span>
          {s.outcome === "manual" && <span className="gx-stat review">needs your inputs</span>}
          {s.outcome === "posted" && <span className="gx-stat posted">✓ posted</span>}
          {s.outcome === "stopped" && <span className="gx-stat stop">not built yet</span>}
        </div>

        <div className="gx-body">
          <div className="gx-src gx-judg-facts">
            {s.facts.map((f, i) => (
              <div className="gx-judg-fact" key={i}>
                <span className="gx-from">{f.k}</span>
                {f.v}
              </div>
            ))}
          </div>

          <div className="gx-judg-change">
            <b>Why it&apos;s a judgment</b> {s.change}
          </div>

          <div className="gx-call">
            <div className="gx-call-k">
              {s.callTitle}
              <span className="gx-cite">{s.cite}</span>
            </div>
            <p className="gx-call-t">{s.body}</p>
          </div>

          {s.outcome === "posted" && s.je && (
            <>
              <div className="gx-je">
                {s.je.map((l, j) => (
                  <div className="gx-je-row" key={j} style={{ ["--i" as string]: j }}>
                    <span className={"gx-side " + l[0].toLowerCase()}>{l[0]}</span>
                    <span className="gx-acct">{l[1]}</span>
                    <span className="gx-amt">{l[2]}</span>
                  </div>
                ))}
              </div>
              <div className="gx-control">
                <span className="gx-ctl-note">Reversible · signed · straight-line over the term</span>
              </div>
            </>
          )}

          {s.outcome === "manual" && s.needs && (
            <div className="gx-stop-panel manual">
              <div className="gx-stop-reason">Once these two are confirmed, everything downstream runs on its own.</div>
              <div className="gx-stop-needs-k">How this splits between you and Aleq</div>
              <ul className="gx-stop-needs">
                {s.needs.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}

          {s.outcome === "stopped" && (
            <div className="gx-stop-panel">
              <div className="gx-stop-reason">No remeasurement runs — this is on our roadmap, not something we&apos;ll approximate today.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
