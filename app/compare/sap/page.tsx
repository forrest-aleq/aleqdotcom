import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. SAP — autonomous controller vs. enterprise ERP",
  description:
    "SAP is an enterprise system of record. Aleq is the autonomous controller that runs finance work on top of the systems you already have.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos"><span className="vs-logo">Aleq</span><span className="vs-x">vs.</span><span className="vs-logo them">SAP</span></div>
          <h1 className="h1">SAP is the enterprise backbone. Aleq is the controller that gets the work done.</h1>
          <p className="lead">SAP is powerful infrastructure. Aleq is not trying to be another ERP migration. It operates finance workflows against the ledger, evidence, approvals, and policies you already have.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">SAP is where enterprise finance data lives. <b>Aleq is the autonomous controller</b> that reconciles, investigates, drafts, posts, and explains the work.</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingTop: "24px" }}>
        <div className="container">
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">autonomous controller</span></div>
              <div className="vco-sub">Runs finance work around the system of record.</div>
              <ul>
                <li>Works from read-only evidence before any write access</li>
                <li>Automates routine close, recon, AP, and collections work</li>
                <li>Stops at material policy gates and explains the decision</li>
                <li>Leaves signed, replayable action receipts</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>SAP</h3><span className="vco-cat">enterprise ERP</span></div>
              <div className="vco-sub">A durable system; still operated by teams.</div>
              <ul>
                <li>Deep enterprise process coverage and configurability</li>
                <li>Implementation and change management are major projects</li>
                <li>Close execution still depends on people and workflows</li>
                <li>Action explanation is not the product center</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">head to head</span><h2 className="h2">The useful comparison.</h2></div>
          <div className="matrix-wrap reveal">
            <table className="matrix" style={{ minWidth: "540px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">SAP</span></th></tr></thead>
              <tbody>
                <tr><th>ERP replacement required</th><td className="m-aleq"><span className="yes">No</span></td><td>It is the ERP</td></tr>
                <tr><th>Does finance work itself</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">workflow</span></td></tr>
                <tr><th>Per-action explanation</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">logs</span></td></tr>
                <tr><th>Autonomy gates</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Best role</th><td className="m-aleq"><b>operator layer</b></td><td>system backbone</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">no rip-and-replace</span><h2 className="h2">Aleq runs beside SAP, live in 48 hours.</h2><p className="lead">Keep the enterprise backbone. Aleq connects read-only and operates the controller-level work on top.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads SAP and your feeds with read-only access. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a period</div><div className="vm-p">It re-closes a month you've already signed and shows every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to automatic on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Keep SAP</div><div className="vm-p">SAP stays the system of record. Aleq does the operating work beside it.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"We weren't going to replace SAP. We needed the close <b>done and signed</b> on top of it — without another consulting project."</div>
            <div className="vp-cite">— the case for an operator over a backbone</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Put Aleq beside the system you already trust.</h2>
          <p className="lead">We start read-only, replay a period, and show the actions before anything writes back.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">All comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
