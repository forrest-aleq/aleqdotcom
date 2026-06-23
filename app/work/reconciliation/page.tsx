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
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
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
              <p className="pp-sub">Log into four bank portals across seven accounts. Export 1,847 GL lines from NetSuite into a workbook. Hunt a $2,445.86 variance line by line. Trace one $46,443.72 Stripe payout — net of fees, settling two days late — back to 247 customer payments. Key the correcting entries by hand, then file the proof in a shared drive so an auditor can find it. One controller, one morning, before a single judgment call. This is the work Aleq does instead.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">The manual close · what it replaces</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:01</small>Log into 4 banks · 7 accounts</span><span className="pp-num">by hand</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:23</small>Export GL from NetSuite</span><span className="pp-num">1,847 lines</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:31</small>Hunt the operating variance</span><span className="pp-num neg">$2,445.86</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>09:23</small>Trace one Stripe payout to 247 checks</span><span className="pp-num">$46,443.72</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>10:44</small>Key correcting JEs, file the proof</span><span className="pp-num">manually</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">one controller · month-end</span><span className="pp-num neg">4h 52m</span></div>
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
              <p className="pp-sub">Your operating account came in $17,488 off the books. Aleq tracked it down — an unrecorded payroll-tax draft and a duplicate Stripe payout — posted the fixes, and left them one click to undo. You see the work that got done, not a pile of flags to chase.</p>
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
              <p className="pp-sub">A Stripe payout isn&apos;t one number. It&apos;s 247 customer payments collected over two days, aggregated into a single transfer, net of $1,388.43 in fees, landing in the bank after the invoices were booked. Aleq holds all three sources at once — the bank line, the processor activity, and the clearing account — and resolves the timing and the fee split so every side ties out. The gross, the fees, and the net all reconcile to $0.00, without a workbook.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Stripe payout · reconciled three ways
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>source</small>247 customer payments · Sep 28–29</span><span className="pp-num">$47,832.15</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>fees</small>Stripe processing · split to expense</span><span className="pp-num neg">($1,388.43)</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>bank</small>Net payout · Chase Operating ••4829</span><span className="pp-num pos">$46,443.72</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>clearing</small>Stripe clearing drained to $0</span><span className="pp-num">$0.00</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">3 sources · timing &amp; fees resolved</span><span className="pp-ok">$0.00 difference</span></div>
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
              <p className="pp-sub">Each suggested match comes with a confidence score and the plain reason behind it — the amount, the timing, the name on the transaction. Accept it in a click, or open the receipt and check. Nothing posts on a guess.</p>
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
              <p className="pp-sub">Behind each reconciliation is TAMi, the mind that runs Aleq. It forms a belief per match — these bank lines mean that payout, this counterparty settles late — and weights it by how many times it held up under your controller&apos;s eye. A pattern confirmed hundreds of times runs on its own; a new counterparty or an off amount drops back to a draft and asks first. You see the belief, how sure it is, and how many confirmations earned it the autonomy.</p>
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

      {/* 7 · IT LEARNS YOUR RULES */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It gets better the longer it runs</div>
              <h2 className="pp-h">It learns your rules — then earns the right to run them.</h2>
              <p className="pp-sub">When the same call goes the same way enough times, Aleq stops asking. You can see every rule it&apos;s learned, how sure it is, and whether it runs on its own yet — and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq has learned</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Stripe payouts → Stripe clearing<small>matched 412× · never wrong</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">AWS bill in the last days of the month<small>seen 36×</small></span><span className="pp-learned-bar"><i style={{ width: "99%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Stark pays only after a nudge<small>seen 7×</small></span><span className="pp-learned-bar mid"><i style={{ width: "42%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · YOU DECIDE HOW MUCH IT DOES */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">You stay in control</div>
              <h2 className="pp-h">You decide how much it does.</h2>
              <p className="pp-sub">Set it per account, never all-or-nothing. Aleq can draft and wait for your yes, or post on its own where it&apos;s earned the trust — and you can pull any account back the moment you want. Everything it posts is signed and reversible.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> How much Aleq runs, by account</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Bank — JPMC ••4421<small>reconciliation</small></span><span className="pp-tag auto">Automatic</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Card — Brex<small>reconciliation</small></span><span className="pp-tag auto">Automatic</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Vendor wires over $100k<small>payments</small></span><span className="pp-tag asks">Posts on your yes</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Close the period<small>sign-off</small></span><span className="pp-tag asks">You only</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · STATS */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-stats reveal">
            <div className="pp-stat"><div className="pp-stat-v pos">$0.00</div><div className="pp-stat-l">Difference at sign-off</div></div>
            <div className="pp-stat"><div className="pp-stat-v">2,261</div><div className="pp-stat-l">Lines matched overnight</div></div>
            <div className="pp-stat"><div className="pp-stat-v">03:42</div><div className="pp-stat-l">Done, before you&apos;re in</div></div>
            <div className="pp-stat"><div className="pp-stat-v">48<span className="u">hrs</span></div><div className="pp-stat-l">From connect to live</div></div>
          </div>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What controllers ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>How do my auditors treat entries Aleq posts?</summary><p>Every reconciling entry carries its own support — the bank line, the matched document, the reason it matched, and a signature — so it reviews like a well-documented manual entry, not a black box. The complete trail exports for your audit, and you can see who (or what) touched every number.</p></details>
          <details><summary>Can it touch a period I&apos;ve already closed?</summary><p>No. Closed and locked periods are off-limits to Aleq, the same as anyone else. Reconciling entries post to the open period; anything that would affect a prior period is surfaced for your review, never posted silently.</p></details>
          <details><summary>What decides whether it posts on its own or waits for me?</summary><p>You do. You set the materiality threshold and which accounts run automatically. Under the limit on a pattern it has proven, it posts; over the limit, on a new counterparty, or on anything unusual, it drafts and holds for your approval.</p></details>
          <details><summary>What happens when it gets one wrong?</summary><p>Every posting is reversible — the reversing entry is staged before it posts — so you undo it in a click. Aleq learns from the correction and asks first on anything like it until it&apos;s sure. You stay the controller of record on every entry.</p></details>
          <details><summary>Where does my bank data live, and can it move money?</summary><p>Aleq connects read-only through your existing feeds: it sees transactions but can&apos;t move money or change a bank setting. Data is encrypted and access is role-scoped — full detail on the <Link href="/legal/security" style={{ color: "var(--primary)" }}>security page</Link>.</p></details>
        </div>
      </section>

      {/* 11 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put it on reconciliation first.</h2>
          <p>Connect read-only and watch Aleq reconcile a real month on your books — every match explained, every entry reversible.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
