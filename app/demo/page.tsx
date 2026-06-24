import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a demo — close last month on your real books, live",
  description:
    "Thirty minutes. We connect Aleq read-only and close your last period on your real books, live — no slideware. You leave with a number and the worked support behind it.",
};

const SEE: { k: string; t: string }[] = [
  { k: "A live close", t: "We pick an unsigned period and close it in front of you — reconciled to the penny, on your real data." },
  { k: "The action trail", t: "Watch what Aleq runs on its own and what it stops and brings to you for approval. You set the line." },
  { k: "A standard, derived", t: "Drop in one of your contracts or leases and watch the entries derive — with the codification cited." },
  { k: "The audit trail", t: "Every move signed, traced to its source, and reversible — the way your auditor wants to see it." },
];

const BRING = [
  "Read-only access to one bank account and your payment processor",
  "One unsigned or messy period you'd like closed",
  "Whoever owns the close — controller, CFO, or founder",
];

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Book a demo</div>
            <h1>
              Bring an unsigned period.
              <br />
              Leave with a number.
            </h1>
            <p className="pp-hero-lead">
              Thirty minutes. We connect Aleq read-only and close last month on
              your real books, live — no slideware, no sandbox.
            </p>
            <div className="pp-note">
              <span className="t-dot" />
              read-only to start · nothing posts without you
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <form className="demo-card" action="/company/contact" method="get">
              <div className="demo-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Book your working session
              </div>
              <div className="demo-fields">
                <label className="demo-field">
                  <span>Work email</span>
                  <input type="email" name="email" placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="demo-field">
                  <span>Company</span>
                  <input type="text" name="company" placeholder="Acme, Inc." autoComplete="organization" />
                </label>
                <label className="demo-field">
                  <span>Your role</span>
                  <select name="role" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Controller</option>
                    <option>CFO / VP Finance</option>
                    <option>Founder / CEO</option>
                    <option>Accountant / firm</option>
                    <option>Other</option>
                  </select>
                </label>
                <button type="submit" className="btn btn-primary btn-lg demo-submit">
                  Book my demo →
                </button>
                <p className="demo-fine">
                  Or email <a href="mailto:demo@aleq.com">demo@aleq.com</a>. We
                  reply same day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── What you'll see ────────────────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}>
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>What you&apos;ll see</div>
            <h2 className="pp-h">Thirty minutes on your real books.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Not a canned demo. We run Aleq against your actual data and you
              leave with something you can check.
            </p>
          </div>
          <div className="icap-grid reveal">
            {SEE.map((s, i) => (
              <div className="icap" key={s.k}>
                <div className="icap-n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.k}</h3>
                <p>{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to bring ──────────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">What to bring</div>
              <h2 className="pp-h">Three things, nothing installed.</h2>
              <p className="pp-sub">
                We start read-only — Aleq never moves money to set up, and you
                can revoke access any time. The whole thing runs on your data,
                live.
              </p>
            </div>
            <div className="pp-point-art reveal">
              <ul className="ind-realitylist">
                {BRING.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Close one period. Decide from there.</h2>
          <p>
            Pick an unsigned month, connect read-only, and watch Aleq close it
            live. If the number ties out, you&apos;ll know what to do next.
          </p>
          <div className="pp-actions">
            <a className="btn btn-primary btn-lg" href="mailto:demo@aleq.com">
              Book my demo
            </a>
            <Link className="btn btn-lg" href="/work">
              See the platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
