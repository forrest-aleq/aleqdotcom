import type { IndustryTab } from "@/components/StandardIndustryTabs";

// ASC 350-40 tabs by BUILD TYPE — the capitalization rule shifts with what you're building.
export const asc350Builds: IndustryTab[] = [
  {
    id: "internal",
    label: "Internal-use",
    sub: "ASC 350-40",
    eyebrow: "Internal-use software",
    h: "Capitalize the build. Expense the rest.",
    p: "For software you build to run the business, the application-development stage is capitalized: coding, configuration, testing. The preliminary stage before it and the operation stage after it are expensed. Aleq draws the line from your project tracker.",
    points: [
      { b: "Preliminary stage", t: "scoping and evaluation — expensed." },
      { b: "Development stage", t: "coding, config, testing — capitalized." },
      { b: "Post-implementation", t: "training and maintenance — expensed." },
    ],
    card: {
      head: "SR-104 · internal platform",
      rows: [
        { acct: "Capitalized to date", val: "$642,000" },
        { acct: "Engineering hours", sub: "from Linear · $58/hr loaded", val: "11,069" },
        { acct: "Amortization / month", val: "$17,800" },
      ],
      footK: "Development stage · capitalized",
      ok: "capitalized",
    },
  },
  {
    id: "cloud",
    label: "Cloud (CCA)",
    sub: "implementation",
    eyebrow: "Cloud hosting arrangements",
    h: "Hosted software — the setup still capitalizes.",
    p: "In a hosting arrangement that's a service, the subscription is expensed — but the implementation costs follow the same internal-use rules. Aleq separates configuration and integration work that capitalizes from the data conversion and training that doesn't.",
    points: [
      { b: "Subscription fees", t: "expensed over the service term." },
      { b: "Implementation", t: "configuration & integration — capitalized." },
      { b: "Same amortization", t: "over the hosting-arrangement term." },
    ],
    card: {
      head: "ERP rollout · CCA",
      rows: [
        { acct: "Implementation capitalized", val: "$214,000" },
        { acct: "Subscription", sub: "expensed over term", val: "$96,000" },
        { acct: "Amortization / month", val: "$5,940" },
      ],
      footK: "Over the hosting term",
      ok: "capitalized",
    },
  },
  {
    id: "website",
    label: "Website",
    sub: "ASC 350-50",
    eyebrow: "Website development",
    h: "Build it to capitalize, run it to expense.",
    p: "Website development splits the same way: graphics and application development capitalize, while planning and ongoing content updates are expensed. Aleq applies the 350-50 cuts so the marketing site doesn't quietly become an asset.",
    points: [
      { b: "Application & infrastructure", t: "development costs — capitalized." },
      { b: "Planning & content", t: "ongoing operation — expensed." },
      { b: "Graphics", t: "treated as part of the software build." },
    ],
    card: {
      head: "Web platform · 350-50",
      rows: [
        { acct: "Development capitalized", val: "$128,000" },
        { acct: "Content & updates", sub: "expensed as incurred", val: "$34,000" },
        { acct: "Amortization / month", val: "$3,560" },
      ],
      footK: "Development vs operation",
      ok: "capitalized",
    },
  },
  {
    id: "upgrade",
    label: "Upgrades",
    sub: "new capability",
    eyebrow: "Upgrades & enhancements",
    h: "New capability capitalizes. Upkeep doesn't.",
    p: "An upgrade that adds functionality is a fresh capitalizable project; maintenance that keeps the lights on is expensed. The line is a judgment, so Aleq drafts which work adds capability and which is upkeep, and holds it for your sign-off.",
    points: [
      { b: "Added functionality", t: "new project — capitalized and amortized." },
      { b: "Maintenance", t: "bug fixes and upkeep — expensed." },
      { b: "The split", t: "drafted per release, held for sign-off." },
    ],
    card: {
      head: "v3 release · enhancement",
      rows: [
        { acct: "New capability capitalized", val: "$96,400" },
        { acct: "Maintenance expensed", val: "$28,200" },
        { acct: "Amortization / month", val: "$2,678" },
      ],
      footK: "Capability vs upkeep · drafted",
      ok: "assessed",
    },
  },
];
