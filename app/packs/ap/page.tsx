import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AP & 3-way match — scenario pack",
  description:
    "The AP pack: bill extraction, 3-way match, approval routing, payment runs, early-pay discount capture, and W-9 controls — run continuously, eval-gated at 0.95.",
};

export default function Page() {
  return (
    <>
      <section className="pk-hero">
        <div className="container pk-hero-inner">
          <div className="pk-hero-copy">
            <span className="pk-dom">ap pack</span>
            <h1 className="h1">It extracts, matches three ways, and routes the approval — then pays on time.</h1>
            <p className="lead">Aleq reads the bill, runs the PO-to-receipt-to-bill match, posts the clean ones, and routes the rest to the right approver by your thresholds. It captures the early-pay discounts that are worth taking, blocks the vendors missing a W-9, and never wires above limit without the human sign-offs.</p>
            <div className="dp-hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Run AP on your real bills with us</Link>
              <Link className="btn btn-lg" href="/work/ap">See it in detail →</Link>
            </div>
          </div>
          <div className="pk-score reveal">
            <div className="pks-v">0.95</div>
            <div className="pks-l">eval score · grade A</div>
            <div className="pks-gate">10 scenarios · 6 capabilities<br />gate ≥ 0.90 · pass</div>
          </div>
        </div>
      </section>

      <section className="dsection" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="kbar reveal">
            <div className="kc"><div className="kc-v">412</div><div className="kc-l">Bills auto-posted YTD</div></div>
            <div className="kc"><div className="kc-v">11.4<span className="u">days</span></div><div className="kc-l">Average days to pay</div></div>
            <div className="kc"><div className="kc-v">$3,768</div><div className="kc-l">Early-pay discount captured</div></div>
            <div className="kc"><div className="kc-v">10</div><div className="kc-l">Scenarios in this pack</div></div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead"><span className="eyebrow">period 2026-04 · AP queue</span><h2 className="h2">Three-way match, then the payment run.</h2><p className="lead">Each bill carries the match result, the terms, and how it cleared. Clean 3/3 matches auto-post; discounts get taken when the math works; anything missing a control is blocked before it can pay.</p></div>
          <div className="surface reveal">
            <div className="surface-bar"><span className="surface-dot"></span><span className="fp-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span><span className="surface-title">AP queue · 3-way match</span><span className="surface-meta">3 ready · 1 blocked</span></div>
            <div className="surface-body">
              <table className="ptable">
                <thead><tr><th>Bill</th><th>Match</th><th className="num">Amount</th><th>How</th></tr></thead>
                <tbody>
                  <tr><td>PO-2025-0411 ↔ GR ↔ Bill</td><td className="acct">3/3 matched</td><td className="num">$54,200</td><td><span className="pill pill-ok">auto</span></td></tr>
                  <tr><td>AWS · B-3041</td><td className="mono">ap.three_way_match</td><td className="num">$88,440</td><td><span className="pill pill-ok">auto-posted</span></td></tr>
                  <tr><td>Foxconn · B-3051 (2/10 net 60)</td><td className="acct">−$3,768 discount</td><td className="num">$188,440</td><td><span className="pill pill-info">wire</span></td></tr>
                  <tr className="hot"><td>Mark Zhao</td><td className="acct">missing W-9</td><td className="num">$12,500</td><td><span className="pill pill-bad">blocked</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="surface-foot"><span className="seal-dot"></span> 2 auto · 1 wire drafted · 1 blocked · every posting ed25519 signed</div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <div className="f-eyebrow">it routes by your thresholds</div>
              <div className="f-h">Under $5k auto-posts. A $188k wire walks the full approval chain.</div>
              <p className="f-p">Aleq applies your approval matrix on every bill: under $5k posts on its own, over $5k routes to the controller under P-AMT-5K, and any wire over $100k needs both the controller and the CEO. The Foxconn wire is mid-chain right now — Forrest H approved, Hannah K approved, CEO pending — and it won&apos;t move a dollar until that last signature lands.</p>
            </div>
            <div className="feature-art">
              <div className="surface">
                <div className="surface-bar"><span className="surface-dot"></span><span className="surface-title">Approval chain · B-3051 wire</span></div>
                <div className="surface-body">
                  <table className="ptable"><tbody>
                    <tr><td>Under $5k</td><td className="acct">auto-post</td><td><span className="pill pill-ok">auto</span></td></tr>
                    <tr><td>Over $5k · controller</td><td className="acct">P-AMT-5K</td><td><span className="pill pill-info">routed</span></td></tr>
                    <tr><td>Forrest H</td><td className="acct">controller</td><td><span className="pill pill-ok">approved</span></td></tr>
                    <tr><td>Hannah K</td><td className="acct">controller</td><td><span className="pill pill-ok">approved</span></td></tr>
                    <tr className="hot"><td>CEO · wire &gt; $100k</td><td className="acct">$188,440</td><td><span className="pill pill-warn">pending</span></td></tr>
                  </tbody></table>
                </div>
                <div className="surface-foot"><span className="seal-dot" style={{ background: "var(--warning)", boxShadow: "0 0 0 3px color-mix(in oklch,var(--warning) 18%,transparent)" }}></span> WIRE HELD · waiting on CEO signature</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dsection">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">in this pack</span><h2 className="h2">Six capabilities, ten scenarios.</h2></div>
          <div className="capgrid reveal">
            <div className="cap"><div className="cap-k">ap.extract_bill</div><div className="cap-h">Bill extraction</div><div className="cap-p">Line items, terms, and vendor read straight off the bill.</div></div>
            <div className="cap"><div className="cap-k">ap.three_way_match</div><div className="cap-h">3-way match</div><div className="cap-p">PO to goods-receipt to bill, with clean matches auto-posted.</div></div>
            <div className="cap"><div className="cap-k">ap.approval_routing</div><div className="cap-h">Approval routing</div><div className="cap-p">Dollar-threshold routing to the right approver, signed per step.</div></div>
            <div className="cap"><div className="cap-k">ap.payment_run</div><div className="cap-h">Payment runs</div><div className="cap-p">Scheduled runs that pay on time without paying early for nothing.</div></div>
            <div className="cap"><div className="cap-k">ap.early_pay_capture</div><div className="cap-h">Early-pay capture</div><div className="cap-p">2/10 net 60 and similar discounts taken when the math works.</div></div>
            <div className="cap"><div className="cap-k">ap.vendor_w9</div><div className="cap-h">W-9 controls</div><div className="cap-p">Vendors missing a W-9 blocked before a payment can go out.</div></div>
          </div>
        </div>
      </section>

      <section className="dsection alt">
        <div className="container">
          <div className="dhead center"><span className="eyebrow">vs the alternatives</span><h2 className="h2">Accounts payable — Aleq does the work.</h2></div>
          <div className="vs-cols reveal">
            <article className="vs-col is-aleq">
              <div className="vco-top"><h3>Aleq</h3><span className="vco-cat">governed controller</span></div>
              <div className="vco-sub">Reads, matches, routes, prepares.</div>
              <ul><li>Extracts and codes every bill to the GL</li><li>Three-way matches PO · GR · Bill before approval</li><li>Routes the right approver by policy</li><li>Prepares the payment and routes it for execution</li></ul>
            </article>
            <article className="vs-col them">
              <div className="vco-top"><h3>Bill.com</h3><span className="vco-cat">AP automation</span></div>
              <div className="vco-sub">Pays the bills you enter.</div>
              <ul><li>You code the bill and confirm the match</li><li>Approval routing, but no autonomous matching</li><li>No GL-level posting or signed action trail</li><li>Catches little before a dollar moves</li></ul>
            </article>
          </div>
          <div className="matrix-wrap reveal" style={{ marginTop: "34px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
            <table className="matrix" style={{ minWidth: "520px" }}>
              <thead><tr><th></th><th className="m-aleq"><span className="m-brand">Aleq</span></th><th><span className="m-brand">Bill.com</span></th></tr></thead>
              <tbody><tr><th>Extracts &amp; codes the bill</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">partial</span></td></tr><tr><th>Three-way match</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="part">partial</span></td></tr><tr><th>Routes the approval</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr><tr><th>Prepares &amp; routes payment</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="yes">✓</span></td></tr><tr><th>Signed GL posting</th><td className="m-aleq"><span className="yes">✓</span></td><td><span className="no">—</span></td></tr></tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring your bill stack.</h2>
          <p className="lead">We&apos;ll connect read-only, run the 3-way match on your real bills, route the approvals by your thresholds, and show you the discounts left on the table — with the full signed trail — on the call.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book Demo</Link>
            <Link className="btn btn-lg" href="/packs">All scenario packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
