import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General ledger — always balanced, always current",
  description:
    "A general ledger that posts its own entries, balances them by construction, and ties every number to the document behind it. Your trial balance is always live.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">General ledger</div>
            <h1>Always balanced. Always current.</h1>
            <p className="pp-hero-lead">Your trial balance is live, not a report you wait for — and every number traces to its source in a click.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
              <a className="btn btn-lg" href="#trace">How it works</a>
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

      <section className="pp-section alt" id="trace">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Traceability</div>
              <h2 className="pp-h">Every number traces to its proof.</h2>
              <p className="pp-sub">Take any figure on the trial balance and follow it down — to the entry that created it, then to the bill, contract, or bank line behind that entry. No balance is a black box, and nothing traces back to a spreadsheet.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">balance</span><span><b>$129,640.00</b><span className="sub">50100 · Cloud Infrastructure</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">entry</span><span><b>JE-2026-0391</b><span className="sub">posted May 4 · double-entry</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">source</span><span><b>AWS invoice · $88,440</b><span className="sub">matched to bank line BT-9004</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">By construction</div>
              <h2 className="pp-h">It can&apos;t post a book that doesn&apos;t balance.</h2>
              <p className="pp-sub">Double-entry isn&apos;t a convention here — it&apos;s enforced in the engine. An entry where debits don&apos;t equal credits is rejected before it ever reaches your ledger. The books can&apos;t drift, because the system that writes them won&apos;t let them.</p>
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

      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Always current</div>
              <h2 className="pp-h">Live. Never a batch job.</h2>
              <p className="pp-sub">There&apos;s no &quot;run the trial balance&quot; step. As entries post through the month, the numbers are current to the second — so the close starts from books that are already true, and your board figures never wait on a batch.</p>
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

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-stats reveal">
            <div className="pp-stat"><div className="pp-stat-v pos">$0.00</div><div className="pp-stat-l">Out of balance, all year</div></div>
            <div className="pp-stat"><div className="pp-stat-v">8,412</div><div className="pp-stat-l">Entries posted in May</div></div>
            <div className="pp-stat"><div className="pp-stat-v">100<span className="u">%</span></div><div className="pp-stat-l">Traced to source evidence</div></div>
            <div className="pp-stat"><div className="pp-stat-v">48<span className="u">hrs</span></div><div className="pp-stat-l">From connect to live</div></div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>You set the leash</div>
          <h2 className="pp-h">You decide how much it posts.</h2>
          <p className="pp-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>Per account, never all-or-nothing. Let proven coding run on its own, keep the judgment calls for your team, and change it any time.</p>
        </div>
        <div className="pp-wrap">
          <div className="pp-modes reveal">
            <div className="pp-mode">
              <div className="pp-mode-tag">manual</div>
              <div className="pp-mode-h">Drafts, you post.</div>
              <p className="pp-mode-p">Aleq codes and balances every entry. You post each one yourself.</p>
            </div>
            <div className="pp-mode on">
              <div className="pp-mode-tag">assist <span className="def">default</span></div>
              <div className="pp-mode-h">Posts on your yes.</div>
              <p className="pp-mode-p">It shows the coding and the evidence; one click posts it, with rollback.</p>
            </div>
            <div className="pp-mode">
              <div className="pp-mode-tag">auto</div>
              <div className="pp-mode-h">Posts, you can undo.</div>
              <p className="pp-mode-p">For proven accounts. Signed when it posts, reversible for 14 days.</p>
            </div>
          </div>
        </div>
      </section>

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
