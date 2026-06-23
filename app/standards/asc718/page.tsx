import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASC 718 · Stock-based compensation — expensed on schedule",
  description:
    "Aleq computes stock-based compensation expense each period — from the grant to the vesting schedule — handles forfeitures and modifications, and keeps it tied to your cap table. It drafts the expense; it doesn't replace your accountant.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 718 · Stock-based compensation</div>
            <h1>
              Stock comp,
              expensed on schedule.
            </h1>
            <p className="pp-hero-lead">Grant the equity once. Aleq expenses it on schedule, through every vesting date and forfeiture.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your grants
              </Link>
              <a className="btn btn-lg" href="#how">
                How it works
              </a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Stock comp expense · FY2026
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>
                  draft
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Grant-date fair value</span>
                  <span className="pp-num">$1,648,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>1-yr cliff</small>Vesting
                  </span>
                  <span className="pp-num">4 years</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Expensed to date</span>
                  <span className="pp-num">$412,400</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">This month</span>
                  <span className="pp-num">$34,333</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Unvested remaining</span>
                  <span className="pp-num">$1,235,600</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">On schedule · ties to 60400</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">syncs from</div>
              <div className="pp-float-v">
                Carta <span className="pp-ok">connected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The expense, derived</div>
              <h2 className="pp-h">From grant to expense, derived.</h2>
              <p className="pp-sub">
                Aleq reads each option grant — the shares, the grant-date fair
                value, the vesting terms — and derives the period expense from
                it. A four-year graded schedule with a one-year cliff becomes
                straight-line expense over the service period, recomputed every
                month as new grants land and tranches vest.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <span className="pp-k">grant</span>
                  <span>
                    <b>Option grant · 240,000 shares</b>
                    <span className="sub">
                      Grant-date fair value $1,648,000
                    </span>
                  </span>
                  <span className="pp-k">Carta</span>
                </div>
                <div className="pp-drill-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">vesting</span>
                  <span>
                    <b>4-year graded · 1-yr cliff</b>
                    <span className="sub">48 monthly tranches after the cliff</span>
                  </span>
                  <span className="pp-k">schedule</span>
                </div>
                <div className="pp-drill-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">expense</span>
                  <span>
                    <b>Straight-line · $34,333 / mo</b>
                    <span className="sub">Booked to 60400 Stock-Based Comp</span>
                  </span>
                  <span className="pp-k">60400</span>
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
              <div className="pp-eyebrow">Departures, handled</div>
              <h2 className="pp-h">Forfeitures, handled.</h2>
              <p className="pp-sub">
                When an employee departs before a tranche vests, Aleq reverses
                the expense booked against unvested awards and reschedules what
                remains. No spreadsheet to unwind, no manual true-up — the
                reversal flows straight to the period and the rollforward stays
                tied to the cap table.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Forfeiture · departed pre-vest
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Additional paid-in capital<small>30300</small>
                    </span>
                    <span className="pp-num">$28,600</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">
                      Stock-based compensation<small>60400</small>
                    </span>
                    <span className="pp-num">$28,600</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Unvested expense reversed</span>
                    <span className="pp-ok">booked to 60400</span>
                  </div>
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
              <div className="pp-eyebrow">Re-measured on change</div>
              <h2 className="pp-h">Modifications re-measure.</h2>
              <p className="pp-sub">
                Reprice a grant or accelerate vesting and the award changes — so
                Aleq measures the incremental fair value at the modification
                date and books it over the remaining service period. The
                original grant-date expense stays exactly as it was; only the
                increment is added.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Modification · repricing
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Fair value before repricing</span>
                    <span className="pp-num">$1,648,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Fair value after repricing</span>
                    <span className="pp-num">$1,742,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Incremental fair value</span>
                    <span className="pp-num">$94,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      <small>over remaining service period</small>Incremental
                      expense / mo
                    </span>
                    <span className="pp-num">$2,765</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">
                    Increment booked · grant-date expense unchanged
                  </span>
                  <span className="pp-ok">on schedule</span>
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
              <div className="pp-eyebrow">The valuation call stays yours</div>
              <h2 className="pp-h">Fair-value assumptions stay human.</h2>
              <p className="pp-sub">
                Mechanics roll forward unattended once they&apos;re proven. But
                the valuation inputs — expected volatility, expected term, the
                409A price — are judgment, so Aleq drafts each assumption with
                the basis behind it, then stops and escalates for your sign-off.
                The high-impact call is always a human&apos;s.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Black-Scholes assumptions
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Grant-date fair value · $6.87 / option
                  </div>
                  <div className="pp-belief-meta">
                    drafted from inputs · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Expected volatility 52% from the peer set, expected term
                      6.1 years from the simplified method, and a $4.12 fair
                      value per the latest 409A. Each input is sourced — but the
                      valuation is judgment, so it&apos;s escalated, not booked.
                    </p>
                  </div>
                  <span className="pp-act" role="button" tabIndex={0}>
                    Review &amp; sign off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <summary>How is grant-date fair value determined?</summary>
            <p>
              Aleq drafts it with a Black-Scholes computation off your inputs —
              expected volatility, expected term, risk-free rate, and the 409A
              fair value per share — each one sourced and shown. The valuation
              is judgment, so it&apos;s escalated for your sign-off rather than
              booked on its own.
            </p>
          </details>
          <details>
            <summary>How are forfeitures handled?</summary>
            <p>
              When an employee departs before a tranche vests, Aleq reverses the
              expense booked against the unvested awards and reschedules
              what&apos;s left. The reversal flows to the period and the
              rollforward stays tied to your cap table.
            </p>
          </details>
          <details>
            <summary>What about repricings and modifications?</summary>
            <p>
              It measures the incremental fair value at the modification date
              and books only that increment over the remaining service period.
              The original grant-date expense is untouched, and every
              modification keeps its basis attached.
            </p>
          </details>
          <details>
            <summary>Does it sync from Carta or my cap-table system?</summary>
            <p>
              Yes. Grants, vesting terms, and exercises read straight from Carta
              (or your cap-table system), so the expense is derived from the
              same source of truth your equity team works in — no manual
              re-entry.
            </p>
          </details>
          <details>
            <summary>Is the SBC rollforward auditable?</summary>
            <p>
              The expense exports as a tied-out workpaper with full provenance —
              grant-date fair value, the vesting schedule, the journal entries,
              and the assumptions behind each grant — so it reviews like
              well-documented prep, not a model&apos;s guess.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See stock comp expensed on your grants.</h2>
          <p>
            Connect your cap table read-only and watch Aleq compute stock-based
            compensation each period — the vesting schedule, forfeitures, and
            modifications, drafted and tied out to your books.
          </p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">
              Book a working session
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
