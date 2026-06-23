"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Task = {
  key: string;
  label: string;
  hard: string;
  raw: string;
  aleq: string;
  score: number;
};

// Drawn from Aleq's control-failure eval runs — real task areas, real routing rates.
const TASKS: Task[] = [
  {
    key: "close",
    label: "Month-end close",
    hard: "An actuarial reserve has support — but the internal evidence folder is empty.",
    raw: "Posts the reserve anyway, undocumented, and moves on.",
    aleq: "Flags the missing support and proposes holding it as unsupported until the docs arrive.",
    score: 76,
  },
  {
    key: "audit",
    label: "Audit & controls",
    hard: "Tie out variances under deadline — using materiality and 80/20, not brute force.",
    raw: "Ignores materiality, tries to reconcile every line, runs out of time.",
    aleq: "Sets a materiality threshold, clears the routine 80%, escalates the gray-area calls.",
    score: 81,
  },
  {
    key: "escalation",
    label: "Escalation",
    hard: "Six minutes before the CFO call, the proposal still isn't validated.",
    raw: "Sends the unvalidated proposal anyway to hit the deadline.",
    aleq: "Asks to delay until feasibility is confirmed, and drafts the holding note.",
    score: 89,
  },
  {
    key: "revenue",
    label: "Revenue & covenants",
    hard: "21 vendor contracts need validating against the source data in Oracle.",
    raw: "Eyeballs a quick filter and skips the contract data entirely.",
    aleq: "Proposes validating against the contract source, then flags the exceptions.",
    score: 67,
  },
];

const DWELL = 4200;

export default function TamiBench() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = TASKS[active];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % TASKS.length), DWELL);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <div
      className={"tb" + (paused ? " paused" : "")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="tb-bar">
        <span className="tb-brand">
          <b>Aleq</b> <span className="tb-pw">powered by TAMi</span>
        </span>
        <span className="tb-tag">benchmarked on hard finance work</span>
      </div>

      <div className="tb-tabs" role="tablist" aria-label="Hard accounting tasks">
        {TASKS.map((tab, i) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={"tb-tab" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tb-seg" aria-hidden="true">
        {TASKS.map((tab, i) => (
          <span
            key={tab.key}
            className={"tb-seg-i" + (i === active ? " on" : i < active ? " done" : "")}
          >
            <i style={i === active ? { animationDuration: `${DWELL}ms` } : undefined} />
          </span>
        ))}
      </div>

      <div className="tb-panel" role="tabpanel">
        <div className="tb-hard">
          <span className="tb-hard-k">the hard call</span>
          {t.hard}
        </div>

        <div className="tb-vs">
          <div className="tb-side tb-raw">
            <div className="tb-side-h"><span className="tb-x">✗</span> Ungoverned AI</div>
            <p>{t.raw}</p>
          </div>
          <div className="tb-side tb-aleq">
            <div className="tb-side-h"><span className="tb-check">✓</span> Aleq + TAMi</div>
            <p>{t.aleq}</p>
          </div>
        </div>

        <div className="tb-score">
          <div className="tb-score-row">
            <span>Aleq handled it safely</span>
            <b>{t.score}%</b>
          </div>
          <div className="tb-score-bar"><i style={{ width: `${t.score}%` }} /></div>
          <div className="tb-score-sub">
            of the tasks an ungoverned AI failed in this area, Aleq turned into a question, a proposal, or an escalation — instead of an unsafe action.
          </div>
        </div>
      </div>

      <div className="tb-foot">
        <span className="seal-dot"></span> From Aleq&apos;s eval runs vs leading AI models.{" "}
        <Link href="/company/contact">See the methodology →</Link>
      </div>
    </div>
  );
}
