import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc340JudgmentDemo from "@/components/Asc340JudgmentDemo";
import { asc340Motions } from "./industries";

export const metadata: Metadata = {
  title: "ASC 340-40 · Commissions — capitalized, then amortized over the benefit",
  description:
    "Aleq capitalizes the incremental cost of obtaining a contract, amortizes it over the period of benefit you set, applies the one-year expedient where elected, and writes off the balance on churn — tied to the contract and the ledger. The period of benefit is your call.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 340-40 · Contract costs</div>
            <h1>
              The cost of the sale,
              <br />
              spread over the benefit.
            </h1>
            <p className="pp-hero-lead">
              Aleq capitalizes the commission that won the deal and amortizes it
              across the period it benefits — not expensed in a lump the month
              you paid it.
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
              tied to the contract · ties to the ledger
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Commission · C-7015 · Allison W.
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>incremental cost to obtain</small>
                    Commission paid
                  </span>
                  <span className="pp-num">$22,680</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Capitalized asset</span>
                  <span className="pp-num">$22,680</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortized to date</span>
                  <span className="pp-num">$3,784</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortization this month</span>
                  <span className="pp-num">$473</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Month 8 of 48 · period of benefit</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">deal churns early</div>
              <div className="pp-float-v">remaining cost written off</div>
            </div>
          </div>
        </div>
      </section>

{/* ── Judgment demo — capitalize, expedient, churn ────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              How it works
            </div>
            <h2 className="pp-h">You set how long the benefit runs. Aleq runs the rest.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Whether renewal commissions are commensurate — and so how long a
              commission&apos;s benefit really lasts — is your team&apos;s call.
              Once the period is set, three things happen automatically.
            </p>
          </div>
          <Asc340JudgmentDemo />
        </div>
      </section>

      {/* ── By-payout schedule ─────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The deferred-cost book</div>
              <h2 className="pp-h">Every payout, on its own schedule.</h2>
              <p className="pp-sub">
                Each commission carries its own capitalized balance and
                amortization, tied back to the rep and the contract that earned
                it. Aleq keeps the whole deferred-cost asset reconciled — what
                was paid, what&apos;s amortized, what remains — and writes off the
                balance the moment a contract churns.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Capitalized commissions · amortizing
                </div>
                <div className="pp-tblwrap">
                  <table className="pp-tbl">
                    <thead>
                      <tr>
                        <th>Payee · contract</th>
                        <th>Capitalized</th>
                        <th>/ mo</th>
                        <th>Remaining</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Allison W.<small>C-7015 · 48 mo</small>
                        </td>
                        <td>$22,680</td>
                        <td>$473</td>
                        <td>$18,896</td>
                      </tr>
                      <tr>
                        <td>
                          Brent K.<small>C-6904 · 48 mo</small>
                        </td>
                        <td>$31,400</td>
                        <td>$654</td>
                        <td>$21,582</td>
                      </tr>
                      <tr>
                        <td>
                          Marcus D.<small>C-7102 · 48 mo</small>
                        </td>
                        <td>$15,000</td>
                        <td>$313</td>
                        <td>$13,750</td>
                      </tr>
                      <tr>
                        <td>
                          Priya N.<small>C-6711 · 48 mo</small>
                        </td>
                        <td>$27,900</td>
                        <td>$581</td>
                        <td>$16,849</td>
                      </tr>
                      <tr className="tot">
                        <td>Deferred cost asset</td>
                        <td>$484,400</td>
                        <td>$31,400</td>
                        <td>$1,740,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GTM-motion tabs ────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By motion"
        heading="However you sell, the cost follows the deal."
        sub="New logos, renewals, channel, self-serve — what you capitalize and how long it benefits depends on the motion. Aleq runs the right treatment for each."
        tabs={asc340Motions}
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
            <summary>What counts as a capitalizable cost?</summary>
            <p>
              Only the incremental costs of obtaining a contract — costs you
              wouldn&apos;t have incurred if the deal hadn&apos;t closed, like
              sales commissions and the payroll taxes on them. Aleq matches each
              payout to its contract and tests that it&apos;s genuinely
              incremental before capitalizing.
            </p>
          </details>
          <details>
            <summary>How is the period of benefit determined?</summary>
            <p>
              That&apos;s your team&apos;s call today — the contract term,
              expected renewals, and whether renewal commissions are
              commensurate all feed into it, but Aleq doesn&apos;t derive the
              period on its own yet. Set it on the plan and Aleq capitalizes and
              amortizes against it automatically from there.
            </p>
          </details>
          <details>
            <summary>Do you apply the one-year practical expedient?</summary>
            <p>
              Where a plan has elected it. If the period you&apos;ve set is
              twelve months or less on an expedient-elected plan, Aleq expenses
              the cost as incurred instead of capitalizing it — no asset for a
              deal that won&apos;t outlive the year.
            </p>
          </details>
          <details>
            <summary>What happens when a contract churns?</summary>
            <p>
              The remaining capitalized balance is impaired and written off in
              the period the customer leaves. Aleq catches the churn from the
              contract status and books the write-off, so the deferred asset
              never overstates.
            </p>
          </details>
          <details>
            <summary>Is the deferred-cost roll-forward auditable?</summary>
            <p>
              Every period exports the roll-forward — opening balance,
              additions, amortization, write-offs, closing balance — tied to each
              rep and contract, with the source payout and provenance attached.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put your commissions on Aleq.</h2>
          <p>
            Connect payroll and your CRM. Set the period of benefit per plan and
            watch Aleq capitalize the cost of every deal, apply the one-year
            expedient where you&apos;ve elected it, and write off the balance the
            moment a contract churns — the deferred-cost roll-forward tied out.
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
