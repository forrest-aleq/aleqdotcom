import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import { asc815Hedges } from "./industries";

export const metadata: Metadata = {
  title: "ASC 815 · Derivatives & hedging — designated, tested, and marked",
  description:
    "Aleq documents the hedge at inception, tests effectiveness each period, marks every derivative to fair value, and routes the change to OCI or earnings. It drafts the designation and method; the call is yours.",
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
              Aleq documents the hedge at inception, tests effectiveness every
              period, and marks each derivative — routing the change to OCI or
              earnings exactly where the standard puts it.
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
                <div className="pp-wk">Tested · effectiveness</div>
                <div className="pp-wh">
                  Within the corridor
                  <span className="pp-pill-result">98% → highly effective</span>
                </div>
                <div className="pp-checks">
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">Dollar-offset ratio</span>
                    <span className="pp-checkrow-v">98% · in 80–125%</span>
                  </div>
                  <div className="pp-checkrow">
                    <span className="pp-checkrow-l">Critical terms</span>
                    <span className="pp-checkrow-v">match the hedged item</span>
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
              <h2 className="pp-h">Every instrument, marked and placed.</h2>
              <p className="pp-sub">
                Each derivative is carried at fair value, with its designation
                and the destination of its mark — OCI for cash-flow hedges,
                earnings for fair-value hedges. Aleq keeps the whole book current
                and re-tests effectiveness every period.
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
                          EUR/USD forward<small>fair value · 97%</small>
                        </td>
                        <td>€1.80M</td>
                        <td className="neg">$(14,200)</td>
                        <td>earnings</td>
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

      {/* ── Effectiveness & routing ────────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Effective, or it breaks</div>
              <h2 className="pp-h">Tested every period — and routed.</h2>
              <p className="pp-sub">
                Hedge accounting holds only while the hedge stays highly
                effective. Aleq re-tests each period, splits the effective portion
                from any ineffectiveness, and routes the mark — deferring the
                effective portion in OCI and reclassifying it to earnings when the
                hedged item finally hits.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  GBP/USD forward · routing
                </div>
                <div style={{ padding: "24px 22px 6px" }}>
                  <div className="pp-meter">
                    <div className="pp-meter-track">
                      <i style={{ width: "98%" }} />
                    </div>
                    <div className="pp-meter-labels">
                      <span>0%</span>
                      <span>98% effective · within 80–125%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
                <div className="pp-tb" style={{ paddingTop: 0 }}>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Effective portion → OCI</span>
                    <span className="pp-num">$12,140</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Ineffective portion → earnings</span>
                    <span className="pp-num">$0</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">
                      Reclassified to revenue
                      <small>prior forecast realized</small>
                    </span>
                    <span className="pp-num neg">$(3,200)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">= Net deferred in OCI</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    $8,940
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Judgment — designation ─────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">Designation is a decision. You make it.</h2>
              <p className="pp-sub">
                Hedge accounting is an election, and it must be documented at
                inception — the hedged item, the instrument, the risk, the
                effectiveness method — or it&apos;s lost for good. Aleq drafts the
                designation memo from the trade and the exposure and holds it for
                your sign-off, contemporaneous and complete.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Hedge designation · awaiting sign-off
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Cash-flow hedge · dollar-offset · documented at inception
                  </div>
                  <div className="pp-belief-meta">
                    drafted by Aleq · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      The forward hedges the FX risk in highly-probable forecasted
                      GBP sales — a cash-flow hedge under ASC 815-20. Critical
                      terms match the exposure, so a qualitative dollar-offset
                      method is appropriate. Documentation is dated to the trade
                      to keep the election contemporaneous.
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

      {/* ── Hedge-type tabs ────────────────────────────────────── */}
      <StandardIndustryTabs
        eyebrow="By hedge type"
        heading="Where the mark goes depends on the hedge."
        sub="FX forwards, rate swaps, fair-value hedges, net-investment hedges — each routes its mark to a different place. Aleq tests and books the right one."
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
              By the method documented at inception — qualitative critical-terms
              match where it fits, or a quantitative dollar-offset or regression
              otherwise. Aleq re-tests each period and shows the ratio against the
              80–125% corridor.
            </p>
          </details>
          <details>
            <summary>Where does the mark go?</summary>
            <p>
              Cash-flow hedges defer the effective portion in OCI and reclassify
              to earnings when the hedged item hits; fair-value hedges run both
              sides through earnings; net-investment hedges sit in CTA. Aleq
              routes each mark to the right place automatically.
            </p>
          </details>
          <details>
            <summary>What happens if a hedge fails the test?</summary>
            <p>
              Hedge accounting is discontinued prospectively, amounts already in
              OCI are handled per the standard, and the derivative marks to
              earnings going forward. Aleq flags the break the period it happens
              and shows the impact.
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
          <h2>Put your hedges on Aleq.</h2>
          <p>
            Connect your treasury book. Watch Aleq document each hedge at
            inception, test effectiveness every period, mark every derivative,
            and route the change to OCI or earnings — the designation drafted for
            your sign-off, the disclosure tied out.
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
