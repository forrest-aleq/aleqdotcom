import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, INDUSTRY_ORDER } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries — the books, built for how you run.",
  description:
    "Aleq speaks your industry's accounting — the standards, the subledgers, and the metrics your model lives on. SaaS, hardware, marketplaces, healthcare, manufacturing, and professional services.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <span className="eyebrow">who it&apos;s for</span>
          <h1 className="h1">Built for how your business actually runs.</h1>
          <p className="lead">Aleq is the books, and the controller that runs them — and it speaks your industry&apos;s accounting natively: the standards, the subledgers, and the metrics your model lives on.</p>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="ind-grid reveal">
            {INDUSTRY_ORDER.map((slug) => {
              const ind = INDUSTRIES[slug];
              return (
                <Link className="ind-card" href={`/industries/${slug}`} key={slug}>
                  <h3>{ind.name}</h3>
                  <p>{ind.realityH2}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Don&apos;t see yours? We&apos;ll model it.</h2>
          <p className="lead">Bring an unsigned period in your vertical&apos;s accounting. We&apos;ll connect read-only and close it — signed and replayable — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
