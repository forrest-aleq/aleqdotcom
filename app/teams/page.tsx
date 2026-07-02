import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teams — Aleq joins your finance team.",
  description:
    "Aleq fills every seat on the finance team — controller, AR/collections, AP, close & consolidation, tax, and FP&A support — and works cleanly alongside the staff you keep. One controller you can audit, hired by the hour worked.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">teams</span>
          <h1 className="h1">Aleq joins your finance team.</h1>
          <p className="lead">One controller you can audit — it fills the seats you can&apos;t keep staffed — and works cleanly alongside the ones you can. Hired by the hour worked — and you see every step it takes.</p>
        </div>
      </section>

      <section className="work-sec">
        <div className="container">
          <div className="teams-grid">
            <article className="tm">
              <div className="tm-role">controller</div>
              <div className="tm-h">Owns the ledger and the close.</div>
              <p className="tm-s">The seat Aleq was built for. The books are current, always — not at month-end, continuously.</p>
              <ul className="tm-list"><li>continuous close</li><li>reconciliations · $0 variance</li><li>journal integrity</li><li>flux review</li></ul>
            </article>
            <article className="tm">
              <div className="tm-role">ar · collections</div>
              <div className="tm-h">Gets you paid.</div>
              <p className="tm-s">Calls and emails past-due accounts in your voice, captures the promise, applies the cash.</p>
              <ul className="tm-list"><li>voice + email dunning</li><li>promise capture</li><li>cash application</li><li>aging by counterparty</li></ul>
            </article>
            <article className="tm">
              <div className="tm-role">accounts payable</div>
              <div className="tm-h">Pays the right bills, on time.</div>
              <p className="tm-s">Nothing moves without a clean three-way match and the right approval at the gate.</p>
              <ul className="tm-list"><li>3-way match</li><li>approval routing</li><li>payment runs</li><li>vendor onboarding</li></ul>
            </article>
            <article className="tm">
              <div className="tm-role">close · consolidation</div>
              <div className="tm-h">Closes the month across entities.</div>
              <p className="tm-s">Six entities, five currencies, one cadence — eliminations and all.</p>
              <ul className="tm-list"><li>subledger tie-outs</li><li>FX revaluation</li><li>intercompany eliminations</li><li>accruals</li></ul>
            </article>
            <article className="tm">
              <div className="tm-role">tax · compliance</div>
              <div className="tm-h">Keeps you filing-ready.</div>
              <p className="tm-s">Jurisdiction logic and evidence assembled as it happens, not scrambled at deadline.</p>
              <ul className="tm-list"><li>sales &amp; use tax</li><li>1099 / 1099-K</li><li>jurisdictional rules</li><li>audit evidence bundles</li></ul>
            </article>
            <article className="tm">
              <div className="tm-role">fp&amp;a support</div>
              <div className="tm-h">Feeds the forecast.</div>
              <p className="tm-s">Real actuals the moment cash moves — your analysts model on live numbers, not last month&apos;s.</p>
              <ul className="tm-list"><li>variance drivers</li><li>board-ready reporting</li><li>live actuals</li><li>investor packets</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Hire it for one seat. Keep it for the team.</h2>
          <p className="lead">Start Aleq on the close or on collections. Watch every step it takes. Add seats as the trust compounds.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See the platform</Link>
          </div>
        </div>
      </section>
    </>
  );
}
