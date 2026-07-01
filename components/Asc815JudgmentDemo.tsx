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
  outcome: "draft" | "manual" | "stopped";
  je?: Je[];
  needs?: string[];
};

// Designation is a real, documented-at-inception record. The effectiveness
// result itself is an input your team confirms each period — Aleq takes
// that result and handles the OCI/earnings routing and reclassification
// tracking. Fair-value hedges aren't supported today: the system only
// accepts a cash-flow designation at instrument creation.
const SCENARIOS: Scenario[] = [
  {
    id: "designate",
    tag: "designate the hedge",
    label: "A cash-flow hedge, at inception",
    facts: [
      { k: "Hedged item", v: "Forecasted GBP sales · Q2 2027 · highly probable" },
      { k: "Instrument", v: "£2.4M forward · sell GBP" },
    ],
    change: "Hedge accounting is an election — it has to be documented before the fact, or it's lost for good.",
    callTitle: "Documented as a cash-flow hedge",
    cite: "ASC 815-20-25-3",
    body: "Aleq records the hedged item, the instrument, the risk being hedged, and the OCI account the mark routes to — dated to the trade, not backfilled. This is the record that makes everything after it eligible for hedge accounting.",
    outcome: "draft",
  },
  {
    id: "effectiveness",
    tag: "confirm effectiveness",
    label: "Every period, ongoing",
    facts: [
      { k: "Method elected", v: "Dollar-offset · documented at inception" },
      { k: "This period", v: "Your team runs the test — 98%, within the corridor you've set" },
    ],
    change: "The effectiveness result itself is your team's call — Aleq doesn't compute the dollar-offset ratio on its own today.",
    callTitle: "Result confirmed by you, routed by Aleq",
    cite: "ASC 815-20-35",
    body: "Give Aleq the effectiveness conclusion your team reached and it takes over from there: splits the effective portion into OCI, routes any ineffectiveness to earnings, and tracks the reclassification when the hedged item lands — no manual journal entry once the result is in.",
    outcome: "manual",
    needs: [
      "Run the elected effectiveness test (dollar-offset, critical-terms-match, or regression) and confirm the result",
      "Aleq splits and routes the mark from there — effective portion to OCI, any ineffective portion to earnings",
      "Reclassification to earnings is tracked automatically when the hedged item is realized",
    ],
  },
  {
    id: "fairvalue",
    tag: "try a fair-value hedge",
    label: "A different hedge type",
    facts: [
      { k: "Instrument", v: "Interest-rate swap hedging a fixed-rate liability" },
      { k: "Intent", v: "Both sides marked through earnings — a fair-value hedge, not cash-flow" },
    ],
    change: "Fair-value hedges route differently than cash-flow hedges — and route to a place Aleq doesn't support yet.",
    callTitle: "Not supported — designation is rejected",
    cite: "ASC 815-20-25",
    body: "Today Aleq only carries cash-flow hedge designations. A fair-value hedge — where both the derivative and the hedged item mark through earnings — isn't modeled, and the system won't let you designate one. It's on the roadmap; until then, that hedge needs to sit outside Aleq.",
    outcome: "stopped",
  },
];

export default function Asc815JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="Hedge accounting scenarios">
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
          <span className="gx-bar-t">Hedge · DRV-101 · GBP/USD forward</span>
          {s.outcome === "draft" && <span className="gx-stat review">drafted · needs sign-off</span>}
          {s.outcome === "manual" && <span className="gx-stat review">needs your result</span>}
          {s.outcome === "stopped" && <span className="gx-stat stop">not supported</span>}
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

          {s.outcome === "draft" && (
            <div className="gx-control">
              <span className="gx-ctl-note">Documented at inception · reversible only by dedesignating the hedge</span>
              <span className="gx-review">Awaiting sign-off</span>
            </div>
          )}

          {(s.outcome === "manual" || s.outcome === "stopped") && (
            <div className={"gx-stop-panel" + (s.outcome === "manual" ? " manual" : "")}>
              {s.needs ? (
                <>
                  <div className="gx-stop-reason">Once the effectiveness result is confirmed, everything downstream runs on its own.</div>
                  <div className="gx-stop-needs-k">How this splits between you and Aleq</div>
                  <ul className="gx-stop-needs">
                    {s.needs.map((n, i) => <li key={i}>{n}</li>)}
                  </ul>
                </>
              ) : (
                <div className="gx-stop-reason">No designation is created — nothing to draft, nothing posted. Ask us where fair-value hedge support stands on the roadmap.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
