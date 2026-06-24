import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap — Every page on aleq.com",
  description: "Every page on the Aleq site, organized by section.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>sitemap</div>
          <h1 className="h1">Everything on the site.</h1>
          <p className="lead" style={{ marginTop: "18px" }}>Every page, organized by section. Use the search if you know what you&apos;re looking for.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sitemap-grid reveal">

            <div className="sitemap-section">
              <h3>Product</h3>
              <ul>
                <li><Link className="live" href="/"><strong>Homepage</strong></Link></li>
                <li><Link className="live" href="/work">The work</Link></li>
                <li><Link className="live" href="/tami">TAMi · the intelligence</Link></li>
                <li><Link className="live" href="/control#modes">Control plane</Link></li>
                <li><Link className="live" href="/control#audit">Signed audit trail</Link></li>
                <li><Link className="live" href="/connectors">Connectors</Link></li>
                <li><Link className="live" href="/migrate">Migrate</Link></li>
                <li><Link className="live" href="/packs">Scenario packs</Link></li>
              </ul>
            </div>

            <div className="sitemap-section">
              <h3>The work</h3>
              <ul>
                <li><Link className="live" href="/work">All work</Link></li>
                <li><Link className="live" href="/work/reconciliation">Reconciliation</Link></li>
                <li><Link className="live" href="/work/close">The close</Link></li>
                <li><Link className="live" href="/work/ap">Accounts payable</Link></li>
                <li><Link className="live" href="/work/collections">Accounts receivable</Link></li>
                <li><Link className="live" href="/work/multi-entity">Multi-entity</Link></li>
                <li><Link className="live" href="/work/tax">Tax</Link></li>
                <li><Link className="live" href="/work/reporting">Financial reporting</Link></li>
              </ul>
            </div>

            <div className="sitemap-section">
              <h3>Scenario packs</h3>
              <ul>
                <li><Link className="live" href="/packs">All packs</Link></li>
                <li><Link className="live" href="/packs/reconciliation">Reconciliation pack</Link></li>
                <li><Link className="live" href="/packs/month-end-close">Month-end close pack</Link></li>
                <li><Link className="live" href="/packs/ap">AP pack</Link></li>
                <li><Link className="live" href="/packs/collections">Collections pack</Link></li>
                <li><Link className="live" href="/packs/multi-entity">Multi-entity pack</Link></li>
                <li><Link className="live" href="/packs/audit">Audit pack</Link></li>
              </ul>
            </div>

            <div className="sitemap-section">
              <h3>Standards</h3>
              <ul>
                <li><Link className="live" href="/standards/asc606">ASC 606</Link></li>
                <li><Link className="live" href="/standards/asc842">ASC 842</Link></li>
                <li><Link className="live" href="/standards/asc718">ASC 718</Link></li>
                <li><Link className="live" href="/standards/asc740">ASC 740</Link></li>
                <li><Link className="live" href="/standards/asc815">ASC 815</Link></li>
                <li><Link className="live" href="/standards/asc350">ASC 350</Link></li>
                <li><Link className="live" href="/standards/asc340">ASC 340</Link></li>
              </ul>
            </div>

            <div className="sitemap-section">
              <h3>Compare</h3>
              <ul>
                <li><Link className="live" href="/compare">All comparisons</Link></li>
                <li><Link className="live" href="/compare/rillet">vs. Rillet</Link></li>
                <li><Link className="live" href="/compare/campfire">vs. Campfire</Link></li>
                <li><Link className="live" href="/compare/puzzle">vs. Puzzle</Link></li>
                <li><Link className="live" href="/compare/netsuite">vs. NetSuite</Link></li>
                <li><Link className="live" href="/compare/sage-intacct">vs. Sage Intacct</Link></li>
                <li><Link className="live" href="/compare/sap">vs. SAP</Link></li>
                <li><Link className="live" href="/compare/quickbooks">vs. QuickBooks</Link></li>
              </ul>
            </div>

            <div className="sitemap-section">
              <h3>Company</h3>
              <ul>
                <li><Link className="live" href="/teams">Teams</Link></li>
                <li><Link className="live" href="/demo">Book a demo</Link></li>
                <li><Link className="live" href="/company/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="sitemap-section">
              <h3>Legal</h3>
              <ul>
                <li><Link className="live" href="/legal/privacy">Privacy policy</Link></li>
                <li><Link className="live" href="/legal/terms">Terms of service</Link></li>
                <li><Link className="live" href="/legal/security">Security</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
