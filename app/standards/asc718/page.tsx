import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc718JudgmentDemo from "@/components/Asc718JudgmentDemo";
import { asc718Awards } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "How is stock-based compensation expense calculated under ASC 718?", a: "The award's fair value is measured once at the grant date, and that cost is recognized as expense over the requisite service period, which is usually the vesting schedule. For RSUs, fair value is the share price at the grant date. For options, fair value comes from a pricing model such as Black-Scholes. Equity-classified awards are not remeasured after grant, so subsequent stock-price movements do not change the expense. Aleq pulls each grant from your cap table, measures it at the grant date, and books the expense each month across the service period." },
  { q: "What is the journal entry for stock compensation expense?", a: "Each period, debit stock-based compensation expense and credit additional paid-in capital. Equity compensation is a non-cash expense, so no cash or liability account moves for an equity-classified award. On an $8,880,000 RSU pool vesting over 48 months, the monthly entry is a $185,000 debit to stock-based compensation expense and a $185,000 credit to APIC. If a grantee forfeits unvested units, the entry reverses: debit APIC and credit expense for the cumulative amount recognized on those units. Aleq drafts and posts these entries monthly, balanced and traced to each grant." },
  { q: "How is RSU expense calculated?", a: "An RSU's grant-date fair value is the share price on the grant date, with no pricing model or assumptions required (ASC 718-10-30-27). Total compensation cost is the number of units multiplied by that price, recognized over the requisite service period. A pool of 480,000 RSUs granted at $18.50 represents $8,880,000 of compensation cost; over a 48-month schedule, that is $185,000 of expense per month, accruing from the grant date even through a one-year cliff because service is being rendered throughout. Equity-classified RSUs are not remeasured after grant. Aleq measures each grant from the cap table and books the monthly expense automatically." },
  { q: "What assumptions do you need to expense stock options?", a: "An option's grant-date fair value comes from a pricing model, commonly Black-Scholes, and requires four assumptions beyond the share price and strike price: expected term, or the simplified method for plain-vanilla options; expected volatility, typically estimated from peer companies or your own history; a risk-free rate matching the expected term; and dividend yield (ASC 718-10-30-20). These assumptions are estimates that your team is responsible for setting. Aleq does not estimate them for you; once you provide the assumption set, it runs the valuation and the attribution schedule from there." },
  { q: "How do you account for forfeitures under ASC 718?", a: "Companies have a policy election: estimate a forfeiture rate upfront and true it up over time, or account for forfeitures as they occur. Under either policy, when a grantee leaves before vesting, the cumulative expense recognized on the unvested units is reversed, with a debit to additional paid-in capital and a credit to stock-based compensation expense, while vested units retain their expense (ASC 718-20-35-8). Aleq accounts for forfeitures as they occur: it detects the termination event on your cap table and posts the reversal automatically, without a manual journal entry." },
  { q: "How do you account for a stock option repricing?", a: "A repricing, or any change to an award's terms, is a modification under ASC 718. Fair value is measured immediately before and immediately after the change, and any incremental fair value is additional compensation cost, recognized immediately for vested awards and over the remaining service period for unvested awards. The original grant-date cost continues to be recognized provided the original award would have vested. Aleq does not automate modification accounting yet; it is on the roadmap. Today, a repricing or other modification needs to be handled outside Aleq." },
  { q: "Does Aleq automate ASC 718 stock-based compensation?", a: "Yes, for the mechanical portions of the standard. Aleq syncs grants, vesting schedules, and terminations from your cap table, such as Carta, so expense is driven by the same source of truth your equity team uses rather than a re-keyed spreadsheet. It measures RSU grant-date fair value at the share price, attributes the expense over the service period, posts the monthly entry, and reverses forfeitures automatically when a termination is recorded on the cap table. Option valuation requires your assumption set, including expected term, volatility, and the risk-free rate, and modification accounting is on the roadmap. Disclosures export every period, tied to the ledger." },
  { q: "What is the best stock-based compensation software for startups?", a: "Expense schedules maintained separately from the cap table can drift out of sync, and terminations can be missed, so the primary evaluation criterion is direct cap-table integration. Look for software that syncs grants and terminations from the cap table, tracks each vesting tranche, reverses forfeitures automatically, posts entries to the general ledger, and exports the ASC 718 disclosures. Aleq is designed to work this way: grants are read from the cap table, measured at the grant date, expensed over the service period, forfeitures are reversed off the termination event, and the roll-forward and assumption table export each period." },
  { q: "Can AI do stock comp accounting?", a: "Much of ASC 718 is deterministic and can be automated: RSU fair value is arithmetic, attribution over the service period is a schedule, and forfeiture reversals are triggered by a cap-table event. Estimation and judgment remain with your team, including the option-pricing assumptions such as expected term and volatility, and modification accounting decisions. Aleq is designed around that division. It runs the mechanical work with each entry traced to the underlying grant and its codification basis, requires your assumptions rather than estimating them, and holds anything it cannot support for your review. Whether the resulting balances are acceptable is a determination for your team and your auditor." },
  { q: "What are the ASC 718 disclosure requirements?", a: "The core disclosures are a roll-forward of award activity for the period, covering grants, vesting, forfeitures, and exercises, with weighted-average grant-date fair values and exercise prices; the total compensation cost recognized; the unrecognized compensation cost remaining and the weighted-average period over which it will be recognized; and the valuation assumptions used for option grants. Aleq exports these each period, including the roll-forward, weighted-average fair values, unrecognized cost and remaining period, and the assumption table, tied to the ledger and traced to each grant." },
];

export const metadata: Metadata = {
  title: "ASC 718 · Stock-based compensation — measured at grant, expensed over service",
  description:
    "Aleq pulls grants from your cap table, measures RSU grant-date fair value, and recognizes the expense over the service period — reversing forfeitures automatically and keeping the disclosure tied out. Option valuation still needs your assumptions.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 718 · Stock-based compensation</div>
            <h1>
              Measured at grant.
              <br />
              Expensed as it vests.
            </h1>
            <p className="pp-hero-lead">
              Aleq pulls every grant from your cap table, measures grant-date
              fair value, and books the compensation expense across the service
              period — forfeitures and all.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">
                Close a month with us
              </Link>
              <a className="btn btn-lg" href="#how">
                How it works
              </a>
            </div>
            <div className="pp-note">
              <span className="t-dot" />
              synced from Carta · ties to the ledger
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Grant · G-2405 · senior RSU pool
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>$18.50 / share at grant</small>
                    Grant-date fair value
                  </span>
                  <span className="pp-num">$8,880,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Recognized to date</span>
                  <span className="pp-num">$2,590,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Unrecognized cost</span>
                  <span className="pp-num">$6,290,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Expense this month</span>
                  <span className="pp-num">$185,000</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Month 14 of 48 · 29% vested</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">a grantee leaves</div>
              <div className="pp-float-v">forfeiture, trued up</div>
            </div>
          </div>
        </div>
      </section>

{/* ── Worked example — measure & attribute ───────────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              How it works
            </div>
            <h2 className="pp-h">From cap-table grant to monthly expense.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Aleq reads the grant off your cap table, measures it once at the
              grant date, and spreads the cost over the service period. Below is
              the senior RSU pool.
            </p>
          </div>

          <div className="pp-worked reveal">
            <div className="pp-worked-head">
              <svg className="pp-card-mark" viewBox="0 0 48 48">
                <use href="#aleq-mark" />
              </svg>
              Worked example · G-2405 · senior RSU pool
              <span className="we-tag">derived</span>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">1</div>
              <div className="pp-wbody">
                <div className="pp-wk">Synced · from Carta</div>
                <div className="pp-wh">Pulled the grant terms</div>
                <div className="pp-kv">
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Instrument</span>
                    <span className="pp-kv-v">480,000 RSUs · 8 grantees</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Vesting</span>
                    <span className="pp-kv-v">4-year graded · 1-year cliff</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Grant date</span>
                    <span className="pp-kv-v">share price $18.50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">2</div>
              <div className="pp-wbody">
                <div className="pp-wk">Measured · grant-date fair value</div>
                <div className="pp-wh">
                  Fair value, fixed at grant
                  <span className="pp-pill-result">RSU → share price</span>
                </div>
                <div className="pp-kv">
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Units × fair value</span>
                    <span className="pp-kv-v">480,000 × $18.50</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Total compensation cost</span>
                    <span className="pp-kv-v">$8,880,000</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Re-measurement</span>
                    <span className="pp-kv-v">none · equity-classified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">3</div>
              <div className="pp-wbody">
                <div className="pp-wk">Booked · this period</div>
                <div className="pp-wh">Attributed over the service period</div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Stock-based comp expense
                      <small>$8,880,000 ÷ 48 months</small>
                    </span>
                    <span className="pp-num">$185,000</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Additional paid-in capital</span>
                    <span className="pp-num">$185,000</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Balanced · posted monthly</span>
                    <span className="pp-ok">posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vesting schedule ───────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Across the service period</div>
              <h2 className="pp-h">The cliff, then every month after.</h2>
              <p className="pp-sub">
                The pool vests 25% at the one-year cliff, then monthly across the
                remaining three years. Aleq tracks each tranche, recognizes the
                expense as service is rendered, and keeps recognized and
                unrecognized cost reconciled to the share count — so dilution and
                expense always agree.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Vesting · G-2405 · 4-yr graded
                </div>
                <div style={{ padding: "24px 22px 8px" }}>
                  <div className="pp-meter">
                    <div className="pp-meter-track">
                      <i style={{ width: "29%" }} />
                    </div>
                    <div className="pp-meter-labels">
                      <span>1-yr cliff · 25%</span>
                      <span>29% vested · mo 14</span>
                      <span>fully vested · 48 mo</span>
                    </div>
                  </div>
                </div>
                <div className="pp-tb" style={{ paddingTop: 0 }}>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Cost recognized to date</span>
                    <span className="pp-num">$2,590,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Cost still to recognize</span>
                    <span className="pp-num">$6,290,000</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Recognized + unrecognized</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    $8,880,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment demo — RSU vs. option vs. forfeiture ──────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              Not every award measures the same way
            </div>
            <h2 className="pp-h">An RSU is arithmetic. An option is a model.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Same cap table, same pool, three different events. One needs
              nothing but a share price. One needs assumptions only your team
              can set. One reverses itself the day someone leaves.
            </p>
          </div>
          <Asc718JudgmentDemo />
        </div>
      </section>

      {/* ── Award-type tabs ────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By award type"
        heading="Every instrument measures differently."
        sub="RSUs, options, performance shares, ESPP, cash-settled SARs — the measurement model changes with the award. Aleq runs the right one for each."
        tabs={asc718Awards}
      />

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="pp-section alt">
        <div
          className="pp-narrow"
          style={{ textAlign: "center", marginBottom: "34px" }}
        >
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>
            FAQ
          </div>
          <h2 className="pp-h">What controllers and auditors ask.</h2>
        </div>
        <div className="pp-faq reveal">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put your cap table on Aleq.</h2>
          <p>
            Connect your equity plan. Watch Aleq measure every RSU at fair
            value, attribute the expense over the service period, and reverse
            forfeitures automatically — no re-keyed spreadsheet, disclosure
            tied out to every grant.
          </p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">
              Book Demo
            </Link>
            <Link className="btn btn-lg" href="/">
              All standards engines
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
