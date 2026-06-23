import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax & compliance — filing-ready, as it happens",
  description:
    "Aleq watches your sales-tax nexus, assembles 1099s as you pay, and keeps the income-tax provision current — preparing the filings and the evidence, so nothing is a year-end scramble. It prepares filings; it doesn't file on your behalf.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Tax &amp; compliance</div>
            <h1>Filing-ready, as it happens.</h1>
            <p className="pp-hero-lead">Tax stops being a season. Aleq keeps you filing-ready all year, with the evidence attached.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Tax · Sirius Robotics · 2026
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>watching</span>
              </div>
              <div className="pp-checks">
                <div className="pp-checkrow"><span className="pp-learned-rule">Florida<small>approaching nexus · $98k of $100k</small></span><span className="pp-conf warn">register soon</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">California<small>registered · collecting 8.63%</small></span><span className="pp-conf">registered</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">New York<small>registered · collecting 8.75%</small></span><span className="pp-conf">registered</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">1099s<small>14 vendors assembling</small></span><span className="pp-conf">on track</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">4 jurisdictions · 1 registration due</span>
                <span className="pp-ok">Nothing past due</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">right now</div>
              <div className="pp-float-v">FL at 98% of $100k <span className="pp-ok">no surprises</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Before, not after</div>
              <h2 className="pp-h">It watches nexus before you cross it.</h2>
              <p className="pp-sub">Aleq tracks your sales into every state against that state&apos;s economic-nexus threshold, in real time. Florida is at $98k of the $100k trigger and trending to cross around May 12 — so you register before the next ship, not after a notice arrives. You see why it&apos;s flagged, and what to do next.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Economic nexus · Florida</div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">Florida — $98,400 of $100,000</div>
                  <div className="pp-belief-meta">crosses ~May 12 · register before next ship</div>
                  <div className="pp-why"><b>Why this is flagged</b><p>Florida&apos;s economic-nexus threshold is $100,000 in sales. You&apos;re at 98% and trending up — once you cross, you owe registration and collection, so Aleq surfaces it with runway to act.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>Start registration</span>
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
              <div className="pp-eyebrow">All year, not in January</div>
              <h2 className="pp-h">1099s assembled as you pay.</h2>
              <p className="pp-sub">Every contractor payment is flagged and totaled the moment it clears, and Aleq checks each vendor has a W-9 on file. Totals build through the year, so January is a review — not a scramble to chase down a year of payments and missing forms.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> 1099-NEC · assembling for 2026</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">Anders Design LLC<small>W-9 on file</small></span><span className="pp-conf">$42,400</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Riley Ops Consulting<small>W-9 on file</small></span><span className="pp-conf">$28,900</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Marlowe Studio<small>W-9 missing — requested</small></span><span className="pp-conf warn">W-9 needed</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">14 vendors over $600 · 1 W-9 outstanding</span>
                  <span className="pp-ok">on track for Jan 31</span>
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
              <div className="pp-eyebrow">Tied to your books</div>
              <h2 className="pp-h">The income-tax provision, current.</h2>
              <p className="pp-sub">Aleq keeps the income-tax provision live off your trial balance — the statutory rate, the valuation allowance, the effective rate — so it&apos;s ready when you close, not rebuilt at year-end. For a company running losses, that lands at roughly a 0% effective rate, with the reasoning attached.</p>
              <div className="pp-actions">
                <Link className="btn btn-lg" href="/standards/asc740">See the full provision &rarr;</Link>
              </div>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Rate reconciliation · FY2026</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct">Pretax book loss</span><span className="pp-num neg">$(2,385,722)</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>21%</small>Tax at statutory rate</span><span className="pp-num neg">$(501,002)</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">Change in valuation allowance</span><span className="pp-num">$543,000</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Provision for income tax · ETR ~0%</span>
                  <span className="pp-num" style={{ fontSize: "16px", fontWeight: 600 }}>$(1,202)</span>
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
              <div className="pp-eyebrow">It earns the routine</div>
              <h2 className="pp-h">It learns your filing calendar.</h2>
              <p className="pp-sub">The filings you make every period, on the same schedule, Aleq prepares on its own once they&apos;re proven — the package is ready and waiting. A new jurisdiction or a first-time registration is a judgment call, so it stops and asks before it acts.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq runs, by filing</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">CA sales tax — monthly return<small>prepared 18× · on schedule</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">NY sales tax — quarterly return<small>prepared 6×</small></span><span className="pp-learned-bar"><i style={{ width: "99%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">FL — first-time registration<small>new jurisdiction</small></span><span className="pp-learned-bar mid"><i style={{ width: "34%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What finance leads ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Does Aleq file my sales tax and 1099s?</summary><p>No — Aleq prepares the filings and the evidence behind them, and works with your filing provider through Avalara-style integrations. The returns are computed, the 1099s are assembled with W-9s checked, and the support is tied out — then your provider files them. Aleq doesn&apos;t file on your behalf.</p></details>
          <details><summary>Who&apos;s liable if a filing is wrong?</summary><p>You are — Aleq prepares the workpaper, it isn&apos;t the filer of record. Every figure ties back to your books with its source attached, so you and your filing provider can see and stand behind the support for each return before it goes out.</p></details>
          <details><summary>How does it track economic nexus across states?</summary><p>It measures your sales into each state against that state&apos;s economic-nexus threshold — dollars and transaction count — in real time, and flags a state as you approach the trigger, not after you cross it. You get runway to register before the next taxable sale.</p></details>
          <details><summary>How does this connect to the income-tax provision (ASC 740)?</summary><p>The same trial balance drives both. Aleq keeps the income-tax provision current off your books — the rate reconciliation, the deferreds, the valuation allowance — so it&apos;s ready at close. See the full <Link href="/standards/asc740" style={{ color: "var(--primary)" }}>ASC 740 provision engine</Link>.</p></details>
          <details><summary>What about multi-state and registrations?</summary><p>Aleq tracks every state you sell into and surfaces where you&apos;ve crossed, where you&apos;re close, and where you&apos;re already registered. For a new jurisdiction it drafts the registration and the reasoning, then stops for your sign-off — a first-time registration never runs unattended.</p></details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Stay filing-ready with Aleq.</h2>
          <p>Connect read-only and watch Aleq track your nexus, assemble your 1099s, and keep the provision current — every filing prepared, every number tied to your books.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
