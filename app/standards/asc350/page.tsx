import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc350JudgmentDemo from "@/components/Asc350JudgmentDemo";
import { asc350Builds } from "./industries";

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
              the development build. Aleq watches the stage in your tracker and
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
          <details open>
            <summary>How does it know which stage a project is in?</summary>
            <p>
              Your team moves the project through the three ASC 350-40 stages —
              that transition is your call, not something Aleq infers on its own
              yet. Once it&apos;s set, Aleq applies the capitalization rule to
              every cost logged against the project automatically, by stage and
              by cost type, so nothing has to be re-sorted at quarter-end.
            </p>
          </details>
          <details>
            <summary>How is engineering time valued?</summary>
            <p>
              Development-stage labor and third-party build costs are priced at
              a loaded rate — salary plus benefits and employer taxes — and
              capitalized. Training, data conversion, and overhead are expensed
              regardless of stage; the cost type decides that independently of
              where the project is.
            </p>
          </details>
          <details>
            <summary>When does capitalization stop?</summary>
            <p>
              When the software is substantially complete and ready for its
              intended use. From that point Aleq stops capitalizing and begins
              amortizing over the estimated useful life — straight-line unless
              another pattern better reflects use.
            </p>
          </details>
          <details>
            <summary>How are cloud arrangements treated?</summary>
            <p>
              For a hosting arrangement that&apos;s a service, the subscription is
              expensed but implementation costs follow the internal-use rules.
              Aleq separates capitalizable configuration and integration from
              data conversion and training.
            </p>
          </details>
          <details>
            <summary>Is the capitalized-software roll-forward auditable?</summary>
            <p>
              Every period exports the roll-forward — additions by project,
              amortization, impairments, net book value — with the underlying
              tickets, hours, and rate, so it reviews from the evidence up.
            </p>
          </details>
        </div>
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
