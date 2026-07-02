import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

const FAQS: FaqItem[] = [
  { q: "How does Aleq handle tax compliance?", a: "Aleq is an AI accounting platform that keeps you filing-ready year-round instead of scrambling each season. It tracks economic nexus in real time — your sales into every state against that state's threshold — and flags you before you cross, not after a notice arrives. It assembles 1099-NECs as you pay contractors, checking each vendor for a W-9 and requesting missing ones. And it keeps the ASC 740 income-tax provision live off your trial balance: rate reconciliation, valuation allowance, effective rate. Unlike a standalone engine like Avalara, every figure ties to the same books Aleq closes. It prepares filings and evidence for your filing provider — it does not file on your behalf. Connects read-only; live in 48 hours." },
  { q: "What is economic nexus for sales tax?", a: "Economic nexus is the obligation to register for and collect a state's sales tax based on your sales volume into that state rather than physical presence — the standard since the 2018 South Dakota v. Wayfair decision. Most states trigger at around $100,000 in sales or 200 transactions, though thresholds and measurement periods vary. Cross a threshold without registering and you owe back taxes and penalties on sales you never collected tax on. Aleq tracks your sales into every state against that state's specific threshold in real time and flags you with runway to act — Florida at $98,000 of $100,000 and trending to cross means register before the next shipment." },
  { q: "What is an ASC 740 income tax provision?", a: "The ASC 740 provision is the income-tax expense a company calculates for its financial statements under US GAAP — current tax, deferred taxes, the reconciliation from the 21% statutory rate to the effective rate, and any valuation allowance against deferred tax assets. For a startup running losses, the math typically lands near a 0% effective rate, but auditors and investors still expect the workpaper showing why. Aleq keeps the provision live off your trial balance — rate rec, deferreds, valuation allowance, with the reasoning attached — so it's ready when you close instead of being rebuilt from scratch at year-end." },
  { q: "Who do I need to send a 1099 to?", a: "Generally, any US contractor or unincorporated vendor you paid $600 or more during the year gets a 1099-NEC, due to recipients by January 31, and you need a W-9 on file for each one to report it correctly. The pain is that most companies reconstruct this in January from a year of payment records. Aleq assembles 1099s as you pay: every contractor payment is flagged and totaled the moment it clears, each vendor is checked for a W-9, and missing forms are requested during the year — so January is a review of totals that already exist, not a scramble." },
  { q: "How do I know if I need to register for sales tax in another state?", a: "You need to register once you have nexus in that state — either physical presence, like an office or employees, or economic nexus from crossing the state's sales threshold, commonly around $100,000 in sales or 200 transactions. That means tracking cumulative sales and transaction counts per state against each state's specific rules, continuously. Aleq does this off your actual books: it shows each state's progress toward its threshold, projects when you'll cross, and drafts the registration with the reasoning attached, stopping for your sign-off. If your first signal is a notice from a state, you found out too late." },
  { q: "What is the best software for tracking sales tax nexus?", a: "Dedicated tax engines like Avalara and TaxJar calculate rates and monitor thresholds, but they sit outside your accounting system and need their own data feed. Aleq tracks nexus inside the AI accounting platform that already holds your books: every state's sales measured against that state's threshold — dollars and transaction count — in real time, with flags as you approach the trigger rather than after you cross it. Recurring returns it has prepared on schedule run on their own; a first-time state registration always stops for your sign-off. Whatever you choose, the bar is per-state measurement, alerts before the threshold, and workpapers that tie to your ledger." },
  { q: "How do companies automate 1099 preparation?", a: "The manual version is a January scramble: export a year of vendor payments, figure out who crossed $600, chase missing W-9s, and hope the totals reconcile before the January 31 deadline. The automated version does the work continuously. Aleq flags and totals every contractor payment the moment it clears, checks that each vendor has a W-9 on file, and requests missing forms during the year — so by January the 1099-NECs are already assembled and tied to your books, and your filing provider just reviews and files. The difference isn't the form; it's whether the data was built all year or reconstructed under deadline." },
  { q: "Can AI prepare a corporate tax provision?", a: "Yes — preparation, with your judgment on top. Aleq keeps the ASC 740 provision current off your trial balance all year: pretax income, tax at the statutory rate, the change in valuation allowance, and the resulting effective rate, each figure tied to the books with the reasoning attached. Because it updates as the ledger moves, the provision is ready at close instead of being a year-end rebuild. The judgment calls — like whether a valuation allowance position holds — stay with you and your CPA; Aleq's job is a workpaper your provider can review and stand behind rather than reconstruct." },
  { q: "Does Aleq file my tax returns for me?", a: "No — Aleq prepares; it doesn't file. It computes sales-tax returns, assembles 1099s with W-9s checked, keeps the income-tax provision current, and ties out the supporting evidence, then hands the package to your filing provider. Returns it has prepared many times on the same schedule — say, a monthly California sales-tax return prepared eighteen times — are ready and waiting on their own; anything new, like a first-time state registration, is drafted with the reasoning and stops for your sign-off. Nothing is ever filed on your behalf, and nothing new goes out unattended." },
  { q: "Who is liable if tax software gets a filing wrong?", a: "You are. The taxpayer is responsible for its filings regardless of what software prepared them — which is exactly why black-box tax numbers are dangerous. Aleq is built for that reality: it produces the workpaper, not the filing of record, and every figure ties back to your books with its source attached, so you and your filing provider can verify each return before it goes out and stand behind it afterward. Every entry is logged and reversible, and judgment calls like first-time registrations always stop for human sign-off. Trust the number because you can trace it, not because a vendor said so." },
];

export const metadata: Metadata = {
  title: "Tax & compliance — filing-ready, as it happens",
  description:
    "Aleq watches your sales-tax nexus, assembles 1099s as you pay, and keeps the income-tax provision current — preparing the filings and the evidence, so nothing is a year-end scramble. It prepares filings; it doesn't file on your behalf.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Tax &amp; compliance</div>
            <h1>Filing-ready, as it happens.</h1>
            <p className="pp-hero-lead">Tax stops being a season. Aleq keeps you filing-ready all year, with the evidence attached.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Close a month with us</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Tax · Sirius Robotics · 2026
                <span className="pp-live" style={{ color: "var(--fg-muted)" }}>watching</span>
              </div>
              <div className="pp-checks">
                <div className="pp-checkrow"><span className="pp-learned-rule">Florida<small>approaching nexus · $98k of $100k</small></span><span className="pp-conf warn">register soon</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">California<small>registered · collecting 8.63%</small></span><span className="pp-conf">registered</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">New York<small>registered · collecting 8.75%</small></span><span className="pp-conf">registered</span></div>
                <div className="pp-checkrow"><span className="pp-learned-rule">1099s<small>14 vendors assembling</small></span><span className="pp-conf">on track</span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">4 jurisdictions · 1 registration due</span>
                <span className="pp-ok">Nothing past due</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">right now</div>
              <div className="pp-float-v">FL at 98% of $100k <span className="pp-ok">no surprises</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Before, not after</div>
              <h2 className="pp-h">It watches nexus before you cross it.</h2>
              <p className="pp-sub">Aleq tracks your sales into every state against that state&apos;s economic-nexus threshold, in real time. Florida is at $98k of the $100k trigger and trending to cross around May 12 — so you register before the next ship, not after a notice arrives. You see why it&apos;s flagged, and what to do next.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Economic nexus · Florida</div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">Florida — $98,400 of $100,000</div>
                  <div className="pp-belief-meta">crosses ~May 12 · register before next ship</div>
                  <div className="pp-why"><b>Why this is flagged</b><p>Florida&apos;s economic-nexus threshold is $100,000 in sales. You&apos;re at 98% and trending up — once you cross, you owe registration and collection, so Aleq surfaces it with runway to act.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>Start registration</span>
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
              <div className="pp-eyebrow">All year, not in January</div>
              <h2 className="pp-h">1099s assembled as you pay.</h2>
              <p className="pp-sub">Every contractor payment is flagged and totaled the moment it clears, and Aleq checks each vendor has a W-9 on file. Totals build through the year, so January is a review — not a scramble to chase down a year of payments and missing forms.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> 1099-NEC · assembling for 2026</div>
                <div className="pp-checks">
                  <div className="pp-checkrow"><span className="pp-learned-rule">Anders Design LLC<small>W-9 on file</small></span><span className="pp-conf">$42,400</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Riley Ops Consulting<small>W-9 on file</small></span><span className="pp-conf">$28,900</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Marlowe Studio<small>W-9 missing — requested</small></span><span className="pp-conf warn">W-9 needed</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">14 vendors over $600 · 1 W-9 outstanding</span>
                  <span className="pp-ok">on track for Jan 31</span>
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
              <div className="pp-eyebrow">Tied to your books</div>
              <h2 className="pp-h">The income-tax provision, current.</h2>
              <p className="pp-sub">Aleq keeps the income-tax provision live off your trial balance — the statutory rate, the valuation allowance, the effective rate — so it&apos;s ready when you close, not rebuilt at year-end. For a company running losses, that lands at roughly a 0% effective rate, with the reasoning attached.</p>
              <div className="pp-actions">
                <Link className="btn btn-lg" href="/standards/asc740">See the full provision &rarr;</Link>
              </div>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Rate reconciliation · FY2026</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct">Pretax book loss</span><span className="pp-num neg">$(2,385,722)</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>21%</small>Tax at statutory rate</span><span className="pp-num neg">$(501,002)</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct">Change in valuation allowance</span><span className="pp-num">$543,000</span></div>
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">Provision for income tax · ETR ~0%</span>
                  <span className="pp-num" style={{ fontSize: "16px", fontWeight: 600 }}>$(1,202)</span>
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
              <h2 className="pp-h">It learns your filing calendar.</h2>
              <p className="pp-sub">The filings you make every period, on the same schedule, Aleq prepares on its own once they&apos;re proven — the package is ready and waiting. A new jurisdiction or a first-time registration is a judgment call, so it stops and asks before it acts.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq runs, by filing</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">CA sales tax — monthly return<small>prepared 18× · on schedule</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">NY sales tax — quarterly return<small>prepared 6×</small></span><span className="pp-learned-bar"><i style={{ width: "99%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">FL — first-time registration<small>new jurisdiction</small></span><span className="pp-learned-bar mid"><i style={{ width: "34%" }} /></span><span className="pp-tag asks">Asks first</span></div>
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
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Stay filing-ready with Aleq.</h2>
          <p>Connect read-only and watch Aleq track your nexus, assemble your 1099s, and keep the provision current — every filing prepared, every number tied to your books.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Close a month with us</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
