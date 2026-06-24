import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import { asc842Industries } from "./industries";

export const metadata: Metadata = {
  title: "ASC 842 · Leases — sign the lease, Aleq books the rest",
  description:
    "Aleq reads the signed lease, classifies it against ASC 842, and books the right-of-use asset and lease liability — then amortizes both, remeasures on a modification, and keeps the disclosure rollforward tied out. The schedule is automatic; the classification judgment is yours.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 842 · Leases</div>
            <h1>
              Sign the lease.
              <br />
              Aleq books the rest.
            </h1>
            <p className="pp-hero-lead">
              The right-of-use asset, the lease liability, and every period
              after — read off the signed agreement and kept current on your
              balance sheet.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your books
              </Link>
              <a className="btn btn-lg" href="#how">
                How it works
              </a>
            </div>
            <div className="pp-note">
              <span className="t-dot" />
              ties to the ledger · drafted for your sign-off
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Lease schedule · 535 Mission · L-001
                <span className="pp-live">
                  <i />
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
                    <small>7.0% / 12 on opening liability</small>
                    Interest this month
                  </span>
                  <span className="pp-num">$10,455</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">ROU amortized this month</span>
                  <span className="pp-num">$28,045</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Period 13 of 60 · on schedule</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">when the deal changes</div>
              <div className="pp-float-v">remeasures, same day</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KPI band — the lease at a glance ───────────────────── */}
      <section className="pp-statband">
        <div className="pp-wrap">
          <div className="pp-statcap">
            <i />
            535 Mission, Floor 12 · operating lease · read off the signed
            agreement
          </div>
          <div className="pp-stats reveal">
            <div className="pp-stat">
              <div className="pp-stat-v">
                $1.84<span className="u">M</span>
              </div>
              <div className="pp-stat-l">
                Right-of-use asset
                <span className="pp-stat-sub">recognized at commencement</span>
              </div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-v">$38,500</div>
              <div className="pp-stat-l">
                Monthly payment
                <span className="pp-stat-sub">3% annual escalator</span>
              </div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-v">
                60<span className="u">mo</span>
              </div>
              <div className="pp-stat-l">
                Lease term
                <span className="pp-stat-sub">no renewal option</span>
              </div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-v">
                7.0<span className="u">%</span>
              </div>
              <div className="pp-stat-l">
                Discount rate
                <span className="pp-stat-sub">incremental borrowing rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Worked example — the audit-grade walkthrough ───────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              How it works
            </div>
            <h2 className="pp-h">From a signed lease to a booked entry.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Aleq reads the agreement, tests the classification against ASC
              842, and books the entry. Below is how it ran on the lease at 535
              Mission.
            </p>
          </div>

          <details className="pp-worked pp-worked-collapsible reveal">
            <summary className="pp-worked-head">
              <svg className="pp-card-mark" viewBox="0 0 48 48">
                <use href="#aleq-mark" />
              </svg>
              Worked example · 535 Mission · L-001
              <span className="we-summary">operating · ROU $1.84M · posted</span>
              <span className="we-toggle" aria-hidden="true" />
            </summary>

            <div className="pp-wstep">
              <div className="pp-wnum">1</div>
              <div className="pp-wbody">
                <div className="pp-wk">Read</div>
                <div className="pp-wh">Pulled straight from the lease</div>
                <div className="pp-kv">
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Lessor</span>
                    <span className="pp-kv-v">Mission Street Partners, LP</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Asset</span>
                    <span className="pp-kv-v">Office · 535 Mission, Fl. 12</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Term</span>
                    <span className="pp-kv-v">60 months · no renewal option</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Payment</span>
                    <span className="pp-kv-v">$38,500 / mo · 3% escalator</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Discount rate</span>
                    <span className="pp-kv-v">7.0% incremental borrowing rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">2</div>
              <div className="pp-wbody">
                <div className="pp-wk">Tested · ASC 842-10-25-2</div>
                <div className="pp-wh">
                  Ran the classification test
                  <span className="pp-pill-result">none met → operating</span>
                </div>
                <div className="pp-checks">
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">
                      (a) Transfers ownership by end of term
                    </span>
                    <span className="pp-checkrow-v no">no</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">
                      (b) Reasonably certain purchase option
                    </span>
                    <span className="pp-checkrow-v no">no</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">
                      (c) Term is major part of economic life
                    </span>
                    <span className="pp-checkrow-v no">no · 60 mo of ~25 yr</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">
                      (d) PV is substantially all of fair value
                    </span>
                    <span className="pp-checkrow-v no">no · 71% of FV</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">
                      (e) Specialized, no alternative use
                    </span>
                    <span className="pp-checkrow-v no">no</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">3</div>
              <div className="pp-wbody">
                <div className="pp-wk">Booked · commencement entry</div>
                <div className="pp-wh">Balanced, dated, reversible</div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">Right-of-use asset</span>
                    <span className="pp-num">$1,840,000</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Lease liability</span>
                    <span className="pp-num">$1,792,400</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">
                      Cash
                      <small>initial direct costs + prepaid rent</small>
                    </span>
                    <span className="pp-num">$47,600</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Balanced · tied to the agreement</span>
                    <span className="pp-ok">posted</span>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ── Amortize — current every month ─────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Every month, on its own</div>
              <h2 className="pp-h">It stays current without a touch.</h2>
              <p className="pp-sub">
                Each period the liability accretes interest at your discount
                rate, the payment pays it down, and the right-of-use asset
                amortizes alongside. Aleq rolls the schedule forward and books
                the entry — opening balance to closing — so the balance sheet is
                already right when you open it.
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
                      <small>7.0% / 12 on opening</small>+ Interest accreted
                    </span>
                    <span className="pp-num">$10,455</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">− Lease payment</span>
                    <span className="pp-num neg">$(38,500)</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">− ROU asset amortized</span>
                    <span className="pp-num neg">$(28,045)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">= Closing lease liability</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    $1,764,355
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modify — when the deal changes ─────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">When the deal changes</div>
              <h2 className="pp-h">Change the lease — it remeasures itself.</h2>
              <p className="pp-sub">
                Extend the term, reset the rent, exercise an option. Aleq
                remeasures the liability at today&apos;s discount rate, adjusts
                the right-of-use asset by the same amount, books the difference,
                and rebuilds the schedule from that date forward. Every period
                you already closed stays exactly as it was filed.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Modification · term extended +24 mo
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
                      Prior periods untouched · schedule rebuilt forward
                    </span>
                    <span className="pp-ok">remeasured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment — the human line ──────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">It drafts the judgment. You make it.</h2>
              <p className="pp-sub">
                The schedule is mechanical. The judgments aren&apos;t —
                operating or finance, which discount rate, whether a renewal is
                reasonably certain. Aleq drafts each call with its reasoning
                against the codification and holds it for your sign-off. Nothing
                locks until you say so.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Classification · awaiting sign-off
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Operating lease · 7.0% incremental borrowing rate
                  </div>
                  <div className="pp-belief-meta">
                    drafted by Aleq · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      60-month term against an estimated 25-year economic life,
                      no transfer of ownership, no bargain purchase option — none
                      of the ASC 842-10-25 finance criteria are met. No rate is
                      implicit in the lease, so the incremental borrowing rate
                      applies.
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

      {/* ── Disclosure — the footnote, assembled ───────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Audit &amp; disclosure</div>
              <h2 className="pp-h">The footnote, already assembled.</h2>
              <p className="pp-sub">
                ASC 842 doesn&apos;t stop at the entry. Aleq keeps the
                quantitative disclosures current as the schedule moves — the
                weighted-average term and rate, the lease-cost breakdown, and the
                maturity analysis reconciled to the liability. It exports as a
                tied-out rollforward your auditor can follow line by line.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  ASC 842-20-50 · maturity analysis
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      Weighted-average remaining term
                    </span>
                    <span className="pp-num">3.9 yrs</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      Weighted-average discount rate
                    </span>
                    <span className="pp-num">7.0%</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Undiscounted lease payments</span>
                    <span className="pp-num">$2,310,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">Less: imputed interest</span>
                    <span className="pp-num neg">$(517,600)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">= Lease liability · ties out</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    $1,792,400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry tabs ──────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By industry"
        heading="The leases you actually carry."
        sub="Real estate or equipment, operating or finance — the same engine classifies and schedules whatever sits on your books."
        tabs={asc842Industries}
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
            <summary>Operating or finance — who decides?</summary>
            <p>
              You do. Aleq runs the five ASC 842-10-25 criteria — ownership
              transfer, purchase option, term against economic life, present
              value against fair value, specialized use — and drafts the
              classification with its reasoning. It&apos;s a judgment call, so it
              stops there: you review the draft and sign off before anything
              locks.
            </p>
          </details>
          <details>
            <summary>What discount rate does it use?</summary>
            <p>
              The rate implicit in the lease where it&apos;s determinable;
              otherwise your incremental borrowing rate. Aleq proposes the rate
              and shows the basis — the rate drives the liability and every
              period after, so it never picks one unattended.
            </p>
          </details>
          <details>
            <summary>How are modifications and remeasurements handled?</summary>
            <p>
              When a lease changes — term extended, payments reset, an option
              exercised — Aleq remeasures the liability at the current discount
              rate, adjusts the right-of-use asset by the same amount, books the
              difference, and rebuilds the schedule from that date forward. Prior
              periods stay untouched.
            </p>
          </details>
          <details>
            <summary>Does it handle the short-term lease exemption?</summary>
            <p>
              Yes, by asset class, where you&apos;ve elected it. For a lease of
              twelve months or less with no purchase option Aleq applies the
              exemption — no right-of-use asset or liability — and recognizes the
              cost straight-line over the term.
            </p>
          </details>
          <details>
            <summary>Is the rollforward audit-ready?</summary>
            <p>
              Every period exports as a tied-out rollforward — opening balance,
              interest, payments, amortization, closing balance — traced back to
              the signed lease and the rate you confirmed, with the journal
              entries and provenance attached — every figure traceable back to
              the agreement.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put one lease on Aleq.</h2>
          <p>
            Bring a signed lease. Watch Aleq classify it, book the right-of-use
            asset and liability, amortize both to the period, and keep the
            rollforward and disclosures tied out — every entry drafted for your
            sign-off.
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
