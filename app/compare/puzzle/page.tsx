import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. Puzzle — the controller vs. the AI general ledger",
  description:
    "Puzzle keeps clean books for a small company. Aleq is the controller you'd otherwise hire — close, collections, multi-entity, tax, and audit — governed, reversible, and signed.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos">
            <span className="vs-logo">Aleq</span>
            <span className="vs-x">vs.</span>
            <span className="vs-logo them">Puzzle</span>
          </div>
          <h1 className="h1">Puzzle keeps the books. Aleq is the controller.</h1>
          <p className="lead">Puzzle is an AI general ledger for startups — clean books with auto-categorization. Aleq is the controller you'd otherwise hire: close, collections, multi-entity, tax, and audit — governed and signed.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">Puzzle keeps clean books for a small company. <b>Aleq is the controller</b> — close, collections, multi-entity, audit — you'd otherwise hire.</div>
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
                <li>Full controller scope — close, AP, collections, multi-entity, tax, audit</li>
                <li>Autonomous and governed: approval gates plus 30-second undo</li>
                <li>Every action signed, reversible, and replayable</li>
                <li>Collections by voice, in your name</li>
                <li>Multi-entity and multi-currency consolidation</li>
                <li>Scales well past startup and SMB</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Puzzle</h3><span className="vco-cat">AI general ledger · startups</span></div>
              <div className="vco-sub">Keeps the books; you do the rest.</div>
              <ul>
                <li>Clean GL plus auto-categorization for startups</li>
                <li>Bookkeeping scope, not controller scope</li>
                <li>You or your accountant still do the close</li>
                <li>Single-entity focus</li>
                <li>No collections execution</li>
                <li>SMB tier pricing — $/mo</li>
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
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">Puzzle</span></th></tr></thead>
              <tbody>
                <tr><th>Scope</th><td className="m-aleq"><b>full controller</b></td><td>GL / bookkeeping</td></tr>
                <tr><th>Does the close</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Multi-entity &amp; FX</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">limited</span></td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Signed audit trail</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">growing past Puzzle</span><h2 className="h2">From clean books to a controller, in 48 hours.</h2><p className="lead">No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads Puzzle and your feeds with read-only credentials. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a period</div><div className="vm-p">It re-closes a month you've already signed and shows you every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to Auto on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Graduate from bookkeeping</div><div className="vm-p">Add close, collections, multi-entity, and audit — the controller's job.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"Clean books are the floor; a controller is the job. We needed the close <b>done, checked, and signed</b> — not just a tidy ledger to read."</div>
            <div className="vp-cite">— the case for a controller over a console</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Outgrowing bookkeeping?</h2>
          <p className="lead">Keep Puzzle's clean ledger if you like it. Aleq is the controller that does the work it can't.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">See all comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
