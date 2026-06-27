import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial reporting — board-ready the day you close",
  description:
    "Aleq assembles your income statement, balance sheet, and cash flow off the live ledger, writes the flux commentary, and drills every number to the entry — so the board pack is ready the day you close, not a week of slides later.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Financial reporting</div>
            <h1>Board-ready the day you close.</h1>
            <p className="pp-hero-lead">The statements assemble themselves off your live ledger — with the variance written and every number drillable to the entry behind it.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Income statement · Sirius Robotics · May 2026
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>live</span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row"><span className="pp-tb-acct">Revenue</span><span className="pp-num">$1,284,900</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Cost of revenue</span><span className="pp-num neg">$(372,100)</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct"><small>71%</small>Gross profit</span><span className="pp-num">$912,800</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Operating expenses</span><span className="pp-num neg">$(1,140,300)</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Operating loss · tied to the trial balance</span>
                <span className="pp-num" style={{ fontSize: "16px", fontWeight: 600 }}>$(227,500)</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">right now</div>
              <div className="pp-float-v">Board pack assembled <span className="pp-ok">ready to send</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Off the ledger, not off a spreadsheet</div>
              <h2 className="pp-h">Three statements, built from the books.</h2>
              <p className="pp-sub">The income statement, balance sheet, and cash flow assemble straight off your live trial balance — no exporting, no pivot tables, no a-version-and-a-final. When the ledger moves, the statements move with it, and every figure still ties out to the penny.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Statements · May 2026</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">Income statement<small>revenue through net loss</small></span><span className="pp-conf">tied out</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Balance sheet<small>assets = liabilities + equity</small></span><span className="pp-conf">balanced</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Cash flow<small>indirect method, off the TB</small></span><span className="pp-conf">tied out</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">3 statements · 1 source of truth</span>
                  <span className="pp-ok">Every line drillable</span>
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
              <div className="pp-eyebrow">Click any number</div>
              <h2 className="pp-h">Every figure drills to the entry.</h2>
              <p className="pp-sub">A board member asks why opex jumped. You don&apos;t go spelunking — every number on the report opens to the journal entries, the source documents, and the policy behind it. The answer is one click deep, with the evidence already attached.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Operating expenses · drill-down</div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">Opex $1,140,300 — up $214,000 vs April</div>
                  <div className="pp-belief-meta">opens to 38 entries across 6 accounts</div>
                  <div className="pp-why"><b>What moved</b><p>$180k of the increase is annual D&amp;O insurance booked in May and amortized over 12 months; the rest is two new engineering hires. Each piece links to the bill, the policy, and the journal entry.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>Open the entries</span>
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
              <div className="pp-eyebrow">Written, not just charted</div>
              <h2 className="pp-h">The flux commentary, drafted.</h2>
              <p className="pp-sub">Aleq writes the month-over-month variance analysis the way your controller would — what changed, by how much, and why — in plain language with the drivers cited. You review and adjust the wording; you don&apos;t assemble it from scratch the night before the board meeting.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Flux · May vs April 2026</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">Revenue +9.4%<small>two enterprise go-lives</small></span><span className="pp-conf">+$110k</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Gross margin +1.2pts<small>infra renegotiation</small></span><span className="pp-conf">71%</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Opex +23%<small>D&amp;O premium · 2 hires</small></span><span className="pp-conf warn">+$214k</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Commentary drafted · cited to the ledger</span>
                  <span className="pp-ok">ready to review</span>
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
              <div className="pp-eyebrow">It earns the routine</div>
              <h2 className="pp-h">It learns your board package.</h2>
              <p className="pp-sub">The reports you send every month, in the same shape, Aleq assembles on its own once the format is proven — the deck is built and waiting the morning after close. A new schedule or a one-off investor cut is a judgment call, so it drafts and stops for your sign-off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq runs, by report</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Monthly board pack<small>assembled 11× · same format</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Department P&amp;L roll-up<small>assembled 9×</small></span><span className="pp-learned-bar"><i style={{ width: "98%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Investor data room cut<small>new format</small></span><span className="pp-learned-bar mid"><i style={{ width: "30%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What finance leads ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Where do the numbers come from?</summary><p>Straight off your live trial balance — the same books Aleq reconciles and closes. The statements are a view of the ledger, not a separate model that drifts, so they always tie out.</p></details>
          <details><summary>Can I drill from a report into the detail?</summary><p>Yes — every figure opens to the journal entries, documents, and policy behind it. When someone asks why a line moved, the answer&apos;s one click deep, not a half-day investigation.</p></details>
          <details><summary>Does it write the variance commentary?</summary><p>It drafts it — the month-over-month flux the way your controller would, drivers cited to the ledger. You edit the wording instead of starting from a blank page.</p></details>
          <details><summary>Will it match our board deck?</summary><p>It learns your format. After a couple of cycles it builds the pack itself and has it waiting post-close; a new cut is drafted for your sign-off first.</p></details>
          <details><summary>How does this connect to the close?</summary><p>The reports are the close&apos;s output. As the month seals, the statements and the board pack assemble in step — so reporting isn&apos;t a separate week of work after the books are done. See the <Link href="/work/close" style={{ color: "var(--primary)" }}>continuous close</Link>.</p></details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Send the board pack the day you close.</h2>
          <p>Connect read-only and watch Aleq assemble your statements, write the flux, and tie every number to the entry behind it — the report ready the morning after close.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
