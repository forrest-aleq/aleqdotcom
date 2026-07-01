import type { IndustryTab } from "@/components/StandardIndustryTabs";

// ASC 740 tabs by PROVISION COMPONENT — what makes up the number.
export const asc740Parts: IndustryTab[] = [
  {
    id: "federal",
    label: "Federal",
    sub: "current + deferred",
    eyebrow: "Federal provision",
    h: "Book income, bridged to the federal liability.",
    p: "Aleq starts from pretax book income, applies your recorded permanent and temporary differences, and splits the result into current tax payable and the deferred movement — the federal current and deferred provision, computed from the ledger.",
    points: [
      { b: "Current", t: "tax on this year's taxable income." },
      { b: "Deferred", t: "the change in net deferred balances." },
      { b: "Return-to-provision", t: "your team's true-up when the return is filed." },
    ],
    card: {
      head: "Federal · 21% statutory",
      rows: [
        { acct: "Pretax book income", val: "$2,400,000" },
        { acct: "Current provision", val: "$61,000" },
        { acct: "Deferred provision", val: "$452,000" },
      ],
      footK: "Federal provision",
      footV: "$513,000",
    },
  },
  {
    id: "state",
    label: "State & local",
    sub: "apportioned",
    eyebrow: "State & local",
    h: "Apportioned across every state you touch.",
    p: "Each state with nexus needs its own apportionment, rate, and modifications. That workbook is still your team's build today — state apportionment isn't a computed line in Aleq's provision yet. On our roadmap; see the federal provision for what runs now.",
    points: [
      { b: "Apportionment", t: "by sales, payroll, and property factors — your team's calculation." },
      { b: "Net of federal", t: "state taxes deducted at the federal rate." },
      { b: "Today", t: "track state provision outside Aleq until this ships." },
    ],
    unsupported: true,
    card: {
      head: "State · blended, net of federal",
      rows: [
        { acct: "Apportioned tax base", val: "$2,180,000" },
        { acct: "State provision", val: "not yet computed", neg: true },
      ],
      footK: "State apportionment",
      ok: "not supported",
    },
  },
  {
    id: "international",
    label: "International",
    sub: "GILTI · FTC",
    eyebrow: "International",
    h: "Foreign earnings, GILTI, and the credits against them.",
    p: "Foreign subsidiaries bring GILTI, Subpart F, and foreign tax credits into the provision — computations Aleq doesn't run today. This piece is still your team's build; it's on our roadmap, not something we'll approximate in the meantime.",
    points: [
      { b: "GILTI & Subpart F", t: "inclusions your team computes from foreign results." },
      { b: "Foreign tax credits", t: "applied against the U.S. liability by your team." },
      { b: "Today", t: "track the international provision outside Aleq until this ships." },
    ],
    unsupported: true,
    card: {
      head: "International · GILTI",
      rows: [
        { acct: "Foreign pretax earnings", val: "$640,000" },
        { acct: "GILTI / FTC", val: "not yet computed", neg: true },
      ],
      footK: "International provision",
      ok: "not supported",
    },
  },
  {
    id: "credits",
    label: "Credits",
    sub: "R&D · §174",
    eyebrow: "Credits & incentives",
    h: "R&D credits earned, §174 capitalized, both tracked.",
    p: "The research credit reduces the current liability, and §174 capitalization creates a deferred tax asset — you can record §174 as a temporary difference today, but computing the credit itself and enforcing the 5-year amortization automatically from engineering spend isn't built yet.",
    points: [
      { b: "R&D credit", t: "your team computes the credit amount today." },
      { b: "§174 capitalization", t: "recordable as a temporary difference; amortization isn't automatic yet." },
      { b: "Today", t: "compute both outside Aleq, then record the resulting DTA/credit." },
    ],
    unsupported: true,
    card: {
      head: "Credits · R&D",
      rows: [
        { acct: "Qualified research expense", val: "$1,820,000" },
        { acct: "R&D credit computation", val: "not yet automatic", neg: true },
      ],
      footK: "Credit computation",
      ok: "not supported",
    },
  },
  {
    id: "carryforwards",
    label: "Carryforwards",
    sub: "NOLs",
    eyebrow: "Carryforwards",
    h: "NOLs carried and tracked, period over period.",
    p: "Aleq tracks each NOL vintage — the original amount, what's been utilized, and what remains — as carryforwards are applied against current-year income. Post-2017's 80% limitation, a Section 382 ownership-change cap, and realization testing against projected income are still your team's assessment today.",
    points: [
      { b: "Carryforward tracking", t: "original, utilized, and remaining balance by vintage." },
      { b: "80% limitation & §382", t: "your team applies these; not computed automatically yet." },
      { b: "Realization", t: "your team's call; feeds the valuation allowance you set." },
    ],
    card: {
      head: "Carryforward · federal NOL",
      rows: [
        { acct: "NOL carryforward", sub: "indefinite", val: "$5,200,000" },
        { acct: "Deferred tax asset", val: "$1,300,000" },
        { acct: "Valuation allowance", sub: "set by your team", val: "$(800,000)", neg: true },
      ],
      footK: "Net realizable DTA",
      footV: "$500,000",
    },
  },
];
