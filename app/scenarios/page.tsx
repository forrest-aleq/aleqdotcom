import type { Metadata } from "next";
import ScenarioLibrary from "@/components/ScenarioLibrary";
import { SCENARIOS } from "@/lib/scenarios";

export const metadata: Metadata = {
  title: "Scenario packs — ready-made runs TAMi executes on your books",
  description:
    "A directory of scenario packs — the lockbox PDF, the Stripe payout, the four-bank month-end — each one a run TAMi executes on your books under the supervision mode you set. Every pack is part of our eval suite.",
};

export default function Page() {
  return (
    <>
      <section className="scn-head">
        <div className="container">
          <span className="eyebrow">scenario packs</span>
          <h1 className="h1">What TAMi runs.</h1>
          <p className="lead">Ready-made runs for the work your team does by hand — executed on your books, inside the limits you set.</p>
          <p className="scn-hero-note mono"><span className="t-dot" /> every pack is part of our eval suite — builds that fail it don&apos;t ship</p>
        </div>
      </section>

      <section className="scn-body">
        <div className="container">
          <ScenarioLibrary items={SCENARIOS} />
        </div>
      </section>
    </>
  );
}
