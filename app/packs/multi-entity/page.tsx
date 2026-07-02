import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-entity consolidation — scenario pack",
  description:
    "The consolidation pack: intercompany eliminations, ASC 830 translation, FX revaluation, subsidiary outreach, group tie-outs, and group reporting — run continuously across entities, eval-gated at 0.93.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container pk-hero-inner">
          <div className="pk-hero-copy">
            <span className="pk-dom">multi pack</span>
            <h1 className="h1">Six entities, three currencies — one clean consolidation.</h1>
            <p className="lead">Aleq nets the intercompany matrix, runs ASC 830 translation, revalues FX with the CTA routed to AOCI, posts the eliminations, and ties out the group. When a subsidiary side is missing or a variance won&apos;t net, it chases the right controller and flags exactly what&apos;s off.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Consolidate your real group with us</Link>
              <Link className="btn btn-lg" href="/work/multi-entity">See it in detail →</Link>
            </div>
          </div>
          <div className="pk-score reveal">
            <div className="pks-v">0.93</div>
            <div className="pks-l">eval score · grade A</div>
            <div className="pks-gate">12 scenarios · 8 capabilities<br />gate ≥ 0.90 · pass</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="kbar reveal">
            <div className="kc"><div className="kc-v">6</div><div className="kc-l">Entities consolidated</div></div>
            <div className="kc"><div className="kc-v">3</div><div className="kc-l">Reporting currencies</div></div>
            <div className="kc"><div className="kc-v">100<span className="u">%</span></div><div className="kc-l">Intercompany matched</div></div>
            <div className="kc"><div className="kc-v">CTA</div><div className="kc-l">Routed to AOCI 3050</div></div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead"><span className="eyebrow">period 2026-04 · group close</span><h2 className="h2">The intercompany matrix, netted both sides.</h2><p className="lead">Each leg carries the two sides, the amount, and whether it nets. Matched legs eliminate automatically; a missing counterparty side or an amount mismatch is flagged before consolidation.</p></div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="surface-title">Intercompany matrix · group</span><span className="surface-meta">5 legs · 2 flagged</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Leg</th><th>Type</th><th className="num">Amount</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td>US → MX</td><td className="acct">mgmt fee</td><td className="num">$124,400</td><td><span className="pill pill-ok">matched</span></td></tr>
                  <tr><td>MX → US</td><td className="acct">royalty</td><td className="num">$84,200</td><td><span className="pill pill-ok">matched</span></td></tr>
                  <tr><td>US → UK</td><td className="acct">IP license</td><td className="num">$142,000</td><td><span className="pill pill-ok">matched</span></td></tr>
                  <tr className="hot"><td>UK → US</td><td className="acct">R&amp;D</td><td className="num">$88,400</td><td><span className="pill pill-warn">UK side missing</span></td></tr>
                  <tr className="hot"><td>DE → US</td><td className="acct">commission $42,100 vs $41,800</td><td className="num neg">$300</td><td><span className="pill pill-bad">variance</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> 3 netted · 1 missing side · 1 variance · every elimination ed25519 signed</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">it runs the translation</div>
              <div className="f-h">ASC 830, done right: income statement at average, balance sheet at spot, CTA to AOCI.</div>
              <p className="f-p">Aleq revalued the foreign subs under ASC 830 — IS at the period-average rate, BS at the spot rate — and routed the cumulative translation adjustment to AOCI account 3050. MX revalued −$8,420 (JE-12482, signed); UK +$1,840 (JE-12483, signed). The matched intercompany legs eliminated through ELIM-001, Dr 5210 / Cr 5310, under P-INTERCO-NET at 0.99.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">FX revaluation · Apr 2026</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>REV-2026-04-001 · MX</td><td className="mono">JE-12482</td><td className="num neg">−$8,420</td><td><span className="pill pill-info">signed</span></td></tr>
                    <tr><td>REV-2026-04-001 · UK</td><td className="mono">JE-12483</td><td className="num pos">+$1,840</td><td><span className="pill pill-info">signed</span></td></tr>
                    <tr><td>CTA → AOCI 3050</td><td className="acct">ASC 830</td><td className="num">−$6,580</td><td><span className="pill pill-ok">posted</span></td></tr>
                    <tr><td>Elimination · ELIM-001</td><td><span className="je-side dr">DR 5210</span></td><td><span className="je-side cr">CR 5310</span></td><td><span className="pill pill-ok">0.99</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> P-INTERCO-NET · CTA to AOCI · entries ed25519 signed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">in this pack</span><h2 className="h2">Eight capabilities, twelve scenarios.</h2></div>
          <div className="capgrid reveal">
            <div className="cap"><div className="cap-k">consolidation.eliminations</div><div className="cap-h">Intercompany eliminations</div><div className="cap-p">Matched legs netted and eliminated under a signed netting policy.</div></div>
            <div className="cap"><div className="cap-k">multicurrency.run_revaluation</div><div className="cap-h">FX revaluation</div><div className="cap-p">Period revaluation with the CTA isolated and routed to AOCI.</div></div>
            <div className="cap"><div className="cap-k">consolidation.contact_subsidiary</div><div className="cap-h">Subsidiary outreach</div><div className="cap-p">Missing sides and mismatches chased to the right local controller.</div></div>
            <div className="cap"><div className="cap-k">consolidation.translate</div><div className="cap-h">ASC 830 translation</div><div className="cap-p">IS at average, BS at spot, applied per line across the group.</div></div>
            <div className="cap"><div className="cap-k">ledger.tieout</div><div className="cap-h">Group tie-outs</div><div className="cap-p">Entity subledgers tied to the consolidated GL before reporting.</div></div>
            <div className="cap"><div className="cap-k">consolidation.group_report</div><div className="cap-h">Group reporting</div><div className="cap-p">Consolidated statements assembled with the full elimination trail.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs the alternatives</span><h2 className="h2">Multi-entity — Aleq does the work.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">governed controller</span></div>
              <div className="vco-sub">Matches, revalues, eliminates — one clean group.</div>
              <ul><li>Auto-matches intercompany across every entity</li><li>Revalues FX under ASC 830 — IS at average, BS at spot</li><li>Posts the eliminations, not just tracks them</li><li>Every entry traces back to its source</li></ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>NetSuite</h3><span className="vco-cat">legacy ERP</span></div>
              <div className="vco-sub">Stores the entities. You consolidate.</div>
              <ul><li>Consolidation module — you operate it</li><li>FX and eliminations are manual setup</li><li>Intercompany matched by hand</li><li>Audit trail is manual</li></ul>
            </article>
          </div>
          <div className="matrix-wrap reveal" style={{ marginTop: "34px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            <table className="matrix" style={{ minWidth: "520px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">NetSuite</span></th></tr></thead>
              <tbody><tr><th>Intercompany auto-match</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">manual</span></td></tr><tr><th>FX revaluation · ASC 830</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">setup</span></td></tr><tr><th>Eliminations posted</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">manual</span></td></tr><tr><th>One consolidated view</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr><tr><th>Time to live</th><td className="m-aleq"><b>48 hours</b></td><td>3–6 months</td></tr></tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring your group structure.</h2>
          <p className="lead">We&apos;ll connect read-only, net the intercompany matrix on your real entities, run the translation, and hand you a consolidated set — with the full signed trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
            <Link className="btn btn-lg" href="/packs">All scenario packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
