// Competitive comparison data. One source of truth → every /compare/* page is ~5 lines.
// Positioning spine: Aleq IS the system of record that also DOES the work, powered by TAMi.
// Integration with the incumbent is a 48h on-ramp, then you cut over.

export type Cmp = {
  slug: string;
  name: string;
  themCat: string;
  h1: string;
  lead: string;
  claim: string;
  aleqSub: string;
  aleqBullets: string[];
  themSub: string;
  themBullets: string[];
  cells: Record<string, string>; // keyed by MATRIX row.key
  quote: string;
  quoteCite: string;
  ctaH2: string;
  ctaLead: string;
};

// Shared comparison dimensions + Aleq's (constant) answer. Each competitor fills `cells`.
export const MATRIX: { group: string; rows: { key: string; dim: string; aleq: string }[] }[] = [
  {
    group: "The model",
    rows: [
      { key: "sor", dim: "System of record", aleq: "✓ — and operates it" },
      { key: "who", dim: "Who does the work", aleq: "Aleq" },
      { key: "aiacts", dim: "AI that acts on the ledger", aleq: "✓ governed" },
    ],
  },
  {
    group: "The work",
    rows: [
      { key: "recon", dim: "Reconciliation", aleq: "Overnight, to $0.00" },
      { key: "close", dim: "Month-end close", aleq: "Continuous, sealed daily" },
      { key: "collections", dim: "Collections", aleq: "By voice + email" },
      { key: "ap", dim: "Accounts payable", aleq: "Extracted, 3-way matched" },
    ],
  },
  {
    group: "GAAP",
    rows: [
      { key: "standards", dim: "Standards derived", aleq: "✓ 606 · 842 · 718 · 740" },
      { key: "multi", dim: "Multi-entity consolidation", aleq: "✓ automated" },
    ],
  },
  {
    group: "Trust",
    rows: [
      { key: "audit", dim: "Action-level audit trail", aleq: "✓ signed & replayable" },
      { key: "reversal", dim: "One-click reversal", aleq: "✓" },
      { key: "eval", dim: "Eval-gated before posting", aleq: "✓" },
    ],
  },
  {
    group: "Commercials",
    rows: [
      { key: "ttl", dim: "Time to live", aleq: "48 hours" },
      { key: "pricing", dim: "Pricing model", aleq: "$60/hr worked" },
    ],
  },
];

const ALEQ_BULLETS = [
  "Closes, reconciles, and collects end to end — inside limits you set",
  "Live in 48 hours on read-only credentials — no implementation project",
  "Every action logged, gated, replayable, and reversible",
  "Eval-gated before any change touches the books",
  "No seats, no platform fee — priced on the work, not headcount",
];

export const COMPETITORS: Record<string, Cmp> = {
  netsuite: {
    slug: "netsuite",
    name: "NetSuite",
    themCat: "legacy ERP",
    h1: "The ERP stores your close. Aleq does it.",
    lead:
      "NetSuite is a powerful system of record — operated entirely by you and a bench of consultants. Aleq operates the books for you, and leaves a trail more auditable than the ledger itself.",
    claim:
      "NetSuite gives you the most configurable place in the world to record the work. Aleq does the work — closes, reconciles, collects — and signs every move so your auditor can replay it.",
    aleqSub: "Does the work; you supervise.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Stores the work; you operate it.",
    themBullets: [
      "You and your team do the close — NetSuite records it",
      "$50k–200k and 3–6 months of consultants to implement",
      "Audit trail is manual; no action-level signing or undo",
      "No autonomous execution, no collections by voice",
      "Seat licenses plus platform and module fees",
    ],
    cells: {
      sor: "✓ (you operate it)", who: "You + consultants", aiacts: "—",
      recon: "Manual / Excel", close: "Your team runs it", collections: "—", ap: "Manual entry",
      standards: "You configure", multi: "✓ (manual)",
      audit: "Manual", reversal: "—", eval: "—",
      ttl: "3–6 months", pricing: "Seats + platform",
    },
    quote:
      "We didn't need a more configurable place to type the journal entry. We needed the entry made, checked, and signed — by morning.",
    quoteCite: "— the case for a controller over a console",
    ctaH2: "Still doing the close inside NetSuite?",
    ctaLead:
      "Bring an unsigned period. We'll connect read-only and close it — with the full signed trail — on the call.",
  },

  sap: {
    slug: "sap",
    name: "SAP",
    themCat: "enterprise backbone",
    h1: "SAP is the enterprise backbone. Aleq gets the work done.",
    lead:
      "SAP runs the enterprise — and an army runs SAP. Aleq runs the finance work beside it, live in 48 hours, and signs every move it makes.",
    claim:
      "SAP is the system of record for the whole enterprise. Aleq is the operator for the finance team — it closes, reconciles, and collects, beside the system you already trust.",
    aleqSub: "Does the work; you supervise.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Stores the work; an army operates it.",
    themBullets: [
      "Your team operates the finance close inside SAP — it records it",
      "Multi-year implementations and a standing consulting bench",
      "Audit trail exists, but no per-action signing or one-click undo",
      "No autonomous execution, no collections by voice",
      "Enterprise licensing plus integration and basis costs",
    ],
    cells: {
      sor: "✓ (you operate it)", who: "You + SI partners", aiacts: "—",
      recon: "Manual / heavy config", close: "Your team runs it", collections: "—", ap: "Workflow you build",
      standards: "You configure", multi: "✓ (complex)",
      audit: "Manual", reversal: "—", eval: "—",
      ttl: "6–18 months", pricing: "Enterprise license",
    },
    quote:
      "SAP told us where every number lived. It never once made one of them true on its own.",
    quoteCite: "— the case for an operator beside the backbone",
    ctaH2: "Running finance inside SAP?",
    ctaLead:
      "Put Aleq beside the system you trust. Bring an unsigned period and we'll close it on the call — signed and replayable.",
  },

  "sage-intacct": {
    slug: "sage-intacct",
    name: "Sage Intacct",
    themCat: "mid-market system",
    h1: "A system to record in. Or an operator who does the work.",
    lead:
      "Sage Intacct gives finance a solid mid-market system of record. Aleq gives finance an operator that actually does the work — live in 48 hours, every move signed.",
    claim:
      "Intacct is a clean place to record the close. Aleq does the close — reconciles, derives the GAAP, collects the cash — and leaves a signed trail your auditor can replay.",
    aleqSub: "Does the work; you supervise.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Stores the work; your admins operate it.",
    themBullets: [
      "Your team runs the close — Intacct records it",
      "Weeks of implementation and ongoing admin to maintain",
      "Audit log, but no action-level signing or one-click undo",
      "No autonomous execution, no collections by voice",
      "Seat licenses plus per-module pricing",
    ],
    cells: {
      sor: "✓ (you operate it)", who: "You + admins", aiacts: "—",
      recon: "Rules you maintain", close: "Your team runs it", collections: "—", ap: "Approval workflows",
      standards: "Modules you configure", multi: "✓",
      audit: "Manual", reversal: "—", eval: "—",
      ttl: "1–3 months", pricing: "Seats + modules",
    },
    quote:
      "A better dashboard didn't close the month. Someone still had to do every entry behind it.",
    quoteCite: "— the case for an operator over a system",
    ctaH2: "Closing the month inside Intacct?",
    ctaLead:
      "Bring an unsigned period. We'll connect read-only and close it — with the full signed trail — on the call.",
  },

  quickbooks: {
    slug: "quickbooks",
    name: "QuickBooks",
    themCat: "SMB bookkeeping",
    h1: "QuickBooks is where the forms live. Aleq does the work.",
    lead:
      "QuickBooks is where small businesses keep the books. Aleq is the controller that runs them — reconciling, closing, collecting — and becomes your system of record when you outgrow QuickBooks.",
    claim:
      "QuickBooks stores what you type. Aleq is the controller you'd otherwise hire — it does the close, derives the GAAP, and signs every move.",
    aleqSub: "Does the work; you supervise.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Stores the forms; you or a bookkeeper operate it.",
    themBullets: [
      "You or a bookkeeper enter and categorize — QuickBooks stores it",
      "No real close, consolidation, or GAAP standards engine",
      "Basic audit log; no action-level signing or undo",
      "No autonomous execution, no collections by voice",
      "Per-seat subscription, add-ons for everything",
    ],
    cells: {
      sor: "✓ (SMB)", who: "You / a bookkeeper", aiacts: "—",
      recon: "Suggested matches", close: "Manual", collections: "Reminders", ap: "Basic bill pay",
      standards: "—", multi: "Limited",
      audit: "Basic log", reversal: "Edit / delete", eval: "—",
      ttl: "DIY setup", pricing: "Per seat + add-ons",
    },
    quote:
      "QuickBooks held the numbers. It never reconciled one, closed a month, or called a customer.",
    quoteCite: "— the case for a controller over a form",
    ctaH2: "Outgrowing QuickBooks?",
    ctaLead:
      "Keep QuickBooks today — Aleq works on top. Bring last month and we'll close it, signed, on the call.",
  },

  rillet: {
    slug: "rillet",
    name: "Rillet",
    themCat: "AI-native SaaS ledger",
    h1: "Rillet modernized the ledger. Aleq runs it for you.",
    lead:
      "Rillet built a clean, modern, AI-assisted ledger — that your team still drives. Aleq drives the ledger for you, by voice and on a leash, and signs every move.",
    claim:
      "Rillet helps you close faster. Aleq closes — reconciles, collects, derives the GAAP — autonomously and governed, with a receipt for every action.",
    aleqSub: "Does the work; you supervise.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Modern ledger with AI assists; you still drive.",
    themBullets: [
      "A modern ledger with AI assists — you still operate it",
      "Helps you close faster; doesn't close on its own",
      "No autonomous execution or collections by voice",
      "Audit trail, but no per-action signing + one-click undo across the work",
      "SaaS subscription per module / seat",
    ],
    cells: {
      sor: "✓ (modern)", who: "You (AI-assisted)", aiacts: "Assists, doesn't act",
      recon: "AI-assisted", close: "Assisted", collections: "—", ap: "Assisted",
      standards: "Built-in", multi: "✓",
      audit: "Standard", reversal: "—", eval: "—",
      ttl: "Weeks", pricing: "SaaS subscription",
    },
    quote:
      "A faster ledger is still a ledger you operate. We wanted the operator, not just a better cockpit.",
    quoteCite: "— the case for an operator over a cockpit",
    ctaH2: "Past a pure SaaS ledger?",
    ctaLead:
      "Bring your books. We'll connect read-only and run a close on them — signed and replayable — on the call.",
  },

  campfire: {
    slug: "campfire",
    name: "Campfire",
    themCat: "AI accounting copilot",
    h1: "Campfire answers your books. Aleq acts on them.",
    lead:
      "Campfire puts an AI copilot on your accounting data — ask it anything. Aleq doesn't wait to be asked: it does the work, inside policy, and signs every move.",
    claim:
      "Campfire answers questions. Aleq takes actions — reconciles, closes, collects — through a governed, signed path into the ledger your auditor can replay.",
    aleqSub: "Acts on the books, inside policy.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Answers about the books; you still act.",
    themBullets: [
      "Answers questions about your books — you still do the work",
      "A copilot / assistant layer, not an autonomous operator",
      "No governed execution path into the ledger",
      "No collections by voice; no earned-autonomy model",
      "No action receipt your auditor can replay",
    ],
    cells: {
      sor: "Layer on your ERP", who: "You (AI answers)", aiacts: "Answers, doesn't act",
      recon: "Insights", close: "Insights", collections: "—", ap: "Insights",
      standards: "—", multi: "—",
      audit: "—", reversal: "—", eval: "—",
      ttl: "Fast", pricing: "SaaS subscription",
    },
    quote:
      "Asking the books a great question is not the same as the books being done. We needed them done.",
    quoteCite: "— the case for acting over asking",
    ctaH2: "Done asking your books questions?",
    ctaLead:
      "Stop asking, start delegating. Bring an unsigned period and watch Aleq act on it — signed — on the call.",
  },

  puzzle: {
    slug: "puzzle",
    name: "Puzzle",
    themCat: "startup bookkeeping",
    h1: "Puzzle keeps the books. Aleq is the controller.",
    lead:
      "Puzzle keeps clean, real-time books for startups. Aleq is the controller on top — closing, reconciling, collecting, deriving GAAP — and becomes your system of record as you scale.",
    claim:
      "Puzzle keeps the books clean. Aleq does what a controller does on top of clean books — closes, derives the GAAP, collects the cash — and signs every move.",
    aleqSub: "Does the controller's work; you supervise.",
    aleqBullets: ALEQ_BULLETS,
    themSub: "Keeps clean books; not a controller.",
    themBullets: [
      "Automated bookkeeping and clean, real-time books",
      "Not a controller: no autonomous close, collections, or GAAP engine",
      "No governed execution or per-action signing across the work",
      "No collections by voice; no earned autonomy",
      "Subscription by stage / burn",
    ],
    cells: {
      sor: "✓ (startup books)", who: "Bookkeeping automation", aiacts: "—",
      recon: "Automated", close: "Basic", collections: "—", ap: "Basic",
      standards: "Limited", multi: "—",
      audit: "Basic", reversal: "—", eval: "—",
      ttl: "Fast", pricing: "Stage-based sub",
    },
    quote:
      "Clean books were the floor, not the job. We still needed someone to actually run finance.",
    quoteCite: "— the case for a controller over a bookkeeper",
    ctaH2: "Outgrowing bookkeeping?",
    ctaLead:
      "Keep Puzzle's clean books — Aleq runs the controller's work on top. Bring last month and we'll close it on the call.",
  },
};

export const COMPARE_ORDER = [
  "netsuite",
  "sap",
  "sage-intacct",
  "quickbooks",
  "rillet",
  "campfire",
  "puzzle",
];
