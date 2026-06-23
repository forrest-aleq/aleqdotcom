"use client";

import { useEffect, useState } from "react";

type Std = {
  key: string;
  tag: string;
  sub: string;
  cols: string[];
  rows: string[][];
};

const STDS: Std[] = [
  {
    key: "606",
    tag: "ASC 606 · Revenue",
    sub: "Acme · annual contract",
    cols: ["Period", "Recognized", "Deferred"],
    rows: [
      ["May 2026", "$38,200", "$420,200"],
      ["Jun 2026", "$38,200", "$382,000"],
      ["Jul 2026", "$38,200", "$343,800"],
      ["Aug 2026", "$38,200", "$305,600"],
      ["Sep 2026", "$38,200", "$267,400"],
      ["Oct 2026", "$38,200", "$229,200"],
    ],
  },
  {
    key: "842",
    tag: "ASC 842 · Leases",
    sub: "201 Spear St",
    cols: ["Period", "Interest", "Principal", "Liability"],
    rows: [
      ["May 2026", "$10,455", "$28,045", "$1,764,355"],
      ["Jun 2026", "$10,292", "$28,208", "$1,736,147"],
      ["Jul 2026", "$10,128", "$28,372", "$1,707,775"],
      ["Aug 2026", "$9,962", "$28,538", "$1,679,237"],
      ["Sep 2026", "$9,795", "$28,705", "$1,650,532"],
      ["Oct 2026", "$9,627", "$28,873", "$1,621,659"],
    ],
  },
  {
    key: "718",
    tag: "ASC 718 · Stock comp",
    sub: "2026 option grant",
    cols: ["Period", "Expense", "Unvested"],
    rows: [
      ["May 2026", "$42,180", "$1,012,320"],
      ["Jun 2026", "$42,180", "$970,140"],
      ["Jul 2026", "$42,180", "$927,960"],
      ["Aug 2026", "$42,180", "$885,780"],
      ["Sep 2026", "$42,180", "$843,600"],
      ["Oct 2026", "$42,180", "$801,420"],
    ],
  },
  {
    key: "340",
    tag: "ASC 340 · Commissions",
    sub: "Q2 bookings",
    cols: ["Period", "Amortized", "Unamortized"],
    rows: [
      ["May 2026", "$14,600", "$233,400"],
      ["Jun 2026", "$14,600", "$218,800"],
      ["Jul 2026", "$14,600", "$204,200"],
      ["Aug 2026", "$14,600", "$189,600"],
      ["Sep 2026", "$14,600", "$175,000"],
      ["Oct 2026", "$14,600", "$160,400"],
    ],
  },
];

const DWELL = 4400;

export default function StandardsCycle() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = STDS[active];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % STDS.length), DWELL);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <div
      className={"engine-art reveal eng-cycle" + (paused ? " paused" : "")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="eng-tabs" role="tablist" aria-label="Accounting standards">
        {STDS.map((st, i) => (
          <button
            key={st.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={"eng-tab" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            ASC {st.key}
            <span className="eng-tab-fill">
              <i style={i === active ? { animationDuration: `${DWELL}ms` } : undefined} />
            </span>
          </button>
        ))}
      </div>

      <div className="eng-content" key={active}>
        <div className="eng-head">
          <span className="eng-mark">
            <svg viewBox="0 0 48 48">
              <use href="#aleq-mark" />
            </svg>
          </span>
          {s.tag} · {s.sub}
          <span className="eng-tag">derived</span>
        </div>

        <table className="eng-sched">
          <thead>
            <tr>
              {s.cols.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r, ri) => (
              <tr key={ri} className={ri === 0 ? "on" : undefined}>
                {r.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
