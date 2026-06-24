import type { IndustryTab } from "@/components/StandardIndustryTabs";

// ASC 340 tabs by GO-TO-MARKET MOTION — what you pay, and how long it benefits.
export const asc340Motions: IndustryTab[] = [
  {
    id: "new",
    label: "New business",
    sub: "capitalize",
    eyebrow: "New-logo commissions",
    h: "The cost of winning the deal — capitalized.",
    p: "A commission paid to land a new contract is an incremental cost of obtaining it, so it's capitalized and amortized over the period it benefits — often longer than the initial term, because the customer relationship outlasts it.",
    points: [
      { b: "Incremental cost", t: "paid only because the deal closed → capitalized." },
      { b: "Period of benefit", t: "amortized over expected customer life." },
      { b: "Loaded", t: "payroll taxes on the commission ride along." },
    ],
    card: {
      head: "C-7015 · new logo · Allison W.",
      rows: [
        { acct: "Commission paid", val: "$22,680" },
        { acct: "Capitalized", sub: "amortized over 48 months", val: "$22,680" },
        { acct: "Amortization / month", val: "$473" },
      ],
      footK: "Period of benefit · 48 mo",
      ok: "capitalized",
    },
  },
  {
    id: "renewal",
    label: "Renewals",
    sub: "commensurate test",
    eyebrow: "Renewal commissions",
    h: "Renewal pay turns on the commensurate test.",
    p: "If a renewal commission is commensurate with the new-business commission, the relationship is already captured and the renewal cost is expensed. If it isn't, the renewal is a fresh asset. Aleq runs the test and drafts the call.",
    points: [
      { b: "Commensurate", t: "renewal rate ≈ new rate → expense as incurred." },
      { b: "Not commensurate", t: "lower renewal rate → capitalize separately." },
      { b: "The ratio test", t: "drafted against ASC 340-40-25, held for sign-off." },
    ],
    card: {
      head: "C-6620 · renewal · commensurate",
      rows: [
        { acct: "Renewal commission", val: "$4,200" },
        { acct: "Rate vs new business", sub: "8% vs 9% — commensurate", val: "≈ equal" },
        { acct: "Expensed as incurred", val: "$4,200" },
      ],
      footK: "Commensurate · not capitalized",
      ok: "assessed",
    },
  },
  {
    id: "channel",
    label: "Channel",
    sub: "partner fees",
    eyebrow: "Channel & referral",
    h: "Partner referral fees follow the same rule.",
    p: "A referral fee or channel payout paid to win a deal is just as incremental as an internal commission. Aleq capitalizes it against the same contract and amortizes it over the same period of benefit — one schedule, internal and external alike.",
    points: [
      { b: "Referral fees", t: "incremental to the deal → capitalized." },
      { b: "Same period", t: "amortized over the customer's expected life." },
      { b: "One schedule", t: "internal and partner costs, side by side." },
    ],
    card: {
      head: "C-7102 · partner referral",
      rows: [
        { acct: "Referral fee paid", val: "$15,000" },
        { acct: "Capitalized", sub: "amortized over 48 months", val: "$15,000" },
        { acct: "Amortization / month", val: "$313" },
      ],
      footK: "Period of benefit · 48 mo",
      ok: "capitalized",
    },
  },
  {
    id: "selfserve",
    label: "Self-serve",
    sub: "expedient",
    eyebrow: "Self-serve & short deals",
    h: "Short-lived deals are expensed as incurred.",
    p: "Where the amortization period would be a year or less, the ASC 340-40 practical expedient lets you expense the cost as incurred. Aleq applies it by policy — no asset to set up for a deal that won't outlive the year.",
    points: [
      { b: "One-year expedient", t: "applied where benefit ≤ 12 months." },
      { b: "By policy", t: "elected and applied consistently." },
      { b: "No micro-assets", t: "small short-life costs expensed cleanly." },
    ],
    card: {
      head: "Self-serve · monthly plans",
      rows: [
        { acct: "Commissions paid", val: "$6,400" },
        { acct: "Amortization period", sub: "≤ 12 months", val: "expedient" },
        { acct: "Expensed as incurred", val: "$6,400" },
      ],
      footK: "Practical expedient applied",
      ok: "expensed",
    },
  },
];
