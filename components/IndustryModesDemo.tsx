"use client";

import { useState } from "react";
import type { ModeDemoItem } from "@/lib/industries";

// The Manual / Assist / Auto ladder, shown on this industry's actual work.
// Auto = proven work running alone. Assist = drafted and held — the Approve
// button here IS the product's core gesture. Manual = the judgment stays
// yours, with the inputs staged. Autonomy is earned per task, so the mix
// shifts by industry — that's the honest claim, and the differentiated one.
const TIERS: Record<ModeDemoItem["mode"], { label: string; sub: string; note: string }> = {
  auto: {
    label: "Auto",
    sub: "runs alone",
    note: "Proven on your books — runs alone, every entry logged and reversible.",
  },
  assist: {
    label: "Assist",
    sub: "drafts · you approve",
    note: "Drafted and held — one click to approve. Nothing posts without you.",
  },
  manual: {
    label: "Manual",
    sub: "your judgment",
    note: "The call stays yours — Aleq stages the inputs and drafts the basis.",
  },
};

export default function IndustryModesDemo({ items }: { items: ModeDemoItem[] }) {
  const [active, setActive] = useState(0);
  const [approved, setApproved] = useState<Record<number, boolean>>({});

  const it = items[active] ?? items[0];
  const tier = TIERS[it.mode];
  const isApproved = !!approved[active];
  const showJe = it.je && (it.mode !== "assist" || isApproved);
  const pill = it.mode === "assist" && isApproved ? (it.approvedPill ?? "✓ done") : it.pill;
  const pillClass =
    it.mode === "auto" || (it.mode === "assist" && isApproved)
      ? "posted"
      : it.mode === "assist"
        ? "review"
        : "manual";

  return (
    <div className="gx-judg">
      <div className="gx-judg-tabs gx-judg-tabs-3" role="tablist" aria-label="How much Aleq runs, by task">
        {items.map((x, i) => (
          <button
            key={x.mode}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={"gx-judg-tab" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            <span className="gx-judg-tag">{TIERS[x.mode].sub}</span>
            <span className="gx-judg-label">{TIERS[x.mode].label}</span>
          </button>
        ))}
      </div>

      <div className="gx-main gx-judg-main" key={active}>
        <div className="gx-bar">
          <svg className="gx-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
          <span className="gx-bar-t">{it.head}</span>
          <span className={"gx-stat " + pillClass}>{pill}</span>
        </div>

        <div className="gx-body">
          <div className="gx-judg-change">
            <b>{tier.label}</b> {tier.note}
          </div>

          <div className="gx-src gx-judg-facts">
            {it.facts.map((f, i) => (
              <div className="gx-judg-fact" key={i}>
                <span className="gx-from">{f.k}</span>
                {f.v}
              </div>
            ))}
          </div>

          <div className="gx-call">
            <div className="gx-call-k">
              {it.head}
              {it.cite ? <span className="gx-cite">{it.cite}</span> : null}
            </div>
            <p className="gx-call-t">{it.body}</p>
          </div>

          {showJe && it.je && (
            <div className="gx-je">
              {it.je.map((l, j) => (
                <div className="gx-je-row" key={j} style={{ ["--i" as string]: j }}>
                  <span className={"gx-side " + l.side}>{l.side.toUpperCase()}</span>
                  <span className="gx-acct">
                    {l.acct}
                    {l.sub ? <small style={{ display: "block", fontSize: "11px", color: "var(--fg-muted)" }}>{l.sub}</small> : null}
                  </span>
                  <span className="gx-amt">{l.val}</span>
                </div>
              ))}
            </div>
          )}

          <div className="gx-control">
            {it.mode === "auto" && <span className="gx-ctl-note">{it.jeNote}</span>}

            {it.mode === "assist" && !isApproved && (
              <>
                <span className="gx-ctl-note">held for you · nothing posted</span>
                <button
                  type="button"
                  className="gx-approve"
                  onClick={() => setApproved((a) => ({ ...a, [active]: true }))}
                >
                  {it.approveLabel ?? "Approve"}
                </button>
              </>
            )}
            {it.mode === "assist" && isApproved && (
              <span className="gx-ctl-note ok">{it.approvedNote}</span>
            )}

            {it.mode === "manual" && (
              <span className="gx-ctl-note">basis staged · nothing posts until you decide</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
