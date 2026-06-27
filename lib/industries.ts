// Industry data. One source of truth → every /industries/* page is ~5 lines.
// Positioning spine: Aleq IS the books — the system of record that also does the
// work, powered by TAMi. 48h on-ramp on read-only credentials, then it's the record.
// Every industry speaks its own standards, subledgers, and metrics — no generic filler.

export type KV = { k: string; v: string };
export type JeLine = { side: "dr" | "cr"; acct: string; sub?: string; val: string };
export type CardRow = { acct: string; sub?: string; val: string; neg?: boolean; pct?: number };

export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  lead: string;
  realityH2: string;
  realityLead: string;
  capabilities: { title: string; desc: string }[];
  standards: string[];
  metrics: { v: string; l: string }[];
  ctaH2: string;
  ctaLead: string;
  // ── rich fields (ASC-grade treatment) — optional; populated per industry ──
  note?: string;
  heroCard?: {
    head: string;
    rows: CardRow[];
    footK: string;
    ok?: string;
    footV?: string;
  };
  kpis?: { v: string; u?: string; l: string; sub: string }[];
  statcap?: string;
  stackToday?: string[];
  worked?: {
    eyebrow: string;
    h: string;
    sub: string;
    head: string;
    // when set, the worked example renders collapsed (a one-line strip you
    // click to expand) instead of as a full-bleed always-open card.
    collapsible?: boolean;
    summary?: string;
    steps: {
      k: string;
      h: string;
      kv?: KV[];
      je?: JeLine[];
      balK?: string;
      ok?: string;
    }[];
  };
  field?: { quote: string; who: string; answer: string; stack: string[] };
  standardLinks?: { label: string; href: string }[];
  breadthH?: string;
  breadthLead?: string;
  breadth?: { label: string; desc: string; href: string; img?: string; tile?: string }[];
  // a real product screenshot shown in the "what Aleq runs" section instead of a word checklist
  runsShot?: string;
  faqs?: { q: string; a: string }[];
};

export const INDUSTRIES: Record<string, Industry> = {
  saas: {
    slug: "saas",
    name: "SaaS & subscription",
    eyebrow: "for SaaS & subscription",
    h1: "Your revenue lives in the billing tool. Aleq makes it the ledger.",
    lead:
      "Aleq is the books for subscription businesses — it recognizes revenue under ASC 606 as you bill, keeps the deferred schedule current to the day, and ties MRR, ARR, and retention back to a sealed general ledger.",
    realityH2: "Revenue rec is spread across Stripe, a spreadsheet, and hope.",
    realityLead:
      "Upgrades break the waterfall, usage trues up late, and the ARR you show the board never quite ties to the GL.",
    capabilities: [
      {
        title: "ASC 606 from the contract",
        desc:
          "Aleq reads each subscription and usage contract, allocates the transaction price across performance obligations, and posts recognition on the right pattern — ratable, point-in-time, or as-consumed.",
      },
      {
        title: "Deferred revenue, current to the day",
        desc:
          "The deferred-revenue subledger is rebuilt continuously. New bookings, upgrades, downgrades, and cancellations re-cut the waterfall and post the catch-up entry with a signed trail.",
      },
      {
        title: "Usage-based billing, trued up automatically",
        desc:
          "Metered and consumption lines are accrued from event data and reconciled to the invoice, so unbilled and over-billed usage never strand on a spreadsheet.",
      },
      {
        title: "MRR / ARR tied to the GL",
        desc:
          "New, expansion, contraction, and churned MRR are derived from the same journal entries as recognized revenue — so the ARR walk and the income statement agree by construction.",
      },
      {
        title: "Stripe & Recurly reconciled to $0.00",
        desc:
          "Charges, refunds, processor fees, and payouts from Stripe and Recurly land in the ledger and reconcile to the bank to the penny, every night.",
      },
    ],
    standards: [
      "Deferred revenue subledger",
      "Contract assets & liabilities",
      "Stripe / Recurly billing",
      "Usage / metered revenue",
    ],
    metrics: [
      { v: "MRR", l: "Derived from the GL, not a spreadsheet" },
      { v: "ARR", l: "New · expansion · churn, walked nightly" },
      { v: "NRR", l: "Net revenue retention, cohort-traced" },
      { v: "$0.00", l: "Deferred balance variance to subledger" },
    ],
    ctaH2: "Still tying ARR to the GL by hand?",
    ctaLead:
      "Connect Stripe and your bank read-only. In 48 hours Aleq re-recognizes a closed period under 606 and shows you the deferred waterfall, signed.",
    note: "synced from Stripe & Recurly · ties to the ledger",
    statcap: "subscription revenue · recognized from the ledger",
    heroCard: {
      head: "Deferred revenue · live",
      rows: [
        { acct: "Monthly recurring revenue", val: "$184,200" },
        { acct: "Recognized this month", sub: "ratable + usage", val: "$176,500" },
        { acct: "Deferred revenue", val: "$1,420,000" },
        { acct: "Net revenue retention", val: "112%" },
      ],
      footK: "Recognized as billed · ties to the GL",
      ok: "on schedule",
    },
    kpis: [
      { v: "$2.21", u: "M", l: "ARR", sub: "new · expansion · churn, nightly" },
      { v: "112", u: "%", l: "Net revenue retention", sub: "cohort-traced from the GL" },
      { v: "$1.42", u: "M", l: "Deferred revenue", sub: "current to the day" },
      { v: "$0.00", l: "Subledger variance", sub: "deferred ties to the GL" },
    ],
    stackToday: [
      "Stripe / Recurly",
      "Lockbox PDF",
      "Excel waterfall",
      "Manual JE",
      "NetSuite",
    ],
    worked: {
      eyebrow: "How it works",
      h: "A customer upgrades mid-term. The waterfall re-cuts.",
      sub: "Mid-term changes are where the deferred schedule breaks. Aleq re-allocates the remaining price, books the catch-up, and rebuilds the waterfall — the moment the plan changes.",
      head: "Mid-term upgrade · Pro → Enterprise",
      collapsible: true,
      summary: "+$48K ARR · waterfall re-cut · posted",
      steps: [
        {
          k: "Read · the plan change",
          h: "Pulled the upgrade from billing",
          kv: [
            { k: "Change", v: "Pro → Enterprise · month 7 of 12" },
            { k: "ARR impact", v: "+$48,000" },
            { k: "Remaining term", v: "5 months" },
          ],
        },
        {
          k: "Re-allocated · ASC 606",
          h: "Re-cut the remaining transaction price",
          kv: [
            { k: "Unrecognized at change", v: "$21,000" },
            { k: "Added consideration", v: "$20,000" },
            { k: "New monthly recognition", v: "$8,200" },
          ],
        },
        {
          k: "Booked · this period",
          h: "Catch-up posted, schedule rebuilt",
          je: [
            { side: "dr", acct: "Accounts receivable", val: "$20,000" },
            { side: "cr", acct: "Deferred revenue", sub: "re-cut across 5 months", val: "$20,000" },
          ],
          balK: "Prior periods untouched · waterfall rebuilt",
          ok: "re-derived",
        },
      ],
    },
    field: {
      quote:
        "The bank emails us a PDF with all the deposits. I open it, pull the check details into a spreadsheet, go into Recurly to apply payments, then log into NetSuite and key in the journal entries. One check is fine. Twenty or thirty is a total time sink.",
      who: "Revenue-ops lead · Series-B vertical SaaS platform",
      answer:
        "Aleq reads the lockbox PDF, applies each payment to the right subscription in Recurly, and posts the cash-application entry to the ledger — the whole batch booked and reconciled before you open the file.",
      stack: ["Bank lockbox PDF", "Excel", "Recurly", "NetSuite", "by hand"],
    },
    standardLinks: [
      { label: "ASC 606 · Revenue", href: "/standards/asc606" },
      { label: "ASC 340 · Commissions", href: "/standards/asc340" },
    ],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "Revenue is the hard part for SaaS — Aleq runs it, and the whole close around it: the processor reconciled, the bills paid, the month sealed.",
    breadth: [
      { label: "Subscription revenue", desc: "MRR, ARR, and the deferred schedule recognized as you bill — ASC 606.", href: "/standards/asc606", tile: "deferred" },
      { label: "Stripe & bank recon", desc: "Charges, refunds, fees, and payouts matched to the bank to $0.00, nightly.", href: "/work/reconciliation" },
      { label: "Cash application", desc: "Lockbox and ACH receipts applied to the right subscription, then posted.", href: "/work/collections" },
      { label: "Bills & vendor pay", desc: "AWS, contractors, and SaaS spend captured, matched, and paid on approval.", href: "/work/ap" },
      { label: "Continuous close", desc: "Accruals, deferrals, and the month sealed — day by day, not in a crunch.", href: "/work/close" },
      { label: "Stock comp · ASC 718", desc: "Grants from the cap table, expensed over the service period.", href: "/standards/asc718" },
      { label: "Commissions · ASC 340", desc: "Sales commissions capitalized and amortized over the benefit.", href: "/standards/asc340" },
      { label: "Tax & provision", desc: "Nexus watched, the provision kept current as the books move.", href: "/work/tax" },
    ],
  },

  hardware: {
    slug: "hardware",
    name: "Hardware & physical goods",
    eyebrow: "for hardware & physical goods",
    h1: "Every shipment moves inventory. Aleq is the ledger that moves with it.",
    lead:
      "Aleq is the books for companies that make and ship physical goods — it values inventory under ASC 330, rolls landed cost into the unit, relieves COGS on every shipment, and keeps gross margin true at the SKU level.",
    realityH2: "On-hand value, COGS, and the GL disagree by month-end.",
    realityLead:
      "Freight and duty land weeks late, standard costs drift from actuals, and returns re-add inventory nobody revalues.",
    capabilities: [
      {
        title: "ASC 330 inventory valuation",
        desc:
          "Aleq maintains a perpetual inventory subledger — raw, WIP, and finished goods — valued at standard or weighted-average, with lower-of-cost-or-NRV write-downs posted automatically.",
      },
      {
        title: "Landed cost rolled into the unit",
        desc:
          "Freight, duty, insurance, and broker fees are captured from supplier and customs invoices and capitalized into unit cost — so COGS reflects true landed cost, not just the PO.",
      },
      {
        title: "COGS relieved on every shipment",
        desc:
          "Each fulfillment relieves inventory and recognizes COGS in the same entry, matched to the revenue it earned. Returns reverse the entry and re-value the restocked unit.",
      },
      {
        title: "Standard costing with variances",
        desc:
          "Purchase-price and usage variances against standard are isolated, posted, and reported, so you see where the model and the warehouse diverge.",
      },
      {
        title: "Gross margin at the SKU",
        desc:
          "Revenue, landed COGS, and returns roll up to gross margin by SKU, channel, and period — derived from the ledger, current to the last shipment.",
      },
    ],
    standards: [
      "ASC 330 (inventory)",
      "Perpetual inventory subledger",
      "Landed cost / capitalization",
      "Standard costing",
      "Lower of cost or NRV",
      "Sales returns & allowances",
    ],
    metrics: [
      { v: "Gross margin", l: "By SKU and channel, from the GL" },
      { v: "Inventory turns", l: "On perpetual on-hand value" },
      { v: "On-hand $", l: "Reconciled to the warehouse nightly" },
      { v: "$0.00", l: "COGS-to-shipment variance" },
    ],
    ctaH2: "Closing on a quarter-end inventory estimate?",
    ctaLead:
      "Connect your warehouse and supplier feeds read-only. In 48 hours Aleq rebuilds the perpetual subledger and ties on-hand value to the GL, signed.",
    note: "synced from your 3PL & customs feeds · ties to the ledger",
    statcap: "perpetual inventory · valued from the ledger",
    heroCard: {
      head: "Perpetual inventory · live",
      rows: [
        { acct: "On-hand inventory value", val: "$4,210,000" },
        { acct: "Landed cost in transit", sub: "freight + duty, capitalized", val: "$312,000" },
        { acct: "COGS this month", val: "$1,840,000" },
        { acct: "Gross margin", val: "41.2%" },
      ],
      footK: "Relieved on shipment · ties to the GL",
      ok: "reconciled",
    },
    kpis: [
      { v: "41.2", u: "%", l: "Gross margin", sub: "by SKU, from the GL" },
      { v: "6.4", u: "x", l: "Inventory turns", sub: "on perpetual on-hand" },
      { v: "$4.21", u: "M", l: "On-hand value", sub: "reconciled nightly" },
      { v: "$0.00", l: "COGS-to-shipment variance", sub: "subledger ties to the GL" },
    ],
    stackToday: ["3PL / WMS", "Supplier invoices", "Excel cost roll", "NetSuite", "quarter-end count"],
    worked: {
      eyebrow: "How it works",
      h: "A container lands. The cost rolls into the unit.",
      sub: "Freight and duty arrive weeks after the goods, so standard cost drifts and margin becomes a guess. Aleq captures landed cost from the customs invoice and rolls it into the unit before the first sale.",
      head: "Landed cost · PO-4471 · 1,200 units",
      steps: [
        {
          k: "Read · PO + customs invoice",
          h: "Captured every cost to the dock",
          kv: [
            { k: "Goods (FOB)", v: "$96,000" },
            { k: "Freight + duty", v: "$14,400" },
            { k: "Broker + insurance", v: "$2,400" },
          ],
        },
        {
          k: "Capitalized · into unit cost",
          h: "Rolled landed cost into the SKU",
          kv: [
            { k: "Total landed cost", v: "$112,800" },
            { k: "Per-unit cost", v: "$94.00" },
            { k: "Method", v: "weighted-average" },
          ],
        },
        {
          k: "Booked · on shipment",
          h: "COGS relieved at true landed cost",
          je: [
            { side: "dr", acct: "Cost of goods sold", sub: "300 units shipped", val: "$28,200" },
            { side: "cr", acct: "Inventory", sub: "300 × $94.00", val: "$28,200" },
          ],
          balK: "Relieved at landed cost · margin true",
          ok: "posted",
        },
      ],
    },
    field: {
      quote:
        "Inventory lives in the 3PL, freight and duty hit on supplier invoices weeks later, and standard cost drifts from actuals. The margin we report is a quarter-end estimate.",
      who: "Controller · direct-to-consumer hardware brand",
      answer:
        "Aleq captures landed cost from the customs invoice, rolls it into unit cost, and relieves COGS on every shipment — so on-hand value and gross margin are right to the last unit, not the last physical count.",
      stack: ["3PL / WMS", "Supplier invoices", "Excel", "NetSuite", "quarter-end count"],
    },
    standardLinks: [{ label: "ASC 842 · Equipment leases", href: "/standards/asc842" }],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "Inventory is the hard part for physical goods — but Aleq is the whole ledger, from the PO to the bank line.",
    breadth: [
      { label: "Three-way match · AP", desc: "PO, receipt, and bill matched before a dollar is paid.", href: "/work/ap", img: "/screens/three-way-match.png" },
      { label: "Bank reconciliation", desc: "Deposits, card settlements, and payouts matched nightly.", href: "/work/reconciliation", img: "/screens/reconciliation.png" },
      { label: "Order-to-cash · AR", desc: "Invoices, receipts, and collections on the ledger.", href: "/work/collections", img: "/screens/ar.png" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close", img: "/screens/close.png" },
      { label: "Equipment & warehouse leases", desc: "ROU asset and lease liability, derived under ASC 842.", href: "/standards/asc842", img: "/screens/fixed-assets.png" },
      { label: "Multi-entity", desc: "Brands and channels consolidated into one close.", href: "/work/multi-entity", img: "/screens/consolidation.png" },
      { label: "Sales-tax & nexus", desc: "Nexus watched, the provision kept current.", href: "/work/tax", img: "/screens/tax.png" },
      { label: "General ledger", desc: "Every entry traceable, always balanced.", href: "/work/general-ledger", img: "/screens/dashboard.png" },
    ],
  },

  marketplaces: {
    slug: "marketplaces",
    name: "Marketplaces",
    eyebrow: "for marketplaces & platforms",
    h1: "Millions of payouts. One ledger that reconciles them to zero.",
    lead:
      "Aleq is the books for marketplaces — it makes the principal-versus-agent call under ASC 606, recognizes GMV gross or net correctly, and reconciles high-volume payouts, splits, and processor fees down to $0.00.",
    realityH2: "GMV looks like revenue until the auditor asks gross or net.",
    realityLead:
      "Fees come off the top, payouts settle on their own clock, and at your volume no one ties them to the bank by hand.",
    capabilities: [
      {
        title: "Principal vs. agent, decided per flow",
        desc:
          "Aleq evaluates control under ASC 606 for each transaction type and recognizes revenue gross or net accordingly — take rate as agent, full GMV as principal — with the basis documented.",
      },
      {
        title: "GMV recognized correctly, not as revenue",
        desc:
          "Gross merchandise value, platform revenue, and seller liabilities are separated into distinct ledger accounts, so GMV never masquerades as the top line.",
      },
      {
        title: "Splits & processor fees, transaction-level",
        desc:
          "Every split between platform and seller, and every Stripe/Adyen processing fee, is recorded against the right party so net revenue and seller payables are exact.",
      },
      {
        title: "Payouts reconciled at scale",
        desc:
          "High-volume payouts and settlements are matched to bank movements in bulk and reconciled to the cent — millions of transactions resolved to $0.00 overnight.",
      },
      {
        title: "Seller liabilities & reserves",
        desc:
          "Amounts owed to sellers, holdbacks, and reserves are tracked as liabilities and released on schedule, so the platform never books another party's money as its own.",
      },
    ],
    standards: [
      "Principal-vs-agent analysis",
      "Payout / settlement subledger",
      "Processor fee accounting",
      "Seller liabilities & reserves",
      "Chargeback & refund handling",
    ],
    metrics: [
      { v: "Take rate", l: "Net revenue over GMV, from the GL" },
      { v: "$0.00", l: "Payout volume reconciled to the cent" },
      { v: "GMV vs. rev", l: "Cleanly separated, never conflated" },
      { v: "100%", l: "Settlements traced to a bank line" },
    ],
    ctaH2: "Reconciling payouts by spreadsheet?",
    ctaLead:
      "Connect your processor and bank read-only. In 48 hours Aleq reconciles a settlement period to $0.00 and shows the gross-vs-net basis, signed.",
    note: "synced from Stripe/Adyen & your bank · ties to the ledger",
    statcap: "platform revenue · separated from GMV",
    heroCard: {
      head: "Settlement · live",
      rows: [
        { acct: "GMV processed", val: "$1,240,000" },
        { acct: "Take rate", sub: "agent — recognized net", val: "12%" },
        { acct: "Platform revenue", val: "$148,800" },
        { acct: "Seller liabilities", val: "$1,082,400" },
      ],
      footK: "Payouts reconciled to $0.00 · nightly",
      ok: "reconciled",
    },
    kpis: [
      { v: "12", u: "%", l: "Take rate", sub: "net revenue over GMV" },
      { v: "$0.00", l: "Payout variance", sub: "reconciled to the cent" },
      { v: "100", u: "%", l: "Settlements traced", sub: "to a bank line" },
      { v: "$1.08", u: "M", l: "Seller liabilities", sub: "released on schedule" },
    ],
    stackToday: ["Stripe / Adyen", "Payout CSVs", "Excel splits", "NetSuite", "by hand"],
    worked: {
      eyebrow: "How it works",
      h: "A transaction settles. Principal or agent, decided.",
      sub: "Treating GMV as revenue overstates the top line; getting principal-versus-agent wrong restates it. Aleq makes the call per flow and books only what the platform actually earns.",
      head: "Booking · order #88231",
      steps: [
        {
          k: "Read · the transaction",
          h: "Split the flow into its parts",
          kv: [
            { k: "Gross merchandise value", v: "$620.00" },
            { k: "Seller share", v: "$545.60" },
            { k: "Processor fee", v: "$18.40" },
          ],
        },
        {
          k: "Tested · ASC 606 control",
          h: "Ran the principal-vs-agent test",
          kv: [
            { k: "Controls the service?", v: "no — the seller does" },
            { k: "Sets the price?", v: "no" },
            { k: "Conclusion", v: "agent · recognize net" },
          ],
        },
        {
          k: "Booked · net + seller liability",
          h: "Only the take rate hits revenue",
          je: [
            { side: "dr", acct: "Cash", val: "$620.00" },
            { side: "cr", acct: "Seller payable", val: "$545.60" },
            { side: "cr", acct: "Platform revenue", sub: "take rate, net", val: "$56.00" },
            { side: "cr", acct: "Processor fee clearing", val: "$18.40" },
          ],
          balK: "GMV never booked as revenue",
          ok: "posted",
        },
      ],
    },
    field: {
      quote:
        "Money flows in, gets split between sellers and the platform, fees come off the top, and payouts settle on their own schedule. At our volume no one can tie payouts to the bank by hand.",
      who: "Finance lead · two-sided marketplace",
      answer:
        "Aleq makes the principal-versus-agent call per flow, books only the take rate as revenue, tracks seller liabilities as it owes them, and reconciles the whole payout stream to the bank to $0.00 overnight.",
      stack: ["Stripe / Adyen", "Payout CSVs", "Excel", "NetSuite", "by hand"],
    },
    standardLinks: [{ label: "ASC 606 · Gross vs net", href: "/standards/asc606" }],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "The payout flow is the hard part for marketplaces — but Aleq is the whole ledger behind it, buyer to seller to bank.",
    breadth: [
      { label: "Payouts reconciled at scale", desc: "Millions of settlements matched to the bank, to the cent.", href: "/work/reconciliation", img: "/screens/payouts.png" },
      { label: "Seller payables & reserves", desc: "What you owe sellers, tracked and released on schedule.", href: "/work/ap", img: "/screens/bills.png" },
      { label: "Revenue · gross vs net", desc: "Principal-vs-agent decided per flow, under ASC 606.", href: "/standards/asc606", img: "/screens/revenue.png" },
      { label: "Buyer collections & disputes", desc: "Receivables, chargebacks, and refunds on the ledger.", href: "/work/collections", img: "/screens/ar.png" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close", img: "/screens/close.png" },
      { label: "Multi-entity & FX", desc: "Cross-border settlements translated and consolidated.", href: "/work/multi-entity", img: "/screens/consolidation.png" },
      { label: "Sales-tax & facilitator", desc: "Marketplace-facilitator obligations watched and filed.", href: "/work/tax", img: "/screens/tax.png" },
      { label: "General ledger", desc: "Every split traceable, always balanced.", href: "/work/general-ledger", img: "/screens/dashboard.png" },
    ],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare & RCM",
    eyebrow: "for healthcare & revenue cycle",
    h1: "The claim is the contract. Aleq is the ledger that knows it.",
    lead:
      "Aleq is the books for healthcare providers — it recognizes net patient revenue from 837 claims and 835 remittances, posts contractual adjustments under ASC 606, and keeps the revenue cycle tied to the general ledger.",
    realityH2: "Gross charges aren't revenue, and the write-offs hide the truth.",
    realityLead:
      "Remittances land weeks later with contractual adjustments and denials, and net revenue stays an allowance estimate until the 835 posts.",
    capabilities: [
      {
        title: "835 / 837 recognized as net revenue",
        desc:
          "Aleq reads 837 claims and 835 remittance advice, posts revenue net of expected contractual adjustments under ASC 606, and trues up to actual cash as remittances settle.",
      },
      {
        title: "Contractual adjustments, by payer",
        desc:
          "The gap between charge-master and contracted rate is booked as a contractual allowance per payer contract — not buried in a single write-off line.",
      },
      {
        title: "The revenue cycle on the ledger",
        desc:
          "Charge, claim, remittance, adjustment, and patient balance each post in sequence, so A/R reflects exactly where every dollar sits in the cycle.",
      },
      {
        title: "Payer mix & denials tracked",
        desc:
          "Revenue and A/R are split by payer and denial reason, so net collection rate and denial trends are derived straight from the posted ledger.",
      },
      {
        title: "Bad-debt & allowances posted",
        desc:
          "Implicit price concessions and bad-debt allowances are estimated from collection history and posted automatically, then reconciled as accounts resolve.",
      },
    ],
    standards: [
      "837 claims / 835 remittance",
      "Contractual allowances",
      "Implicit price concession",
      "Allowance for bad debt",
      "Payer A/R subledger",
    ],
    metrics: [
      { v: "Net collection", l: "Cash over net revenue, from the GL" },
      { v: "Days in A/R", l: "Aged by payer, current daily" },
      { v: "Denial rate", l: "By reason, traced to the 835" },
      { v: "$0.00", l: "Remittance-to-bank variance" },
    ],
    ctaH2: "Booking revenue off charges, not remittances?",
    ctaLead:
      "Connect your clearinghouse and bank read-only. In 48 hours Aleq re-recognizes a period from the 835s and ties net revenue to the GL, signed.",
    note: "synced from your clearinghouse · 837 / 835 · ties to the ledger",
    statcap: "net patient revenue · recognized from remittances",
    heroCard: {
      head: "Net patient revenue · live",
      rows: [
        { acct: "Gross charges", val: "$840,000" },
        { acct: "Contractual allowances", sub: "estimated by payer", val: "$(512,000)", neg: true },
        { acct: "Net patient revenue", val: "$328,000" },
        { acct: "Net collection rate", val: "96.4%" },
      ],
      footK: "Net of the constraint · ties to the GL",
      ok: "on schedule",
    },
    kpis: [
      { v: "96.4", u: "%", l: "Net collection rate", sub: "cash over net revenue" },
      { v: "38", l: "Days in A/R", sub: "aged by payer, daily" },
      { v: "6.2", u: "%", l: "Denial rate", sub: "by reason, from the 835" },
      { v: "$0.00", l: "Remittance-to-bank variance", sub: "ties to the GL" },
    ],
    stackToday: ["Clearinghouse", "837 / 835 files", "Excel allowance", "NetSuite", "by hand"],
    worked: {
      eyebrow: "How it works",
      h: "An 835 posts. Net revenue, trued up.",
      sub: "Claims go out at charge-master rates no payer pays; remittances come back days later with adjustments and denials. Aleq books revenue net of the expected adjustment, then trues up to cash as the 835 settles.",
      head: "Remittance · 835 · commercial payer",
      steps: [
        {
          k: "Read · 837 claim + 835 remittance",
          h: "Matched the claim to the remittance",
          kv: [
            { k: "Gross charge", v: "$4,200" },
            { k: "Contracted rate", v: "$2,560" },
            { k: "Denied lines", v: "none" },
          ],
        },
        {
          k: "Allowed · contractual adjustment",
          h: "Booked the allowance by payer",
          kv: [
            { k: "Contractual allowance", v: "$(1,640)" },
            { k: "Patient responsibility", v: "$410" },
            { k: "Expected payer payment", v: "$2,150" },
          ],
        },
        {
          k: "Booked · net revenue + true-up",
          h: "Recognized net of the constraint",
          je: [
            { side: "dr", acct: "Cash", val: "$2,150" },
            { side: "dr", acct: "Patient A/R", val: "$410" },
            { side: "dr", acct: "Contractual allowance", val: "$1,640" },
            { side: "cr", acct: "Patient service revenue", sub: "gross charge", val: "$4,200" },
          ],
          balK: "Net of the constraint · trued to cash",
          ok: "posted",
        },
      ],
    },
    field: {
      quote:
        "Claims go out at charge-master rates no payer pays. Net revenue is an allowance estimate until the 835 posts, and bad debt builds in the gap.",
      who: "Revenue-cycle director · multi-site provider group",
      answer:
        "Aleq ingests the 837s and 835s, books revenue net of the expected contractual adjustment per payer, ages A/R against the payer that owes it, and trues up to actual cash as remittances settle.",
      stack: ["Clearinghouse", "837 / 835", "Excel", "NetSuite", "by hand"],
    },
    standardLinks: [{ label: "ASC 606 · Net patient revenue", href: "/standards/asc606" }],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "The revenue cycle is the hard part in healthcare — but Aleq is the whole ledger behind it, from the claim to the bank.",
    breadth: [
      { label: "Payer A/R aging", desc: "Receivables aged by payer and denial reason.", href: "/work/collections", img: "/screens/ar.png" },
      { label: "Bank reconciliation", desc: "Remittances and deposits matched to the bank, nightly.", href: "/work/reconciliation", img: "/screens/reconciliation.png" },
      { label: "Revenue · net of constraint", desc: "Net patient revenue recognized under ASC 606.", href: "/standards/asc606", img: "/screens/revenue.png" },
      { label: "Bills & vendor pay", desc: "Supplies, locums, and vendors paid on approval.", href: "/work/ap", img: "/screens/bills.png" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close", img: "/screens/close.png" },
      { label: "Multi-entity", desc: "Sites and clinics consolidated into one close.", href: "/work/multi-entity", img: "/screens/consolidation.png" },
      { label: "Tax & provision", desc: "Filings watched, the provision kept current.", href: "/work/tax", img: "/screens/tax.png" },
      { label: "General ledger", desc: "Every claim traceable, always balanced.", href: "/work/general-ledger", img: "/screens/dashboard.png" },
    ],
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    eyebrow: "for manufacturing",
    h1: "Inventory, reconciled to the penny.",
    lead:
      "Every PO matched, every cost landed, the subledger tied to the GL.",
    realityH2: "The PO, the receipt, and the bill never quite agree.",
    realityLead:
      "Freight strands in expense, WIP is a quarter-end guess, and chargebacks vanish as write-offs.",
    capabilities: [
      { title: "Three-way match", desc: "PO, receipt, bill — matched. Breaks flagged, not buried in COGS." },
      { title: "WIP, stage by stage", desc: "Cost follows production. The rollforward always ties." },
      { title: "Landed cost in the unit", desc: "Freight and duty in the SKU cost — not an expense line." },
      { title: "COGS on shipment", desc: "WIP relieves to finished goods; COGS books per order." },
      { title: "Chargebacks, coded", desc: "Retailer deductions coded to the order, never written off." },
    ],
    standards: [
      "ASC 330 (inventory & WIP)",
      "Three-way match (PO · receipt · bill)",
      "Landed cost allocation",
      "WIP rollforward",
      "Standard / actual costing",
      "Retailer chargebacks",
    ],
    metrics: [
      { v: "Inventory", l: "Subledger ties to the GL, daily" },
      { v: "WIP value", l: "By order and stage, current" },
      { v: "Landed cost", l: "In the unit cost, not expense" },
      { v: "$0.00", l: "Three-way-match exceptions, cleared" },
    ],
    ctaH2: "POs, receipts, and bills that never tie?",
    ctaLead:
      "Connect your ERP, WMS, and bank read-only. In 48 hours: a closed period — matched, landed, reconciled.",
    note: "synced from your ERP / WMS · ties to the ledger",
    statcap: "inventory & WIP · costed from the ledger",
    runsShot: "/screens/runs.png",
    heroCard: {
      head: "Inventory on hand · live",
      rows: [
        { acct: "Raw materials", val: "$1,180,000", pct: 29 },
        { acct: "Work-in-process", sub: "cut · sew · finish", val: "$640,000", pct: 16 },
        { acct: "Finished goods", val: "$2,210,000", pct: 55 },
      ],
      footK: "Total · ties to the GL",
      footV: "$4,030,000",
    },
    kpis: [
      { v: "$4.03", u: "M", l: "Inventory on hand", sub: "raw · WIP · finished, from the GL" },
      { v: "$640", u: "K", l: "WIP value", sub: "by order and stage, daily" },
      { v: "3-way", l: "PO · receipt · bill", sub: "matched, exceptions coded" },
      { v: "$0.00", l: "Subledger-to-GL variance", sub: "inventory ties out" },
    ],
    stackToday: ["ERP / WMS", "Receiving logs", "Excel landed cost", "NetSuite", "quarter-end count"],
    worked: {
      eyebrow: "How it works",
      h: "A bill comes in over the PO. Aleq catches it.",
      sub: "PO says one price, the bill says another. Aleq matches all three and codes the gap — not into COGS.",
      head: "Three-way match · PO-4471",
      steps: [
        {
          k: "Read · PO vs bill",
          h: "12,000 yd received in full",
          kv: [
            { k: "Purchase order", v: "12,000 yd @ $4.10 = $49,200" },
            { k: "Vendor bill", v: "12,000 yd @ $4.50 = $54,000" },
          ],
        },
        {
          k: "Booked · price break isolated",
          h: "Inventory at PO, AP at the bill",
          je: [
            { side: "dr", acct: "Raw materials inventory", val: "$49,200" },
            { side: "dr", acct: "Purchase price variance", val: "$4,800" },
            { side: "cr", acct: "Accounts payable", val: "$54,000" },
          ],
          balK: "Price coded to PPV · held for sign-off",
          ok: "matched",
        },
      ],
    },
    field: {
      quote:
        "We cut a PO, the goods show up, the vendor bills — and the three never match. Freight lands in its own expense account, and when a retailer takes a chargeback we just write it off, because no one can tie it back. Inventory on the books is a quarter-end guess.",
      who: "Controller · consumer-goods manufacturer",
      answer:
        "Aleq three-way-matches every PO, receipt, and bill, lands freight and duty into the unit cost, and codes each retailer chargeback to the order it hit — so the inventory subledger ties to the GL daily and every variance carries a reason.",
      stack: ["ERP / WMS", "Receiving logs", "Excel", "NetSuite", "quarter-end count"],
    },
    standardLinks: [
      { label: "ASC 330 · Inventory & WIP", href: "/work/general-ledger" },
      { label: "ASC 842 · Plant & equipment", href: "/standards/asc842" },
    ],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "Inventory and WIP are the hard part in manufacturing — but Aleq is the whole ledger around them, from the raw-material PO to the retailer remittance.",
    breadth: [
      { label: "Procurement · three-way match", desc: "POs matched to receipt and bill, AP posted on a clean match.", href: "/work/ap", img: "/screens/three-way-match.png" },
      { label: "Landed cost allocation", desc: "Freight and duty prorated into the unit cost of every SKU.", href: "/work/general-ledger", img: "/screens/landed-cost.png" },
      { label: "WIP & finished goods", desc: "Cost carried stage to stage, relieved to FG on completion.", href: "/work/general-ledger", img: "/screens/wip.png" },
      { label: "Order-to-cash · AR", desc: "Brand and retailer invoices, receipts, and deductions coded to margin.", href: "/work/collections", img: "/screens/ar.png" },
      { label: "Bank reconciliation", desc: "Supplier payments and customer remittances matched, nightly.", href: "/work/reconciliation", img: "/screens/reconciliation.png" },
      { label: "Continuous close", desc: "WIP rollforward and inventory sealed, day by day.", href: "/work/close", img: "/screens/close.png" },
      { label: "Plant & equipment leases", desc: "ROU and lease liability, derived under ASC 842.", href: "/standards/asc842", img: "/screens/fixed-assets.png" },
      { label: "Multi-entity & FX", desc: "Plants and warehouses consolidated, currencies translated.", href: "/work/multi-entity", img: "/screens/consolidation.png" },
    ],
    faqs: [
      { q: "Do we keep our ERP and WMS?", a: "Yes. Aleq connects to them read-only and replaces the GL and the manual close on top — your floor systems don't change." },
      { q: "What happens when a PO, receipt, and bill don't match?", a: "Nothing posts silently. Aleq books inventory at the PO, isolates the variance to its own account, and raises an exception for sign-off." },
      { q: "How is inventory costed?", a: "At landed cost — freight and duty in the unit cost — relieved to COGS per order on shipment, FIFO or average to your policy." },
      { q: "How long to stand up?", a: "48 hours. On read-only credentials Aleq three-way-matches a closed period, lands the freight, and rebuilds WIP — signed and replayable." },
    ],
  },

  proservices: {
    slug: "proservices",
    name: "Professional services",
    eyebrow: "for professional services",
    h1: "Revenue is earned by the hour. Aleq is the ledger that recognizes it.",
    lead:
      "Aleq is the books for services firms — it recognizes project revenue over time under ASC 606, carries unbilled WIP off time entries, and ties utilization, realization, and project margin back to a sealed ledger.",
    realityH2: "Time is logged, but revenue and WIP are a month-end reconstruction.",
    realityLead:
      "Revenue earned, amounts billed, and unbilled WIP never agree, and project margin is known only after the engagement ends.",
    capabilities: [
      {
        title: "Over-time recognition under 606",
        desc:
          "Aleq recognizes project revenue over time using percentage-of-completion (cost-to-cost or hours), so revenue tracks delivery — not the invoice schedule.",
      },
      {
        title: "Unbilled WIP off time entries",
        desc:
          "Hours logged against a project accrue as unbilled WIP and contract assets, then relieve as invoices are raised — so earned-but-unbilled revenue is always visible.",
      },
      {
        title: "T&M and fixed-fee, handled distinctly",
        desc:
          "Time-and-materials engagements recognize as delivered and billed; fixed-fee projects recognize on completion measure with budget-to-actual tracked against the estimate.",
      },
      {
        title: "Utilization & realization derived",
        desc:
          "Billable, non-billable, and realized hours are tracked against capacity, so utilization and realization come straight from the same ledger as revenue.",
      },
      {
        title: "Project margin by engagement",
        desc:
          "Recognized revenue, labor cost, and pass-through expenses roll into margin per project and per client — current to the last approved timesheet.",
      },
    ],
    standards: [
      "Percentage-of-completion",
      "Unbilled WIP / contract assets",
      "T&M vs. fixed-fee",
      "Project cost subledger",
      "Deferred & unearned revenue",
    ],
    metrics: [
      { v: "Utilization", l: "Billable over capacity, from the GL" },
      { v: "Realization", l: "Realized over standard rate" },
      { v: "Unbilled WIP", l: "Earned, not yet invoiced — current" },
      { v: "Project margin", l: "By engagement, daily" },
    ],
    ctaH2: "Rebuilding WIP every month-end?",
    ctaLead:
      "Connect your PSA and bank read-only. In 48 hours Aleq recognizes a period over time and shows unbilled WIP by engagement, signed.",
    note: "synced from your PSA & time entries · ties to the ledger",
    statcap: "project revenue · recognized over time",
    heroCard: {
      head: "Project revenue · live",
      rows: [
        { acct: "Recognized this month", sub: "over time, as delivered", val: "$412,000" },
        { acct: "Unbilled WIP", val: "$186,400" },
        { acct: "Utilization", val: "74%" },
        { acct: "Project margin", val: "38.5%" },
      ],
      footK: "Recognized as delivered · ties to the GL",
      ok: "on schedule",
    },
    kpis: [
      { v: "74", u: "%", l: "Utilization", sub: "billable over capacity" },
      { v: "91", u: "%", l: "Realization", sub: "realized over standard rate" },
      { v: "$186", u: "K", l: "Unbilled WIP", sub: "earned, not yet invoiced" },
      { v: "38.5", u: "%", l: "Project margin", sub: "by engagement, daily" },
    ],
    stackToday: ["PSA / time tracker", "Excel % complete", "Billing tool", "NetSuite", "month-end rebuild"],
    worked: {
      eyebrow: "How it works",
      h: "Hours are logged. Revenue recognized over time.",
      sub: "Earned revenue, amounts billed, and unbilled WIP rarely agree until someone rebuilds them at close. Aleq recognizes as the work is delivered and keeps WIP current to the last approved timesheet.",
      head: "Engagement · ENG-540 · fixed fee",
      steps: [
        {
          k: "Read · approved time entries",
          h: "Pulled delivery against the budget",
          kv: [
            { k: "Contract price", v: "$420,000" },
            { k: "Budgeted cost", v: "$260,000" },
            { k: "Cost incurred to date", v: "$161,200" },
          ],
        },
        {
          k: "Measured · cost-to-cost",
          h: "Computed percent complete",
          kv: [
            { k: "Percent complete", v: "62%" },
            { k: "Revenue earned to date", v: "$260,400" },
            { k: "Recognized in prior periods", v: "$218,400" },
          ],
        },
        {
          k: "Booked · over-time recognition",
          h: "This period's earned revenue",
          je: [
            { side: "dr", acct: "Unbilled WIP", sub: "contract asset", val: "$42,000" },
            { side: "cr", acct: "Project revenue", val: "$42,000" },
          ],
          balK: "Recognized as delivered · WIP current",
          ok: "posted",
        },
      ],
    },
    field: {
      quote:
        "Consultants log hours, fixed-fee projects burn against budget, and T&M invoices on its own cycle. Revenue earned, billed, and unbilled WIP never agree until someone rebuilds them at close.",
      who: "Controller · professional-services firm",
      answer:
        "Aleq recognizes project revenue over time from approved time entries, accrues unbilled WIP as a contract asset, and ties utilization, realization, and project margin to the same ledger — current to the last timesheet.",
      stack: ["PSA", "Excel % complete", "Billing", "NetSuite", "month-end rebuild"],
    },
    standardLinks: [
      { label: "ASC 606 · Over-time", href: "/standards/asc606" },
      { label: "ASC 340 · Commissions", href: "/standards/asc340" },
    ],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "Recognition is the hard part for services firms — but Aleq is the whole ledger, from the timesheet to the bank.",
    breadth: [
      { label: "Billing & AR", desc: "Invoices, receipts, and collections on the ledger.", href: "/work/collections", img: "/screens/ar.png" },
      { label: "Bank reconciliation", desc: "Deposits and payments matched to the bank, nightly.", href: "/work/reconciliation", img: "/screens/reconciliation.png" },
      { label: "Revenue · over time", desc: "Project revenue recognized under ASC 606.", href: "/standards/asc606", img: "/screens/revenue.png" },
      { label: "Expenses & vendor pay", desc: "Subcontractors, T&E, and pass-throughs paid on approval.", href: "/work/ap", img: "/screens/bills.png" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close", img: "/screens/close.png" },
      { label: "Commissions · ASC 340", desc: "Sales commissions capitalized and amortized.", href: "/standards/asc340", img: "/screens/commissions.png" },
      { label: "Multi-entity", desc: "Offices and entities consolidated into one close.", href: "/work/multi-entity", img: "/screens/consolidation.png" },
      { label: "General ledger", desc: "Every hour traceable, always balanced.", href: "/work/general-ledger", img: "/screens/dashboard.png" },
    ],
  },
};

export const INDUSTRY_ORDER = [
  "saas",
  "hardware",
  "marketplaces",
  "healthcare",
  "manufacturing",
  "proservices",
];
