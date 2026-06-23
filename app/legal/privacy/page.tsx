import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Aleq collects, uses, and protects your data. Per-tenant isolation. No model training on customer data.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>legal · privacy policy</div>
          <h1 className="h1">Privacy policy</h1>
          <p className="lead" style={{ marginTop: "18px", fontFamily: "var(--font-mono)", fontSize: "14px" }}>Last updated · 2026-04-12 · v3.2</p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="legal-doc">
            <p>This privacy policy describes how Aleq, Inc. (&quot;Aleq&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and protects information when you use our products and services. This policy applies to aleq.com and the Aleq application.</p>

            <h2>What we collect</h2>
            <p>We collect three categories of data:</p>
            <ul>
              <li><strong>Customer financial data</strong> — your accounting ledger, bank feeds, customer + vendor records, contracts, and related materials you authorize Aleq to access. This is required for Aleq to function as your AI CFO.</li>
              <li><strong>Account data</strong> — name, email, role, company, billing details. Used for authentication and billing.</li>
              <li><strong>Usage data</strong> — actions taken in the product, error reports, performance metrics. Used to improve reliability and to debug.</li>
            </ul>

            <h2>How we use it</h2>
            <p>Customer financial data is used solely to operate Aleq for that customer&apos;s account. We do <strong>not</strong> use customer financial data to train shared models, generate marketing assets, or share with any third party except as required by law or to operate the service (e.g., sending an email through SES on your behalf).</p>

            <h2>Per-tenant isolation</h2>
            <p>Each customer&apos;s data is stored in a per-tenant database with a per-tenant encryption key. Aleq runtime processes are isolated per tenant. There are no cross-tenant queries, no shared embeddings, and no shared model fine-tunes.</p>

            <h2>Data residency</h2>
            <p>By default, US customers are hosted in AWS us-west-2 and us-east-1. EU customers are hosted in eu-central-1. AU customers are hosted in ap-southeast-2. Data does not cross regions without explicit contractual agreement.</p>

            <h2>Subprocessors</h2>
            <p>We use the following subprocessors to operate Aleq. Each is bound by a Data Processing Agreement that meets or exceeds GDPR and CCPA requirements:</p>
            <ul>
              <li>Amazon Web Services — infrastructure, storage, encryption</li>
              <li>Anthropic, OpenAI — language model inference (zero-retention agreements in place)</li>
              <li>Bland.ai — telephony for outbound voice (where customer enables)</li>
              <li>ElevenLabs — voice synthesis (where customer enables)</li>
              <li>Deepgram — speech-to-text (where customer enables)</li>
              <li>Stripe — billing and metering</li>
              <li>Drata — compliance monitoring</li>
              <li>Postmark, AWS SES — transactional email</li>
            </ul>
            <p>The current list of subprocessors is also published at <strong>aleq.com/subprocessors</strong> and updated 30 days before any change.</p>

            <h2>Your rights</h2>
            <p>You have the right to access, correct, export, or delete your data. Customer admins can do most of this self-serve in the product. To exercise rights you can&apos;t perform yourself, contact <strong>privacy@aleq.com</strong> and we will respond within 30 days.</p>

            <h2>Retention</h2>
            <p>While your account is active, we retain your data indefinitely so the service can function. After account closure, we retain data for 90 days (for backup and recovery) and then permanently delete it. You can request immediate deletion in writing.</p>

            <h2>Contact</h2>
            <p>Questions, complaints, or rights requests: <strong>privacy@aleq.com</strong></p>
            <p>Aleq, Inc. · Delaware corporation · principal place of business in San Francisco, CA</p>
          </div>
        </div>
      </section>
    </>
  );
}
