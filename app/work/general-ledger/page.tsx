import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/FaqSchema";
import IndustryModesDemo from "@/components/IndustryModesDemo";
import type { ModeDemoItem } from "@/lib/industries";

// The Manual / Assist / Auto ladder on the ledger itself — recurring entries
// run alone once proven, a big judgment entry holds for approval, and the
// period lock never moves without a person.
const GL_MODES: ModeDemoItem[] = [
  {
    mode: "auto",
    head: "Recurring entries · month-end set",
    pill: "posted on schedule",
    body: "The entries that post the same way every month — depreciation, amortization, standing accruals — run on their own once they've earned it, each one logged and reversible.",
    facts: [
      { k: "Due this month", v: "14 recurring entries" },
      { k: "Track record", v: "posted 11 months · never corrected" },
    ],
    je: [
      { side: "dr", acct: "Depreciation expense", val: "$8,400" },
      { side: "cr", acct: "Accumulated depreciation", val: "$8,400" },
    ],
    jeNote: "posted on schedule · logged · reversible",
  },
  {
    mode: "assist",
    head: "Journal entry · over your threshold",
    pill: "drafted · held",
    body: "A one-off entry this big is a judgment, not a routine. Aleq drafts it with the support attached and holds it at your approval line — nothing posts until a person says so.",
    facts: [
      { k: "Entry", v: "legal settlement accrual · $250,000" },
      { k: "Policy", v: "over your $50k approval line" },
    ],
    approveLabel: "Approve & post",
    je: [
      { side: "dr", acct: "Legal expense", val: "$250,000" },
      { side: "cr", acct: "Accrued liabilities", val: "$250,000" },
    ],
    approvedPill: "✓ posted",
    approvedNote: "posted · logged · reversible with one entry",
  },
  {
    mode: "manual",
    head: "Period lock · May 2026",
    pill: "you only",
    body: "Sealing the month is a call Aleq never makes alone, no matter how confident it gets. It stages the close — subledgers tied, entries posted, support attached — and the lock waits for you.",
    facts: [
      { k: "Status", v: "subledgers tied · $0.00 out of balance" },
      { k: "Waiting on", v: "your sign-off — by design" },
    ],
  },
];

export const metadata: Metadata = {
  title: "General ledger — always balanced, always current",
  description:
    "A general ledger that posts its own entries, balances them by construction, derives the GAAP from your contracts, and ties every number to the document behind it — learned and run by TAMi. Your trial balance is always live.",
};

export default function Page() {
  return (
    <>
      {/* 1 · HERO */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">General ledger</div>
            <h1>Always balanced. Always current.</h1>
            <p className="pp-hero-lead">Your trial balance is live, not a report you wait for — every entry posted, balanced, and traced to its source. This is the ledger Aleq keeps, not a layer over one.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
              <a className="btn btn-lg" href="#manual">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Trial balance · Sirius Robotics · May 2026
                <span className="pp-live"><i /> live</span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row"><span className="pp-tb-acct"><small>10100</small>JPMC Operating</span><span className="pp-num">$2,418,904.10</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct"><small>12000</small>Accounts Receivable</span><span className="pp-num">$1,284,400.00</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct"><small>25000</small>Deferred Revenue</span><span className="pp-num neg">($360,000.00)</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct"><small>40000</small>Subscription Revenue</span><span className="pp-num neg">($3,540,000.00)</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct"><small>50100</small>Cloud Infrastructure</span><span className="pp-num">$129,640.00</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">412 accounts · debits = credits</span>
                <span className="pp-ok">$0.00 out of balance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · THE MANUAL REALITY */}
      <section className="pp-section alt" id="manual">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The manual way</div>
              <h2 className="pp-h">Today, the ledger is a day of someone&apos;s life.</h2>
              <p className="pp-sub">Export, re-key, chase a variance through four bank portals, file the proof by hand — one controller, one account, most of a day. This is the work Aleq does instead.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">The manual month · what it replaces</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:23</small>Export GL from NetSuite</span><span className="pp-num">1,847 lines</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:47</small>Re-key entries across 3 systems</span><span className="pp-num">by hand</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>10:17</small>Hunt a variance through 4 banks</span><span className="pp-num neg">$2,445.86</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>12:34</small>File the proof in a shared drive</span><span className="pp-num">manually</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">one controller · one account</span><span className="pp-num neg">4h 52m</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · TRACEABILITY / PROVENANCE */}
      <section className="pp-section" id="trace">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Provenance</div>
              <h2 className="pp-h">Every number traces to its proof.</h2>
              <p className="pp-sub">Every entry Aleq posts carries deterministic provenance — the exact source it came from, stamped onto the entry itself. Take any figure on the trial balance and follow it down: to the entry, then to the bill, contract, or bank line behind it. No balance is a black box, and nothing traces back to a spreadsheet.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">balance</span><span><b>$129,640.00</b><span className="sub">50100 · Cloud Infrastructure</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">entry</span><span><b>JE-2026-0391</b><span className="sub">source: ap.bill · B-9004</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">source</span><span><b>AWS invoice · $88,440</b><span className="sub">matched to bank line BT-9004</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · CAN'T DRIFT — balanced by construction, corrected by reversal */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">By construction</div>
              <h2 className="pp-h">It can&apos;t post a book that doesn&apos;t balance.</h2>
              <p className="pp-sub">An unbalanced entry is rejected before it ever reaches your ledger, and posted entries are never edited or deleted — a correction is a reversing entry, so history stays intact and an auditor can replay it. Once a month locks, nothing rewrites it.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">Correction · reverse &amp; re-post</div>
                <div className="pp-je">
                  <div className="pp-je-row"><span className="pp-je-side cr">REV</span><span className="pp-je-acct"><small>JE-0391</small>Original reversed</span><span className="pp-num neg">($88,440.00)</span></div>
                  <div className="pp-je-row"><span className="pp-je-side dr">NEW</span><span className="pp-je-acct"><small>JE-0418</small>Re-posted, corrected</span><span className="pp-num">$88,440.00</span></div>
                  <div className="pp-je-bal"><span className="pp-k">May 2026</span><span className="pp-ok">period open · audit trail intact</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · ALWAYS CURRENT */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Always current</div>
              <h2 className="pp-h">Live. Never a batch job.</h2>
              <p className="pp-sub">There&apos;s no &quot;run the trial balance&quot; step. As subledgers post and engines derive through the month, the numbers are current to the second — so the close starts from books that are already true, and your board figures never wait on a batch.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  Trial balance · day 3 of close
                  <span className="pp-live"><i /> live</span>
                </div>
                <div className="pp-tb" style={{ paddingTop: "18px", paddingBottom: "14px" }}>
                  <div className="pp-bars">
                    <div className="pp-bar-row"><span className="pp-k">Assets</span><span className="pp-bar"><i style={{ width: "100%" }} /></span><span className="pp-num">$31.2M</span></div>
                    <div className="pp-bar-row"><span className="pp-k">Liab. &amp; equity</span><span className="pp-bar"><i style={{ width: "79%" }} /></span><span className="pp-num">$24.8M</span></div>
                    <div className="pp-bar-row"><span className="pp-k">Revenue</span><span className="pp-bar"><i style={{ width: "75%" }} /></span><span className="pp-num">$23.4M</span></div>
                    <div className="pp-bar-row"><span className="pp-k">Expense</span><span className="pp-bar"><i style={{ width: "54%" }} /></span><span className="pp-num">$17.0M</span></div>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">updated to the second</span>
                  <span className="pp-ok">$0.00 out of balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · TAMi — THE BELIEF BEHIND EVERY ENTRY */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Powered by TAMi</div>
              <h2 className="pp-h">It learns how your team codes — then earns the entry.</h2>
              <p className="pp-sub">Every entry starts as a belief in TAMi — The Aleq Mind: it learns how your controller codes each thing, weights it by how often it held up, and only posts on its own once the belief is strong enough. A coding it has gotten right hundreds of times runs alone; a new vendor or an unusual amount drops back to a draft and asks. You can see every belief, how sure it is, and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <IndustryModesDemo items={GL_MODES} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pp-section">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What controllers ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>What does Aleq do?</summary><p>Aleq is an AI accounting platform that performs core finance work — bank reconciliation, the month-end close, collections, accounts payable, and GAAP schedules under ASC 606, 842, 718, 740, 340, 350, and 815 — on its own double-entry ledger, which serves as the system of record. Work runs under three supervision levels: routine tasks run automatically once they have an established track record, judgment calls are drafted and held for a named person&apos;s approval, and certain actions, such as locking a period, are always performed by a person. Every entry is logged and reversible. Aleq connects to existing systems read-only and rebuilds a completed month within 48 hours. It is typically evaluated as a replacement for QuickBooks or NetSuite by companies that want the ledger to perform the work rather than store it.</p></details>
          <details><summary>Is Aleq the ledger, or a layer on top of my ERP?</summary><p>Aleq is the ledger itself — a double-entry system of record, not a reporting layer over an existing ERP. During onboarding it connects to your current system read-only and rebuilds the books in parallel; you retire the old system on your own timeline.</p></details>
          <details><summary>How is Aleq different from QuickBooks or NetSuite?</summary><p>QuickBooks and NetSuite record transactions that your team enters and configures. Aleq derives most entries itself — from contracts, bills, leases, and bank activity — and maintains the books continuously, so the trial balance is current daily rather than reconstructed at month-end. The supervision model also differs: automation is granted per task based on track record, and any posted entry can be reversed with a standard reversing entry.</p></details>
          <details><summary>Where do the GAAP entries come from?</summary><p>From the underlying business records. A contract, lease, or equity grant is modeled once, and the corresponding standards engine (ASC 606, 842, 718, 740, or 340) computes the schedule and posts entries each period, re-deriving the schedule when terms change. Entries are not hand-keyed.</p></details>
          <details><summary>How much does Aleq post without approval?</summary><p>Only what you allow. Posting thresholds are set by account and dollar amount; anything above the threshold is drafted and held for a named person&apos;s approval. Every posted entry is logged and can be reversed with a standard reversing entry.</p></details>
          <details><summary>How long does implementation take?</summary><p>Aleq connects read-only and produces a reconciled mirror of your books within 48 hours. Cutover timing is your decision — typically days for an early-stage company, and up to a quarter for a multi-entity group.</p></details>
          <details><summary>What is general ledger software?</summary><p>General ledger software is the system of record for a company&apos;s financial transactions — the debits and credits underlying the income statement, balance sheet, and statement of cash flows. Traditional general ledger software stores entries that a team keys in. Aleq&apos;s ledger also performs the work: it derives entries from contracts, bills, and bank activity, enforces that every entry balances before it posts, and ties each balance to its source documents, so the trial balance is current daily rather than rebuilt at month-end.</p></details>
          <details><summary>How are journal entries automated in Aleq?</summary><p>In three ways. Recurring entries — depreciation, amortization, standing accruals — post on schedule once they have an established track record. Derived entries are computed by the standards engines from modeled contracts, leases, and grants. All other entries are drafted with supporting documents attached and held for approval. Supervision levels are set per task, and every entry is logged and reversible.</p></details>
          <details><summary>Are books kept by AI accounting software audit-ready?</summary><p>Audit acceptance is a determination your auditor makes, but Aleq is designed around the evidence an audit requires. Every entry carries provenance to the bill, contract, or bank line behind it. Posted entries are never edited or deleted — corrections post as reversing entries, so history stays intact. Material entries require a named person&apos;s approval, and the full history exports as an audit package. In an audit, your team provides the same things it provides today — support and controls — with both maintained continuously rather than assembled at year-end.</p></details>
          <details><summary>What is the best general ledger software for a startup or mid-market company?</summary><p>It depends on the work you need it to do. QuickBooks suits companies that need simple transaction recording at low cost. NetSuite and Sage Intacct suit teams that need broad ERP modules and have staff to operate them. Aleq is built for teams that want the ledger to perform the accounting itself — reconciliation, the close, and GAAP schedules — under human supervision, without adding headcount.</p></details>
          <details><summary>Does the ledger handle multiple entities?</summary><p>Yes. Each entity keeps its own books. Aleq translates foreign entities into the reporting currency, handles intercompany activity, and consolidates the group — including group trial balance, income statement, balance sheet, and cash flow views.</p></details>
        </div>
        <FaqSchema items={[
          { q: "What does Aleq do?", a: "Aleq is an AI accounting platform that performs core finance work — bank reconciliation, the month-end close, collections, accounts payable, and GAAP schedules under ASC 606, 842, 718, 740, 340, 350, and 815 — on its own double-entry ledger, which serves as the system of record. Work runs under three supervision levels: routine tasks run automatically once they have an established track record, judgment calls are drafted and held for a named person's approval, and certain actions, such as locking a period, are always performed by a person. Every entry is logged and reversible. Aleq connects to existing systems read-only and rebuilds a completed month within 48 hours. It is typically evaluated as a replacement for QuickBooks or NetSuite by companies that want the ledger to perform the work rather than store it." },
          { q: "Is Aleq the ledger, or a layer on top of my ERP?", a: "Aleq is the ledger itself — a double-entry system of record, not a reporting layer over an existing ERP. During onboarding it connects to your current system read-only and rebuilds the books in parallel; you retire the old system on your own timeline." },
          { q: "How is Aleq different from QuickBooks or NetSuite?", a: "QuickBooks and NetSuite record transactions that your team enters and configures. Aleq derives most entries itself — from contracts, bills, leases, and bank activity — and maintains the books continuously, so the trial balance is current daily rather than reconstructed at month-end. The supervision model also differs: automation is granted per task based on track record, and any posted entry can be reversed with a standard reversing entry." },
          { q: "Where do the GAAP entries come from?", a: "From the underlying business records. A contract, lease, or equity grant is modeled once, and the corresponding standards engine (ASC 606, 842, 718, 740, or 340) computes the schedule and posts entries each period, re-deriving the schedule when terms change. Entries are not hand-keyed." },
          { q: "How much does Aleq post without approval?", a: "Only what you allow. Posting thresholds are set by account and dollar amount; anything above the threshold is drafted and held for a named person's approval. Every posted entry is logged and can be reversed with a standard reversing entry." },
          { q: "How long does implementation take?", a: "Aleq connects read-only and produces a reconciled mirror of your books within 48 hours. Cutover timing is your decision — typically days for an early-stage company, and up to a quarter for a multi-entity group." },
          { q: "What is general ledger software?", a: "General ledger software is the system of record for a company's financial transactions — the debits and credits underlying the income statement, balance sheet, and statement of cash flows. Traditional general ledger software stores entries that a team keys in. Aleq's ledger also performs the work: it derives entries from contracts, bills, and bank activity, enforces that every entry balances before it posts, and ties each balance to its source documents, so the trial balance is current daily rather than rebuilt at month-end." },
          { q: "How are journal entries automated in Aleq?", a: "In three ways. Recurring entries — depreciation, amortization, standing accruals — post on schedule once they have an established track record. Derived entries are computed by the standards engines from modeled contracts, leases, and grants. All other entries are drafted with supporting documents attached and held for approval. Supervision levels are set per task, and every entry is logged and reversible." },
          { q: "Are books kept by AI accounting software audit-ready?", a: "Audit acceptance is a determination your auditor makes, but Aleq is designed around the evidence an audit requires. Every entry carries provenance to the bill, contract, or bank line behind it. Posted entries are never edited or deleted — corrections post as reversing entries, so history stays intact. Material entries require a named person's approval, and the full history exports as an audit package. In an audit, your team provides the same things it provides today — support and controls — with both maintained continuously rather than assembled at year-end." },
          { q: "What is the best general ledger software for a startup or mid-market company?", a: "It depends on the work you need it to do. QuickBooks suits companies that need simple transaction recording at low cost. NetSuite and Sage Intacct suit teams that need broad ERP modules and have staff to operate them. Aleq is built for teams that want the ledger to perform the accounting itself — reconciliation, the close, and GAAP schedules — under human supervision, without adding headcount." },
          { q: "Does the ledger handle multiple entities?", a: "Yes. Each entity keeps its own books. Aleq translates foreign entities into the reporting currency, handles intercompany activity, and consolidates the group — including group trial balance, income statement, balance sheet, and cash flow views." },
        ]} />
      </section>

      {/* 12 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See it on your own books.</h2>
          <p>Connect read-only and watch Aleq code, post, and balance a real month — every number traced, signed, and reversible.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
