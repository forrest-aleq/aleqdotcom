import type { Metadata } from "next";
import Link from "next/link";

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
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
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
              <p className="pp-sub">Export the GL from NetSuite. Re-key entries across three systems by hand. Chase a variance through four bank portals. File the proof in a shared drive so an auditor can find it later. One controller, one account, most of a day — and that&apos;s before a single judgment call. This is the work Aleq does instead.</p>
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

      {/* 4 · DERIVED FROM PRIMITIVES */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Derived, not typed</div>
              <h2 className="pp-h">The GAAP entries write themselves.</h2>
              <p className="pp-sub">Most of the ledger isn&apos;t typed at all — it&apos;s derived. You model the contract, the lease, or the grant once; the standards engines compute the schedule and post the entries on time, every period. Revenue (606), leases (842), stock comp (718), commissions (340) — all derived from the primitive, not hand-built in a spreadsheet.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">primitive</span><span><b>Contract · Sirius–Acme</b><span className="sub">$458,400 · 12-month term</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">engine</span><span><b>ASC 606</b><span className="sub">derives the recognition schedule</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">ledger</span><span><b>$38,200 posted monthly</b><span className="sub">Dr Deferred · Cr Revenue · re-derived on change</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · BALANCED BY CONSTRUCTION */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">By construction</div>
              <h2 className="pp-h">It can&apos;t post a book that doesn&apos;t balance.</h2>
              <p className="pp-sub">Double-entry isn&apos;t a convention here — it&apos;s enforced in the engine. An entry where debits don&apos;t equal credits is rejected before it ever reaches your ledger, and only the ledger service can write to the journal. The books can&apos;t drift, because the system that writes them won&apos;t let them.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Journal entry · JE-2026-0412
                </div>
                <div className="pp-je">
                  <div className="pp-je-row"><span className="pp-je-side dr">DR</span><span className="pp-je-acct"><small>12000</small>Accounts Receivable</span><span className="pp-num">$142,400.00</span></div>
                  <div className="pp-je-row"><span className="pp-je-side cr">CR</span><span className="pp-je-acct"><small>40000</small>Subscription Revenue</span><span className="pp-num">$142,400.00</span></div>
                  <div className="pp-je-bal"><span className="pp-k">Debits − Credits</span><span className="pp-ok">$0.00 · balanced</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · IMMUTABLE / PERIOD CONTROLS */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Immutable history</div>
              <h2 className="pp-h">You correct with a reversal, never a delete.</h2>
              <p className="pp-sub">Posted entries are never edited or deleted — a correction is a reversing entry, so the history stays intact and an auditor can replay it. Periods open, close, and lock; once a month is locked, nothing rewrites it, and anything affecting a prior period surfaces for your review instead of posting silently.</p>
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
              <p className="pp-sub">Every entry starts as a belief in TAMi, the mind behind Aleq: it watches how your controller codes each thing, weights it by how often it held up, and only posts on its own once the belief is strong enough. A coding it has gotten right hundreds of times runs alone; a new vendor or an unusual amount drops back to a draft and asks. You can see every belief, how sure it is, and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What TAMi has learned to code</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">AWS invoices → 50100 Cloud Infra<small>coded 217× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Stripe payouts → 11000 Clearing<small>coded 412× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">New vendor over $50k<small>seen 3×</small></span><span className="pp-learned-bar mid"><i style={{ width: "38%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
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
          <details open><summary>Is Aleq the ledger, or a layer over my ERP?</summary><p>It&apos;s the ledger. Aleq keeps a real double-entry general ledger as the system of record. You can start with it reading your existing ERP read-only during the 48-hour on-ramp, then cut over to Aleq as the record on your timeline — it isn&apos;t a permanent bolt-on.</p></details>
          <details><summary>How do my auditors treat entries Aleq posts?</summary><p>Every entry carries its own provenance — the source type and ID, the document behind it, and a signature — so it reviews like a well-documented manual entry. The complete trail exports for audit, and you can see who or what touched every number, all the way back to the source.</p></details>
          <details><summary>Can it touch a period I&apos;ve already closed?</summary><p>No. Closed and locked periods are off-limits. Entries post to the open period; anything that would affect a prior period is surfaced for your review, never posted silently — and corrections are reversing entries, so history is never rewritten.</p></details>
          <details><summary>Where do the GAAP entries come from?</summary><p>From your primitives. You model the contract, lease, or grant once, and the standards engines (606, 842, 718, 740, 340) derive the schedule and post the entries each period — re-deriving when the deal changes. They aren&apos;t hand-keyed, and they aren&apos;t reconstructed from a spreadsheet.</p></details>
          <details><summary>What decides whether it posts on its own?</summary><p>You do, per account, plus the strength of TAMi&apos;s belief. Under your materiality threshold on a coding it has proven, it posts; over the limit, on a new counterparty, or on anything unusual, it drafts and holds for your approval.</p></details>
        </div>
      </section>

      {/* 12 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See it on your own books.</h2>
          <p>Connect read-only and watch Aleq code, post, and balance a real month — every number traced, signed, and reversible.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
