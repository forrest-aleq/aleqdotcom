import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASC 606 · Revenue recognition — recognized on schedule",
  description:
    "Aleq identifies the performance obligations, allocates the price, and recognizes revenue on schedule from your trial balance — re-deriving when the deal changes, never from a spreadsheet. It tracks the numbers; it doesn't replace your auditor.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 606 · Revenue recognition</div>
            <h1>
              Revenue, recognized
              on schedule.
            </h1>
            <p className="pp-hero-lead">Model the contract once. Aleq recognizes revenue on schedule from your real ledger — and re-derives it the moment the deal changes.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your books
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
                Revenue recognition · Cyberdyne · C-7015
                <span className="pp-live">
                  <i></i> live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Contract value</span>
                  <span className="pp-num">$540,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Term</span>
                  <span className="pp-num">36 months</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Recognized to date</span>
                  <span className="pp-num">$90,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Deferred revenue</span>
                  <span className="pp-num">$450,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">This month</span>
                  <span className="pp-num">$15,000</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Recognition schedule</span>
                <span className="pp-ok">On schedule · ties to the ledger</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">month 12</div>
              <div className="pp-float-v">
                expansion → re-derived <span className="pp-ok">tied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">From contract to schedule</div>
              <h2 className="pp-h">
                Model the contract. The schedule writes itself.
              </h2>
              <p className="pp-sub">
                Aleq reads the signed contract, identifies the distinct
                performance obligations, and allocates the transaction price
                across them. A 36-month subscription with no upfront milestone
                recognizes ratably — $15,000 a month — and the schedule is
                derived from the deal, not typed into a workbook.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <span className="pp-k">source</span>
                  <span>
                    <b>Signed contract C-7015</b>
                    <span className="sub">
                      Cyberdyne · SaaS · $540,000 · 36-mo term
                    </span>
                  </span>
                  <span className="pp-num">$540,000</span>
                </div>
                <div className="pp-drill-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M6 13l6 6 6-6" />
                  </svg>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">obligation</span>
                  <span>
                    <b>One performance obligation</b>
                    <span className="sub">
                      Subscription access, satisfied over time
                    </span>
                  </span>
                  <span className="pp-num">36 mo</span>
                </div>
                <div className="pp-drill-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M6 13l6 6 6-6" />
                  </svg>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">schedule</span>
                  <span>
                    <b>Ratable over the term</b>
                    <span className="sub">
                      Recognized straight-line from the ledger
                    </span>
                  </span>
                  <span className="pp-num">$15,000/mo</span>
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
              <div className="pp-eyebrow">Deferred revenue</div>
              <h2 className="pp-h">Deferred revenue, rolled forward.</h2>
              <p className="pp-sub">
                Every period, Aleq rolls the deferred-revenue balance forward —
                opening balance, plus what you billed, less what you recognized,
                equals closing. The waterfall ties to the ledger and to the
                recognition schedule, so the contract liability on your balance
                sheet is always the number you can defend.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Deferred revenue rollforward · this month
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      Opening deferred revenue
                    </span>
                    <span className="pp-num">$465,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">+ Billings</span>
                    <span className="pp-num">$15,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">
                      − Recognized this month
                    </span>
                    <span className="pp-num neg">$(30,000)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">= Closing deferred revenue</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    $450,000
                  </span>
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
              <div className="pp-eyebrow">Always live</div>
              <h2 className="pp-h">Change the deal — it re-derives.</h2>
              <p className="pp-sub">
                In month 12 the customer expands by $240,000. Aleq re-derives
                the remaining schedule prospectively — the unrecognized balance
                spreads over the months that are left, lifting recognition to
                $25,000 a month — and the closed periods stay exactly as they
                were filed. No workbook to rebuild.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Modification · month 12 expansion
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Expansion booked</span>
                    <span className="pp-num">$240,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      Remaining performance obligation
                    </span>
                    <span className="pp-num">$600,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Months remaining</span>
                    <span className="pp-num">24 months</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Recognition, months 1–11</span>
                    <span className="pp-num">$15,000/mo</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      Recognition re-derived, months 13–36
                    </span>
                    <span className="pp-num">$25,000/mo</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">
                    Prospective · closed periods untouched
                  </span>
                  <span className="pp-ok">re-derived</span>
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
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">The allocation judgment stays human.</h2>
              <p className="pp-sub">
                Ratable recognition runs unattended once the contract is
                modeled. But when a deal bundles obligations with no observable
                price, the standalone-selling-price allocation is a judgment —
                so Aleq drafts the split and the reasoning behind it, then stops
                and hands it to you. High-impact allocations are always a human
                sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  SSP allocation · bundled deal
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Allocate $540,000 across subscription + implementation
                  </div>
                  <div className="pp-belief-meta">
                    drafted 92% / 8% · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      The subscription has an observable standalone price;
                      implementation does not. The allocation uses an
                      expected-cost-plus-margin estimate for the service, which
                      is a judgment under ASC 606-10-32-33 — so it&apos;s
                      drafted, not booked.
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
            <summary>Is the revenue auditable under ASC 606?</summary>
            <p>
              Yes. Every recognized dollar traces back to the signed contract,
              the identified performance obligations, and the allocation behind
              it — the five steps documented, the schedule tied to the ledger.
              It reviews like well-documented prep, not a model&apos;s guess.
            </p>
          </details>
          <details>
            <summary>
              How do you handle contract modifications and expansions?
            </summary>
            <p>
              When a deal changes, Aleq re-derives the remaining schedule
              prospectively — the unrecognized balance spreads over the periods
              that are left. Modifications that add distinct goods at standalone
              price are treated as separate contracts; the trail records which
              path applied and why.
            </p>
          </details>
          <details>
            <summary>How is standalone selling price (SSP) allocated?</summary>
            <p>
              Where a standalone price is observable, Aleq uses it. Where it
              isn&apos;t, it drafts an estimate — adjusted market or
              expected-cost-plus-margin — with the reasoning attached, then
              stops for your sign-off. The allocation is a judgment, so it never
              runs unattended.
            </p>
          </details>
          <details>
            <summary>Does it handle usage-based / consumption revenue?</summary>
            <p>
              Yes. For consumption arrangements, recognition follows usage as
              it&apos;s delivered rather than ratably, drawn from the metered
              data in your books. Fixed and variable consideration are tracked
              separately, with variable amounts constrained until they&apos;re
              no longer at significant risk of reversal.
            </p>
          </details>
          <details>
            <summary>What happens to closed periods when a deal changes?</summary>
            <p>
              They stay exactly as they were. Re-derivation is prospective — the
              change flows through current and future periods, and the sealed
              prior periods are never rewritten. The schedule moves forward; the
              history holds.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See revenue recognized on your real contracts.</h2>
          <p>
            Connect read-only and watch Aleq model your contracts, allocate the
            price, and recognize revenue on schedule — the deferred-revenue
            waterfall and the SSP allocation, drafted and tied out.
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
