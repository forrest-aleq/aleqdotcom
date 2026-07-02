import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc350JudgmentDemo from "@/components/Asc350JudgmentDemo";
import { asc350Builds } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "When do you capitalize software development costs under GAAP?", a: "Under ASC 350-40, internal-use software costs are capitalized only during the application-development stage. Costs in the preliminary stage — feasibility studies, vendor evaluation, architecture options — are expensed, as are post-implementation costs like training and maintenance once the software is live. Capitalization begins when the preliminary stage is complete, management has committed funding, and completion is probable; it ends when the software is ready for its intended use. In Aleq, your team sets which stage a project is in, and Aleq applies the capitalize-or-expense rule to every cost logged against it automatically — by stage and by cost type — so nothing gets re-sorted at quarter-end." },
  { q: "What software development costs can be capitalized?", a: "During the application-development stage: direct costs of coding, configuration, and testing — internal engineering labor at a loaded rate (salary plus benefits and employer taxes), third-party development fees, and software purchased for the build. Never capitalized, regardless of stage: training, data conversion, general and administrative overhead, and maintenance. A common error under ASC 350-40: the stage isn't the whole test, because a training cost logged in the middle of the development stage is still expensed. Aleq applies the cost-type test independently of the phase gate on every cost, and prices development labor at the loaded rate automatically." },
  { q: "When does software capitalization stop?", a: "Capitalization stops when the software is substantially complete and ready for its intended use — typically once substantial testing is done, whether or not it has been rolled out to every user. From that point, new work is either maintenance, which is expensed, or an enhancement that adds new capability, which becomes a fresh capitalizable project. Aleq stops capitalizing at that point and begins amortizing the asset over its estimated useful life, straight-line unless another pattern better reflects how the software is used." },
  { q: "How do you amortize capitalized software and over what useful life?", a: "Capitalized internal-use software is amortized straight-line over its estimated useful life unless another systematic basis better reflects the pattern of use. Useful lives are typically short — three to five years is common given how fast software is replaced — and amortization begins when the software is ready for its intended use, not when the project started. For cloud implementation costs, the period is the hosting-arrangement term instead. Aleq begins amortization automatically once a project is in service and runs the monthly charge per project, with net book value reconciled to the ledger every period." },
  { q: "Are SaaS implementation costs capitalized or expensed?", a: "It depends on the cost. In a cloud hosting arrangement that's a service contract, the subscription fees are expensed over the service term — but ASC 350-40 requires the implementation costs to be evaluated under the same rules as internal-use software. Configuration and integration work capitalizes; data conversion and training don't. The capitalized implementation costs are then amortized over the hosting-arrangement term. Aleq separates the capitalizable configuration and integration from the data conversion and training within the same implementation project, so an ERP rollout doesn't get expensed — or capitalized — wholesale." },
  { q: "Can website development costs be capitalized?", a: "Partly, under ASC 350-50. Application and infrastructure development — building the site's functionality — and graphics developed as part of the build are capitalized, similar to internal-use software. Planning-stage costs are expensed, and so is the operating stage: content updates, hosting-period upkeep, and routine changes after launch. The practical effect is that building a web platform creates an asset while running a marketing site doesn't. Aleq applies the ASC 350-50 cuts to costs logged against website projects, so ongoing content work stays in expense and the actual build is what lands on the balance sheet." },
  { q: "Are software upgrades and bug fixes capitalized?", a: "Upgrades that add new functionality are capitalized as a fresh project; maintenance, bug fixes, and work that keeps existing software running are expensed as incurred. The line is a judgment — a release usually mixes both — and it's where capitalized-software balances most often get challenged. Aleq drafts the split per release, proposing which work adds capability and which is upkeep, and holds it for your team's sign-off rather than posting it unilaterally. Once you've signed off, the capitalized portion starts its own amortization schedule and the maintenance portion is expensed in the period." },
  { q: "How does software capitalization work with agile development?", a: "The three-stage model was written for waterfall, but it still governs: what matters is the nature of the activity, not the sprint it happened in. A single sprint can mix capitalizable feature development with expensed bug fixes and training, so agile teams need cost-level tracking rather than project-level assumptions. FASB's ASU 2025-06 replaces the stage model with a principles-based threshold for fiscal years beginning after December 2027. Aleq works from your project tracker: your team sets the project's stage, and Aleq classifies each logged cost by stage and cost type — so agile work sorts itself continuously instead of being reconstructed at quarter-end." },
  { q: "Does Aleq automate software capitalization under ASC 350-40?", a: "The mechanics, yes — the stage call is yours. Your team decides when a project moves between the preliminary, application-development, and post-implementation stages; Aleq doesn't infer that transition on its own yet. From there it's automatic: every cost logged against the project is classified by stage and cost type, development labor is priced at a loaded rate and capitalized, training and data conversion are expensed regardless of stage, amortization starts once the software is in service, and the roll-forward exports with the underlying tickets, hours, and rates attached. For upgrades, Aleq drafts the capability-versus-maintenance split and holds it for your sign-off." },
  { q: "What is the best way to track capitalized software development costs?", a: "The standard approach — engineers fill out time allocations quarterly and finance rebuilds them into a capitalization spreadsheet — produces estimates that are difficult to support under audit. The better pattern is to derive capitalization from the systems where the work already lives: the project tracker for stage and hours, payroll for the loaded rate. Aleq does exactly that — it reads costs logged against projects, applies the stage-and-cost-type rule to each one, capitalizes development labor at a loaded rate, and produces a roll-forward that traces from the balance down to the tickets and hours behind it. Your team still sets each project's stage and signs off on the drafted determinations." },
];

export const metadata: Metadata = {
  title: "ASC 350-40 · Capitalized software — the line between expense and asset",
  description:
    "Aleq draws the capitalization boundary from your project tracker — expensing the preliminary and operating stages, capitalizing the development build, and amortizing it over its useful life. It drafts where the line falls; the call is yours.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 350-40 · Internal-use software</div>
            <h1>
              The line between
              <br />
              expense and asset.
            </h1>
            <p className="pp-hero-lead">
              Aleq applies the capitalization boundary to every cost you log
              against a project — the development-stage build becomes an
              asset, everything else is expensed, by cost type as much as by
              stage.
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
              rule applied automatically · ties to the ledger
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Project · SR-104 · search relevance v2
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>11,069 eng hrs · $58/hr loaded</small>
                    Capitalized to date
                  </span>
                  <span className="pp-num">$642,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortized to date</span>
                  <span className="pp-num">$71,200</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Net book value</span>
                  <span className="pp-num">$570,800</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortization this month</span>
                  <span className="pp-num">$17,800</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">In service · 36-month life</span>
                <span className="pp-ok">on schedule</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">development begins</div>
              <div className="pp-float-v">the meter starts</div>
            </div>
          </div>
        </div>
      </section>

{/* ── Phase-gate — the centerpiece ───────────────────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              The capitalization boundary
            </div>
            <h2 className="pp-h">Three stages. Only the middle one is an asset.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              ASC 350-40 splits a project into three stages and capitalizes only
              the development build. Aleq reads the stage on the project and
              moves the cost to the right side of the line.
            </p>
          </div>
          <div
            className="pp-phase reveal"
            style={{ maxWidth: "980px", margin: "0 auto" }}
          >
            <div className="pp-phase-col">
              <div className="pp-phase-k">Stage 1 · preliminary</div>
              <div className="pp-phase-h">Scoping &amp; evaluation</div>
              <div className="pp-phase-p">
                Feasibility, vendor selection, and architecture options — before
                the build is committed.
              </div>
              <span className="pp-phase-tag">expensed</span>
            </div>
            <div className="pp-phase-col cap">
              <div className="pp-phase-k">Stage 2 · application development</div>
              <div className="pp-phase-h">Coding, config &amp; testing</div>
              <div className="pp-phase-p">
                The build itself — engineering time, configuration, and testing
                of new capability. This is the asset.
              </div>
              <span className="pp-phase-tag">capitalized</span>
            </div>
            <div className="pp-phase-col">
              <div className="pp-phase-k">Stage 3 · post-implementation</div>
              <div className="pp-phase-h">Training &amp; upkeep</div>
              <div className="pp-phase-p">
                Data conversion, training, and ongoing maintenance once it&apos;s
                live — back to expense.
              </div>
              <span className="pp-phase-tag">expensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment demo — phase gates the boundary, cost type still counts ── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              Same project, same week
            </div>
            <h2 className="pp-h">The stage isn&apos;t the whole test.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              It&apos;s tempting to assume everything logged during the build
              capitalizes. It doesn&apos;t — the cost type matters as much as
              the stage. Three costs, same project, same sprint.
            </p>
          </div>
          <Asc350JudgmentDemo />
        </div>
      </section>

      {/* ── Build-type tabs ────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By build type"
        heading="What you're building changes the rule."
        sub="Internal platforms, cloud implementations, websites, upgrades — each draws the capitalization line in a different place. Aleq applies the right one."
        tabs={asc350Builds}
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
          <h2>Capitalize the build, not the guesswork.</h2>
          <p>
            Bring one project. Watch Aleq apply the stage-and-cost-type rule to
            every cost logged against it, capitalize the development work at a
            loaded rate, and amortize it over its useful life once it&apos;s
            live — every determination drafted for your sign-off.
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
