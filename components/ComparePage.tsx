import Link from "next/link";
import type { Cmp } from "@/lib/compare";
import { MATRIX } from "@/lib/compare";

function cls(v: string) {
  if (v.startsWith("✓")) return "c-yes";
  if (v === "—") return "c-no";
  return "c-mid";
}

export default function ComparePage({ data }: { data: Cmp }) {
  const { name } = data;
  const migrate = [
    { n: "01", h: "Connect read-only", p: `Aleq reads ${name} and your bank feeds with read-only credentials. Nothing changes.` },
    { n: "02", h: "Replay a period", p: `It re-closes a month you've already signed in ${name} — every step shown.` },
    { n: "03", h: "Run in Assist", p: `Aleq proposes; you approve. Move proven work to Auto on your timeline.` },
    { n: "04", h: "Become the record", p: `Start on top of ${name}. Cut over to Aleq as your system of record when you're ready.` },
  ];

  return (
    <>
      <section className="vs-hero">
        <div className="container">
          <div className="vs-logos">
            <span className="vs-logo">Aleq</span>
            <span className="vs-x">vs.</span>
            <span className="vs-logo them">{name}</span>
          </div>
          <h1 className="h1">{data.h1}</h1>
          <p className="lead">{data.lead}</p>
        </div>
      </section>

      <section className="vs-claim">
        <div className="container">
          <div className="vs-claim-inner reveal">
            <div className="vc-eb">the difference in one line</div>
            <div className="vc-line">{data.claim}</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingTop: "24px" }}>
        <div className="container">
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">powered by TAMi</span></div>
              <div className="vco-sub">{data.aleqSub}</div>
              <ul>{data.aleqBullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>{name}</h3><span className="vco-cat">{data.themCat}</span></div>
              <div className="vco-sub">{data.themSub}</div>
              <ul>{data.themBullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">head to head</span><h2 className="h2">Where they actually differ.</h2></div>
          <div className="cmpx reveal">
            <div className="cmpx-head">
              <div className="cmpx-dim"></div>
              <div className="cmpx-col cmpx-aleq">Aleq</div>
              <div className="cmpx-col">{name}</div>
            </div>
            {MATRIX.map((g) => (
              <div className="cmpx-group" key={g.group}>
                <div className="cmpx-glabel">{g.group}</div>
                {g.rows.map((r) => {
                  const them = data.cells[r.key] ?? "—";
                  return (
                    <div className="cmpx-row" key={r.key}>
                      <div className="cmpx-dim">{r.dim}</div>
                      <div className={"cmpx-cell cmpx-aleq " + cls(r.aleq)}>{r.aleq}</div>
                      <div className={"cmpx-cell " + cls(them)}>{them}</div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center">
            <span className="eyebrow">moving from {name}</span>
            <h2 className="h2">Live in 48 hours. Your record when you&apos;re ready.</h2>
            <p className="lead">No rip-and-replace. Aleq connects read-only and proves itself against the books you already keep — then becomes the system of record on your timeline.</p>
          </div>
          <div className="vs-migrate reveal">
            {migrate.map((s) => (
              <div className="vm-step" key={s.n}><div className="vm-n">{s.n}</div><div className="vm-h">{s.h}</div><div className="vm-p">{s.p}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="vs-pull reveal">
            <div className="vp-body">&ldquo;{data.quote}&rdquo;</div>
            <div className="vp-cite">{data.quoteCite}</div>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">{data.ctaH2}</h2>
          <p className="lead">{data.ctaLead}</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
            <Link className="btn btn-lg" href="/compare">See all comparisons</Link>
          </div>
        </div>
      </section>
    </>
  );
}
