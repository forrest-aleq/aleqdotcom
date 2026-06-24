import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import { asc606Industries } from "./industries";

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
            <h1>
              The five steps,
              <br />
              run on every contract.
            </h1>
            <p className="pp-hero-lead">
              Aleq reads the contract, splits the performance obligations,
              allocates the price by standalone selling price, and recognizes
              revenue as you deliver — re-derived the moment the deal changes.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your books
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

      {/* ── Re-derive on change ────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">When the deal changes</div>
              <h2 className="pp-h">An expansion, re-derived in place.</h2>
              <p className="pp-sub">
                A mid-term upsell, a renewal, a price change — a contract
                modification under ASC 606 is its own judgment: a separate
                contract, or a reallocation across the remaining obligations.
                Aleq drafts the treatment, re-allocates the price, and rebuilds
                the schedule forward — every period you already closed stays put.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Modification · +$240,000 expansion
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Contract asset
                      <small>remaining price re-allocated prospectively</small>
                    </span>
                    <span className="pp-num">$240,000</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Deferred revenue</span>
                    <span className="pp-num">$240,000</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">
                      Prospective · closed periods untouched
                    </span>
                    <span className="pp-ok">re-derived</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment ───────────────────────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">The estimates are yours to make.</h2>
              <p className="pp-sub">
                Whether two promises are one obligation or several, what a
                standalone selling price is when you never sell it alone, how far
                to constrain variable consideration — these are estimates, not
                arithmetic. Aleq drafts each with its basis against the
                codification and holds it for your sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Standalone selling price · awaiting sign-off
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Implementation SSP · $90,000 · expected-cost-plus-margin
                  </div>
                  <div className="pp-belief-meta">
                    drafted by Aleq · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Implementation is never sold separately, so no observable
                      price exists. Estimated under ASC 606-10-32-34 at expected
                      cost plus the margin earned on comparable engagements —
                      $90,000, consistent with recent deals.
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
          <details open>
            <summary>How does it identify performance obligations?</summary>
            <p>
              Aleq reads the contract and separates each promise that is capable
              of being distinct and distinct in the context of the contract —
              license, implementation, support. Where it&apos;s a judgment call,
              it drafts the conclusion with its reasoning and holds it for your
              sign-off.
            </p>
          </details>
          <details>
            <summary>Where does the standalone selling price come from?</summary>
            <p>
              Observable price where you sell the item separately; otherwise an
              estimate — adjusted market, expected cost plus margin, or residual
              where allowed. Aleq shows the method and the basis, and you confirm
              it before the allocation locks.
            </p>
          </details>
          <details>
            <summary>Does it handle variable consideration?</summary>
            <p>
              Yes. Discounts, rebates, usage, and concessions are estimated and
              constrained to the amount highly likely not to reverse, then trued
              up as actuals land. The constraint is shown so you can see what was
              held back and why.
            </p>
          </details>
          <details>
            <summary>How are contract modifications treated?</summary>
            <p>
              Aleq drafts whether a change is a separate contract or a
              modification of the existing one, re-allocates the remaining
              transaction price prospectively where required, and rebuilds the
              schedule from that date. Prior periods stay exactly as filed.
            </p>
          </details>
          <details>
            <summary>Can it produce the RPO disclosure?</summary>
            <p>
              Every period exports the remaining performance obligation
              disclosure — recognized, deferred, and backlog — tied to the
              ledger and traced to each contract, with the recognition schedule
              and provenance attached.
            </p>
          </details>
        </div>
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
