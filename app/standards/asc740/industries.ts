import type { IndustryTab } from "@/components/StandardIndustryTabs";

// ASC 740 tabs by PROVISION COMPONENT — what makes up the number.
export const asc740Parts: IndustryTab[] = [
  {
    id: "federal",
    label: "Federal",
    sub: "current + deferred",
    eyebrow: "Federal provision",
    h: "Book income, bridged to the federal liability.",
    p: "Aleq starts from pretax book income, applies your permanent and temporary differences, and splits the result into current tax payable and the deferred movement — the federal current and deferred provision, reconciled to the return.",
    points: [
      { b: "Current", t: "tax on this year's taxable income." },
      { b: "Deferred", t: "the change in net deferred balances." },
      { b: "Return-to-provision", t: "trued up when the return is filed." },
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
    p: "Each state with nexus gets its own apportionment, rate, and modifications. Aleq computes the blended state rate net of the federal benefit and rolls it into the effective rate — no separate workbook per state.",
    points: [
      { b: "Apportionment", t: "by sales, payroll, and property factors." },
      { b: "Net of federal", t: "state taxes deducted at the federal rate." },
      { b: "Nexus-aware", t: "states added as your footprint grows." },
    ],
    card: {
      head: "State · blended, net of federal",
      rows: [
        { acct: "Apportioned tax base", val: "$2,180,000" },
        { acct: "Blended state rate", sub: "net of federal benefit", val: "4.2%" },
        { acct: "State provision", val: "$91,600" },
      ],
      footK: "Rolled into the ETR",
      ok: "apportioned",
    },
  },
  {
    id: "international",
    label: "International",
    sub: "GILTI · FTC",
    eyebrow: "International",
    h: "Foreign earnings, GILTI, and the credits against them.",
    p: "Foreign subsidiaries bring GILTI, Subpart F, and foreign tax credits into the provision. Aleq computes the inclusions, applies the credits, and tracks the rate differential — the international piece, kept current with the group.",
    points: [
      { b: "GILTI & Subpart F", t: "inclusions computed from foreign results." },
      { b: "Foreign tax credits", t: "applied against the U.S. liability." },
      { b: "Rate differential", t: "tracked in the ETR reconciliation." },
    ],
    card: {
      head: "International · GILTI",
      rows: [
        { acct: "Foreign pretax earnings", val: "$640,000" },
        { acct: "GILTI inclusion", sub: "net of §250 deduction", val: "$320,000" },
        { acct: "Foreign tax credit", val: "$(58,000)", neg: true },
      ],
      footK: "Net U.S. impact",
      ok: "computed",
    },
  },
  {
    id: "credits",
    label: "Credits",
    sub: "R&D · §174",
    eyebrow: "Credits & incentives",
    h: "R&D credits earned, §174 capitalized, both tracked.",
    p: "The research credit reduces the current liability while §174 capitalization creates a deferred tax asset that reverses over five years. Aleq computes both from the same engineering spend and carries the interplay in the provision.",
    points: [
      { b: "R&D credit", t: "reduces current tax, drops the effective rate." },
      { b: "§174 capitalization", t: "creates a DTA, amortized over five years." },
      { b: "One source", t: "both driven from the same qualified spend." },
    ],
    card: {
      head: "Credits · R&D",
      rows: [
        { acct: "Qualified research expense", val: "$1,820,000" },
        { acct: "R&D credit", sub: "−3.8% of the ETR", val: "$(91,200)", neg: true },
        { acct: "§174 deferred tax asset", val: "$900,000" },
      ],
      footK: "Current down · deferred up",
      ok: "computed",
    },
  },
  {
    id: "carryforwards",
    label: "Carryforwards",
    sub: "NOLs",
    eyebrow: "Carryforwards",
    h: "NOLs carried, limited, and tested for realization.",
    p: "Post-2017 losses carry forward indefinitely but offset only 80% of taxable income, and a Section 382 ownership change can cap their use. Aleq tracks the balance, applies the limitation, and tests realization against projected income.",
    points: [
      { b: "80% limitation", t: "applied to post-2017 carryforwards." },
      { b: "Section 382", t: "ownership-change limits flagged and applied." },
      { b: "Realization", t: "tested before the DTA is carried." },
    ],
    card: {
      head: "Carryforward · federal NOL",
      rows: [
        { acct: "NOL carryforward", sub: "indefinite · 80% limit", val: "$5,200,000" },
        { acct: "Deferred tax asset", val: "$1,300,000" },
        { acct: "Valuation allowance", val: "$(800,000)", neg: true },
      ],
      footK: "Net realizable DTA",
      footV: "$500,000",
    },
  },
];
