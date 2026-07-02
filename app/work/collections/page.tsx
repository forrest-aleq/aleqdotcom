import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";
import IndustryModesDemo from "@/components/IndustryModesDemo";
import type { ModeDemoItem } from "@/lib/industries";

// The autonomy ladder on collections: a proven first-reminder account runs
// alone, a voice call waits on its script, and a dispute always stops the
// machine and routes to a person.
const AR_MODES: ModeDemoItem[] = [
  {
    mode: "auto",
    head: "First reminder · day 1 past due",
    pill: "sent on schedule",
    body: "Ramp pays on the first nudge — it has, nine times. The reminder goes out in your voice the day the invoice ages, the case updates, and nobody on your team touches it.",
    facts: [
      { k: "Invoice", v: "INV-2201 · $12,400 · 1 day past due" },
      { k: "History", v: "pays on first reminder · seen 9×" },
    ],
  },
  {
    mode: "assist",
    head: "Voice call · script for approval",
    pill: "drafted · held",
    body: "Haven Foods settles on a call, not an email. Aleq drafts the script — asks for a payment date, never argues — and holds it for your approval before it dials.",
    facts: [
      { k: "Account", v: "Haven Foods · $48,200 · 32 days past due" },
      { k: "Script", v: "your tone rules · asks for a date" },
    ],
    approveLabel: "Approve & place call",
    approvedPill: "✓ promise captured",
    approvedNote: "recorded · transcribed · attached to the invoice",
  },
  {
    mode: "manual",
    head: "Dispute raised · pricing",
    pill: "routed to you",
    body: "The moment a customer disputes a line, everything stops — reminders, finance charges, calls. The case routes to your team with the full history attached. Aleq never argues a dispute.",
    facts: [
      { k: "Case", v: "Stark Industries · disputed line 3" },
      { k: "Status", v: "dunning paused · history attached" },
    ],
  },
];

const FAQS: FaqItem[] = [
  { q: "How does Aleq handle accounts receivable collections?", a: "Aleq is an AI accounting platform that runs AR collections end to end. The day an invoice goes past due, it opens a case, climbs a dunning ladder you configure, emails in your team's voice, and places AI phone calls on scripts you approve when email stalls. It captures every promise to pay — amount, date, who said it — then matches the payment when it lands and applies the cash to the right invoice in its native double-entry ledger. Unlike bolt-on tools like HighRadius, collection and cash application post to the same books. It connects read-only, goes live in 48 hours, and offers Manual, Assist, and Auto supervision modes." },
  { q: "What is dunning in accounts receivable?", a: "Dunning is the escalating sequence of reminders a business sends to collect overdue invoices — a friendly nudge first, firmer notices later, then calls, finance charges, and escalation. Most teams run it inconsistently because it depends on someone finding time. Aleq automates the whole ladder: you set the rungs once — when the tone firms up, when a finance charge is allowed, when a case escalates — and it climbs on schedule for every overdue invoice, pausing the moment a promise to pay or a dispute lands. No invoice skips a rung because someone was busy, and none jumps two because someone was annoyed." },
  { q: "What is cash application and why is it hard to automate?", a: "Cash application is matching incoming payments to the invoices they pay and posting them to the ledger. It is hard because payments arrive under names that aren't on the account, lump sums cover several invoices, and prepayments must be split across future months — one lockbox batch can take an analyst half a day by hand. Aleq matches each payment by reference, amount, and history, applies it to the open invoices, splits lump payments across the periods they cover, parks prepayments in deferred where they belong, and posts a balanced entry with the bank line attached. The case closes and the receivable clears without re-keying." },
  { q: "What is a promise to pay in collections?", a: "A promise to pay is a customer's commitment to settle an invoice — a specific amount, on a specific date, from a specific person. It matters because it pauses dunning, feeds your cash forecast, and creates accountability when broken. Aleq captures promises automatically: from email replies, or live on recorded AR calls, logging the amount, the day, and who said it, attaching the transcript to the invoice, and flagging the ledger as expected. It also tracks which customers keep their promises and which have missed them before, and escalates the repeat offenders accordingly." },
  { q: "What is the best collections software for B2B companies?", a: "It depends on scale. Enterprise AR suites like HighRadius and Billtrust suit large dedicated collections teams; QuickBooks and NetSuite can send templated invoice reminders, but nobody actually works the account. Aleq takes a different shape: an AI accounting platform where every overdue invoice becomes a case — dunning emails in your voice, AI phone calls that capture the promise to pay, disputes routed to a human, and cash applied back to the invoice in the ledger itself. It fits B2B companies that can't staff consistent follow-up. It connects read-only, goes live in 48 hours, and every action is logged and reversible." },
  { q: "How do companies automate accounts receivable follow-up?", a: "Most start with templated reminder emails from their billing system, which customers learn to ignore, then add a dunning cadence, then hire collectors for the phone work. Aleq automates all three layers: a case per overdue invoice, a dunning ladder that climbs on schedule, and AI voice calls when email stalls. Its learning system, TAMi — The Aleq Mind — tracks what actually works per account: who pays on the first nudge, who only moves on a call, who needs escalation — and earns autonomy pattern by pattern. Proven accounts run alone; new customers or unusual amounts drop back and ask first. You choose Manual, Assist, or Auto supervision." },
  { q: "Can AI really make phone calls to collect overdue invoices?", a: "Yes. Aleq places AR calls for the cases that need a voice — in your team's tone, on a script you approved. It reaches the right AP contact, asks for a payment date, and captures the promise to pay live: the amount, the day, who said it. Every call is recorded, transcribed, summarized, and attached to the invoice, and the case updates the same day. Accounts you mark email-only stay email-only, and nothing goes out — typed or spoken — in a voice you didn't approve." },
  { q: "Will AI calling my customers hurt our relationships?", a: "The damage in collections usually comes from inconsistency and surprises — months of silence, then an angry call or an unexpected finance charge. Aleq removes both. You set the tone rules once — friendly first reminder, no finance charge before day 45, never threaten to pause service — and every touch follows them. It asks for a date; it never argues. The moment a customer disputes or a conversation leaves the script, everything pauses and routes to a human with the full history. Customers get polite, predictable follow-up from someone who knows the account, which most understaffed AR teams can't deliver manually." },
  { q: "What happens when a customer disputes an invoice during automated collections?", a: "Dunning stops immediately. Aleq logs the dispute — what the customer said and about which line — pauses reminders and finance charges on the case, and routes it to your team with the complete history: every email, call recording, transcript, and promise, timestamped on the invoice. It never argues a dispute or keeps pressuring a customer who has raised one. When you resolve it, the case picks up where it left off, and because every ledger entry is logged and reversible, any billing correction posts cleanly." },
  { q: "Does collections automation actually reduce DSO?", a: "The mechanism is coverage and speed. DSO stays high because only the biggest overdue invoices get worked; the rest sit on the aging report until someone finds time. Aleq works every overdue invoice the day it ages: reminders go out on schedule, calls get placed, promises get captured, and cash is applied the moment it lands so the receivable actually clears. Consistency is what most finance teams can't staff, and it's exactly what software does well. Aleq also learns which approach moves each account, so effort goes where it changes the payment date." },
];

export const metadata: Metadata = {
  title: "Collections — gets you paid, without the awkward calls",
  description:
    "Aleq works every overdue invoice as a case — calling or emailing in your team's voice, capturing the promise to pay, and applying the cash back to the invoice. You set the tone and the limits; it does the chasing.",
};

export default function Page() {
  return (
    <>
      {/* 1 · HERO */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Collections</div>
            <h1>Gets you paid. Without the awkward calls.</h1>
            <p className="pp-hero-lead">Aleq chases every overdue invoice in your team&apos;s voice — you get the promised date, not the awkward call.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Put Aleq on collections</Link>
              <a className="btn btn-lg" href="#manual">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Collections · overdue
                <span className="pp-live"><i /> working</span>
              </div>
              <div className="pp-checks">
                <div className="pp-match-row"><span className="pp-match-line">Stark Industries<small>INV-7827 · 61+ days</small></span><span className="pp-match-right"><span className="pp-num">$412,400</span><span className="pp-conf warn">high risk</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Globex Corp.<small>INV-7831 · 31–60 days</small></span><span className="pp-match-right"><span className="pp-num">$148,200</span><span className="pp-conf warn">at risk</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Cyberdyne Systems<small>INV-7829 · promise to pay Fri</small></span><span className="pp-match-right"><span className="pp-num">$96,400</span><span className="pp-conf">on track</span></span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">3 of 14 cases shown</span>
                <span className="pp-ok">14 reminders sent today · 0 waiting on you</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">this morning</div>
              <div className="pp-float-v">14 reminders sent <span className="pp-ok">0 waiting on you</span></div>
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
              <h2 className="pp-h">Today, collections is a spreadsheet and a knot in your stomach.</h2>
              <p className="pp-sub">Pull the aging report. Pick who&apos;s worth a call. Look up the customer three different ways because the check came in under a name that isn&apos;t on the account. Make the awkward call, get a &quot;we&apos;ll pay Friday,&quot; and write it in a tab no one else can see. Then key the cash against the right invoices by hand — and a prepayment splits across ten months you have to allocate one at a time. Half a day on one batch, and the report&apos;s already stale. This is the work Aleq does instead.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">The manual morning · what it replaces</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:52</small>Pull aging, hunt customer 3 ways</span><span className="pp-num">23 payments</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>09:43</small>Key cash against invoices by hand</span><span className="pp-num">manually</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>10:14</small>Split a prepayment over 10 months</span><span className="pp-num neg">$1,080 deferred</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>11:52</small>Find 2 misapplied, reverse, re-apply</span><span className="pp-num neg">$735 off</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">one analyst · one lockbox batch</span><span className="pp-num neg">3h 54m</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · EVERY OVERDUE INVOICE IS A CASE */}
      <section className="pp-section" id="how">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It owns the follow-up</div>
              <h2 className="pp-h">Every overdue invoice is a case.</h2>
              <p className="pp-sub">Not a line on an aging report you keep meaning to call. Aleq opens a case the day an invoice goes past due, tracks every touch and every promise, and works it until it&apos;s paid or you step in. You see what&apos;s been done and what&apos;s next — for each one.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Case · Stark Industries
                  <span className="pp-live" style={{ color: "var(--warning)" }}>13 days past due</span>
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">Stark Industries · $412,400</div>
                  <div className="pp-belief-meta">INV-7827 · 3 missed promises this year</div>
                  <div className="pp-why"><b>Next move</b><p>Escalate to their AP lead and apply the 1.5%/mo finance charge in your terms. Stark has paid late before — and only moves once it&apos;s escalated.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>✓ Approve next move</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · THE DUNNING LADDER */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Rung by rung</div>
              <h2 className="pp-h">A dunning ladder that climbs on its own.</h2>
              <p className="pp-sub">You set the rungs once — when the friendly nudge goes out, when the tone firms up, when a finance charge is allowed, when it escalates past the AP clerk. Aleq climbs the ladder for every case on schedule, pausing the moment a promise lands or a dispute surfaces. No invoice skips a rung because someone was busy, and none jumps two because someone was annoyed.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Dunning ladder · INV-7831 · Globex</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>day 1</small>Friendly reminder · email</span><span className="pp-ok">sent</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>day 14</small>Second notice · firmer email</span><span className="pp-ok">sent</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>day 30</small>AR call · ask for a date</span><span className="pp-num">now</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>day 45</small>Finance charge 1.5%/mo</span><span className="pp-num neg">if terms allow</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>day 60</small>Escalate to your team</span><span className="pp-conf warn">holds for you</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">on day 31 · climbing rung 3</span><span className="pp-ok">pauses on a promise</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · COLLECTIONS BY VOICE */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It places the call</div>
              <h2 className="pp-h">When email stalls, Aleq picks up the phone.</h2>
              <p className="pp-sub">For the cases that need a voice, Aleq calls — in your team&apos;s tone, on the script you approved. It reaches the right contact, asks for a date, and captures the promise-to-pay live: the amount, the day, who said it. The call is recorded and summarized, and the case moves before you&apos;ve had your coffee. You step in only where you asked to.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  AR call · Haven Foods
                  <span className="pp-live"><i /> promise captured</span>
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">&quot;We&apos;ll have INV-7840 out Friday&quot;</div>
                  <div className="pp-belief-meta">$88,600 · spoke with A. Reyes, AP · 2m 41s</div>
                  <div className="pp-why"><b>Captured to the case</b><p>Promise-to-pay logged for Fri Jun 26 · $88,600. Call recorded and transcribed, attached to INV-7840. Ledger flagged expected.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>✓ Hear the call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · IT REACHES OUT IN YOUR VOICE */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It sounds like your team</div>
              <h2 className="pp-h">It reaches out in your voice.</h2>
              <p className="pp-sub">Email or a call, written the way your team actually talks — firm or friendly, your call. You set the tone and the limits once; Aleq sends on your standing orders, or holds for your yes on anything you flag. Nothing goes out in a voice you didn&apos;t approve.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Drafted · reminder to Globex
                  <span className="pp-live" style={{ color: "var(--fg-muted)" }}>your voice</span>
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">&quot;Hi Dana — following up on INV-7831&quot;</div>
                  <div className="pp-belief-meta">$148,200 · now 34 days past due</div>
                  <div className="pp-why"><b>Tone rules you set</b><p>Friendly first reminder, no finance charge before 45 days, never threaten to pause service. Sent on your standing orders.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>✓ Approve &amp; send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · CASH APPLICATION BACK TO THE INVOICE */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Cash application</div>
              <h2 className="pp-h">When the money lands, it clears the right invoices.</h2>
              <p className="pp-sub">A payment hits the bank under a name that isn&apos;t on the account — Aleq matches it anyway, by reference, amount, and history. It applies the cash to the open invoices, splits a lump payment across the months it covers, and parks a prepayment in deferred where it belongs. The case closes, the receivable clears, and the entry posts to the ledger with the bank line attached. No re-keying, no allocation by hand.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">bank</span><span><b>Deposit · $88,600</b><span className="sub">&quot;HAVEN FOODS LLC&quot; · BT-7840</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">match</span><span><b>Haven Foods · INV-7840</b><span className="sub">matched by ref + amount · promise kept</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">ledger</span><span><b>Dr Cash · Cr A/R $88,600</b><span className="sub">invoice cleared · case closed · bank line attached</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · IT CAPTURES THE PROMISE */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It listens, then records</div>
              <h2 className="pp-h">It captures the promise.</h2>
              <p className="pp-sub">When a customer says they&apos;ll pay Friday, Aleq writes it down — the amount, the date, who said it — and updates the ledger. If they dispute the invoice, it logs that instead and routes it to you. You always know where every dollar stands and why.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Where each case stands</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Cyberdyne Systems<small>$96,400 · pays Friday — recorded, ledger updated</small></span><span className="pp-tag auto">Promise to pay</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Initech LLC<small>$58,900 · says a line item is wrong — sent to you</small></span><span className="pp-tag asks">Dispute</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Stark Industries<small>$412,400 · 3rd reminder out, no reply yet</small></span><span className="pp-tag asks">Dunning</span></div>
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
              <h2 className="pp-h">It learns who pays late — and what actually works.</h2>
              <p className="pp-sub">Every account is a belief in TAMi — The Aleq Mind: it learns who pays on the first nudge, who only moves on a call, who needs an escalation, and weights each pattern by how often it held up. An account it has read right seven times runs on its own; a new customer or an unusual amount drops back and asks first. You can see every belief, how sure it is, and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <IndustryModesDemo items={AR_MODES} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What finance leaders ask first.</h2>
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
          <h2>Put Aleq on collections.</h2>
          <p>Set the tone and the limits, and watch Aleq work a real aging report — every reminder in your voice, every call placed, every promise captured, every dollar applied back to the invoice.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
