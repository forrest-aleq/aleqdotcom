import type { Metadata } from "next";
import Link from "next/link";
import StandardIndustryTabs from "@/components/StandardIndustryTabs";
import Asc815JudgmentDemo from "@/components/Asc815JudgmentDemo";
import { asc815Hedges } from "./industries";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "What is hedge accounting and why does it matter?", a: "Hedge accounting aligns the timing of a derivative's gains and losses with the item it hedges. Without it, a derivative is marked to fair value through earnings every period while the hedged exposure isn't recognized yet — so an economically sound hedge creates P&L volatility. Under ASC 815, a qualifying cash-flow hedge defers the effective portion of the mark in OCI until the hedged transaction hits earnings, letting the two offset in the same period. Aleq supports this for cash-flow hedges: it documents the designation at inception, marks the derivative each period, and routes the mark to OCI once your team confirms effectiveness." },
  { q: "What is the difference between a cash flow hedge and a fair value hedge?", a: "A cash-flow hedge covers variability in future cash flows — forecasted foreign-currency revenue, or floating-rate interest payments. Its effective portion is deferred in OCI and reclassified to earnings when the hedged transaction occurs. A fair-value hedge covers changes in the value of a recognized asset, liability, or firm commitment — like fixed-rate debt — and both the derivative and the hedged item are marked through earnings, offsetting each period. Aleq carries cash-flow hedge designations only today; fair-value hedges aren't supported yet — the system won't let you designate one — and they're on the roadmap rather than approximated in the meantime." },
  { q: "How does cash flow hedge accounting work for an FX forward?", a: "Say you expect 2.4 million pounds of GBP revenue next year and sell GBP forward to lock the rate. Designated as a cash-flow hedge of the forecasted sales, the forward is marked to fair value each period, with the effective portion recorded in OCI instead of earnings — debit derivative asset, credit OCI as the position gains. When the forecasted sales land, the amount parked in OCI reclassifies into revenue, so the P&L reflects the hedged rate. Aleq runs this routing automatically once your team confirms the period's effectiveness result — the mark to OCI, and the reclassification tracked when the hedged item is realized." },
  { q: "What documentation is required to qualify for hedge accounting?", a: "ASC 815 requires formal documentation at hedge inception — contemporaneous, not backfilled — identifying the hedged item, the hedging instrument, the risk being hedged, the risk-management objective, and the method that will be used to assess effectiveness. Miss it and hedge accounting is lost for good; you can't designate retroactively after seeing how the position moved. Aleq drafts the designation memo from the trade and the exposure, dated to inception, recording the hedged item, instrument, risk, and the OCI account the mark routes to. Without contemporaneous documentation there's no hedge accounting, and Aleq won't pretend otherwise." },
  { q: "What does highly effective mean in hedge accounting?", a: "Highly effective means the hedge is expected to offset the hedged risk within roughly 80% to 125% — the practical bright line for the dollar-offset ratio, or a regression showing a strong, near-one relationship. Effectiveness is assessed at inception and at least each reporting period, using the method documented at inception: qualitative critical-terms match where the hedge and exposure line up exactly, or a quantitative dollar-offset or regression test otherwise. Aleq doesn't run the test itself today — that stays your team's work. Enter the result each period and Aleq routes the effective portion to OCI and tracks reclassification from there." },
  { q: "How do you account for an interest rate swap on floating-rate debt?", a: "A pay-fixed, receive-floating interest-rate swap on variable-rate debt is the textbook cash-flow hedge: it converts uncertain floating interest payments into a fixed cost. Designated and documented at inception, the swap is marked to fair value each period with the effective portion deferred in OCI, then reclassified into interest expense as each hedged payment settles — so the P&L shows a fixed rate. A critical-terms match between the swap and the debt supports the highly-effective conclusion. Aleq carries rate swaps as cash-flow hedges, defers the confirmed effective portion in OCI, and reclassifies it to interest expense as the payments settle." },
  { q: "What happens if a hedge fails the effectiveness test?", a: "If a hedge stops being highly effective, hedge accounting is discontinued prospectively: the derivative marks to earnings going forward, while amounts already accumulated in OCI generally stay there until the forecasted transaction affects earnings — unless the forecast is no longer probable, which forces immediate reclassification. In Aleq, discontinuing hedge accounting is a separate, explicit step your team takes; recording a failed effectiveness result doesn't automatically dedesignate the hedge. Once your team dedesignates it, the derivative marks to earnings from that point on." },
  { q: "Do I have to use hedge accounting for FX forwards?", a: "No — hedge accounting is optional. An FX forward works economically either way; the election only changes where the accounting lands. Without designation, the forward is marked to fair value through earnings each period, so a good hedge can whipsaw your P&L before the revenue it protects ever arrives. With a documented cash-flow hedge designation, the effective portion defers in OCI and hits revenue alongside the hedged sale. The cost of the election is discipline: contemporaneous documentation and ongoing effectiveness assessment. Aleq lowers that cost — it drafts the designation at inception and handles the OCI routing once your team confirms effectiveness each period." },
  { q: "Does Aleq automate hedge accounting under ASC 815?", a: "For cash-flow hedges, most of it. Aleq drafts the designation documentation at inception from the trade and the exposure, carries each derivative at fair value, routes the effective portion to OCI, tracks reclassification when the hedged item is realized, and exports the instrument-by-instrument disclosures and OCI roll-forward. Two things stay your team's: the effectiveness test itself — dollar-offset, critical-terms match, or regression, run by you and entered each period — and the decision to dedesignate a hedge. Fair-value and net-investment hedges aren't supported yet; Aleq rejects those designations at creation rather than approximating them, and they're on the roadmap." },
  { q: "What should I look for in hedge accounting software?", a: "The core requirements are inception-dated documentation, period-end fair-value marks, correct OCI-versus-earnings routing, reclassification tracking, and disclosure-ready output — the failure points are almost always documentation that was backfilled or OCI schedules kept in spreadsheets. Ask any vendor which hedge types it actually models. Aleq covers cash-flow hedges — FX forwards and interest-rate swaps — end to end: designation drafted at inception, marks routed to OCI once your team confirms effectiveness, reclassifications tracked, and disclosures exported tied to the ledger and trade confirmations. If you need fair-value or net-investment hedge accounting, that isn't supported in Aleq yet and runs outside it today." },
];

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
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
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
