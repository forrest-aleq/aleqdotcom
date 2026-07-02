// Industry data. One source of truth → every /industries/* page is ~5 lines.
// Positioning spine: Aleq IS the books — the system of record that also does the
// work, powered by TAMi. 48h on-ramp on read-only credentials, then it's the record.
// Every industry speaks its own standards, subledgers, and metrics — no generic filler.

export type KV = { k: string; v: string };
export type JeLine = { side: "dr" | "cr"; acct: string; sub?: string; val: string };
export type CardRow = { acct: string; sub?: string; val: string; neg?: boolean; pct?: number };

// One work item per autonomy tier (Auto / Assist / Manual) — the industry's
// real work shown at the trust level it actually runs at. Rendered by
// IndustryModesDemo; the Assist item carries a live approve-to-post interaction.
export type ModeDemoItem = {
  mode: "auto" | "assist" | "manual";
  head: string;
  pill: string;
  body: string;
  cite?: string;
  facts: KV[];
  je?: JeLine[];
  jeNote?: string;
  approveLabel?: string;
  approvedPill?: string;
  approvedNote?: string;
};

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
  // Auto / Assist / Manual work items — when set, the "what Aleq does" section
  // renders the interactive IndustryModesDemo instead of runsShot / the checklist
  modes?: ModeDemoItem[];
  faqs?: { q: string; a: string }[];
};

export const INDUSTRIES: Record<string, Industry> = {
  saas: {
    slug: "saas",
    name: "SaaS & subscription",
    eyebrow: "for SaaS & subscription",
    h1: "Billing knows your revenue. Aleq makes it the ledger.",
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
    faqs: [
      { q: "What is the best accounting software for a SaaS startup?", a: "SaaS companies need ASC 606 revenue recognition, a deferred revenue subledger, and billing-to-bank reconciliation — needs generic tools do not cover, which is why teams end up stitching QuickBooks or NetSuite to a revenue tool and a spreadsheet waterfall. Aleq is an AI accounting platform built to be the general ledger for subscription businesses: it reads each contract and allocates the price across performance obligations under ASC 606, keeps the deferred schedule current to the day, reconciles Stripe and Recurly to the bank to the penny nightly, and derives MRR, ARR, and net revenue retention from the same journal entries as recognized revenue. It connects read-only and is live in 48 hours." },
      { q: "How does revenue recognition work for SaaS companies under ASC 606?", a: "Under ASC 606 you identify the contract and its performance obligations, allocate the transaction price across them, and recognize revenue as each obligation is satisfied — ratably for subscription access, point-in-time for one-time deliverables, as-consumed for usage. Cash billed up front sits in deferred revenue and releases on that pattern. Aleq automates this from the contract itself: it reads each subscription and usage agreement, allocates the price across obligations, posts recognition on the right pattern, and rebuilds the deferred waterfall whenever bookings, upgrades, downgrades, or cancellations change it — every entry logged and reversible." },
      { q: "How do you account for a mid-contract subscription upgrade?", a: "A mid-term upgrade changes the remaining transaction price, so the deferred schedule must be re-cut prospectively. Example: a customer upgrades in month 7 of 12, adding $20,000 of consideration — the unrecognized balance plus the new amount is re-allocated over the remaining five months, a catch-up entry posts (debit accounts receivable, credit deferred revenue), and prior periods stay untouched. Aleq handles this in Assist mode: because a modification involves judgment under ASC 606, it drafts the treatment, shows the re-cut schedule, and holds for one-click approval before posting. Closed months are never restated." },
      { q: "Why doesn't my ARR match the revenue in my general ledger?", a: "Because most teams compute ARR in a spreadsheet from billing data while the general ledger recognizes revenue under ASC 606 on a different clock — upgrades, usage true-ups, and churn hit the two at different times, so the board metric and the income statement drift apart. Aleq closes the gap by construction: new, expansion, contraction, and churned MRR are derived from the same journal entries as recognized revenue, so the ARR walk and the P&L agree by definition, and the deferred revenue balance ties to the subledger at $0.00 variance. The metric you show the board is the ledger, not a reconstruction of it." },
      { q: "How do I reconcile Stripe payouts with my books?", a: "A Stripe payout is a net lump sum — charges minus refunds, fees, and disputes — so booking the bank deposit as revenue understates the top line and makes processing fees invisible. The correct treatment is gross revenue, fees expensed separately, and a clearing account bridging Stripe's balance to the bank deposit. Aleq does this automatically: charges, refunds, processor fees, and payouts from Stripe and Recurly land in the ledger and reconcile to the bank to the penny, every night — no payout CSVs, no spreadsheet splits, and no month-end catch-up on a clearing account nobody owns." },
      { q: "How do you account for usage-based billing?", a: "Usage revenue is earned as it is consumed, not when it is invoiced — so month-end usage that bills next cycle must be accrued as unbilled revenue and trued up when the invoice cuts. Done by hand, this is where unbilled and over-billed usage strand on a spreadsheet and the deferred schedule drifts. Aleq accrues metered and consumption lines directly from event data and reconciles them to the invoice automatically, recognizing as-consumed under ASC 606, so usage revenue stays current to the day without a manual true-up at close." },
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
    modes: [
      {
        mode: "auto",
        head: "Recognition run · 38 subscriptions",
        pill: "posted on schedule",
        cite: "ASC 606",
        body: "The month's ratable recognition posts on its own — every schedule current, every entry logged and reversible.",
        facts: [
          { k: "On schedule", v: "38 contracts · all current" },
          { k: "This month", v: "$176,500 recognized" },
        ],
        je: [
          { side: "dr", acct: "Deferred revenue", val: "$176,500" },
          { side: "cr", acct: "Subscription revenue", val: "$176,500" },
        ],
        jeNote: "posted on schedule · logged · reversible",
      },
      {
        mode: "assist",
        head: "Mid-term upgrade · Pro → Enterprise",
        pill: "drafted · held",
        cite: "ASC 606-10-25-13(a)",
        body: "A mid-term upgrade re-cuts the remaining schedule — a judgment Aleq drafts and holds. Closed months stay untouched.",
        facts: [
          { k: "Change", v: "month 7 of 12 · +$20,000" },
          { k: "Treatment", v: "prospective re-cut · 5 months" },
        ],
        approveLabel: "Approve & post",
        je: [
          { side: "dr", acct: "Accounts receivable", val: "$20,000" },
          { side: "cr", acct: "Deferred revenue", sub: "re-cut across 5 months", val: "$20,000" },
        ],
        approvedPill: "✓ posted",
        approvedNote: "waterfall rebuilt forward · closed months untouched",
      },
      {
        mode: "manual",
        head: "SSP · implementation, never sold alone",
        pill: "your call",
        cite: "ASC 606-10-32-34",
        body: "No observable price exists, so the standalone selling price is an estimate. Aleq stages comparable engagements and drafts the basis — you set the number.",
        facts: [
          { k: "Method", v: "expected cost + margin" },
          { k: "Staged basis", v: "$88–96k across comparables" },
        ],
      },
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
    faqs: [
      { q: "What is the best accounting software for a hardware or consumer products brand?", a: "Physical-goods companies need inventory accounting generic ledgers do not do: perpetual valuation under ASC 330, landed cost capitalized into the unit, COGS relieved on every shipment, and margin at the SKU level. Most brands run a 3PL, supplier invoices, an Excel cost roll, and NetSuite, then true everything up with a quarter-end count. Aleq is an AI accounting platform that is the ledger itself for hardware brands: it maintains raw, WIP, and finished-goods subledgers, rolls freight and duty into unit cost, books COGS with each fulfillment, and reconciles on-hand value to the warehouse nightly. It connects to your warehouse and supplier feeds read-only and is live in 48 hours." },
      { q: "What is landed cost and how do you calculate it?", a: "Landed cost is the full cost of getting a unit to your warehouse — the goods plus freight, duty, insurance, and broker fees. Calculate it per shipment, then divide by units: for example, $96,000 of goods FOB plus $14,400 freight and duty plus $2,400 broker and insurance is $112,800 across 1,200 units, or $94.00 per unit. If you expense freight instead of capitalizing it, COGS is understated and gross margin overstated by several points. Aleq captures these costs from supplier and customs invoices and capitalizes them into unit cost automatically — before the first unit sells — so reported margin reflects true landed cost, not just the PO price." },
      { q: "When should COGS be recorded — at purchase or at sale?", a: "At sale. Purchases go to inventory, an asset; cost moves to COGS only when the unit ships, matched to the revenue it earned. Recording purchases straight to COGS makes margin swing with buying cycles instead of sales. Aleq books this atomically: each fulfillment relieves inventory and recognizes COGS in the same entry, at true landed cost, consuming FIFO layers or weighted-average cost per your policy. Returns reverse the entry and re-value the restocked unit. Gross margin by SKU, channel, and period is then derived straight from the ledger, current to the last shipment." },
      { q: "Why doesn't my inventory balance match my accounting system?", a: "Usually because the warehouse and the general ledger update on different clocks: freight and duty invoices land weeks after the goods, standard costs drift from actuals, and returns re-add inventory nobody revalues — so by month-end, on-hand value, COGS, and the GL disagree and get patched with a quarter-end physical count. Aleq keeps a perpetual inventory subledger — raw materials, WIP, and finished goods — that reconciles to your warehouse feeds nightly and ties to the general ledger at $0.00 variance, with lower-of-cost-or-NRV write-downs posted automatically instead of discovered at the count." },
      { q: "How do you account for customer returns of physical goods?", a: "A return has two sides. The revenue side — the refund — is the part most systems handle. The inventory side is where books go wrong: the unit comes back into stock and must re-enter inventory at an appropriate value, or restocked goods silently reappear at stale costs and distort margin. In Aleq, a return reverses the original COGS entry and re-values the restocked unit in the same motion, so the perpetual subledger stays true and gross margin by SKU survives the return cycle intact — no month-end sweep of unmatched restocks required." },
      { q: "What is purchase price variance and why does it matter?", a: "Purchase price variance (PPV) is the gap between the standard cost you set for a part and what the vendor actually billed. Left unmanaged, it gets buried in COGS, and you cannot tell whether your costing model drifted or your supplier raised prices. Aleq runs standard costing with variances isolated: purchase-price and usage variances against standard are posted to their own accounts and reported, so you see exactly where the model and the warehouse diverge. The costing method election — weighted-average or FIFO — remains your policy; Aleq stages the cost layers either way and applies your choice consistently." },
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
    modes: [
      {
        mode: "auto",
        head: "COGS on shipment · 300 units",
        pill: "posted with the shipment",
        body: "Fulfillment relieves inventory and books COGS in the same transaction — FIFO layers consumed, margin true to the unit.",
        facts: [
          { k: "Shipment", v: "300 × $94.00 · FIFO" },
          { k: "Same transaction", v: "inventory out · COGS on" },
        ],
        je: [
          { side: "dr", acct: "Cost of goods sold", val: "$28,200" },
          { side: "cr", acct: "Inventory", val: "$28,200" },
        ],
        jeNote: "one atomic entry · logged · reversible",
      },
      {
        mode: "assist",
        head: "Suggested match · 3PL payment",
        pill: "awaiting you",
        body: "A bank line matches a 3PL invoice on amount, date, and history. Aleq stages the match at 94% and waits — nothing reconciles on a guess.",
        facts: [
          { k: "Bank line", v: "$8,412.00 · ACH out" },
          { k: "Match basis", v: "amount + date + history · 94%" },
        ],
        approveLabel: "Confirm match",
        approvedPill: "✓ matched",
        approvedNote: "reconciled · difference $0.00",
      },
      {
        mode: "manual",
        head: "Costing method · new SKU line",
        pill: "your policy",
        body: "Average or FIFO — the election shapes COGS from here. Aleq stages the cost layers either way; the policy is yours, applied consistently.",
        facts: [
          { k: "Options", v: "weighted-average · FIFO" },
          { k: "Applies to", v: "SKU line K-200 · 14 SKUs" },
        ],
      },
    ],
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
    faqs: [
      { q: "What is the best accounting software for a marketplace business?", a: "Marketplaces have accounting problems generic software is not built for: the principal-versus-agent call under ASC 606, GMV that must never be booked as revenue, seller liabilities and reserves, and payout volumes nobody can tie to the bank by hand. The usual stack is Stripe or Adyen, payout CSVs, Excel splits, and NetSuite. Aleq is an AI accounting platform that is the ledger for marketplaces: it makes the gross-versus-net call per transaction flow with the basis documented, separates GMV, platform revenue, and seller payables into distinct accounts, records every split and processor fee at the transaction level, and reconciles the payout stream to the bank to $0.00 overnight. Read-only connection; live in 48 hours." },
      { q: "Does GMV count as revenue?", a: "No. GMV — gross merchandise value — is the total value of transactions flowing through the platform; revenue is only what the platform itself earns, usually the take rate. If the marketplace is an agent under ASC 606, meaning the seller controls the good or service and sets the price, revenue is the net fee and the rest is money owed to sellers — a liability. Treating GMV as the top line overstates revenue and is a restatement risk auditors check early. Aleq keeps GMV, platform revenue, and seller liabilities in distinct ledger accounts: $1.24M of GMV at a 12% take rate books $148,800 of platform revenue, never $1.24M." },
      { q: "How do you decide between gross and net revenue recognition for a platform?", a: "Apply ASC 606's principal-versus-agent test. If the platform controls the good or service before it reaches the customer — sets the price, is responsible for fulfillment — it is a principal and recognizes the full transaction value. If it merely arranges the transaction between buyer and seller, it is an agent and recognizes only its fee. The call is made per transaction flow, not once per company, and getting it wrong restates revenue. Aleq evaluates control under ASC 606 for each flow and recognizes gross or net accordingly, with the basis documented — while the designation itself stays a human decision, staged with the full control analysis." },
      { q: "How should a marketplace account for money owed to sellers?", a: "As a liability — never as revenue and never as the platform's own cash. When a buyer pays, the seller's share posts to seller payables; holdbacks and reserves are tracked as liabilities and released on schedule. In Aleq's transaction-level model, a $620 order books as $620 cash in, $545.60 to seller payable, $56.00 of take rate to platform revenue, and $18.40 to processor-fee clearing — each split recorded against the right party, so seller payables and net revenue stay exact at any volume, and the platform never reports another party's money as its own." },
      { q: "How do you reconcile marketplace payouts to the bank?", a: "A settlement arrives as one bank line concealing thousands of underlying transactions — charges, refunds, chargebacks, processor fees, and seller splits netted together — and at marketplace volume no one can tie those out by spreadsheet. Aleq does it automatically: it unpacks each payout into its underlying transactions (one $118,400 bank line becomes 1,742 transactions, with the fee posted on each), matches settlements to bank movements in bulk, and reconciles the whole payout stream to $0.00 overnight, with every settlement traced to a bank line. Chargebacks and refunds post against their original transactions instead of vanishing into a variance." },
      { q: "How are payment processing fees accounted for on a marketplace?", a: "At the transaction level, against the right party. Netting Stripe or Adyen fees silently out of revenue understates costs and breaks take-rate math; lumping them into one monthly entry hides which flows are actually profitable. Aleq records every processing fee on the transaction that incurred it, alongside the platform-seller split, so net revenue per flow and seller payables are exact. Take rate is then a derived number — net revenue over GMV, straight from the general ledger — rather than a spreadsheet estimate that drifts from the books." },
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
    modes: [
      {
        mode: "auto",
        head: "Payout, unpacked · Stripe",
        pill: "settled overnight",
        body: "One payout arrives as one bank line — Aleq unpacks it into every underlying transaction and posts each processing fee where it belongs.",
        facts: [
          { k: "Payout", v: "$118,400 · one bank line" },
          { k: "Underlying", v: "1,742 transactions · fees posted per txn" },
        ],
        je: [
          { side: "dr", acct: "Cash", val: "$118,400" },
          { side: "cr", acct: "Stripe clearing", val: "$118,400" },
        ],
        jeNote: "+1,742 fee entries · one per transaction",
      },
      {
        mode: "assist",
        head: "Statement match · payout ID",
        pill: "awaiting you",
        body: "The bank statement line matches the settlement on amount and payout ID — staged at 98%, held for your confirm.",
        facts: [
          { k: "Statement line", v: "$118,400" },
          { k: "Match basis", v: "amount + payout ID · 98%" },
        ],
        approveLabel: "Confirm match",
        approvedPill: "✓ reconciled",
        approvedNote: "matched to the settlement · difference $0.00",
      },
      {
        mode: "manual",
        head: "Principal or agent · per flow",
        pill: "your designation",
        cite: "ASC 606-10-55",
        body: "Who controls the service, who sets the price — the gross-vs-net call restates revenue if it's wrong. Aleq stages the control analysis; the designation is yours, documented.",
        facts: [
          { k: "Flow", v: "third-party services · take rate 12%" },
          { k: "Staged", v: "control test · pricing terms" },
        ],
      },
    ],
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
    faqs: [
      { q: "What is the best accounting software for healthcare revenue cycle management?", a: "Provider groups typically have a billing system and a general ledger that do not speak: the clearinghouse holds 837 claims and 835 remittances while net revenue on the GL is an allowance estimate maintained in Excel. Aleq is an AI accounting platform that is the books for healthcare providers: it reads 837 claims and 835 remittance advice from your clearinghouse, recognizes net patient revenue under ASC 606, books contractual allowances by payer, ages A/R against the payer that owes it, and ties the whole revenue cycle to the general ledger — with net collection rate, days in A/R, and denial rate derived from posted entries. Read-only connection; live in 48 hours." },
      { q: "What is the difference between gross charges and net patient revenue?", a: "Gross charges are charge-master rates — list prices no payer actually pays. Net patient revenue is what you expect to collect: gross charges minus contractual adjustments (the gap between your rates and each payer's contracted rate), denials, and implicit price concessions. Under ASC 606, only the net amount is revenue. The scale of the gap is large — for example, $840,000 of gross charges can net to $328,000 after $512,000 of contractual allowances. Aleq books revenue net of the expected adjustment per payer at the time of service, then trues up to actual cash as remittances settle, so net revenue is not a month-end estimate." },
      { q: "What is a contractual adjustment in medical billing?", a: "The difference between the provider's charge-master rate and what a payer contract actually allows — a $4,200 gross charge against a $2,560 contracted rate produces a $1,640 contractual adjustment. It is a contra-revenue amount, not bad debt, and it should be estimated per payer contract in the period services are provided. Burying all adjustments in a single write-off line hides how each payer actually performs. Aleq books contractual allowances by payer automatically, splits the remainder into expected payer payment and patient responsibility, and trues up each estimate as the corresponding 835 remittance settles." },
      { q: "How does 835 remittance posting work in accounting?", a: "The 835 is the electronic remittance advice a payer returns for adjudicated claims — payment amounts, contractual adjustments, denial reasons, and patient responsibility per claim line. Posting it means matching each remittance to its 837 claim, booking the contractual allowance, applying the cash, moving patient responsibility to the patient balance, and truing up the revenue you originally estimated. Aleq automates the whole sequence: it matches 835s to claims, posts the entries — cash, patient A/R, and contractual allowance against the gross charge — and reconciles remittances to bank deposits at $0.00 variance, with denials tracked by reason straight off the 835." },
      { q: "How is revenue recognized for healthcare providers under ASC 606?", a: "Net of variable consideration, at the time of service. Under ASC 606, a provider recognizes what it expects to actually collect — gross charges reduced by contractual adjustments per payer and by implicit price concessions, the expected-uncollectible portion of patient balances estimated from collection history — rather than booking gross and writing off later. Aleq applies this continuously: it recognizes from 837 claims net of expected adjustments, estimates and posts bad-debt allowances and price concessions from collection history, and trues everything up to actual cash as 835 remittances settle. Net revenue stops being an allowance guess that waits on the remittance." },
      { q: "How do you calculate net collection rate?", a: "Cash collected divided by net patient revenue — what you collected over what you were actually entitled to collect after contractual adjustments, not over gross charges. It is the cleanest single measure of revenue cycle performance, and healthy groups run in the mid-to-high nineties. The catch is the denominator: if net revenue is a stale allowance estimate, the rate is fiction. Aleq derives net collection rate straight from the posted ledger — revenue net of per-payer adjustments, cash from settled 835s — alongside days in A/R aged by payer daily and denial rate by reason traced to the 835." },
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
    modes: [
      {
        mode: "auto",
        head: "Cash application · lockbox batch",
        pill: "applied overnight",
        body: "A deposit under a name that isn't on the account still lands — matched by reference, amount, and history, split across the open invoices it covers.",
        facts: [
          { k: "Deposit", v: "$46,800 · “HVN HLTH PARTNERS”" },
          { k: "Split", v: "3 open invoices · to the penny" },
        ],
        je: [
          { side: "dr", acct: "Cash", val: "$46,800" },
          { side: "cr", acct: "Patient A/R", sub: "3 applications, each traced", val: "$46,800" },
        ],
        jeNote: "3 applications posted · each traced to its invoice",
      },
      {
        mode: "assist",
        head: "A remittance that doesn't quite match",
        pill: "awaiting you",
        body: "Amount matches, the reference doesn't. Aleq stages the likeliest application at 92% and holds — no cash applied on a guess.",
        facts: [
          { k: "Payment", v: "$12,240 · no reference" },
          { k: "Suggested", v: "INV-2214 · 92%" },
        ],
        approveLabel: "Approve application",
        approvedPill: "✓ applied",
        approvedNote: "applied to INV-2214 · case closed",
      },
      {
        mode: "manual",
        head: "Contractual allowance · new payer",
        pill: "your estimate",
        body: "What a new payer actually pays against gross charges is an estimate only you can own. Aleq stages the charge-vs-collected history; the allowance is yours to set.",
        facts: [
          { k: "Contract", v: "commercial payer · eff. Aug 1" },
          { k: "Staged", v: "collected-vs-charge history, by service band" },
        ],
      },
    ],
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
    faqs: [
      { q: "What is the best accounting software for a small manufacturer?", a: "Manufacturers need cost accounting most general ledgers do not do: three-way matching of PO, receipt, and bill; WIP that follows production stage by stage; landed cost in the unit; and retailer chargebacks coded to the order instead of written off. The usual stack — ERP and WMS, receiving logs, an Excel landed-cost roll, NetSuite, and a quarter-end count — leaves inventory on the books a guess. Aleq is an AI accounting platform that is the ledger for manufacturers: it matches every PO, receipt, and bill, values inventory at landed cost under ASC 330, carries WIP by order and stage, and ties the inventory subledger to the general ledger daily at $0.00 variance." },
      { q: "How do you account for work in process (WIP) in manufacturing?", a: "WIP is inventory that has entered production but is not finished, and cost follows the work: raw materials issue into WIP as they are consumed, labor is applied per stage, and on completion the accumulated cost relieves to finished goods — debit finished goods, credit WIP — then to COGS on shipment. Rebuilt by hand at month-end, the WIP rollforward rarely ties. Aleq posts each movement as it happens: material issued, labor applied, and completion each get their own entry, orders auto-complete when the plan is met and WIP zeroes out, and the rollforward ties by construction — WIP valued by order and stage, daily." },
      { q: "What happens when a PO, receipt, and vendor bill don't match?", a: "In Aleq, nothing posts silently. When the vendor bills a different price than the PO — say 12,000 yards ordered at $4.10 for $49,200 but billed at $4.50 for $54,000 — Aleq books inventory at the PO price, isolates the $4,800 gap to a purchase price variance account, posts accounts payable at the billed amount, and raises an exception held for your sign-off. The break stays visible with a reason attached instead of getting buried in COGS, which is how mismatches quietly distort margin in most manufacturers' books." },
      { q: "How should a manufacturer cost its inventory?", a: "At landed cost, with a consistent method. Freight and duty belong in the unit cost, not in their own expense line — otherwise COGS is understated and margin overstated. From there, the elections are policy: standard or actual costing, FIFO or weighted-average, applied consistently. Aleq values inventory at landed cost, relieves COGS per order on shipment under FIFO or average per your policy, and when you run standards it isolates purchase-price and usage variances to their own accounts so you can see where the model and the floor diverge. The method election stays your call — Aleq stages the actuals and applies your policy consistently." },
      { q: "Do I have to replace my ERP or WMS to use AI accounting software?", a: "No. Aleq connects to your ERP, WMS, and bank read-only and replaces the general ledger and the manual close that sit on top — the floor and warehouse systems your operations run on do not change. It reads POs, receipts, bills, and production data from those systems, three-way-matches and posts to its own ledger, and ties the inventory subledger to the GL daily. Supervision is graduated: routine work like stage postings and clean matches can run in Auto, over-threshold bills hold for approval, and judgment calls like setting a new SKU's standard cost stay fully manual, with Aleq staging the data." },
      { q: "How long does it take to implement manufacturing accounting software?", a: "Traditional manufacturing ERP implementations run months. Aleq stands up in 48 hours: connect your ERP, WMS, and bank read-only, and it three-way-matches a closed period, lands the freight and duty into unit costs, and rebuilds WIP — logged and replayable — so you judge it on your own books rather than a demo dataset. Nothing in your systems changes during this; the credentials are read-only. From there you decide task by task how much runs on its own: every entry Aleq posts is logged and reversible, and autonomy is earned per task rather than switched on wholesale." },
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
    modes: [
      {
        mode: "auto",
        head: "WIP · work order WO-2214",
        pill: "posted per stage",
        body: "Cost follows production — material, labor, and completion each post their own entry, and the order auto-completes when the plan is met and WIP zeroes out.",
        facts: [
          { k: "Material issued", v: "$18,400 · cut" },
          { k: "Labor applied", v: "$6,200 · sew · finish" },
        ],
        je: [
          { side: "dr", acct: "Finished goods", val: "$24,600" },
          { side: "cr", acct: "Work-in-process", sub: "relieved on completion", val: "$24,600" },
        ],
        jeNote: "3 stage entries · rollforward ties by construction",
      },
      {
        mode: "assist",
        head: "Supplier invoice · over threshold",
        pill: "matched · held",
        body: "PO, receipt, and bill agree 3-for-3 — but it's over your approval threshold, so it holds for a person before AP posts.",
        facts: [
          { k: "Three-way match", v: "3/3 · PO-4482" },
          { k: "Amount", v: "$54,000 · over your $25k line" },
        ],
        approveLabel: "Approve & post",
        je: [
          { side: "dr", acct: "Raw materials inventory", val: "$54,000" },
          { side: "cr", acct: "Accounts payable", val: "$54,000" },
        ],
        approvedPill: "✓ posted",
        approvedNote: "AP posted · bill payable on your run",
      },
      {
        mode: "manual",
        head: "Standard cost · SKU-1147",
        pill: "your call",
        body: "The standard you set drives WIP and every variance after it. Aleq stages last quarter's actuals; the number is policy, and policy is yours.",
        facts: [
          { k: "Staged actuals", v: "$92.40–$96.10 / unit" },
          { k: "Drives", v: "WIP valuation · variance from here" },
        ],
      },
    ],
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
    faqs: [
      { q: "What is the best accounting software for a consulting or professional services firm?", a: "Services firms need project accounting generic ledgers do not provide: revenue recognized over time as work is delivered, unbilled WIP accrued from time entries, and utilization, realization, and margin per engagement. The usual stack — a PSA or time tracker, an Excel percent-complete model, a billing tool, and NetSuite — means revenue and WIP get rebuilt by hand every close. Aleq is an AI accounting platform that is the books for services firms: it recognizes project revenue over time under ASC 606, carries unbilled WIP off approved time entries, handles T&M and fixed-fee engagements distinctly, and derives utilization, realization, and project margin from the same ledger. It connects to your PSA read-only and is live in 48 hours." },
      { q: "How does percentage-of-completion revenue recognition work?", a: "You recognize contract revenue in proportion to how complete the work is — most commonly cost-to-cost: costs incurred to date over total estimated cost. Example: a $420,000 fixed-fee engagement with a $260,000 cost budget and $161,200 incurred is 62% complete, so $260,400 is earned to date; with $218,400 recognized in prior periods, this period books $42,000 — debit unbilled WIP, credit project revenue. Aleq computes this from approved time entries and posts the entry, while the percent-complete judgment itself stays with the engagement lead: Aleq stages burn-versus-budget and milestone status, and the call is yours." },
      { q: "What is unbilled WIP in professional services accounting?", a: "Revenue you have earned by delivering work but have not yet invoiced — a contract asset on the balance sheet. It arises whenever recognition runs ahead of the billing schedule: hours logged mid-month, milestones billed quarterly, fixed fees invoiced on their own cycle. Firms that only book revenue when they invoice understate earned revenue and lose track of what is billable. Aleq accrues unbilled WIP from time entries as hours are logged and relieves it as invoices are raised, so earned-but-unbilled revenue is always visible by engagement — current to the last approved timesheet, not reconstructed at month-end." },
      { q: "What is the difference between T&M and fixed-fee accounting?", a: "Time-and-materials revenue follows the hours: recognized as delivered and billed at agreed rates, so revenue and billing track together. Fixed-fee revenue follows completion: recognized over time on a completion measure such as percentage-of-completion, independent of the invoice schedule, with budget-to-actual tracked against the estimate and unbilled WIP or deferred revenue absorbing the timing gap. Applying one treatment to the other misstates both revenue and WIP. Aleq handles them distinctly per engagement from the same PSA data — T&M as delivered, fixed-fee on the completion measure, and fixed retainers recognized on schedule with every entry logged and reversible." },
      { q: "How do you calculate utilization and realization for a services firm?", a: "Utilization is billable hours over capacity — how much of the team's time earns revenue. Realization is what you actually realize against standard rates — how much of that billable time turns into money, with write-downs and discounts pulling it below 100%. Most firms compute both in spreadsheets that drift from the books, so the operating metrics and the P&L disagree. Aleq derives them from the ledger itself: billable, non-billable, and realized hours are tracked against capacity in the same system that recognizes revenue, so utilization and realization always reconcile to the income statement they are supposed to explain." },
      { q: "How do you track project profitability at a consulting firm?", a: "Margin per engagement: recognized revenue minus labor cost and pass-through expenses, measured continuously rather than after the engagement ends — the classic failure is discovering a project lost money at the retrospective. Aleq rolls recognized revenue, labor cost, and pass-throughs into margin per project and per client, current to the last approved timesheet. Because revenue is recognized over time from the same time entries that drive cost, the margin you see mid-engagement is the margin the ledger will report. Scope changes are drafted and held for approval under ASC 606, so the budget baseline the margin is measured against stays honest." },
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
    modes: [
      {
        mode: "auto",
        head: "Retainer recognition · monthly",
        pill: "posted on schedule",
        cite: "ASC 606",
        body: "Fixed-fee retainers recognize on schedule without a touch — the deferred balance rolls forward and every entry is reversible.",
        facts: [
          { k: "On schedule", v: "12 engagements" },
          { k: "This month", v: "$35,000 recognized" },
        ],
        je: [
          { side: "dr", acct: "Deferred revenue", val: "$35,000" },
          { side: "cr", acct: "Project revenue", val: "$35,000" },
        ],
        jeNote: "posted on schedule · logged · reversible",
      },
      {
        mode: "assist",
        head: "Scope change · ENG-540",
        pill: "drafted · held",
        cite: "ASC 606-10-25-13",
        body: "A +$60,000 scope change is a modification judgment — separate contract, or a re-cut of what remains. Aleq drafts the treatment and holds it.",
        facts: [
          { k: "Change", v: "+$60,000 · fixed-fee" },
          { k: "Treatment", v: "prospective · remaining periods" },
        ],
        approveLabel: "Approve & post",
        je: [
          { side: "dr", acct: "Accounts receivable", val: "$60,000" },
          { side: "cr", acct: "Deferred revenue", sub: "re-cut across remaining periods", val: "$60,000" },
        ],
        approvedPill: "✓ posted",
        approvedNote: "re-cut forward · closed months untouched",
      },
      {
        mode: "manual",
        head: "Percent complete · ENG-577",
        pill: "your judgment",
        body: "Cost-to-date sits at 62% of budget — but completion is a measure only the engagement lead can own. Aleq stages the inputs; the call is yours.",
        facts: [
          { k: "Cost to date", v: "$161,200 of $260,000" },
          { k: "Staged", v: "burn vs. budget · milestone status" },
        ],
      },
    ],
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
