import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc815JudgmentDemo from "@/components/Asc815JudgmentDemo";
import { asc815Hedges } from "./industries";

export const metadata: Metadata = {
  title: "ASC 815 · Derivatives & hedging — designated, tested, and marked",
  description:
    "Aleq documents the cash-flow hedge at inception, marks it to fair value, and routes the change to OCI the moment your team confirms effectiveness. It drafts the designation; the effectiveness call is yours.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 815 · Derivatives &amp; hedging</div>
            <h1>
              Designated, tested,
              <br />
              marked to fair value.
            </h1>
            <p className="pp-hero-lead">
              Aleq documents the cash-flow hedge at inception and marks it to
              fair value — the moment your team confirms effectiveness, the
              change routes to OCI on its own.
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
              documented at inception · ties to the ledger
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Hedge · DRV-101 · GBP/USD forward
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>forecasted GBP revenue</small>
                    Notional hedged
                  </span>
                  <span className="pp-num">£2,400,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Designation</span>
                  <span className="pp-num">cash flow</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Fair value</span>
                  <span className="pp-num">$12,140</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Effective portion → OCI</span>
                  <span className="pp-num">$12,140</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Effectiveness 98% · highly effective</span>
                <span className="pp-ok">in OCI</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">the sale lands</div>
              <div className="pp-float-v">OCI → revenue</div>
            </div>
          </div>
        </div>
      </section>

{/* ── Worked example — designate, test, mark ─────────────── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              How it works
            </div>
            <h2 className="pp-h">Document it, test it, then mark it.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Hedge accounting has to be earned — it starts with contemporaneous
              documentation and holds only while the hedge stays effective. Below
              is the GBP/USD forward.
            </p>
          </div>

          <div className="pp-worked reveal">
            <div className="pp-worked-head">
              <svg className="pp-card-mark" viewBox="0 0 48 48">
                <use href="#aleq-mark" />
              </svg>
              Worked example · DRV-101 · GBP/USD forward
              <span className="we-tag">derived</span>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">1</div>
              <div className="pp-wbody">
                <div className="pp-wk">Designated · at inception</div>
                <div className="pp-wh">Documented the relationship</div>
                <div className="pp-kv">
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Hedged item</span>
                    <span className="pp-kv-v">forecasted GBP sales · Q2 2027</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Instrument</span>
                    <span className="pp-kv-v">£2.4M forward · sell GBP</span>
                  </div>
                  <div className="pp-kv-row">
                    <span className="pp-kv-k">Risk &amp; method</span>
                    <span className="pp-kv-v">FX rate · dollar-offset</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">2</div>
              <div className="pp-wbody">
                <div className="pp-wk">Confirmed · effectiveness</div>
                <div className="pp-wh">
                  Your team&apos;s result, entered once
                  <span className="pp-pill-result">98% → highly effective</span>
                </div>
                <div className="pp-checks">
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">Dollar-offset ratio</span>
                    <span className="pp-checkrow-v">98% · your team&apos;s test</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">Method elected at inception</span>
                    <span className="pp-checkrow-v">dollar-offset</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">Forecast still probable</span>
                    <span className="pp-checkrow-v">yes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pp-wstep">
              <div className="pp-wnum">3</div>
              <div className="pp-wbody">
                <div className="pp-wk">Marked · this period</div>
                <div className="pp-wh">Effective portion to OCI</div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">
                      Derivative asset
                      <small>fair value of the forward</small>
                    </span>
                    <span className="pp-num">$12,140</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">
                      Other comprehensive income
                      <small>effective portion · reclassified at the sale</small>
                    </span>
                    <span className="pp-num">$12,140</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Effective portion deferred · posted</span>
                    <span className="pp-ok">in OCI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Instruments book ───────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The derivative book</div>
              <h2 className="pp-h">Every cash-flow hedge, marked and placed.</h2>
              <p className="pp-sub">
                Each derivative is carried at fair value, with its designation
                and the effective portion routed to OCI. Aleq keeps the whole
                book current and applies the reclassification whenever a
                hedged item is realized. (Fair-value hedges aren&apos;t
                supported yet — see below.)
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Derivatives · marked to fair value
                </div>
                <div className="pp-tblwrap">
                  <table className="pp-tbl">
                    <thead>
                      <tr>
                        <th>Instrument</th>
                        <th>Notional</th>
                        <th>Fair value</th>
                        <th>Mark to</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          GBP/USD forward<small>cash flow · 98%</small>
                        </td>
                        <td>£2.40M</td>
                        <td>$12,140</td>
                        <td>OCI</td>
                      </tr>
                      <tr>
                        <td>
                          SOFR swap<small>cash flow · match</small>
                        </td>
                        <td>$5.00M</td>
                        <td>$18,400</td>
                        <td>OCI</td>
                      </tr>
                      <tr>
                        <td>
                          EUR/USD forward<small>cash flow · 96%</small>
                        </td>
                        <td>€1.80M</td>
                        <td className="neg">$(14,200)</td>
                        <td>OCI</td>
                      </tr>
                      <tr className="tot">
                        <td>Net fair value</td>
                        <td>$5.70M</td>
                        <td>$16,340</td>
                        <td>—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment demo — designate, confirm, route (and where it stops) ── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "32px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              Where Aleq&apos;s part starts and stops
            </div>
            <h2 className="pp-h">Aleq documents and routes. Your team tests and elects.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Three moments in the same hedge&apos;s life — and one hedge type
              Aleq won&apos;t let you set up at all yet.
            </p>
          </div>
          <Asc815JudgmentDemo />
        </div>
      </section>

      {/* ── Hedge-type tabs ────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By hedge type"
        heading="Two hedge types live today. Two are on the roadmap."
        sub="FX forwards and rate swaps route as cash-flow hedges once your team confirms effectiveness. Fair-value and net-investment hedges aren't supported yet — shown here so the gap is clear, not hidden."
        tabs={asc815Hedges}
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
            <summary>Does it require documentation at inception?</summary>
            <p>
              Yes — and it&apos;s where hedge accounting is most often lost. Aleq
              drafts the designation memo from the trade and the exposure, dated to
              inception, so the hedge qualifies. Without contemporaneous
              documentation there&apos;s no hedge accounting, and Aleq won&apos;t
              pretend otherwise.
            </p>
          </details>
          <details>
            <summary>How is effectiveness tested?</summary>
            <p>
              By the method your team documents at inception — qualitative
              critical-terms match where it fits, or a quantitative dollar-offset
              or regression otherwise. Aleq doesn&apos;t run that test itself
              today; give it the result each period and it handles the routing
              and reclassification tracking from there.
            </p>
          </details>
          <details>
            <summary>Where does the mark go?</summary>
            <p>
              Cash-flow hedges defer the effective portion in OCI and reclassify
              to earnings when the hedged item hits — that routing is automatic
              once the effectiveness result is confirmed. Fair-value and
              net-investment hedges aren&apos;t supported yet.
            </p>
          </details>
          <details>
            <summary>What happens if a hedge fails the test?</summary>
            <p>
              Discontinuing hedge accounting is a separate, explicit step your
              team takes — recording an ineffective result doesn&apos;t
              automatically dedesignate the hedge today. Once dedesignated, the
              derivative marks to earnings going forward.
            </p>
          </details>
          <details>
            <summary>Can it produce the ASC 815 disclosures?</summary>
            <p>
              Every period exports the instrument-by-instrument fair values,
              designations, effectiveness results, and the OCI roll-forward with
              expected reclassifications — tied to the ledger and the trade
              confirmations.
            </p>
          </details>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put your cash-flow hedges on Aleq.</h2>
          <p>
            Connect your treasury book. Watch Aleq document each hedge at
            inception and route the mark to OCI the moment your team confirms
            effectiveness — the designation drafted for your sign-off, the
            disclosure tied out.
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
