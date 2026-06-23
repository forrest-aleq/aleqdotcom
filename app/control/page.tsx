import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The control plane — governed autonomy you can audit",
  description:
    "Aleq runs in Manual, Assist, or Auto — you set which, per task. Every action is gated, signed, reversible, and eval-tested before it touches your books. The policy book is readable, powered by TAMi.",
};

export default function Page() {
  return (
    <>
      <section className="dp-hero">
        <div className="container dp-hero-inner">
          <div className="dp-hero-copy">
            <div className="eyebrow">the control plane · the moat</div>
            <h1 className="h1">Autonomy you can put on a leash.</h1>
            <p className="lead">It&apos;s not all-or-nothing. Aleq runs in one of three modes — and you set which, <b>per task</b>. Every action it takes is gated, signed, reversible, and eval-tested before it touches your books. The judgment behind it is TAMi, the mind that powers Aleq.</p>
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

      <section className="dsection alt" id="burden">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">the manual control burden</div>
              <div className="f-h">Governing finance by hand is a second full-time job.</div>
              <p className="f-p">Segregation of duties lives in a spreadsheet someone forgets to update. Approvals chase signatures through email. Audit evidence is assembled by hand the week before fieldwork, and when someone asks &quot;why did this post?&quot; there is no replay — only memory. That is the cost Aleq&apos;s control plane removes, not by trusting the machine, but by making every move provable.</p>
              <ul className="f-list">
                <li>SoD enforced in the engine, not tracked in a tab</li>
                <li>Approval routing built in — no email threads to reconstruct</li>
                <li>Evidence assembled continuously, not the night before fieldwork</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">The manual control month</span><span className="surface-meta">what it replaces</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">SoD matrix</td><td>tracked by hand in a sheet</td><td><span className="pill pill-warn">stale</span></td></tr>
                    <tr><td className="acct">Approvals</td><td>chased over email</td><td><span className="pill pill-warn">no trail</span></td></tr>
                    <tr><td className="acct">Audit evidence</td><td>assembled the week before</td><td className="num">38 hrs</td></tr>
                    <tr><td className="acct">&quot;Why did this post?&quot;</td><td>reconstructed from memory</td><td><span className="pill pill-warn">no replay</span></td></tr>
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
          <div className="dhead center"><span className="eyebrow">the learning loop · powered by TAMi</span><h2 className="h2">Observe, believe, act inside the gate, leave a receipt, learn.</h2><p className="lead">TAMi is the mind that powers Aleq. Every autonomous move runs the same closed loop — and the outcome folds back in, so trust is earned by evidence, not granted by default.</p></div>
          <div className="tami-board reveal" aria-label="TAMi control loop">
            <div className="tami-board-bar"><span className="surface-dot"></span><span>Aleq · clearing the bank, May close</span><span className="tami-live">live</span></div>
            <div className="tami-flow">
              <div className="tami-node"><span>01 · observe</span><b>247 bank lines</b><p>statement, matched sources, ledger state, your prior approvals</p></div>
              <div className="tami-node"><span>02 · believe</span><b>Route to Stripe Clearing</b><p>412 confirmations · 0 reversals · strength 1.00</p></div>
              <div className="tami-node on"><span>03 · act in gate</span><b>245 posted, 2 held</b><p>routine matches clear; two material items wait for approval</p></div>
              <div className="tami-node"><span>04 · receipt + learn</span><b>signed · folded back</b><p>ed25519 receipt staged reversible; outcome updates the belief</p></div>
            </div>
            <div className="tami-board-foot"><span className="seal-dot"></span> Not a chat answer — a belief with evidence, a policy gate, a signed receipt, and a rollback path.</div>
          </div>
        </div>
      </section>

      <section className="dsection alt" id="earned">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">earned autonomy · per capability</span><h2 className="h2">Autonomy unlocks one capability at a time — never globally.</h2><p className="lead">A strong belief earns Auto for the task it was earned on, and nothing else. Bank matching can run alone while payments stay in Assist and period lock stays Manual. Each capability carries its own threshold and its own leash.</p></div>
          <div className="tami-rule-grid reveal" style={{ marginBottom: "30px" }}>
            <div className="tami-rule on"><span>Auto</span><b>bank.match</b><p>runs alone after 200+ clean confirmations · 18,420 runs · 98.7% success · routine cash clearing only</p></div>
            <div className="tami-rule"><span>Assist</span><b>payment.send</b><p>always proposes · drafts the wire, attaches evidence, waits for approval — autonomy never unlocks here</p></div>
            <div className="tami-rule"><span>Manual</span><b>period.lock</b><p>prepares the seal package · a named human signs the period closed</p></div>
          </div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Autonomy thresholds · per capability</span><span className="surface-meta">policy book</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Capability</th><th>Unlocks at</th><th className="num">Strength</th><th>Mode now</th></tr></thead>
                <tbody>
                  <tr><td className="mono">bank.match</td><td>200 confirmations · 0 reversals</td><td className="num">1.00</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">ap.code</td><td>150 confirmations · ±4% amount</td><td className="num">0.99</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">dunning.send</td><td>policy-bounded · below escalation tier</td><td className="num">0.96</td><td><span className="pill pill-ok">Auto</span></td></tr>
                  <tr><td className="mono">payment.send</td><td>never auto · stays in Assist by policy</td><td className="num">0.92</td><td><span className="pill pill-info">Assist</span></td></tr>
                  <tr className="total"><td className="mono">period.lock</td><td>human-only seal</td><td className="num">—</td><td><span className="pill pill-warn">Manual</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> a belief drops back to Assist the moment its strength falls below threshold</div>
          </div>
        </div>
      </section>

      <section className="dsection">
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

          <div className="feature flip reveal" id="seals">
            <div className="feature-copy">
              <div className="f-eyebrow">trust is provable</div>
              <div className="f-h">Signed, reversible, replayable — and the period seals can&apos;t be forged.</div>
              <p className="f-p">Every action Aleq takes is signed with an ed25519 key and staged with its reverse pair, so trust never rests on &quot;the system says so.&quot; When a period locks, Aleq writes a tamper-evident seal: a hash chain over every entry in the period, pinned offsite. Change one cent after the seal and the hash no longer matches — your auditor sees it instantly.</p>
              <ul className="f-list">
                <li>ed25519 signature on every action — verify independently of Aleq</li>
                <li>Hash-chained period seals · tamper-evident, pinned to S3 + offsite</li>
                <li>Full replay export — re-run the month and reproduce the books</li>
              </ul>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Period seal · May 2026</span><span className="surface-meta">locked</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td className="acct">Entries sealed</td><td>8,412</td><td><span className="pill pill-ok">hash-chained</span></td></tr>
                    <tr><td className="acct">Seal hash</td><td className="mono">0x4f3b…0eb4</td><td><span className="pill pill-ok">verified</span></td></tr>
                    <tr><td className="acct">Sealed by</td><td>F. Whitman · ed25519</td><td className="num">14:02</td></tr>
                    <tr><td className="acct">Tamper check</td><td>recomputed on read</td><td><span className="pill pill-ok">intact</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> pinned S3 + offsite · any post-seal edit breaks the chain</div>
              </div>
            </div>
          </div>

          <div className="feature reveal" id="evals">
            <div className="feature-copy">
              <div className="f-eyebrow">eval-gated</div>
              <div className="f-h">It passes the test before it touches the books.</div>
              <p className="f-p">Every version of Aleq is graded against scenario packs — golden cases drawn from real close, collections, and reconciliation work — and checked by Guardian rules and belief-governance gates before release. No pass, no deploy. The gate is 0.90; nothing ships under it.</p>
              <ul className="f-list">
                <li>Scenario packs per function, scored A–F · regression-tested every change</li>
                <li>Guardian rules + belief governance enforced as release gates</li>
                <li>Accounting can&apos;t silently drift — a failed gate blocks the build</li>
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
                    <tr><td>Guardian rules · belief governance</td><td className="num">—</td><td><span className="pill pill-ok">enforced</span></td></tr>
                    <tr className="total"><td>gate ≥ 0.90</td><td className="num">—</td><td><span className="pill pill-ok">deploy</span></td></tr>
                  </tbody></table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="dsection alt" id="vs">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">governed vs ungoverned</span><h2 className="h2">The difference isn&apos;t the intelligence. It&apos;s the leash.</h2><p className="lead">Same underlying models. What changes is what Aleq is allowed to do when it isn&apos;t sure — and whether anyone can prove what it did.</p></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq · the control plane</h3><span className="vco-cat">governed by TAMi</span></div>
              <div className="vco-sub">Acts only inside the gate, and leaves proof.</div>
              <ul>
                <li>Autonomy unlocks per capability, never globally</li>
                <li>Stops at policy gates and asks a precise question</li>
                <li>Every action signed, reversible, and replayable</li>
                <li>Periods sealed tamper-evident — nothing rewrites history</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Ungoverned AI</h3><span className="vco-cat">no leash</span></div>
              <div className="vco-sub">Hand it a risky task and it just does it.</div>
              <ul>
                <li>One global trust setting — on or off</li>
                <li>No gate between &quot;uncertain&quot; and &quot;posted&quot;</li>
                <li>No signed receipt your auditor can replay</li>
                <li>The failure is silent — it looks like success</li>
              </ul>
            </article>
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
