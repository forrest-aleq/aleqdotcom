import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASC 340-40 · Commissions — capitalized and amortized",
  description:
    "Aleq capitalizes the commission you pay to win a contract and amortizes it over the life of the customer relationship — not expensed all at once, and re-derived when the deal changes. It drafts the schedule; the amortization-period judgment stays human.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 340-40 · Commissions</div>
            <h1>
              Commissions,
              capitalized and amortized.
            </h1>
            <p className="pp-hero-lead">Capitalize the commission, amortize it over the life of the customer — no side spreadsheet to reconcile.</p>
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
                Deferred commissions · Cyberdyne · C-7015
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>
                  draft
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Commission paid</span>
                  <span className="pp-num">$54,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortization period</span>
                  <span className="pp-num">36 months</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortized to date</span>
                  <span className="pp-num neg">$9,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Deferred balance</span>
                  <span className="pp-num">$45,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">This month</span>
                  <span className="pp-num">$1,500</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Deferred commission balance</span>
                <span className="pp-ok">On schedule · ties to 13500</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">re-derives on</div>
              <div className="pp-float-v">
                churn <span className="pp-ok">tracked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The cost to obtain a contract</div>
              <h2 className="pp-h">Capitalize, don&apos;t expense it all at once.</h2>
              <p className="pp-sub">
                The commission you pay to win a contract is an incremental cost
                of obtaining it — so under ASC 340-40 it&apos;s capitalized, not
                run straight through the P&amp;L the month it&apos;s paid. Aleq
                reads the commission off the closed deal, capitalizes it as a
                contract cost asset, and sets it up to amortize over the
                customer life.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <span className="pp-k">Paid</span>
                  <div>
                    <b>Commission paid</b>
                    <span className="sub">$54,000 to win Cyberdyne · C-7015</span>
                  </div>
                  <span className="pp-num">$54,000</span>
                </div>
                <div className="pp-drill-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">Capitalized</span>
                  <div>
                    <b>Contract cost asset · 13500</b>
                    <span className="sub">deferred commission, not expensed</span>
                  </div>
                  <span className="pp-num">$54,000</span>
                </div>
                <div className="pp-drill-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">Amortized</span>
                  <div>
                    <b>Over the customer life</b>
                    <span className="sub">36 months · $1,500 / mo</span>
                  </div>
                  <span className="pp-num">$1,500</span>
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
              <div className="pp-eyebrow">The amortization basis</div>
              <h2 className="pp-h">Amortized over the customer life.</h2>
              <p className="pp-sub">
                The capitalized commission is amortized on a systematic basis
                over the period you expect to benefit — the life of the customer
                relationship, not just the initial contract term. Each month
                Aleq draws down the deferred balance and books the expense,
                opening to closing, with the expected-life basis attached.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Monthly amortization · period 7 of 36
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Opening deferred</span>
                    <span className="pp-num">$46,500</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">
                      − Amortization this month
                    </span>
                    <span className="pp-num neg">$(1,500)</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      <small>basis</small>Expected customer life · 36 mo
                    </span>
                    <span className="pp-num">straight-line</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">= Closing deferred</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    $45,000
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
              <div className="pp-eyebrow">When the deal changes</div>
              <h2 className="pp-h">Churn re-derives the schedule.</h2>
              <p className="pp-sub">
                When a customer churns early, the benefit period ends — so the
                remaining deferred commission is expensed in the period it
                happens. Aleq watches the CRM, catches the cancellation, and
                re-derives the schedule: the unamortized balance writes off in
                full, with the journal entry drafted and tied back to the
                contract.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Early churn · Cyberdyne · C-7015
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Commission expense
                      <small>remaining deferred, written off</small>
                    </span>
                    <span className="pp-num">$45,000</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">
                      Deferred commission · 13500
                    </span>
                    <span className="pp-num">$45,000</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Schedule re-derived on churn</span>
                    <span className="pp-ok">drafted for accept</span>
                  </div>
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
              <h2 className="pp-h">
                The amortization-period judgment stays human.
              </h2>
              <p className="pp-sub">
                Once the period is set, the monthly amortization rolls forward
                unattended. But how long the customer relationship is expected
                to last — and whether to elect the one-year practical expedient
                — is a judgment call. So Aleq drafts the period and the basis
                behind it, then stops and hands it to you. High-impact
                assumptions are always a human sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Amortization period
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Expected customer life · 36 months
                  </div>
                  <div className="pp-belief-meta">
                    drafted from cohort retention · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Average tenure across the comparable cohort runs 34–38
                      months including expected renewals, beyond the 12-month
                      initial term. The benefit period is the relationship, not
                      the first contract, so amortization is drafted over 36
                      months.
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
            <summary>What costs qualify to capitalize under 340-40?</summary>
            <p>
              The incremental costs of obtaining a contract — costs you&apos;d
              only incur because the contract was won, the clearest being sales
              commissions. Costs you&apos;d incur regardless of whether the deal
              closed aren&apos;t incremental, so they stay expensed. Aleq
              capitalizes the qualifying commission off the closed deal and
              leaves the rest in the P&amp;L.
            </p>
          </details>
          <details>
            <summary>
              How is the amortization period (expected customer life)
              determined?
            </summary>
            <p>
              The capitalized cost amortizes over the period you expect to
              benefit, which is the life of the customer relationship —
              including anticipated renewals — not just the initial term. Aleq
              drafts a period from your cohort retention and shows the basis,
              then stops for your sign-off. The call stays yours.
            </p>
          </details>
          <details>
            <summary>Do you apply the one-year practical expedient?</summary>
            <p>
              Only if you elect it. The expedient lets you expense costs to
              obtain a contract immediately when the amortization period would
              be a year or less. Aleq surfaces where it would apply and drafts
              the election, but treats it as a human judgment — you choose
              whether to take it, and it&apos;s documented either way.
            </p>
          </details>
          <details>
            <summary>What happens on early churn?</summary>
            <p>
              When a customer cancels before the period ends, the remaining
              deferred balance is no longer expected to benefit a future period,
              so it&apos;s written off in the period of churn. Aleq catches the
              cancellation from the CRM, re-derives the schedule, and drafts the
              entry expensing the unamortized balance — tied back to the
              contract.
            </p>
          </details>
          <details>
            <summary>Does it tie to the CRM and the commission plan?</summary>
            <p>
              Yes. Each schedule traces back to the closed deal, the commission
              paid under your plan, and the contract it relates to — so the
              deferred balance ties to the general-ledger account with its basis
              attached. When the deal changes in the CRM, the schedule
              re-derives and the trail stays intact.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your commissions capitalized correctly.</h2>
          <p>
            Connect read-only and watch Aleq capitalize the commissions you pay
            to win contracts, amortize them over the customer life, and
            re-derive the schedule when a deal changes — drafted and tied out.
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
