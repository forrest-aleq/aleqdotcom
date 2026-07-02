import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc606JudgmentDemo from "@/components/Asc606JudgmentDemo";
import { asc606Industries } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "What are the five steps of revenue recognition under ASC 606?", a: "ASC 606 recognizes revenue through a single five-step model: identify the contract with the customer, identify the distinct performance obligations, determine the transaction price including any variable consideration, allocate that price to each obligation by relative standalone selling price, and recognize revenue as each obligation is satisfied, either over time or at a point in time. The same model applies across industries and contract types. Aleq runs all five steps from the signed contract, books the resulting schedule to the general ledger, and re-runs the model when the contract changes." },
  { q: "What is a performance obligation under ASC 606?", a: "A performance obligation is a promise in a contract to transfer a distinct good or service. A promise is distinct when the customer can benefit from it on its own or with readily available resources, and when it is separately identifiable from the other promises in the contract. A software agreement often separates into a platform license, implementation services, and support, each with its own recognition pattern. Aleq reads the contract and separates each distinct promise; where the determination requires judgment, it drafts a conclusion with its reasoning and holds it for your review and sign-off." },
  { q: "How do you determine standalone selling price under ASC 606?", a: "Standalone selling price (SSP) is the price at which you would sell a good or service separately. Use the observable price where one exists; otherwise estimate it using an adjusted market assessment, expected cost plus a margin, or the residual approach where permitted. The transaction price, including any bundle discount, is then allocated across the obligations in proportion to SSP. Aleq derives the SSP for each obligation, documents the method and the basis it used, and requires your confirmation before the allocation is finalized." },
  { q: "How is variable consideration treated under ASC 606?", a: "Variable consideration, which includes discounts, rebates, usage-based fees, credits, and concessions, is estimated at contract inception using the expected value or most likely amount. The estimate is then constrained: you include only the amount that is highly likely not to reverse when the uncertainty resolves. The estimate is revisited each period and trued up as actual amounts become known. Aleq estimates and constrains variable consideration, documents what was held back and why, and adjusts the recognition schedule as usage and credits become actual." },
  { q: "How do you account for a contract modification under ASC 606?", a: "There are three treatments. If the modification adds distinct goods or services priced at their standalone selling price, it is accounted for as a separate contract (ASC 606-10-25-12). If the remaining goods or services are distinct from those already transferred, the modification is accounted for prospectively over the remaining term (ASC 606-10-25-13(a)). If they are not distinct, revenue is adjusted through a cumulative catch-up (ASC 606-10-25-13(b)). Aleq drafts the treatment for each change and rebuilds the schedule from the modification date; prior periods are not restated, and each draft is held for your sign-off." },
  { q: "When is revenue recognized over time versus at a point in time?", a: "Revenue is recognized over time if any one of three criteria is met: the customer simultaneously receives and consumes the benefit as you perform, which is typical for SaaS and support; your performance creates or enhances an asset the customer controls; or the asset has no alternative use to you and you have an enforceable right to payment for performance to date. If none is met, revenue is recognized at the point in time control transfers. Aleq assigns each performance obligation its recognition pattern, whether ratable, cost-to-cost, or point-in-time, and books revenue on that basis in the ledger." },
  { q: "What is the difference between deferred revenue and a contract asset?", a: "The distinction depends on whether payment or performance comes first. Deferred revenue, a contract liability, arises when the customer pays or payment is unconditionally due before you deliver; you owe performance. A contract asset, often an unbilled receivable, arises when you have performed but your right to payment is still conditional on something other than the passage of time. As you deliver, deferred revenue is released to revenue. Aleq maintains recognized, deferred, and remaining amounts for every contract, tied to the ledger and traceable to each agreement." },
  { q: "Does Aleq handle ASC 606 revenue recognition?", a: "Yes. Aleq reads the signed contract, identifies the performance obligations, determines the transaction price with variable consideration constrained, allocates the price by standalone selling price, and recognizes revenue as each obligation is satisfied, with the schedule booked to your general ledger. When the contract changes, it drafts the modification treatment and re-derives the schedule from that date without restating prior periods. Each period it exports the remaining performance obligation disclosure, covering recognized, deferred, and backlog amounts, traced to every contract. Judgment calls such as a significant financing component are held for your team, and entries are drafted for sign-off." },
  { q: "What is the best revenue recognition software for SaaS companies?", a: "Evaluate revenue recognition software on four criteria: whether it applies the full five-step model at the contract level rather than generating invoice-based schedules, whether standalone selling price allocation is performed with the method documented, whether contract modifications rebuild schedules without restating filed periods, and whether recognized revenue ties to the general ledger with a complete audit trail. Aleq is designed to run the five steps directly from the signed contract within the general ledger, re-derive schedules when a contract changes, and hold every judgment call and entry for your sign-off." },
  { q: "Can AI do revenue recognition?", a: "Parts of the process are mechanical and can be automated: reading contracts, separating performance obligations, allocating by standalone selling price, building and rebuilding recognition schedules, and truing up variable consideration. Judgment remains with your team: whether a financing component is significant and at what discount rate, principal-versus-agent conclusions, and whether contracts should be combined. Aleq is designed around that division. It drafts entries with supporting reasoning and codification references, stops rather than estimates when a judgment call is required, and posts nothing without your sign-off. Whether the resulting positions are acceptable is a determination for your team and your auditor." },
];

export const metadata: Metadata = {
  title: "ASC 606 · Revenue recognition — the five steps, run for you",
  description:
    "Aleq reads the contract, identifies the performance obligations, allocates the transaction price by standalone selling price, and recognizes revenue as each obligation is satisfied — re-deriving the schedule the moment the deal changes. It runs the model; the judgment calls are yours.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 606 · Revenue recognition</div>
            <h1>Five steps. Every contract.</h1>
            <p className="pp-hero-lead">
              Aleq reads the contract, splits the performance obligations,
              allocates the price by standalone selling price, and recognizes
              revenue as you deliver — re-derived the moment the deal changes.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">
                Close a month with us
              </Link>
              <a className="btn btn-lg" href="#how">
                The five steps
              </a>
            </div>
            <div className="pp-note">
              <span className="t-dot" />
              recognized from your ledger · not a spreadsheet
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Recognition · Cyberdyne · C-7015
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Transaction price</span>
                  <span className="pp-num">$540,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>3 performance obligations</small>
                    Recognized to date
                  </span>
                  <span className="pp-num">$108,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Deferred revenue</span>
                  <span className="pp-num">$432,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Recognized this month</span>
                  <span className="pp-num">$15,000</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Month 8 of 36 · on schedule</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">customer expands</div>
              <div className="pp-float-v">re-allocated, re-derived</div>
            </div>
          </div>
        </div>
      </section>

{/* ── The five steps ─────────────────────────────────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "8px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              The model
            </div>
            <h2 className="pp-h">One model, start to finish.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              ASC 606 is one five-step model. Aleq runs all five from the signed
              contract — and re-runs them whenever it changes.
            </p>
          </div>
          <div className="pp-flow five reveal">
            <div className="pp-flow-step">
              <div className="pp-flow-n">01</div>
              <div className="pp-flow-h">Identify the contract</div>
              <div className="pp-flow-p">
                Approval, rights, payment terms, commercial substance — the
                contract is read and confirmed.
              </div>
            </div>
            <div className="pp-flow-step">
              <div className="pp-flow-n">02</div>
              <div className="pp-flow-h">Find the obligations</div>
              <div className="pp-flow-p">
                Each distinct promise — license, implementation, support — is
                separated into its own obligation.
              </div>
            </div>
            <div className="pp-flow-step">
              <div className="pp-flow-n">03</div>
              <div className="pp-flow-h">Set the price</div>
              <div className="pp-flow-p">
                Fixed and variable consideration, constrained to the amount
                highly likely not to reverse.
              </div>
            </div>
            <div className="pp-flow-step">
              <div className="pp-flow-n">04</div>
              <div className="pp-flow-h">Allocate by SSP</div>
              <div className="pp-flow-p">
                The price is spread across obligations by standalone selling
                price — discounts included.
              </div>
            </div>
            <div className="pp-flow-step">
              <div className="pp-flow-n">05</div>
              <div className="pp-flow-h">Recognize</div>
              <div className="pp-flow-p">
                Over time or at a point in time, as each obligation is
                satisfied — booked to the ledger.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Worked example: SSP allocation ─────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Step 4 · allocation</div>
              <h2 className="pp-h">One price, allocated by SSP.</h2>
              <p className="pp-sub">
                The Cyberdyne deal bundles a platform license, implementation,
                and premium support at a blended $540,000 — a 10% discount on
                their standalone prices. Aleq allocates the transaction price
                across the three obligations by standalone selling price, spreads
                the discount proportionally, and times each piece on its own
                pattern.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Allocation · C-7015 · 3 obligations
                </div>
                <div className="pp-tblwrap">
                  <table className="pp-tbl">
                    <thead>
                      <tr>
                        <th>Obligation</th>
                        <th>SSP</th>
                        <th>Allocated</th>
                        <th>Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Platform license<small>36-month term</small>
                        </td>
                        <td>$480,000</td>
                        <td>$432,000</td>
                        <td>over time</td>
                      </tr>
                      <tr>
                        <td>
                          Implementation<small>cost-to-cost</small>
                        </td>
                        <td>$90,000</td>
                        <td>$81,000</td>
                        <td>over time</td>
                      </tr>
                      <tr>
                        <td>
                          Premium support<small>36-month term</small>
                        </td>
                        <td>$30,000</td>
                        <td>$27,000</td>
                        <td>over time</td>
                      </tr>
                      <tr className="tot">
                        <td>Transaction price</td>
                        <td>$600,000</td>
                        <td>$540,000</td>
                        <td>—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Discount spread by SSP</span>
                  <span className="pp-ok">allocated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment demo — the hard cases, and where it stops ──── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              The same contract, four ways it could change
            </div>
            <h2 className="pp-h">Modification accounting is the actual judgment call.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              A new line at list price, a renegotiated price, a longer term, and a
              deferred-payment structure look similar on a redline. Under ASC 606
              they&apos;re four different treatments — and one of them, Aleq
              won&apos;t decide alone. Pick a scenario.
            </p>
          </div>
          <Asc606JudgmentDemo />
        </div>
      </section>

      {/* ── Industry tabs ──────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By industry"
        heading="Revenue recognizes differently by what you sell."
        sub="Ratable, point-in-time, over-time, net-versus-gross — the recognition pattern depends on the business. Aleq applies the one that fits yours."
        tabs={asc606Industries}
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
          <h2>Run one contract through the five steps.</h2>
          <p>
            Bring a signed contract. Watch Aleq split the obligations, allocate
            the price by standalone selling price, and recognize revenue on
            schedule from your ledger — re-derived the moment the deal changes,
            every entry drafted for your sign-off.
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
