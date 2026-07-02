import type { Metadata } from "next";
import Link from "next/link";
import DemoBooking from "@/components/DemoBooking";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Demo — close last month on your real books, live",
  description:
    "Thirty minutes. We connect Aleq read-only and close your last period on your real books, live — or run the needle hunt on a fictional company if you'd rather connect nothing. You leave with a number and the worked support behind it.",
};

const AGENDA: { t: string; h: string; p: string }[] = [
  { t: "0–5", h: "Connect, read-only", p: "One bank account and your payment processor. Aleq can see, not touch — and you can revoke it the moment we hang up." },
  { t: "5–20", h: "The close runs, live", p: "Your unsigned period: lines match, the variance gets named, entries draft. You watch the log as it happens — nothing pre-recorded." },
  { t: "20–25", h: "You set a limit", p: "Pick a threshold, watch work above it stop and ask. The control story, demonstrated on your data, not asserted." },
  { t: "25–30", h: "The number", p: "A reconciled period and the worked support behind it. Check it against your own books after we're gone — that's the point." },
];

const FAQS: FaqItem[] = [
  { q: "Do I have to connect my real books for the demo?", a: "No. If you'd rather connect nothing, we run the needle hunt instead: a fictional company matched to your industry, stage, and size, with errors planted in its books — duplicates, misclassifications, mismatches across systems. You watch Aleq hunt them down, then we open the manifest of what was planted and score the run together." },
  { q: "Is this a sales call?", a: "It's a working session. The demo is the product running on real data in front of you — there's no deck. If the number ties out, the next step is a read-only trial on your books; if it doesn't, you'll see that too, live." },
  { q: "Is it safe to give demo access to my bank?", a: "The connection is read-only: Aleq can see transactions but cannot move money, change a setting, or initiate anything. You can revoke access the moment the session ends, and nothing posts to any system you run today." },
  { q: "What happens after the demo?", a: "If you want to keep going, Aleq stays connected read-only and rebuilds a full month on its own books within 48 hours — you compare it against your current system and decide with evidence. There's no implementation project and no contract required to run the mirror." },
];

export default function Page() {
  return (
    <>
      {/* ── HERO + BOOKING ─────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Demo</div>
            <h1>
              Bring an unsigned period.
              <br />
              Leave with a number.
            </h1>
            <p className="pp-hero-lead">
              Thirty minutes. We connect read-only and close last month on your
              real books, live. No deck, no sandbox tour — you leave with a
              reconciled period you can check after we hang up.
            </p>
            <div className="pp-note">
              <span className="t-dot" />
              read-only · revocable · nothing posts without you
            </div>
          </div>
          <div className="pp-hero-art pp-frame reveal">
            <DemoBooking />
          </div>
        </div>
      </section>

      {/* ── THE 30 MINUTES ─────────────────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}>
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>The thirty minutes</div>
            <h2 className="pp-h">Here&apos;s exactly how it runs.</h2>
          </div>
          <div className="icap-grid reveal">
            {AGENDA.map((a) => (
              <div className="icap" key={a.t}>
                <div className="icap-n">{a.t}</div>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO WAYS IN ────────────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">Not ready to connect?</div>
              <h2 className="pp-h">Then watch the needle hunt.</h2>
              <p className="pp-sub">We generate a fictional company like yours — industry, stage, size — with errors planted through its books: duplicates, miscodings, numbers that disagree across systems. Aleq hunts. Then we open the manifest of what was hidden and score the run together. Nothing of yours is connected, and the test is falsifiable — the answer key exists before the run starts.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Needle hunt · fictional company</div>
                <div className="pp-tb">
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>planted</small>Duplicate vendor bill</span><span className="pp-ok">found · day 0</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>planted</small>Payout booked as revenue</span><span className="pp-ok">found · day 0</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>planted</small>Category mismatch, 3 systems</span><span className="pp-ok">found · day 0</span></div>
                  <div className="pp-tb-row"><span className="pp-tb-acct"><small>planted</small>Name drift across tools</span><span className="pp-num">held · asked</span></div>
                </div>
                <div className="pp-tb-foot"><span className="pp-tb-k">manifest opened after the run</span><span className="pp-ok">scored together</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>Before you book</div>
          <h2 className="pp-h">What people check first.</h2>
        </div>
        <div className="pp-faq reveal">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <FaqSchema items={FAQS} />
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Close one period. Decide from there.</h2>
          <p>Pick an unsigned month, connect read-only, and watch it close live. If the number ties out, you&apos;ll know what to do next.</p>
          <div className="pp-actions">
            <a className="btn btn-primary btn-lg" href="#book">Pick a time</a>
            <Link className="btn btn-lg" href="/scenarios">See what it runs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
