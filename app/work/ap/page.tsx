import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounts Payable — pays the right bills, on your approval",
  description:
    "Aleq reads each bill, codes it, runs the three-way match, and routes it for the right approval before a dollar moves — then prepares the payment for execution on your rails. You approve; it never moves money on its own.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Accounts payable</div>
            <h1>Pays the right bills. On your approval.</h1>
            <p className="pp-hero-lead">Every bill checked and ready to pay. You approve — money never moves on its own.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your bills</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Bill · Foxconn Mfg · FX-2026-04
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>read &amp; coded</span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row"><span className="pp-tb-acct">Amount<small>vendor invoice</small></span><span className="pp-num">$188,440</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Due<small>terms · net 60</small></span><span className="pp-num">2026-06-30</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">GL account<small>suggested</small></span><span className="pp-num">14000 · Inventory</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Three-way match<small>PO ↔ receipt ↔ bill</small></span><span className="pp-num pos">matched</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Matched · ready · held above your $100k limit</span>
                <span className="pp-ok">Ready to approve</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">early-pay 2/10</div>
              <div className="pp-float-v">wire by Mon <span className="pp-ok">saves $3,768</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It understands the bill</div>
              <h2 className="pp-h">It reads the bill, not just files it.</h2>
              <p className="pp-sub">A PDF lands in your inbox and Aleq pulls out the vendor, the bill number, the due date, and the amount — then suggests the GL account it belongs in, with a confidence score on each read. Nothing is keyed by hand, and nothing posts on a guess.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  What Aleq read off the bill
                  <span className="pp-live" style={{ color: "var(--fg-muted)" }}>99% confident</span>
                </div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-match-row"><span className="pp-match-line">Vendor<small>Foxconn Mfg.</small></span><span className="pp-match-right"><span className="pp-conf">100%</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">Bill number<small>FX-2026-04</small></span><span className="pp-match-right"><span className="pp-conf">100%</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">Due date<small>2026-06-30 · net 60</small></span><span className="pp-match-right"><span className="pp-conf">99%</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">Amount<small>$188,440.00</small></span><span className="pp-match-right"><span className="pp-conf">100%</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">GL account<small>14000 Inventory — suggested</small></span><span className="pp-match-right"><span className="pp-conf">96%</span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Nothing pays on trust alone</div>
              <h2 className="pp-h">Three-way match before a dollar moves.</h2>
              <p className="pp-sub">Aleq ties the bill back to the purchase order you raised and the goods you actually received. Quantities, prices, and totals have to agree across all three before it&apos;s cleared to pay — so you&apos;re never paying for a PO you didn&apos;t approve or a shipment that never arrived.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">the order</span><span><b>PO-7731 · $188,440</b><span className="sub">raised &amp; approved · 1,000 units</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">the receipt</span><span><b>Goods received · 1,000</b><span className="sub">warehouse signed off · qty agrees</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">the bill</span><span><b>FX-2026-04 · ties out</b><span className="sub">price, qty, total all agree — cleared</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The right people, in the right order</div>
              <h2 className="pp-h">The right approval, every time.</h2>
              <p className="pp-sub">Your $100k limit isn&apos;t a suggestion. A $188,440 wire climbs the approval chain to a second signer before it can be released; small, routine bills on a vendor you trust move on their own. Every approval is logged, so the trail reads cleanly months later.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Who has to approve this</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Foxconn wire · $188,440<small>over your $100k limit</small></span><span className="pp-tag asks">Two approvers</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">First approver — Controller<small>Forrest Mae</small></span><span className="pp-checkrow-v">approved</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Second approver — CFO<small>required over $100k</small></span><span className="pp-tag asks">Awaiting</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Routine bills under $5k<small>trusted vendors</small></span><span className="pp-tag auto">Auto-approved</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It gets better the longer it runs</div>
              <h2 className="pp-h">It learns your vendors.</h2>
              <p className="pp-sub">When the same bill is coded the same way enough times, Aleq stops asking. You can see every rule it&apos;s learned, how sure it is, and whether it runs on its own yet — and the ones that always need a human, like a big wire or a 1099 vendor with no W-9, stay held no matter how routine they look.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq has learned</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">AWS bill in the last days of the month → 50100<small>coded 36× · never wrong</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Wires over $100,000<small>policy · always a human</small></span><span className="pp-learned-bar mid"><i style={{ width: "38%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">1099 vendor, missing W-9<small>held until on file</small></span><span className="pp-learned-bar mid"><i style={{ width: "24%" }} /></span><span className="pp-tag asks">Held</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What CFOs ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>How do you stop a duplicate or fraudulent payment?</summary><p>Every bill is matched against the ones already in your system before it can be scheduled — same vendor, same amount, same invoice number gets caught and held, not paid twice. Bank details that change on a known vendor, or a brand-new payee, are flagged for a human to confirm. And nothing is cleared to pay until it ties to a real PO and a real receipt, so an invented invoice has nothing to match.</p></details>
          <details><summary>Who approves before money moves?</summary><p>You set the approval chain, and Aleq follows it exactly. Below your threshold on a vendor it has proven, it can clear a routine bill on its own; over the limit, on a new vendor, or on anything unusual, it routes the bill up the chain — a $100k+ wire needs your second signer before it can be released. Every approval is logged with who approved what, and when.</p></details>
          <details><summary>Does Aleq actually send the payment?</summary><p>No. Aleq prepares the payment — matched, coded, approved, and ready — and routes it for execution on your existing rails. It hands a clean, approved batch to your bank or payment provider; it does not move the money itself and has no standing authority to. You stay in control of the release.</p></details>
          <details><summary>What about 1099s and missing W-9s?</summary><p>Aleq knows which vendors are 1099-reportable and tracks what&apos;s on file. If a bill comes in from a 1099 vendor with no W-9, it&apos;s held — coded and ready, but not cleared to pay — until the form is collected, so you&apos;re never short the information you need at year-end. It keeps the running totals you&apos;ll report, but it does not file your taxes.</p></details>
          <details><summary>Can it touch a closed period?</summary><p>No. Closed and locked periods are off-limits to Aleq, the same as anyone else. A bill that belongs to a prior period is surfaced for your review rather than posted silently; everything else posts to the open period with full support attached.</p></details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put Aleq on your bill inbox.</h2>
          <p>Forward a week of real bills and watch Aleq read each one, run the match, and route it for approval — every payment prepared, nothing moved without your yes.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
