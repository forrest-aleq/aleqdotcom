import type { IndustryTab } from "@/components/StandardIndustryTabs";

export const asc842Industries: IndustryTab[] = [
  {
    id: "saas",
    label: "SaaS",
    sub: "offices + cloud",
    eyebrow: "SaaS & subscription",
    h: "Mostly real estate — and the leases hiding in your cloud bill.",
    p: "Headquarters and regional offices are the obvious ones. But reserved data-center capacity and colocation racks can be embedded leases under ASC 842 — Aleq tests each commitment for the right to control an identified asset.",
    points: [
      { b: "HQ & satellite offices", t: "operating leases, escalators and free-rent periods handled." },
      { b: "Colocation & reserved capacity", t: "tested for an embedded lease before it's expensed." },
      { b: "Short coworking space", t: "short-term exemption applied, expensed straight-line." },
    ],
    card: {
      head: "Office · 535 Mission · operating",
      rows: [
        { acct: "Right-of-use asset", val: "$1,840,000" },
        { acct: "Lease liability", val: "$1,792,400" },
        { acct: "Monthly payment", sub: "3% annual escalator", val: "$38,500" },
      ],
      footK: "On schedule · ties to the ledger",
      ok: "on schedule",
    },
  },
  {
    id: "hardware",
    label: "Hardware",
    sub: "equipment + fleet",
    eyebrow: "Hardware & physical goods",
    h: "Equipment and fleet — where finance leases actually show up.",
    p: "Production equipment, tooling, and vehicle fleets often transfer substantially all of an asset's economic life. Aleq runs the ASC 842-10-25 classification on every schedule and lands finance versus operating with its reasoning attached.",
    points: [
      { b: "Production equipment", t: "finance lease — ROU amortized, interest accreted separately." },
      { b: "Vehicle fleet", t: "operating, with a per-VIN schedule rolled up to the GL." },
      { b: "Warehouse space", t: "operating, with renewal options weighed into the term." },
    ],
    card: {
      head: "CNC line · L-103 · finance",
      rows: [
        { acct: "Right-of-use asset", val: "$612,800" },
        { acct: "Lease liability", val: "$598,400" },
        { acct: "Interest this month", sub: "8.0% / 12 on opening", val: "$3,989" },
      ],
      footK: "Finance lease · interest split out",
      ok: "on schedule",
    },
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    sub: "plant + machinery",
    eyebrow: "Manufacturing",
    h: "Plant and heavy machinery — long terms, real interest.",
    p: "Buildings, presses, and line equipment carry multi-year terms that frequently clear the 75%-of-life and 90%-of-fair-value tests. Aleq classifies each, accretes interest on the liability, and keeps the rollforward audit-ready.",
    points: [
      { b: "Plant & buildings", t: "finance leases where the term covers most of the useful life." },
      { b: "Line equipment & presses", t: "PV tested against fair value at the discount rate." },
      { b: "Forklifts & material handling", t: "operating, batched into one tidy schedule." },
    ],
    card: {
      head: "Plant · Building B · finance",
      rows: [
        { acct: "Right-of-use asset", val: "$4,210,000" },
        { acct: "Lease liability", val: "$4,118,600" },
        { acct: "Interest this month", sub: "6.5% / 12 on opening", val: "$22,309" },
      ],
      footK: "Finance lease · ties to the ledger",
      ok: "on schedule",
    },
  },
  {
    id: "healthcare",
    label: "Healthcare",
    sub: "imaging + space",
    eyebrow: "Healthcare",
    h: "Imaging equipment and clinic space — plus the embedded ones.",
    p: "MRI and imaging suites are usually finance leases; clinic and lab space is operating. Managed-equipment service contracts often bury a lease inside them — Aleq separates the lease component from the service before either is booked.",
    points: [
      { b: "Imaging & diagnostic equipment", t: "finance leases, depreciated and accreted apart." },
      { b: "Clinic & lab space", t: "operating, with options and escalators modeled." },
      { b: "Managed-equipment contracts", t: "lease component split from the service component." },
    ],
    card: {
      head: "MRI suite · L-220 · finance",
      rows: [
        { acct: "Right-of-use asset", val: "$1,360,000" },
        { acct: "Lease liability", val: "$1,331,200" },
        { acct: "Interest this month", sub: "7.5% / 12 on opening", val: "$8,320" },
      ],
      footK: "Finance lease · service split out",
      ok: "on schedule",
    },
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    sub: "fulfillment + last-mile",
    eyebrow: "Marketplaces",
    h: "Fulfillment footprint and the fleet that moves it.",
    p: "Warehouse and sortation space scales with volume, and last-mile fleets turn over fast. Aleq keeps every site and vehicle on one schedule, remeasuring as you add or release capacity through the year.",
    points: [
      { b: "Fulfillment & sortation space", t: "operating, remeasured as the footprint changes." },
      { b: "Last-mile vehicle fleet", t: "operating, per-vehicle schedules rolled up." },
      { b: "Material-handling equipment", t: "classified per unit, finance where it qualifies." },
    ],
    card: {
      head: "Fulfillment · DC-04 · operating",
      rows: [
        { acct: "Right-of-use asset", val: "$2,940,000" },
        { acct: "Lease liability", val: "$2,866,300" },
        { acct: "Monthly payment", sub: "CPI-linked escalator", val: "$61,200" },
      ],
      footK: "On schedule · ties to the ledger",
      ok: "on schedule",
    },
  },
  {
    id: "proservices",
    label: "Pro services",
    sub: "office space",
    eyebrow: "Professional services",
    h: "For services firms, it's all office space.",
    p: "For services firms the lease portfolio is offices and the equipment in them. Aleq carries each suite as an operating lease, applies the short-term exemption where you've elected it, and keeps the disclosure rollforward ready.",
    points: [
      { b: "Office suites", t: "operating, free-rent and escalators straight-lined." },
      { b: "Parking & storage", t: "folded into the related office schedule." },
      { b: "Copiers & office equipment", t: "short-term exemption applied where elected." },
    ],
    card: {
      head: "Office · Suite 1400 · operating",
      rows: [
        { acct: "Right-of-use asset", val: "$884,000" },
        { acct: "Lease liability", val: "$861,500" },
        { acct: "Monthly payment", sub: "free-rent straight-lined", val: "$18,400" },
      ],
      footK: "On schedule · ties to the ledger",
      ok: "on schedule",
    },
  },
];
