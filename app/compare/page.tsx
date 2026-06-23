import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Compare — Aleq vs. NetSuite, Sage Intacct, SAP, QuickBooks, Rillet, Campfire, Puzzle",
  description:
    "Everyone else sells software you operate. Aleq is the autonomous controller that does the work. Compare Aleq against NetSuite, Rillet, Campfire, and Puzzle.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">compare</span>
          <h1 className="h1">Everyone else sells software. Aleq does the work.</h1>
          <p className="lead">NetSuite, Rillet, Campfire, Puzzle — even the AI-native ones are systems you operate. Aleq is the controller that operates them, and proves every move.</p>
        </div>
      </section>

      <section className="cmp-section">
        <div className="container">
          <div className="matrix-wrap">
            <table className="matrix matrix-wide">
              <thead>
                <tr>
                  <th></th>
                  <th className="m-aleq"><span className="m-brand">Aleq</span><span className="m-cat">autonomous controller</span></th>
                  <th><span className="m-brand">NetSuite</span><span className="m-cat">legacy ERP</span></th>
                  <th><span className="m-brand">Sage Intacct</span><span className="m-cat">finance system</span></th>
                  <th><span className="m-brand">SAP</span><span className="m-cat">enterprise ERP</span></th>
                  <th><span className="m-brand">QuickBooks</span><span className="m-cat">accounting system</span></th>
                  <th><span className="m-brand">Rillet</span><span className="m-cat">AI-native ERP</span></th>
                  <th><span className="m-brand">Campfire</span><span className="m-cat">AI-native ERP</span></th>
                  <th><span className="m-brand">Puzzle</span><span className="m-cat">AI general ledger</span></th>
                </tr>
              </thead>
              <tbody>
                <tr><th>Does the work, end to end</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">you operate it</span></td><td><span className="no">you operate it</span></td><td><span className="no">you operate it</span></td><td><span className="no">you operate it</span></td><td><span className="no">you operate it</span></td><td><span className="no">you operate it</span></td><td><span className="no">you operate it</span></td></tr>
                <tr><th>Autonomous &amp; governed (approval gates, undo)</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Every action traced &amp; replayable</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">manual</span></td><td><span className="part">manual</span></td><td><span className="part">manual</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Collections by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Eval-gated before every change</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td><td><span className="no">—</span></td></tr>
                <tr><th>Time to live</th><td className="m-aleq"><b>48 hours</b></td><td>3–6 months</td><td>2–4 months</td><td>6–12 months</td><td>days</td><td>weeks</td><td>weeks</td><td>days</td></tr>
                <tr><th>Pricing model</th><td className="m-aleq"><b>$/hr worked</b></td><td>seats + platform</td><td>seats + modules</td><td>seats + SI</td><td>tiered $/mo</td><td>platform fee</td><td>platform fee</td><td>tiered $/mo</td></tr>
                <tr><th>Built for</th><td className="m-aleq">any finance org</td><td>mid-market+</td><td>mid-market</td><td>enterprise</td><td>SMB</td><td>SaaS</td><td>startups</td><td>startups · SMB</td></tr>
              </tbody>
            </table>
          </div>

          <div className="switch-grid">
            <article className="sw-card"><div className="sw-from">leaving NetSuite</div><div className="sw-name">vs. NetSuite</div><div className="sw-they">Legacy ERP · months and six figures to implement.</div><p className="sw-why">You do the close; NetSuite stores it. <b>Aleq does the close</b> and is more auditable than the system of record.</p><Link className="sw-link" href="/compare/netsuite">Aleq vs. NetSuite →</Link></article>
            <article className="sw-card"><div className="sw-from">leaving Rillet</div><div className="sw-name">vs. Rillet</div><div className="sw-they">AI-native ERP, built for SaaS revenue recognition.</div><p className="sw-why">Rillet automates the ledger; <b>you still run it</b>. Aleq runs it for you — across every vertical.</p><Link className="sw-link" href="/compare/rillet">Aleq vs. Rillet →</Link></article>
            <article className="sw-card"><div className="sw-from">leaving Campfire</div><div className="sw-name">vs. Campfire</div><div className="sw-they">AI-native ERP · ask-and-answer "Slack for accounting."</div><p className="sw-why">Campfire lets you <b>ask</b> about your books. Aleq <b>acts</b> on them — gated, reversible, signed.</p><Link className="sw-link" href="/compare/campfire">Aleq vs. Campfire →</Link></article>
            <article className="sw-card"><div className="sw-from">leaving Puzzle</div><div className="sw-name">vs. Puzzle</div><div className="sw-they">AI general ledger for startups · auto-categorization.</div><p className="sw-why">Puzzle keeps clean books. <b>Aleq is the controller</b> — close, collections, multi-entity, audit — you'd otherwise hire.</p><Link className="sw-link" href="/compare/puzzle">Aleq vs. Puzzle →</Link></article>
            <article className="sw-card"><div className="sw-from">leaving Sage Intacct</div><div className="sw-name">vs. Sage Intacct</div><div className="sw-they">Finance system with dimensions, workflows, and reporting.</div><p className="sw-why">Intacct organizes the finance system. <b>Aleq operates the work</b> around it and shows each decision.</p><Link className="sw-link" href="/compare/sage-intacct">Aleq vs. Sage Intacct →</Link></article>
            <article className="sw-card"><div className="sw-from">leaving SAP</div><div className="sw-name">vs. SAP</div><div className="sw-they">Enterprise ERP backbone.</div><p className="sw-why">SAP is infrastructure. <b>Aleq is the operator layer</b> that runs close, recon, AP, and collections.</p><Link className="sw-link" href="/compare/sap">Aleq vs. SAP →</Link></article>
            <article className="sw-card"><div className="sw-from">leaving QuickBooks</div><div className="sw-name">vs. QuickBooks</div><div className="sw-they">Accounting system and forms.</div><p className="sw-why">QuickBooks stores the books. <b>Aleq does the repetitive finance labor</b> around them.</p><Link className="sw-link" href="/compare/quickbooks">Aleq vs. QuickBooks →</Link></article>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an unsigned period.</h2>
          <p className="lead">We'll connect read-only, replay the books, and produce a close packet — with the full trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/company/pricing">Rate card</Link>
          </div>
        </div>
      </section>
    </>
  );
}
