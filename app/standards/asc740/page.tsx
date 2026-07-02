import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc740JudgmentDemo from "@/components/Asc740JudgmentDemo";
import { asc740Parts } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "What is an income tax provision under ASC 740?", a: "The income tax provision is the total income tax expense a company reports in its GAAP financial statements. Under ASC 740 it has two parts: current tax expense, the tax owed on this year's taxable income, and deferred tax expense, the change in deferred tax assets and liabilities arising from temporary differences between book and tax accounting. Current plus deferred equals total tax expense, and dividing by pretax book income gives the effective tax rate. Aleq computes the federal current and deferred provision automatically from pretax book income and the temporary differences recorded on your ledger — current with the books each period, not a quarter behind." },
  { q: "What is the difference between a deferred tax asset and a deferred tax liability?", a: "Both come from temporary differences between book and tax accounting. A deferred tax asset arises from deductible temporary differences — items expensed on the books before they're deductible for tax, like accrued compensation, stock comp, or NOL carryforwards — and represents future tax savings. A deferred tax liability arises from taxable temporary differences, like accelerated tax depreciation, and represents future tax owed. Each is measured at the enacted rate expected to apply when the difference reverses. Aleq tracks every recorded temporary difference — the cumulative book-tax gap and the deferred balance behind it — and reconciles the net position to the ledger every period." },
  { q: "What is a valuation allowance for deferred tax assets?", a: "A valuation allowance is a contra account that reduces a deferred tax asset to the amount that is more likely than not — greater than 50% probable — to be realized. ASC 740-10-30 requires weighing all positive and negative evidence: cumulative losses in recent years are heavy negative evidence, while projected future income, reversing taxable differences, and tax-planning strategies count as positive. That evidence-weighing is judgment Aleq doesn't do for you — it stays your team's call. Give Aleq the target allowance your team lands on and it posts the adjustment and carries the balance forward against the gross DTA every period after." },
  { q: "What is the difference between permanent and temporary differences?", a: "A temporary difference is a book-tax difference that reverses over time — depreciation methods, accrued compensation, stock comp, Section 174 capitalization — and it creates a deferred tax asset or liability. A permanent difference never reverses — fines, the nondeductible half of meals, tax-exempt interest — so it changes the effective tax rate but creates no deferred balance. Getting the split right is what makes the provision tie out. Aleq applies your recorded permanent and temporary differences to pretax book income when computing federal current and deferred tax, and tracks each temporary difference's cumulative balance so the deferred number stays reconciled to the ledger." },
  { q: "How do you calculate the effective tax rate?", a: "The effective tax rate is the total tax provision divided by pretax book income — current plus deferred expense over the pretax number. It differs from the 21% federal statutory rate because of state taxes, permanent differences, credits, valuation-allowance changes, and stock-comp windfalls; the rate reconciliation in the tax footnote bridges the two line by line. Aleq computes the effective rate automatically as it builds the federal current and deferred provision from the ledger. The line-by-line bridge from 21% to your rate is still your team's build today — Aleq gives you the computed rate, not the decomposed reconciliation." },
  { q: "What happens to deferred taxes when tax rates change?", a: "Under ASC 740, deferred tax assets and liabilities are remeasured at the newly enacted rate in the period of enactment, with the entire catch-up running through tax expense that period — not spread over future years. This is an honest gap in Aleq today: changing an enacted rate after deferred balances are posted doesn't remeasure them automatically. The system blocks rather than posting a wrong number, and handling it correctly means reversing and reposting the affected deferred balances by hand until automatic remeasurement ships. It's on the roadmap, flagged plainly rather than approximated in the meantime." },
  { q: "How do net operating loss carryforwards work?", a: "A net operating loss carryforward lets a company apply past losses against future taxable income. Federal NOLs generated after 2017 carry forward indefinitely but can offset only 80% of taxable income in any year, and a Section 382 ownership change can cap annual usage — a common issue after fundraising rounds. Each NOL creates a deferred tax asset whose realizability feeds the valuation-allowance assessment. Aleq tracks every NOL vintage — original amount, utilized, and remaining — period over period as carryforwards are applied. The 80% limitation, Section 382 analysis, and realization testing against projected income remain your team's assessment today." },
  { q: "What is Section 174 R&D capitalization?", a: "Section 174 required companies to capitalize research and experimentation costs for tax purposes starting in 2022 and amortize them — five years for domestic research, fifteen for foreign — instead of deducting them immediately. Because those costs stay expensed for book purposes, capitalization creates a large deductible temporary difference and deferred tax asset, especially for software companies. In Aleq, Section 174 can be recorded as a temporary difference, and its deferred balance is tracked and reconciled like any other. But the amortization schedule itself and the related R&D credit computation aren't automatic yet — your team computes those and records the result." },
  { q: "Does Aleq automate the ASC 740 tax provision?", a: "The federal piece, yes. Aleq computes federal current and deferred tax expense from pretax book income and your recorded temporary differences, tracks NOL carryforwards by vintage, posts the valuation allowance your team sets, and exports the provision, deferred tax schedule, and NOL roll-forward tied to the ledger — kept current as the books move. What stays your team's work today: the line-by-line rate reconciliation, weighing valuation-allowance evidence, state apportionment, GILTI and foreign tax credits, R&D credit computation, and rate-change remeasurement. Those are either judgment by design or on the roadmap — Aleq shows the gap plainly rather than approximating it." },
  { q: "What is the best tax provision software for startups?", a: "Most provision tools are workpaper systems: you export the trial balance, rebuild it in their template, and refresh everything each quarter. For a startup, the practical question is whether the tool reads your actual ledger. Aleq computes the federal current and deferred provision directly from the general ledger — pretax income, temporary differences, and NOLs stay current as the books move, with an exportable deferred tax schedule for your auditors. On scope: if you need multi-state apportionment or international calculations like GILTI and foreign tax credits computed in-tool, that remains your team's workbook alongside Aleq today." },
];

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
                Close a month with us
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
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
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
