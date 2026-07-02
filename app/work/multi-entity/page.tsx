import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "Does Aleq do multi-entity consolidation?", a: "Yes. Aleq is an AI accounting platform that acts as the consolidation system of record for multi-entity groups. Each entity keeps its own books in its own currency; Aleq translates them to your reporting currency under ASC 830 — closing rate for the balance sheet, average for the P&L, the difference to CTA in equity — matches and eliminates intercompany balances two-sided, revalues monetary balances at period end, and posts every step as a balanced, traceable journal entry. It runs alongside an incumbent ERP like NetSuite or QuickBooks while you cut entities over on your timeline. It is live in 48 hours." },
  { q: "What is intercompany elimination?", a: "Intercompany elimination is removing transactions between entities in the same corporate group so consolidated financial statements show only third-party activity. When a US parent bills its UK subsidiary for shared services, that's a receivable on one set of books and a payable on the other — real to each entity, but not to the group, so both sides come out in consolidation. Aleq matches the two sides of every intercompany balance, nets them to zero in the consolidation only, and leaves the standalone books exactly as each local team keeps them. Every elimination is a visible entry showing what came out and why." },
  { q: "What is a cumulative translation adjustment (CTA)?", a: "CTA is the equity account that absorbs the currency differences created when you translate a foreign subsidiary's books into your reporting currency. Because the balance sheet translates at the closing rate and the income statement at the period average, the translated statements don't tie on their own — the gap goes to CTA within accumulated other comprehensive income, per ASC 830, so rate movements don't distort earnings. In Aleq, CTA is never a plug: every translation posts as a balanced journal entry showing the source balance, the rate used, and the CTA line, traceable back to the local books." },
  { q: "What exchange rate do you use to consolidate a foreign subsidiary?", a: "Under ASC 830, balance-sheet accounts translate at the closing rate on the reporting date and income-statement accounts at the period-average rate, with the resulting difference recorded to cumulative translation adjustment in equity — not earnings. Separately, monetary balances denominated in another currency, like a USD intercompany loan sitting on a GBP book, are revalued at the period-end rate with the FX gain or loss posted where it belongs. Aleq applies all of this automatically and shows the rate behind every translated line, so nothing is converted on a number you can't see." },
  { q: "How do companies automate financial consolidation?", a: "Three common paths: move every entity onto one ERP like NetSuite or Sage Intacct and use its consolidation module; bolt a corporate performance tool on top of mixed systems; or keep rebuilding the Excel workbook every month. Aleq is a fourth: it becomes the consolidation system of record while entities stay on their own books. It learns each entity's chart mapping and each intercompany relationship, translates at visible rates, eliminates two-sided, and ties the group to the locals — even mid-migration, with some entities still on the old ERP. Relationships it has matched across many closes run alone; a new entity drafts and asks first." },
  { q: "Can QuickBooks handle multi-entity consolidation?", a: "Not natively. QuickBooks keeps a separate company file per entity and won't consolidate across them, so most multi-entity teams export a trial balance from each file into Excel every month, re-key foreign currencies, and build eliminations by hand — days of work that's only as good as a cell reference. Aleq solves this without forcing an ERP migration: it consolidates as the system of record while each entity's books stay where they are, translating currencies at visible rates and eliminating intercompany automatically. You bring entities over on your own timeline instead of jumping straight into a NetSuite implementation." },
  { q: "Do I need NetSuite to consolidate multiple entities?", a: "No. NetSuite consolidates well once every entity is inside NetSuite, but getting there is a long implementation and an all-or-nothing switch. Aleq runs group consolidation as the system of record while an incumbent ERP still holds some entities — that's the designed on-ramp, live in 48 hours, with entities cut over on your timeline. You get currency translation per ASC 830, two-sided intercompany elimination, and a consolidated close that ties to the local books without waiting for a migration to finish." },
  { q: "Is AI-generated consolidation auditable?", a: "In Aleq, nothing in the consolidation is a black box. Every translation and every elimination posts as a real, balanced journal entry that carries its source balance, the FX rate used, and the reason, so any consolidated number traces back to the local books per entity. Every entry is logged and reversible. The learned automation is inspectable too: TAMi — The Aleq Mind — keeps a visible belief for each intercompany relationship and chart mapping, shows how confident it is and how many closes it has matched cleanly, and lets you switch any belief off. Whether the result satisfies your audit is your auditor's determination; the trail is built for the examination." },
  { q: "Why don't my intercompany balances match at consolidation?", a: "Usually currency and timing: one entity books the invoice at this month's rate, the other settles at last month's, or one side posts in a different period — the US records $840,000 while the UK holds £661,000, and the difference is an FX artifact, not a real imbalance. Aleq prevents the hunt: it matches both sides of every intercompany balance at the origin rate, revalues monetary intercompany positions like USD loans on foreign books at the period-end rate, and posts the FX gain or loss where it belongs. Mismatches surface as they happen, not on day four of the close." },
  { q: "What happens to consolidation when we acquire a new entity?", a: "With Aleq, you map the acquired entity's chart of accounts to your consolidated chart and it starts translating and eliminating immediately. Because a fresh entity has no track record, Aleq drafts every consolidation step for your approval — the mappings, the eliminations, the translation entries — until it has matched enough clean closes to earn autonomy for that relationship. Established entities keep running alone the whole time, so an acquisition doesn't destabilize the group close. Each new relationship carries its own visible confidence level, and you can keep any of them in ask-first mode as long as you want." },
];

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
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your group</Link>
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
              <p className="pp-sub">Consolidation isn&apos;t one rule — it&apos;s a relationship between each pair of entities and each entity&apos;s mappings. TAMi — The Aleq Mind — learns them one at a time: how the US bills the UK, how the GmbH&apos;s chart maps to your consolidated one, which rate source feeds each currency. Every relationship carries its own belief, weighted by how many closes it has matched cleanly. A relationship it has run forty times runs alone; a freshly acquired entity drafts and asks first. You can open any belief, see how sure it is, and switch it off.</p>
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

      {/* FAQ */}
      <section className="pp-section">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What controllers ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      {/* 11 · CTA */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Consolidate your group with Aleq.</h2>
          <p>Bring in the entities Aleq runs and watch a real month consolidate — each one translated at the rate you can see, intercompany eliminated, the group tied out and in balance.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
