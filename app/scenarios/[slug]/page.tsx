import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SCENARIOS, getScenario } from "@/lib/scenarios";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getScenario(slug);
  if (!s) return {};
  return { title: `${s.title} — Aleq scenario`, description: s.one };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getScenario(slug);
  if (!s) notFound();

  const related = s.related.map(getScenario).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">scenario · {s.industry}</div>
            <h1>{s.title}</h1>
            <p className="pp-hero-lead">{s.one}</p>
            <div className="scn-meta mono">
              <span className={"scn-badge " + s.mode}>{s.modeLabel}</span>
              <span className="scn-diff">eval difficulty: {s.difficulty}</span>
            </div>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Run it on your books</Link>
              <Link className="btn btn-lg" href={s.workHref}>How {s.work.toLowerCase()} works</Link>
            </div>
          </div>
          {s.je && (
            <div className="pp-hero-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  What lands in the ledger
                </div>
                <div className="pp-je">
                  {s.je.map((l, i) => (
                    <div className="pp-je-row" key={i}>
                      <span className={"pp-je-side " + l.side}>{l.side.toUpperCase()}</span>
                      <span className="pp-je-acct">{l.acct}</span>
                      <span className="pp-num">{l.val}</span>
                    </div>
                  ))}
                  {s.jeNote && <div className="pp-je-bal"><span className="pp-k">{s.jeNote}</span><span className="pp-ok">balanced</span></div>}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* THE ANECDOTE — one paragraph of the substrate, no more */}
      <section className="pp-section alt">
        <div className="pp-narrow">
          <blockquote className="scn-quote">
            <p>{s.anecdote}</p>
            <footer className="mono">{s.anecdoteBy}</footer>
          </blockquote>
        </div>
      </section>

      {/* WHAT ALEQ DOES + THE RUN */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">what Aleq does</div>
              <h2 className="pp-h">The same day, run for you.</h2>
              <ul className="scn-does">
                {s.does.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-worked">
                <div className="pp-worked-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  The run
                  <span className="we-tag">{s.mode === "manual" ? "held for you" : "logged · reversible"}</span>
                </div>
                {s.run.map((st, i) => (
                  <div className={"pp-wstep" + (st.held ? " scn-held" : "")} key={i}>
                    <div className="pp-wnum">{i + 1}</div>
                    <div className="pp-wbody">
                      <div className="pp-wk">{st.k}{st.held ? " · waits for a person" : ""}</div>
                      <div className="pp-wh">{st.h}</div>
                      <p className="scn-wp">{st.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVAL STRIP */}
      <section className="scn-eval">
        <div className="container-tight">
          <p className="mono"><span className="t-dot" /> this scenario is part of our eval suite · difficulty: {s.difficulty} · builds that fail it don&apos;t ship</p>
        </div>
      </section>

      {/* RELATED + CTA */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "30px", padding: 0 }}>
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>more scenarios</div>
          </div>
          <div className="scn-grid scn-grid-related">
            {related.map((r) => r && (
              <Link className="scn-card" href={`/scenarios/${r.slug}`} key={r.slug}>
                <div className="scn-card-tags mono"><span>{r.work}</span><span className="scn-dot">·</span><span>{r.industry}</span></div>
                <div className="scn-card-t">{r.title}</div>
                <p className="scn-card-p">{r.one}</p>
                <div className="scn-card-foot mono">
                  <span className={"scn-badge " + r.mode}>{r.mode === "auto" ? "Auto" : r.mode === "assist" ? "Assist" : "Manual"}</span>
                  <span className="scn-diff">eval difficulty: {r.difficulty}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Bring the one you think breaks it.</h2>
          <p>Connect read-only and put this scenario on your real books — every step visible, every entry reversible.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/scenarios">All scenarios</Link>
          </div>
        </div>
      </section>
    </>
  );
}
