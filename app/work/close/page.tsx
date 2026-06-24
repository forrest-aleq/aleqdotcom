import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Month-End Close — sealed on schedule, day by day",
  description:
    "Aleq runs the close as a living checklist across every entity — posts the mechanical entries as they're ready, drafts the judgment calls, and clears the critical path so the period seals on schedule. You sign off; nothing closes without you.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">The close</div>
            <h1>Closes the month. Day by day, not at the end.</h1>
            <p className="pp-hero-lead">Aleq closes a little every day. Month-end becomes a sign-off, not a sprint.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                May close · Sirius Robotics · day 3 of 5
                <span className="pp-live"><i /> on schedule</span>
              </div>
              <div className="pp-checks">
                <div className="pp-checkrow"><span className="pp-learned-rule">Bank reconciliation<small>all accounts · $0.00 difference</small></span><span className="pp-tag auto">Done</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">Revenue recognition<small>deferred revenue released</small></span><span className="pp-tag auto">Done</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">AP cutoff<small>invoices accrued to period</small></span><span className="pp-tag auto">Done</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">Accruals &amp; depreciation<small>drafted · awaiting accept</small></span><span className="pp-tag asks">Drafted</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">Flux narrative<small>variances explained · read it</small></span><span className="pp-tag asks">Your review</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">Period sign-off<small>seal &amp; lock the period</small></span><span className="pp-tag asks">You only</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">22 tasks across 6 entities</span>
                <span className="pp-ok">15 auto · 5 drafted · 2 human-only</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">day 3 of 5</div>
              <div className="pp-float-v">62% of the close done <span className="pp-ok">on schedule</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="manual">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The manual way</div>
              <h2 className="pp-h">Today, the close is a day you block off.</h2>
              <p className="pp-sub">First Monday of the month, extra-large cold brew, the whole day held on the calendar because &quot;everything going smoothly&quot; rarely happens. Pull statements from four banks and seven accounts, export the GL from NetSuite, tie every subledger out by hand in Excel, chase a $2,445.86 variance through outstanding checks and unrecorded fees, key the correcting entries, then build the audit folder and write the sign-off email to the CFO. One controller, most of a day — and that&apos;s before a single judgment call. This is the choreography Aleq runs instead.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">The dreaded checklist · what it replaces</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:01</small>Pull statements · 4 banks, 7 accounts</span><span className="pp-num">by hand</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>08:23</small>Export October GL from NetSuite</span><span className="pp-num">1,847 lines</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>09:23</small>Tie out Stripe clearing · 247 payments</span><span className="pp-num">45 min</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>10:17</small>Chase a variance through outstanding items</span><span className="pp-num neg">$2,445.86</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>10:44</small>Key correcting entries · JE-4501 to 4504</span><span className="pp-num">4 entries</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>12:34</small>Build audit folder · email CFO sign-off</span><span className="pp-num">manually</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">one controller · one close</span><span className="pp-num neg">4h 52m</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section" id="how">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Always closing</div>
              <h2 className="pp-h">The close runs continuously.</h2>
              <p className="pp-sub">Reconciliations, accruals, and cutoff don&apos;t wait for the calendar to flip. Aleq works each task the moment its inputs are ready, so by the time you sit down it&apos;s day 3 of 5 with most of the work behind you — not a five-day fire drill that starts on the first.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> May close · where it stands</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Done<small>posted &amp; reconciled</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">14 tasks</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Drafted<small>waiting on your accept</small></span><span className="pp-learned-bar mid"><i style={{ width: "55%" }} /></span><span className="pp-tag asks">5 tasks</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Waiting<small>upstream input not in yet</small></span><span className="pp-learned-bar mid"><i style={{ width: "14%" }} /></span><span className="pp-tag asks">3 tasks</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">day 3 of 5, not a 5-day fire drill</span>
                  <span className="pp-ok">62% done</span>
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
              <div className="pp-eyebrow">Continuous close</div>
              <h2 className="pp-h">Subledgers tie out daily, not at month-end.</h2>
              <p className="pp-sub">Every subledger reconciles to the GL as transactions land — AR to the lockbox, the Stripe clearing account to its payouts, AP to bills. Routine accruals and depreciation post on their own schedule, area checklists clear themselves green, and the period stays open and live until you seal it. There&apos;s no end-of-month tie-out because the tie-out never stopped running.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Subledger tie-out · October · live</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">AR ↔ lockbox deposits<small>247 checks matched to the penny</small></span><span className="pp-match-right"><span className="pp-num pos">$0.00</span><span className="pp-conf">tied</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Stripe clearing ↔ payouts<small>gross less fees, traced to Recurly</small></span><span className="pp-match-right"><span className="pp-num pos">$0.00</span><span className="pp-conf">tied</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">AP ↔ open bills<small>cutoff applied, accrued to period</small></span><span className="pp-match-right"><span className="pp-num pos">$0.00</span><span className="pp-conf">tied</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Recurring accruals &amp; depreciation<small>posted on schedule</small></span><span className="pp-tag auto">Auto</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Period 2026-10<small>open &amp; live · seals on your sign-off</small></span><span className="pp-tag asks">Open</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">7 subledgers across 7 accounts</span>
                  <span className="pp-ok">all tied · $0.00 unreconciled</span>
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
              <div className="pp-eyebrow">Every entity, one view</div>
              <h2 className="pp-h">Across every entity, one close.</h2>
              <p className="pp-sub">US parent, MX, UK, DE — each on its own books, all on one board. Aleq tracks the critical path across them, so a missing vendor invoice in Germany shows up as the one thing standing between you and a sealed period — not something you discover on day five.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Close status, by entity</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">US Parent<small>all close tasks complete</small></span><span className="pp-match-right"><span className="pp-num pos">12 / 12</span><span className="pp-conf">done</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">MX Ops<small>accruals in progress</small></span><span className="pp-match-right"><span className="pp-num">5 / 14</span><span className="pp-conf">on track</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">UK Ops<small>reconciled · cutoff clear</small></span><span className="pp-match-right"><span className="pp-num">9 / 11</span><span className="pp-conf">on track</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">DE Ops<small>VAT reconciliation · vendor invoice missing</small></span><span className="pp-match-right"><span className="pp-num">3 / 12</span><span className="pp-conf warn">blocked</span></span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">critical path: clear DE Ops to seal the group</span>
                  <span className="pp-num">1 blocker</span>
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
              <div className="pp-eyebrow">Powered by TAMi</div>
              <h2 className="pp-h">It earns autonomy one close task at a time.</h2>
              <p className="pp-sub">TAMi, the mind behind Aleq, watches how your team works each close and learns which tasks are routine and which are judgment. A reconciliation it has tied out clean for months runs alone; a material accrual estimate it&apos;s still calibrating drafts and asks first; the period seal stays yours by design, no matter how confident it gets. Autonomy is earned per task, you can see the belief behind each one, and you can pull any of them back.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What TAMi has earned on the close</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Subledger tie-out<small>tied clean 9 closes · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Recurring depreciation post<small>posted 14× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Material accrual estimate<small>still calibrating · over threshold</small></span><span className="pp-learned-bar mid"><i style={{ width: "44%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Period seal<small>controller judgment · by design</small></span><span className="pp-learned-bar mid"><i style={{ width: "0%" }} /></span><span className="pp-tag asks">You only</span></div>
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
              <div className="pp-eyebrow">When it&apos;s done, it&apos;s done</div>
              <h2 className="pp-h">Sealed and signed.</h2>
              <p className="pp-sub">You sign off and the period seals. Every journal in it is signed, the audit package is built, and the whole thing is pinned where it can&apos;t quietly change. When someone asks how a number was reached three quarters from now, the answer is already saved.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Period 2026-04 · sealed
                  <span className="pp-live"><i /> signed</span>
                </div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">Period 2026-04<small>sealed · signed by Forrest Mae</small></span><span className="pp-tag auto">Locked</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Journals in the period<small>each one signed</small></span><span className="pp-match-right"><span className="pp-num">8,412</span></span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Audit package<small>statements · support · trail</small></span><span className="pp-tag auto">Ready</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Pinned to<small>tamper-evident</small></span><span className="pp-tag auto">S3 + offsite</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">closed on schedule · day 5 of 5</span>
                  <span className="pp-ok">signed &amp; pinned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What CFOs ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Who seals the period?</summary><p>You do. Aleq does the work — reconciles, ties out the subledgers, posts the routine accruals and depreciation, drafts the judgment calls — but the flux review and the period seal are always a person&apos;s. Nothing locks until you sign, no matter how confident TAMi gets. You stay the controller of record on every close.</p></details>
          <details><summary>How do prior-period adjustments work once a period is sealed?</summary><p>Not silently. A sealed period is pinned tamper-evident and Aleq can&apos;t post into it, same as anyone else. A correction either goes through a clearly recorded reopen-and-re-sign, or posts to the open period as a prior-period adjustment — visible, attributed to who made it, and tied to the original entry. History is never rewritten; it&apos;s reversed and re-posted in the open period.</p></details>
          <details><summary>How does timing work across multiple entities?</summary><p>Each entity closes on its own books, but Aleq tracks the critical path across the whole group and seals them in dependency order. A missing vendor invoice blocking a VAT reconciliation in your German entity shows up as the one thing standing between you and a sealed group — flagged with what&apos;s needed and who owns it, on day two, not day five. The rest of the close keeps moving while it&apos;s open.</p></details>
          <details><summary>What stays human, every close?</summary><p>The flux review and the period seal — by design, not because TAMi can&apos;t get there. Material accrual estimates and anything over your threshold come to you drafted and explained, ready to accept. Routine tie-outs and recurring postings run on their own once TAMi has earned them, and you can pull any of them back to drafted at any time.</p></details>
          <details><summary>What&apos;s your support for a SOX or financial-statement audit?</summary><p>Every close task carries its own support — the entries it posted, the documents behind them, the reason each was made, and a signature. Sign-off and period seal are logged to the person who made them. The whole trail exports as your audit package, so each number reviews like well-documented work, not a black box, and your controls over what posts automatically are visible and testable.</p></details>
          <details><summary>Can a closed period be changed?</summary><p>Not silently. Once you sign and lock a period it&apos;s sealed and pinned tamper-evident; Aleq can&apos;t post into it, same as anyone else. A correction goes through a clearly recorded reopen-and-re-sign, or posts to the open period as a prior-period adjustment — visible, attributed, and never quietly slipped into closed books.</p></details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Run your next close with Aleq.</h2>
          <p>Watch Aleq run a real month on your books — every entity on one board, every entry explained, the period sealed on schedule. You sign off.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
