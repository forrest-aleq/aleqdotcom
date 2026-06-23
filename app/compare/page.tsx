import type { Metadata } from "next";
import Link from "next/link";
import { COMPETITORS, COMPARE_ORDER } from "@/lib/compare";

export const metadata: Metadata = {
  title: "Compare Aleq — the controller vs. the software you operate",
  description:
    "Everyone else sells software that stores the close. Aleq does the close — autonomously, governed, signed. See how Aleq compares to NetSuite, SAP, Sage Intacct, QuickBooks, Rillet, Campfire, and Puzzle.",
};

const PATTERN: { dim: string; aleq: string; them: string }[] = [
  { dim: "Does the work end to end", aleq: "✓", them: "You operate it" },
  { dim: "AI that acts, governed", aleq: "✓", them: "—" },
  { dim: "Reconciles to $0.00 overnight", aleq: "✓", them: "Manual" },
  { dim: "Closes the month continuously", aleq: "✓", them: "You run it" },
  { dim: "Collections by voice", aleq: "✓", them: "—" },
  { dim: "Signed, replayable audit trail", aleq: "✓", them: "Manual" },
  { dim: "Time to live", aleq: "48 hours", them: "Months" },
  { dim: "Pricing model", aleq: "$/hr worked", them: "Seats + platform" },
];

function cls(v: string) {
  if (v.startsWith("✓")) return "c-yes";
  if (v === "—") return "c-no";
  return "c-mid";
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>compare</div>
          <h1 className="h1">Everyone else sells software. <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Aleq does the work.</span></h1>
          <p className="lead" style={{ marginTop: "18px" }}>
            NetSuite, SAP, Intacct, QuickBooks — and even the new AI-native ledgers — give you a place to record the close. Aleq is the controller that does it: reconciles, closes, collects, derives the GAAP, and signs every move.
          </p>
        </div>
      </section>

      <section className="dsection" style={{ paddingTop: "8px" }}>
        <div className="container">
          <div className="dhead center"><span className="eyebrow">the pattern</span><h2 className="h2">They store the books. Aleq operates them.</h2></div>
          <div className="cmpx reveal">
            <div className="cmpx-head">
              <div className="cmpx-dim"></div>
              <div className="cmpx-col cmpx-aleq">Aleq</div>
              <div className="cmpx-col">Everyone else</div>
            </div>
            {PATTERN.map((r) => (
              <div className="cmpx-row" key={r.dim}>
                <div className="cmpx-dim">{r.dim}</div>
                <div className={"cmpx-cell cmpx-aleq " + cls(r.aleq)}>{r.aleq}</div>
                <div className={"cmpx-cell " + cls(r.them)}>{r.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">head to head</span><h2 className="h2">Pick your incumbent.</h2></div>
          <div className="cmp-cards reveal">
            {COMPARE_ORDER.map((slug) => {
              const c = COMPETITORS[slug];
              return (
                <Link className="cmp-card" key={slug} href={`/compare/${slug}`}>
                  <span className="cc-cat">{c.themCat}</span>
                  <h3>Aleq vs. {c.name}</h3>
                  <p>{c.h1}</p>
                  <span className="cc-go">Compare →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an unsigned period.</h2>
          <p className="lead">We&apos;ll connect read-only to whatever you run today, close last month live, and you leave with a signed number.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
