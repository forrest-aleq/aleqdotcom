import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-entity & consolidation — many books, one close",
  description:
    "Aleq is the consolidation system of record — translating each entity to your reporting currency, eliminating intercompany, and tying the group together, so the consolidated close lands with the locals. An incumbent ERP can still hold some entities during the 48-hour on-ramp; you cut them over on your timeline.",
};

export default function Page() {
  return (
    <>
      {/* 1 · HERO */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Multi-entity &amp; consolidation</div>
            <h1>Many books. One close.</h1>
            <p className="pp-hero-lead">Every entity stays on its own books. Aleq rolls them into one consolidated close — without the month-end spreadsheet.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your group</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Consolidation · Sirius Group · May
                <span className="pp-live"><i /> in balance</span>
              </div>
              <div className="pp-checks">
                <div className="pp-checkrow"><span className="pp-learned-rule">Sirius Robotics (US)<small>USD · reporting currency</small></span><span className="pp-checkrow-v">consolidated</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Sirius Robotics UK Ltd<small>GBP · translated @ 1.2614</small></span><span className="pp-num">consolidated</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Sirius Robotik GmbH<small>EUR · translated @ 1.0922</small></span><span className="pp-num">consolidated</span></div>
                <div className="pp-tb-row"><span className="pp-tb-acct">Intercompany<small>US ↔ UK ↔ GmbH</small></span><span className="pp-num">eliminated</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">6 entities · 3 currencies · IC eliminated</span>
                <span className="pp-ok">Group consolidated · in balance</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">consolidated close</div>
              <div className="pp-float-v">ties to the locals <span className="pp-ok">in balance</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · THE MANUAL REALITY */}
      <section className="pp-section alt" id="manual">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The manual way</div>
              <h2 className="pp-h">Today, consolidation is a spreadsheet someone rebuilds every month.</h2>
              <p className="pp-sub">Pull a trial balance out of each entity&apos;s ledger. Re-key the foreign books into pounds and euros and dollars by hand. Hunt the intercompany mismatch where the US recorded $840,000 and the UK booked £661,000 at last month&apos;s rate. Build the eliminations in a tab, plug the translation difference until the group ties, and pray the formulas survived. Six entities, three currencies, one analyst, most of a week — and the consolidated number is only as good as a cell reference. This is the work Aleq does instead.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">The manual consolidation · what it replaces</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>step 1</small>Pull a TB from each entity ledger</span><span className="pp-num">6 exports</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>step 2</small>Re-key GBP &amp; EUR into Excel</span><span className="pp-num">by hand</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>step 3</small>Hunt the intercompany mismatch</span><span className="pp-num neg">$11,840</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>step 4</small>Build eliminations &amp; plug the CTA</span><span className="pp-num">manually</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">one analyst · 6 entities · 3 currencies</span><span className="pp-num neg">~4 days</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · TRANSLATION */}
      <section className="pp-section" id="how">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Translation</div>
              <h2 className="pp-h">Each entity, in its own currency.</h2>
              <p className="pp-sub">Your UK and German books stay in pounds and euros, the way the locals keep them. Aleq translates each one into your reporting currency at the rate it should use — balance sheet at the closing rate, income at the period average — and shows you the rate behind every line. Nothing is converted on a number you can&apos;t see.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Translated to USD · May
                  <span className="pp-live" style={{ color: "var(--fg-muted)" }}>closing rates</span>
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct">Sirius Robotics UK Ltd<small>GBP balances → USD @ 1.2614</small></span><span className="pp-num">£3,180,000 → $4,011,252</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">Sirius Robotik GmbH<small>EUR balances → USD @ 1.0922</small></span><span className="pp-num">€2,450,000 → $2,675,890</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">Sirius Robotics (US)<small>USD · reporting currency</small></span><span className="pp-num">$17,540,000</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Translation difference → cumulative translation adjustment (equity)</span>
                  <span className="pp-ok">rate shown on every line</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · ELIMINATIONS */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Eliminations</div>
              <h2 className="pp-h">Intercompany, eliminated.</h2>
              <p className="pp-sub">When the US bills the UK for shared services, that&apos;s a receivable on one set of books and a payable on the other — real to each entity, but not to the group. Aleq matches the two sides, nets them to zero in consolidation, and leaves the standalone books untouched. You see exactly what came out and why.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Intercompany eliminations · May</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct">IC receivable — US owes from UK<small>shared services · Sirius Robotics (US)</small></span><span className="pp-num pos">+$840,000</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">IC payable — UK owes to US<small>shared services · Sirius Robotics UK Ltd</small></span><span className="pp-num">−$840,000</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">Elimination entry<small>removed in consolidation only</small></span><span className="pp-num">$0.00</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Standalone books unchanged · 2 sides matched</span>
                  <span className="pp-ok">netted to $0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · DEEP DIVE — FX, IC MATCHING, REVALUATION */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Under the hood</div>
              <h2 className="pp-h">The mechanics, on real rates.</h2>
              <p className="pp-sub">Three things make a group close hard, and Aleq does all three on numbers you can see. Balance-sheet accounts translate at the May closing rate, the P&amp;L at the period average, and the gap between them lands in CTA — not earnings. Every intercompany balance is matched two-sided and netted to zero in consolidation. And dollar-denominated balances sitting on a foreign book get revalued at period end, with the FX gain or loss posted where it belongs.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Sirius Robotics UK Ltd · GBP → USD · May
                </div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct">Balance sheet → closing rate<small>GBP→USD @ 1.2614</small></span><span className="pp-num">£3,180,000 → $4,011,252</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">Income statement → average rate<small>GBP→USD @ 1.2487</small></span><span className="pp-num">£1,040,000 → $1,298,648</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">IC payable to US · matched both sides<small>$840,000 ↔ £661,000 @ origin rate</small></span><span className="pp-num pos">netted $0.00</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">USD intercompany loan · revalued<small>monetary balance at period-end rate</small></span><span className="pp-num neg">FX loss ($11,840)</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">closing vs. average → translation difference</span>
                  <span className="pp-ok">CTA → AOCI · per ASC 830</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · TRANSLATION ENTRY / CTA → AOCI */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">No black boxes</div>
              <h2 className="pp-h">Translated at the right rate, every time.</h2>
              <p className="pp-sub">Every translation posts as a real, balanced journal entry — the source balance, the rate, and where the difference lands. When rates move, the difference goes to cumulative translation adjustment in equity, not into earnings by accident. You can open any entry and trace the number all the way back.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Translation entry · GmbH → USD
                  <span className="pp-live" style={{ color: "var(--fg-muted)" }}>@ 1.0922</span>
                </div>
                <div className="pp-je">
                  <div className="pp-je-row"><span className="pp-je-side dr">DR</span><span className="pp-je-acct">Translated assets — GmbH<small>€2,450,000 at the closing rate</small></span><span className="pp-num">$2,675,890</span></div>
                  <div className="pp-je-row"><span className="pp-je-side cr">CR</span><span className="pp-je-acct">Translated liabilities &amp; equity — GmbH<small>at the matching rates</small></span><span className="pp-num">$2,612,140</span></div>
                  <div className="pp-je-row"><span className="pp-je-side cr">CR</span><span className="pp-je-acct">Cumulative translation adjustment<small>CTA → AOCI · equity, not earnings · ASC 830</small></span><span className="pp-num">$63,750</span></div>
                  <div className="pp-je-bal"><span className="pp-k">Balanced · traces to the source balance and rate</span><span className="pp-ok">in balance</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · POWERED BY TAMi */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Powered by TAMi</div>
              <h2 className="pp-h">Every relationship is a belief it earns.</h2>
              <p className="pp-sub">Consolidation isn&apos;t one rule — it&apos;s a relationship between each pair of entities and each entity&apos;s mappings. TAMi, the mind behind Aleq, learns them one at a time: how the US bills the UK, how the GmbH&apos;s chart maps to your consolidated one, which rate source feeds each currency. Every relationship carries its own belief, weighted by how many closes it has matched cleanly. A relationship it has run forty times runs alone; a freshly acquired entity drafts and asks first. You can open any belief, see how sure it is, and switch it off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What TAMi has learned · per relationship</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">US ↔ UK intercompany → eliminate<small>matched 40× · runs alone</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">GmbH chart → consolidated chart<small>mapped 22× · never corrected</small></span><span className="pp-learned-bar"><i style={{ width: "99%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">New acquisition entity → consolidate<small>onboarded this period</small></span><span className="pp-learned-bar mid"><i style={{ width: "24%" }} /></span><span className="pp-tag asks">Drafts, asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · LEARNED GROUP STRUCTURE */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It gets better the longer it runs</div>
              <h2 className="pp-h">It learns your group structure.</h2>
              <p className="pp-sub">The eliminations that run the same way every month, Aleq runs on its own. But a new intercompany relationship — a German loan to the UK that&apos;s never appeared before — it drafts and holds for your yes. You can see every relationship it&apos;s learned, whether it runs alone yet, and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq has learned · group</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">US ↔ UK shared services → eliminate<small>run 24× · always matched</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">GmbH GBP/EUR balances → translate<small>run 18×</small></span><span className="pp-learned-bar"><i style={{ width: "99%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">New: GmbH loan to UK Ltd<small>first time seen this period</small></span><span className="pp-learned-bar mid"><i style={{ width: "30%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · STATS */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-stats reveal">
            <div className="pp-stat"><div className="pp-stat-v">6</div><div className="pp-stat-l">Entities · 3 currencies, one close</div></div>
            <div className="pp-stat"><div className="pp-stat-v pos">$0.00</div><div className="pp-stat-l">Intercompany left after elimination</div></div>
            <div className="pp-stat"><div className="pp-stat-v">100<span className="u">%</span></div><div className="pp-stat-l">Translations traced to rate &amp; source</div></div>
            <div className="pp-stat"><div className="pp-stat-v">48<span className="u">hrs</span></div><div className="pp-stat-l">On-ramp from incumbent ERP to live</div></div>
          </div>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What controllers ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Can Aleq consolidate while we still run another ERP?</summary><p>Yes — that&apos;s the on-ramp. Aleq runs the group consolidation as the system of record while an incumbent ERP still holds some entities during the transition; it doesn&apos;t have to own every entity on day one. You bring entities into Aleq&apos;s consolidation as you go, and cut the rest over when you&apos;re ready. No all-or-nothing switch.</p></details>
          <details><summary>How do you handle intercompany eliminations?</summary><p>Aleq matches the two sides of every intercompany balance — the receivable on one entity and the payable on the other — and removes them in consolidation only, so the standalone books stay exactly as the local team keeps them. Each elimination shows both sides and nets to zero. A relationship it has seen many times runs on its own; a new one drafts and waits for your approval.</p></details>
          <details><summary>What FX rates do you use, and how is CTA handled?</summary><p>Balance-sheet accounts translate at the period closing rate and income-statement accounts at the period average, with each rate shown on the line it applied to. The resulting translation difference posts to the cumulative translation adjustment within accumulated other comprehensive income — equity, not earnings — per ASC 830, and you can open the entry to see the source balance, the rate, and where it landed. Dollar-denominated monetary balances on a foreign book are revalued at period end, with the FX gain or loss recognized separately. You can review or adjust the rates before anything is locked.</p></details>
          <details><summary>Is the consolidation auditable across entities?</summary><p>Yes. Every translation and elimination posts as a balanced journal entry that carries its own support — the source balance, the rate or the matched intercompany line, the reason, and a signature — so it reviews like a well-documented manual entry. The full trail exports per entity and for the group, and you can see who or what touched every number, all the way back to the local books.</p></details>
          <details><summary>What about a new entity or an acquisition?</summary><p>You add it to the group and map its accounts to your consolidated chart; Aleq starts translating and eliminating for it from there. While it&apos;s new, Aleq drafts the entries and holds them for your approval rather than running on its own — it earns autonomy on that entity the same way it does everywhere else, once it has matched enough closes. Aleq drafts and prepares the consolidated close; it doesn&apos;t file your returns or replace your review.</p></details>
        </div>
      </section>

      {/* 11 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Consolidate your group with Aleq.</h2>
          <p>Bring in the entities Aleq runs and watch a real month consolidate — each one translated at the rate you can see, intercompany eliminated, the group tied out and in balance.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
