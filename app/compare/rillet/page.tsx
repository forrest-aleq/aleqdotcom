import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. Rillet — autonomous controller vs. AI-native ERP",
  description:
    "Rillet modernized the ledger and pointed it at SaaS rev rec. Aleq runs the ledger for you — across hardware, services, marketplaces, and multi-entity — and gates and signs every move.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos">
            <span className="vs-logo">Aleq</span>
            <span className="vs-x">vs.</span>
            <span className="vs-logo them">Rillet</span>
          </div>
          <h1 className="h1">Rillet modernized the ledger. Aleq runs it for you.</h1>
          <p className="lead">Rillet is an AI-native ERP, built for SaaS billing and revenue recognition — and entirely operated by you. Aleq is the controller that does the work across every vertical, and gates, signs, and reverses every move.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">Rillet modernized the ledger and pointed it at SaaS rev rec. <b>Aleq runs the ledger for you</b> — across hardware, services, marketplaces, and multi-entity — and gates and signs every move.</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingTop: "24px" }}>
        <div className="container">
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">autonomous controller</span></div>
              <div className="vco-sub">Does the work; you supervise.</div>
              <ul>
                <li>Does the work autonomously, you supervise — closes, reconciles, collects</li>
                <li>Every vertical — hardware, services, marketplaces — not just subscription</li>
                <li>Governed autonomy: approval gates plus 30-second undo</li>
                <li>Every action signed, replayable, and reversible</li>
                <li>Collections by voice, in your name</li>
                <li>Billed by the hour worked — $60/hr, no platform fee</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Rillet</h3><span className="vco-cat">AI-native ERP · SaaS</span></div>
              <div className="vco-sub">You operate the platform; AI assists.</div>
              <ul>
                <li>You operate the platform — AI assists, you do the work</li>
                <li>Built around SaaS billing and ASC 606 revenue recognition</li>
                <li>No autonomous execution of the work</li>
                <li>Narrower integration ecosystem</li>
                <li>No collections execution</li>
                <li>Platform pricing; young company (~60 people)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">head to head</span><h2 className="h2">Where they actually differ.</h2></div>
          <div className="matrix-wrap reveal">
            <table className="matrix" style={{ minWidth: "540px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">Rillet</span></th></tr></thead>
              <tbody>
                <tr><th>Does the work end to end</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">you operate it</span></td></tr>
                <tr><th>Autonomous &amp; governed (gates, undo)</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Verticals</th><td className="m-aleq"><b>any</b></td><td>SaaS-first</td></tr>
                <tr><th>Action-level audit trail</th><td className="m-aleq"><span className="yes">✓ signed</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">moving from Rillet</span><h2 className="h2">From a SaaS ledger to a controller, in 48 hours.</h2><p className="lead">No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads Rillet and your feeds with read-only credentials. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a period</div><div className="vm-p">It re-closes a month you've already signed and shows you every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to Auto on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Expand beyond SaaS rev rec</div><div className="vm-p">Add hardware, services, marketplaces, and multi-entity — Aleq does the work.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"We outgrew subscription-only accounting — entities, currencies, mixed revenue. We needed the work <b>done, checked, and signed</b>, not a nicer place to operate."</div>
            <div className="vp-cite">— the case for a controller over a console</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Past pure SaaS? Bring the books.</h2>
          <p className="lead">If you've outgrown subscription-only accounting — entities, currencies, mixed revenue — Aleq does the work Rillet leaves to you.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">See all comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
