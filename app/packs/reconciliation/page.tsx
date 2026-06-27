import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bank & card reconciliation — scenario pack",
  description:
    "The recon pack: period reconciliation, transaction matching, exception investigation, rule-writing, duplicate detection, and sealed journals — run continuously to a $0.00 variance, eval-gated at 0.97.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container pk-hero-inner">
          <div className="pk-hero-copy">
            <span className="pk-dom">recon pack</span>
            <h1 className="h1">It reconciles to zero — and tells you why, line by line.</h1>
            <p className="lead">Aleq matches every bank and card line to the ledger, investigates the exceptions, writes the durable rules so they never come back, and seals the journal. When a variance won&apos;t close on its own, it traces the cause and drafts the entry — then drives the period to $0.00.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Reconcile a real account with us</Link>
              <Link className="btn btn-lg" href="/work/reconciliation">See it in detail →</Link>
            </div>
          </div>
          <div className="pk-score reveal">
            <div className="pks-v">0.97</div>
            <div className="pks-l">eval score · grade A</div>
            <div className="pks-gate">9 scenarios · 5 capabilities<br />gate ≥ 0.90 · pass</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="kbar reveal">
            <div className="kc"><div className="kc-v">$0.00</div><div className="kc-l">Closing variance</div></div>
            <div className="kc"><div className="kc-v">2,261</div><div className="kc-l">Lines matched this period</div></div>
            <div className="kc"><div className="kc-v">99.5<span className="u">%</span></div><div className="kc-l">First-pass match rate</div></div>
            <div className="kc"><div className="kc-v">9</div><div className="kc-l">Scenarios in this pack</div></div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead"><span className="eyebrow">period 2026-04 · feed live</span><h2 className="h2">Every line, matched or explained.</h2><p className="lead">Each transaction carries a counterparty, the ledger match, a confidence score, and how it cleared. Tier 1 matches run signed; exceptions are investigated; duplicates and fees are caught before they post.</p></div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="surface-title">Bank feed · JPMC ••4421</span><span className="surface-meta">2,261 matched · 4 exceptions</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Transaction</th><th>Match</th><th className="num">Conf</th><th>How</th></tr></thead>
                <tbody>
                  <tr><td>BT-9001 · ACH RAMP $88,400</td><td className="mono">INV-7819</td><td className="num">1.00</td><td><span className="pill pill-ok">100%</span></td></tr>
                  <tr><td>BT-9003 · WIRE FOXCONN −$188,440</td><td className="mono">B-3051</td><td className="num">0.99</td><td><span className="pill pill-ok">99%</span></td></tr>
                  <tr><td>BT-9004 · AWS −$88,440</td><td className="mono">B-3041</td><td className="num">0.98</td><td><span className="pill pill-ok">98%</span></td></tr>
                  <tr className="hot"><td>BT-9010 · STRIPE payout</td><td className="acct">duplicate possible</td><td className="num">0.61</td><td><span className="pill pill-warn">review</span></td></tr>
                  <tr><td>BT-9009 · CHASE WIRE FEE −$45</td><td className="mono">bank.write_rule</td><td className="num">0.97</td><td><span className="pill pill-info">rule</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> 2,261 matched · 1 rule written · 1 exception open · every match ed25519 signed</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">it closes the variance</div>
              <div className="f-h">A $17,488 gap on JPMC ••4421. Aleq found both causes and posted the fix.</div>
              <p className="f-p">The account wouldn&apos;t tie. Aleq traced the variance to two roots — an unaccrued payroll-tax draft and a duplicate Stripe payout that hit twice — drafted the correcting entry, posted JE-12491 under P-RECON-DIFF-ZERO, and drove the period to $0.00. The duplicate is now a standing rule, so it never reopens.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Variance trace · JPMC ••4421</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>Opening variance</td><td className="acct">unreconciled</td><td className="num neg">$17,488</td></tr>
                    <tr><td>Payroll-tax draft</td><td><span className="je-side dr">DR 6120</span></td><td className="num">$8,420</td></tr>
                    <tr><td>Duplicate Stripe payout</td><td><span className="je-side cr">CR 1010</span></td><td className="num">$9,068</td></tr>
                    <tr><td>JE-12491 posted</td><td className="acct">P-RECON-DIFF-ZERO</td><td><span className="pill pill-info">signed</span></td></tr>
                    <tr><td>Closing variance</td><td className="acct">reconciled</td><td className="num pos">$0.00</td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> VARIANCE CLEARED · JE-12491 · ed25519 signed · reversible 14 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">in this pack</span><h2 className="h2">Five capabilities, nine scenarios.</h2></div>
          <div className="capgrid reveal">
            <div className="cap"><div className="cap-k">bank.reconcile_period</div><div className="cap-h">Period reconciliation</div><div className="cap-p">Whole-account reconciliation driven to a $0.00 closing variance.</div></div>
            <div className="cap"><div className="cap-k">bank.match_transactions</div><div className="cap-h">Transaction matching</div><div className="cap-p">Bank and card lines matched to the ledger at 99.5% first-pass.</div></div>
            <div className="cap"><div className="cap-k">bank.investigate_exception</div><div className="cap-h">Exception investigation</div><div className="cap-p">Unmatched lines traced to root cause, not just flagged.</div></div>
            <div className="cap"><div className="cap-k">bank.write_rule</div><div className="cap-h">Rule-writing</div><div className="cap-p">Recurring fees and patterns captured as durable matching rules.</div></div>
            <div className="cap"><div className="cap-k">bank.flag_duplicate</div><div className="cap-h">Duplicate detection</div><div className="cap-p">Double payouts and re-presented charges caught before they post.</div></div>
            <div className="cap"><div className="cap-k">bank.seal_journal</div><div className="cap-h">Sealed journals</div><div className="cap-p">Posted entries sealed and ed25519 signed, reversible for 14 days.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs the alternatives</span><h2 className="h2">Reconciliation — Aleq does the work.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">autonomous controller</span></div>
              <div className="vco-sub">Reconciles, end to end. You wake to $0.00.</div>
              <ul><li>Matches every line to its source — exact, fuzzy, many-to-one</li><li>Investigates the exceptions and posts the reconciling entry</li><li>Signs the journal — one-click reversible</li><li>Runs continuously, not a month-end scramble</li></ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>BlackLine</h3><span className="vco-cat">close software</span></div>
              <div className="vco-sub">Tracks the reconciliation. You still match.</div>
              <ul><li>Templates and checklists — you work each item</li><li>Flags exceptions back to you; nothing posts itself</li><li>Sign-off is manual</li><li>Built around the month-end cycle</li></ul>
            </article>
          </div>
          <div className="matrix-wrap reveal" style={{ marginTop: "34px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            <table className="matrix" style={{ minWidth: "520px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">BlackLine</span></th></tr></thead>
              <tbody><tr><th>Does the matching itself</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">templates</span></td></tr><tr><th>Posts the reconciling entry</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Signed &amp; one-click reversible</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">manual</span></td></tr><tr><th>Continuous, not month-end</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Time to live</th><td className="m-aleq"><b>48 hours</b></td><td>weeks</td></tr></tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an account that won&apos;t tie.</h2>
          <p className="lead">We&apos;ll connect read-only, reconcile a real period on your books, and hand you a $0.00 variance with the trace, the entries, and the full signed trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/packs">All scenario packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
