import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — $60 per operator hour. Metered, audited, capped.",
  description:
    "Aleq is metered finance labor at $60 per operator hour. No seat licenses, no platform fee, no tiered features. Compare against the loaded cost of your in-house finance team. Annual cap and monthly review available.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>pricing</div>
          <h1 className="h1">$60 per operator hour. <br /><span style={{ color: "var(--primary)", fontStyle: "italic" }}>Metered, audited, capped.</span></h1>
          <p className="lead" style={{ marginTop: "18px" }}>
            Aleq is finance labor. The rate is flat across every action class.
            The meter records every operation in second-precision and posts a monthly
            reconciliation to your AP — the same way you would settle any other vendor invoice.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">labor calculator</div>
            <h2 className="h2">Enter your finance team. <span style={{ color: "var(--primary)" }}>See the math, not the marketing.</span></h2>
            <p className="lead">Loaded cost (salary, benefits, payroll tax, tooling, real estate) versus Aleq metered labor at $60 per operator hour.</p>
          </div>

          <div className="calc-card reveal">
            <div className="head">
              <h3>Replace the in-house finance team</h3>
              <p>Slide to match your headcount. Loaded cost = base × 1.30 (benefits, tax, tooling, real estate).</p>
            </div>
            <div className="calc-grid">
              <div className="calc-inputs">
                <div className="calc-row">
                  <label>Controller (base salary) <span className="v" id="lbl-controller">$165,000</span></label>
                  <input type="range" id="i-controller" min="120000" max="240000" step="5000" defaultValue="165000" />
                </div>
                <div className="calc-row">
                  <label>Senior staff accountant <span className="v" id="lbl-staff">$95,000</span></label>
                  <input type="range" id="i-staff" min="60000" max="140000" step="5000" defaultValue="95000" />
                </div>
                <div className="calc-row">
                  <label>AR / collections clerk <span className="v" id="lbl-ar">$58,000</span></label>
                  <input type="range" id="i-ar" min="40000" max="90000" step="2500" defaultValue="58000" />
                </div>
                <div className="calc-row">
                  <label>AP clerk <span className="v" id="lbl-ap">$54,000</span></label>
                  <input type="range" id="i-ap" min="40000" max="90000" step="2500" defaultValue="54000" />
                </div>
                <div className="calc-row">
                  <label>QBO / NetSuite + add-ons (annual) <span className="v" id="lbl-tools">$48,000</span></label>
                  <input type="range" id="i-tools" min="6000" max="200000" step="2000" defaultValue="48000" />
                </div>
                <div className="calc-row">
                  <label>Aleq hours / month (est.) <span className="v" id="lbl-aleqhr">28 h</span></label>
                  <input type="range" id="i-aleqhr" min="6" max="160" step="2" defaultValue="28" />
                  <p style={{ fontSize: "11.5px", color: "var(--fg-faint)", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                    Most $5–50M ARR companies run Aleq 18–40 hrs/mo. Closes books, AR, AP, reconciles, dunning, voice calls.
                  </p>
                </div>
              </div>

              <div className="calc-output">
                <div className="row">
                  <span className="l">In-house team — annual</span>
                  <span className="v muted" id="o-human">$465,400</span>
                </div>
                <div className="row">
                  <span className="l">Aleq labor — annual</span>
                  <span className="v brand" id="o-aleq">$20,160</span>
                </div>
                <div className="row">
                  <span className="l">Aleq throughput multiplier</span>
                  <span className="v positive" id="o-mult">23×</span>
                </div>
                <div className="savings">
                  <div className="l">Net annual savings</div>
                  <div className="v" id="o-savings">$445,240<span style={{ fontSize: "0.5em", color: "oklch(0.78 0 0)" }}>/yr</span></div>
                  <div className="n">Coverage is 24×7. Capacity scales without re-quoting.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">action classes</div>
            <h2 className="h2">One rate. <span style={{ color: "var(--primary)" }}>Three classes of work.</span></h2>
            <p className="lead">Every Aleq operation falls into one of three classes. The rate is the same. The classes describe what Aleq is doing on your behalf and how the meter records it.</p>
          </div>

          <div className="pricing-tier reveal">
            <div className="tier-card">
              <div className="name">background labor</div>
              <div className="who">Books, reconciliations, AR/AP, period close</div>
              <div className="rate">$60<span className="unit">/hr</span></div>
              <ul>
                <li>Bank reconciliation and transaction classification</li>
                <li>Invoicing, payment application, AP three-way match</li>
                <li>Journal entries, accruals, period close binding</li>
                <li>Tax provision, sales tax filings, 1099 prep</li>
                <li>Metered to the second of CPU and ledger I/O</li>
              </ul>
            </div>
            <div className="tier-card" style={{ borderColor: "var(--primary)", boxShadow: "0 0 0 4px color-mix(in oklch, var(--primary) 14%, transparent)" }}>
              <div className="name" style={{ color: "var(--primary)" }}>communication labor</div>
              <div className="who">Bespoke email, dunning, vendor &amp; customer comms</div>
              <div className="rate">$60<span className="unit">/hr</span></div>
              <ul>
                <li>Per-customer dunning notes that read prior history</li>
                <li>Payment-plan negotiation (text) within standing orders</li>
                <li>Vendor confirmations and statement reconciliation</li>
                <li>Inbound finance-mailbox handling and routing</li>
                <li>Drafts under Assist mode · sends under Autonomous mode</li>
              </ul>
            </div>
            <div className="tier-card">
              <div className="name">voice labor</div>
              <div className="who">Outbound and inbound telephony</div>
              <div className="rate">$60<span className="unit">/hr</span> <span style={{ fontSize: "13px", color: "var(--fg-muted)" }}>+ $0.10/min carrier pass-through</span></div>
              <ul>
                <li>Live collection calls — negotiates, waives, escalates</li>
                <li>Vendor reconciliation and dispute calls</li>
                <li>Customer payment confirmations</li>
                <li>Recording and transcript attached to the journal entry</li>
                <li>Carrier-grade telephony, regulatory consent flows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="section-head reveal" style={{ textAlign: "left", marginBottom: "32px" }}>
            <div className="eyebrow">how the meter is structured</div>
            <h2 className="h2">Software is the receipt. <span style={{ color: "var(--primary)" }}>Labor is the product.</span></h2>
          </div>

          <div className="grid-3 reveal">
            <div className="card">
              <h4 className="h4" style={{ marginBottom: "8px" }}>No seats</h4>
              <p className="muted">Headcount on your finance team is irrelevant to the bill. Aleq is one operator regardless of how many of your people coordinate with it.</p>
            </div>
            <div className="card">
              <h4 className="h4" style={{ marginBottom: "8px" }}>No tiers</h4>
              <p className="muted">Every capability — voice, policy book, audit log, ERP write-back — is enabled on every account. Pricing does not gate features.</p>
            </div>
            <div className="card">
              <h4 className="h4" style={{ marginBottom: "8px" }}>Hard cap</h4>
              <p className="muted">Set a monthly hour ceiling. Aleq queues non-urgent operations to the next cycle when you approach it. The book never goes red without your sign-off.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="section-head reveal" style={{ textAlign: "left", marginBottom: "8px" }}>
            <div className="eyebrow">contracting</div>
            <h2 className="h2">Standard terms, ready for procurement.</h2>
          </div>
          <p className="lead" style={{ marginBottom: "12px" }}>Aleq is sold as a labor service, not a software license. Contracts are written for finance and procurement, not for development teams.</p>

          <table className="contract-table reveal">
            <thead>
              <tr><th>Term</th><th>Default</th></tr>
            </thead>
            <tbody>
              <tr><td>Rate</td><td>$60 per operator hour, all action classes. Telephony pass-through at carrier cost.</td></tr>
              <tr><td>Billing cadence</td><td>Monthly invoice, NET 30. Reconciliation packet with second-precision operation log.</td></tr>
              <tr><td>Term</td><td>12 months, 60-day notice to non-renew. Month-to-month available.</td></tr>
              <tr><td>Hour cap</td><td>Customer-set monthly ceiling. Operations exceeding the cap queue or escalate per policy book.</td></tr>
              <tr><td>Data residency</td><td>US-West-2 default. EU (Frankfurt) and UK (London) on enterprise contracts.</td></tr>
              <tr><td>Compliance</td><td>Security review materials, DPA, subprocessor list, and auditor support available on request under MNDA.</td></tr>
              <tr><td>Liability</td><td>Standard mutual indemnity, capped at twelve months of fees paid. Higher caps available on enterprise agreements.</td></tr>
              <tr><td>Exit</td><td>Full data export in your ERP&apos;s native format. Policy book exported as plain Markdown. No retention beyond 90 days post-termination unless contractually required.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="section-head reveal" style={{ textAlign: "left", marginBottom: "32px" }}>
            <div className="eyebrow">questions finance teams ask</div>
            <h2 className="h2">What CFOs ask before signing.</h2>
          </div>

          <div className="pricing-faq reveal">
            <div className="card">
              <div className="q">How is an &quot;operator hour&quot; defined?</div>
              <div className="a">It is the wall-clock time Aleq spends executing on your behalf, summed across goroutines. Idle time is not billed. Voice time is billed end-to-end including hold and IVR. The monthly reconciliation packet itemizes every operation.</div>
            </div>
            <div className="card">
              <div className="q">What does a typical month look like?</div>
              <div className="a">Companies in the $5M–$50M ARR range run 18–40 operator hours per month. That covers daily reconciliation, AR/AP, dunning, three voice calls per day, and a fully-bound monthly close.</div>
            </div>
            <div className="card">
              <div className="q">Can we run Aleq in Assist mode only?</div>
              <div className="a">Yes. In Assist mode Aleq drafts every action — journal entries, dunning notes, payment runs — and waits for a human to approve. The hour rate is the same. Most teams move portions of work to Autonomous as confidence builds.</div>
            </div>
            <div className="card">
              <div className="q">What happens if Aleq makes a mistake?</div>
              <div className="a">Every journal posts with a pre-computed reverse pair. Misclassifications and erroneous payments are reversible from the audit log with one click. The reversal is itself a billable operation but is typically waived on root-cause analysis.</div>
            </div>
            <div className="card">
              <div className="q">Are voice and email actions metered the same way?</div>
              <div className="a">Yes — the rate is $60 per operator hour for both. Voice incurs an additional carrier pass-through ($0.10/min in the US). The reconciliation packet shows the breakdown.</div>
            </div>
            <div className="card">
              <div className="q">Do we keep our existing ERP?</div>
              <div className="a">To start, yes. Aleq connects to NetSuite, QuickBooks Online, Sage Intacct, and Xero read-only, so it&apos;s live on your current books in 48 hours with nothing to rip out. As it earns trust, Aleq becomes your system of record — you cut over on your timeline, not ours.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an unsigned period. <br /><span style={{ color: "oklch(0.85 0.10 242.749)", fontStyle: "italic" }}>We will close it on the call.</span></h2>
          <p className="lead">No deck, no SDR. We connect read-only to your ERP, replay the trailing month, and produce a close packet during the working session.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/compare">Compare against NetSuite, Puzzle, Rillet</Link>
          </div>
        </div>
      </section>
    </>
  );
}
