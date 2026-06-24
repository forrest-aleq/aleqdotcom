import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="site-logo" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/aleq-lockup.png" alt="aleq" width={2883} height={1160} />
          </Link>
          <p>The autonomous controller you can audit. Closes the books, runs collections by voice, proves every move.</p>
          <div className="footer-trust"><span className="t-dot"></span> Read-only start · reversible action trail</div>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <Link href="/work/reconciliation">Reconciliation</Link>
          <Link href="/work/general-ledger">General ledger</Link>
          <Link href="/work/ap">Accounts payable</Link>
          <Link href="/work/collections">Accounts receivable</Link>
          <Link href="/work/close">Continuous close</Link>
          <Link href="/work/multi-entity">Multi-entity &amp; consolidation</Link>
          <Link href="/work/tax">Tax &amp; compliance</Link>
          <Link href="/work/reporting">Financial reporting</Link>
        </div>
        <div className="footer-col">
          <h5>Platform</h5>
          <Link href="/tami">TAMi · the intelligence</Link>
          <Link href="/control">Control plane</Link>
          <Link href="/control#audit">Signed audit trail</Link>
          <Link href="/connectors">Connectors</Link>
          <Link href="/migrate">Migrate</Link>
          <Link href="/packs">Scenario packs</Link>
          <Link href="/work">The whole platform</Link>
        </div>
        <div className="footer-col">
          <h5>Standards</h5>
          <Link href="/standards/asc606">ASC 606 · Revenue</Link>
          <Link href="/standards/asc842">ASC 842 · Leases</Link>
          <Link href="/standards/asc718">ASC 718 · Stock comp</Link>
          <Link href="/standards/asc740">ASC 740 · Income taxes</Link>
          <Link href="/standards/asc340">ASC 340 · Commissions</Link>
          <Link href="/standards/asc350">ASC 350 · Intangibles</Link>
          <Link href="/standards/asc815">ASC 815 · Hedging</Link>
        </div>
        <div className="footer-col">
          <h5>Compare</h5>
          <Link href="/compare/netsuite">vs. NetSuite</Link>
          <Link href="/compare/sage-intacct">vs. Sage Intacct</Link>
          <Link href="/compare/sap">vs. SAP</Link>
          <Link href="/compare/quickbooks">vs. QuickBooks</Link>
          <Link href="/compare">All comparisons</Link>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <Link href="/teams">Teams</Link>
          <Link href="/demo">Book a demo</Link>
          <Link href="/company/contact">Contact</Link>
          <Link href="/legal/security">Security</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Aleq, Inc. · <Link className="footer-sitemap" href="/sitemap">Sitemap</Link> · <Link className="footer-sitemap" href="/legal/privacy">Privacy</Link> · <Link className="footer-sitemap" href="/legal/terms">Terms</Link> · <Link className="footer-sitemap" href="/legal/security">Security</Link></span>
        <span>Billed by the hour worked · $60/hr · security review on request</span>
      </div>
    </footer>
  );
}
