import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASC 740 · Income taxes — your provision, always current",
  description:
    "Aleq computes current and deferred income tax from your trial balance — temporary differences, the valuation allowance, and the rate reconciliation — and keeps it live. It drafts the provision; it doesn't file your return.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">ASC 740 · Income taxes</div>
            <h1>
              Your tax provision,
              always current.
            </h1>
            <p className="pp-hero-lead">Your tax provision, computed live off the real ledger and current all year — not rebuilt the week before you file.</p>
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
                Rate reconciliation · Sirius Robotics · FY2026
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>
                  draft
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Pretax book loss</span>
                  <span className="pp-num neg">$(2,385,722)</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>21%</small>Tax at statutory rate
                  </span>
                  <span className="pp-num neg">$(501,002)</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">State, net of federal</span>
                  <span className="pp-num neg">$(91,400)</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Permanent differences</span>
                  <span className="pp-num">$48,200</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">Change in valuation allowance</span>
                  <span className="pp-num">$543,000</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">
                  Provision for income tax · ETR 0.1%
                </span>
                <span
                  className="pp-num"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  $(1,202)
                </span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">ties to</div>
              <div className="pp-float-v">
                the trial balance <span className="pp-ok">signed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The provision, computed</div>
              <h2 className="pp-h">
                Book-to-tax differences, computed — not retyped.
              </h2>
              <p className="pp-sub">
                Aleq reads each temporary difference straight from your books
                and tax basis, measures it at the enacted rate, and rolls it
                into the deferred balance. For a company running losses, that
                means the NOLs, the §174 R&amp;D capitalization, and the stock
                comp — gross deferred tax assets, then the valuation allowance
                against them.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Deferred tax assets · FY2026
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">
                      Net operating loss carryforward
                    </span>
                    <span className="pp-num">$4,182,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">§174 R&amp;D capitalization</span>
                    <span className="pp-num">$1,224,000</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Stock-based compensation</span>
                    <span className="pp-num">$412,400</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct">Accrued bonus</span>
                    <span className="pp-num">$218,400</span>
                  </div>
                  <div className="pp-tb-row">
                    <span className="pp-tb-acct neg">Valuation allowance</span>
                    <span className="pp-num neg">$(5,443,000)</span>
                  </div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Net deferred tax asset</span>
                  <span
                    className="pp-num"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    $0
                  </span>
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
              <div className="pp-eyebrow">Always live</div>
              <h2 className="pp-h">Change the rate, and it re-measures.</h2>
              <p className="pp-sub">
                When an enacted rate changes — or a true-up lands from the filed
                return — Aleq remeasures the deferred balances and books the
                difference to the provision automatically. No workbook to
                rebuild, no formula to chase, and the prior periods stay exactly
                as they were.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Rate change · 21% → 24%
                </div>
                <div className="pp-je">
                  <div className="pp-je-row">
                    <span className="pp-je-side dr">DR</span>
                    <span className="pp-je-acct">Deferred tax expense</span>
                    <span className="pp-num">$87,000</span>
                  </div>
                  <div className="pp-je-row">
                    <span className="pp-je-side cr">CR</span>
                    <span className="pp-je-acct">Deferred tax liability</span>
                    <span className="pp-num">$87,000</span>
                  </div>
                  <div className="pp-je-bal">
                    <span className="pp-k">Deferred balances remeasured</span>
                    <span className="pp-ok">booked to provision</span>
                  </div>
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
              <div className="pp-eyebrow">The hard call stays yours</div>
              <h2 className="pp-h">
                The valuation-allowance judgment never runs on its own.
              </h2>
              <p className="pp-sub">
                Routine differences roll forward unattended once they&apos;re
                proven. But whether you can support a deferred tax asset is a
                judgment call — so Aleq drafts the allowance and the
                cumulative-loss reasoning behind it, then stops and hands it to
                you. High-impact positions are always a human sign-off.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48">
                    <use href="#aleq-mark" />
                  </svg>{" "}
                  Valuation allowance
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">
                    Full allowance against the deferred tax assets
                  </div>
                  <div className="pp-belief-meta">
                    drafted $5,443,000 · held for your sign-off
                  </div>
                  <div className="pp-why">
                    <b>Aleq&apos;s reasoning</b>
                    <p>
                      Three years of cumulative pretax losses are negative
                      evidence under ASC 740-10-30. Without sufficient projected
                      income, the deferred tax assets are not
                      more-likely-than-not to be realized.
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
          <h2 className="pp-h">What controllers and tax leads ask.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open>
            <summary>Does Aleq file my return?</summary>
            <p>
              No. Aleq computes and drafts the provision and the workpapers
              behind it — the rate reconciliation, the deferred rollforward, the
              valuation-allowance memo. Filing stays with your tax preparer;
              they get a clean, tied-out starting point instead of a spreadsheet
              to rebuild.
            </p>
          </details>
          <details>
            <summary>Who&apos;s accountable if a tax position is wrong?</summary>
            <p>
              You are — Aleq is the workpaper, not the signer. Every number ties
              to the trial balance with its basis attached, so you and your
              preparer can see and stand behind the support for each position.
            </p>
          </details>
          <details>
            <summary>
              How does it handle the valuation-allowance judgment?
            </summary>
            <p>
              It drafts the allowance and the cumulative-income reasoning, then
              stops for a human. The realizability call is high-impact, so it
              never runs unattended — you sign off.
            </p>
          </details>
          <details>
            <summary>Will my auditor and outside tax firm accept it?</summary>
            <p>
              The provision exports as a tied-out workpaper with full provenance
              — book-to-tax basis, enacted rates, and the journal entries — so
              it reviews like well-documented prep, not a model&apos;s guess.
            </p>
          </details>
          <details>
            <summary>
              What happens when the filed return differs from the provision?
            </summary>
            <p>
              You book the return-to-provision true-up and Aleq remeasures the
              deferred balances from there, with the change flowing to the
              current-period provision and the trail intact.
            </p>
          </details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>See your provision on your real books.</h2>
          <p>
            Connect read-only and watch Aleq compute current and deferred tax
            from your trial balance — the rate reconciliation, the deferreds,
            and the valuation-allowance memo, drafted and tied out.
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
