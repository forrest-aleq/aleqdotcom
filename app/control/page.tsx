import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Control — you decide what Aleq does on its own",
  description:
    "Aleq runs in three modes — advise you, wait for your OK, or do the work and let you undo it. You pick one for each task. Every move is signed, and you can read every rule it follows.",
};

export default function Page() {
  return (
    <>
      <section className="dp-hero">
        <div className="container dp-hero-inner">
          <div className="dp-hero-copy">
            <div className="eyebrow">you stay in control</div>
            <h1 className="h1">You decide what Aleq does on its own.</h1>
            <p className="lead">It&apos;s not all-or-nothing. Aleq runs in three modes, and you pick one for each task. It can advise you, prepare the work and wait for your OK, or do the work and let you undo it. Whatever it does, it signs — and you can reverse it.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
              <Link className="btn btn-lg" href="#beliefs">How it decides ↓</Link>
            </div>
            <div className="dp-kicker"><span className="t-dot"></span> every action signed · undo for 14 days</div>
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
            <div className="surface-foot"><span className="seal-dot"></span> signed · hand your auditor a full replay</div>
          </div>
        </div>
      </section>

      <section className="dsection" id="modes">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">it&apos;s not all-or-nothing</span><h2 className="h2">Three modes. You pick one for each task.</h2><p className="lead">Start in Assist. Move a task to Auto only when you trust it. Pull anything back to Manual anytime.</p></div>
          <div className="modestrip reveal">
            <div className="ms"><div className="ms-top"><span className="ms-tag">manual</span><span className="ms-scale"><i className="on"></i><i></i><i></i></span></div><div className="ms-h">Aleq advises. You act.</div><p className="ms-p">It looks things up, drafts the work, and flags what needs doing. <b>You make every call</b> and post it yourself.</p></div>
            <div className="ms on"><div className="ms-top"><span className="ms-tag">assist <span className="ms-default">default</span></span><span className="ms-scale"><i className="on"></i><i className="on"></i><i></i></span></div><div className="ms-h">Aleq proposes. You approve.</div><p className="ms-p">It prepares the entry and shows its work. <b>One click to approve</b> — or reject — before anything posts.</p></div>
            <div className="ms"><div className="ms-top"><span className="ms-tag">auto</span><span className="ms-scale"><i className="on"></i><i className="on"></i><i className="on"></i></span></div><div className="ms-h">Aleq acts. You can undo.</div><p className="ms-p">It does the work and posts it, signed. <b>Undo in one click</b> — 30 seconds right away, 14 days after.</p></div>
          </div>
        </div>
      </section>

      <section className="dsection alt" id="burden">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">doing this by hand</div>
              <div className="f-h">Keeping all this under control by hand is a second full-time job.</div>
              <p className="f-p">Today most of it is held together by hand. The rule that one person can&apos;t both approve a bill and pay it sits in a spreadsheet someone forgets to update. Approvals get chased over email. The week before the auditor shows up, someone builds the evidence by hand. And when they ask &quot;why did this post?&quot; there&apos;s no record — just memory. Aleq takes that work off your plate. Not by asking you to trust it, but by proving every move.</p>
              <ul className="f-list">
                <li>Aleq blocks one person from both approving and paying — you don&apos;t track it in a sheet</li>
                <li>Approvals are built in — no email threads to dig back up</li>
                <li>The audit evidence builds itself all month — not the night before</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Doing it by hand</span><span className="surface-meta">what it replaces</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">Who can do what</td><td>tracked by hand in a sheet</td><td><span className="pill pill-warn">stale</span></td></tr>
                    <tr><td className="acct">Approvals</td><td>chased over email</td><td><span className="pill pill-warn">no trail</span></td></tr>
                    <tr><td className="acct">Audit evidence</td><td>built the week before</td><td className="num">38 hrs</td></tr>
                    <tr><td className="acct">&quot;Why did this post?&quot;</td><td>rebuilt from memory</td><td><span className="pill pill-warn">no replay</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> one controller · most of a week, every close</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection" id="loop">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">how Aleq learns</span><h2 className="h2">It watches, learns a rule, acts inside your limits, and leaves a receipt.</h2><p className="lead">Aleq learns from what your team already does. Every move it makes on its own follows the same steps. What happens next teaches it. It earns your trust with proof — you don&apos;t hand it over up front.</p></div>
          <div className="tami-board reveal" aria-label="how Aleq clears the bank">
            <div className="tami-board-bar"><span className="surface-dot"></span><span>Aleq · clearing the bank, May close</span><span className="tami-live">live</span></div>
            <div className="tami-flow">
              <div className="tami-node"><span>1 · watches</span><b>247 bank lines</b><p>the statement, the matches, the ledger, and how you&apos;ve coded these before</p></div>
              <div className="tami-node"><span>2 · learns the rule</span><b>Code to Stripe Clearing</b><p>you coded it this way 412 times and never undid it</p></div>
              <div className="tami-node on"><span>3 · posts the routine</span><b>245 posted, 2 held</b><p>routine matches go through; two big ones wait for you</p></div>
              <div className="tami-node"><span>4 · receipt</span><b>signed · you can undo it</b><p>a signed receipt you can reverse; what happens next updates the rule</p></div>
            </div>
            <div className="tami-board-foot"><span className="seal-dot"></span> This isn&apos;t a chatbot answer — it&apos;s a rule, the proof behind it, your limit, a signed receipt, and a way to undo it.</div>
          </div>
        </div>
      </section>

      <section className="dsection alt" id="earned">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">one task at a time</span><h2 className="h2">Aleq earns each task on its own — never all at once.</h2><p className="lead">When Aleq proves itself on one task, it can run that task on its own — and only that one. It might match the bank by itself while every payment still waits for your OK and closing the month stays fully manual. Each task has its own limit, and you set it.</p></div>
          <div className="tami-rule-grid reveal" style={{ marginBottom: "30px" }}>
            <div className="tami-rule on"><span>Auto</span><b>Matching the bank</b><p>runs on its own after 200+ clean matches · 18,420 runs · 98.7% right · routine cash only</p></div>
            <div className="tami-rule"><span>Assist</span><b>Sending a payment</b><p>always waits for you · drafts the wire, shows the proof, holds for your OK — never runs alone</p></div>
            <div className="tami-rule"><span>Manual</span><b>Closing the month</b><p>gets the close ready · a person signs the month closed</p></div>
          </div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">What each task can do · your rule book</span><span className="surface-meta">read it anytime</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Task</th><th>Runs alone after</th><th className="num">How sure</th><th>Mode now</th></tr></thead>
                <tbody>
                  <tr><td className="mono">Matching the bank</td><td>200 clean matches</td><td className="num">1.00</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">Coding bills</td><td>150 times · within 4%</td><td className="num">0.99</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">Sending reminders</td><td>small ones, below your escalation line</td><td className="num">0.96</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">Sending a payment</td><td>never alone · always waits for you</td><td className="num">0.92</td><td><span className="pill pill-info">Assist</span></td></tr>
                  <tr className="total"><td className="mono">Closing the month</td><td>person only</td><td className="num">—</td><td><span className="pill pill-warn">Manual</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> if a rule starts getting things wrong, Aleq stops and asks you again</div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">

          <div className="feature reveal" id="audit">
            <div className="feature-copy">
              <div className="f-eyebrow">signed · you can replay it</div>
              <div className="f-h">Every action is signed. Hand your auditor a replay.</div>
              <p className="f-p">Everything Aleq does gets a signed ID you can undo. It&apos;s not a screenshot of a dashboard. It&apos;s a real record your auditor can check on their own.</p>
              <ul className="f-list">
                <li>Every action shows why it happened, what set it off, the rule it used, and what it changed</li>
                <li>Routine work goes through quietly; big items come to you first</li>
                <li>Closed months are locked and backed up off-site</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Why it posted · a_19d4</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">Why</td><td>247 lines tie to the bank to the penny</td></tr>
                    <tr><td className="acct">What set it off</td><td>difference = $0.00 · within the rules</td></tr>
                    <tr><td className="acct">Rule</td><td className="mono">P-RECON-DIFF-ZERO</td></tr>
                    <tr><td className="acct">What changed</td><td>posts JE-12491 · closes May</td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> undo for 14 days · signed</div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal" id="undo">
            <div className="feature-copy">
              <div className="f-eyebrow">undo · try it first</div>
              <div className="f-h">Undo anything. Test it first.</div>
              <p className="f-p">You get 30 seconds to undo any action right away, and 14 days to reverse it after that. You can also test any action on your real books first — it shows what would happen and changes nothing.</p>
              <ul className="f-list">
                <li>Every entry comes with its undo ready to go</li>
                <li>Test mode: see the entry and what it would do, with nothing saved</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Sending a payment · Foxconn</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td><span className="pill pill-ok">approved</span></td><td className="acct">wire</td><td className="num">$188,440</td></tr>
                    <tr><td className="acct">paid early</td><td className="acct">discount captured</td><td className="num pos">−$3,768</td></tr>
                  </tbody></table>
                  <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg-muted)" }}><span style={{ flex: "1", height: "6px", borderRadius: "999px", background: "var(--bg-soft)", overflow: "hidden", display: "block" }}><i style={{ display: "block", width: "64%", height: "100%", background: "var(--primary)" }}></i></span> undo · 27s left</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature reveal" id="beliefs">
            <div className="feature-copy">
              <div className="f-eyebrow">you can read every rule</div>
              <div className="f-h">It shows you every rule it follows — and why.</div>
              <p className="f-p">Every rule shows its proof and how often it&apos;s been right. After it&apos;s right 20 times in a row and stays above 95%, Aleq can run it without asking. If it drops below 70%, or new information makes it wrong, Aleq stops and asks you again.</p>
              <ul className="f-list">
                <li>Every rule shows how much proof it has and what happens if it&apos;s wrong</li>
                <li>When you approve or reject, that teaches it for next time</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">What Aleq has learned</span><span className="surface-meta">6 rules</span></div>
                <div className="surface-body">
                  <table className="ptable">
                    <thead><tr><th>Rule</th><th className="num">How sure</th><th>Status</th></tr></thead>
                    <tbody>
                      <tr><td>Stripe transfer ⇒ Stripe Clearing</td><td className="num">1.00</td><td><span className="pill pill-ok">runs alone</span></td></tr>
                      <tr><td>AWS bill in last 3 days, within 4%</td><td className="num">0.99</td><td><span className="pill pill-ok">runs alone</span></td></tr>
                      <tr><td>Foxconn early-pay discount always on</td><td className="num">0.92</td><td><span className="pill pill-info">watching</span></td></tr>
                      <tr><td>Stark pays only after a reminder</td><td className="num">0.42</td><td><span className="pill pill-warn">asks first</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal" id="seals">
            <div className="feature-copy">
              <div className="f-eyebrow">you can prove it</div>
              <div className="f-h">Signed, undoable, replayable — and a closed month can&apos;t be faked.</div>
              <p className="f-p">Aleq signs every action with a key and stages the undo right with it. So you never have to take &quot;the system says so&quot; on faith. When a month closes, Aleq locks it with a tamper-proof seal over every entry, backed up off-site. Change one cent after that and the seal breaks — your auditor sees it right away.</p>
              <ul className="f-list">
                <li>Every action is signed — your auditor can check it without us</li>
                <li>Closed months are locked and backed up off-site — any change shows</li>
                <li>Export a full replay — re-run the month and get the same books</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Closed month · May 2026</span><span className="surface-meta">locked</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">Entries locked</td><td>8,412</td><td><span className="pill pill-ok">sealed</span></td></tr>
                    <tr><td className="acct">Seal code</td><td className="mono">0x4f3b…0eb4</td><td><span className="pill pill-ok">verified</span></td></tr>
                    <tr><td className="acct">Closed by</td><td>F. Whitman · signed</td><td className="num">14:02</td></tr>
                    <tr><td className="acct">Tamper check</td><td>checked on every read</td><td><span className="pill pill-ok">intact</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> backed up off-site · any change after the seal breaks it</div>
              </div>
            </div>
          </div>

          <div className="feature reveal" id="evals">
            <div className="feature-copy">
              <div className="f-eyebrow">tested before release</div>
              <div className="f-h">It passes the test before it touches your books.</div>
              <p className="f-p">Before any new version of Aleq goes live, we test it on real close, collections, and reconciliation cases — and run a set of safety checks. It has to score at least 0.90 out of 1.0. If it doesn&apos;t pass, it doesn&apos;t ship.</p>
              <ul className="f-list">
                <li>Each job is tested and graded · re-tested on every change</li>
                <li>Safety checks have to pass before release</li>
                <li>The accounting can&apos;t quietly go wrong — a failed test blocks the release</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Test results · build 2026.4</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>month-end close</td><td className="num">0.96</td><td><span className="pill pill-ok">pass</span></td></tr>
                    <tr><td>collections</td><td className="num">0.94</td><td><span className="pill pill-ok">pass</span></td></tr>
                    <tr><td>reconciliation</td><td className="num">0.97</td><td><span className="pill pill-ok">pass</span></td></tr>
                    <tr><td>safety checks</td><td className="num">—</td><td><span className="pill pill-ok">enforced</span></td></tr>
                    <tr className="total"><td>must score 0.90+</td><td className="num">—</td><td><span className="pill pill-ok">ships</span></td></tr>
                  </tbody></table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="dsection alt" id="vs">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">with rules vs. without</span><h2 className="h2">Same AI. The difference is the rules around it.</h2><p className="lead">It&apos;s the same AI underneath. What changes is what it&apos;s allowed to do when it isn&apos;t sure — and whether anyone can prove what it did.</p></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">with rules and proof</span></div>
              <div className="vco-sub">Acts only inside your limits, and proves it.</div>
              <ul>
                <li>Earns one task at a time, never all at once</li>
                <li>Stops at your limits and asks a clear question</li>
                <li>Every action signed, you can undo it, and replay it</li>
                <li>Closed months are locked — no one can rewrite the past</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>AI with no rules</h3><span className="vco-cat">no limits</span></div>
              <div className="vco-sub">Hand it a risky task and it just does it.</div>
              <ul>
                <li>One on/off switch for everything</li>
                <li>Nothing between &quot;not sure&quot; and &quot;posted&quot;</li>
                <li>No signed receipt your auditor can check</li>
                <li>The failure is silent — it looks like success</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">You decide how much to trust it.</h2>
          <p className="lead">Connect read-only. Start everything in Assist. Move a task to Auto only when it&apos;s earned it.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/legal/security">Security</Link>
          </div>
        </div>
      </section>
    </>
  );
}
