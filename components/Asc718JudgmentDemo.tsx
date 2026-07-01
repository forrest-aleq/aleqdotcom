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
  outcome: "posted" | "manual";
  je?: Je[];
  needs?: string[];
};

// RSU fair value is mechanical (share price x units, fixed at grant — no
// re-measurement). Option fair value requires a pricing-model assumption
// set Aleq doesn't estimate on its own today. Forfeiture is a real,
// automatic reversal triggered off the cap-table termination event.
const SCENARIOS: Scenario[] = [
  {
    id: "rsu",
    tag: "RSU vests",
    label: "No pricing model needed",
    facts: [
      { k: "Grant", v: "G-2405 · 480,000 RSUs · $18.50/share at grant" },
      { k: "Event", v: "Month 14 of 48 · straight-line since the 1-yr cliff" },
    ],
    change: "An RSU's fair value is simply the share price on the grant date — fixed, no re-measurement.",
    callTitle: "Measured and posted",
    cite: "ASC 718-10-30-27",
    body: "For a full-value award like an RSU, grant-date fair value is the market price of the underlying share — no valuation model, no assumptions to set. This month's expense is the total cost spread over the remaining service period.",
    outcome: "posted",
    je: [
      ["DR", "Stock-based comp expense", "$185,000"],
      ["CR", "Additional paid-in capital", "$185,000"],
    ],
  },
  {
    id: "option",
    tag: "Option grant",
    label: "Same pool, an option award",
    facts: [
      { k: "Grant", v: "G-2406 · 60,000 ISOs · $18.50 strike, 10-yr contractual term" },
      { k: "Event", v: "First expense period after grant" },
    ],
    change: "Unlike an RSU, an option's value depends on assumptions about the future — not just today's price.",
    callTitle: "Needs your assumptions",
    cite: "ASC 718-10-30-20",
    body: "An option's grant-date fair value requires a pricing model — expected term, expected volatility, the risk-free rate, dividend yield. Aleq doesn't estimate these for you today; give it the assumptions and it runs the valuation and the attribution schedule from there.",
    outcome: "manual",
    needs: [
      "Expected term (or elect the simplified method for plain-vanilla options)",
      "Expected volatility — typically a peer-company or historical estimate your team sources",
      "Risk-free rate matching the expected term, and dividend yield if any",
    ],
  },
  {
    id: "forfeit",
    tag: "Grantee leaves",
    label: "Pre-cliff termination",
    facts: [
      { k: "Grant", v: "G-2405 · 40,000 unvested units on one grantee" },
      { k: "Event", v: "Termination recorded on the cap table" },
    ],
    change: "The cumulative expense already booked on the unvested units has to come back out.",
    callTitle: "Reversed automatically",
    cite: "ASC 718-20-35-8",
    body: "Aleq catches the termination from the cap table and reverses the full cumulative expense on the forfeited units — vested units keep their expense, only the unvested portion unwinds. No manual journal entry.",
    outcome: "posted",
    je: [
      ["DR", "Additional paid-in capital", "$148,000"],
      ["CR", "Stock-based comp expense", "$148,000"],
    ],
  },
];

export default function Asc718JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="Stock compensation scenarios">
        {SCENARIOS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={x.id === activeId}
            className={"gx-judg-tab" + (x.id === activeId ? " on" : "") + (x.outcome === "manual" ? " stop" : "")}
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
          <span className="gx-bar-t">Stock-based compensation</span>
          {s.outcome === "manual" ? (
            <span className="gx-stat stop">needs your inputs</span>
          ) : (
            <span className="gx-stat posted">✓ posted</span>
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
            <b>Why it&apos;s different</b> {s.change}
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
                <span className="gx-ctl-note">Reversible · signed · traced to the grant</span>
              </div>
            </>
          )}

          {s.outcome === "manual" && (
            <div className="gx-stop-panel">
              <div className="gx-stop-reason">No fair value is computed until these are set — this is on our roadmap to estimate, not something we&apos;ll guess at today.</div>
              <div className="gx-stop-needs-k">What Aleq needs from your team</div>
              <ul className="gx-stop-needs">
                {s.needs?.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
