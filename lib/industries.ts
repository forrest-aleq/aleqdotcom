// Industry data. One source of truth → every /industries/* page is ~5 lines.
// Positioning spine: Aleq IS the books — the system of record that also does the
// work, powered by TAMi. 48h on-ramp on read-only credentials, then it's the record.
// Every industry speaks its own standards, subledgers, and metrics — no generic filler.

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
      "ASC 606",
      "Deferred revenue subledger",
      "Contract assets & liabilities",
      "ASC 340-40 (commissions)",
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
      "ASC 606 (gross vs. net)",
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
      "ASC 606 (net patient revenue)",
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
      "ASC 606 (over-time)",
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
