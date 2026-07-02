import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SCENARIOS, getScenario } from "@/lib/scenarios";
import ScenarioCard from "@/components/ScenarioCard";
import ScnIcon from "@/components/ScnIcon";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getScenario(slug);
  if (!s) return {};
  return { title: `${s.title} — scenario pack`, description: s.one };
}

const HOWTO: { h: string; p: string }[] = [
  { h: "Connect read-only", p: "Banks, billing, and your current ledger. Live in 48 hours; nothing changes in your systems." },
  { h: "Set the mode", p: "Manual, Assist, or Auto. Every pack starts in Assist — TAMi drafts, you approve." },
  { h: "Watch the first run", p: "Every action logged with its reason. Exceptions held, never forced." },
  { h: "Raise the ceiling", p: "Move it to Auto when the track record has earned it. Pull it back any time." },
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getScenario(slug);
  if (!s) notFound();

  const related = s.related.map(getScenario).filter(Boolean).slice(0, 2);

  return (
    <div className="scn-page">
      {/* HERO */}
      <header className="scn-hero">
        <div className="scn-crumb mono">
          <Link href="/scenarios">scenario packs</Link>
          <span>/</span>
          <span>{s.work.toLowerCase()}</span>
        </div>
        <h1>{s.title}</h1>
        <p className="scn-one">{s.one}</p>
        <div className="scn-meta mono">
          <span className={"scn-badge " + s.mode}>{s.mode === "auto" ? "Auto" : s.mode === "assist" ? "Assist" : "Manual"}</span>
          <span className="scn-diff">eval difficulty: {s.difficulty}</span>
          <span className="scn-diff">{s.industry}</span>
        </div>
        <div className="scn-actions">
          <Link className="btn btn-primary btn-lg" href="/demo">Run it on your books</Link>
          <Link className="btn btn-lg" href={s.workHref}>How {s.work.toLowerCase()} works</Link>
        </div>
      </header>

      {/* WHAT THIS DOES */}
      <section className="scn-sec">
        <h2 className="scn-h2">What this pack does</h2>
        <ul className="scn-does">
          {s.does.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>

      {/* HOW TO USE */}
      <section className="scn-sec">
        <h2 className="scn-h2">How to use it</h2>
        <ol className="scn-howto">
          {HOWTO.map((h, i) => (
            <li key={i}>
              <span className="scn-hnum mono">{i + 1}</span>
              <div><b>{h.h}</b><p>{h.p}</p></div>
            </li>
          ))}
        </ol>
      </section>

      {/* WORKFLOW */}
      <section className="scn-sec">
        <h2 className="scn-h2">Workflow</h2>
        <div className="scn-flow">
          {s.run.map((st, i) => (
            <div className={"scn-step" + (st.held ? " held" : "")} key={i}>
              <span className="scn-step-ic"><ScnIcon name={st.k} /></span>
              <div className="scn-step-body">
                <span className="scn-step-k mono">{st.k}{st.held ? " · waits for a person" : ""}</span>
                <b>{st.h}</b>
                <p>{st.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECEIPT */}
      {s.je && (
        <section className="scn-sec">
          <h2 className="scn-h2">What lands in the ledger</h2>
          <div className="pp-card scn-receipt">
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
        </section>
      )}

      {/* PROVENANCE + EVAL */}
      {s.anecdote && (
        <p className="scn-prov">
          <span className="mono">where this pack comes from</span>
          {s.anecdote}
          {s.anecdoteBy && <em className="mono">{s.anecdoteBy}</em>}
        </p>
      )}
      <p className="scn-evalline mono"><span className="t-dot" /> part of our eval suite · difficulty: {s.difficulty} · builds that fail it don&apos;t ship</p>

      {/* MORE */}
      <section className="scn-sec">
        <h2 className="scn-h2">More packs</h2>
        <div className="scn-grid scn-grid-related">
          {related.map((r) => r && <ScenarioCard s={r} key={r.slug} />)}
        </div>
      </section>

      <div className="scn-foot-cta">
        <Link className="btn btn-primary btn-lg" href="/demo">Run it on your books</Link>
        <Link className="btn btn-lg" href="/scenarios">All packs</Link>
      </div>
    </div>
  );
}
