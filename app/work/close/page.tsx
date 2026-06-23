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

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
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

      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The line you draw</div>
              <h2 className="pp-h">What runs, what&apos;s drafted, what&apos;s yours.</h2>
              <p className="pp-sub">The mechanical work runs on its own. The judgment calls come to you drafted and explained, ready to accept. And the two things that should always be a person&apos;s — the flux review and the period lock — stay yours, every close.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> How the close splits</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">Runs on its own<small>bank rec · revenue recognition · payroll accrual</small></span><span className="pp-tag auto">Automatic</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Drafted for you<small>eliminations · tax provision · AP cutoff</small></span><span className="pp-tag asks">Posts on your yes</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Human only<small>flux review · period lock</small></span><span className="pp-tag asks">You only</span></div>
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

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What CFOs ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>What&apos;s your support for a SOX or financial-statement audit?</summary><p>Every close task carries its own support — the entries it posted, the documents behind them, the reason each was made, and a signature. Sign-off and period lock are logged to the person who made them. The whole trail exports as your audit package, so each number reviews like well-documented work, not a black box, and your controls over what posts automatically are visible and testable.</p></details>
          <details><summary>Can it close the period without me?</summary><p>No. Aleq does the work — reconciles, posts, accrues, drafts the judgment calls — but the flux review and the period sign-off are always a person&apos;s. Nothing seals until you sign. You stay the controller of record on the close, every period.</p></details>
          <details><summary>How do you handle a blocked entity or the critical path?</summary><p>Aleq tracks dependencies across every entity and surfaces the one thing holding up the seal — say a missing vendor invoice blocking a VAT reconciliation in your German entity. The rest of the close keeps moving; the blocker is flagged with what&apos;s needed and who owns it, so nothing stalls quietly and you find it on day two, not day five.</p></details>
          <details><summary>What&apos;s in the close package for the board and auditors?</summary><p>The signed financial statements, the supporting schedules, the full journal and decision trail, the flux narrative explaining material variances, and the sign-off record. It&apos;s built as the period closes — not assembled by hand afterward — and pinned to durable storage so it reads the same the day you close it and three quarters later.</p></details>
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
