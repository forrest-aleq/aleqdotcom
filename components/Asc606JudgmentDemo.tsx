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
  outcome: "draft" | "stopped";
  je?: Je[];
  stopReason?: string;
  needs?: string[];
};

// Mirrors the real modification logic in the revenue-recognition engine:
// new distinct line priced at SSP -> separate contract; price change on
// existing scope -> cumulative catch-up; otherwise -> prospective. A
// significant financing component routes to human review before any of
// the above runs at all.
const SCENARIOS: Scenario[] = [
  {
    id: "addon",
    tag: "adds a new product",
    label: "New line, priced at list",
    facts: [
      { k: "Existing deal", v: "Cyberdyne · platform + implementation + support · $540,000" },
      { k: "Change", v: "+ analytics module, $96,000, priced at its standalone selling price" },
    ],
    change: "A distinct new product, sold at its own SSP — nothing about the original three obligations changes.",
    callTitle: "Treated as a separate contract",
    cite: "ASC 606-10-25-12",
    body: "The analytics module is distinct from what's already being delivered, and it's priced at what Aleq would charge for it on its own — both conditions for a separate contract. The original schedule isn't touched; this is its own five-step run.",
    outcome: "draft",
    je: [
      ["DR", "Accounts receivable", "$96,000"],
      ["CR", "Deferred revenue · analytics module", "$96,000"],
    ],
  },
  {
    id: "reprice",
    tag: "renegotiates the price",
    label: "Same scope, new price",
    facts: [
      { k: "Existing deal", v: "Cyberdyne · 36-mo term · $540,000 · 8 months recognized" },
      { k: "Change", v: "Renewed at $420,000 for the remaining scope — no new deliverables added" },
    ],
    change: "The price on the existing, undelivered obligations changed. Nothing new was added or removed.",
    callTitle: "Treated as a cumulative catch-up",
    cite: "ASC 606-10-25-13(b)",
    body: "Because the remaining obligations aren't distinct from what's already been delivered and the price itself changed, the adjustment runs through revenue now rather than spreading forward — a true-up against everything recognized to date, not a new schedule.",
    outcome: "draft",
    je: [
      ["DR", "Deferred revenue", "$31,733"],
      ["CR", "Revenue", "$31,733"],
    ],
  },
  {
    id: "extend",
    tag: "extends the term",
    label: "Same price, longer runway",
    facts: [
      { k: "Existing deal", v: "Cyberdyne · 36-mo term · $15,000/mo · 12 months recognized" },
      { k: "Change", v: "Extended 12 months at the same $15,000/mo rate" },
    ],
    change: "The remaining service is the same as what's already being delivered, just for longer — no price change, no new obligation.",
    callTitle: "Treated prospectively",
    cite: "ASC 606-10-25-13(a)",
    body: "The remaining performance is distinct from what's already delivered and reflects its standalone price, so the extension is recognized going forward only. Months 1–12 stay exactly as filed — nothing restates.",
    outcome: "draft",
    je: [
      ["DR", "Deferred revenue", "$0"],
      ["CR", "Revenue", "$0 — schedule extended 24 → 36 mo at $15,000/mo, no catch-up"],
    ],
  },
  {
    id: "financed",
    tag: "bundles in a buyout",
    label: "A financed payment structure",
    facts: [
      { k: "Existing deal", v: "Cyberdyne · standard quarterly billing" },
      { k: "Change", v: "Customer asks to defer $300,000 over 24 months instead of paying at delivery" },
    ],
    change: "A 24-month payment gap between delivery and cash creates a financing component — and whether it's significant enough to require a discounting adjustment is a judgment call, not a calculation.",
    callTitle: "Stopped — this needs your team",
    cite: "ASC 606-10-32-15",
    body: "A payment timing difference this large is a signal of significant financing, which means the transaction price should reflect the time value of money — at a rate Aleq isn't positioned to set unilaterally. Rather than guess a discount rate and risk misstating revenue and interest income, Aleq holds the whole modification here.",
    outcome: "stopped",
    stopReason: "Significant financing component flagged — no schedule drafted until this is resolved.",
    needs: [
      "Confirm whether the financing is significant under 606-10-32-16 (compare the deferral against your typical payment terms)",
      "Set the discount rate to apply, if so",
      "Then Aleq splits the transaction price into revenue and imputed interest and resumes the schedule",
    ],
  },
];

export default function Asc606JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs" role="tablist" aria-label="Contract change scenarios">
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
          <span className="gx-bar-t">Contract modification · Cyberdyne · C-7015</span>
          {s.outcome === "stopped" ? (
            <span className="gx-stat stop">stopped · needs you</span>
          ) : (
            <span className="gx-stat review">drafted · needs sign-off</span>
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
            <b>What changed</b> {s.change}
          </div>

          <div className="gx-call">
            <div className="gx-call-k">
              {s.callTitle}
              <span className="gx-cite">{s.cite}</span>
            </div>
            <p className="gx-call-t">{s.body}</p>
          </div>

          {s.outcome === "draft" && s.je && (
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
                <span className="gx-ctl-note">Reversible · signed · prior periods untouched</span>
                <span className="gx-review">Awaiting sign-off</span>
              </div>
            </>
          )}

          {s.outcome === "stopped" && (
            <div className="gx-stop-panel">
              <div className="gx-stop-reason">{s.stopReason}</div>
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
