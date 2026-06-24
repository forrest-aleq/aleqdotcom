// Industry data. One source of truth → every /industries/* page is ~5 lines.
// Positioning spine: Aleq IS the books — the system of record that also does the
// work, powered by TAMi. 48h on-ramp on read-only credentials, then it's the record.
// Every industry speaks its own standards, subledgers, and metrics — no generic filler.

export type KV = { k: string; v: string };
export type JeLine = { side: "dr" | "cr"; acct: string; sub?: string; val: string };
export type CardRow = { acct: string; sub?: string; val: string; neg?: boolean };

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
  breadth?: { label: string; desc: string; href: string }[];
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
      "Your contracts sit in Stripe or Recurly, the performance obligations live in a deferred-revenue tab, and someone reconciles the two by hand every month-end. Usage-based lines get true-ed up late, mid-term upgrades break the waterfall, and the ARR you report to the board never quite ties to the GL. Aleq collapses that into one ledger that recognizes as it bills.",
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
      "Revenue is the hard part for SaaS — but Aleq is the whole ledger. The same engine reconciles the processor, pays the bills, and closes the month.",
    breadth: [
      { label: "Stripe & bank recon", desc: "Charges, refunds, fees, and payouts matched to the bank to $0.00, nightly.", href: "/work/reconciliation" },
      { label: "Cash application", desc: "Lockbox and ACH receipts applied to the right subscription, then posted.", href: "/work/collections" },
      { label: "Bills & vendor pay", desc: "AWS, contractors, and SaaS spend captured, matched, and paid on approval.", href: "/work/ap" },
      { label: "Continuous close", desc: "Accruals, deferrals, and the month sealed — day by day, not in a crunch.", href: "/work/close" },
      { label: "Stock comp · ASC 718", desc: "Grants from the cap table, expensed over the service period.", href: "/standards/asc718" },
      { label: "Commissions · ASC 340", desc: "Sales commissions capitalized and amortized over the benefit.", href: "/standards/asc340" },
      { label: "Multi-entity", desc: "Parent and subs consolidated, intercompany eliminated, one close.", href: "/work/multi-entity" },
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
      "Inventory lives in a warehouse or 3PL system, freight and duty arrive on supplier invoices weeks later, and standard costs drift from actuals. Returns re-add inventory nobody re-values, and the margin you report is a quarter-end estimate. Aleq keeps the perpetual inventory subledger and the GL in lockstep, shipment by shipment.",
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
      { label: "Three-way match · AP", desc: "PO, receipt, and bill matched before a dollar is paid.", href: "/work/ap" },
      { label: "Bank reconciliation", desc: "Deposits, card settlements, and payouts matched nightly.", href: "/work/reconciliation" },
      { label: "Order-to-cash · AR", desc: "Invoices, receipts, and collections on the ledger.", href: "/work/collections" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close" },
      { label: "Equipment & warehouse leases", desc: "ROU asset and lease liability, derived under ASC 842.", href: "/standards/asc842" },
      { label: "Multi-entity", desc: "Brands and channels consolidated into one close.", href: "/work/multi-entity" },
      { label: "Sales-tax & nexus", desc: "Nexus watched, the provision kept current.", href: "/work/tax" },
      { label: "General ledger", desc: "Every entry traceable, always balanced.", href: "/work/general-ledger" },
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
      "Money flows in, gets split between sellers and the platform, processor fees come off the top, and payouts settle on their own schedule. Treating GMV as revenue overstates the top line; getting principal-versus-agent wrong restates it. At your volume, no one can tie payouts to the bank by hand. Aleq makes the call per transaction and reconciles the whole flow nightly.",
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
      { label: "Payouts reconciled at scale", desc: "Millions of settlements matched to the bank, to the cent.", href: "/work/reconciliation" },
      { label: "Seller payables & reserves", desc: "What you owe sellers, tracked and released on schedule.", href: "/work/ap" },
      { label: "Revenue · gross vs net", desc: "Principal-vs-agent decided per flow, under ASC 606.", href: "/standards/asc606" },
      { label: "Buyer collections & disputes", desc: "Receivables, chargebacks, and refunds on the ledger.", href: "/work/collections" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close" },
      { label: "Multi-entity & FX", desc: "Cross-border settlements translated and consolidated.", href: "/work/multi-entity" },
      { label: "Sales-tax & facilitator", desc: "Marketplace-facilitator obligations watched and filed.", href: "/work/tax" },
      { label: "General ledger", desc: "Every split traceable, always balanced.", href: "/work/general-ledger" },
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
      "Claims go out at charge-master rates no payer pays. Remittances come back days or weeks later with contractual adjustments, denials, and partial payments. Net revenue is an allowance estimate until the 835 posts, and bad-debt builds in the gap. Aleq ingests the 837s and 835s, books the right net revenue, and ages A/R against the payer that owes it.",
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
      { label: "Payer A/R aging", desc: "Receivables aged by payer and denial reason.", href: "/work/collections" },
      { label: "Bank reconciliation", desc: "Remittances and deposits matched to the bank, nightly.", href: "/work/reconciliation" },
      { label: "Revenue · net of constraint", desc: "Net patient revenue recognized under ASC 606.", href: "/standards/asc606" },
      { label: "Bills & vendor pay", desc: "Supplies, locums, and vendors paid on approval.", href: "/work/ap" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close" },
      { label: "Multi-entity", desc: "Sites and clinics consolidated into one close.", href: "/work/multi-entity" },
      { label: "Tax & provision", desc: "Filings watched, the provision kept current.", href: "/work/tax" },
      { label: "General ledger", desc: "Every claim traceable, always balanced.", href: "/work/general-ledger" },
    ],
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    eyebrow: "for manufacturing",
    h1: "The work order is where cost is born. Aleq is the ledger that tracks it.",
    lead:
      "Aleq is the books for manufacturers — it carries WIP through standard costing, isolates purchase-price, labor, and overhead variances, and relieves COGS off the bill of materials as each work order completes.",
    realityH2: "Standard cost drifts, and variances pile up in one mystery account.",
    realityLead:
      "Materials, labor, and overhead flow into work orders, but actuals diverge from standard the moment a price moves or a line runs slow. Variances accumulate in a catch-all that gets analyzed quarterly, if ever. WIP is a guess, and the margin you report is a roll-up of estimates. Aleq tracks cost from work order to finished good and posts each variance where it belongs.",
    capabilities: [
      {
        title: "WIP carried through the floor",
        desc:
          "Aleq maintains a work-in-process subledger by work order, accumulating material, labor, and applied overhead, then relieves it to finished goods on completion.",
      },
      {
        title: "Standard costing off the BOM",
        desc:
          "Each product is costed from its bill of materials and routing at standard, so issued materials and consumed labor value automatically against the engineered cost.",
      },
      {
        title: "Variances isolated and posted",
        desc:
          "Purchase-price (PPV), material-usage, labor-rate and efficiency, and overhead variances are each computed and posted to their own account — not a single mystery line.",
      },
      {
        title: "COGS relieved on completion",
        desc:
          "When a work order closes, finished-goods inventory is built and, on shipment, COGS is relieved at standard with variances flowing to the income statement.",
      },
      {
        title: "Gross margin you can trust",
        desc:
          "Standard COGS plus identified variances roll into gross margin by product line, so the margin you report reconciles to what the floor actually cost.",
      },
    ],
    standards: [
      "ASC 330 (inventory & WIP)",
      "Standard costing",
      "Bill of materials / routing",
      "PPV & usage variances",
      "Labor & overhead absorption",
      "Work-order subledger",
    ],
    metrics: [
      { v: "Gross margin", l: "By product line, from the GL" },
      { v: "WIP value", l: "By work order, current daily" },
      { v: "Variance", l: "PPV · labor · overhead, isolated" },
      { v: "$0.00", l: "Subledger-to-GL inventory variance" },
    ],
    ctaH2: "Analyzing variances a quarter too late?",
    ctaLead:
      "Connect your ERP and bank read-only. In 48 hours Aleq rebuilds WIP and posts a period's variances by type, signed.",
    note: "synced from your ERP & floor data · ties to the ledger",
    statcap: "work-in-process · costed from the ledger",
    heroCard: {
      head: "Work-in-process · live",
      rows: [
        { acct: "WIP balance", val: "$1,640,000" },
        { acct: "Standard COGS this month", val: "$2,210,000" },
        { acct: "Net variance", sub: "PPV · labor · overhead", val: "$(48,200)", neg: true },
        { acct: "Gross margin", val: "34.8%" },
      ],
      footK: "Relieved on completion · ties to the GL",
      ok: "reconciled",
    },
    kpis: [
      { v: "34.8", u: "%", l: "Gross margin", sub: "by product line, from the GL" },
      { v: "$1.64", u: "M", l: "WIP value", sub: "by work order, daily" },
      { v: "$48.2", u: "K", l: "Net variance", sub: "isolated by type" },
      { v: "$0.00", l: "Subledger-to-GL variance", sub: "inventory ties out" },
    ],
    stackToday: ["ERP / MES", "Routing sheets", "Excel variance", "NetSuite", "quarter-end"],
    worked: {
      eyebrow: "How it works",
      h: "A work order closes. Variances, isolated.",
      sub: "Actuals diverge from standard the moment a price moves or a line runs slow. Aleq costs each order off the BOM, builds finished goods, and posts every variance to its own account — not one catch-all line.",
      head: "Work order · WO-2261 · 500 units",
      steps: [
        {
          k: "Read · materials, labor, overhead",
          h: "Accumulated cost through the floor",
          kv: [
            { k: "Materials issued", v: "$182,000" },
            { k: "Labor logged", v: "$44,500" },
            { k: "Overhead applied", v: "$38,000" },
          ],
        },
        {
          k: "Costed · off the BOM at standard",
          h: "Compared actual to engineered cost",
          kv: [
            { k: "Standard cost", v: "$260,000" },
            { k: "Actual cost", v: "$264,500" },
            { k: "Total variance", v: "$(4,500)" },
          ],
        },
        {
          k: "Booked · finished goods + variances",
          h: "Each variance to its own account",
          je: [
            { side: "dr", acct: "Finished goods", sub: "500 × $520 standard", val: "$260,000" },
            { side: "dr", acct: "Material-usage variance", val: "$3,100" },
            { side: "dr", acct: "Labor-efficiency variance", val: "$1,400" },
            { side: "cr", acct: "Work-in-process", val: "$264,500" },
          ],
          balK: "Variances isolated · margin reconciles",
          ok: "posted",
        },
      ],
    },
    field: {
      quote:
        "Materials, labor, and overhead flow into work orders, but actuals diverge from standard the moment a price moves. Variances pile up in a catch-all we analyze quarterly, if ever.",
      who: "Cost accountant · contract manufacturer",
      answer:
        "Aleq carries WIP by work order, costs it off the bill of materials at standard, and posts purchase-price, usage, labor, and overhead variances each to its own account the day the order closes — so reported margin reconciles to the floor.",
      stack: ["ERP / MES", "Routing sheets", "Excel", "NetSuite", "quarter-end"],
    },
    standardLinks: [{ label: "ASC 842 · Plant & equipment", href: "/standards/asc842" }],
    breadthH: "And it runs the rest of your close, too.",
    breadthLead:
      "The cost roll is the hard part in manufacturing — but Aleq is the whole ledger around it, from the raw-material PO to the bank.",
    breadth: [
      { label: "Procurement · three-way match", desc: "Raw-material POs matched to receipt and bill.", href: "/work/ap" },
      { label: "Bank reconciliation", desc: "Deposits and payments matched to the bank, nightly.", href: "/work/reconciliation" },
      { label: "Order-to-cash · AR", desc: "Customer invoices, receipts, and collections.", href: "/work/collections" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close" },
      { label: "Plant & equipment leases", desc: "ROU and lease liability, derived under ASC 842.", href: "/standards/asc842" },
      { label: "Multi-entity", desc: "Plants and divisions consolidated into one close.", href: "/work/multi-entity" },
      { label: "Tax & provision", desc: "Filings watched, the provision kept current.", href: "/work/tax" },
      { label: "General ledger", desc: "Every cost traceable, always balanced.", href: "/work/general-ledger" },
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
      "Consultants log hours, fixed-fee projects burn against budget, and T&M work invoices on its own cycle. Revenue earned, amounts billed, and unbilled WIP rarely agree until someone rebuilds them at close. Percentage-of-completion is a spreadsheet, and project margin is known only after the engagement ends. Aleq recognizes as the work is delivered and keeps WIP current to the last time entry.",
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
      { label: "Billing & AR", desc: "Invoices, receipts, and collections on the ledger.", href: "/work/collections" },
      { label: "Bank reconciliation", desc: "Deposits and payments matched to the bank, nightly.", href: "/work/reconciliation" },
      { label: "Revenue · over time", desc: "Project revenue recognized under ASC 606.", href: "/standards/asc606" },
      { label: "Expenses & vendor pay", desc: "Subcontractors, T&E, and pass-throughs paid on approval.", href: "/work/ap" },
      { label: "Continuous close", desc: "Accruals and the month sealed, day by day.", href: "/work/close" },
      { label: "Commissions · ASC 340", desc: "Sales commissions capitalized and amortized.", href: "/standards/asc340" },
      { label: "Multi-entity", desc: "Offices and entities consolidated into one close.", href: "/work/multi-entity" },
      { label: "General ledger", desc: "Every hour traceable, always balanced.", href: "/work/general-ledger" },
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
