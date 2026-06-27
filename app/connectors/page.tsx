import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connectors — Aleq is the system of record; everything else feeds it",
  description:
    "Aleq is your ledger and your controller. Your banks, processors, payroll, and cap table feed it read-only, forever. Your CRM, billing, and cards feed the numbers it books. Your old accounting system, it replaces. Chase to Mercury, Stripe to Carta, plus 12,000+ institutions via Plaid — reconciled to one ledger.",
};

type Item = { name: string; logo?: string; mono?: string };
type Group = { label: string; sub: string; items: Item[] };

// Systems of record for real-world money events. Aleq reads these — read-only, forever.
const READS: Group[] = [
  {
    label: "Banks",
    sub: "balances, statements, and transactions — reconciled nightly",
    items: [
      { name: "Chase", logo: "chase-bank.png" },
      { name: "J.P. Morgan", mono: "JPM" },
      { name: "Bank of America", mono: "BofA" },
      { name: "Wells Fargo", mono: "WF" },
      { name: "Mercury", logo: "mercury-bank.png" },
      { name: "Wise", logo: "Wise.png" },
    ],
  },
  {
    label: "Payment processors",
    sub: "charges, refunds, fees, and payouts, matched to the cent",
    items: [
      { name: "Stripe", logo: "Stripe.png" },
      { name: "Adyen", mono: "Ad" },
      { name: "PayPal", logo: "Paypal.png" },
      { name: "Square", logo: "Square.png" },
    ],
  },
  {
    label: "Payroll & HR",
    sub: "runs, taxes, and benefits, posted by entity",
    items: [
      { name: "Gusto", logo: "Gusto.png" },
      { name: "Rippling", mono: "R" },
      { name: "Deel", logo: "Deel.png" },
    ],
  },
  {
    label: "Cap table & equity",
    sub: "grants and vesting read straight into ASC 718",
    items: [{ name: "Carta", mono: "C" }],
  },
  {
    label: "Cloud & infrastructure",
    sub: "usage invoices read in as cost and coded to the right account",
    items: [
      { name: "AWS", mono: "AWS" },
      { name: "Google Cloud", logo: "Google.png" },
      { name: "Microsoft", logo: "Microsoft.png" },
    ],
  },
  {
    label: "Sales tax",
    sub: "rates and nexus read in as you bill",
    items: [
      { name: "Avalara", mono: "Av" },
      { name: "TaxJar", mono: "TJ" },
    ],
  },
];

// Operational systems that generate the accounting. Aleq reads them to RUN the books —
// the tool stays; the bookkeeping it used to hand off moves to Aleq.
const DRIVES: Group[] = [
  {
    label: "Revenue & billing",
    sub: "subscriptions, invoices, and orders become revenue and deferred schedules",
    items: [
      { name: "Recurly", logo: "recurly.png" },
      { name: "Chargebee", mono: "Cb" },
      { name: "Shopify", logo: "Shopify.png" },
    ],
  },
  {
    label: "CRM & contracts",
    sub: "signed contracts become performance obligations and ARR — ASC 606",
    items: [
      { name: "Salesforce", logo: "Salesforce.png" },
      { name: "HubSpot", logo: "HubSpot.png" },
      { name: "Pipedrive", logo: "Pipedrive.png" },
    ],
  },
  {
    label: "Corporate cards",
    sub: "every swipe coded to policy, matched, and paid — the card stays yours",
    items: [
      { name: "Brex", logo: "brex.png" },
      { name: "Ramp", logo: "ramp.png" },
    ],
  },
];

// Tools that only recorded the accounting. Aleq is the system of record — it replaces these.
const REPLACES: Group[] = [
  {
    label: "Accounting & ERP",
    sub: "your general ledger — rebuilt clean, then retired",
    items: [
      { name: "QuickBooks", logo: "Quickbooks.png" },
      { name: "NetSuite", mono: "NS" },
      { name: "Xero", logo: "Xero.png" },
      { name: "Sage Intacct", mono: "SI" },
    ],
  },
  {
    label: "Bill pay & AP",
    sub: "Aleq matches and schedules bills itself",
    items: [
      { name: "Bill.com", logo: "Bill.png" },
      { name: "Tipalti", mono: "Tp" },
    ],
  },
  {
    label: "Close, recon & reporting",
    sub: "the bolt-ons and spreadsheets Aleq makes unnecessary",
    items: [
      { name: "FloQast", mono: "Fq" },
      { name: "Spreadsheets", logo: "Excel.png" },
    ],
  },
];

function Tile({ item, repl }: { item: Item; repl?: boolean }) {
  return (
    <div className={"cxn-tile" + (repl ? " repl" : "")}>
      {item.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="cxn-logo" src={"/tech-logos/" + item.logo} alt="" width={120} height={120} />
      ) : (
        <span className="cxn-mono">{item.mono}</span>
      )}
      <span className="cxn-name">{item.name}</span>
      {repl ? <span className="cxn-repl-badge">→ Aleq</span> : null}
    </div>
  );
}

function Catalog({ groups, repl }: { groups: Group[]; repl?: boolean }) {
  return (
    <div className="cxn-groups reveal">
      {groups.map((g) => (
        <div className="cxn-group" key={g.label}>
          <div className="cxn-group-head">
            <h3>{g.label}</h3>
            <span>{g.sub}</span>
          </div>
          <div className="cxn-grid">
            {g.items.map((it) => (
              <Tile item={it} repl={repl} key={it.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <section className="pp-section">
      <div className="pp-wrap">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "44px", padding: 0 }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>The catalog</div>
          <h1 className="pp-h">Everything your books touch.</h1>
          <p className="pp-sub" style={{ margin: "18px auto 0" }}>
            Grouped by what Aleq does with each one. Don&apos;t see yours? Aleq
            connects to 12,000+ institutions through Plaid, plus an open API — and
            new connectors ship every week.
          </p>
        </div>

        <div className="cxn-cat">
          <span className="cxn-cat-k">Aleq reads these</span>
          <small>read-only, forever — never replaced</small>
          <span className="ln" />
        </div>
        <Catalog groups={READS} />

        <div className="cxn-cat">
          <span className="cxn-cat-k">Aleq runs the accounting for these</span>
          <small>the tool stays — the bookkeeping moves to Aleq</small>
          <span className="ln" />
        </div>
        <Catalog groups={DRIVES} />

        <div className="cxn-cat">
          <span className="cxn-cat-k">Aleq replaces these</span>
          <small>connect once to migrate, then switch off</small>
          <span className="ln" />
        </div>
        <Catalog groups={REPLACES} repl />
      </div>
    </section>
  );
}
