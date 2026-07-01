import type { IndustryTab } from "@/components/StandardIndustryTabs";

// ASC 815 tabs by HEDGE TYPE — where the mark goes depends on what you're hedging.
export const asc815Hedges: IndustryTab[] = [
  {
    id: "fx",
    label: "FX forward",
    sub: "cash flow",
    eyebrow: "Foreign-currency forward",
    h: "Lock the rate on forecasted sales — mark to OCI.",
    p: "A forward hedging forecasted foreign-currency revenue is a cash-flow hedge: the effective portion sits in OCI and reclassifies to revenue when the sale lands. Your team confirms effectiveness each period; Aleq routes the mark from there.",
    points: [
      { b: "Effective portion", t: "deferred in OCI until the sale hits earnings." },
      { b: "Reclassification", t: "moved to revenue when the forecast occurs." },
      { b: "Effectiveness", t: "confirmed by your team, by dollar-offset each period." },
    ],
    card: {
      head: "GBP/USD forward · cash flow",
      rows: [
        { acct: "Notional", sub: "matures Apr 2027", val: "£2,400,000" },
        { acct: "Fair value", val: "$12,140" },
        { acct: "Deferred in OCI", val: "$12,140" },
      ],
      footK: "Highly effective · 98%",
      ok: "in OCI",
    },
  },
  {
    id: "swap",
    label: "Rate swap",
    sub: "cash flow",
    eyebrow: "Interest-rate swap",
    h: "Turn floating-rate debt into a fixed cost.",
    p: "A pay-fixed, receive-floating swap on variable-rate debt is a cash-flow hedge of interest payments. Once your team confirms effectiveness, Aleq defers the effective portion in OCI and reclassifies it to interest expense as each payment settles, so the P&L sees a fixed rate.",
    points: [
      { b: "Pay-fixed swap", t: "converts floating interest to fixed." },
      { b: "OCI deferral", t: "reclassified to interest expense each period." },
      { b: "Critical-terms match", t: "supports a highly-effective conclusion." },
    ],
    card: {
      head: "SOFR swap · cash flow",
      rows: [
        { acct: "Notional", sub: "matures May 2031", val: "$5,000,000" },
        { acct: "Fair value", val: "$18,400" },
        { acct: "Deferred in OCI", val: "$18,400" },
      ],
      footK: "Highly effective · critical terms match",
      ok: "in OCI",
    },
  },
  {
    id: "fairvalue",
    label: "Fair value",
    sub: "not yet supported",
    eyebrow: "Fair-value hedge",
    h: "Hedge a firm commitment — both sides hit earnings.",
    p: "A forward hedging a recognized asset or firm commitment is a fair-value hedge: both the derivative and the hedged item are marked through earnings, so the gains and losses offset in the same period. Aleq only carries cash-flow hedge designations today — this hedge type is on the roadmap, not something we'll approximate in the meantime.",
    points: [
      { b: "Both marked to earnings", t: "derivative and hedged item, together — not modeled yet." },
      { b: "Natural offset", t: "the two would move against each other each period." },
      { b: "Today", t: "designate this hedge outside Aleq until it ships." },
    ],
    unsupported: true,
    card: {
      head: "EUR/USD forward · fair value",
      rows: [
        { acct: "Notional", sub: "matures Dec 2026", val: "€1,800,000" },
        { acct: "Designation", val: "rejected at creation", neg: true },
      ],
      footK: "Fair-value designation",
      ok: "not supported",
    },
  },
  {
    id: "netinvestment",
    label: "Net investment",
    sub: "not yet supported",
    eyebrow: "Net-investment hedge",
    h: "Hedge a foreign sub — the mark lands in CTA.",
    p: "A hedge of the net investment in a foreign operation defers its effective portion in the cumulative translation adjustment, alongside the translation it offsets. Aleq doesn't carry this designation today — cash-flow hedges are the only type it supports right now.",
    points: [
      { b: "Effective portion", t: "would defer in CTA within OCI — not modeled yet." },
      { b: "Offsets translation", t: "would move with the foreign-sub translation." },
      { b: "Today", t: "track this hedge outside Aleq until it ships." },
    ],
    unsupported: true,
    card: {
      head: "EUR net-investment hedge",
      rows: [
        { acct: "Notional", sub: "rolling 12-month", val: "€3,000,000" },
        { acct: "Designation", val: "rejected at creation", neg: true },
      ],
      footK: "Net-investment designation",
      ok: "not supported",
    },
  },
];
