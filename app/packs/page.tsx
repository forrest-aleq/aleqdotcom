import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scenario packs — hire Aleq for the work you already know",
  description:
    "Browse the jobs Aleq runs, by function — close, collections, reconciliation, AP, multi-entity, tax, audit. Each pack is eval-gated before it touches your books.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container">
          <span className="eyebrow">scenario packs</span>
          <h1 className="h1">Hire it for the work you already&nbsp;know.</h1>
          <p className="lead">Each pack is a set of jobs Aleq runs end to end, scored against golden scenarios drawn from real books. Nothing ships below the 0.90 eval gate.</p>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="pack-cards reveal">
            <Link className="pack-card" href="/packs/month-end-close">
              <div className="pc-top"><span className="pc-dom">close</span><span className="pc-sc">A · 0.96</span></div>
              <div className="pc-t">Month-end close starter</div>
              <div className="pc-s">Subledger tie-outs, accruals, depreciation, FX, lease rolls, and flux review — closed continuously across entities.</div>
              <div className="pc-foot"><span>14 scenarios · 9 capabilities</span><span className="pc-arrow">→</span></div>
            </Link>
            <Link className="pack-card" href="/packs/collections">
              <div className="pc-top"><span className="pc-dom">ar</span><span className="pc-sc">A · 0.94</span></div>
              <div className="pc-t">Collections &amp; dunning</div>
              <div className="pc-s">Tiered dunning, voice calls in your name, promise capture, and cash application at 99% first-pass.</div>
              <div className="pc-foot"><span>11 scenarios · 7 capabilities</span><span className="pc-arrow">→</span></div>
            </Link>
            <Link className="pack-card" href="/packs/reconciliation">
              <div className="pc-top"><span className="pc-dom">recon</span><span className="pc-sc">A · 0.97</span></div>
              <div className="pc-t">Bank &amp; card reconciliation</div>
              <div className="pc-s">Match to source, investigate exceptions, post reconciling entries, seal the journal at $0 variance.</div>
              <div className="pc-foot"><span>9 scenarios · 5 capabilities</span><span className="pc-arrow">→</span></div>
            </Link>
            <Link className="pack-card" href="/packs/multi-entity">
              <div className="pc-top"><span className="pc-dom">multi</span><span className="pc-sc">A · 0.93</span></div>
              <div className="pc-t">Multi-entity consolidation</div>
              <div className="pc-s">Intercompany eliminations, FX revaluation under ASC 830, per-entity close across currencies.</div>
              <div className="pc-foot"><span>12 scenarios · 8 capabilities</span><span className="pc-arrow">→</span></div>
            </Link>
            <Link className="pack-card" href="/packs/ap">
              <div className="pc-top"><span className="pc-dom">ap</span><span className="pc-sc">A · 0.95</span></div>
              <div className="pc-t">AP &amp; 3-way match</div>
              <div className="pc-s">PO ↔ GR ↔ bill matched before a dollar moves, approval routing, and payment runs with early-pay capture.</div>
              <div className="pc-foot"><span>10 scenarios · 6 capabilities</span><span className="pc-arrow">→</span></div>
            </Link>
            <Link className="pack-card" href="/packs/audit">
              <div className="pc-top"><span className="pc-dom">audit</span><span className="pc-sc">A · 0.98</span></div>
              <div className="pc-t">Audit-ready evidence</div>
              <div className="pc-s">Signed action trail, period replays, and evidence bundles delivered to your auditor&apos;s PBC list.</div>
              <div className="pc-foot"><span>8 scenarios · 5 capabilities</span><span className="pc-arrow">→</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Don&apos;t see your job? Bring it.</h2>
          <p className="lead">If you can describe the work, we can build the pack — and eval-gate it before it touches your books.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
