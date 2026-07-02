import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Control & TAMi — you set the limits, Aleq earns the rest",
  description:
    "Aleq's autonomy is a confidence score, not a switch — it runs a task alone only after enough proof, and only inside the limits you set. Every action is logged and reversible with a standard reversing entry. Read every rule it's earned, and what it still can't do.",
};

export default function Page() {
  return (
    <>
      <section className="dp-hero">
        <div className="container dp-hero-inner">
          <div className="dp-hero-copy">
            <div className="eyebrow">you stay in control</div>
            <h1 className="h1">You set the limits. Aleq earns the rest.</h1>
            <p className="lead">It&apos;s not all-or-nothing, and it&apos;s not a switch you flip per task either. Aleq&apos;s autonomy is a confidence score that climbs as it proves itself on your books — inside limits you set. Below the limit, it drafts and waits. Above it, it posts and shows you the receipt.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">See it on your books</Link>
              <Link className="btn btn-lg" href="#beliefs">How it decides ↓</Link>
            </div>
            <div className="dp-kicker"><span className="t-dot"></span> every action logged · reversible by a standard entry</div>
          </div>

          <div className="surface reveal">
            <div className="surface-bar">
              <span className="surface-dot"></span>
              <span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span>
              <span className="surface-title">Action log · today</span>
              <span className="surface-meta">all logged</span>
            </div>
            <div className="surface-body">
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_19d4</span> May reconciliation · JE-12491 <span className="r-rev">reversible</span></div>
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_19c8</span> dunning · Haven Foods <span className="r-rev">logged</span></div>
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_1a02</span> AWS bill B-3041 · auto-posted <span className="r-rev">reversible</span></div>
              <div className="receipt"><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="r-id">a_1a07</span> Foxconn wire · awaiting CEO <span className="r-rev" style={{ color: "var(--warning)", borderColor: "color-mix(in oklch,var(--warning) 40%,transparent)", background: "color-mix(in oklch,var(--warning) 12%,transparent)" }}>held</span></div>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> logged · hand your auditor a full history</div>
          </div>
        </div>
      </section>

      <section className="dsection" id="modes">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">it&apos;s not all-or-nothing</span><h2 className="h2">Three states. You set the limits that move between them.</h2><p className="lead">The mode you see per task isn&apos;t a switch you flip — it&apos;s a read-out of how much Aleq has proven itself, gated by the limits and thresholds you&apos;ve set.</p></div>
          <div className="modestrip reveal">
            <div className="ms"><div className="ms-top"><span className="ms-tag">manual</span><span className="ms-scale"><i className="on"></i><i></i><i></i></span></div><div className="ms-h">Below your threshold. Aleq advises.</div><p className="ms-p">New, unproven, or outside your limits. It looks things up and drafts the work. <b>You make every call</b> and post it yourself.</p></div>
            <div className="ms on"><div className="ms-top"><span className="ms-tag">assist <span className="ms-default">default</span></span><span className="ms-scale"><i className="on"></i><i className="on"></i><i></i></span></div><div className="ms-h">Proven, but not yet trusted alone.</div><p className="ms-p">It prepares the entry and shows its work. <b>One click to approve</b> — or reject — before anything posts.</p></div>
            <div className="ms"><div className="ms-top"><span className="ms-tag">auto</span><span className="ms-scale"><i className="on"></i><i className="on"></i><i className="on"></i></span></div><div className="ms-h">Above your threshold. Aleq acts.</div><p className="ms-p">It does the work and posts it, logged. <b>Reverse it any time</b> with a standard reversing entry.</p></div>
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
                <li>Aleq blocks the same person from both approving and posting a journal entry — you don&apos;t track it in a sheet</li>
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
          <div className="dhead center"><span className="eyebrow">how Aleq learns</span><h2 className="h2">It watches, earns confidence, acts inside your limits, and leaves a log.</h2><p className="lead">Aleq learns from what your team already does. What happens next teaches it. It earns your trust with proof — you don&apos;t hand it over up front.</p></div>
          <div className="tami-board reveal" aria-label="how Aleq clears the bank">
            <div className="tami-board-bar"><span className="surface-dot"></span><span>Aleq · clearing the bank, May close</span><span className="tami-live">live</span></div>
            <div className="tami-flow">
              <div className="tami-node"><span>1 · learns</span><b>247 bank lines</b><p>the statement, the matches, the ledger, and how you&apos;ve coded these before</p></div>
              <div className="tami-node"><span>2 · confidence climbs</span><b>Code to Stripe Clearing</b><p>you coded it this way 412 times and never reversed it</p></div>
              <div className="tami-node on"><span>3 · posts the routine</span><b>245 posted, 2 held</b><p>routine matches go through; two big ones wait for you</p></div>
              <div className="tami-node"><span>4 · logged</span><b>reversible any time</b><p>a logged entry you can reverse; what happens next updates the confidence score</p></div>
            </div>
            <div className="tami-board-foot"><span className="seal-dot"></span> This isn&apos;t a chatbot answer — it&apos;s a confidence score, the proof behind it, your limit, a logged entry, and a standard way to reverse it.</div>
          </div>
        </div>
      </section>

      <section className="dsection alt" id="earned">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">one task at a time</span><h2 className="h2">Aleq earns each task on its own — never all at once.</h2><p className="lead">When Aleq&apos;s confidence on one task crosses your threshold, it can run that task on its own — and only that one. It might match the bank by itself while every payment still waits for your OK and closing the month stays fully manual. Each task has its own limit, and you set it.</p></div>
          <div className="tami-rule-grid reveal" style={{ marginBottom: "30px" }}>
            <div className="tami-rule on"><span>Auto</span><b>Matching the bank</b><p>runs on its own after 200+ clean matches · 18,420 runs · 98.7% right · routine cash only</p></div>
            <div className="tami-rule"><span>Assist</span><b>Sending a payment</b><p>always waits for you · drafts the wire, shows the proof, holds for your OK — never runs alone</p></div>
            <div className="tami-rule"><span>Manual</span><b>Closing the month</b><p>gets the close ready · a person signs the month closed</p></div>
          </div>

          <div className="surface reveal" style={{ marginBottom: "30px" }}>
            <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">What each task can do · your rule book</span><span className="surface-meta">read it anytime</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Task</th><th>Runs alone after</th><th className="num">Confidence</th><th>Mode now</th></tr></thead>
                <tbody>
                  <tr><td className="mono">Matching the bank</td><td>200 clean matches</td><td className="num">1.00</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">Coding bills</td><td>150 times · within 4%</td><td className="num">0.99</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">Sending reminders</td><td>small ones, below your escalation line</td><td className="num">0.96</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">Sending a payment</td><td>never alone · always waits for you</td><td className="num">0.92</td><td><span className="pill pill-info">Assist</span></td></tr>
                  <tr className="total"><td className="mono">Closing the month</td><td>person only</td><td className="num">—</td><td><span className="pill pill-warn">Manual</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> if confidence on a task drops, Aleq stops and asks you again</div>
          </div>

          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">what it looks like when it holds</div>
              <div className="f-h">Held for your approval — not guessed at.</div>
              <p className="f-p">A reliable rule still stops when the amount, account, or risk is outside what you&apos;ve approved. Then it asks a specific question instead of guessing.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Held for your approval</span><span className="surface-meta">held</span></div>
                <div className="surface-body">
                  <div className="tami-decision">
                    <div><span className="pill pill-warn">Needs approval</span><h3>$188,440 Foxconn wire</h3><p>The early-pay discount is worth taking, but this is over your $100k auto-payment limit.</p></div>
                    <div className="tami-decision-grid">
                      <span>match confidence <b>92%</b></span>
                      <span>your limit <b>$100k</b></span>
                      <span>mode <b>Assist</b></span>
                    </div>
                  </div>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> held for sign-off · no money moved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">

          <div className="feature reveal" id="audit">
            <div className="feature-copy">
              <div className="f-eyebrow">logged · you can replay it</div>
              <div className="f-h">Every action is logged. Hand your auditor a replay.</div>
              <p className="f-p">Everything Aleq does gets a logged event you can reverse. It&apos;s not a screenshot of a dashboard. It&apos;s a real record your auditor can check on their own.</p>
              <ul className="f-list">
                <li>Every action shows why it happened, what set it off, the rule it used, and what it changed</li>
                <li>Routine work goes through quietly; big items come to you first</li>
                <li>Closed months are locked</li>
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
                <div className="surface-foot"><span className="seal-dot"></span> reversible any time · logged</div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal" id="undo">
            <div className="feature-copy">
              <div className="f-eyebrow">reversible · try it first</div>
              <div className="f-h">Reverse anything. Test it first.</div>
              <p className="f-p">Every entry Aleq posts can be reversed with a standard reversing entry, any time — the same mechanism your team already uses, not a special countdown window. You can also test any action on your real books first — it shows what would happen and changes nothing.</p>
              <ul className="f-list">
                <li>Every entry can be reversed with an offsetting entry, logged the same way</li>
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
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> reversible with a standard entry, any time</div>
              </div>
            </div>
          </div>

          <div className="feature reveal" id="beliefs">
            <div className="feature-copy">
              <div className="f-eyebrow">TAMi · you can read every rule</div>
              <div className="f-h">It shows you every rule it follows — and why.</div>
              <p className="f-p">TAMi — The Aleq Mind — is the part of Aleq that tracks confidence per task from your team&apos;s own approvals and corrections. Above your threshold, it runs alone; below it, it drafts and asks. Every correction you make updates the score for next time.</p>
              <ul className="f-list">
                <li>Every rule shows its confidence and what happens if it&apos;s wrong</li>
                <li>When you approve or reject, that teaches it for next time</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">What Aleq has learned</span><span className="surface-meta">6 rules</span></div>
                <div className="surface-body">
                  <table className="ptable">
                    <thead><tr><th>Rule</th><th className="num">Confidence</th><th>Status</th></tr></thead>
                    <tbody>
                      <tr><td>Stripe transfer ⇒ Stripe Clearing</td><td className="num">1.00</td><td><span className="pill pill-ok">runs alone</span></td></tr>
                      <tr><td>AWS bill in last 3 days, within 4%</td><td className="num">0.99</td><td><span className="pill pill-ok">runs alone</span></td></tr>
                      <tr><td>Foxconn early-pay discount always on</td><td className="num">0.92</td><td><span className="pill pill-info">learning</span></td></tr>
                      <tr><td>Stark pays only after a reminder</td><td className="num">0.42</td><td><span className="pill pill-warn">asks first</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="dsection alt" aria-labelledby="proof-title" id="proof">
        <div className="container">
          <div className="dhead center" style={{ maxWidth: "920px" }}>
            <span className="eyebrow">the evidence · eval runs</span>
            <h2 className="h2" id="proof-title">When the stakes go up, Aleq stops guessing. We have the run to prove it.</h2>
            <p className="lead">We ran 57 high-risk accounting tasks that leading AI models got wrong on their own. Then we ran the same 57 with Aleq in the loop — same models, the only change is what Aleq lets them do when the answer isn&apos;t certain.</p>
          </div>

          <div className="vs-cols reveal" style={{ marginBottom: "30px" }}>
            <article className="vs-col them">
              <div className="vco-top"><h3>Ungoverned AI</h3><span className="vco-cat">no limits</span></div>
              <div className="vco-sub">Hand it a risky task and it just does it.</div>
              <ul>
                <li>Acts on unverified data and missing documentation</li>
                <li>Blows past materiality limits and usage caps</li>
                <li>No gate between &quot;uncertain&quot; and &quot;posted&quot;</li>
                <li>The failure is silent — it looks like success</li>
              </ul>
            </article>
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">inside your limits</span></div>
              <div className="vco-sub">The same task routes to the safe move.</div>
              <ul>
                <li>Asks before acting on incomplete evidence</li>
                <li>Proposes the entry and waits inside your limits</li>
                <li>Escalates the judgment call instead of forcing one</li>
                <li>Refuses the unsafe path rather than fake a result</li>
              </ul>
            </article>
          </div>

          <div className="tami-proof-stats reveal">
            <div className="tps hot">
              <div className="tps-v">84%</div>
              <div className="tps-l">came out right with Aleq in the loop — the same models, ungoverned, got all 57 wrong<span>48 of 57 tasks</span></div>
            </div>
            <div className="tps">
              <div className="tps-v">75%</div>
              <div className="tps-l">Aleq stopped and asked, or queued the entry for your approval, instead of posting something wrong<span>43 of 57 tasks</span></div>
            </div>
            <div className="tps">
              <div className="tps-v">0</div>
              <div className="tps-l">payments left without a person signing off — the controller keeps the keys<span>across every run</span></div>
            </div>
          </div>

          <div className="tami-tax reveal">
            <div className="tt-head">Those 57 failed tasks break into 91 issues across four risk areas — one task often trips more than one. The bar is how many Aleq caught — stopped, asked, or queued for approval — instead of letting through.</div>
            <div className="tt-row">
              <span className="tt-name">Financial reporting, close &amp; record integrity<small>46 failures · caught below</small></span>
              <span className="tt-bar"><i style={{ width: "76%" }} /></span><span className="tt-pct">76%</span>
            </div>
            <div className="tt-row">
              <span className="tt-name">Audit, compliance &amp; internal controls<small>24 failures · caught below</small></span>
              <span className="tt-bar"><i style={{ width: "81%" }} /></span><span className="tt-pct">81%</span>
            </div>
            <div className="tt-row">
              <span className="tt-name">Professional escalation &amp; communication<small>10 failures · caught below</small></span>
              <span className="tt-bar"><i style={{ width: "89%" }} /></span><span className="tt-pct">89%</span>
            </div>
            <div className="tt-row">
              <span className="tt-name">Revenue, billing, contract &amp; covenant risk<small>11 failures · caught below</small></span>
              <span className="tt-bar"><i style={{ width: "67%" }} /></span><span className="tt-pct">67%</span>
            </div>
          </div>

          <p className="tami-proof-foot"><span className="seal-dot"></span> From Aleq&apos;s internal eval runs — leading AI models (Claude, Codex, Gemini, Qwen) on the same tasks, with and without Aleq. <Link href="/company/contact">Request the full methodology →</Link></p>
        </div>
      </section>

      <section className="dsection" id="seals">
        <div className="container">
          <div className="feature flip reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">closed months lock</div>
              <div className="f-h">A closed month is locked — no quiet edits after the fact.</div>
              <p className="f-p">When a month closes, Aleq locks the period: postings, reversals, and edits to closed entries are blocked at the ledger level. Reopening a closed period is its own explicit, logged action — not something that happens by accident.</p>
              <ul className="f-list">
                <li>Closed and locked periods block new postings and edits</li>
                <li>Reopening a period is a separate, logged step</li>
                <li>Export a full replay of the period&apos;s entries</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Closed month · May 2026</span><span className="surface-meta">locked</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">Entries locked</td><td>8,412</td><td><span className="pill pill-ok">locked</span></td></tr>
                    <tr><td className="acct">Closed by</td><td>F. Whitman</td><td className="num">14:02</td></tr>
                    <tr><td className="acct">Status</td><td>closed</td><td><span className="pill pill-ok">no edits</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> reopening is a separate, logged action</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection alt" id="evals">
        <div className="container">
          <div className="feature reveal">
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

      <section className="dsection" id="vs">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">with rules vs. without</span><h2 className="h2">Same AI. The difference is the rules around it.</h2><p className="lead">It&apos;s the same AI underneath. What changes is what it&apos;s allowed to do when it isn&apos;t sure — and whether anyone can prove what it did.</p></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">with rules and proof</span></div>
              <div className="vco-sub">Acts only inside your limits, and proves it.</div>
              <ul>
                <li>Earns one task at a time, never all at once</li>
                <li>Stops at your limits and asks a clear question</li>
                <li>Every action logged, and reversible with a standard entry</li>
                <li>Closed months are locked — no quiet edits after the fact</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>AI with no rules</h3><span className="vco-cat">no limits</span></div>
              <div className="vco-sub">Hand it a risky task and it just does it.</div>
              <ul>
                <li>One on/off switch for everything</li>
                <li>Nothing between &quot;not sure&quot; and &quot;posted&quot;</li>
                <li>No permission to post to the ledger, or no record if it does</li>
                <li>No receipt your auditor can replay</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">You decide how much to trust it.</h2>
          <p className="lead">Connect read-only. Start everything in Assist. Let a task move to Auto only when it&apos;s earned it.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/legal/security">Security</Link>
          </div>
        </div>
      </section>
    </>
  );
}
