import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import { asc340Motions } from "./industries";

export const metadata: Metadata = {
  title: "ASC 340-40 · Commissions — capitalized, then amortized over the benefit",
  description:
    "Aleq capitalizes the incremental cost of obtaining a contract, amortizes it over the period of benefit, and runs the commensurate-renewal and one-year-expedient tests — tied to the contract and the ledger. It drafts the period of benefit; the call is yours.",
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
              <Link className="btn btn-primary btn-lg" href="/company/contact">
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

      {/* ── KPI band ───────────────────────────────────────────── */}
      <section className="pp-statband">
        <div className="pp-wrap">
          <div className="pp-statcap">
            <i />
            deferred contract costs · across the book
          </div>
          <div className="pp-stats reveal">
            <div className="pp-stat">
              <div className="pp-stat-v">$484K</div>
              <div className="pp-stat-l">
                Capitalized YTD
                <span className="pp-stat-sub">costs to obtain contracts</span>
              </div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-v">$188K</div>
              <div className="pp-stat-l">
                Amortized YTD
                <span className="pp-stat-sub">to sales &amp; marketing</span>
              </div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-v">
                $1.74<span className="u">M</span>
              </div>
              <div className="pp-stat-l">
                Deferred cost asset
                <span className="pp-stat-sub">on the balance sheet</span>
              </div>
            </div>
            <div className="pp-stat">
              <div className="pp-stat-v">$31.4K</div>
              <div className="pp-stat-l">
                Monthly amortization
                <span className="pp-stat-sub">booked automatically</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Worked example — capitalize then amortize ──────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              How it works
            </div>
            <h2 className="pp-h">Paid once. Expensed over the benefit.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              A commission isn&apos;t an expense the month it&apos;s paid — it
              buys a customer relationship that lasts for years. Below is
              Allison&apos;s commission on the Cyberdyne deal.
            </p>
          </div>

          <div className="pp-worked reveal">
            <div className="pp-worked-head">
              <svg className="pp-card-mark" viewBox="0 0 48 48">
                <use href="#aleq-mark" />
              </svg>
              Worked example · C-7015 · Allison W.
              <span className="we-tag">derived</span>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">1</div>
              <div className="pp-wbody">
                <div className="pp-wk">Read · from payroll &amp; CRM</div>
                <div className="pp-wh">Matched the payout to the deal</div>
                <div className="pp-kv">
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Contract</span>
                    <span className="pp-kv-v">Cyberdyne · C-7015 · $540,000</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Commission</span>
                    <span className="pp-kv-v">$21,600 + $1,080 payroll tax</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Incremental?</span>
                    <span className="pp-kv-v">yes · paid only on close</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">2</div>
              <div className="pp-wbody">
                <div className="pp-wk">Tested · period of benefit</div>
                <div className="pp-wh">
                  Set the amortization period
                  <span className="pp-pill-result">48 mo · incl. renewals</span>
                </div>
                <div className="pp-kv">
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Initial term</span>
                    <span className="pp-kv-v">36 months</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Expected customer life</span>
                    <span className="pp-kv-v">48 months · renewal commission not commensurate</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">One-year expedient</span>
                    <span className="pp-kv-v">n/a · benefit &gt; 12 mo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">3</div>
              <div className="pp-wbody">
                <div className="pp-wk">Booked · this period</div>
                <div className="pp-wh">Capitalized, then amortized $473 / mo</div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Amortization expense
                      <small>$22,680 ÷ 48 months</small>
                    </span>
                    <span className="pp-num">$473</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Deferred commission asset</span>
                    <span className="pp-num">$473</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Balanced · posted monthly</span>
                    <span className="pp-ok">posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      {/* ── Judgment — period of benefit ───────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">How long is the benefit? You decide.</h2>
              <p className="pp-sub">
                The amortization period is the judgment that drives the whole
                schedule — the initial term, or the longer life of the customer
                when renewals aren&apos;t paid a commensurate commission. Aleq
                drafts the period of benefit from your renewal rates and churn,
                runs the commensurate test, and holds the call for your sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Period of benefit · awaiting sign-off
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    48 months · beyond the 36-month initial term
                  </div>
                  <div className="pp-belief-meta">
                    drafted by Aleq · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Renewal commissions are paid at 4% against 9% on new
                      business — not commensurate — so the asset benefits the
                      expected customer relationship, not just the initial term.
                      Median tenure across the cohort is 47 months; amortize over
                      48.
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
              From the contract term, expected renewals, and whether renewal
              commissions are commensurate. Where they aren&apos;t, the benefit
              extends to the expected customer life. Aleq drafts the period with
              its basis and holds it for your sign-off.
            </p>
          </details>
          <details>
            <summary>Do you apply the one-year practical expedient?</summary>
            <p>
              Where you&apos;ve elected it. If the amortization period would be
              twelve months or less, Aleq expenses the cost as incurred — no
              asset for a deal that won&apos;t outlive the year.
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
            Connect payroll and your CRM. Watch Aleq capitalize the cost of every
            deal, amortize it over the period of benefit, run the commensurate
            and expedient tests, and keep the deferred-cost roll-forward tied out
            — the period of benefit drafted for your sign-off.
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
