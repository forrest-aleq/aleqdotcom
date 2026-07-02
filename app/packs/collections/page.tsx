import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections & dunning — scenario pack",
  description:
    "The AR pack: tiered dunning, voice calls in your name, promise capture, cash application at 99% first-pass, and escalation with credit hold — run continuously, eval-gated at 0.94.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container pk-hero-inner">
          <div className="pk-hero-copy">
            <span className="pk-dom">ar pack</span>
            <h1 className="h1">It works the ladder, makes the call, and books the cash.</h1>
            <p className="lead">Aleq runs the whole receivables motion: tiered dunning, bespoke follow-ups, voice calls in your name, promise capture, and cash application. It negotiates the small plans on its own, escalates the big ones with the context, and stops at the credit-hold decisions that have to be yours.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Run collections on your real AR</Link>
              <Link className="btn btn-lg" href="/work/collections">See it in detail →</Link>
            </div>
          </div>
          <div className="pk-score reveal">
            <div className="pks-v">0.94</div>
            <div className="pks-l">eval score · grade A</div>
            <div className="pks-gate">11 scenarios · 7 capabilities<br />gate ≥ 0.90 · pass</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="kbar reveal">
            <div className="kc"><div className="kc-v">48.2<span className="u">days</span></div><div className="kc-l">Average DSO, trailing</div></div>
            <div className="kc"><div className="kc-v">78<span className="u">%</span></div><div className="kc-l">Cash auto-applied</div></div>
            <div className="kc"><div className="kc-v">99<span className="u">%</span></div><div className="kc-l">First-pass application</div></div>
            <div className="kc"><div className="kc-v">11</div><div className="kc-l">Scenarios in this pack</div></div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead"><span className="eyebrow">dunning ladder · 2026-04</span><h2 className="h2">The collections ladder, rung by rung.</h2><p className="lead">Each step carries an owner, a capability tag, a policy ID, and an autonomy tier. Tier 1 runs signed; Tier 2 drafts for your approval; credit holds and the CFO call stay human-only.</p></div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="surface-title">Collections ladder · open AR</span><span className="surface-meta">$1.41M open · 11 in flight</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Step</th><th>Capability</th><th>Policy</th><th>How</th></tr></thead>
                <tbody>
                  <tr><td>30-day reminder</td><td className="mono">ar.send_dunning</td><td className="acct">P-DUNNING-30D</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>60-day bespoke dunning</td><td className="mono">ar.send_dunning</td><td className="acct">P-DUNNING-60D</td><td><span className="pill pill-info">drafted</span></td></tr>
                  <tr><td>Call &amp; negotiate 60-day plan</td><td className="mono">ar.voice_call</td><td className="acct">P-AMT-25K-PAY</td><td><span className="pill pill-info">drafted</span></td></tr>
                  <tr className="hot"><td>Escalate &gt;$100k — credit hold + CFO call</td><td className="mono">ar.credit_hold</td><td className="acct">P-AR-ESCALATE-90</td><td><span className="pill pill-warn">you</span></td></tr>
                  <tr><td>Cash application — incoming receipts</td><td className="mono">ar.cash_application</td><td className="acct">78% auto</td><td><span className="pill pill-ok">auto</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> 2 auto · 2 drafted · 1 human-only · every auto action ed25519 signed</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">it knows when to escalate</div>
              <div className="f-h">Stark Industries broke 3 promises. Aleq stopped emailing and flagged you.</div>
              <p className="f-p">Three missed promises on $412.4k, and a 14% historical write-off rate at this stage — so Aleq didn&apos;t send a fourth polite reminder. It rolled up the full payment history, the broken-promise timeline, and the write-off risk, then queued a credit-hold decision and a CFO call for you. Where the math still works, it just collects: a voice call to Haven Foods captured a firm promise of $48,000 on Friday.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">At-risk receivables · Apr 2026</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr className="hot"><td>Stark Industries</td><td className="acct">3 missed · 14% w/o</td><td className="num">$412.4k</td><td><span className="pill pill-bad">credit hold</span></td></tr>
                    <tr><td>Haven Foods</td><td className="acct">voice · captured</td><td className="num pos">$48,000</td><td><span className="pill pill-ok">Fri</span></td></tr>
                    <tr><td>Wayne Logistics</td><td className="acct">60-day plan</td><td className="num">$92,100</td><td><span className="pill pill-info">drafted</span></td></tr>
                    <tr><td>Acme Retail Co.</td><td className="acct">30-day reminder</td><td className="num">$18,400</td><td><span className="pill pill-ok">sent</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot" style={{ background: "var(--warning)", boxShadow: "0 0 0 3px color-mix(in oklch,var(--warning) 18%,transparent)" }}></span> ESCALATED · $412.4k waiting on your credit-hold call</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">in this pack</span><h2 className="h2">Seven capabilities, eleven scenarios.</h2></div>
          <div className="capgrid reveal">
            <div className="cap"><div className="cap-k">ar.send_dunning</div><div className="cap-h">Tiered dunning</div><div className="cap-p">30/60/90 ladder with bespoke language per counterparty and stage.</div></div>
            <div className="cap"><div className="cap-k">ar.voice_call</div><div className="cap-h">Voice calls in your name</div><div className="cap-p">Outbound calls placed on your behalf, with the conversation logged.</div></div>
            <div className="cap"><div className="cap-k">ar.promise_capture</div><div className="cap-h">Promise capture</div><div className="cap-p">Firm amounts and dates captured verbatim and tracked to the day.</div></div>
            <div className="cap"><div className="cap-k">ar.cash_application</div><div className="cap-h">Cash application</div><div className="cap-p">Incoming receipts matched to invoices at 99% first-pass.</div></div>
            <div className="cap"><div className="cap-k">ar.credit_hold</div><div className="cap-h">Escalation &amp; credit hold</div><div className="cap-p">Above-threshold accounts escalated with full history for your call.</div></div>
            <div className="cap"><div className="cap-k">ar.aging</div><div className="cap-h">Aging by counterparty</div><div className="cap-p">Live aging buckets per customer, scored for write-off risk.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs the alternatives</span><h2 className="h2">Collections — Aleq does the work.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">governed controller</span></div>
              <div className="vco-sub">Works the ladder, makes the call, books the cash.</div>
              <ul><li>Works the full aging ladder by policy</li><li>Places the call by voice — captures the promise to date &amp; amount</li><li>Applies the cash to the invoice when it lands</li><li>Escalates with the receipts, signed</li></ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Bill.com</h3><span className="vco-cat">AR automation</span></div>
              <div className="vco-sub">Sends reminders. You still chase.</div>
              <ul><li>Automated email reminders only</li><li>No voice, no live negotiation</li><li>You apply the cash and track the promise</li><li>No policy-driven escalation</li></ul>
            </article>
          </div>
          <div className="matrix-wrap reveal" style={{ marginTop: "34px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            <table className="matrix" style={{ minWidth: "520px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">Bill.com</span></th></tr></thead>
              <tbody><tr><th>Works the aging ladder</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">reminders</span></td></tr><tr><th>Calls by voice</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Captures the promise</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr><tr><th>Applies the cash</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">partial</span></td></tr><tr><th>Pricing</th><td className="m-aleq"><b>$/hr worked</b></td><td>per-user</td></tr></tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring your open AR.</h2>
          <p className="lead">We&apos;ll connect read-only, run the ladder on your real receivables, and show you the drafts, the calls, and the cash — with the full signed trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">See a live close</Link>
            <Link className="btn btn-lg" href="/packs">All scenario packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
