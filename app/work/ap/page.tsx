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
      {/* 1 · HERO */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Accounts payable</div>
            <h1>Pays the right bills. On your approval.</h1>
            <p className="pp-hero-lead">Every bill checked and ready to pay. You approve — money never moves on its own.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your bills</Link>
              <a className="btn btn-lg" href="#manual">How it works</a>
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

      {/* 2 · THE MANUAL WAY */}
      <section className="pp-section alt" id="manual">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The manual way</div>
              <h2 className="pp-h">Today, every bill is keyed, chased, and matched by hand.</h2>
              <p className="pp-sub">A PDF lands in the shared AP inbox. Someone keys the vendor, the invoice number, and the amount into Bill.com — then matches the PO and the receipt by eye, chases a CFO approval across Slack and email, and prays a duplicate doesn&apos;t slip through. One specialist, one batch, most of a morning. An expired card quietly fails an AWS autopay until service is threatened, and a vendor paid twice has to be clawed back. This is the work Aleq does instead.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">The manual AP morning · what it replaces</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:31</small>Triage the shared AP inbox</span><span className="pp-num">23 invoices</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:44</small>Key a bill into Bill.com by hand</span><span className="pp-num">by hand</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:52</small>Chase CFO approval over Slack</span><span className="pp-num">over $3k</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>09:18</small>AWS autopay failed · expired card</span><span className="pp-num neg">$3,847.23</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>11:07</small>Catch a near double-payment</span><span className="pp-num neg">$2,400.00</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">one specialist · one batch</span><span className="pp-num neg">4h 16m</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · IT READS THE BILL */}
      <section className="pp-section" id="how">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It understands the bill</div>
              <h2 className="pp-h">It reads the bill, not just files it.</h2>
              <p className="pp-sub">A PDF lands in your inbox and Aleq pulls out the vendor, the bill number, the due date, and the amount — then suggests the GL account it belongs in, with a confidence score on each read. No ABBYY ritual, no &quot;8&quot; misread as &quot;B,&quot; no re-keying into a second system. Nothing is keyed by hand, and nothing posts on a guess.</p>
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

      {/* 4 · DEEP DIVE — INTAKE → MATCH → APPROVE → PAY */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">One bill, end to end</div>
              <h2 className="pp-h">From inbox to approved batch, in one place.</h2>
              <p className="pp-sub">Watch a single bill move: extracted with confidence on every field, tied out three ways against the PO you raised and the goods you received, run up the approval chain your policy defines, then dropped into a payment run — matched, coded, approved, and ready for your rails. No Stripe-to-Chase timing dance, no four bank portals, no spreadsheet priority matrix.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Bill FX-2026-04 · the full path
                </div>
                <div className="pp-app-body" style={{ padding: "6px 18px 8px" }}>
                  <div className="pp-match-row"><span className="pp-match-line">1 · Intake<small>read off PDF · 5 fields</small></span><span className="pp-match-right"><span className="pp-conf">99%</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">2 · Three-way match<small>PO-7731 ↔ GR ↔ Bill</small></span><span className="pp-match-right"><span className="pp-tag auto">3/3 matched</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">3 · Approval chain<small>over $100k · two signers</small></span><span className="pp-match-right"><span className="pp-tag asks">CFO pending</span></span></div>
                  <div className="pp-match-row"><span className="pp-match-line">4 · Payment run<small>wire · early-pay 2/10</small></span><span className="pp-match-right"><span className="pp-conf">staged</span></span></div>
                </div>
                <div className="pp-je">
                  <div className="pp-je-row"><span className="pp-je-side dr">DR</span><span className="pp-je-acct"><small>14000</small>Inventory</span><span className="pp-num">$188,440.00</span></div>
                  <div className="pp-je-row"><span className="pp-je-side cr">CR</span><span className="pp-je-acct"><small>20000</small>Accounts Payable</span><span className="pp-num">$188,440.00</span></div>
                  <div className="pp-je-bal"><span className="pp-k">Debits − Credits</span><span className="pp-ok">$0.00 · balanced</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · THREE-WAY MATCH */}
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

      {/* 6 · APPROVAL CHAIN */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The right people, in the right order</div>
              <h2 className="pp-h">The right approval, every time.</h2>
              <p className="pp-sub">Your $100k limit isn&apos;t a suggestion. A $188,440 wire climbs the approval chain to a second signer before it can be released; a $4,200 vendor bill over your $3k threshold routes to the CFO; small, routine bills on a vendor you trust move on their own. No Slack message lost in a thread — every approval is logged, so the trail reads cleanly months later.</p>
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

      {/* 7 · DUPLICATE & FRAUD DEFENSE */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Caught before it&apos;s paid</div>
              <h2 className="pp-h">A bill never gets paid twice.</h2>
              <p className="pp-sub">When a vendor mails a check for an invoice that&apos;s also set to ACH autopay, the old way is a phone call and a scramble to cancel before both clear. Aleq holds it instead: same vendor, same amount, same invoice number gets caught and flagged, not paid twice. Bank details that change on a known vendor, or a brand-new payee, are surfaced for a human before anything moves.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">Duplicate &amp; payee checks · before the run</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Marina del Rey · $2,400<small>ACH scheduled + check received</small></span><span className="pp-tag asks">Held · dup</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Vendor bank detail changed<small>SVB → new routing</small></span><span className="pp-tag asks">Confirm payee</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Brand-new payee · first bill<small>no payment history</small></span><span className="pp-tag asks">Verify first</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">AquaTech · AT-2025-1047<small>unique vendor + invoice + amount</small></span><span className="pp-tag auto">Clear</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · IT LEARNS YOUR VENDORS */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
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

      {/* 9 · POWERED BY TAMi */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Powered by TAMi</div>
              <h2 className="pp-h">It learns each vendor — then earns the autonomy, one at a time.</h2>
              <p className="pp-sub">Every payment starts as a belief in TAMi, the mind behind Aleq: it watches how your AP team codes and approves each vendor, weights it by how often it held up, and only runs on its own once the belief is strong enough — per vendor, never all at once. A monthly AWS bill it has seen dozens of times runs alone; a $188k Foxconn wire over your limit drops back and asks first. You can see every belief, how sure it is, and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Autonomy TAMi has earned, per vendor</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">AWS monthly bill → 50100<small>seen 36× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Newport Office rent → 60500<small>seen 24× · same amount monthly</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">$188k Foxconn wire<small>over limit · seen 4×</small></span><span className="pp-learned-bar mid"><i style={{ width: "38%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">New AquaTech vendor<small>seen 2× · learning the coding</small></span><span className="pp-learned-bar mid"><i style={{ width: "22%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · STATS */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-stats reveal">
            <div className="pp-stat"><div className="pp-stat-v pos">$0</div><div className="pp-stat-l">Paid twice, all year</div></div>
            <div className="pp-stat"><div className="pp-stat-v">100<span className="u">%</span></div><div className="pp-stat-l">Three-way matched before pay</div></div>
            <div className="pp-stat"><div className="pp-stat-v">4.2<span className="u">m</span></div><div className="pp-stat-l">Manual minutes per bill, gone</div></div>
            <div className="pp-stat"><div className="pp-stat-v">48<span className="u">hrs</span></div><div className="pp-stat-l">From connect to live</div></div>
          </div>
        </div>
      </section>

      {/* 11 · FAQ */}
      <section className="pp-section">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What CFOs ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Does Aleq actually send the payment?</summary><p>No. Aleq prepares the payment — matched, coded, approved, and ready — and hands an approved batch to your existing rails for execution. It routes a clean run to your bank or payment provider; it does not move the money itself and has no standing authority to. You stay in control of the release.</p></details>
          <details><summary>How do you stop a duplicate or fraudulent payment?</summary><p>Every bill is matched against the ones already in your system before it can be scheduled — same vendor, same amount, same invoice number gets caught and held, not paid twice. A check arriving on an invoice that&apos;s also set to ACH is flagged before both clear. Bank details that change on a known vendor, or a brand-new payee, are flagged for a human to confirm. And nothing is cleared to pay until it ties to a real PO and a real receipt, so an invented invoice has nothing to match.</p></details>
          <details><summary>Who approves before money moves?</summary><p>You set the approval chain, and Aleq follows it exactly. Below your threshold on a vendor it has proven, it can clear a routine bill on its own; over the limit, on a new vendor, or on anything unusual, it routes the bill up the chain — a $4,200 bill over a $3k threshold goes to the CFO, and a $100k+ wire needs your second signer before it can be released. Every approval is logged with who approved what, and when.</p></details>
          <details><summary>What about 1099s and missing W-9s?</summary><p>Aleq knows which vendors are 1099-reportable and tracks what&apos;s on file. If a bill comes in from a 1099 vendor with no W-9, it&apos;s held — coded and ready, but not cleared to pay — until the form is collected, so you&apos;re never short the information you need at year-end. It keeps the running totals you&apos;ll report, but it does not file your taxes.</p></details>
          <details><summary>Will an auditor accept this trail?</summary><p>Yes. Every bill carries its own provenance — the PDF it was read from, the PO and receipt it matched, who approved it and when, and the journal entry it posted — so it reviews like a well-documented manual payment. The complete trail exports for audit, and closed periods stay off-limits: a bill belonging to a prior period is surfaced for your review, never posted silently.</p></details>
        </div>
      </section>

      {/* 12 · CTA */}
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
