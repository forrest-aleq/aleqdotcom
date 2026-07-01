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
  outcome: "draft" | "expensed";
  je: Je[];
};

// Mirrors the real capitalization gate: isCapitalized = phase == ApplicationDevelopment
// AND cost type is capitalizable (direct labor / third-party build only — training,
// data conversion, and overhead are never capitalizable, regardless of phase).
const SCENARIOS: Scenario[] = [
  {
    id: "labor",
    tag: "engineering labor",
    label: "Dev-stage build hours",
    facts: [
      { k: "Project", v: "SR-104 · search relevance v2 · in application-development stage" },
      { k: "Cost", v: "142 engineering hours this week, coding the new ranking model" },
    ],
    change: "Direct engineering labor, logged against a project already in the development stage.",
    callTitle: "Capitalized",
    cite: "ASC 350-40-25-1",
    body: "Coding, configuration, and testing of new capability during the application-development stage is the asset. The hours are priced at a loaded rate and capitalized to internal-use software.",
    outcome: "draft",
    je: [
      ["DR", "Internal-use software", "$8,236"],
      ["CR", "Capitalized labor & costs", "$8,236"],
    ],
  },
  {
    id: "training",
    tag: "training & data conversion",
    label: "Same project, same week",
    facts: [
      { k: "Project", v: "SR-104 · same dev-stage project, same sprint" },
      { k: "Cost", v: "Migrating the old relevance index and training the support team on the new tool" },
    ],
    change: "Costs logged during the exact same development-stage window — but a different kind of cost.",
    callTitle: "Expensed — phase doesn't override cost type",
    cite: "ASC 350-40-25-16",
    body: "It's tempting to assume anything logged during the development stage capitalizes. It doesn't: training costs and data conversion are expensed as incurred regardless of stage. Aleq applies the cost-type test independently of the phase gate, every time.",
    outcome: "expensed",
    je: [
      ["DR", "Training & conversion expense", "$3,140"],
      ["CR", "Cash / accrued payroll", "$3,140"],
    ],
  },
  {
    id: "feasibility",
    tag: "before commitment",
    label: "The same epic, one sprint earlier",
    facts: [
      { k: "Project", v: "SR-104 · preliminary stage · vendor evaluation" },
      { k: "Cost", v: "Comparing two ranking approaches before committing to a build" },
    ],
    change: "The same team, the same eventual project — but before the decision to build was made.",
    callTitle: "Expensed",
    cite: "ASC 350-40-25-2",
    body: "Preliminary-stage activities — feasibility, vendor selection, architecture options — are expensed as incurred. Capitalization can't start until the project clears this stage, no matter how directly the work ends up informing the build.",
    outcome: "expensed",
    je: [
      ["DR", "R&D / product expense", "$4,680"],
      ["CR", "Cash / accrued payroll", "$4,680"],
    ],
  },
];

export default function Asc350JudgmentDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const s = SCENARIOS.find((x) => x.id === activeId) ?? SCENARIOS[0];

  return (
    <div className="gx-judg reveal">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="Capitalization boundary scenarios">
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
          <span className="gx-bar-t">Cost classification · SR-104</span>
          {s.outcome === "draft" ? (
            <span className="gx-stat review">drafted · needs sign-off</span>
          ) : (
            <span className="gx-stat posted">expensed · no election needed</span>
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
            <b>What it looks like</b> {s.change}
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
            <span className="gx-ctl-note">
              {s.outcome === "draft" ? "Reversible · signed · traced to the epic and the hours logged against it" : "Posted immediately · no capitalization judgment applies"}
            </span>
            {s.outcome === "draft" && <span className="gx-review">Awaiting sign-off</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
