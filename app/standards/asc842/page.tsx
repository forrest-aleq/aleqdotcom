import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc842JudgmentDemo from "@/components/Asc842JudgmentDemo";
import { asc842Industries } from "./industries";

export const metadata: Metadata = {
  title: "ASC 842 · Leases — sign the lease, Aleq books the rest",
  description:
    "Aleq books the right-of-use asset and lease liability from a signed lease, then amortizes both every period — the schedule is automatic. Classification and the discount rate are your call; modification remeasurement is on our roadmap.",
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
              <Link className="btn btn-primary btn-lg" href="/demo">
                See it on your books
              </Link>
              <a className="btn btn-lg" href="#how">
                How it works
              </a>
            </div>
            <div className="pp-note">
              <span className="t-dot" />
              ties to the ledger · posted monthly, reversible
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
              <div className="pp-float-k">discount rate confirmed once</div>
              <div className="pp-float-v">60-period schedule runs itself</div>
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
            <h2 className="pp-h">From a classified lease to a booked entry.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Your team runs the classification test; Aleq takes it from
              there — present value, the commencement entry, and every period
              after. Below is how it ran on the lease at 535 Mission.
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
                <div className="pp-wk">Classified · by your team · ASC 842-10-25-2</div>
                <div className="pp-wh">
                  The 5-criteria test, run and confirmed
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

      {/* ── Judgment demo — classify, exempt, and where it stops ── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              Where Aleq&apos;s part starts and stops
            </div>
            <h2 className="pp-h">The schedule is mechanical. The judgments aren&apos;t.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Operating or finance, which discount rate, whether a lease
              qualifies for the short-term exemption — three moments in a
              lease&apos;s life, and one thing that isn&apos;t built yet.
            </p>
          </div>
          <Asc842JudgmentDemo />
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
              You do, today. Run the five ASC 842-10-25 criteria — ownership
              transfer, purchase option, term against economic life, present
              value against fair value, specialized use — and tell Aleq the
              classification. From there it computes the present value, books
              the commencement entry, and runs the schedule every period.
            </p>
          </details>
          <details>
            <summary>What discount rate does it use?</summary>
            <p>
              Whichever you give it — the rate implicit in the lease where
              it&apos;s determinable, otherwise your incremental borrowing rate.
              Aleq doesn&apos;t resolve which one applies on its own yet; once
              you confirm the rate, it drives the liability and every period
              after automatically.
            </p>
          </details>
          <details>
            <summary>How are modifications and remeasurements handled?</summary>
            <p>
              Not automatically yet — this is a real gap. Editing a lease&apos;s
              term or rate today updates the record but doesn&apos;t recompute
              the liability or rebuild the schedule. Remeasurement on
              modification is next on our roadmap; until it ships, treat a
              modified lease as a new lease record.
            </p>
          </details>
          <details>
            <summary>Does it handle the short-term lease exemption?</summary>
            <p>
              Yes, where you&apos;ve flagged a lease as short-term with no
              purchase option — Aleq skips right-of-use recognition entirely and
              expenses the payments straight-line over the term. The
              qualification itself is your call; the exemption mechanics run on
              their own once it&apos;s flagged.
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
            Classify one lease and confirm the discount rate. Watch Aleq book
            the right-of-use asset and liability, amortize both every period,
            and keep the rollforward and disclosures tied out — no schedule to
            build by hand.
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
