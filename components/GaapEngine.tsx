"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Je = [side: "DR" | "CR", acct: string, amt: string];
type Standard = {
  id: string;
  code: string;
  name: string;
  source: string;
  call: string; // the judgment — the hard part
  cite: string; // codification basis
  je: Je[];
  control: "review" | "posted";
};

const STANDARDS: Standard[] = [
  {
    id: "asc606",
    code: "606",
    name: "Revenue",
    source: "Contract · Cyberdyne · $540K · 3 obligations",
    call: "Allocated the price across the three performance obligations by standalone selling price — platform $432K, implementation $81K, support $27K.",
    cite: "ASC 606-10-32-31",
    je: [
      ["DR", "Accounts receivable", "$540,000"],
      ["CR", "Deferred revenue · platform", "$432,000"],
      ["CR", "Deferred revenue · implementation", "$81,000"],
      ["CR", "Deferred revenue · support", "$27,000"],
    ],
    control: "review",
  },
  {
    id: "asc842",
    code: "842",
    name: "Leases",
    source: "Lease · 535 Mission · 60-mo · 7.0% IBR",
    call: "Classified operating — none of the five finance-lease criteria met (term 60 mo of ~25-yr life; PV 71% of fair value).",
    cite: "ASC 842-10-25-2",
    je: [["DR", "Right-of-use asset", "$1,840,000"], ["CR", "Lease liability", "$1,792,400"], ["CR", "Cash · IDC + prepaid", "$47,600"]],
    control: "review",
  },
  {
    id: "asc718",
    code: "718",
    name: "Stock comp",
    source: "Grant · 480,000 RSUs · 4-yr service",
    call: "Measured at grant-date fair value — the $18.50 share price — and expensed straight-line over the service period.",
    cite: "ASC 718-10-30",
    je: [["DR", "Stock-based comp expense", "$185,000"], ["CR", "Additional paid-in capital", "$185,000"]],
    control: "posted",
  },
  {
    id: "asc740",
    code: "740",
    name: "Income tax",
    source: "FY2026 · pretax income $2.40M",
    call: "Recorded an $0.8M valuation allowance — three years of cumulative losses are negative evidence under the more-likely-than-not test.",
    cite: "ASC 740-10-30",
    je: [
      ["DR", "Income tax expense", "$861,000"],
      ["CR", "Income taxes payable", "$61,000"],
      ["CR", "DTA valuation allowance", "$800,000"],
    ],
    control: "review",
  },
  {
    id: "asc340",
    code: "340",
    name: "Commissions",
    source: "Commission · $22,680 · new logo",
    call: "Set the period of benefit at 48 months — renewal commissions aren't commensurate, so the asset benefits the expected customer life.",
    cite: "ASC 340-40-35",
    je: [["DR", "Commission amortization", "$473"], ["CR", "Deferred commission cost", "$473"]],
    control: "review",
  },
  {
    id: "asc350",
    code: "350",
    name: "Capitalized software",
    source: "Project · SR-104 · search relevance",
    call: "Capitalization begins 2026-02-15 — preliminary stage closed, application development started, per the project milestones.",
    cite: "ASC 350-40-25",
    je: [["DR", "Internal-use software", "$71,056"], ["CR", "Capitalized labor & costs", "$71,056"]],
    control: "review",
  },
  {
    id: "asc815",
    code: "815",
    name: "Hedging",
    source: "FX forward · GBP/USD · £2.4M notional",
    call: "Designated a cash-flow hedge at inception, dollar-offset method — 98% effective, within the 80–125% corridor.",
    cite: "ASC 815-20-25",
    je: [["DR", "Derivative asset", "$12,140"], ["CR", "Other comprehensive income", "$12,140"]],
    control: "review",
  },
];

const DWELL = 5600;

export default function GaapEngine() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % STANDARDS.length), DWELL);
    return () => clearTimeout(t);
  }, [active, paused]);

  const s = STANDARDS[active];

  return (
    <div
      className="gaap-app reveal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gx-rail" role="tablist" aria-label="GAAP standards">
        {STANDARDS.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={"gx-rtab" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            <span className="gx-rcode">ASC {x.code}</span>
            <span className="gx-rname">{x.name}</span>
            {i === active && !paused && (
              <span className="gx-rfill" key={"f" + active} style={{ animationDuration: DWELL + "ms" }} />
            )}
          </button>
        ))}
      </div>

      <div className="gx-main" key={active}>
        <div className="gx-bar">
          <svg className="gx-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
          <span className="gx-bar-t">ASC {s.code} · {s.name}</span>
          {s.control === "review" ? (
            <span className="gx-stat review">drafted · needs sign-off</span>
          ) : (
            <span className="gx-stat posted">✓ posted</span>
          )}
        </div>

        <div className="gx-body">
          <div className="gx-src">
            <span className="gx-from">from</span>
            {s.source}
          </div>

          <div className="gx-call">
            <div className="gx-call-k">
              Aleq&apos;s call
              <span className="gx-cite">{s.cite}</span>
            </div>
            <p className="gx-call-t">{s.call}</p>
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
            {s.control === "review" ? (
              <>
                <span className="gx-ctl-note">Reversible · logged · auditor-ready</span>
                <span className="gx-review">Awaiting sign-off</span>
              </>
            ) : (
              <>
                <span className="gx-ctl-note">Reviewed &amp; posted · reversible · signed</span>
                <Link className="gx-link" href={"/standards/" + s.id}>
                  See ASC {s.code} <span aria-hidden="true">→</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
