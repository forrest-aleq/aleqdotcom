import type { Metadata } from "next";
import Link from "next/link";

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
          <details open><summary>What does &ldquo;reconciled overnight&rdquo; actually mean?</summary><p>You wake up to every bank line matched to its entry and the variance at $0.00. The few it couldn&apos;t match are queued with a reason — not a fresh spreadsheet to build.</p></details>
          <details><summary>Does it ever force a wrong match to hit zero?</summary><p>Never. A possible duplicate or an unfamiliar counterparty is held, not booked. Aleq clears what it&apos;s sure of and leaves the judgment calls for you.</p></details>
          <details><summary>What&apos;s left for me in the morning?</summary><p>The exceptions, and only those. Each unmatched line arrives with what Aleq found and why it stopped — a five-minute review instead of a reconciliation.</p></details>
          <details><summary>Can it move money or change my bank?</summary><p>No. The bank connection is read-only — it reads transactions and can&apos;t move a dollar or touch a setting. Detail on the <Link href="/legal/security" style={{ color: "var(--primary)" }}>security page</Link>.</p></details>
          <details><summary>Does it get sharper over time?</summary><p>Yes. Every match you confirm teaches it your counterparties, so the share it clears itself climbs and your exception pile shrinks month over month.</p></details>
        </div>
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
