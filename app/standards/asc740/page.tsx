import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import { asc740Parts } from "./industries";

export const metadata: Metadata = {
  title: "ASC 740 · Income taxes — your provision, reconciled and current",
  description:
    "Aleq bridges book income to the tax provision, tracks every temporary difference and NOL, reconciles the effective rate, and tests the valuation allowance — kept current as the books move. It drafts the realization judgment; the call is yours.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 740 · Income taxes</div>
            <h1>
              Your provision,
              <br />
              reconciled to the rate.
            </h1>
            <p className="pp-hero-lead">
              Aleq bridges book income to the tax provision, tracks every
              temporary difference and NOL, and reconciles the effective rate —
              current with the books, not a quarter behind.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your books
              </Link>
              <a className="btn btn-lg" href="#how">
                See the reconciliation
              </a>
            </div>
            <div className="pp-note">
              <span className="t-dot" />
              built from the ledger · ties to the return
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Provision · FY2026 · YTD
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Pretax book income</span>
                  <span className="pp-num">$2,400,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Current provision</span>
                  <span className="pp-num">$61,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Deferred provision</span>
                  <span className="pp-num">$452,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>provision ÷ pretax income</small>
                    Effective tax rate
                  </span>
                  <span className="pp-num">21.4%</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Total tax provision</span>
                <span
                  className="pp-num"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  $513,000
                </span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">rate changes</div>
              <div className="pp-float-v">deferreds remeasured</div>
            </div>
          </div>
        </div>
      </section>

{/* ── ETR reconciliation — the centerpiece ───────────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              Statutory → effective
            </div>
            <h2 className="pp-h">Every point between 21% and your rate.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              The rate reconciliation is the first schedule a reviewer turns to.
              Aleq builds it line by line from the ledger — every driver named,
              every point traceable.
            </p>
          </div>

          <div className="pp-worked reveal" style={{ maxWidth: "720px" }}>
            <div className="pp-worked-head">
              <svg className="pp-card-mark" viewBox="0 0 48 48">
                <use href="#aleq-mark" />
              </svg>
              Effective tax rate reconciliation · FY2026
              <span className="we-tag">derived</span>
            </div>
            <div className="pp-tb" style={{ padding: "10px 26px 4px" }}>
              <div className="pp-tb-row">
                <span className="pp-tb-acct">Federal statutory rate</span>
                <span className="pp-num">21.0%</span>
              </div>
              <div className="pp-tb-row">
                <span className="pp-tb-acct">State taxes, net of federal</span>
                <span className="pp-num">+4.2%</span>
              </div>
              <div className="pp-tb-row">
                <span className="pp-tb-acct">Nondeductible permanent items</span>
                <span className="pp-num">+1.1%</span>
              </div>
              <div className="pp-tb-row">
                <span className="pp-tb-acct neg">R&amp;D tax credit</span>
                <span className="pp-num neg">(3.8%)</span>
              </div>
              <div className="pp-tb-row">
                <span className="pp-tb-acct neg">Stock-comp windfall</span>
                <span className="pp-num neg">(1.4%)</span>
              </div>
              <div className="pp-tb-row">
                <span className="pp-tb-acct">Change in valuation allowance</span>
                <span className="pp-num">+0.3%</span>
              </div>
            </div>
            <div className="pp-tb-foot" style={{ margin: "4px 26px 0" }}>
              <span className="pp-tb-k">= Effective tax rate</span>
              <span
                className="pp-num"
                style={{ fontSize: "18px", fontWeight: 600 }}
              >
                21.4%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Temporary differences ──────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Book vs tax</div>
              <h2 className="pp-h">Every difference, on one schedule.</h2>
              <p className="pp-sub">
                Stock comp, §174 capitalization, accruals, depreciation, NOLs —
                each temporary difference creates a deferred tax asset or
                liability that reverses on its own timeline. Aleq tracks the
                cumulative book-tax difference and the deferred balance behind it,
                reconciled to the ledger every period.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Deferred taxes · temporary differences
                </div>
                <div className="pp-tblwrap">
                  <table className="pp-tbl">
                    <thead>
                      <tr>
                        <th>Difference</th>
                        <th>Cumulative</th>
                        <th>DTA / (DTL)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>§174 R&amp;D capitalization</td>
                        <td>$3,600,000</td>
                        <td>$900,000</td>
                      </tr>
                      <tr>
                        <td>Stock-based compensation</td>
                        <td>$2,590,000</td>
                        <td>$648,000</td>
                      </tr>
                      <tr>
                        <td>Accrued compensation</td>
                        <td>$560,000</td>
                        <td>$140,000</td>
                      </tr>
                      <tr>
                        <td>NOL carryforward</td>
                        <td>$5,200,000</td>
                        <td>$1,300,000</td>
                      </tr>
                      <tr>
                        <td>Depreciation</td>
                        <td>$(1,400,000)</td>
                        <td className="neg">$(350,000)</td>
                      </tr>
                      <tr>
                        <td>Valuation allowance</td>
                        <td>—</td>
                        <td className="neg">$(800,000)</td>
                      </tr>
                      <tr className="tot">
                        <td>Net deferred tax asset</td>
                        <td>—</td>
                        <td>$1,838,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rate change remeasurement ──────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">When the rate moves</div>
              <h2 className="pp-h">A rate change, remeasured at enactment.</h2>
              <p className="pp-sub">
                When a federal or state rate is enacted, every deferred balance
                has to be remeasured at the new rate — and the catch-up runs
                through the provision in the period of enactment. Aleq remeasures
                the whole schedule the day a law changes and books the
                adjustment, so the rate reconciliation never drifts.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Rate change · state +0.9%
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Deferred tax asset
                      <small>remeasured at the newly enacted rate</small>
                    </span>
                    <span className="pp-num">$24,300</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Deferred tax provision</span>
                    <span className="pp-num">$24,300</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">
                      Period of enactment · catch-up booked
                    </span>
                    <span className="pp-ok">remeasured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valuation allowance — judgment ─────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">The valuation allowance is yours to make.</h2>
              <p className="pp-sub">
                Whether a deferred tax asset will be realized is the central
                judgment of ASC 740 — and it turns on evidence: cumulative
                losses against projected income, the carryforward period, your
                tax-planning strategies. Aleq weighs the positive and negative
                evidence, drafts the allowance with its reasoning, and holds it
                for your sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Valuation allowance · awaiting sign-off
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Partial allowance · $800,000 · more-likely-than-not
                  </div>
                  <div className="pp-belief-meta">
                    drafted by Aleq · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Three years of cumulative pretax losses are significant
                      negative evidence under ASC 740-10-30. Projected taxable
                      income over the carryforward period supports realizing
                      $1.84M of the gross DTA; the $0.8M against the balance
                      beyond that horizon is reserved until the evidence turns.
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

      {/* ── Provision-component tabs ───────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="Across the provision"
        heading="Federal, state, and everything against them."
        sub="The provision is built from parts — federal, state, international, credits, carryforwards. Aleq computes each and rolls them into one rate."
        tabs={asc740Parts}
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
            <summary>How does it build the provision?</summary>
            <p>
              Aleq starts from pretax book income on the ledger, applies your
              permanent and temporary differences, computes current and deferred
              tax, and reconciles the effective rate — every driver named and
              traced back to the source entry.
            </p>
          </details>
          <details>
            <summary>How is the valuation allowance assessed?</summary>
            <p>
              Aleq weighs positive and negative evidence — cumulative losses,
              projected income, reversal patterns, tax-planning strategies —
              under the more-likely-than-not standard and drafts the allowance
              with its reasoning. It&apos;s a judgment, so it stops for your
              sign-off.
            </p>
          </details>
          <details>
            <summary>Does it handle rate changes and §174?</summary>
            <p>
              Yes. Enacted rate changes remeasure every deferred balance in the
              period of enactment, and §174 capitalization is tracked as a
              deferred tax asset that amortizes over five years — both flow
              through the rate reconciliation automatically.
            </p>
          </details>
          <details>
            <summary>What about state apportionment and international?</summary>
            <p>
              Aleq apportions state tax by factor across every state with nexus,
              computes the blended rate net of federal, and brings GILTI, Subpart
              F, and foreign tax credits into the provision for foreign
              subsidiaries.
            </p>
          </details>
          <details>
            <summary>Can it produce the tax footnote?</summary>
            <p>
              Every period exports the provision components, the deferred tax
              schedule, the rate reconciliation, and the carryforward and
              valuation-allowance roll-forwards — tied to the ledger and ready
              for the disclosure.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your rate reconciled.</h2>
          <p>
            Connect the ledger. Watch Aleq bridge book income to the provision,
            track every deferred, reconcile the effective rate, and draft the
            valuation allowance — current with the books and ready for the
            footnote, held for your sign-off.
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
