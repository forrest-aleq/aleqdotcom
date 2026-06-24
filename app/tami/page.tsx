import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TAMi — how Aleq learns your books",
  description:
    "TAMi is how Aleq learns from your team's own approvals: it posts the routine entries itself, holds the judgment calls for your sign-off, and leaves a reversible receipt behind every entry.",
};

export default function Page() {
  return (
    <>
      <section className="dp-hero tami-hero">
        <div className="container dp-hero-inner">
          <div className="dp-hero-copy">
            <div className="eyebrow">how aleq learns · TAMi</div>
            <h1 className="h1">Aleq learns how your team codes the books — then does the routine work itself.</h1>
            <p className="lead">TAMi is the part of Aleq that learns from your team&apos;s own decisions. Once it has coded the same kind of transaction your way enough times, it starts posting those itself — and holds anything outside the pattern for you to review. Every entry it posts shows its support and can be reversed in one click.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">See it on your books</Link>
              <Link className="btn btn-lg" href="/control">How you set the limits</Link>
            </div>
            <div className="dp-kicker"><span className="t-dot"></span> learns your coding · posts the routine · holds the exceptions · shows its work</div>
          </div>

          <div className="tami-board reveal" aria-label="how Aleq learns to match the bank">
            <div className="tami-board-bar"><span className="surface-dot"></span><span>Aleq · learning to match the bank</span><span className="tami-live">live</span></div>
            <div className="tami-flow">
              <div className="tami-node"><span>1 · watched</span><b>412 Stripe deposits</b><p>same bank source, same memo, same clearing account</p></div>
              <div className="tami-node"><span>2 · learned</span><b>Code to Stripe Clearing</b><p>your team coded it the same way 412 times, never reversed</p></div>
              <div className="tami-node"><span>3 · took over</span><b>Posts these itself now</b><p>routine deposits only, inside the limits you set</p></div>
              <div className="tami-node on"><span>4 · this month</span><b>410 posted, 2 held</b><p>$0.00 variance · the 2 over your limit wait for you</p></div>
            </div>
            <div className="tami-board-foot"><span className="seal-dot"></span> This isn&apos;t a chatbot answer. It&apos;s a posting rule — the support behind it, your limits around it, and one-click reversal.</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center">
            <span className="eyebrow">how it works</span>
            <h2 className="h2">It won&apos;t automate anything until it has proven it on your books.</h2>
            <p className="lead">It starts by watching your team code transactions. It only takes a task over after you&apos;ve approved the same treatment enough times — and it still holds the judgment calls.</p>
          </div>

          <div className="tami-story reveal">
            <article className="tami-card">
              <div className="tami-card-k">step 1 · it watches</div>
              <h3>It watches how your team codes each transaction.</h3>
              <div className="tami-mini">
                <div className="tm-row"><span>Stripe deposit</span><b>+$142,400</b></div>
                <div className="tm-question">Where does your team code Stripe deposits?</div>
                <div className="tm-choice on">Stripe Clearing account</div>
              </div>
            </article>
            <article className="tami-card">
              <div className="tami-card-k">step 2 · it learns the rule</div>
              <h3>Enough identical approvals become a rule.</h3>
              <div className="tami-mini">
                <div className="tm-belief">Stripe deposits &rarr; Stripe Clearing</div>
                <div className="tm-meter"><i style={{ width: "100%" }}></i><span>100%</span></div>
                <div className="tm-note">coded the same way 412 times · 0 reversals</div>
              </div>
            </article>
            <article className="tami-card">
              <div className="tami-card-k">step 3 · it posts the routine</div>
              <h3>It posts the routine items and holds the rest.</h3>
              <div className="tami-mini">
                <div className="tm-row ok"><span>410 routine matches</span><b>posted</b></div>
                <div className="tm-row warn"><span>2 over your limit</span><b>held</b></div>
                <div className="tm-note">support, journal entry, and one-click reversal attached</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead">
            <span className="eyebrow">what every entry carries</span>
            <h2 className="h2">Every entry shows its support, where it stopped, and a receipt.</h2>
            <p className="lead">When Aleq posts, it attaches the documents it matched, the rule it followed, the approval limit it checked, and exactly what changed in your ledger.</p>
          </div>

          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">the support</div>
              <div className="f-h">Nothing posts without the documents behind it.</div>
              <p className="f-p">Aleq works from the bank line, the invoice, the ledger, and your approval limits — not a typed prompt. The screen shows exactly which documents it matched before it posts anything.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Support · Stripe deposit</span><span className="surface-meta">ready</span></div>
                <div className="surface-body">
                  <table className="ptable">
                    <tbody>
                      <tr><td className="acct">Bank line</td><td>Stripe deposit</td><td className="num">$142,400</td></tr>
                      <tr><td className="acct">Matched to</td><td>Stripe payout batch · Apr 30</td><td className="num">100%</td></tr>
                      <tr><td className="acct">Journal entry</td><td>Dr cash · Cr Stripe Clearing</td><td><span className="pill pill-ok">balanced</span></td></tr>
                      <tr><td className="acct">Your rule</td><td>routine cash clearing, under the limit</td><td><span className="pill pill-info">auto</span></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> support shown before anything posts</div>
              </div>
            </div>
          </div>

          <div className="feature flip reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">the stop</div>
              <div className="f-h">It stops at the judgment calls.</div>
              <p className="f-p">A reliable bank-matching rule still stops when the amount, account, vendor, or risk is outside what you approved. Then it asks instead of guessing.</p>
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

          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">the receipt</div>
              <div className="f-h">Every posting comes with a receipt.</div>
              <p className="f-p">The receipt shows why it posted, what triggered it, which limit allowed it, and the exact journal entry — so you and your auditor can replay it.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Action receipt</span><span className="surface-meta">posted</span></div>
                <div className="surface-body">
                  <div className="tami-receipt">
                    <div><span>why</span><p>Amount, customer, and memo match invoice INV-7829 to the penny.</p></div>
                    <div><span>triggered by</span><p>ACH $312,400 · memo CYBERDYNE-MAR</p></div>
                    <div><span>your rule</span><p>exact customer match, under the exception limit, posts automatically</p></div>
                    <div><span>journal entry</span><p>Dr cash $312,400 · Cr A/R $312,400 · invoice marked paid</p></div>
                  </div>
                </div>
                <div className="surface-foot"><span className="seal-dot"></span> reversible entry · full replay attached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">you set the limits</span><h2 className="h2">You decide how much it does — task by task.</h2><p className="lead">It can post bank matches on its own while every payment waits for your approval and closing the period stays fully manual.</p></div>
          <div className="tami-rule-grid reveal">
            <div className="tami-rule"><span>Auto</span><b>Matching the bank</b><p>18,420 matches · 98.7% tied out · routine cash clearing only</p></div>
            <div className="tami-rule on"><span>Assist</span><b>Scheduling a payment</b><p>drafts the wire, attaches the support, waits for your approval</p></div>
            <div className="tami-rule"><span>Manual</span><b>Locking the period</b><p>prepares the close package, but you seal the period</p></div>
          </div>
        </div>
      </section>

      <section className="dsection" aria-labelledby="tami-proof-title">
        <div className="container">
          <div className="dhead center" style={{ maxWidth: "920px" }}>
            <span className="eyebrow">the evidence · eval runs</span>
            <h2 className="h2" id="tami-proof-title">When the stakes go up, Aleq stops guessing. We have the run to prove it.</h2>
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

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs a generic AI tool</span><h2 className="h2">Not a chatbot. It posts to your ledger.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">posts inside your limits</span></div>
              <div className="vco-sub">Learns your coding and posts only inside the limits you set.</div>
              <ul>
                <li>Shows the documents behind every entry</li>
                <li>You turn it on one task at a time, not all at once</li>
                <li>Stops at your approval limits and asks a specific question</li>
                <li>Leaves a reversible receipt for every entry</li>
              </ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Generic AI / copilot</h3><span className="vco-cat">answers questions</span></div>
              <div className="vco-sub">Answers questions. You still do the posting.</div>
              <ul>
                <li>Doesn&apos;t learn your team&apos;s actual coding decisions</li>
                <li>No per-task limits or approval gate</li>
                <li>No permission to post to the ledger</li>
                <li>No receipt your auditor can replay</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Watch it learn on your books.</h2>
          <p className="lead">Connect read-only and watch it learn your coding, hold the judgment calls, and post the routine work with a receipt behind every entry.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/control">How you set the limits</Link>
          </div>
        </div>
      </section>
    </>
  );
}
