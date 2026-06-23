import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security disclosures",
  description:
    "Aleq's security disclosures: encryption, vulnerability disclosure, access controls, incident response.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>legal · security disclosures</div>
          <h1 className="h1">Security disclosures</h1>
          <p className="lead" style={{ marginTop: "18px" }}>For the product-level audit trail, see <Link style={{ color: "var(--primary)" }} href="/control#audit">Control plane</Link>. This page is the formal disclosure document.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="legal-doc">
            <h2>Compliance</h2>
            <ul>
              <li><strong>Security review</strong> — vendor security questionnaires, architecture notes, and relevant reports are available under NDA.</li>
              <li><strong>GDPR + CCPA</strong> — DPA available pre-sales. EU representative listed in DPA.</li>
              <li><strong>HIPAA</strong> — BAA available for healthcare customers. Aleq&apos;s per-tenant isolation supports HIPAA-grade obligations.</li>
              <li><strong>PCI-DSS</strong> — Aleq does not store cardholder data. Card data is tokenized at point of capture by our PCI-Level-1 payment processor.</li>
            </ul>

            <h2>Encryption</h2>
            <ul>
              <li><strong>At rest</strong> — AES-256-GCM with per-tenant data encryption keys. Keys are managed in AWS KMS with HSM-backed master keys.</li>
              <li><strong>In transit</strong> — TLS 1.3 with forward secrecy. HSTS enabled with 2-year max-age.</li>
              <li><strong>Backups</strong> — encrypted with the same per-tenant keys. Retained 90 days.</li>
            </ul>

            <h2>Audit signatures</h2>
            <p>Every journal entry posted by Aleq is signed at the time of post with an ed25519 keypair held in HSM. Period closes are sealed with an aggregate signature over the entire period&apos;s signed entries. Auditors can verify cryptographically that no entries have been altered after signing.</p>

            <h2>Access controls</h2>
            <ul>
              <li><strong>SSO</strong> — SAML 2.0 and OIDC supported (Okta, Azure AD, Google Workspace).</li>
              <li><strong>SCIM</strong> — automatic user provisioning and deprovisioning.</li>
              <li><strong>RBAC</strong> — granular, per-action permission model. Standard roles + custom role builder.</li>
              <li><strong>MFA</strong> — required for all human users on privileged actions. Hardware security keys supported.</li>
            </ul>

            <h2>Vulnerability disclosure</h2>
            <p>If you believe you&apos;ve found a security vulnerability in Aleq, please email <strong>security@aleq.com</strong>. We acknowledge reports within 24 hours and aim to remediate critical issues within 14 days.</p>
            <p>We operate a bug bounty program in coordination with HackerOne. Eligible reports receive bounties from <code>$500</code> to <code>$25,000</code> based on severity and impact. Full scope and rules are at <strong>aleq.com/bounty</strong>.</p>

            <h2>Incident response</h2>
            <p>Aleq maintains a 24/7 security operations center. In the event of a customer-impacting security incident:</p>
            <ul>
              <li>Initial customer notification within 24 hours.</li>
              <li>Status updates every 4 hours during the active phase.</li>
              <li>Final post-incident report within 5 business days, including cause, scope, remediation, and prevention measures.</li>
            </ul>

            <h2>Penetration testing</h2>
            <p>Aleq commissions an annual external penetration test by an independent firm (Trail of Bits, 2026-Q1). Customers can request the executive summary under NDA.</p>

            <h2>Customer references</h2>
            <p>The following customers have agreed to share their security review experience with Aleq under NDA:</p>
            <ul>
              <li>Foxwell Robotics — Series C hardware company</li>
              <li>Helix Cloud — Series C SaaS company</li>
              <li>Loft Marketplace — Series B marketplace company</li>
            </ul>
            <p>Contact <strong>security@aleq.com</strong> to request introductions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
