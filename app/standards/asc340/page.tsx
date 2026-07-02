import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc340JudgmentDemo from "@/components/Asc340JudgmentDemo";
import { asc340Motions } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "Do sales commissions have to be capitalized under ASC 606?", a: "Yes. ASC 340-40, the contract-cost guidance that accompanies ASC 606, requires capitalizing the incremental costs of obtaining a contract — chiefly sales commissions — as an asset, then amortizing them over the period the contract benefits the company. Expensing commissions as paid is only permitted under the practical expedient, when the amortization period would be one year or less. For a typical SaaS company with multi-year customer relationships, that means a deferred commission asset amortized over several years. Aleq automates this: it matches each payout to its contract, capitalizes it, amortizes it over the period of benefit you set, and writes off the balance if the customer churns." },
  { q: "What counts as an incremental cost of obtaining a contract?", a: "Incremental costs of obtaining a contract are costs you would not have incurred if the deal hadn't closed — the sales commission itself and the payroll taxes paid on it are the classic examples. Base salaries, travel, and the costs of pursuing deals that don't close are not incremental and are expensed as incurred, even though they support selling. The test is but-for the contract, not merely related to it. Aleq matches each payout to its contract and tests that it's genuinely incremental before capitalizing, and loads the associated payroll taxes onto the same capitalized asset so they amortize together." },
  { q: "How long do you amortize capitalized sales commissions?", a: "Capitalized commissions are amortized over the period of benefit — the period the related goods or services transfer, which is often longer than the initial contract term. If you expect renewals and don't pay a commensurate commission on them, the benefit extends over the anticipated customer life, commonly three to five years for SaaS; if renewal commissions are commensurate, the initial term is the ceiling. Setting that period is your team's judgment — Aleq doesn't derive it on its own yet. Once you set it on the plan, Aleq capitalizes each commission and runs the monthly amortization against it automatically." },
  { q: "What is the one-year practical expedient under ASC 340-40?", a: "The practical expedient lets you expense contract-acquisition costs as incurred, instead of capitalizing them, whenever the amortization period would have been one year or less. It's an accounting-policy election applied consistently to similar contracts — you can't cherry-pick deal by deal. It's most useful for month-to-month plans, short-term deals, and self-serve motions where tracking micro-assets isn't worth it. Aleq applies the expedient where a plan has elected it: if the period you've set is twelve months or less on an expedient-elected plan, the commission is expensed as incurred — no asset for a deal that won't outlive the year." },
  { q: "What does commensurate mean for renewal commissions?", a: "Renewal commissions are commensurate when they're reasonably proportional to the initial commission — similar rates on similar contract values. If they are, each commission earns only its own term, so the initial commission amortizes over the initial term and each renewal commission capitalizes separately. If renewals pay materially less, or nothing, the initial commission was really buying the whole customer relationship, so it amortizes over the expected customer life. That assessment under ASC 340-40-25 is your team's call today — Aleq doesn't run the ratio test automatically. Once you've decided, Aleq capitalizes or expenses each payout against whichever treatment you've set." },
  { q: "What happens to capitalized commissions when a customer churns?", a: "When a customer terminates early, the remaining capitalized commission balance no longer has a contract benefiting it, so it's impaired and written off to expense in the period the customer leaves — the deferred asset can't keep amortizing a relationship that's gone. Aleq handles this automatically: it catches the termination from the contract status and books the write-off of the remaining balance that period, so the deferred-cost asset never overstates and no stale balance sits on the books waiting for someone to notice at quarter-end." },
  { q: "Are partner referral fees capitalized like sales commissions?", a: "Yes — the test is whether the cost is incremental to obtaining the contract, not who receives it. A referral fee or channel payout paid only because a deal closed is just as incremental as an internal rep's commission, so it's capitalized and amortized the same way; ongoing partner-program costs that exist regardless of any particular deal are not. Aleq capitalizes partner referral fees against the same contract and amortizes them over the same period of benefit as internal commissions — one deferred-cost schedule, internal and external payouts side by side." },
  { q: "What is a deferred commission roll-forward?", a: "A deferred commission roll-forward reconciles the capitalized contract-cost asset across a period: opening balance, plus new commissions capitalized, minus amortization expense, minus write-offs from churn or impairment, equals closing balance. Auditors ask for it because it proves the balance-sheet asset moves for identifiable reasons and ties to the income statement. Aleq exports the roll-forward every period, tied to each rep and contract with the source payout and provenance attached — so every addition traces to a real payout and every write-off traces to a contract event." },
  { q: "Does Aleq automate sales commission capitalization under ASC 340-40?", a: "Yes, with one deliberate exception. Automatic: Aleq matches every payout to its contract, tests that it's incremental, capitalizes it with payroll taxes loaded on, amortizes it monthly over the period of benefit, applies the one-year practical expedient on plans that elected it, writes off the remaining balance when a contract churns, and exports the audit-ready roll-forward. The exception: the period of benefit itself — whether renewal commissions are commensurate and how long the benefit really runs — is your team's judgment, set per plan. Aleq runs everything downstream of that call; it doesn't make the call for you." },
  { q: "What is the best software for capitalizing sales commissions?", a: "A commission-calculation tool that pays reps but leaves the accounting in a spreadsheet does not solve ASC 340-40. For the accounting you need contract-level cost matching, per-payout amortization schedules, practical-expedient handling, automatic churn write-offs, and a roll-forward your auditors can tie out — most commission tools stop at the payout. Aleq connects to payroll and your CRM and runs the accounting side end to end: capitalization, amortization, write-offs, and the exportable roll-forward, all posted to the ledger. You still set the period of benefit per plan; everything downstream of that runs automatically." },
];

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
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
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
