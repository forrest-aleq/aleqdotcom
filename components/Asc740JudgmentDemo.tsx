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
  outcome: "posted" | "manual" | "stopped";
  je?: Je[];
  needs?: string[];
};

// Current and deferred tax expense compute automatically from pretax book
// income and the temporary differences on the ledger. The valuation
// allowance amount is a target your team sets, not a value Aleq derives
// from cumulative-loss evidence. Rate-change remeasurement isn't wired up
// yet — a real gap, not a soft one.
const SCENARIOS: Scenario[] = [
  {
    id: "provision",
    tag: "compute the provision",
    label: "FY2026 · from the ledger",
    facts: [
      { k: "Pretax book income", v: "$2,400,000 · YTD" },
      { k: "Temporary differences on file", v: "Stock comp, accruals, depreciation, NOLs" },
    ],
    change: "Current and deferred tax expense both compute from what's already on the ledger.",
    callTitle: "Current + deferred provision computed",
    cite: "ASC 740-10-30-5",
    body: "Aleq applies your recorded temporary differences to pretax book income and computes current tax expense and deferred tax expense — the two add up to the total provision and a single effective rate. The line-by-line rate bridge (state, credits, permanent items, windfall) isn't broken out automatically today.",
    outcome: "posted",
    je: [
      ["DR", "Income tax expense", "$513,000"],
      ["CR", "Income taxes payable", "$61,000"],
      ["CR", "Deferred tax liability", "$452,000"],
    ],
  },
  {
    id: "valuation",
    tag: "set the valuation allowance",
    label: "Three years of losses",
    facts: [
      { k: "Gross deferred tax asset", v: "$2,638,000" },
      { k: "Evidence", v: "Three years cumulative pretax losses · projected income improving" },
    ],
    change: "Whether a DTA will be realized turns on evidence only your team can weigh — cumulative losses, projections, tax-planning strategies.",
    callTitle: "You set the target, Aleq posts it",
    cite: "ASC 740-10-30-5(e)",
    body: "Aleq doesn't weigh the positive and negative evidence itself yet. Give it the target allowance your team lands on under the more-likely-than-not standard, and it posts the adjustment and keeps the balance current against the gross DTA every period after.",
    outcome: "manual",
    needs: [
      "Weigh the evidence under ASC 740-10-30 — cumulative losses, projected future income, carryforward horizon",
      "Set the target allowance amount",
      "Aleq posts the adjustment and carries the balance forward each period",
    ],
  },
  {
    id: "ratechange",
    tag: "a tax rate changes",
    label: "State rate enacted +0.9%",
    facts: [
      { k: "Existing deferreds", v: "$1,838,000 net DTA, posted at the prior rate" },
      { k: "Change", v: "New state rate enacted, effective this quarter" },
    ],
    change: "Every deferred balance should remeasure at the newly enacted rate, with the catch-up in the period of enactment.",
    callTitle: "Not wired up yet",
    cite: "ASC 740-10-25-47",
    body: "This is a real gap, not a soft one: today, changing an enacted rate after deferred balances are posted doesn't remeasure them automatically — it blocks, because the posted balance no longer matches the new rate. Handling this correctly today means reversing and reposting the affected deferreds by hand until automatic remeasurement ships.",
    outcome: "stopped",
  },
];

export default function Asc740JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="Income tax provision scenarios">
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
          <span className="gx-bar-t">Income tax provision · FY2026</span>
          {s.outcome === "posted" && <span className="gx-stat posted">✓ posted</span>}
          {s.outcome === "manual" && <span className="gx-stat review">needs your target</span>}
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
                <span className="gx-ctl-note">Reversible · signed · traced to the temporary differences on file</span>
              </div>
            </>
          )}

          {s.outcome === "manual" && s.needs && (
            <div className="gx-stop-panel manual">
              <div className="gx-stop-reason">Once the target is set, the balance carries forward on its own.</div>
              <div className="gx-stop-needs-k">How this splits between you and Aleq</div>
              <ul className="gx-stop-needs">
                {s.needs.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}

          {s.outcome === "stopped" && (
            <div className="gx-stop-panel">
              <div className="gx-stop-reason">No automatic catch-up entry is posted — this is on our roadmap, not something we&apos;ll approximate today.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
