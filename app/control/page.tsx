import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The control plane — governed autonomy you can audit",
  description:
    "Aleq runs in Manual, Assist, or Auto — you set which, per task. Every action is gated, signed, reversible, and eval-tested before it touches your books. The policy book is readable.",
};

export default function Page() {
  return (
    <>
      <section className="dp-hero">
        <div className="container dp-hero-inner">
          <div className="dp-hero-copy">
            <div className="eyebrow">the control plane · the moat</div>
            <h1 className="h1">Autonomy you can put on a leash.</h1>
            <p className="lead">It&apos;s not all-or-nothing. Aleq runs in one of three modes — and you set which, <b>per task</b>. Every action it takes is gated, signed, reversible, and eval-tested before it touches your books.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
              <Link className="btn btn-lg" href="#beliefs">How it decides ↓</Link>
            </div>
            <div className="dp-kicker"><span className="t-dot"></span> signed action receipts · ed25519 · 14-day reverse window</div>
          </div>

          <div className="surface reveal">
            <div className="surface-bar">
              <span className="surface-dot"></span>
              <span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span>
              <span className="surface-title">Action trail · today</span>
              <span className="surface-meta">all signed</span>
            </div>
            <div className="surface-body">
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_19d4</span> May reconciliation · JE-12491 <span className="r-rev">reversible</span></div>
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_19c8</span> dunning · Haven Foods <span className="r-rev">logged</span></div>
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_1a02</span> AWS bill B-3041 · auto-posted <span className="r-rev">reversible</span></div>
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_1a07</span> Foxconn wire · awaiting CEO <span className="r-rev" style={{ color: "var(--warning)", borderColor: "color-mix(in oklch,var(--warning) 40%,transparent)", background: "color-mix(in oklch,var(--warning) 12%,transparent)" }}>held</span></div>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> 0x4f3b…0eb4 · ed25519 · hand your auditor a replay</div>
          </div>
        </div>
      </section>

      <section className="dsection" id="modes">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">it&apos;s not all-or-nothing</span><h2 className="h2">Three modes. You set which, per task.</h2><p className="lead">Start in Assist, move work to Auto only when you trust it, pull anything back to Manual anytime.</p></div>
          <div className="modestrip reveal">
            <div className="ms"><div className="ms-top"><span className="ms-tag">manual</span><span className="ms-scale"><i className="on"></i><i></i><i></i></span></div><div className="ms-h">Aleq advises. You act.</div><p className="ms-p">It researches, drafts, and flags what needs doing. <b>You make every call</b> and post it yourself.</p></div>
            <div className="ms on"><div className="ms-top"><span className="ms-tag">assist <span className="ms-default">default</span></span><span className="ms-scale"><i className="on"></i><i className="on"></i><i></i></span></div><div className="ms-h">Aleq proposes. You approve.</div><p className="ms-p">It prepares the entry and shows its work. <b>One-click approve</b> — or reject — before anything posts.</p></div>
            <div className="ms"><div className="ms-top"><span className="ms-tag">auto</span><span className="ms-scale"><i className="on"></i><i className="on"></i><i className="on"></i></span></div><div className="ms-h">Aleq acts. You can undo.</div><p className="ms-p">It does the work and posts it, signed. <b>Reverse in one click</b> — 30s window, 14-day trail.</p></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">

          <div className="feature reveal" id="audit">
            <div className="feature-copy">
              <div className="f-eyebrow">signed &amp; replayable</div>
              <div className="f-h">Every action, signed. Hand your auditor a replay.</div>
              <p className="f-p">Each thing Aleq does carries an ed25519-signed, reversible ID in the action trail. Not a screenshot of a dashboard — a replayable record your auditor can verify independently.</p>
              <ul className="f-list">
                <li>Why / Signal / Policy / Origin / Effects on every action</li>
                <li>Mechanical actions clear silently; material ones surface for approval</li>
                <li>Period seals pinned to S3 + offsite, hashed</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Reasoning · a_19d4</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">Why</td><td>247 lines tie to bank to the penny</td></tr>
                    <tr><td className="acct">Signal</td><td>variance = $0.00 · within rules</td></tr>
                    <tr><td className="acct">Policy</td><td className="mono">P-RECON-DIFF-ZERO</td></tr>
                    <tr><td className="acct">Effects</td><td>posts JE-12491 · seals May</td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> reversible 14d · ed25519</div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal" id="undo">
            <div className="feature-copy">
              <div className="f-eyebrow">undo &amp; simulate</div>
              <div className="f-h">Undo anything. Dry-run first.</div>
              <p className="f-p">A 30-second undo window on every action, and a 14-day reverse window after that. Simulate any action against your real books with zero side effects before it runs.</p>
              <ul className="f-list">
                <li>Every posting has its reverse pair staged</li>
                <li>Dry-run mode: see the entry, the trail, the effect — commit nothing</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">payment.send · Foxconn</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td><span className="pill pill-ok">approved</span></td><td className="acct">wire</td><td className="num">$188,440</td></tr>
                    <tr><td className="acct">2/10 net 60</td><td className="acct">discount captured</td><td className="num pos">−$3,768</td></tr>
                  </tbody></table>
                  <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg-muted)" }}><span style={{ flex: "1", height: "6px", borderRadius: "999px", background: "var(--bg-soft)", overflow: "hidden", display: "block" }}><i style={{ display: "block", width: "64%", height: "100%", background: "var(--primary)" }}></i></span> undo · 27s</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature reveal" id="beliefs">
            <div className="feature-copy">
              <div className="f-eyebrow">the policy book is readable</div>
              <div className="f-h">It tells you what it believes — and why.</div>
              <p className="f-p">Every belief carries evidence, an autonomy strength, and a threshold that invalidates it. Above 95% accuracy on 20+ outcomes, a belief locks and Aleq acts without asking. Below 70%, or if new evidence drops accuracy, it asks first.</p>
              <ul className="f-list">
                <li>Each belief shows its evidence count and &quot;if wrong&quot; impact</li>
                <li>Your accept / reject feedback flows back into autonomy</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Belief register</span><span className="surface-meta">6 active</span></div>
                <div className="surface-body">
                  <table className="ptable">
                    <thead><tr><th>Belief</th><th className="num">Autonomy</th><th>State</th></tr></thead>
                    <tbody>
                      <tr><td>STRIPE TRANSFER ⇒ Stripe Clearing</td><td className="num">1.00</td><td><span className="pill pill-ok">locked</span></td></tr>
                      <tr><td>AWS bill in last 3 days, ±4%</td><td className="num">0.99</td><td><span className="pill pill-ok">locked</span></td></tr>
                      <tr><td>Foxconn early-pay 2/10 always on</td><td className="num">0.92</td><td><span className="pill pill-info">tracking</span></td></tr>
                      <tr><td>Stark pays only after escalation</td><td className="num">0.42</td><td><span className="pill pill-warn">asks first</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal" id="evals">
            <div className="feature-copy">
              <div className="f-eyebrow">eval-gated</div>
              <div className="f-h">It passes the test before it touches the books.</div>
              <p className="f-p">Every version of Aleq is graded against scenario packs — golden cases drawn from real close, collections, and reconciliation work. No pass, no deploy. The gate is 0.90; nothing ships under it.</p>
              <ul className="f-list">
                <li>Scenario packs per function, scored A–F</li>
                <li>Regression-tested on every change — accounting can&apos;t silently drift</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Eval gate · build 2026.4</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>month-end-close pack</td><td className="num">0.96</td><td><span className="pill pill-ok">pass</span></td></tr>
                    <tr><td>collections pack</td><td className="num">0.94</td><td><span className="pill pill-ok">pass</span></td></tr>
                    <tr><td>reconciliation pack</td><td className="num">0.97</td><td><span className="pill pill-ok">pass</span></td></tr>
                    <tr className="total"><td>gate ≥ 0.90</td><td className="num">—</td><td><span className="pill pill-ok">deploy</span></td></tr>
                  </tbody></table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Trust is set, not assumed.</h2>
          <p className="lead">Connect read-only, start everything in Assist, and move work to Auto only when the trail earns it.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/legal/security">Security</Link>
          </div>
        </div>
      </section>
    </>
  );
}
