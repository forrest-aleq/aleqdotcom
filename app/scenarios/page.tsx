import type { Metadata } from "next";
import Link from "next/link";
import ScenarioLibrary from "@/components/ScenarioLibrary";
import { SCENARIOS } from "@/lib/scenarios";

export const metadata: Metadata = {
  title: "Scenarios — real finance work, run end to end",
  description:
    "A library of real finance scenarios from our discovery research — the lockbox PDF, the Stripe payout that doesn't tie, the four-bank month-end — each one showing exactly what Aleq runs, what it drafts, and what waits for a person. Every scenario is part of our eval suite.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">scenarios</span>
          <h1 className="h1">Your worst Monday, written down.</h1>
          <p className="lead">These are real situations from our discovery research — anonymized, and rebuilt as tests Aleq has to pass. Each one shows what runs alone, what gets drafted, and what always waits for you.</p>
          <p className="scn-hero-note mono"><span className="t-dot" /> every scenario here is part of our eval suite — builds that fail it don&apos;t ship</p>
        </div>
      </section>

      <section className="dp-section">
        <div className="container">
          <ScenarioLibrary items={SCENARIOS} />
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Have a worse one?</h2>
          <p className="lead">Bring the scenario you think breaks it. We&apos;ll run it on your real books, read-only.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
