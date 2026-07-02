import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc842JudgmentDemo from "@/components/Asc842JudgmentDemo";
import { asc842Industries } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "How do you calculate the lease liability under ASC 842?", a: "The lease liability equals the present value of the remaining lease payments over the lease term, discounted at the rate implicit in the lease where determinable, and otherwise at your incremental borrowing rate. Fixed payments and contractual escalators are included. After commencement, the liability accretes interest at the discount rate each period and is reduced by the payment made. On a $38,500-per-month, 60-month office lease at 7.0%, the present value is approximately $1.79 million. Aleq computes the present value from the signed lease once you confirm the discount rate, then rolls the liability forward each period automatically." },
  { q: "How do you calculate the right-of-use asset under ASC 842?", a: "Begin with the initial lease liability, which is the present value of the remaining lease payments. Add any payments made at or before commencement and any initial direct costs, and subtract lease incentives received: ROU asset = lease liability + prepaid rent + initial direct costs − incentives. For example, a $1,792,400 liability plus $47,600 of initial direct costs and prepaid rent produces a $1,840,000 right-of-use asset. The commencement entry debits the ROU asset and credits the lease liability and cash. Aleq reads these inputs from the signed agreement and books the commencement entry, balanced, dated, and reversible." },
  { q: "What is the difference between an operating lease and a finance lease under ASC 842?", a: "Classification depends on the five criteria in ASC 842-10-25-2: ownership transfers by the end of the term, a purchase option is reasonably certain to be exercised, the term is a major part of the asset's economic life, the present value of payments is substantially all of the asset's fair value, or the asset is specialized with no alternative use. If any criterion is met, the lease is a finance lease, with interest and amortization reported separately and expense higher in earlier periods. If none is met, it is an operating lease with a single straight-line lease cost. The classification test is your team's judgment; you provide the classification, and Aleq computes and schedules everything from there." },
  { q: "What discount rate should I use for ASC 842?", a: "Use the rate implicit in the lease when it is readily determinable; for lessees it usually is not, because it requires the lessor's internal inputs. Otherwise use your incremental borrowing rate, meaning the rate you would pay to borrow the lease payments on a collateralized basis over a similar term. Private companies may also elect a risk-free rate by asset class. Because the rate materially drives the liability, it remains your determination. Aleq uses whichever rate you confirm and does not resolve which rate applies on its own; once confirmed, the rate drives the present value and every subsequent period." },
  { q: "Do operating leases go on the balance sheet under ASC 842?", a: "Yes. This is the principal change ASC 842 introduced. Nearly every lease longer than 12 months, whether operating or finance, requires the lessee to record a right-of-use asset and a lease liability on the balance sheet. Under the prior standard, ASC 840, operating leases were disclosed only in the footnotes. The main exception is the short-term lease exemption for terms of 12 months or less with no purchase option. Aleq books the ROU asset and lease liability from the signed lease and updates both on the balance sheet each month, tied to the agreement." },
  { q: "What is the short-term lease exemption under ASC 842?", a: "A lessee can elect, by asset class, not to recognize a right-of-use asset or lease liability for leases with a term of 12 months or less at commencement and no purchase option the lessee is reasonably certain to exercise (ASC 842-20-25-2). Payments under exempt leases are expensed on a straight-line basis over the term. Whether a lease qualifies, and whether you have made the election for that asset class, is your determination. Once you flag a lease as short-term in Aleq, it omits balance-sheet recognition and books the straight-line expense automatically." },
  { q: "How do you account for a lease modification under ASC 842?", a: "If the modification grants an additional right of use priced at its standalone rate, it is treated as a separate lease. Otherwise the lease is remeasured: the liability is recalculated using the remaining payments and a discount rate updated at the modification date, the right-of-use asset is adjusted by the same amount, and classification is reassessed. Aleq does not automate this yet. Editing a lease's term or rate updates the record but does not recompute the liability or rebuild the schedule. Remeasurement on modification is next on the roadmap; until it ships, a modified lease should be handled as a new lease record." },
  { q: "Does Aleq handle ASC 842 lease accounting?", a: "Yes, with a defined division of responsibility. Your team runs the classification test and confirms the discount rate, whether the implicit rate or your incremental borrowing rate. From there, Aleq computes the present value of the payments, books the commencement entry for the right-of-use asset and lease liability, and each month accretes interest, applies the payment, amortizes the ROU asset, and posts the entry. Each period exports as a tied-out rollforward covering opening balance, interest, payments, amortization, and closing balance, traced to the signed lease. Modification remeasurement is not built yet and is next on the roadmap." },
  { q: "What is the best lease accounting software for ASC 842?", a: "Evaluate lease accounting software on four criteria: whether the liability and right-of-use asset are computed from the signed agreement rather than from separately re-keyed abstract data, whether monthly interest and amortization entries post to the general ledger automatically, whether every balance exports as a tied-out rollforward an auditor can trace to the source lease, and whether the vendor documents which determinations remain with your team. Aleq is designed so that you classify the lease and confirm the discount rate once, after which it books commencement, runs the full schedule each period in your ledger, and keeps the rollforward and disclosures traceable to the lease." },
  { q: "Can AI automate lease accounting?", a: "Much of ASC 842 lessee accounting is mechanical and can be automated: reading terms from the signed lease, computing present value, booking the commencement entry, and rolling the schedule forward each period with interest, payments, and amortization. Two determinations remain with your team because they materially change the numbers: the operating-versus-finance classification under ASC 842-10-25-2 and the discount rate. Aleq is designed around that division. It requires those two confirmations, then runs the schedule automatically, with every entry posted, reversible, and traceable to the agreement, so your team and your auditor can verify each figure against the source." },
];

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
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
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
