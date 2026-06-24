import type { IndustryTab } from "@/components/StandardIndustryTabs";

export const asc606Industries: IndustryTab[] = [
  {
    id: "saas",
    label: "SaaS",
    sub: "ratable + usage",
    eyebrow: "SaaS & subscription",
    h: "Subscription ratable, usage at the point it's used.",
    p: "The subscription recognizes straight-line over the term; metered overage recognizes as consumed; setup and onboarding fees spread over the period they benefit. Aleq keeps all three on one schedule and re-derives the moment a customer expands.",
    points: [
      { b: "Subscription", t: "recognized ratably across the committed term." },
      { b: "Usage & overage", t: "recognized point-in-time as it's consumed." },
      { b: "Mid-term expansion", t: "re-allocated and re-derived, prior periods intact." },
    ],
    card: {
      head: "Subscription · C-7015 · over time",
      rows: [
        { acct: "Annual contract value", val: "$180,000" },
        { acct: "Recognized this month", sub: "1/12 of ACV", val: "$15,000" },
        { acct: "Deferred revenue", val: "$135,000" },
      ],
      footK: "Ratable · ties to the ledger",
      ok: "on schedule",
    },
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    sub: "net vs gross",
    eyebrow: "Marketplaces",
    h: "Principal or agent — the call that sets net vs gross.",
    p: "Whether you recognize the whole transaction or just your take rate turns on who controls the good or service before transfer. Aleq drafts the principal-versus-agent assessment with its reasoning and holds it for your sign-off — it moves the top line, so it never decides alone.",
    points: [
      { b: "Agent", t: "recognize the commission / take rate, net." },
      { b: "Principal", t: "recognize gross, with the supplier cost in COGS." },
      { b: "The control test", t: "drafted against ASC 606-10-55, held for sign-off." },
    ],
    card: {
      head: "GMV · agent · net",
      rows: [
        { acct: "Gross merchandise value", val: "$1,240,000" },
        { acct: "Take rate", sub: "agent — recognized net", val: "12%" },
        { acct: "Revenue recognized", val: "$148,800" },
      ],
      footK: "Net presentation · agent",
      ok: "assessed",
    },
  },
  {
    id: "proservices",
    label: "Pro services",
    sub: "% complete",
    eyebrow: "Professional services",
    h: "Over time, measured by progress toward done.",
    p: "When your work creates an asset the customer controls as it's built, revenue recognizes over time. Aleq measures progress by an input or output method and recognizes against it each period — no waiting for the final invoice.",
    points: [
      { b: "Over-time recognition", t: "where control transfers as you perform." },
      { b: "Input or output method", t: "cost-to-cost or milestones, applied consistently." },
      { b: "Estimate changes", t: "trued up cumulatively as scope moves." },
    ],
    card: {
      head: "Engagement · % complete",
      rows: [
        { acct: "Contract price", val: "$420,000" },
        { acct: "Costs incurred to date", sub: "cost-to-cost · 62%", val: "$161,200" },
        { acct: "Revenue recognized", val: "$260,400" },
      ],
      footK: "Over time · cost-to-cost",
      ok: "on schedule",
    },
  },
  {
    id: "hardware",
    label: "Hardware",
    sub: "point-in-time",
    eyebrow: "Hardware & physical goods",
    h: "Recognized at transfer of control — warranty apart.",
    p: "The unit recognizes when control transfers to the buyer; an extended warranty or service plan is a separate performance obligation recognized over its own term. Aleq splits the bundle and times each piece on its own.",
    points: [
      { b: "Goods", t: "recognized point-in-time at transfer of control." },
      { b: "Extended warranty", t: "separate obligation, recognized over the term." },
      { b: "Bill-and-hold", t: "tested against the control criteria before recognition." },
    ],
    card: {
      head: "Order · point-in-time",
      rows: [
        { acct: "Hardware", sub: "recognized at delivery", val: "$96,000" },
        { acct: "Extended warranty", sub: "over 24 months", val: "$12,000" },
        { acct: "Recognized at delivery", val: "$96,000" },
      ],
      footK: "Split · goods vs warranty",
      ok: "on schedule",
    },
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    sub: "custom builds",
    eyebrow: "Manufacturing",
    h: "Custom builds can recognize as you make them.",
    p: "Goods with no alternative use and an enforceable right to payment for work completed recognize over time, not on shipment. Aleq tests each build against those criteria and recognizes against progress where they're met.",
    points: [
      { b: "No alternative use", t: "plus right to payment → over-time recognition." },
      { b: "Standard goods", t: "recognized point-in-time at transfer of control." },
      { b: "Progress", t: "measured by units produced or cost incurred." },
    ],
    card: {
      head: "Build order · over time",
      rows: [
        { acct: "Order value", val: "$760,000" },
        { acct: "Units completed", sub: "44 of 80", val: "55%" },
        { acct: "Revenue recognized", val: "$418,000" },
      ],
      footK: "Over time · no alternative use",
      ok: "on schedule",
    },
  },
  {
    id: "healthcare",
    label: "Healthcare",
    sub: "variable price",
    eyebrow: "Healthcare",
    h: "Variable consideration, constrained to what holds.",
    p: "Payer adjustments, contractual allowances, and implicit price concessions make the transaction price an estimate. Aleq recognizes net of the constraint — only the amount highly likely not to reverse — and trues up as remittances land.",
    points: [
      { b: "Contractual allowances", t: "netted from gross charges at recognition." },
      { b: "The constraint", t: "revenue capped at what won't reverse." },
      { b: "Remittance true-up", t: "estimate adjusted as cash settles." },
    ],
    card: {
      head: "Net patient revenue · variable",
      rows: [
        { acct: "Gross charges", val: "$840,000" },
        { acct: "Contractual allowances", sub: "estimated, constrained", val: "$(512,000)", neg: true },
        { acct: "Net revenue recognized", val: "$328,000" },
      ],
      footK: "Net of constraint",
      ok: "estimated",
    },
  },
];
