import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections — gets you paid, without the awkward calls",
  description:
    "Aleq works every overdue invoice as a case — calling or emailing in your team's voice, capturing the promise to pay, and updating the ledger. You set the tone and the limits; it does the chasing.",
};

export default function Page() {
  return (
    <>
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Collections</div>
            <h1>Gets you paid. Without the awkward calls.</h1>
            <p className="pp-hero-lead">Aleq chases every overdue invoice in your team&apos;s voice — you get the promised date, not the awkward call.</p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">Put Aleq on collections</Link>
              <a className="btn btn-lg" href="#how">How it works</a>
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                Collections · overdue
                <span className="pp-live"><i /> working</span>
              </div>
              <div className="pp-checks">
                <div className="pp-match-row"><span className="pp-match-line">Stark Industries<small>INV-7827 · 61+ days</small></span><span className="pp-match-right"><span className="pp-num">$412,400</span><span className="pp-conf warn">high risk</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Globex Corp.<small>INV-7831 · 31–60 days</small></span><span className="pp-match-right"><span className="pp-num">$148,200</span><span className="pp-conf warn">at risk</span></span></div>
                <div className="pp-match-row"><span className="pp-match-line">Cyberdyne Systems<small>INV-7829 · promise to pay Fri</small></span><span className="pp-match-right"><span className="pp-num">$96,400</span><span className="pp-conf">on track</span></span></div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">3 of 14 cases shown</span>
                <span className="pp-ok">14 reminders sent today · 0 waiting on you</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">this morning</div>
              <div className="pp-float-v">14 reminders sent <span className="pp-ok">0 waiting on you</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It owns the follow-up</div>
              <h2 className="pp-h">Every overdue invoice is a case.</h2>
              <p className="pp-sub">Not a line on an aging report you keep meaning to call. Aleq opens a case the day an invoice goes past due, tracks every touch and every promise, and works it until it&apos;s paid or you step in. You see what&apos;s been done and what&apos;s next — for each one.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Case · Stark Industries
                  <span className="pp-live" style={{ color: "var(--warning)" }}>13 days past due</span>
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">Stark Industries · $412,400</div>
                  <div className="pp-belief-meta">INV-7827 · 3 missed promises this year</div>
                  <div className="pp-why"><b>Next move</b><p>Escalate to their AP lead and apply the 1.5%/mo finance charge in your terms. Stark has paid late before — and only moves once it&apos;s escalated.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>✓ Approve next move</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It sounds like your team</div>
              <h2 className="pp-h">It reaches out in your voice.</h2>
              <p className="pp-sub">Email or a call, written the way your team actually talks — firm or friendly, your call. You set the tone and the limits once; Aleq sends on your standing orders, or holds for your yes on anything you flag. Nothing goes out in a voice you didn&apos;t approve.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head">
                  <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
                  Drafted · reminder to Globex
                  <span className="pp-live" style={{ color: "var(--fg-muted)" }}>your voice</span>
                </div>
                <div className="pp-belief">
                  <div className="pp-belief-rule">&quot;Hi Dana — following up on INV-7831&quot;</div>
                  <div className="pp-belief-meta">$148,200 · now 34 days past due</div>
                  <div className="pp-why"><b>Tone rules you set</b><p>Friendly first reminder, no finance charge before 45 days, never threaten to pause service. Sent on your standing orders.</p></div>
                  <span className="pp-act" role="button" tabIndex={0}>✓ Approve &amp; send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-point">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It listens, then records</div>
              <h2 className="pp-h">It captures the promise.</h2>
              <p className="pp-sub">When a customer says they&apos;ll pay Friday, Aleq writes it down — the amount, the date, who said it — and updates the ledger. If they dispute the invoice, it logs that instead and routes it to you. You always know where every dollar stands and why.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> Where each case stands</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Cyberdyne Systems<small>$96,400 · pays Friday — recorded, ledger updated</small></span><span className="pp-tag auto">Promise to pay</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Initech LLC<small>$58,900 · says a line item is wrong — sent to you</small></span><span className="pp-tag asks">Dispute</span></div>
                  <div className="pp-checkrow"><span className="pp-learned-rule">Stark Industries<small>$412,400 · 3rd reminder out, no reply yet</small></span><span className="pp-tag asks">Dunning</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-point flip">
            <div className="pp-point-copy">
              <div className="pp-eyebrow">It gets better the longer it runs</div>
              <h2 className="pp-h">It learns who pays only after a nudge.</h2>
              <p className="pp-sub">Some customers always pay on the first reminder. Some only move once you escalate. Aleq learns the difference per customer — chasing harder where it has to, staying light where it doesn&apos;t — and you can see every pattern and switch any of them off.</p>
            </div>
            <div className="pp-point-art reveal">
              <div className="pp-card">
                <div className="pp-card-head"><svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg> What Aleq has learned</div>
                <div className="pp-app-body" style={{ padding: "6px 18px 14px" }}>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Ramp pays on the first reminder<small>seen 9× · never needed more</small></span><span className="pp-learned-bar"><i style={{ width: "100%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Globex pays around day 35<small>seen 6×</small></span><span className="pp-learned-bar"><i style={{ width: "96%" }} /></span><span className="pp-tag auto">Runs alone</span></div>
                  <div className="pp-learned-row"><span className="pp-learned-rule">Stark pays only after escalation<small>seen 7×</small></span><span className="pp-learned-bar mid"><i style={{ width: "42%" }} /></span><span className="pp-tag asks">Asks first</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section alt">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>FAQ</div>
          <h2 className="pp-h">What finance leaders ask first.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Does it contact my customers without me?</summary><p>Only the way you tell it to. You set the tone and the limits up front — how firm, how often, what&apos;s off-limits. Aleq drafts each reminder, then sends it under your standing orders. Flag any customer, amount, or step and it holds for your approval first. You can pull the whole thing back to draft-only at any time.</p></details>
          <details><summary>What happens with a disputed invoice?</summary><p>It stops chasing and routes it to you. If a customer says a line is wrong or the work wasn&apos;t delivered, Aleq logs the dispute with what was said, pauses the reminders on that case, and hands it over. It never argues the merits of a dispute on your behalf.</p></details>
          <details><summary>Could it damage a customer relationship?</summary><p>The controls are built to prevent exactly that. You set tone rules and escalation thresholds per customer, and Aleq stays inside them — leaning on the accounts it&apos;s learned will always pay late, and going light on the ones who don&apos;t. A finance charge or a hard escalation only fires where your terms allow it, and you stay in control of every case.</p></details>
          <details><summary>How does this move DSO?</summary><p>By working every overdue invoice the day it ages, not just the ones someone got to. Consistent, on-time follow-up across the whole ledger is what brings days-sales-outstanding down — most teams simply can&apos;t staff it. Aleq can, so promises get made earlier and kept more often.</p></details>
          <details><summary>Where&apos;s the record of what was said?</summary><p>On the case. Every email, every call summary, every promise and dispute is timestamped and attached to the invoice, so you can see who said what and when — and it exports for your records. Nothing about a customer&apos;s account changes without a trail back to the reason.</p></details>
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Put Aleq on collections.</h2>
          <p>Set the tone and the limits, and watch Aleq work a real aging report — every reminder in your voice, every promise captured, every case yours to step into.</p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a working session</Link>
            <Link className="btn btn-lg" href="/work">See all the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
