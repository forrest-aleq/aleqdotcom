import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. QuickBooks — autonomous controller vs. accounting forms",
  description:
    "QuickBooks is a familiar accounting system. Aleq is the autonomous controller that does the reconciliation, close, AP, and collections work around it.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos"><span className="vs-logo">Aleq</span><span className="vs-x">vs.</span><span className="vs-logo them">QuickBooks</span></div>
          <h1 className="h1">QuickBooks is where the forms live. Aleq is the controller doing the work.</h1>
          <p className="lead">QuickBooks is familiar because people know how to operate it. Aleq replaces the manual operating work: match the bank, post the entry, chase the invoice, and explain the result.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">QuickBooks gives you accounting forms. <b>Aleq fills the work gap</b> around them with governed, explainable finance labor.</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingTop: "24px" }}>
        <div className="container">
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">autonomous controller</span></div>
              <div className="vco-sub">Does the repetitive finance work.</div>
              <ul>
                <li>Reconciles bank and card activity continuously</li>
                <li>Drafts and posts journal entries with evidence attached</li>
                <li>Calls or emails customers for collections</li>
                <li>Escalates when the policy or confidence says stop</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>QuickBooks</h3><span className="vco-cat">accounting system</span></div>
              <div className="vco-sub">Stores the books; people do the work.</div>
              <ul>
                <li>Bank rules and forms still require human operation</li>
                <li>Close, AP, accruals, and collections are manual workflows</li>
                <li>Audit evidence is assembled after the fact</li>
                <li>Automation is rules-based, not judgment-aware</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">head to head</span><h2 className="h2">What changes when Aleq is doing the work.</h2></div>
          <div className="matrix-wrap reveal">
            <table className="matrix" style={{ minWidth: "540px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">QuickBooks</span></th></tr></thead>
              <tbody>
                <tr><th>Bank reconciliation</th><td className="m-aleq"><span className="yes">continuous</span></td><td>manual matching</td></tr>
                <tr><th>Journal entries</th><td className="m-aleq"><span className="yes">drafted or posted</span></td><td>human-entered</td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Explains why it acted</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">audit log</span></td></tr>
                <tr><th>Best role</th><td className="m-aleq"><b>finance operator</b></td><td>book of record</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">keep your books</span><h2 className="h2">Aleq works on top — keep QuickBooks.</h2><p className="lead">No migration, no rip-and-replace. Aleq connects read-only and does the operating work around the books you already keep.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads QuickBooks and your bank, card, and processor feeds. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a month</div><div className="vm-p">It re-reconciles and re-closes a month you've already done, and shows every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to automatic on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Keep QuickBooks</div><div className="vm-p">QuickBooks stays your book of record. Aleq does the operating work around it.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"We didn't need to leave QuickBooks. We needed the work around it — the matching, the chasing, the entries — <b>done and explained</b>."</div>
            <div className="vp-cite">— the case for an operator over another login</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Keep the books. Remove the manual work.</h2>
          <p className="lead">Connect read-only and watch Aleq reconcile, explain, and stage entries against a real month.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">All comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
