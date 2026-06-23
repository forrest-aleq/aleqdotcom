import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleq vs. Sage Intacct — autonomous controller vs. finance system",
  description:
    "Sage Intacct is a finance system your team operates. Aleq is the autonomous controller that reconciles, posts, collects, and explains the work.",
};

export default function Page() {
  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos"><span className="vs-logo">Aleq</span><span className="vs-x">vs.</span><span className="vs-logo them">Sage Intacct</span></div>
          <h1 className="h1">Sage Intacct gives finance a system. Aleq gives finance an operator.</h1>
          <p className="lead">Intacct can store dimensions, approvals, reports, and journals. Aleq does the controller work on top: reconcile, investigate, post, collect, and leave the receipt.</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">Sage Intacct is where the work is recorded. <b>Aleq is the worker</b> that completes the close, explains the decisions, and stops at your policy gates.</div>
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
                <li>Matches transactions, drafts entries, posts approved work</li>
                <li>Explains why every action happened and what changed</li>
                <li>Starts read-only, then earns Assist and Auto by capability</li>
                <li>Billed by work performed, not seats</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Sage Intacct</h3><span className="vco-cat">finance system</span></div>
              <div className="vco-sub">Organizes the work; your team operates it.</div>
              <ul>
                <li>Strong dimensional accounting and reporting</li>
                <li>Month-end still depends on people running the workflow</li>
                <li>Exception resolution, entries, and evidence assembly stay manual</li>
                <li>Pricing and implementation are software-led</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">head to head</span><h2 className="h2">Where they differ.</h2></div>
          <div className="matrix-wrap reveal">
            <table className="matrix" style={{ minWidth: "540px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">Sage Intacct</span></th></tr></thead>
              <tbody>
                <tr><th>Does the close work itself</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">workflow</span></td></tr>
                <tr><th>Autonomy per capability</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Explains every action</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">audit log</span></td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Best role</th><td className="m-aleq"><b>controller labor</b></td><td>system of record</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">leaving the manual work</span><h2 className="h2">Live in 48 hours, alongside Intacct.</h2><p className="lead">No re-implementation. Aleq connects read-only and starts proving itself against the books you already keep.</p></div>
          <div className="vs-migrate reveal">
            <div className="vm-step"><div className="vm-n">01</div><div className="vm-h">Connect read-only</div><div className="vm-p">Aleq reads Sage Intacct and your feeds with read-only access. Nothing changes.</div></div>
            <div className="vm-step"><div className="vm-n">02</div><div className="vm-h">Replay a period</div><div className="vm-p">It re-closes a month you've already signed and shows every step.</div></div>
            <div className="vm-step"><div className="vm-n">03</div><div className="vm-h">Start in Assist</div><div className="vm-p">Aleq proposes; you approve. Move proven work to automatic on your timeline.</div></div>
            <div className="vm-step"><div className="vm-n">04</div><div className="vm-h">Keep Intacct</div><div className="vm-p">Aleq operates on top — keep Intacct as the system, or migrate later.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">"Intacct gave us a solid system. Aleq gave us the person to <b>operate it</b> — closing, reconciling, and signing every move."</div>
            <div className="vp-cite">— the case for an operator over a console</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Keep the finance system. Replace the manual work.</h2>
          <p className="lead">Connect read-only and watch Aleq close a real month against your existing books.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">All comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
