import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms governing use of Aleq products and services.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>legal · terms of service</div>
          <h1 className="h1">Terms of service</h1>
          <p className="lead" style={{ marginTop: "18px", fontFamily: "var(--font-mono)", fontSize: "14px" }}>Last updated · 2026-04-12 · v3.4 · plain-English summary above each section</p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="legal-doc">
            <p>These Terms govern access to and use of the Aleq product and services (the &quot;Service&quot;). By using the Service, you (&quot;Customer&quot;) agree to these Terms. The Service is operated by Aleq, Inc. (&quot;Aleq&quot;).</p>

            <h2>1 · The Service</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: Aleq is the AI CFO. We do the work; you pay for the hour we worked.</p>
            <p>Aleq provides an autonomous AI controller that performs accounting, treasury, accounts receivable, and accounts payable operations on behalf of Customer. The Service is metered in seconds of Aleq labor at a rate of $60.00 per hour (the &quot;Labor Rate&quot;), or such other rate as agreed in writing.</p>

            <h2>2 · Customer responsibilities</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: tell us what&apos;s true, sign your standing orders, don&apos;t ask us to commit fraud.</p>
            <ul>
              <li>Customer represents that all data provided to the Service is accurate and that Customer has the right to share it.</li>
              <li>Customer is responsible for reviewing and signing the Standing Orders policy book before authorizing autonomous operations.</li>
              <li>Customer agrees not to use the Service to commit, conceal, or facilitate fraudulent or unlawful activity.</li>
              <li>Customer remains the legal owner of its books, records, and accounting outputs. Aleq is an agent of Customer for the work it performs.</li>
            </ul>

            <h2>3 · Fees and billing</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: $60/hr metered, billed monthly, second-precision.</p>
            <p>Aleq labor is metered to the second and billed monthly in arrears. Telephony and third-party voice fees (where Customer enables voice) are passed through at cost plus 0%. Customer may set a monthly cap on metered hours; Aleq will queue lower-priority work when the cap is reached.</p>

            <h2>4 · Confidentiality</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: we don&apos;t share, train on, or sell your data.</p>
            <p>Aleq will not use Customer financial data to train shared models, generate marketing assets, or share with any third party except as required to operate the Service or by law. Per-tenant isolation as described in our Privacy Policy applies.</p>

            <h2>5 · Term and termination</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: leave anytime with 30 days&apos; notice. We&apos;ll give you your data.</p>
            <p>Either party may terminate this agreement upon 30 days&apos; written notice. Upon termination, Aleq will export Customer&apos;s complete ledger and source documents in a portable format (CSV + signed manifest) and securely delete Customer data within 90 days, retaining only what is required by law.</p>

            <h2>6 · Liability</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: capped at 12× monthly fees; standard limitations.</p>
            <p>Aleq&apos;s aggregate liability under this agreement is capped at 12 times the average monthly fees over the prior 12 months (or actual months billed if fewer). Neither party is liable for indirect, consequential, or punitive damages. Standard force majeure applies.</p>

            <h2>7 · Disputes</h2>
            <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Plain-English: California law. Try to talk to us first. Then arbitrate.</p>
            <p>This agreement is governed by California law. The parties will attempt to resolve disputes informally for 30 days before binding arbitration in San Francisco County, CA, under JAMS rules.</p>

            <h2>Contact</h2>
            <p>Questions: <strong>legal@aleq.com</strong></p>
            <p>Aleq, Inc. · Delaware corporation · principal place of business in San Francisco, CA</p>
          </div>
        </div>
      </section>
    </>
  );
}
