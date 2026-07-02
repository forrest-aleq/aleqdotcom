import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Month-end close starter — scenario pack",
  description:
    "The close pack: subledger tie-outs, accruals, depreciation, FX, lease rolls, intercompany eliminations, and flux review — run continuously across entities, eval-gated at 0.96.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container pk-hero-inner">
          <div className="pk-hero-copy">
            <span className="pk-dom">close pack</span>
            <h1 className="h1">The close runs itself — and waits where it should.</h1>
            <p className="lead">Aleq drives the whole checklist: subledger tie-outs, accruals, depreciation, FX, ASC 842 lease rolls, intercompany eliminations, and flux review. It works continuously, escalates the blockers, and stops dead at sign-off and period lock — those stay human-only.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Close a real month with us</Link>
              <Link className="btn btn-lg" href="/work/close">See the close in detail →</Link>
            </div>
          </div>
          <div className="pk-score reveal">
            <div className="pks-v">0.96</div>
            <div className="pks-l">eval score · grade A</div>
            <div className="pks-gate">14 scenarios · 9 capabilities<br />gate ≥ 0.90 · pass</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="kbar reveal">
            <div className="kc"><div className="kc-v">8<span className="u">days</span></div><div className="kc-l">Close target, group-wide</div></div>
            <div className="kc"><div className="kc-v">6</div><div className="kc-l">Entities · 3 currencies</div></div>
            <div className="kc"><div className="kc-v">22</div><div className="kc-l">Tasks on the checklist</div></div>
            <div className="kc"><div className="kc-v">2</div><div className="kc-l">Human-only steps</div></div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead"><span className="eyebrow">period 2026-04 · day 4 of 8</span><h2 className="h2">The real checklist, by area.</h2><p className="lead">Each task carries an owner, an ASC/capability tag, a confidence score, and an autonomy tier. Tier 1 runs signed; Tier 2 drafts for your approval; sign-off and lock are human-only.</p></div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="surface-title">Close checklist · Sirius Robotics group</span><span className="surface-meta">62% · 4 days to close</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Task</th><th>Capability</th><th className="num">Conf</th><th>How</th></tr></thead>
                <tbody>
                  <tr><td>Bank reconciliation — JPMC / Mercury</td><td className="mono">bank.reconcile_period</td><td className="num">0.99</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>Deferred revenue waterfall</td><td className="mono">ar.deferred_rev_release</td><td className="num">0.99</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>Gusto payroll posting + accrual</td><td className="mono">payroll.post_accrual</td><td className="num">0.99</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>Run depreciation</td><td className="mono">fixedassets.depreciate</td><td className="num">0.99</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>ASC 842 ROU + lease-liability roll</td><td className="mono">leases.asc842_roll</td><td className="num">0.99</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>Sub-ledger to GL tie-out</td><td className="mono">ledger.tieout</td><td className="num">0.96</td><td><span className="pill pill-info">drafted</span></td></tr>
                  <tr><td>Intercompany elimination</td><td className="mono">consolidation.eliminations</td><td className="num">0.95</td><td><span className="pill pill-info">drafted</span></td></tr>
                  <tr><td>Income tax provision</td><td className="mono">tax.income_provision</td><td className="num">0.88</td><td><span className="pill pill-info">drafted</span></td></tr>
                  <tr className="hot"><td>Controller sign-off</td><td className="acct">— human only —</td><td className="num">—</td><td><span className="pill pill-warn">you</span></td></tr>
                  <tr className="hot"><td>Period lock</td><td className="acct">— human only —</td><td className="num">—</td><td><span className="pill pill-warn">you</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> 15 auto · 5 drafted · 2 human-only · every auto action ed25519 signed</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">it escalates the blocker</div>
              <div className="f-h">One entity is blocking the group. Aleq already drafted the email.</div>
              <p className="f-p">Sirius Robotik GmbH (DE) is stuck — a VAT reconciliation is waiting on a missing vendor invoice, and 7 downstream tasks are blocked behind it. Aleq flagged the critical path, drafted a bilingual note to the DE controller, and queued it for 9:00 AM CET. The rest of the group keeps closing.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Group close · Apr 2026</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>Sirius Treasury LLC</td><td className="acct">USD</td><td className="num pos">100%</td></tr>
                    <tr><td>Sirius Robotics Pte. (SG)</td><td className="acct">USD</td><td className="num">91%</td></tr>
                    <tr><td>Sirius Robotics MX</td><td className="acct">MXN</td><td className="num">84%</td></tr>
                    <tr><td>Sirius Robotics, Inc. (US)</td><td className="acct">USD</td><td className="num">62%</td></tr>
                    <tr><td>Sirius Robotics UK Ltd.</td><td className="acct">GBP</td><td className="num">55%</td></tr>
                    <tr className="hot"><td>Sirius Robotik GmbH (DE)</td><td className="acct">EUR</td><td><span className="pill pill-bad">blocked</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot" style={{ background: "var(--warning)", boxShadow: "0 0 0 3px color-mix(in oklch,var(--warning) 18%,transparent)" }}></span> CRITICAL PATH · 7 tasks waiting on DE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">in this pack</span><h2 className="h2">Nine capabilities, fourteen scenarios.</h2></div>
          <div className="capgrid reveal">
            <div className="cap"><div className="cap-k">ledger.tieout</div><div className="cap-h">Subledger tie-outs</div><div className="cap-p">AR, AP, payroll, and fixed-asset subledgers reconciled to the GL.</div></div>
            <div className="cap"><div className="cap-k">payroll.post_accrual</div><div className="cap-h">Accruals &amp; payroll</div><div className="cap-p">Gusto posting, bonus accrual review, recurring accruals.</div></div>
            <div className="cap"><div className="cap-k">fixedassets.depreciate</div><div className="cap-h">Depreciation</div><div className="cap-p">Straight-line depreciation run plus additions review.</div></div>
            <div className="cap"><div className="cap-k">leases.asc842_roll</div><div className="cap-h">ASC 842 lease roll</div><div className="cap-p">ROU asset + lease-liability roll, auto-posted via recurring entry.</div></div>
            <div className="cap"><div className="cap-k">multicurrency.run_revaluation</div><div className="cap-h">FX translation</div><div className="cap-p">ASC 830 revaluation, IS at average / BS at spot, CTA to AOCI.</div></div>
            <div className="cap"><div className="cap-k">ledger.flux_analysis</div><div className="cap-h">Flux review</div><div className="cap-p">Variance investigation on anything moving more than 5%.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs the alternatives</span><h2 className="h2">The close — Aleq does the work.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">governed controller</span></div>
              <div className="vco-sub">Closes the books, continuously, signed.</div>
              <ul><li>Drafts every close entry — accruals, FX, eliminations</li><li>Runs the checklist itself and ties out the subledgers</li><li>Continuous close, not an 8-day fire drill</li><li>Seals the period — signed, replayable</li></ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>NetSuite</h3><span className="vco-cat">legacy ERP</span></div>
              <div className="vco-sub">Records the close. You run it.</div>
              <ul><li>You and your team work the checklist</li><li>Entries are manual; the ERP stores them</li><li>Close is a month-end project</li><li>Audit trail is manual sign-off</li></ul>
            </article>
          </div>
          <div className="matrix-wrap reveal" style={{ marginTop: "34px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            <table className="matrix" style={{ minWidth: "520px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">NetSuite</span></th></tr></thead>
              <tbody><tr><th>Drafts the close entries</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Runs the checklist itself</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">you operate</span></td></tr><tr><th>Continuous close</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Signed period seal</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">manual</span></td></tr><tr><th>Time to live</th><td className="m-aleq"><b>48 hours</b></td><td>3–6 months</td></tr></tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an unsigned period.</h2>
          <p className="lead">We&apos;ll connect read-only, run the checklist on your real books, and produce a close packet — with the full signed trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
            <Link className="btn btn-lg" href="/packs">All scenario packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
