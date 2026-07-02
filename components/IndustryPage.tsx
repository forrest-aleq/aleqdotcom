import Link from "next/link";
import type { Industry } from "@/lib/industries";
import IndustryBento from "@/components/IndustryBento";
import IndustryModesDemo from "@/components/IndustryModesDemo";
import StackFlow from "@/components/StackFlow";

function Mark() {
  return (
    <svg className="pp-card-mark" viewBox="0 0 48 48">
      <use href="#aleq-mark" />
    </svg>
  );
}

export default function IndustryPage({ data }: { data: Industry }) {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">{data.eyebrow}</div>
            <h1>{data.h1}</h1>
            <p className="pp-hero-lead">{data.lead}</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">
                Demo
              </Link>
              <a className="btn btn-lg" href="#how">
                How it works
              </a>
            </div>
            {data.note && (
              <div className="pp-note">
                <span className="t-dot" />
                {data.note}
              </div>
            )}
          </div>

          {data.heroCard && (
            <div className="pp-hero-art pp-frame reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <Mark />
                  {data.heroCard.head}
                  <span className="pp-live">
                    <i />
                    live
                  </span>
                </div>
                <div className="pp-tb">
                  {data.heroCard.rows.map((r, i) =>
                    r.pct != null ? (
                      <div className="pp-tb-row bar" key={i}>
                        <div className="pp-tb-line">
                          <span className="pp-tb-acct">
                            {r.sub ? <small>{r.sub}</small> : null}
                            {r.acct}
                          </span>
                          <span className="pp-num">{r.val}</span>
                        </div>
                        <div className="pp-tb-bar">
                          <i style={{ width: r.pct + "%" }} />
                        </div>
                      </div>
                    ) : (
                      <div className="pp-tb-row" key={i}>
                        <span className={"pp-tb-acct" + (r.neg ? " neg" : "")}>
                          {r.sub ? <small>{r.sub}</small> : null}
                          {r.acct}
                        </span>
                        <span className={"pp-num" + (r.neg ? " neg" : "")}>
                          {r.val}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className="pp-tb-foot">
                  <span className="pp-tb-k">{data.heroCard.footK}</span>
                  {data.heroCard.ok ? (
                    <span className="pp-ok">{data.heroCard.ok}</span>
                  ) : (
                    <span
                      className="pp-num"
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      {data.heroCard.footV}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── The reality today ──────────────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">The reality today</div>
              <h2 className="pp-h">{data.realityH2}</h2>
              <p className="pp-sub">{data.realityLead}</p>
            </div>
            <div className="pp-point-art reveal">
              {data.stackToday ? (
                <StackFlow tools={data.stackToday} />
              ) : (
                <ul className="ind-realitylist">
                  {data.capabilities.slice(0, 3).map((c) => (
                    <li key={c.title}>
                      <b>{c.title}</b> {c.desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Worked example ─────────────────────────────────────── */}
      {data.worked && (
        <section className="pp-section" id="how">
          <div className="pp-wrap">
            <div className="pp-point">
              <div className="pp-point-copy">
                <div className="pp-eyebrow">{data.worked.eyebrow}</div>
                <h2 className="pp-h">{data.worked.h}</h2>
                <p className="pp-sub">{data.worked.sub}</p>
              </div>
              <div className="pp-point-art reveal">
                <div className="pp-worked">
                  <div className="pp-worked-head">
                    <Mark />
                    {data.worked.head}
                    <span className="we-tag">derived</span>
                  </div>
                  {data.worked.steps.map((s, i) => (
                    <div className="pp-wstep" key={i}>
                      <div className="pp-wnum">{i + 1}</div>
                      <div className="pp-wbody">
                        <div className="pp-wk">{s.k}</div>
                        <div className="pp-wh">{s.h}</div>
                        {s.kv && (
                          <div className="pp-kv">
                            {s.kv.map((row, j) => (
                              <div className="pp-kv-row" key={j}>
                                <span className="pp-kv-k">{row.k}</span>
                                <span className="pp-kv-v">{row.v}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {s.je && (
                          <div className="pp-je">
                            {s.je.map((l, j) => (
                              <div className="pp-je-row" key={j}>
                                <span className={"pp-je-side " + l.side}>
                                  {l.side.toUpperCase()}
                                </span>
                                <span className="pp-je-acct">
                                  {l.acct}
                                  {l.sub ? <small>{l.sub}</small> : null}
                                </span>
                                <span className="pp-num">{l.val}</span>
                              </div>
                            ))}
                            {s.balK && (
                              <div className="pp-je-bal">
                                <span className="pp-k">{s.balK}</span>
                                {s.ok && <span className="pp-ok">{s.ok}</span>}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── What Aleq does — animation left, copy right ────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-art reveal">
              {data.modes ? (
                <IndustryModesDemo items={data.modes} />
              ) : data.runsShot ? (
                <div className="ind-shot-card">
                  <div className="ind-shot-bar">
                    <Mark />
                    What Aleq runs
                    <span className="pp-live">
                      <i />
                      autonomous
                    </span>
                  </div>
                  <img src={data.runsShot} alt="Aleq decision log — autonomous and confirmed actions" loading="lazy" />
                </div>
              ) : (
                <div className="pp-card icap-card">
                  <div className="pp-card-head">
                    <Mark />
                    What Aleq runs
                    <span className="pp-live">
                      <i />
                      autonomous
                    </span>
                  </div>
                  <div className="icap-list">
                    {data.capabilities.map((c, i) => (
                      <div
                        className="icap-row"
                        key={c.title}
                        style={{ ["--i" as string]: i }}
                      >
                        <span className="icap-check" aria-hidden="true" />
                        <div className="icap-rt">
                          <b>{c.title}</b>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="pp-point-copy">
              <div className="pp-eyebrow">what Aleq does</div>
              <h2 className="pp-h">
                The books for {data.name.toLowerCase()}, run for you.
              </h2>
              <p className="pp-sub">
                Aleq is the system of record and the controller that runs it — it
                does this work autonomously, inside your policy, and signs every
                move. Not a tool your team feeds; the colleague that closes the
                books.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The whole close (breadth) ──────────────────────────── */}
      {data.breadth && (
        <section className="pp-section">
          <div className="pp-wrap">
            <div
              className="pp-narrow"
              style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
            >
              <div className="pp-eyebrow" style={{ display: "inline-block" }}>
                the whole close
              </div>
              <h2 className="pp-h">{data.breadthH}</h2>
              {data.breadthLead && (
                <p className="pp-sub" style={{ margin: "18px auto 0" }}>
                  {data.breadthLead}
                </p>
              )}
            </div>
            <IndustryBento items={data.breadth} />
          </div>
        </section>
      )}

      {/* ── Standards it speaks ────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "30px", padding: 0 }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              built on the standards you live on
            </div>
            <h2 className="pp-h">It speaks your accounting natively.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              The standards and subledgers your model runs on — derived and
              posted by Aleq, not configured by you.
            </p>
          </div>
          <div className="ind-stdrail reveal">
            {(data.standardLinks ?? []).map((s) => (
              <Link className="ind-std-link" key={s.href} href={s.href}>
                {s.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            {data.standards.map((s) => (
              <span className="ind-std-chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      {data.faqs && (
        <section className="pp-section alt">
          <div
            className="pp-narrow"
            style={{ textAlign: "center", marginBottom: "34px" }}
          >
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>
              FAQ
            </div>
            <h2 className="pp-h">Questions, answered.</h2>
          </div>
          <div className="pp-faq reveal">
            {data.faqs.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>{data.ctaH2}</h2>
          <p>{data.ctaLead}</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/demo">
              Book Demo
            </Link>
            <Link className="btn btn-lg" href="/industries">
              See all industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
