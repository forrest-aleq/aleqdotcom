import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audit-ready evidence — scenario pack",
  description:
    "The evidence pack: a signed trail on every action, period replay, PBC bundles, and one-click auditor export — ed25519 signed end to end, eval-gated at 0.98.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container pk-hero-inner">
          <div className="pk-hero-copy">
            <span className="pk-dom">audit pack</span>
            <h1 className="h1">Every action signed. Every period replayable. Hand your auditor a replay, not a shrug.</h1>
            <p className="lead">Aleq signs every action with ed25519 as it happens, so the evidence is built before anyone asks for it. Replay any period exactly as it ran, bundle the PBC list, and export the whole close package to your auditor in one click.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Replay a real period with us</Link>
              <Link className="btn btn-lg" href="/work/close">See it in detail →</Link>
            </div>
          </div>
          <div className="pk-score reveal">
            <div className="pks-v">0.98</div>
            <div className="pks-l">eval score · grade A</div>
            <div className="pks-gate">8 scenarios · 5 capabilities<br />gate ≥ 0.90 · pass</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="kbar reveal">
            <div className="kc"><div className="kc-v">Policy</div><div className="kc-l">Retention follows your controls</div></div>
            <div className="kc"><div className="kc-v">ed25519</div><div className="kc-l">Every action signed</div></div>
            <div className="kc"><div className="kc-v">14<span className="u">days</span></div><div className="kc-l">Reverse window per entry</div></div>
            <div className="kc"><div className="kc-v">8</div><div className="kc-l">Scenarios in this pack</div></div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead"><span className="eyebrow">period 2026-03 · sealed</span><h2 className="h2">A signed receipt behind every action.</h2><p className="lead">Each receipt carries the action, what it touched, and its state. Auto actions are ed25519 signed as they run; entries stay reversible for 14 days; the period seal is pinned to S3 and offsite.</p></div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="surface-title">Evidence trail · 2026-03</span><span className="surface-meta">all signed · seal pinned</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Receipt</th><th>Action</th><th>Touched</th><th>State</th></tr></thead>
                <tbody>
                  <tr><td className="mono">a_19d4</td><td>May reconciliation</td><td className="mono">JE-12491</td><td><span className="pill pill-ok">reversible</span></td></tr>
                  <tr><td className="mono">a_19c8</td><td>Dunning — Haven Foods</td><td className="acct">logged</td><td><span className="pill pill-info">signed</span></td></tr>
                  <tr><td className="mono">a_1a02</td><td>AWS bill auto-posted</td><td className="mono">B-3041</td><td><span className="pill pill-ok">reversible</span></td></tr>
                  <tr className="hot"><td className="acct">period seal · 2026-03</td><td>ed25519 pinned</td><td className="acct">S3 + offsite</td><td><span className="pill pill-warn">sealed</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> every action ed25519 signed · period seal pinned S3 + offsite</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">it hands the auditor a replay</div>
              <div className="f-h">The close package is already emailed to audit@pwc.com — replayable to the keystroke.</div>
              <p className="f-p">When PwC LLP asked for support, there was nothing to assemble. Aleq had already signed every action with ed25519 as it ran, so the close package — statements, JEs, receipts, and the seal — went to audit@pwc.com in one click. Hand your auditor a replay, not a shrug: any period reruns exactly as it happened, with the seal hash pinned at 0x4f3b…0eb4.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Close package · PwC LLP</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>Recipient</td><td className="acct">auditor</td><td className="mono">audit@pwc.com</td></tr>
                    <tr><td>Firm</td><td className="acct">engagement</td><td className="acct">PwC LLP</td></tr>
                    <tr><td>Action trail</td><td className="acct">retention</td><td className="num">policy-based</td></tr>
                    <tr><td>Signature scheme</td><td className="acct">every action</td><td className="acct">ed25519</td></tr>
                    <tr className="hot"><td>Seal hash</td><td className="acct">pinned</td><td className="mono">0x4f3b…0eb4</td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> SENT · replayable to the keystroke · ed25519 signed end to end</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">in this pack</span><h2 className="h2">Five capabilities, eight scenarios.</h2></div>
          <div className="capgrid reveal">
            <div className="cap"><div className="cap-k">evidence.signed_trail</div><div className="cap-h">Signed trail</div><div className="cap-p">Every action ed25519 signed the moment it happens.</div></div>
            <div className="cap"><div className="cap-k">evidence.period_replay</div><div className="cap-h">Period replay</div><div className="cap-p">Any period rerun exactly as it ran, to the keystroke.</div></div>
            <div className="cap"><div className="cap-k">evidence.pbc_bundle</div><div className="cap-h">PBC bundle</div><div className="cap-p">The prepared-by-client list assembled from the signed trail.</div></div>
            <div className="cap"><div className="cap-k">evidence.action_trail</div><div className="cap-h">Action trail</div><div className="cap-p">A signed action trail, retained by your policy and exportable for audit.</div></div>
            <div className="cap"><div className="cap-k">evidence.auditor_export</div><div className="cap-h">Auditor export</div><div className="cap-p">The full close package exported to your auditor in one click.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs the alternatives</span><h2 className="h2">Audit &amp; evidence — Aleq does the work.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">governed controller</span></div>
              <div className="vco-sub">Signed and replayable by default.</div>
              <ul><li>Every action signed — ed25519</li><li>The whole period replayable to the keystroke</li><li>Evidence trail on every entry</li><li>Period seal pinned offsite</li></ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>NetSuite</h3><span className="vco-cat">legacy ERP</span></div>
              <div className="vco-sub">Stores the records. You assemble the evidence.</div>
              <ul><li>No action-level signing</li><li>No period replay</li><li>Audit prep is manual assembly</li><li>Logs, but not immutable by default</li></ul>
            </article>
          </div>
          <div className="matrix-wrap reveal" style={{ marginTop: "34px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            <table className="matrix" style={{ minWidth: "520px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">NetSuite</span></th></tr></thead>
              <tbody><tr><th>Every action signed · ed25519</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Period replayable</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Evidence on every entry</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">manual</span></td></tr><tr><th>Policy-based retention</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">partial</span></td></tr></tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring a period your auditor will question.</h2>
          <p className="lead">We&apos;ll connect read-only, replay a real period on your books, and hand you the signed package — statements, entries, receipts, and the seal — exactly as your auditor would receive it, on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Close a month with us</Link>
            <Link className="btn btn-lg" href="/packs">All scenario packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
