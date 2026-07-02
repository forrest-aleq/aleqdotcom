// Scenario packs — the ready-made runs TAMi executes on your books.
// RULE: the discovery corpus (timestamped persona days, verbatim calls, eval
// harness detail) is substrate and never ships. A pack publishes its
// workflow, its receipt, and at most one anonymized line of provenance.

export type ScnStep = {
  k: string; // step type: trigger, extract, match, post, hold, draft, log…
  h: string;
  p: string;
  held?: boolean; // this step waits for a person
};

export type ScnJeLine = { side: "dr" | "cr"; acct: string; val: string };

export type Scenario = {
  slug: string;
  title: string;
  one: string; // one-sentence value prop — the only hero copy
  industry: string;
  work: string;
  workHref: string;
  collection: string;
  mode: "auto" | "assist" | "manual";
  difficulty: string;
  anecdote?: string;
  anecdoteBy?: string;
  does: string[];
  run: ScnStep[];
  je?: ScnJeLine[];
  jeNote?: string;
  related: string[];
};

export const COLLECTIONS: { name: string; blurb: string }[] = [
  { name: "The month-end close", blurb: "Reconcile, tie out, narrate, consolidate — the close as packs." },
  { name: "Cash in, cash out", blurb: "Every dollar arriving or leaving, matched and gated." },
  { name: "Founder finance", blurb: "The finance function before the finance hire." },
];

export const SCENARIOS: Scenario[] = [
  // ── The month-end close ──────────────────────────────────
  {
    slug: "four-bank-month-end",
    title: "The four-bank month-end",
    one: "Four banks, seven accounts, 1,847 ledger lines — reconciled overnight, every variance named.",
    industry: "Vertical SaaS · Series B",
    work: "Reconciliation",
    workHref: "/work/reconciliation",
    collection: "The month-end close",
    mode: "auto",
    difficulty: "very hard",
    anecdote:
      "Her checklist starts at four bank portals and ends with a $2,445.86 variance she blocks the whole day to explain.",
    anecdoteBy: "discovery research · controller, Series-B vertical SaaS",
    does: [
      "Pulls every account read-only — no portal logins, no PDF downloads",
      "Ties each bank to the ledger line by line, overnight",
      "Names every cause of a variance — nothing left as “difference”",
      "Drafts the correcting entries with the evidence attached",
    ],
    run: [
      { k: "trigger", h: "The month ends", p: "Four banks, seven accounts, 1,847 ledger lines. The run starts the night statements post." },
      { k: "match", h: "Line-by-line, every account", p: "Deposits, withdrawals, transfers between own accounts — a confidence score and a reason on each." },
      { k: "explain", h: "The $2,445.86 variance gets named", p: "An outstanding check, an unrecorded wire fee, a deposit in transit — each cause identified." },
      { k: "draft", h: "Correcting entries, drafted", p: "The wire fee posts with its explanation. Judgment calls are drafted and held.", held: true },
      { k: "log", h: "The morning is a review", p: "Seven accounts at $0.00, two items held with reasons." },
    ],
    je: [
      { side: "dr", acct: "Bank fees", val: "$25.00" },
      { side: "cr", acct: "Cash", val: "$25.00" },
    ],
    jeNote: "the wire fee the ledger never knew about · posted with its explanation",
    related: ["balance-sheet-recs", "stripe-payout-reconciliation", "consolidate-group-close"],
  },
  {
    slug: "balance-sheet-recs",
    title: "Tie out the balance sheet",
    one: "Prepaids, accruals, deferred revenue — every account carries its reconciliation, prepared and current.",
    industry: "Any industry",
    work: "Reconciliation",
    workHref: "/work/reconciliation",
    collection: "The month-end close",
    mode: "auto",
    difficulty: "hard",
    does: [
      "Builds the rollforward per account — opening, activity, releases, closing",
      "Ties every balance to its schedule and source documents",
      "Posts scheduled releases on time, every period",
      "Flags any account drifting from its support",
    ],
    run: [
      { k: "trigger", h: "The month's activity posts", p: "Every balance-sheet account starts its rollforward from the ledger, not a spreadsheet." },
      { k: "build", h: "Rollforward per account", p: "Opening balance + activity − releases = closing. Each line doc-tied." },
      { k: "post", h: "Releases post on schedule", p: "Prepaids amortize, accruals reverse, deferred revenue releases — on the schedule, with the source attached." },
      { k: "hold", h: "One accrual outgrew its support", p: "The balance no longer matches the schedule behind it. Held for judgment, with the gap shown.", held: true },
      { k: "log", h: "Every account carries its rec", p: "Prepared, tied, and exportable — not rebuilt the week before fieldwork." },
    ],
    je: [
      { side: "dr", acct: "Insurance expense", val: "$15,000.00" },
      { side: "cr", acct: "Prepaid insurance", val: "$15,000.00" },
    ],
    jeNote: "month 5 of 12 · released on schedule · tied to the policy",
    related: ["four-bank-month-end", "flux-narrative"],
  },
  {
    slug: "flux-narrative",
    title: "Draft the flux narrative",
    one: "The month-over-month story, written from the ledger — every driver cited to its entries.",
    industry: "Any industry",
    work: "Reporting",
    workHref: "/work/reporting",
    collection: "The month-end close",
    mode: "assist",
    difficulty: "hard",
    does: [
      "Compares the period against prior and isolates the real drivers",
      "Writes controller-grade commentary, not a variance table",
      "Cites every claim to the entries behind it",
      "Holds the draft for your edit and sign-off",
    ],
    run: [
      { k: "trigger", h: "The month seals", p: "Statements assemble off the live trial balance. The narrative run starts." },
      { k: "analyze", h: "Variances against prior period", p: "What moved, by how much, and what drove it — isolated per line." },
      { k: "draft", h: "The story gets written", p: "Opex up $214,000: the annual D&O premium booked in May, plus two engineering hires — each cited to its entries." },
      { k: "hold", h: "The draft waits for you", p: "You edit tone and emphasis. The assembly and the arithmetic are done.", held: true },
      { k: "log", h: "Board-ready the morning after close", p: "Every number in the pack drills to the entry behind it." },
    ],
    related: ["budget-to-actuals-managers", "balance-sheet-recs"],
  },
  {
    slug: "consolidate-group-close",
    title: "Consolidate the group close",
    one: "Every entity translated, intercompany eliminated, the group tied to the locals — in dependency order.",
    industry: "Multi-entity group",
    work: "Multi-entity",
    workHref: "/work/multi-entity",
    collection: "The month-end close",
    mode: "auto",
    difficulty: "very hard",
    does: [
      "Runs every entity on one close board, sealed in dependency order",
      "Translates under ASC 830 — closing rate, average rate, CTA to equity",
      "Eliminates intercompany two-sided, as a visible entry",
      "Surfaces the blocker on day two, not day five",
    ],
    run: [
      { k: "trigger", h: "Local closes begin", p: "US parent, UK, Germany, Mexico — one board, one critical path." },
      { k: "translate", h: "Each entity into the reporting currency", p: "Balance sheet at closing rate, P&L at average, the difference to CTA — the rate visible on every line." },
      { k: "match", h: "Intercompany eliminated, both sides", p: "Each balance matched at the origin rate and netted in consolidation only. Locals untouched." },
      { k: "hold", h: "The blocker surfaces early", p: "A missing invoice behind the German VAT reconciliation blocks the group seal — surfaced day two, with what it's blocking.", held: true },
      { k: "log", h: "The group ties to the locals", p: "Consolidated trial balance, traceable to each entity's books." },
    ],
    je: [
      { side: "dr", acct: "Intercompany payable · UK", val: "$840,000.00" },
      { side: "cr", acct: "Intercompany receivable · US", val: "$840,000.00" },
    ],
    jeNote: "eliminated in consolidation only · both local books untouched",
    related: ["four-bank-month-end", "balance-sheet-recs"],
  },

  // ── Cash in, cash out ────────────────────────────────────
  {
    slug: "lockbox-cash-application",
    title: "Lockbox PDF to cash application",
    one: "Every check in the bank's PDF matched to its invoice and posted — the morning it arrives.",
    industry: "Vertical SaaS · Series B",
    work: "Collections",
    workHref: "/work/collections",
    collection: "Cash in, cash out",
    mode: "auto",
    difficulty: "hard",
    anecdote:
      "A CFO's version: open the PDF, re-key the checks into a spreadsheet, apply them in billing, key the entries into NetSuite. One check is fine. Thirty is a morning.",
    anecdoteBy: "discovery research · CFO, Series-B vertical SaaS",
    does: [
      "Reads the lockbox PDF directly — no templates, a confidence score per field",
      "Matches each check to its open invoices by payer, amount, and memo",
      "Applies the cash and posts the balanced entries in one motion",
      "Holds anything it can't prove, with the reason written down",
    ],
    run: [
      { k: "trigger", h: "The lockbox PDF arrives by email", p: "24 checks this morning — payer, amount, and memo extracted with a confidence score per field." },
      { k: "match", h: "22 checks tie to open invoices", p: "Payer, amount, and memo against the AR subledger. Each match carries its reasoning." },
      { k: "post", h: "Cash applied, entries posted", p: "Every application posts balanced, traced to the check image and the invoice it settled." },
      { k: "hold", h: "Two checks wait for a person", p: "A payer that matches nothing, and an overpayment. Held with reasons — never forced to fit.", held: true },
      { k: "log", h: "The morning is two exceptions", p: "A five-minute review — not a spreadsheet." },
    ],
    je: [
      { side: "dr", acct: "Cash", val: "$156,847.32" },
      { side: "cr", acct: "Accounts receivable", val: "$156,847.32" },
    ],
    jeNote: "247 deposits this month · each applied to its invoice · balanced",
    related: ["stripe-payout-reconciliation", "dunning-ladder"],
  },
  {
    slug: "stripe-payout-reconciliation",
    title: "Reconcile the Stripe payout",
    one: "One bank line, hundreds of payments. Unbundled, matched, and reconciled to $0.00 overnight.",
    industry: "Vertical SaaS · Series B",
    work: "Reconciliation",
    workHref: "/work/reconciliation",
    collection: "Cash in, cash out",
    mode: "auto",
    difficulty: "hard",
    anecdote:
      "The reconciliation she blocks a full morning for: payouts aggregate days of processing, fees come out before the money lands, chargebacks hit weeks later.",
    anecdoteBy: "discovery research · controller, Series-B vertical SaaS",
    does: [
      "Splits every payout back into its charges, refunds, and fees",
      "Matches each payment to the invoice it settled",
      "Posts fees where they belong — never netted out of revenue",
      "Reconciles the clearing account to $0.00, every night",
    ],
    run: [
      { k: "trigger", h: "A payout lands in the bank", p: "One line: $46,443.72. Behind it, several days of charges, refunds, and fees netted together." },
      { k: "extract", h: "The payout splits into its transactions", p: "247 payments and their fees, each tied back to the charge it came from." },
      { k: "match", h: "Every payment finds its invoice", p: "Charges to invoices, refunds against their originals, fees coded separately." },
      { k: "post", h: "The clearing account goes to $0.00", p: "Bank, processor, and ledger agree — no timing spreadsheet in between." },
      { k: "hold", h: "A suspected duplicate waits", p: "One payout looks like a repeat of yesterday's. Held with the evidence, not matched to make zero.", held: true },
    ],
    je: [
      { side: "dr", acct: "Cash", val: "$46,443.72" },
      { side: "dr", acct: "Payment processing fees", val: "$1,406.28" },
      { side: "cr", acct: "Stripe clearing", val: "$47,850.00" },
    ],
    jeNote: "balanced · fees expensed, not netted · source: payout po_84921",
    related: ["lockbox-cash-application", "four-bank-month-end"],
  },
  {
    slug: "three-way-match",
    title: "Three-way match every bill",
    one: "PO, receipt, and bill agree — or the bill waits. On every invoice, not just the big ones.",
    industry: "Manufacturing · consumer goods",
    work: "Accounts payable",
    workHref: "/work/ap",
    collection: "Cash in, cash out",
    mode: "auto",
    difficulty: "hard",
    does: [
      "Reads every bill with a confidence score on each field",
      "Ties the bill to the PO you raised and the receipt that proves delivery",
      "Isolates price and quantity gaps to variance — never buried in COGS",
      "Clears clean matches into the approval chain your policy defines",
    ],
    run: [
      { k: "trigger", h: "A bill lands in the inbox", p: "Vendor, amount, terms extracted — no template setup, a confidence score per field." },
      { k: "match", h: "Bill · PO · receipt, three ways", p: "12,000 yards ordered at $4.10. Billed at $4.50. The receipt confirms the quantity." },
      { k: "post", h: "The gap is isolated, not buried", p: "Inventory books at the PO price; the $4,800 difference posts to purchase price variance." },
      { k: "hold", h: "The exception waits for a person", p: "Price break with the vendor's bill attached — held with the reason, visible.", held: true },
      { k: "log", h: "Clean bills keep moving", p: "Matched, coded, and queued for approval per your thresholds." },
    ],
    je: [
      { side: "dr", acct: "Inventory", val: "$49,200.00" },
      { side: "dr", acct: "Purchase price variance", val: "$4,800.00" },
      { side: "cr", acct: "Accounts payable", val: "$54,000.00" },
    ],
    jeNote: "billed ≠ ordered · the gap isolated to its own account",
    related: ["vendor-bank-detail-change", "founder-finance-day"],
  },
  {
    slug: "dunning-ladder",
    title: "Climb the dunning ladder",
    one: "Every overdue invoice worked the day it ages — reminder, follow-up, call — until the promise is captured.",
    industry: "B2B · any industry",
    work: "Collections",
    workHref: "/work/collections",
    collection: "Cash in, cash out",
    mode: "assist",
    difficulty: "hard",
    does: [
      "Opens a case for every overdue invoice, the day it ages",
      "Climbs the ladder you configured — your rungs, your tone",
      "Places the call when email stalls — on a script you approved",
      "Captures the promise: amount, date, who said it — and pauses on any dispute",
    ],
    run: [
      { k: "trigger", h: "An invoice goes past due", p: "A case opens. No invoice skips a rung because someone was busy." },
      { k: "post", h: "Day 1: the reminder, in your voice", p: "Friendly first, firmer at the rungs you set. Everything pauses the moment the customer replies." },
      { k: "draft", h: "The call script, held for approval", p: "Asks for a payment date, never argues. It dials only after you approve.", held: true },
      { k: "log", h: "The promise is captured", p: "$48,200 by Friday, from the AP manager — recorded, transcribed, attached to the invoice." },
      { k: "hold", h: "A dispute stops everything", p: "Reminders and charges pause; the case routes to your team with the full history.", held: true },
    ],
    related: ["lockbox-cash-application", "three-way-match"],
  },
  {
    slug: "vendor-bank-detail-change",
    title: "Catch the changed bank details",
    one: "A known supplier emails new routing details. Nothing pays until a person says so.",
    industry: "Any industry",
    work: "Accounts payable",
    workHref: "/work/ap",
    collection: "Cash in, cash out",
    mode: "manual",
    difficulty: "moderate",
    anecdote:
      "Same logo, same signature block, a polite note about a banking transition, a new account number. The most expensive email in AP.",
    does: [
      "Detects the change the moment a bill or email carries new payment details",
      "Freezes every payment to that vendor — unconditionally",
      "Raises a verification task with old and new details side by side",
      "Resumes only when a named person confirms the payee",
    ],
    run: [
      { k: "trigger", h: "A bill arrives with new routing details", p: "Same vendor, same amounts — different account. Diffed against the payment history." },
      { k: "hold", h: "Payments to the vendor freeze", p: "No confidence score can clear this. The hold is unconditional and immediate.", held: true },
      { k: "verify", h: "A person confirms the payee", p: "Old and new side by side, with the request's provenance. A named person's action, on the record.", held: true },
      { k: "log", h: "The decision is on the record", p: "Whoever asks later — auditor or CFO — sees who verified what, and when." },
    ],
    related: ["three-way-match", "founder-finance-day"],
  },

  // ── Founder finance ──────────────────────────────────────
  {
    slug: "founder-finance-day",
    title: "Run founder finance",
    one: "The AWS warning, the Stripe balance mystery, the 800 unread invoices — handled without a hire.",
    industry: "Dev tools · seed stage",
    work: "Accounts payable",
    workHref: "/work/ap",
    collection: "Founder finance",
    mode: "assist",
    difficulty: "moderate",
    anecdote:
      "His finance stack was Gmail search: ~800 AWS emails, a “Payment Failed” notice unopened for a day, and a Stripe balance he couldn't say was before or after fees.",
    anecdoteBy: "discovery research · co-founder & CTO, seed-stage dev tools",
    does: [
      "Reads the bill inbox so nobody has to search it",
      "Catches the payment-failed notice the day it lands",
      "Explains the Stripe balance: gross, fees, pending payout",
      "Drafts everything for one approval pass",
    ],
    run: [
      { k: "trigger", h: "The inbox connects, read-only", p: "Every AWS, Stripe, and vendor email lands in one queue. Gmail search retires." },
      { k: "extract", h: "Bills read and coded", p: "Vendor, amount, due date, suggested coding — a confidence score on every field." },
      { k: "flag", h: "The AWS failure surfaces same-day", p: "Payment failed → drafted for approval with the invoice attached, before the service warning ever sends." },
      { k: "draft", h: "One approval pass", p: "The week's bills, approved in one sitting. Nothing posts or pays without the click.", held: true },
      { k: "log", h: "The Stripe number means something", p: "Gross this week, fees taken, payout pending — derived from the ledger." },
    ],
    je: [
      { side: "dr", acct: "Cloud infrastructure", val: "$4,812.40" },
      { side: "cr", acct: "Accounts payable", val: "$4,812.40" },
    ],
    jeNote: "drafted · approved in one click · logged and reversible",
    related: ["vendor-bank-detail-change", "nexus-watch"],
  },
  {
    slug: "budget-to-actuals-managers",
    title: "Budget-to-actuals per manager",
    one: "Every manager gets their controllable spend, flagged and drillable — without logging into anything.",
    industry: "Real-estate fund · self-storage",
    work: "Reporting",
    workHref: "/work/reporting",
    collection: "Founder finance",
    mode: "auto",
    difficulty: "moderate",
    anecdote:
      "“They can get the high-level numbers, but their next question is always: okay, where did I spend it? Pulling that detail is extra work, so half the time they don't bother.”",
    anecdoteBy: "discovery research · VP finance, self-storage investment firm",
    does: [
      "Cuts each property's P&L to the manager's controllable categories",
      "Flags variances over the line — not over everything",
      "Answers “where did I spend it” one click down",
      "Delivers on schedule, to every manager, without a login",
    ],
    run: [
      { k: "trigger", h: "The month seals", p: "Two dozen properties close on the same ledger. The report run starts itself." },
      { k: "build", h: "One view per manager", p: "Repairs, utilities, travel, auctions — the categories they control, budget against actual." },
      { k: "flag", h: "Variances over the line light up", p: "Over 10% or $500 gets flagged with its driver. Everything else stays quiet." },
      { k: "log", h: "Every number opens to its entries", p: "“Where did I spend it” is a click, not a request to finance." },
      { k: "hold", h: "A new cut asks first", p: "The recurring pack runs alone once proven. A new format waits for finance's sign-off.", held: true },
    ],
    related: ["flux-narrative", "nexus-watch"],
  },
  {
    slug: "nexus-watch",
    title: "Watch nexus before you cross it",
    one: "Your sales measured against every state's threshold, live — flagged with runway, not after the notice.",
    industry: "Any industry",
    work: "Tax",
    workHref: "/work/tax",
    collection: "Founder finance",
    mode: "auto",
    difficulty: "moderate",
    does: [
      "Tracks sales and transaction counts per state, against that state's rule",
      "Projects the crossing before it happens",
      "Drafts the registration with the reasoning — and stops for sign-off",
      "Keeps prepared returns running on their schedule",
    ],
    run: [
      { k: "trigger", h: "Every sale posts to the ledger", p: "State-by-state totals update as the books move — dollars and transaction counts." },
      { k: "measure", h: "Each state against its own threshold", p: "Most trigger near $100,000 or 200 transactions. Each state's rule, applied to your actuals." },
      { k: "flag", h: "Florida at $98,000 of $100,000", p: "Trending to cross before the next filing cycle — flagged with runway to act." },
      { k: "draft", h: "The registration, drafted", p: "With the reasoning attached. A first-time state always stops for your sign-off.", held: true },
      { k: "log", h: "Returns keep their schedule", p: "The recurring ones it has prepared many times are ready and waiting. Nothing files itself." },
    ],
    related: ["founder-finance-day", "budget-to-actuals-managers"],
  },
];

export function getScenario(slug: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.slug === slug);
}
