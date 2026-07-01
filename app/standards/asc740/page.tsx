import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc740JudgmentDemo from "@/components/Asc740JudgmentDemo";
import { asc740Parts } from "./industries";

export const metadata: Metadata = {
  title: "ASC 740 · Income taxes — your provision, computed from the ledger",
  description:
    "Aleq computes current and deferred tax expense from pretax book income and your temporary differences, and tracks NOLs — kept current as the books move. The rate bridge, valuation-allowance evidence, and rate-change remeasurement are still your team's work today.",
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
              computed from the ledger.
            </h1>
            <p className="pp-hero-lead">
              Aleq computes current and deferred tax expense from pretax book
              income and your recorded temporary differences — current with
              the books, not a quarter behind. The line-by-line rate bridge is
              still yours to build.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">
                See it on your books
              </Link>
              <a className="btn btn-lg" href="#how">
                See how it splits
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
              <div className="pp-float-k">temporary differences on file</div>
              <div className="pp-float-v">deferred tax computed automatically</div>
            </div>
          </div>
        </div>
      </section>

{/* ── Judgment demo — compute, set the allowance, and where it stops ── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              Where Aleq&apos;s part starts and stops
            </div>
            <h2 className="pp-h">The provision computes. The judgments don&apos;t — yet.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Three moments in the same provision — and one, a rate change,
              that isn&apos;t handled automatically today.
            </p>
          </div>
          <Asc740JudgmentDemo />
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

      {/* ── Provision-component tabs ───────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="Across the provision"
        heading="Federal runs today. The rest is on the roadmap."
        sub="The provision is built from parts — federal, state, international, credits, carryforwards. Federal current and deferred tax compute automatically; the rest is shown here so the gap is clear, not hidden."
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
              recorded permanent and temporary differences, and computes
              current and deferred tax expense and a single effective rate. The
              line-by-line bridge from 21% to your rate — state, permanent
              items, credits, windfall — is still your team&apos;s build today.
            </p>
          </details>
          <details>
            <summary>How is the valuation allowance assessed?</summary>
            <p>
              That&apos;s your team&apos;s judgment today — weighing cumulative
              losses, projected income, and tax-planning strategies under the
              more-likely-than-not standard. Give Aleq the target allowance and
              it posts the adjustment and carries the balance forward every
              period.
            </p>
          </details>
          <details>
            <summary>Does it handle rate changes and §174?</summary>
            <p>
              Not automatically yet — this is a real gap. A rate change after
              deferred balances are posted needs those balances reversed and
              reposted by hand today; automatic remeasurement is on our
              roadmap. §174 can be recorded as a temporary difference, but the
              5-year amortization and credit computation aren&apos;t automatic.
            </p>
          </details>
          <details>
            <summary>What about state apportionment and international?</summary>
            <p>
              Not built yet. State apportionment, GILTI, Subpart F, and foreign
              tax credits are still your team&apos;s workbook — federal current
              and deferred tax is what Aleq computes automatically today.
            </p>
          </details>
          <details>
            <summary>Can it produce the tax footnote?</summary>
            <p>
              Every period exports the federal provision, the deferred tax
              schedule, and the NOL carryforward roll-forward — tied to the
              ledger. The rate reconciliation and valuation-allowance
              roll-forward for the footnote are still assembled by your team.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your provision computed.</h2>
          <p>
            Connect the ledger. Watch Aleq compute current and deferred tax
            expense from your temporary differences and NOLs, current with the
            books every period — set the valuation allowance target and it
            carries the balance forward from there.
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
