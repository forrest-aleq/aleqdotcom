import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The work — everything a controller does, done overnight",
  description:
    "The standing jobs Aleq runs every night: reconciliation, accounts receivable, the close, accounts payable, multi-entity consolidation, tax, and financial reporting. Reconciled — not flagged for review.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">the work</span>
          <h1 className="h1">Everything a controller does — done overnight.</h1>
          <p className="lead">These are the standing jobs Aleq runs, every night, on your real books. Each one reconciled, logged, and reversible — done, not flagged. The judgment calls still wait for you.</p>
        </div>
      </section>

      <section className="dp-section">
        <div className="container">
          <div className="op-run" data-op-run aria-label="Aleq work hub operating memory" style={{ marginBottom: "32px" }}>
            <div className="op-bar"><span className="op-traffic"><i /><i /><i /></span><span className="op-mark">✣</span><span className="op-title">Aleq · work graph</span><span className="op-meta">customer operating memory</span><span className="op-mode">earned</span></div>
            <div className="op-layout">
              <div className="op-rail">
                <div className="op-stage" data-status="learning decisions"><span className="op-stage-dot" /><div><b>Learns how your finance team decides</b><em>Bank treatments, payment gates, collection tone, close sign-offs, entity relationships, and tax choices.</em></div><small>learn</small></div>
                <div className="op-stage" data-status="building beliefs"><span className="op-stage-dot" /><div><b>Turns repeated judgment into memory</b><em>Aleq remembers the treatment, the evidence, the limits, and when to stop asking.</em></div><small>remember</small></div>
                <div className="op-stage" data-status="earning permissions"><span className="op-stage-dot" /><div><b>Earns autonomy per task</b><em>Reconciliation can Auto while AP wires stay Assist and period lock stays Manual.</em></div><small>leash</small></div>
                <div className="op-stage" data-status="running bounded work"><span className="op-stage-dot" /><div><b>Runs only inside your controls</b><em>When a pattern leaves its learned scope, Aleq asks with the evidence already attached.</em></div><small>act</small></div>
                <div className="op-stage" data-status="proving outcomes"><span className="op-stage-dot" /><div><b>Proves and rolls back</b><em>Every action has source evidence, policy, ledger impact, signature, and undo path.</em></div><small>proof</small></div>
              </div>
              <div className="op-panel">
                <div className="op-packet">
                  <div className="op-packet-head"><div><div className="op-packet-k">customer terms</div><div className="op-packet-title">Aleq learns how this company runs finance</div></div><span className="op-packet-status" data-op-status="learning">learning</span></div>
                  <div className="op-packet-grid">
                    <div className="op-fact"><span>auto</span><b>routine bank rec · earned</b></div>
                    <div className="op-fact"><span>assist</span><b>$188k payment · approval</b></div>
                    <div className="op-fact"><span>manual</span><b>period lock · judgment</b></div>
                  </div>
                </div>
                <div className="op-memory">
                  <div className="op-memo-title"><span>operating memory</span><b>task-by-task permission</b></div>
                  <div className="op-meter" data-value="89%"><div className="op-meter-line"><i /><span className="op-threshold" style={{ left: "75%" }} /></div><div className="op-meter-labels"><span>asks</span><span>runs inside controls</span></div></div>
                  <div className="op-memo"><span className="pill pill-ok">bounded</span><span>the same customer memory powers every standing job.</span></div>
                </div>
                <div className="op-proof">
                  <div className="op-proof-row"><span>unique</span><p>Aleq does not just automate a workflow; it earns permission from this customer&rsquo;s own history.</p></div>
                  <div className="op-proof-row"><span>control</span><p>Autonomy is never global. Each job has its own evidence, go/no-go line, mode, and rollback.</p></div>
                  <div className="op-proof-row"><span>outcome</span><p>The work runs overnight and arrives with proof instead of a new review queue.</p></div>
                </div>
                <div className="op-foot"><span className="seal-dot" /> your team teaches it · it earns permission · it runs inside your controls · it proves the work</div>
              </div>
            </div>
          </div>
          <div className="dp-grid">
            <Link className="tm" href="/work/general-ledger"><div className="tm-role">general ledger</div><div className="tm-h">Books that can&apos;t lie.</div><p className="tm-s">Every balance drills to the entry and the evidence; double-entry enforced.</p></Link>
            <Link className="tm" href="/work/reconciliation"><div className="tm-role">reconciliation</div><div className="tm-h">Reconciled to the penny.</div><p className="tm-s">Every account matched to its source, $0.00 variance, by morning.</p></Link>
            <Link className="tm" href="/work/collections"><div className="tm-role">collections</div><div className="tm-h">Gets you paid.</div><p className="tm-s">Calls and emails past-due accounts in your voice; captures the promise.</p></Link>
            <Link className="tm" href="/work/close"><div className="tm-role">the close</div><div className="tm-h">Closes the month.</div><p className="tm-s">Continuous close — day 3 of 5, not a five-day fire drill.</p></Link>
            <Link className="tm" href="/work/ap"><div className="tm-role">accounts payable</div><div className="tm-h">Pays the right bills.</div><p className="tm-s">Three-way match and the right approval before a dollar moves.</p></Link>
            <Link className="tm" href="/work/multi-entity"><div className="tm-role">multi-entity</div><div className="tm-h">Closes across entities.</div><p className="tm-s">Six entities, five currencies, intercompany eliminations — one close.</p></Link>
            <Link className="tm" href="/work/tax"><div className="tm-role">tax &amp; compliance</div><div className="tm-h">Keeps you filing-ready.</div><p className="tm-s">Sales tax, 1099s, and audit evidence assembled as it happens.</p></Link>
            <Link className="tm" href="/work/reporting"><div className="tm-role">financial reporting</div><div className="tm-h">Board-ready the day you close.</div><p className="tm-s">Statements and flux commentary assembled off the live ledger, every number drillable.</p></Link>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Pick one. Watch it run.</h2>
          <p className="lead">Connect read-only and put Aleq on your real books — every step visible, every action reversible.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
            <Link className="btn btn-lg" href="/connectors">See connectors</Link>
          </div>
        </div>
      </section>
    </>
  );
}
