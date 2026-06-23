import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TAMi — the intelligence that earns autonomy",
  description:
    "TAMi is the mind behind Aleq — evidence-backed beliefs, governed autonomy per capability, and a replayable trail for every decision.",
};

export default function Page() {
  return (
    <>
      <section className="dp-hero tami-hero">
        <div className="container dp-hero-inner">
          <div className="dp-hero-copy">
            <div className="eyebrow">the mind behind aleq · TAMi</div>
            <h1 className="h1">Aleq knows when to act, when to ask, and how to explain itself.</h1>
            <p className="lead">That judgment is TAMi — the mind that powers Aleq. It watches outcomes, turns repeated judgment into evidence-backed rules, unlocks autonomy inside your limits, and pulls back to asking when the evidence changes.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
              <Link className="btn btn-lg" href="/control">The control plane</Link>
            </div>
            <div className="dp-kicker"><span className="t-dot"></span> observe · learn · unlock · act · explain</div>
          </div>

          <div className="tami-board reveal" aria-label="TAMi decision loop">
            <div className="tami-board-bar"><span className="surface-dot"></span><span>Aleq · learning to match the bank</span><span className="tami-live">live</span></div>
            <div className="tami-flow">
              <div className="tami-node"><span>01 · observed</span><b>412 Stripe transfers</b><p>same source, same memo pattern, same clearing account</p></div>
              <div className="tami-node"><span>02 · learned</span><b>Route to Stripe Clearing</b><p>412 confirmations, 0 reversals, strength 1.00</p></div>
              <div className="tami-node"><span>03 · unlocked</span><b>Auto under policy limits</b><p>posts routine matches, holds material judgment</p></div>
              <div className="tami-node on"><span>04 · acted</span><b>410 posted, 2 held</b><p>$0.00 variance, approval queue attached</p></div>
            </div>
            <div className="tami-board-foot"><span className="seal-dot"></span> This is not a chat answer. It is a rule with evidence, limits, and a rollback path.</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center">
            <span className="eyebrow">15-second version</span>
            <h2 className="h2">A judgment becomes automation only after it proves itself.</h2>
            <p className="lead">One event becomes a remembered pattern, then a bounded action with the evidence still attached.</p>
          </div>

          <div className="tami-story reveal">
            <article className="tami-card">
              <div className="tami-card-k">new event</div>
              <h3>It sees a bank line it has not earned yet.</h3>
              <div className="tami-mini">
                <div className="tm-row"><span>Stripe deposit</span><b>+$142,400</b></div>
                <div className="tm-question">Where should Stripe deposits go?</div>
                <div className="tm-choice on">Stripe Clearing account</div>
              </div>
            </article>
            <article className="tami-card">
              <div className="tami-card-k">belief forms</div>
              <h3>It turns repeated approvals into a rule.</h3>
              <div className="tami-mini">
                <div className="tm-belief">Stripe deposits &rarr; Stripe Clearing</div>
                <div className="tm-meter"><i style={{ width: "100%" }}></i><span>1.00</span></div>
                <div className="tm-note">412 confirmations · 0 reversals · locked</div>
              </div>
            </article>
            <article className="tami-card">
              <div className="tami-card-k">controlled action</div>
              <h3>It acts only inside the policy you set.</h3>
              <div className="tami-mini">
                <div className="tm-row ok"><span>410 routine matches</span><b>posted</b></div>
                <div className="tm-row warn"><span>2 material items</span><b>held</b></div>
                <div className="tm-note">evidence, journal impact, and undo path attached</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead">
            <span className="eyebrow">what the product has to show</span>
            <h2 className="h2">The story is always: source, belief, gate, action.</h2>
            <p className="lead">Every autonomous move carries the evidence, the learned rule, the policy gate, and the receipt.</p>
          </div>

          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">source</div>
              <div className="f-h">It starts with real evidence, not a prompt.</div>
              <p className="f-p">Aleq sees the bank line, the invoice, the ledger state, the policy book, and the history of what you approved before. The screen says exactly which evidence mattered.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Evidence packet</span><span className="surface-meta">ready</span></div>
                <div className="surface-body">
                  <table className="ptable">
                    <tbody>
                      <tr><td className="acct">Bank line</td><td>Stripe deposit</td><td className="num">$142,400</td></tr>
                      <tr><td className="acct">Matched source</td><td>Stripe payout batch · Apr 30</td><td className="num">100%</td></tr>
                      <tr><td className="acct">Ledger effect</td><td>Dr cash · Cr Stripe Clearing</td><td><span className="pill pill-ok">balanced</span></td></tr>
                      <tr><td className="acct">Policy</td><td>routine cash clearing under threshold</td><td><span className="pill pill-info">auto</span></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> evidence shown before any posting</div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">gate</div>
              <div className="f-h">It stops at judgment calls.</div>
              <p className="f-p">Autonomy is not bravado. A strong bank-matching belief can still hit a policy gate if the dollar amount, account, vendor, or risk class requires a human.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Approval gate</span><span className="surface-meta">held</span></div>
                <div className="surface-body">
                  <div className="tami-decision">
                    <div><span className="pill pill-warn">Needs approval</span><h3>$188,440 Foxconn wire</h3><p>Early-pay discount is attractive, but the amount exceeds your $100k auto-payment limit.</p></div>
                    <div className="tami-decision-grid">
                      <span>belief strength <b>0.92</b></span>
                      <span>policy limit <b>$100k</b></span>
                      <span>mode <b>Assist</b></span>
                    </div>
                  </div>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> action queued · no money moved</div>
              </div>
            </div>
          </div>

          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">action</div>
              <div className="f-h">When it acts, the receipt explains the move.</div>
              <p className="f-p">The receipt is the marketing point and the product point: why this happened, which signal triggered it, which policy allowed it, and what changed in the books.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Action receipt</span><span className="surface-meta">posted</span></div>
                <div className="surface-body">
                  <div className="tami-receipt">
                    <div><span>why</span><p>Amount, customer, and memo match invoice INV-7829 to the penny.</p></div>
                    <div><span>signal</span><p>ACH $312,400 · memo CYBERDYNE-MAR</p></div>
                    <div><span>policy</span><p>customer exact match can auto-apply below exception threshold</p></div>
                    <div><span>effect</span><p>Cr A/R $312,400 · Dr cash $312,400 · invoice marked paid</p></div>
                  </div>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> reversible entry staged · replay attached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">earned autonomy</span><h2 className="h2">Every capability has its own leash.</h2><p className="lead">Bank matching can run automatically while payments wait for approval and period lock stays manual. That is the whole point.</p></div>
          <div className="tami-rule-grid reveal">
            <div className="tami-rule"><span>Auto</span><b>Matching the bank</b><p>18,420 runs · 98.7% success · routine cash clearing only</p></div>
            <div className="tami-rule on"><span>Assist</span><b>Scheduling a payment</b><p>drafts the wire, attaches the evidence, waits for controller approval</p></div>
            <div className="tami-rule"><span>Manual</span><b>Locking the period</b><p>prepares the package, but a human seals the period</p></div>
          </div>
        </div>
      </section>

      <section className="dsection" aria-labelledby="tami-proof-title">
        <div className="container">
          <div className="dhead center" style={{ maxWidth: "920px" }}>
            <span className="eyebrow">the evidence · eval runs</span>
            <h2 className="h2" id="tami-proof-title">When the stakes go up, Aleq stops guessing. We have the run to prove it.</h2>
            <p className="lead">We gave the same high-risk accounting tasks to an ungoverned AI and to Aleq. Same underlying intelligence — the difference is what Aleq is allowed to do when it isn&apos;t sure.</p>
          </div>

          <div className="vs-cols reveal" style={{ marginBottom: "30px" }}>
            <article className="vs-col them">
              <div className="vco-top"><h3>Ungoverned AI</h3><span className="vco-cat">no leash</span></div>
              <div className="vco-sub">Hand it a risky task and it just does it.</div>
              <ul>
                <li>Acts on unverified data and missing documentation</li>
                <li>Blows past materiality limits and usage caps</li>
                <li>No gate between &quot;uncertain&quot; and &quot;posted&quot;</li>
                <li>The failure is silent — it looks like success</li>
              </ul>
            </article>
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">powered by TAMi</span></div>
              <div className="vco-sub">The same task routes to the safe move.</div>
              <ul>
                <li>Clarifies before acting on incomplete evidence</li>
                <li>Proposes the action and waits inside policy</li>
                <li>Escalates the judgment call instead of forcing one</li>
                <li>Refuses the unsafe path rather than fake a result</li>
              </ul>
            </article>
          </div>

          <div className="tami-proof-stats reveal">
            <div className="tps hot">
              <div className="tps-v">75%</div>
              <div className="tps-l">of high-risk tasks an ungoverned AI failed, Aleq turned into a question or a proposal — instead of an unsafe action<span>43 of 57 tasks</span></div>
            </div>
            <div className="tps">
              <div className="tps-v">84%</div>
              <div className="tps-l">of those same tasks no longer failed once Aleq was in the loop<span>48 of 57 tasks</span></div>
            </div>
            <div className="tps">
              <div className="tps-v">0</div>
              <div className="tps-l">cash-disbursement tasks executed without a gate — the controller keeps the keys<span>liquidity stays human</span></div>
            </div>
          </div>

          <div className="tami-tax reveal">
            <div className="tt-head">Where the risk moved — tasks an ungoverned AI failed, by area, that Aleq turned into a question or a proposal</div>
            <div className="tt-row">
              <span className="tt-name">Financial reporting, close &amp; record integrity<small>46 ungoverned failures</small></span>
              <span className="tt-bar"><i style={{ width: "76%" }} /></span><span className="tt-pct">76%</span>
            </div>
            <div className="tt-row">
              <span className="tt-name">Audit, compliance &amp; internal controls<small>24 ungoverned failures</small></span>
              <span className="tt-bar"><i style={{ width: "81%" }} /></span><span className="tt-pct">81%</span>
            </div>
            <div className="tt-row">
              <span className="tt-name">Professional escalation &amp; communication<small>10 ungoverned failures</small></span>
              <span className="tt-bar"><i style={{ width: "89%" }} /></span><span className="tt-pct">89%</span>
            </div>
            <div className="tt-row">
              <span className="tt-name">Revenue, billing, contract &amp; covenant risk<small>11 ungoverned failures</small></span>
              <span className="tt-bar"><i style={{ width: "67%" }} /></span><span className="tt-pct">67%</span>
            </div>
          </div>

          <p className="tami-proof-foot"><span className="seal-dot"></span> From Aleq&apos;s internal eval runs — leading AI models (Claude, Codex, Gemini, Qwen) on the same tasks, with and without Aleq. <Link href="/company/contact">Request the full methodology →</Link></p>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs generic AI</span><h2 className="h2">Not a chatbot. The mind that runs your books.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq + TAMi</h3><span className="vco-cat">governed intelligence</span></div>
              <div className="vco-sub">Builds rules from evidence and acts only inside limits.</div>
              <ul>
                <li>Shows the source evidence behind every belief</li>
                <li>Unlocks autonomy per capability, not globally</li>
                <li>Stops at policy gates and asks precise questions</li>
                <li>Leaves a receipt for every action it takes</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Generic AI layer</h3><span className="vco-cat">chat or copilot</span></div>
              <div className="vco-sub">Answers questions. You still operate the books.</div>
              <ul>
                <li>No durable belief register tied to outcomes</li>
                <li>No per-capability autonomy or policy gate</li>
                <li>No permissioned execution path into the ledger</li>
                <li>No action receipt your auditor can replay</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Watch it learn on your books.</h2>
          <p className="lead">Connect read-only and see the first beliefs form, the first gates trigger, and the first action receipts explain themselves.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/control">The control plane</Link>
          </div>
        </div>
      </section>
    </>
  );
}
