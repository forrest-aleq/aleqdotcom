import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ASC 842 · Leases — your right-of-use asset and lease liability, derived",
  description:
    "Aleq books the right-of-use asset and lease liability from the signed lease, amortizes both over the term, and remeasures on a modification — tied to the agreement and kept current. It drafts the entries; the classification judgment stays human.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 842 · Leases</div>
            <h1>
              Leases on the
              balance sheet, derived.
            </h1>
            <p className="pp-hero-lead">Sign a lease and the schedule builds itself — right-of-use asset, lease liability, and every period after.</p>
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
                Lease schedule · 535 Mission · L-001
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Right-of-use asset</span>
                  <span className="pp-num">$1,840,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Lease liability</span>
                  <span className="pp-num">$1,792,400</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Monthly payment</span>
                  <span className="pp-num">$38,500</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>7.0% / 12 on opening liability</small>Interest this
                    month
                  </span>
                  <span className="pp-num">$10,455</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortization this month</span>
                  <span className="pp-num">$28,045</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">On schedule · ties to the ledger</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">on a change</div>
              <div className="pp-float-v">remeasures on modification</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">From agreement to entries</div>
              <h2 className="pp-h">Model the lease. The entries derive.</h2>
              <p className="pp-sub">
                You model the lease once — term, payments, the discount rate.
                From the signed agreement Aleq derives the lease liability as
                the present value of the payments, recognizes the right-of-use
                asset against it, and stands up the amortization schedule for
                both. No workbook to wire, no formula to chase.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <div>
                    <span className="pp-k">Input</span>
                  </div>
                  <div>
                    <b>Signed lease</b>
                    <span className="sub">
                      535 Mission · 60-mo · $38,500/mo · 7.0%
                    </span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="pp-drill-step">
                  <div>
                    <span className="pp-k">Recognized</span>
                  </div>
                  <div>
                    <b>ROU asset + lease liability</b>
                    <span className="sub">
                      PV of payments at the discount rate
                    </span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="pp-drill-step">
                  <div>
                    <span className="pp-k">Each month</span>
                  </div>
                  <div>
                    <b>Amortization, booked</b>
                    <span className="sub">
                      interest accreted · ROU amortized · payment applied
                    </span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
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
              <div className="pp-eyebrow">Always live</div>
              <h2 className="pp-h">Liability and ROU, amortized.</h2>
              <p className="pp-sub">
                Each month the lease liability accretes interest at the discount
                rate, the payment reduces it, and the right-of-use asset
                amortizes in parallel. Aleq rolls the schedule forward and books
                the entries — opening balance to closing balance — so the
                balance sheet stays current without a touch.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Amortization · period 13 of 60
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Opening lease liability</span>
                    <span className="pp-num">$1,792,400</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      <small>7.0% / 12</small>+ Interest accreted
                    </span>
                    <span className="pp-num">$10,455</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">− Lease payment</span>
                    <span className="pp-num neg">$(38,500)</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">ROU asset amortized</span>
                    <span className="pp-num neg">$(28,045)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">= Closing lease liability</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    $1,764,355
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
              <div className="pp-eyebrow">When the lease changes</div>
              <h2 className="pp-h">Modify the lease — it remeasures.</h2>
              <p className="pp-sub">
                Extend the term, change the rent, exercise an option — and Aleq
                remeasures the lease liability at the current discount rate and
                adjusts the right-of-use asset for the same amount. It books the
                difference and rebuilds the schedule from there, while the prior
                periods stay exactly as they were.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Modification · term +24 mo
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Right-of-use asset
                      <small>remeasured at 7.4% current rate</small>
                    </span>
                    <span className="pp-num">$612,800</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Lease liability</span>
                    <span className="pp-num">$612,800</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">
                      Liability remeasured · ROU adjusted
                    </span>
                    <span className="pp-ok">schedule rebuilt</span>
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
              <h2 className="pp-h">The classification judgment stays human.</h2>
              <p className="pp-sub">
                Once a lease is modeled, the schedule rolls forward on its own.
                But whether a lease is operating or finance — and which discount
                rate applies — is a judgment call. So Aleq drafts the
                classification and the rate with its reasoning, then stops for
                your sign-off. Where you&apos;ve elected the short-term
                exemption, it applies it and recognizes the expense
                straight-line.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Lease classification
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Operating lease · incremental borrowing rate 7.0%
                  </div>
                  <div className="pp-belief-meta">
                    drafted · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Term is 60 months against an estimated 25-year economic
                      life, with no transfer of ownership and no bargain
                      purchase option — so none of the ASC 842-10-25 finance
                      criteria are met. No rate is implicit in the lease, so the
                      incremental borrowing rate applies.
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
            <summary>Operating vs finance lease — how is it classified?</summary>
            <p>
              Aleq tests the lease against the ASC 842-10-25 criteria —
              ownership transfer, bargain purchase option, term against economic
              life, present value against fair value — and drafts the
              classification with its reasoning. It&apos;s a judgment call, so
              it stops there: you review the draft and sign off before it&apos;s
              locked.
            </p>
          </details>
          <details>
            <summary>What discount rate does it use?</summary>
            <p>
              The rate implicit in the lease where it&apos;s determinable;
              otherwise your incremental borrowing rate. Aleq proposes the rate
              and shows the basis, and you confirm it — the rate drives the
              liability and every period after, so it never picks one
              unattended.
            </p>
          </details>
          <details>
            <summary>How are modifications and remeasurements handled?</summary>
            <p>
              When a lease is modified — term extended, payments changed, an
              option exercised — Aleq remeasures the liability at the current
              discount rate, adjusts the right-of-use asset for the same amount,
              books the difference, and rebuilds the schedule from that date
              forward. Prior periods stay untouched.
            </p>
          </details>
          <details>
            <summary>Does it handle the short-term lease exemption?</summary>
            <p>
              Yes, where you&apos;ve elected it by asset class. For a lease of
              twelve months or less with no purchase option Aleq applies the
              exemption — no ROU asset or liability — and recognizes the lease
              cost straight-line over the term.
            </p>
          </details>
          <details>
            <summary>Is the ROU and liability rollforward auditable?</summary>
            <p>
              Every period exports as a tied-out rollforward — opening balance,
              interest, payments, amortization, closing balance — traced back to
              the signed lease and the rate you confirmed. It reviews like
              well-documented prep, not a model&apos;s guess, with the journal
              entries and provenance attached.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your leases on the balance sheet.</h2>
          <p>
            Model a lease and watch Aleq derive the right-of-use asset and lease
            liability, amortize both over the term, and keep the rollforward
            tied out and current — drafted for your sign-off.
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
