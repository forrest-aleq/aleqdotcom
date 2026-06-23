import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASC 815 · Derivatives & hedging — marked and measured",
  description:
    "Aleq fair-values each derivative every period, tests hedge effectiveness, and routes the change to OCI or earnings per your hedge designation — with the documentation an auditor expects.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 815 · Derivatives &amp; hedging</div>
            <h1>
              Hedges, marked
              and measured.
            </h1>
            <p className="pp-hero-lead">Hedge accounting without the spreadsheet — Aleq values each instrument and books the entries on schedule.</p>
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
                Hedge · GBP/USD forward · H-001
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>
                  marked
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Notional</span>
                  <span className="pp-num">£1,200,000</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>contracted</small>Forward rate
                  </span>
                  <span className="pp-num">1.2614</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Fair value this period</span>
                  <span className="pp-num">$34,200</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Effective portion → OCI</span>
                  <span className="pp-num">$31,800</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Ineffective → earnings</span>
                  <span className="pp-num">$2,400</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Cash-flow hedge · documented</span>
                <span className="pp-ok">effective</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">designation</div>
              <div className="pp-float-v">
                cash-flow hedge <span className="pp-ok">on file</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Marked every period</div>
              <h2 className="pp-h">Every derivative, fair-valued.</h2>
              <p className="pp-sub">
                Aleq marks each position to market every period from the current
                rate curve — the forward, the option, the swap — and books the
                change. No month-end spreadsheet pull, no stale valuation
                sitting on the balance sheet.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Fair value · H-001
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Opening fair value</span>
                    <span className="pp-num">$18,400</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Change this period</span>
                    <span className="pp-num">$15,800</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Closing fair value</span>
                    <span className="pp-num">$34,200</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">marked to the current rate</span>
                  <span className="pp-ok">ties to the ledger</span>
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
              <div className="pp-eyebrow">Tested, not assumed</div>
              <h2 className="pp-h">Effectiveness, tested every period.</h2>
              <p className="pp-sub">
                Aleq runs the effectiveness test against the hedged item, splits
                the effective and ineffective portions, and keeps the result
                with the hedge. When a hedge stops being effective, it flags it
                — it doesn&apos;t let an ineffective hedge quietly ride in OCI.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Effectiveness · this period
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Effective portion</span>
                    <span className="pp-num pos">$31,800</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Ineffective portion</span>
                    <span className="pp-num">$2,400</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">test result</span>
                  <span className="pp-ok">highly effective</span>
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
              <div className="pp-eyebrow">Routed by designation</div>
              <h2 className="pp-h">OCI or earnings, by your designation.</h2>
              <p className="pp-sub">
                The effective portion of a cash-flow hedge goes to OCI and
                reclasses to earnings when the forecasted transaction hits; the
                ineffective portion goes straight to earnings. Aleq books both
                sides correctly and reclasses on settlement — automatically,
                with the trail.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Period entry
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">Derivative asset</span>
                    <span className="pp-num">$34,200</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">OCI — effective portion</span>
                    <span className="pp-num">$31,800</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Earnings — ineffective</span>
                    <span className="pp-num">$2,400</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Balanced</span>
                    <span className="pp-ok">$0.00</span>
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
              <h2 className="pp-h">The hedge designation stays human.</h2>
              <p className="pp-sub">
                Hedge accounting only applies if you designate and document the
                hedge at inception — contemporaneously. Aleq drafts the
                designation and the documentation the moment a derivative is
                booked, then holds it for your sign-off. It won&apos;t apply
                hedge accounting to a position you never designated.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Hedge designation
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Designate GBP/USD forward as a cash-flow hedge
                  </div>
                  <div className="pp-belief-meta">
                    drafted at inception · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      The forward hedges a forecasted GBP vendor payment in
                      April 2027. Designation and documentation are prepared at
                      inception so hedge accounting can apply — it must be
                      contemporaneous, so it waits for you.
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

      <section className="pp-section">
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
            <summary>How is the derivative fair-valued?</summary>
            <p>
              Aleq marks each position to market every period from the current
              rate curve, books the change, and ties it to the ledger — so the
              balance-sheet value is never stale.
            </p>
          </details>
          <details>
            <summary>How is hedge effectiveness tested?</summary>
            <p>
              It runs the effectiveness test against the hedged item each
              period, splits the effective and ineffective portions, and flags
              any hedge that stops being highly effective rather than letting it
              ride.
            </p>
          </details>
          <details>
            <summary>How is hedge documentation maintained?</summary>
            <p>
              Designation and documentation are drafted at inception — they have
              to be contemporaneous — and held for your sign-off, so the
              paperwork an auditor needs exists from day one.
            </p>
          </details>
          <details>
            <summary>How is the OCI-versus-earnings split handled?</summary>
            <p>
              The effective portion of a cash-flow hedge posts to OCI and
              reclasses to earnings when the forecasted transaction occurs; the
              ineffective portion goes to earnings. Aleq books both and
              reclasses on settlement.
            </p>
          </details>
          <details>
            <summary>Is it auditable?</summary>
            <p>
              Every mark, test, and entry carries its inputs and a signature,
              and exports as a workpaper — so it reviews like well-documented
              hedge accounting, not a black box.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your hedges marked and measured.</h2>
          <p>
            Connect read-only and watch Aleq fair-value your derivatives, test
            effectiveness, and route each change to OCI or earnings — documented
            and tied out.
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
