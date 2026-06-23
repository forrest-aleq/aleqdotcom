import Link from "next/link";
import type { Industry } from "@/lib/industries";

export default function IndustryPage({ data }: { data: Industry }) {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1 className="h1">{data.h1}</h1>
          <p className="lead">{data.lead}</p>
        </div>
      </section>

      <section className="dsection">
        <div className="container-tight">
          <div className="dhead">
            <span className="eyebrow">the reality today</span>
            <h2 className="h2">{data.realityH2}</h2>
            <p className="lead">{data.realityLead}</p>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center">
            <span className="eyebrow">what Aleq does</span>
            <h2 className="h2">The books for {data.name.toLowerCase()}, done.</h2>
            <p className="lead">Aleq is the system of record and the controller that runs it — it does this work autonomously, governed, and signs every move.</p>
          </div>
          <div className="ind-grid reveal">
            {data.capabilities.map((c) => (
              <div className="ind-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center">
            <span className="eyebrow">built on the standards you live on</span>
            <h2 className="h2">It speaks your accounting natively.</h2>
            <p className="lead">The standards and subledgers your model runs on — derived and posted by Aleq, not configured by you.</p>
          </div>
          <div className="ind-grid reveal">
            {data.standards.map((s) => (
              <div className="ind-card" key={s}>
                <h3>{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center">
            <span className="eyebrow">the metrics your model lives on</span>
            <h2 className="h2">Derived from the ledger, not a spreadsheet.</h2>
          </div>
          <div className="pp-stats reveal">
            {data.metrics.map((m) => (
              <div className="pp-stat" key={m.l}>
                <div className="pp-stat-v">{m.v}</div>
                <div className="pp-stat-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container-tight">
          <div className="dhead center">
            <span className="eyebrow">powered by TAMi</span>
            <h2 className="h2">One intelligence behind every entry.</h2>
            <p className="lead">TAMi reads your contracts, claims, shipments, and time entries, derives the right treatment, and posts it to a sealed ledger — every action gated, reversible, signed, and replayable for your auditor.</p>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">{data.ctaH2}</h2>
          <p className="lead">{data.ctaLead}</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/industries">See all industries</Link>
          </div>
        </div>
      </section>
    </>
  );
}
