import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. NetSuite — autonomous controller vs. legacy ERP",
  description:
    "NetSuite stores the close; you still do it. Aleq does the close — and is more auditable than the system of record. Live in 48 hours, no consultants, billed by the hour worked.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos">
            <span className="vs-logo">Aleq</span>
            <span className="vs-x">vs.</span>
            <span className="vs-logo them">NetSuite</span>
          </div>
          <h1 className="h1">The ERP stores your close. Aleq does it.</h1>
          <p className="lead">NetSuite is the system of record — powerful, and entirely operated by you and a bench of consultants. Aleq is the controller that operates the books for you, and leaves a trail more auditable than the ledger itself.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">NetSuite gives you the most configurable place in the world to <em>record</em> the work. <b>Aleq does the work</b> — closes, reconciles, collects — and signs every move so your auditor can replay it.</div>
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
                <li>Closes, reconciles, and collects end to end — autonomously, governed</li>
                <li>Live in 48 hours, read-only credentials, no implementation project</li>
                <li>Every action signed, gated, replayable, and reversible</li>
                <li>Eval-gated before any change touches your books</li>
                <li>Billed by the hour worked — $60/hr, no seats, no platform fee</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>NetSuite</h3><span className="vco-cat">legacy ERP</span></div>
              <div className="vco-sub">Stores the work; you operate it.</div>
              <ul>
                <li>You and your team do the close — NetSuite records it</li>
                <li>$50k–200k and 3–6 months of consultants to implement</li>
                <li>Audit trail is manual; no action-level signing or one-click undo</li>
                <li>No autonomous execution, no collections by voice</li>
                <li>Seat licenses plus platform and module fees</li>
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
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">NetSuite</span></th></tr></thead>
              <tbody>
                <tr><th>Does the work end to end</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">you operate it</span></td></tr>
                <tr><th>Autonomous &amp; governed (gates, undo)</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Action-level audit trail</th><td className="m-aleq"><span className="yes">✓ signed</span></td><td><span className="part">manual</span></td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Time to live</th><td className="m-aleq"><b>48 hours</b></td><td>3–6 months</td></tr>
                <tr><th>Pricing model</th><td className="m-aleq"><b>$/hr worked</b></td><td>seats + platform</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">leaving NetSuite</span><h2 className="h2">From system of record to live, in 48 hours.</h2><p className="lead">No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads NetSuite and your feeds with read-only credentials. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a period</div><div className="vm-p">It re-closes a month you've already signed and shows you every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to Auto on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Keep your ERP</div><div className="vm-p">Aleq operates on top — keep NetSuite as the store, or migrate later.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"We didn't need a more configurable place to type the journal entry. We needed the entry <b>made, checked, and signed</b> — by morning."</div>
            <div className="vp-cite">— the case for a controller over a console</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Still doing the close inside NetSuite?</h2>
          <p className="lead">Bring an unsigned period. We'll connect read-only and close it — with the full signed trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">See all comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
