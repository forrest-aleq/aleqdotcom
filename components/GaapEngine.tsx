"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Je = [side: "DR" | "CR", acct: string, amt: string];
type Standard = {
  id: string;
  code: string;
  name: string;
  src: { k: string; v: string };
  je: Je[];
  note: string;
};

const STANDARDS: Standard[] = [
  {
    id: "asc606",
    code: "606",
    name: "Revenue",
    src: { k: "Signed contract", v: "Cyberdyne · $540K · 36-mo" },
    je: [
      ["DR", "Deferred revenue", "$15,000"],
      ["CR", "Subscription revenue", "$15,000"],
    ],
    note: "recognized as the obligation is satisfied",
  },
  {
    id: "asc842",
    code: "842",
    name: "Leases",
    src: { k: "Signed lease", v: "535 Mission · 60-mo · 7.0%" },
    je: [
      ["DR", "Right-of-use asset", "$1,840,000"],
      ["CR", "Lease liability", "$1,792,400"],
      ["CR", "Cash · IDC + prepaid", "$47,600"],
    ],
    note: "operating lease · amortized each period",
  },
  {
    id: "asc718",
    code: "718",
    name: "Stock comp",
    src: { k: "Equity grant", v: "480,000 RSUs @ $18.50" },
    je: [
      ["DR", "Stock-based comp expense", "$185,000"],
      ["CR", "Additional paid-in capital", "$185,000"],
    ],
    note: "expensed over the service period",
  },
  {
    id: "asc740",
    code: "740",
    name: "Income tax",
    src: { k: "Pretax income", v: "$2.40M · FY2026" },
    je: [
      ["DR", "Income tax expense", "$513,000"],
      ["CR", "Income taxes payable", "$61,000"],
      ["CR", "Deferred tax liability", "$452,000"],
    ],
    note: "effective rate 21.4% · current + deferred",
  },
  {
    id: "asc340",
    code: "340",
    name: "Commissions",
    src: { k: "Sales commission", v: "$22,680 · 48-mo benefit" },
    je: [
      ["DR", "Commission amortization", "$473"],
      ["CR", "Deferred commission cost", "$473"],
    ],
    note: "capitalized, amortized over the benefit",
  },
  {
    id: "asc350",
    code: "350",
    name: "Capitalized software",
    src: { k: "Development sprint", v: "1,142 hrs @ $58 loaded" },
    je: [
      ["DR", "Internal-use software", "$71,056"],
      ["CR", "Capitalized labor & costs", "$71,056"],
    ],
    note: "development stage · capitalized",
  },
  {
    id: "asc815",
    code: "815",
    name: "Hedging",
    src: { k: "FX forward", v: "GBP/USD · £2.4M notional" },
    je: [
      ["DR", "Derivative asset", "$12,140"],
      ["CR", "Other comprehensive income", "$12,140"],
    ],
    note: "cash-flow hedge · effective portion to OCI",
  },
];

const DWELL = 4800;

export default function GaapEngine() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % STANDARDS.length),
      DWELL,
    );
    return () => clearTimeout(t);
  }, [active, paused]);

  const s = STANDARDS[active];

  return (
    <div
      className="gaap-engine reveal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="ge-tabs" role="tablist" aria-label="GAAP standards">
        {STANDARDS.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={"ge-tab" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            <span className="ge-tab-code">ASC {x.code}</span>
            <span className="ge-tab-name">{x.name}</span>
            {i === active && !paused && (
              <span
                className="ge-tab-fill"
                key={"fill-" + active}
                style={{ animationDuration: DWELL + "ms" }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="ge-stage" key={active}>
        <div className="ge-src">
          <div className="ge-col-k">source</div>
          <div className="ge-src-body">
            <div className="ge-src-k">{s.src.k}</div>
            <div className="ge-src-v">{s.src.v}</div>
          </div>
        </div>

        <div className="ge-arrow" aria-hidden="true">
          <span className="ge-mark">
            <svg viewBox="0 0 48 48">
              <use href="#aleq-mark" />
            </svg>
          </span>
          <span className="ge-arrow-label">Aleq derives</span>
        </div>

        <div className="ge-out">
          <div className="ge-out-head">
            Journal entry · ASC {s.code}
            <span className="ge-posted">posted</span>
          </div>
          <div className="ge-je">
            {s.je.map((l, j) => (
              <div
                className="ge-je-row"
                key={j}
                style={{ ["--i" as string]: j }}
              >
                <span className={"ge-side " + l[0].toLowerCase()}>{l[0]}</span>
                <span className="ge-acct">{l[1]}</span>
                <span className="ge-amt">{l[2]}</span>
              </div>
            ))}
          </div>
          <div className="ge-foot">
            <span className="ge-note">{s.note}</span>
            <Link className="ge-link" href={"/standards/" + s.id}>
              See ASC {s.code} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
