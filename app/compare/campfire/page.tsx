import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. Campfire — act on your books vs. ask about them",
  description:
    "Campfire lets you ask about your books. Aleq acts on them — gated, reversible, signed — then tells you exactly what it did. Live in 48 hours, billed by the hour worked.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos">
            <span className="vs-logo">Aleq</span>
            <span className="vs-x">vs.</span>
            <span className="vs-logo them">Campfire</span>
          </div>
          <h1 className="h1">Campfire answers your books. Aleq acts on them.</h1>
          <p className="lead">Campfire is an AI-native ERP with an ask-and-answer layer — "Slack for accounting." Aleq is the controller that does the work: gated, reversible, signed — then tells you exactly what it did.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">Campfire lets you <em>ask</em> about your books. <b>Aleq acts on them</b> — gated, reversible, signed — then tells you exactly what it did.</div>
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
                <li>Does the work — closes, reconciles, collects — not just answers</li>
                <li>Acts on the books, doesn't only answer questions about them</li>
                <li>Governed autonomy: approval gates plus 30-second undo</li>
                <li>Every action signed, replayable, and reversible</li>
                <li>Collections by voice, in your name</li>
                <li>Billed by the hour worked — $/hr, no platform fee</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Campfire</h3><span className="vco-cat">AI-native ERP · ask &amp; answer</span></div>
              <div className="vco-sub">Answers about the work; you do it.</div>
              <ul>
                <li>Ask questions about your books in plain English</li>
                <li>You still do the work the answer implies</li>
                <li>Conversational, not autonomous execution</li>
                <li>No signed, action-level audit trail</li>
                <li>No collections execution</li>
                <li>Platform pricing</li>
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
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">Campfire</span></th></tr></thead>
              <tbody>
                <tr><th>Does the work end to end</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">ask only</span></td></tr>
                <tr><th>Acts vs. answers</th><td className="m-aleq"><span className="yes">✓ acts</span></td><td><span className="part">answers</span></td></tr>
                <tr><th>Autonomous &amp; governed (gates, undo)</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Signed audit trail</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">moving from Campfire</span><h2 className="h2">From asking about the books to acting on them, in 48 hours.</h2><p className="lead">No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads Campfire and your feeds with read-only credentials. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a period</div><div className="vm-p">It re-closes a month you've already signed and shows you every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to Auto on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Move from asking to acting</div><div className="vm-p">Stop querying the books and start delegating the work — gated and signed.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"Answering questions about the books isn't doing the books. We needed the entry <b>made, checked, and signed</b> — not a chat that tells us what to type."</div>
            <div className="vp-cite">— the case for a controller over a console</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Stop asking. Start delegating.</h2>
          <p className="lead">A conversational layer tells you what's wrong. Aleq fixes it — gated, reversible, and on the record.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">See all comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
