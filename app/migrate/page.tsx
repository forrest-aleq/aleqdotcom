import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "How hard is it to switch accounting systems?", a: "With a traditional ERP migration, hard — QuickBooks-to-NetSuite projects are routinely quoted at three to six months of data mapping, cleanup, and consultant time. Aleq takes a different approach: it connects to your current system and banks read-only and rebuilds the books from source events — bank, billing, spend, payroll, contracts — then reconciles the rebuild against your old ledger line by line until every variance is explained. The initial rebuild and reconciliation happen in about twenty minutes, and you cut over only after Aleq has run in parallel with your current system and produced a reconciliation certificate showing zero unexplained variance." },
  { q: "How long does an accounting system migration take?", a: "Conventional migrations run three to twelve months depending on complexity. Aleq compresses the risky part to minutes and the cautious part to a month or two: in the first session it connects read-only, reconstructs your ledger from source events, and reconciles it against your current system — trial balance, cash, AR, and AP matched, every difference explained. Then it runs in parallel: week one in shadow mode reading your stack, a month or two running the close on top of the incumbent, and cutover as a final swap in a workflow Aleq already runs. You get proof in the first session and cut over on your own schedule." },
  { q: "How do you migrate general ledger data from one system to another?", a: "The conventional method is export and import: chart of accounts first, then trial balance at the migration date, open AR and AP, and historical transactions, validating each against the old system — which also copies across every bad account, duplicate vendor, and workaround. Aleq inverts this: instead of exporting records, it rebuilds the ledger from the underlying source events — bank, billing, spend, payroll, contracts — and uses your old ledger as the thing to check against, not the thing to copy. The result is a clean chart, deduplicated vendors, and real coding, with a line-by-line reconciliation where every difference between old and new is explained before cutover." },
  { q: "Should I run my old and new accounting systems in parallel?", a: "Yes — a parallel run is the standard way to de-risk a cutover, and Aleq builds it in without making your team do double entry. Aleq runs alongside your current system automatically: in week one it reads your stack in shadow mode and reconciles beside it; for a month or two it runs the close as a layer on top of the incumbent; cutover is then the final swap. You never key transactions into two systems by hand, because Aleq derives its ledger from the same source events and reconciles the two continuously. You switch when unexplained variance is zero and the certificate exists, not on a promise." },
  { q: "When is the best time of year to switch accounting software?", a: "Conventional advice says fiscal year-end, because a closed year gives a clean cutover point and you avoid re-keying a partial year. That constraint exists because traditional migrations copy balances at a point in time. Aleq removes it: because it rebuilds the books from source events and reconciles continuously against your current system, you can start in any month — connect read-only, watch it rebuild and reconcile a real period in about twenty minutes, run the two ledgers in parallel, and cut over whenever unexplained variance is zero and the reconciliation certificate is signed. The calendar stops being the gating factor; the proof is." },
  { q: "What is the alternative to migrating from QuickBooks to NetSuite?", a: "Companies that outgrow QuickBooks usually default to NetSuite or Sage Intacct and accept a multi-month implementation. Aleq offers a different path: connect QuickBooks and your banks read-only, and it rebuilds your books from source events — clean chart of accounts, deduplicated vendors, real coding — then reconciles the rebuild against QuickBooks line by line and produces a certificate when unexplained variance is zero. It runs the close on top of your existing stack for a month or two before you cut over. Aleq reads QuickBooks, NetSuite, Sage Intacct, Xero, and Rillet through their own interfaces, so it also serves teams leaving those systems." },
  { q: "How do I verify my accounting data migrated correctly?", a: "Reconcile the two systems — do not trust the import log. The checks that matter: trial balance ties account by account, cash matches the bank, AR and AP aging agree between systems, and every remaining difference has a documented explanation. Aleq automates exactly this: it runs both ledgers side by side, matches balances line by line, and explains each variance in plain terms — a Stripe payout timing difference, a duplicate vendor merged — until unexplained variance reaches $0.00. It then produces a reconciliation certificate you can keep for your auditor. Cutover is blocked until the certificate exists, so migration correctness is proven, not assumed." },
  { q: "Do I need to clean up my books before switching accounting systems?", a: "In a traditional migration, yes — a messy chart of accounts, duplicate vendors, and years of workarounds get copied straight into the new system and create reconciliation problems for years. With Aleq you do not clean first, because Aleq does not copy: it reconstructs the books from source events with a clean chart, deduplicated vendors, and real coding, then uses your old ledger only as the comparison to check the rebuild against. The old system's clutter stays behind, and every difference between the old ledger and the clean new one is documented and explained before you cut over." },
  { q: "Will I lose historical data when switching accounting systems?", a: "Traditional migrations often bring over only opening balances plus summarized history, archiving the detail. Aleq rebuilds history instead of importing it: it reconstructs the ledger from the underlying source events — bank, billing, spend, payroll, contracts — and proves the rebuild against your old ledger record by record; a typical rebuild reconciles thousands of records across hundreds of accounts, with trial balance, cash, AR, and AP all matched. Every difference is explained before cutover. History in Aleq is not a lossy copy of the old system's summaries — it is the same economic events, rebuilt clean and reconciled to what you had." },
  { q: "What should be on an accounting system cutover checklist?", a: "The essentials: trial balance ties between systems, cash matches the bank, AR and AP aging agree, every variance explained, sign-offs documented, a locked cutover date, and a rollback plan. Aleq turns that checklist into the product: it will not call a migration ready until trial balance, cash, accounts receivable, and accounts payable all match and unexplained variance is $0.00, and it produces a reconciliation certificate on those checks. Because Aleq has already been running the close in parallel on top of your old system, the cutover itself is a final swap in a workflow it already runs — not a leap of faith on a weekend." },
];

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
              <Link className="btn btn-primary btn-lg" href="/demo">Watch a live migration</Link>
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

      {/* FAQ */}
      <section className="pp-section">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What teams ask before switching.</h2>
        </div>
        <div className="pp-faq reveal">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Bring your books. Watch them move.</h2>
          <p>Connect read-only and let Aleq reconstruct a real month in parallel with your current system — reconciled, explained, and certified before you decide anything.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book a live migration</Link>
            <Link className="btn btn-lg" href="/work">See the work it runs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
