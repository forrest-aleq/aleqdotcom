import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "How does Aleq automate accounts payable?", a: "Aleq is an AI accounting platform that handles the whole AP workflow. A bill PDF lands in your inbox, and Aleq reads the vendor, invoice number, amount, and due date with a confidence score on every field, suggests the GL coding, runs the three-way match against the PO and the goods receipt, and routes it up the approval chain your policy defines. Approved bills drop into a payment run staged for your bank rails — Aleq never moves money itself. It also catches duplicates, holds changed bank details, and spots early-pay discounts, like a 2/10 term worth $3,768 on a single wire. Every step is logged and audit-ready." },
  { q: "What is AP automation software?", a: "AP automation software takes an invoice from arrival to payment without manual keying: capturing the bill, coding it, matching it to a purchase order, routing approvals, and preparing payment. Tools like Bill.com and Ramp automate pieces of this but still lean on humans for data entry review, coding, and exceptions. Aleq is an AI accountant that does the work end to end: it reads each bill with field-level confidence scores, applies your GL coding, runs the three-way match, enforces your approval thresholds, and stages payments for your own bank rails — while posting balanced double-entry journals to its ledger as it goes." },
  { q: "What is three-way matching in accounts payable?", a: "Three-way matching verifies a bill against two other documents before it's paid: the purchase order you raised and the receipt proving the goods or services actually arrived. Quantities, prices, and totals must agree across all three — so you never pay for an order no one approved or a shipment that never showed up. Done by hand, it's slow enough that many teams skip it below a threshold. Aleq runs the three-way match on every bill automatically, clears the ones that tie out, and holds any mismatch with an explanation before a dollar moves." },
  { q: "What is the best AP automation software?", a: "It depends on how much judgment you want the software to carry. Bill.com is the standard for payment workflows but still requires manual keying and review; Ramp pairs AP with corporate cards. Aleq is built for teams that want AP done, not just organized: it reads every bill with confidence-scored extraction, codes it, runs the three-way match, and enforces your approval chain — a second signer over $100k, CFO above your threshold — then stages payments for your rails without ever moving money itself. It learns your vendors and earns autonomy one vendor at a time, and it's live in 48 hours." },
  { q: "Can AI read and process invoices automatically?", a: "Yes — and modern AI goes well past OCR templates. Aleq reads the invoice like an accountant would: it extracts the vendor, bill number, amount, and due date, and suggests the GL account, each with its own confidence score — 100% on an amount, 96% on a coding suggestion. There's no template setup and no misread characters silently keyed into a second system; anything below its confidence bar is flagged rather than posted, because nothing posts on a guess. Over time it learns each vendor's coding — a monthly AWS bill it has seen 36 times runs alone, while a brand-new vendor asks first." },
  { q: "Is AP automation safe?", a: "It's safer than a shared inbox and manual keying, if the controls are real. Aleq never moves money on its own — it stages matched, coded, approved payments for your existing bank rails, and you release them. Your approval policy is enforced in software: a six-figure wire requires a second signer, bills over your threshold route to the CFO, and only small, routine bills from trusted vendors clear automatically. Every bill carries the PDF it came from, the PO and receipt it matched, and who approved it — full provenance, one export, audit-ready." },
  { q: "How does AP automation prevent duplicate payments?", a: "Duplicates happen when the same invoice enters through two channels — a vendor mails a check for a bill that's also on ACH autopay, or a PDF gets forwarded twice. Manual review catches this inconsistently. Aleq checks every incoming bill against everything already in your books: same vendor, same amount, same invoice number gets held and flagged, not paid twice. The suspect bill stays visible with the reason it was stopped, so a person decides. And because Aleq posts to a double-entry ledger, there's exactly one record per obligation — the structure itself resists paying the same debt twice." },
  { q: "How does AP automation prevent invoice fraud?", a: "The two big fraud vectors are fake vendors and hijacked bank details — an email announcing that a known supplier has new routing information. Aleq stops both before any payment is staged: a bank-detail change on a known vendor is held until a human confirms the payee, and a brand-new payee with no payment history is flagged for verification before its first bill can be paid. Combined with three-way matching — no payment without a PO and a receipt that agree — and an enforced approval chain, there's no path where a convincing PDF alone gets money moved." },
  { q: "Does AP automation software handle 1099s and W-9s?", a: "Aleq handles the collection and tracking side. It flags every vendor that will need a 1099, and any bill from a vendor missing a W-9 is held — coded and ready, but not payable — until the form is collected, so you're not chasing paperwork in January. It keeps your year-end totals per vendor current through the year. Aleq doesn't file the 1099s itself; it keeps the data complete so filing is a report you run, not a reconstruction project across an inbox and a spreadsheet." },
  { q: "How long does it take to implement AP automation?", a: "Traditional AP implementations run weeks to months: OCR template setup, approval workflow configuration, vendor onboarding. Aleq is live in 48 hours. You point your bill inbox at it and it starts reading bills immediately — no templates, because the AI reads the document rather than matching a layout. It begins in supervised mode, suggesting coding and matches for your approval, and earns autonomy vendor by vendor as its work holds up. You can forward a week of real bills and watch it read, match, and route every one before changing anything about how payments actually go out." },
];

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
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your bills</Link>
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

      {/* 9 · POWERED BY TAMi */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Powered by TAMi</div>
              <h2 className="pp-h">It learns each vendor — then earns the autonomy, one at a time.</h2>
              <p className="pp-sub">Every payment starts as a belief in TAMi — The Aleq Mind: it learns how your AP team codes and approves each vendor, weights it by how often it held up, and only runs on its own once the belief is strong enough — per vendor, never all at once. A monthly AWS bill it has seen dozens of times runs alone; a $188k Foxconn wire over your limit drops back and asks first. You can see every belief, how sure it is, and switch any of them off.</p>
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

      {/* FAQ */}
      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What CFOs ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      {/* 12 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put Aleq on your bill inbox.</h2>
          <p>Forward a week of real bills and watch Aleq read each one, run the match, and route it for approval — every payment prepared, nothing moved without your yes.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
