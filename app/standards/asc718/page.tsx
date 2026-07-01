import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc718JudgmentDemo from "@/components/Asc718JudgmentDemo";
import { asc718Awards } from "./industries";

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
                See it on your books
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
          <details open>
            <summary>Where do the grants come from?</summary>
            <p>
              Aleq syncs grants, vesting schedules, and terminations from your
              cap table — Carta and the rest — so the expense is driven by the
              same source of truth your equity team uses, not a re-keyed
              spreadsheet.
            </p>
          </details>
          <details>
            <summary>How is grant-date fair value measured?</summary>
            <p>
              RSUs at the share price on the grant date — no model, no
              assumptions. Options need a pricing model today, and Aleq
              doesn&apos;t estimate the inputs itself yet — give it expected
              term, volatility, and the risk-free rate and it runs the
              valuation and the attribution schedule from there.
            </p>
          </details>
          <details>
            <summary>How are forfeitures handled?</summary>
            <p>
              Aleq reverses the cumulative expense on unvested units when a
              grantee leaves, automatically, off the cap-table termination
              event — vested units keep their expense.
            </p>
          </details>
          <details>
            <summary>Does it handle modifications and repricings?</summary>
            <p>
              Not yet. Modification accounting — incremental fair value at the
              modification date, recognized over the remaining service period —
              is on our roadmap. Today a modification or repricing needs to be
              handled outside Aleq; ask us where that stands for your award
              types.
            </p>
          </details>
          <details>
            <summary>Can it produce the ASC 718 disclosures?</summary>
            <p>
              Every period exports the roll-forward of awards, weighted-average
              fair values, unrecognized cost and remaining period, and the
              assumption table — tied to the ledger and traced to each grant.
            </p>
          </details>
        </div>
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
