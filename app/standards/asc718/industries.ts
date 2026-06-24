import type { IndustryTab } from "@/components/StandardIndustryTabs";

// ASC 718 tabs by AWARD TYPE — the measurement differs by instrument, not industry.
export const asc718Awards: IndustryTab[] = [
  {
    id: "rsu",
    label: "RSUs",
    sub: "service vesting",
    eyebrow: "Restricted stock units",
    h: "Fair value is the share price. Expense is the service.",
    p: "An RSU's grant-date fair value is simply the share price on the grant date. Aleq spreads it over the requisite service period and books the expense each month — no option model, no exercise to track.",
    points: [
      { b: "Grant-date fair value", t: "the share price on the grant date." },
      { b: "Attribution", t: "straight-line over the vesting period." },
      { b: "Forfeitures", t: "reversed as they occur, or estimated up front." },
    ],
    card: {
      head: "G-2405 · RSU · senior pool",
      rows: [
        { acct: "Units granted", val: "480,000" },
        { acct: "Grant-date fair value", sub: "$18.50 / share", val: "$8,880,000" },
        { acct: "Expense this month", val: "$185,000" },
      ],
      footK: "Straight-line over 4 years",
      ok: "on schedule",
    },
  },
  {
    id: "options",
    label: "Options",
    sub: "NSO / ISO",
    eyebrow: "Stock options",
    h: "Fair value needs a model — and your assumptions.",
    p: "Options are measured at grant-date fair value under an option-pricing model. Aleq assembles the inputs — expected term, volatility, risk-free rate — drafts the valuation, and holds the assumptions for your sign-off before it expenses over the vesting period.",
    points: [
      { b: "Black-Scholes inputs", t: "term, volatility, risk-free rate, dividend yield." },
      { b: "Assumptions", t: "drafted with basis, held for your sign-off." },
      { b: "Expense", t: "recognized over the requisite service period." },
    ],
    card: {
      head: "G-2390 · NSO · Black-Scholes",
      rows: [
        { acct: "Options granted", val: "120,000" },
        { acct: "Fair value / option", sub: "expected term 6.1 yr · vol 52%", val: "$7.42" },
        { acct: "Expense this month", val: "$18,550" },
      ],
      footK: "Assumptions held for sign-off",
      ok: "drafted",
    },
  },
  {
    id: "psu",
    label: "PSUs",
    sub: "performance",
    eyebrow: "Performance shares",
    h: "Vesting depends on an outcome — so does the expense.",
    p: "Performance awards vest on a target — ARR, an exit, a milestone. Aleq expenses based on the probable outcome for performance conditions, trues up as the estimate moves, and reverses if the target won't be met. Market conditions are baked into the grant-date fair value instead.",
    points: [
      { b: "Performance conditions", t: "expensed on probable outcome, trued up." },
      { b: "Market conditions", t: "priced into grant-date fair value, no true-up." },
      { b: "Probability", t: "drafted and held for your sign-off." },
    ],
    card: {
      head: "G-2411 · PSU · ARR target",
      rows: [
        { acct: "Target units", val: "200,000" },
        { acct: "Probable attainment", sub: "150% of ARR target", val: "100%" },
        { acct: "Expense this month", val: "$77,100" },
      ],
      footK: "Probable-outcome basis",
      ok: "estimated",
    },
  },
  {
    id: "espp",
    label: "ESPP",
    sub: "look-back",
    eyebrow: "Employee stock purchase plan",
    h: "The discount and the look-back are compensation.",
    p: "A qualified ESPP with a purchase discount and a look-back is compensatory. Aleq measures the cost — the discount plus the option-like value of the look-back — and recognizes it over the offering period.",
    points: [
      { b: "Purchase discount", t: "the stated discount off fair value." },
      { b: "Look-back", t: "valued like an option over the offering period." },
      { b: "Recognition", t: "spread across the offering period." },
    ],
    card: {
      head: "ESPP · 15% · 6-mo look-back",
      rows: [
        { acct: "Enrolled contributions", val: "$420,000" },
        { acct: "Compensation cost", sub: "discount + look-back value", val: "$98,400" },
        { acct: "Expense this month", val: "$16,400" },
      ],
      footK: "Over the offering period",
      ok: "on schedule",
    },
  },
  {
    id: "sar",
    label: "SARs",
    sub: "cash-settled",
    eyebrow: "Cash-settled SARs",
    h: "Settled in cash — so it's a liability, remeasured.",
    p: "Cash-settled stock appreciation rights are liability-classified, not equity. Aleq remeasures them to fair value every period until settlement and runs the change through expense — so the charge moves with your share price.",
    points: [
      { b: "Liability classification", t: "not equity — it settles in cash." },
      { b: "Remeasured each period", t: "to fair value through settlement." },
      { b: "Expense", t: "moves with the share price every period." },
    ],
    card: {
      head: "G-2377 · SAR · liability",
      rows: [
        { acct: "Rights outstanding", val: "60,000" },
        { acct: "Fair value this period", sub: "remeasured · +$1.10", val: "$9.30" },
        { acct: "Expense this month", val: "$22,400" },
      ],
      footK: "Remeasured to fair value",
      ok: "remeasured",
    },
  },
];
