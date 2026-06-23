import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move to Aleq — switch systems in twenty minutes, with proof",
  description:
    "Connect your current accounting system and your banks. Aleq rebuilds your books from the source, reconciles to the penny, explains every difference, and signs a certificate — before the meeting ends.",
  robots: { index: false },
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Move to Aleq</div>
            <h1>Switch systems in twenty minutes. With proof.</h1>
            <p className="pp-hero-lead">Connect your systems and Aleq rebuilds your books from the source — reconciled to the penny before the meeting is over.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">Watch a live migration</Link>
              <Link className="btn btn-lg" href="#how">How it works</Link>
            </div>
          </div>

          <div className="pp-hero-art reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Move to Aleq · Sirius Robotics
                <span className="pp-timer"><i></i> 19:42</span>
              </div>
              <div className="pp-checks">
                <div className="pp-checkrow"><span className="pp-checkrow-l">Trial balance</span><span className="pp-checkrow-v">matches</span></div>
                <div className="pp-checkrow"><span className="pp-checkrow-l">Cash</span><span className="pp-checkrow-v">matches</span></div>
                <div className="pp-checkrow"><span className="pp-checkrow-l">Accounts receivable</span><span className="pp-checkrow-v">matches</span></div>
                <div className="pp-checkrow"><span className="pp-checkrow-l">Accounts payable</span><span className="pp-checkrow-v">matches</span></div>
                <div className="pp-checkrow"><span className="pp-checkrow-l">Unexplained variance</span><span className="pp-checkrow-v">$0.00</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">8,412 records · 412 accounts</span>
                <span className="pp-ok">Certificate · ready for cutover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-narrow" style={{ textAlign: "center" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>The moment</div>
          <h2 className="pp-h">Twenty minutes ago, this company ran on Rillet.</h2>
          <p className="pp-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>No implementation project. No six-month cutover. You connect the systems, give one instruction, and watch the books move — reconciled.</p>
        </div>
        <div className="pp-narrow" style={{ marginTop: "36px" }}>
          <div className="pp-cmd reveal">
            <span className="pp-cmd-prompt">&rsaquo;</span>
            <span>Migrate this company into Aleq — and don&apos;t stop until the books reconcile.</span>
            <span className="pp-cmd-cursor"></span>
          </div>
        </div>
        <div className="pp-wrap">
          <div className="pp-flow reveal">
            <div className="pp-flow-step"><div className="pp-flow-n">01</div><div className="pp-flow-h">Connect</div><div className="pp-flow-p">Your current system and your banks, read-only. Nothing changes yet.</div></div>
            <div className="pp-flow-step"><div className="pp-flow-n">02</div><div className="pp-flow-h">Reconstruct</div><div className="pp-flow-p">Aleq rebuilds the ledger from the source events, not your old records.</div></div>
            <div className="pp-flow-step"><div className="pp-flow-n">03</div><div className="pp-flow-h">Reconcile</div><div className="pp-flow-p">Both ledgers, side by side, until every variance is explained.</div></div>
            <div className="pp-flow-step"><div className="pp-flow-n">04</div><div className="pp-flow-h">Certify</div><div className="pp-flow-p">A signed reconciliation certificate. Cut over when you&apos;re ready.</div></div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Clean by reconstruction</div>
              <h2 className="pp-h">Don&apos;t migrate your mess. Rebuild it clean.</h2>
              <p className="pp-sub">Most migrations copy your bad chart of accounts, duplicate vendors, and years of workarounds straight across. Aleq connects to the source — bank, billing, spend, payroll, contracts — and reconstructs the books from the real events. Your old ledger becomes the thing we check against, not the thing we copy.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">sources</span><span><b>Mercury · Stripe · Ramp</b><span className="sub">bank, billing, spend, payroll, contracts</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">rebuild</span><span><b>Aleq reconstructs the ledger</b><span className="sub">clean chart, deduped vendors, real coding</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">old ledger</span><span><b>Comparison oracle</b><span className="sub">used to check the rebuild, every variance explained</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Proven before cutover</div>
              <h2 className="pp-h">Both ledgers, side by side. Every difference explained.</h2>
              <p className="pp-sub">Aleq runs in parallel with your current system and reconciles the two — line by line. Where they differ, it tells you exactly why. You cut over when the variance is zero and you&apos;ve seen the proof, not on a promise.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Reconciliation · Aleq vs Rillet
                </div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-checkrow-l">1,842 balances matched</span><span className="pp-checkrow-v">tied out</span></div>
                  <div className="pp-checkrow"><span className="pp-checkrow-l">Stripe payout timing</span><span className="pp-checkrow-v">explained</span></div>
                  <div className="pp-checkrow"><span className="pp-checkrow-l">Duplicate vendor merged</span><span className="pp-checkrow-v">explained</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">0 unexplained variance</span>
                  <span className="pp-ok">certificate signed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Low-risk by design</div>
              <h2 className="pp-h">Start on top. Cut over when you&apos;re ready.</h2>
              <p className="pp-sub">You don&apos;t rip anything out on day one. Aleq connects over your existing stack and runs the close as the intelligence layer. After a month or two of clean closes, replacing the ledger is just the final database swap — in a workflow Aleq already runs.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">week 1</span><span><b>Shadow mode</b><span className="sub">reads your stack, reconciles alongside it</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">month 1–2</span><span><b>Control plane</b><span className="sub">runs the close on top of the incumbent</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">cutover</span><span><b>System of record</b><span className="sub">the final database swap — no leap of faith</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>From any system</div>
          <h2 className="pp-h">It already speaks your stack.</h2>
          <p className="pp-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>Aleq reads the incumbent through its own interfaces, then proves the rebuild against it. Every migration makes the next one better.</p>
        </div>
        <div className="pp-wrap">
          <div className="pp-chips reveal">
            <span className="pp-chip"><b>Rillet</b><span className="pct">96%</span></span>
            <span className="pp-chip"><b>NetSuite</b><span className="pct">91%</span></span>
            <span className="pp-chip"><b>Sage Intacct</b><span className="pct">90%</span></span>
            <span className="pp-chip"><b>Xero</b><span className="pct">89%</span></span>
            <span className="pp-chip"><b>QuickBooks</b><span className="pct">88%</span></span>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-stats reveal">
            <div className="pp-stat"><div className="pp-stat-v">20<span className="u">min</span></div><div className="pp-stat-l">Typical migration</div></div>
            <div className="pp-stat"><div className="pp-stat-v pos">$0.00</div><div className="pp-stat-l">Unexplained variance</div></div>
            <div className="pp-stat"><div className="pp-stat-v">100<span className="u">%</span></div><div className="pp-stat-l">Records traced to source</div></div>
            <div className="pp-stat"><div className="pp-stat-v">1</div><div className="pp-stat-l">Signed reconciliation certificate</div></div>
          </div>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Bring your books. Watch them move.</h2>
          <p>Connect read-only and let Aleq reconstruct a real month in parallel with your current system — reconciled, explained, and certified before you decide anything.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a live migration</Link>
            <Link className="btn btn-lg" href="/work">See the work it runs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
