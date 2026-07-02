import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "How does Aleq automate bank reconciliation?", a: "Aleq is an AI accounting platform that reconciles bank, card, and payment processor accounts overnight. It matches every transaction line to its source — invoices, bills, payouts — investigates variances, posts the correcting entries with explanations, and works exceptions down to a $0.00 difference before the workday begins. In a representative overnight run, 2,261 lines are matched across four banks and seven accounts, with two items held for human review. Every match shows its reasoning, every entry is logged and reversible, and the bank connection is read-only, so Aleq can never move money. It replaces the manual matching controllers do in QuickBooks or NetSuite, runs on its own double-entry ledger, and is live in 48 hours." },
  { q: "What is bank reconciliation software?", a: "Bank reconciliation software matches the transactions on your bank statement against the entries in your accounting system, so your books reflect what actually happened to your cash. Traditional tools like QuickBooks bank feeds or BlackLine rely on rules you write and still leave the unmatched lines to a person. Aleq takes it further: an AI accountant matches bank, card, and processor lines to invoices and bills overnight, investigates the discrepancies, posts entries with an explanation, and holds anything uncertain for your review — so reconciliation is finished by morning instead of consuming a controller's month-end." },
  { q: "Can AI reconcile bank accounts automatically?", a: "Yes. AI can now match bank transactions to invoices, bills, and payouts using amount, timing, and counterparty names — including messy cases rules can't handle, like a processor payout that bundles hundreds of payments and fees. Aleq does this overnight: it matches confirmed patterns on its own, attaches a confidence score and a written reason to every match, and holds anything it isn't sure of — a possible duplicate, a new counterparty — for a human. It never forces a wrong match to reach zero, and every entry it posts is reversible in one click." },
  { q: "How do you reconcile Stripe payouts to your bank account?", a: "A Stripe payout lands in your bank as one net number, but it's really hundreds of individual payments minus fees — so matching the total isn't enough. Proper reconciliation breaks the payout apart, ties each payment back to the invoice it settled, and codes the fees separately. Aleq does this automatically: it splits each payout, matches every payment to its invoice — for example, 247 individual payments within a single payout — codes the processing fees to bank fees, and reconciles the clearing account to $0.00, with no timing spreadsheet between Stripe and your bank." },
  { q: "What is the best bank reconciliation software?", a: "It depends on how much of the work you want automated. Rules-based tools like QuickBooks bank feeds suggest matches for simple one-to-one transactions; enterprise platforms like BlackLine manage the reconciliation process but still leave the matching and investigation to your team. Aleq is built for teams that want the work itself done: it reconciles bank, card, and processor accounts overnight, splits processor payouts into individually matched payments, investigates variances and posts explained, reversible entries, and holds only true judgment calls for a human. It connects read-only and is live in 48 hours." },
  { q: "How long does it take to implement bank reconciliation software?", a: "Enterprise reconciliation tools often take weeks or months to implement because they need rules configured for every match pattern. Aleq is live in 48 hours: it connects to your banks, cards, and payment processors read-only, learns your counterparties from the transactions themselves rather than from rules you write, and starts reconciling overnight. Because the connection is read-only and every entry it posts is logged and reversible, you can watch it run a real month on your books before trusting it with more." },
  { q: "Is it safe to connect my bank account to accounting software?", a: "With a read-only connection, yes. Aleq connects to your banks read-only: it can see transactions but cannot move a dollar, change a setting, or initiate a payment — it has no payment authority at all. On the accounting side, every entry it posts is logged with its reasoning and reversible in one click, and you choose the supervision mode per task: Manual, Assist, or Auto. That means you can start with Aleq suggesting matches for your approval and only let patterns run alone after they have proven themselves on your books." },
  { q: "What happens when a bank reconciliation doesn't match?", a: "A difference between the bank and the books usually traces to timing, an unrecorded item, or a duplicate. The manual approach is hours of hunting through statements. Aleq investigates the gap itself: for a $17,488.53 difference, it will identify the causes — say, an unrecorded payroll-tax draft plus a duplicate payout — post the correcting entries with an explanation of each, and bring the account to $0.00. Anything it can't resolve with confidence is held with a written reason for what it found and why it stopped, so the morning review takes minutes rather than hours." },
  { q: "How accurate is AI bank reconciliation?", a: "Accuracy comes from refusing to guess, not from matching everything. Aleq attaches a confidence score and a plain-English reason to every match — the amount, the timing, the counterparty name — and only posts what clears its bar. In the product's reference example, 410 of 412 lines match automatically and two, such as a suspected duplicate payout, are held for review. Nothing is forced to zero, every posted entry is reversible, and every match you confirm or correct teaches it your counterparties, so the share it clears on its own climbs over time." },
  { q: "Does bank reconciliation software replace an accountant?", a: "No — it replaces the mechanical part of the job. Aleq does the matching, the variance hunting, and the entry posting overnight; your accountant keeps the judgment calls. Exceptions like a possible duplicate or a new counterparty over $5,000 are held for a person, and you set how much runs alone with per-task supervision modes: Manual, Assist, or Auto. Autonomy is earned — a pattern confirmed hundreds of times runs by itself, while anything new asks first. The controller keeps control of what posts to the books; the mechanical work stops consuming the month-end." },
];

export const metadata: Metadata = {
  title: "Reconciliation — matched to the penny, by morning",
  description:
    "Aleq matches every bank, card, and processor line to its source overnight — across four banks and seven accounts — reconciles the Stripe timing and fees to $0.00, works the exceptions, posts the entries, and signs off. You wake up to $0.00, not a four-hour morning. Learned and run by TAMi.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Reconciliation</div>
            <h1>Reconciled to the penny, by morning.</h1>
            <p className="pp-hero-lead">Aleq reconciles overnight. You wake up to finished books — not a <span className="nb">to-do list</span>.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Reconciliation · JPMC Operating ••4421 · May
                <span className="pp-live"><i /> done 03:42</span>
              </div>
              <div className="pp-checks">
                <div className="pp-match-row"><span className="pp-match-line">Ramp Business Corp<small>matched to invoice INV-7819</small></span><span className="pp-match-right"><span className="pp-num pos">+$88,400</span><span className="pp-conf">100%</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Wire out — Foxconn Mfg.<small>matched to bill B-3051</small></span><span className="pp-match-right"><span className="pp-num">−$188,440</span><span className="pp-conf">99%</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Stripe transfer<small>matched to invoice INV-7820</small></span><span className="pp-match-right"><span className="pp-num pos">+$142,400</span><span className="pp-conf">96%</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Stripe transfer<small>looks like a duplicate — held for you</small></span><span className="pp-match-right"><span className="pp-num pos">+$88,400</span><span className="pp-conf warn">review</span></span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">412 lines · 410 matched · 2 held for you</span>
                <span className="pp-ok">$0.00 difference</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">last night</div>
              <div className="pp-float-v">2,261 lines matched <span className="pp-ok">$0.00</span></div>
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
              <h2 className="pp-h">Today, the close is a four-hour truth-finding mission.</h2>
              <p className="pp-sub">A controller&apos;s whole morning, every month-end — gone before a single judgment call.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Month-end reconciliation
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>by hand · one controller, every month</small>Log 4 banks, export 1,847 lines, hunt the variance</span><span className="pp-num neg">4h 52m</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>with Aleq · overnight, untouched</small>2,261 lines matched while you slept</span><span className="pp-num pos">0 min</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">done 3:42 AM · 2 exceptions left for you</span><span className="pp-ok">$0.00</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · IT WORKS THE EXCEPTIONS */}
      <section className="pp-section" id="how">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It does the hard part</div>
              <h2 className="pp-h">It works the exceptions — it doesn&apos;t hand them back.</h2>
              <p className="pp-sub">You wake up to the work done — the fixes posted and explained, not a pile of flags to chase.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step"><span className="pp-k">the gap</span><span><b>$17,488.53 off</b><span className="sub">bank vs. books, JPMC ••4421</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">what it found</span><span><b>Two causes, explained</b><span className="sub">an unrecorded payroll-tax draft + a duplicate payout</span></span></div>
                <div className="pp-drill-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg></div>
                <div className="pp-drill-step"><span className="pp-k">the result</span><span><b>$0.00, entries posted</b><span className="sub">each one reversible in a click</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · MULTI-SOURCE MATCHING */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Multi-source matching</div>
              <h2 className="pp-h">Bank, processor, and clearing — reconciled as one.</h2>
              <p className="pp-sub">A payout isn&apos;t one number — it&apos;s hundreds of payments, each tied back to the invoice it paid, not just the total.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  One Stripe payout · 247 payments, each matched to its invoice
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>matched · 100%</small>INV-7798 · Stark Industries</span><span className="pp-num">$12,650.00</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>matched · 100%</small>INV-7811 · Cyberdyne Systems</span><span className="pp-num">$4,180.00</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>matched · 96%</small>INV-7820 · Vanta Inc.</span><span className="pp-num">$9,400.00</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>+ 244 more · fees coded to bank fees</small>every remaining payment</span><span className="pp-num">matched</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">247 of 247 matched · overnight, untouched</span><span className="pp-ok">$0.00</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · EVERY MATCH SHOWS ITS REASONING */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">No black boxes</div>
              <h2 className="pp-h">Every match shows its reasoning.</h2>
              <p className="pp-sub">Every match shows why — the amount, the timing, the name. Accept in a click, or open the receipt. Nothing posts on a guess.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Suggested match
                  <span className="pp-live" style={{ color: "var(--fg-muted)" }}>96% confident</span>
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">Stripe transfer · +$142,400</div>
                  <div className="pp-belief-meta">matches Vanta Inc. · invoice INV-7820</div>
                  <div className="pp-why"><b>Why this match</b><p>The amount matches to the cent, it landed within five days of the invoice, and &quot;Vanta&quot; appears on the transaction.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>✓ Accept match</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · POWERED BY TAMi */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Powered by TAMi</div>
              <h2 className="pp-h">Every match is a belief — earned, not a rule you wrote.</h2>
              <p className="pp-sub">A pattern confirmed hundreds of times runs alone; a new counterparty or an off amount drops to a draft and asks first. You set where the line sits.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What TAMi has earned</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Stripe payouts → clearing<small>matched 412× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Lockbox per-item fees → bank fees<small>matched 96× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Partnership distribution wire<small>seen 4×</small></span><span className="pp-learned-bar mid"><i style={{ width: "44%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">New counterparty over $5k<small>seen 2×</small></span><span className="pp-learned-bar mid"><i style={{ width: "28%" }} /></span><span className="pp-tag asks">Asks first</span></div>
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
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      {/* 11 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put it on reconciliation first.</h2>
          <p>Connect read-only and watch Aleq reconcile a real month on your books — every match explained, every entry reversible.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
