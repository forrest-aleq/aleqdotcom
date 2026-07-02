// The scenario library — compact, template-shaped pages distilled from our
// discovery research and eval suite. RULE: the full corpus (timestamped
// persona days, verbatim calls, eval harness detail) is substrate and never
// ships. Each scenario publishes exactly one anonymized anecdote paragraph
// plus the structured run — the exhaust, not the moat.

export type ScnStep = {
  k: string; // mono step label (trigger, extract, match, post, hold, log…)
  h: string;
  p: string;
  held?: boolean; // this step waits for a person
};

export type ScnJeLine = { side: "dr" | "cr"; acct: string; val: string };

export type Scenario = {
  slug: string;
  title: string;
  one: string; // one-sentence value prop
  industry: string; // anonymized descriptor, e.g. "Vertical SaaS · Series B"
  work: string; // work-area tag for filtering
  workHref: string;
  mode: "auto" | "assist" | "manual";
  modeLabel: string;
  difficulty: string;
  anecdote: string;
  anecdoteBy: string;
  does: string[];
  run: ScnStep[];
  je?: ScnJeLine[];
  jeNote?: string;
  related: string[];
};

export const SCENARIOS: Scenario[] = [
  {
    slug: "lockbox-cash-application",
    title: "Lockbox PDF to cash application",
    one: "Every check in the bank's PDF matched to its invoice and posted — the morning it arrives.",
    industry: "Vertical SaaS · Series B",
    work: "Collections",
    workHref: "/work/collections",
    mode: "auto",
    modeLabel: "runs alone · exceptions held",
    difficulty: "hard",
    anecdote:
      "A CFO described it to us: the bank emails a PDF with all the deposits. Someone opens it, pulls out the check details, drops them into a spreadsheet to keep things centralized, applies the payments in the billing system, then keys the journal entries into NetSuite. One check is fine. Twenty or thirty is a total time sink. He even wrote a script to parse the PDFs — the bank's formatting broke it.",
    anecdoteBy: "from our discovery research · CFO, Series-B vertical SaaS",
    does: [
      "Reads the lockbox PDF the way an accountant would — no templates to configure, a confidence score on every field",
      "Matches each check to its open invoices by payer, amount, and memo",
      "Applies the cash and posts the balanced entries in the same motion",
      "Holds anything it can't prove — with the reason written down",
    ],
    run: [
      { k: "trigger", h: "The lockbox PDF arrives by email", p: "Aleq reads it directly — 24 checks this morning, payer, amount, and memo extracted with a confidence score per field." },
      { k: "match", h: "22 checks tie to open invoices", p: "Payer, amount, and memo against the AR subledger. Each match carries its reasoning." },
      { k: "post", h: "Cash applied, entries posted", p: "Every application posts as a balanced entry, traced to the check image and the invoice it settled." },
      { k: "hold", h: "Two checks wait for a person", p: "A payer name that matches nothing on the books, and an overpayment. Both held with the reason attached — never forced to fit.", held: true },
      { k: "log", h: "Everything logged, everything reversible", p: "The morning's work is a five-minute review of two exceptions — not a spreadsheet." },
    ],
    je: [
      { side: "dr", acct: "Cash", val: "$156,847.32" },
      { side: "cr", acct: "Accounts receivable", val: "$156,847.32" },
    ],
    jeNote: "247 deposits this month · each applied to its invoice · balanced",
    related: ["stripe-payout-reconciliation", "four-bank-month-end"],
  },
  {
    slug: "stripe-payout-reconciliation",
    title: "The Stripe payout that doesn't tie",
    one: "One bank line, hundreds of payments. Unbundled, matched, and reconciled to $0.00 overnight.",
    industry: "Vertical SaaS · Series B",
    work: "Reconciliation",
    workHref: "/work/reconciliation",
    mode: "auto",
    modeLabel: "runs alone · exceptions held",
    difficulty: "hard",
    anecdote:
      "The controller called it the reconciliation she blocks a full morning for. Stripe holds payments for days, payouts aggregate several days of processing, fees come out before the money lands, and chargebacks hit weeks after the original charge. The bank shows one number; the books need hundreds.",
    anecdoteBy: "from our discovery research · Controller, Series-B vertical SaaS",
    does: [
      "Splits every payout back into its charges, refunds, and fees",
      "Matches each payment to the invoice it settled",
      "Posts fees where they belong — never netted silently out of revenue",
      "Reconciles the clearing account to $0.00, every night",
    ],
    run: [
      { k: "trigger", h: "A payout lands in the bank", p: "One line: $46,443.72. Behind it, several days of charges, refunds, and processing fees netted together." },
      { k: "unbundle", h: "The payout splits into its transactions", p: "247 payments and their fees, each tied back to the charge it came from." },
      { k: "match", h: "Every payment finds its invoice", p: "Charges to invoices, refunds against their originals, fees coded separately — gross revenue stays gross." },
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
    slug: "four-bank-month-end",
    title: "The four-bank month-end",
    one: "Four banks, seven accounts, 1,847 ledger lines — reconciled before the first coffee.",
    industry: "Vertical SaaS · Series B",
    work: "Reconciliation",
    workHref: "/work/reconciliation",
    mode: "auto",
    modeLabel: "runs alone · corrections drafted",
    difficulty: "very hard",
    anecdote:
      "Her month-end checklist starts at four different bank portals, each with its own login ritual, and ends with a GL export she times every month. Then the line-by-line matching begins — until a $2,445.86 variance shows up and the day's shape depends on explaining it. She blocks the whole day, because “everything going smoothly” is wishful thinking.",
    anecdoteBy: "from our discovery research · Controller, Series-B vertical SaaS",
    does: [
      "Pulls every account read-only — no portal logins, no PDF downloads",
      "Ties each bank to the ledger line by line, overnight",
      "Explains the variance instead of reporting it — every cause named",
      "Drafts the correcting entries with the evidence attached",
    ],
    run: [
      { k: "trigger", h: "The month ends", p: "Four banks, seven accounts, 1,847 ledger lines. Aleq starts the night the statements post." },
      { k: "match", h: "Line-by-line, every account", p: "Deposits, withdrawals, transfers between own accounts — matched with a confidence score and a reason each." },
      { k: "explain", h: "The $2,445.86 variance gets named", p: "An outstanding check, a wire fee the bank never told the ledger about, a deposit in transit — each cause identified, none left as “difference.”" },
      { k: "draft", h: "Correcting entries, drafted", p: "The wire fee posts with its explanation. Anything touching a judgment call is drafted and held for approval.", held: true },
      { k: "log", h: "The morning is a review", p: "Seven accounts at $0.00, two items held with reasons. The full-day block becomes twenty minutes." },
    ],
    je: [
      { side: "dr", acct: "Bank fees", val: "$25.00" },
      { side: "cr", acct: "Cash", val: "$25.00" },
    ],
    jeNote: "the wire fee NetSuite never knew about · posted with its explanation",
    related: ["stripe-payout-reconciliation", "lockbox-cash-application"],
  },
  {
    slug: "vendor-bank-detail-change",
    title: "The vendor who changed banks",
    one: "A known supplier emails new routing details. Nothing pays until a person says so.",
    industry: "Any industry",
    work: "Accounts payable",
    workHref: "/work/ap",
    mode: "manual",
    modeLabel: "human only · by design",
    difficulty: "moderate",
    anecdote:
      "The email looks right — same logo, same signature block, a polite note about a banking transition, and a new account number. It's the most expensive email in accounts payable, and the teams that get burned are the ones where nobody's job was to doubt it.",
    anecdoteBy: "the classic AP fraud vector — no anecdote needed",
    does: [
      "Detects the change the moment a bill or email carries new payment details",
      "Holds every payment to that vendor — automatically, regardless of confidence",
      "Raises a verification task with the old and new details side by side",
      "Resumes only when a named person confirms the payee",
    ],
    run: [
      { k: "trigger", h: "A bill arrives with new routing details", p: "Same vendor, same amounts — different account. Aleq diffs it against the payment history." },
      { k: "hold", h: "Payments to the vendor freeze", p: "No confidence score can clear this. The hold is unconditional and immediate.", held: true },
      { k: "verify", h: "A person confirms the payee", p: "Old and new details side by side, with the request's provenance. Verification is a named person's action, on the record.", held: true },
      { k: "log", h: "The decision is on the record", p: "Whoever asks later — auditor or CFO — sees who verified what, and when." },
    ],
    related: ["founder-finance-day", "lockbox-cash-application"],
  },
  {
    slug: "founder-finance-day",
    title: "The founder's finance day",
    one: "The AWS warning, the Stripe balance mystery, the 800 unread invoices — handled without a hire.",
    industry: "Dev tools · seed stage",
    work: "Accounts payable",
    workHref: "/work/ap",
    mode: "assist",
    modeLabel: "drafts · founder approves",
    difficulty: "moderate",
    anecdote:
      "A co-founder told us his finance stack was Gmail search. Roughly eight hundred emails from AWS, a “Payment Failed — Action Required” notice unopened for a day, and a Stripe balance he genuinely couldn't say was before or after fees. Finance got attention every third day, whenever a warning made it unavoidable.",
    anecdoteBy: "from our discovery research · Co-founder & CTO, seed-stage dev-tools startup",
    does: [
      "Reads the bill inbox so nobody has to search it",
      "Catches the payment-failed notice the day it lands — not the day service stops",
      "Explains the Stripe balance: gross, fees, pending payout",
      "Drafts everything for one approval pass instead of a lost afternoon",
    ],
    run: [
      { k: "trigger", h: "The inbox connects, read-only", p: "Every AWS, Stripe, and vendor email lands in one queue. Gmail search retires." },
      { k: "extract", h: "Bills read and coded", p: "Vendor, amount, due date, suggested coding — confidence score on every field, no template setup." },
      { k: "catch", h: "The AWS failure surfaces same-day", p: "Payment failed → drafted for approval with the invoice attached, before the service-interruption warning ever sends." },
      { k: "draft", h: "One approval pass", p: "The founder approves the week's bills in one sitting. Nothing posts, nothing pays, without the click.", held: true },
      { k: "log", h: "The Stripe number finally means something", p: "Gross this week, fees taken, payout pending — derived from the ledger, not guessed from a dashboard." },
    ],
    je: [
      { side: "dr", acct: "Cloud infrastructure", val: "$4,812.40" },
      { side: "cr", acct: "Accounts payable", val: "$4,812.40" },
    ],
    jeNote: "drafted · approved in one click · logged and reversible",
    related: ["vendor-bank-detail-change", "stripe-payout-reconciliation"],
  },
  {
    slug: "budget-to-actuals-managers",
    title: "Budget-to-actuals managers actually read",
    one: "Every property manager gets their controllable spend, flagged and drillable — without logging into anything.",
    industry: "Real-estate fund · self-storage",
    work: "Reporting",
    workHref: "/work/reporting",
    mode: "auto",
    modeLabel: "recurring cut · new cuts ask first",
    difficulty: "moderate",
    anecdote:
      "“I literally make the property managers log into QuickBooks and pull the reports themselves,” a fund's finance lead told us. “They can get the high-level numbers, but their next question is always: okay, where did I spend it? Pulling that detail is extra work, so half the time they don't bother — and I don't know if they've looked unless I go check.”",
    anecdoteBy: "from our discovery research · VP Finance, self-storage investment firm",
    does: [
      "Cuts each property's P&L to the manager's controllable categories",
      "Flags variances that matter — over threshold, not over everything",
      "Answers “where did I spend it” with the transactions, one click down",
      "Delivers on schedule, to every manager, without a login",
    ],
    run: [
      { k: "trigger", h: "The month seals", p: "Two dozen properties close on the same ledger. The report run starts itself." },
      { k: "cut", h: "One view per manager", p: "Repairs, utilities, travel, auctions — the eight categories they control, budget against actual." },
      { k: "flag", h: "Variances over the line light up", p: "Over 10% or $500 gets flagged with its driver. Everything else stays quiet." },
      { k: "drill", h: "Every number opens to its entries", p: "“Where did I spend it” is a click, not a request to finance." },
      { k: "hold", h: "A new cut asks first", p: "The recurring pack runs alone once proven. A new report format is drafted and held for finance's sign-off.", held: true },
    ],
    related: ["four-bank-month-end", "founder-finance-day"],
  },
];

export function getScenario(slug: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.slug === slug);
}
