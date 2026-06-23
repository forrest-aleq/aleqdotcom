import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASC 350-40 · Capitalized software — built right, amortized right",
  description:
    "Aleq identifies which development costs qualify to capitalize, books them as an asset, and amortizes over the software's useful life — derived from your engineering and payroll, not a year-end estimate. It drafts the schedule; the capitalization judgment stays human.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 350-40 · Capitalized software</div>
            <h1>
              Software you build,
              capitalized right.
            </h1>
            <p className="pp-hero-lead">Capitalize the build, amortize it on schedule — every cost tied to the work behind it.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your books
              </Link>
              <a className="btn btn-lg" href="#how">
                How it works
              </a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Capitalized software · FY2026
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>
                  draft
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Capitalized this year</span>
                  <span className="pp-num">$612,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Useful life</span>
                  <span className="pp-num">3 years</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Amortized to date</span>
                  <span className="pp-num neg">$(102,000)</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Net book value</span>
                  <span className="pp-num">$510,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">This month</span>
                  <span className="pp-num neg">$(17,000)</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">On schedule</span>
                <span className="pp-ok">ties to 15500</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">derived</div>
              <div className="pp-float-v">from payroll + engineering time</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Capitalize vs. expense</div>
              <h2 className="pp-h">It knows what qualifies to capitalize.</h2>
              <p className="pp-sub">
                ASC 350-40 capitalizes cost only during the
                application-development stage — once the project is past the
                preliminary phase and not yet in service. Aleq reads each
                project against that line: development-stage cost becomes an
                asset, while research, planning, and post-launch maintenance are
                expensed as incurred. No single bucket, no manual sorting.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <span className="pp-k">Stage</span>
                  <span>
                    <b>Application development</b>
                    <span className="sub">
                      Coding, configuration, testing toward release
                    </span>
                  </span>
                  <span className="pp-tag auto">capitalized</span>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">Stage</span>
                  <span>
                    <b>Preliminary &amp; research</b>
                    <span className="sub">
                      Scoping, evaluating alternatives, design exploration
                    </span>
                  </span>
                  <span className="pp-tag asks">expensed</span>
                </div>
                <div className="pp-drill-step">
                  <span className="pp-k">Stage</span>
                  <span>
                    <b>Post-implementation</b>
                    <span className="sub">
                      Maintenance, bug fixes, minor upgrades after launch
                    </span>
                  </span>
                  <span className="pp-tag asks">expensed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The schedule, computed</div>
              <h2 className="pp-h">Amortized over the useful life.</h2>
              <p className="pp-sub">
                Once a project goes live, Aleq amortizes the capitalized balance
                straight-line over its useful life and books the entry every
                month — no workbook to maintain, no formula to chase. The
                rollforward stays current, opening to closing, and ties back to
                the asset account on the trial balance.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Amortization · Apr 2026
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Opening net book value</span>
                    <span className="pp-num">$527,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">
                      <small>straight-line · 3-yr life</small>Amortization this
                      month
                    </span>
                    <span className="pp-num neg">$(17,000)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Closing net book value</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    $510,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">When something is retired</div>
              <h2 className="pp-h">Impairment, watched.</h2>
              <p className="pp-sub">
                When a capitalized feature is retired or abandoned before the
                end of its life, its remaining balance can&apos;t keep sitting
                on the books. Aleq flags the event, drafts the write-off for the
                unamortized balance, and books it to impairment — so the asset
                reflects what&apos;s actually still in use.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Feature retired · remaining balance impaired
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">Impairment loss</span>
                    <span className="pp-num">$48,000</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">
                      Capitalized software <small>15500</small>
                    </span>
                    <span className="pp-num">$48,000</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Unamortized balance written off</span>
                    <span className="pp-ok">booked to impairment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">The capitalization judgment stays human.</h2>
              <p className="pp-sub">
                The mechanics roll forward unattended once they&apos;re set. But
                which projects and stages qualify — and how long the useful life
                really is — are judgment calls. So Aleq drafts the call with the
                basis behind it, then stops and hands it to you. High-impact
                positions are always a human sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Capitalization · Billing rebuild
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Capitalize from application-development stage · 3-year useful
                    life
                  </div>
                  <div className="pp-belief-meta">
                    drafted $612,000 · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Preliminary scoping closed in Q4; coding and testing began
                      Jan and qualify under ASC 350-40. Useful life of 3 years
                      matches the prior platform&apos;s replacement cadence.
                      Both the stage cutoff and the life estimate are judgment —
                      escalated for review.
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
            <summary>
              What development costs qualify to capitalize, and at which stage?
            </summary>
            <p>
              Only cost incurred during the application-development stage —
              coding, configuration, and testing once the project is past
              preliminary scoping and before it goes live. Research, planning,
              data conversion, and post-launch maintenance are expensed as
              incurred. Aleq maps each project&apos;s cost to its stage and
              applies that line, with the basis attached to every amount.
            </p>
          </details>
          <details>
            <summary>How is the useful life determined?</summary>
            <p>
              Aleq drafts a useful life from how long comparable software has
              stayed in service — replacement cadence, roadmap, and the
              asset&apos;s expected economic life — and amortizes straight-line
              over it. The estimate is a judgment call, so it&apos;s surfaced
              for your sign-off rather than assumed, and you can override it.
            </p>
          </details>
          <details>
            <summary>How is impairment handled?</summary>
            <p>
              When a capitalized feature is retired or abandoned before the end
              of its life, Aleq flags it and drafts the write-off of the
              remaining unamortized balance to impairment loss. You review the
              event and sign off; the asset then reflects only what&apos;s still
              in use.
            </p>
          </details>
          <details>
            <summary>
              How does it derive the amounts from payroll and engineering time?
            </summary>
            <p>
              Aleq ties capitalized cost to the underlying source — payroll for
              the engineers on qualifying work and the time attributed to
              development-stage activity — rather than a year-end estimate. Each
              capitalized amount traces back to who worked on what and when, so
              the schedule is built from the books, not reconstructed.
            </p>
          </details>
          <details>
            <summary>Is the schedule auditable?</summary>
            <p>
              The capitalized-software schedule exports as a tied-out workpaper
              with full provenance — the stage determination, the cost basis,
              the useful life, and the monthly amortization and impairment
              entries — and ties to the asset account on the trial balance. It
              reviews like well-documented prep, not a model&apos;s guess.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your software capitalized correctly.</h2>
          <p>
            Connect read-only and watch Aleq sort development cost by stage,
            capitalize what qualifies, and amortize it over the useful life —
            the schedule, the entries, and the basis, drafted and tied out.
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
