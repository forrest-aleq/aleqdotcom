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
  outcome: "draft" | "posted";
  je: Je[];
};

// The amortization period itself is a plan setting your team sets — Aleq
// doesn't derive it from renewal rates or churn on its own today. What it
// does run automatically: incremental-cost capitalization on the period
// you've set, the one-year expedient when your plan elects it, and the
// write-off the moment a contract churns.
const SCENARIOS: Scenario[] = [
  {
    id: "capitalize",
    tag: "new logo commission",
    label: "Capitalized over the period you set",
    facts: [
      { k: "Contract", v: "Cyberdyne · C-7015 · $540,000 · closed by Allison W." },
      { k: "Commission", v: "$21,600 + $1,080 payroll tax · paid only on close" },
    ],
    change: "An incremental cost of obtaining the contract — wouldn't exist if the deal hadn't closed.",
    callTitle: "Capitalized, amortized over 48 months",
    cite: "ASC 340-40-25-1",
    body: "The 48-month period is your plan's setting — your team decides whether renewals are commensurate and how long the benefit runs; Aleq doesn't derive that on its own yet. Once it's set, capitalization and monthly amortization run without a spreadsheet.",
    outcome: "draft",
    je: [
      ["DR", "Amortization expense", "$473"],
      ["CR", "Deferred commission asset", "$473"],
    ],
  },
  {
    id: "expedient",
    tag: "short deal, expedient elected",
    label: "Expensed immediately",
    facts: [
      { k: "Contract", v: "Marcus D. · C-7102 · 12-month term, no renewal" },
      { k: "Plan setting", v: "One-year practical expedient elected on this plan" },
    ],
    change: "The benefit period on this plan is 12 months or less, and the plan has elected the expedient.",
    callTitle: "Expensed as incurred",
    cite: "ASC 340-40-25-4",
    body: "Where a plan has elected the one-year expedient and the period you've set doesn't exceed 12 months, Aleq skips capitalization entirely — no asset for a commission that won't outlive the year. This only fires for plans where the expedient is elected; it isn't inferred automatically.",
    outcome: "posted",
    je: [
      ["DR", "Commission expense", "$15,000"],
      ["CR", "Cash / accrued payroll", "$15,000"],
    ],
  },
  {
    id: "churn",
    tag: "contract churns early",
    label: "Remaining balance written off",
    facts: [
      { k: "Contract", v: "Priya N. · C-6711 · customer terminates in month 19 of 48" },
      { k: "Balance", v: "$16,849 still capitalized, unamortized" },
    ],
    change: "The customer relationship the asset was benefiting no longer exists.",
    callTitle: "Impaired and written off",
    cite: "ASC 340-40-35-3",
    body: "Aleq catches the termination from the contract status and writes off the remaining capitalized balance in the period the customer leaves — no stale deferred-cost asset sitting on the books waiting for someone to notice.",
    outcome: "posted",
    je: [
      ["DR", "Commission amortization expense", "$16,849"],
      ["CR", "Deferred commission asset", "$16,849"],
    ],
  },
];

export default function Asc340JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="Commission capitalization scenarios">
        {SCENARIOS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={x.id === activeId}
            className={"gx-judg-tab" + (x.id === activeId ? " on" : "")}
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
          <span className="gx-bar-t">Deferred commission cost</span>
          {s.outcome === "draft" ? (
            <span className="gx-stat review">drafted · needs sign-off</span>
          ) : (
            <span className="gx-stat posted">✓ posted automatically</span>
          )}
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
            <b>What triggered it</b> {s.change}
          </div>

          <div className="gx-call">
            <div className="gx-call-k">
              {s.callTitle}
              <span className="gx-cite">{s.cite}</span>
            </div>
            <p className="gx-call-t">{s.body}</p>
          </div>

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
            <span className="gx-ctl-note">Reversible · signed · traced to the payout and the contract</span>
            {s.outcome === "draft" && <span className="gx-review">Awaiting sign-off</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
