import type { Metadata } from "next";
import Link from "next/link";
import HomeShowcase from "@/components/HomeShowcase";
import GaapEngine from "@/components/GaapEngine";
import TamiTrust from "@/components/TamiTrust";

export const metadata: Metadata = {
  title: "Aleq — the controller you can audit.",
  description:
    "Aleq closes the books, reconciles to the penny, and runs collections by voice, with every action gated, reversible, signed, and replayable for audit.",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="home-hero home-hero-film hero-video" aria-labelledby="home-hero-title">
        <video className="hero-bg" autoPlay muted loop playsInline poster="/brand/hero-still.png">
          <source src="/Kurt.mp4" type="video/mp4" />
        </video>
        <div className="hero-tint"></div>
        <div className="container hero-overlay">
          <div className="hero-copy">
            <h1 className="hero-h1" id="home-hero-title">
              <span className="hl">Closes the books.</span>
              <span className="hl hero-h1-em">Proves every move.</span>
            </h1>
            <p className="hero-sub">It runs reconciliation, the close, and collections on your real books — doing as much on its own as you allow, every move logged and reversible.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" href="/demo">Demo</Link>
              <Link className="btn btn-lg btn-hero-ghost" href="/demo">See a live close →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE / BENTO ─────────────────────────────── */}
      <section className="bento-sec">
        <div className="container">
          <div className="show-head">
            <span className="eyebrow">what it does</span>
            <h2 className="h2">It runs the books. You decide how much.</h2>
          </div>
          <div className="bento-modes mono" aria-label="autonomy mode">
            <button className="bm" data-mode="manual">Manual</button>
            <button className="bm" data-mode="assist">Assist</button>
            <button className="bm on" data-mode="auto">Autonomous</button>
          </div>

          <div className="bento2" data-mode="auto">
            <Link className="bx span-2x2 recon-tile" href="/work/reconciliation" data-feat="recon">
              <div className="bx-head"><div className="bx-t">Reconciles to the penny</div></div><div className="bx-sub">Every line matched to its source, overnight.</div>
              <div className="bx-viz"><div className="bxv recon-screen">
                <div className="scr-bar"><span className="scr-dot"></span><span className="scr-name" data-mode-copy="reconTitle">Bank reconciliation · May · JPMC ••4421</span><span className="scr-meta" data-mode-copy="reconMeta">412 transactions</span></div>
                <div className="scr-body recon-body">
                  <div className="recon-ledger">
                    <div className="led"><span className="led-acct">Statement balance</span><span className="led-n">$2,418,904.10</span></div>
                    <div className="led"><span className="led-acct">Book balance</span><span className="led-n" data-mode-copy="bookBalance">$2,418,904.10</span></div>
                    <div className="led"><span className="led-acct" data-mode-copy="matchLine">410 auto-matched · 2 to your judgment</span><span className="led-n" data-mode-copy="matchScore">98% avg</span></div>
                  </div>
                  <div className="recon-lines">
                    <div className="rline"><span className="rl-desc">ACH · Ramp Business</span><span className="rl-amt pos">+$88,400</span><span className="rl-ok"><span data-mode-copy="reconStat">matched</span> · 100%</span></div>
                    <div className="rline"><span className="rl-desc">Wire · Foxconn Mfg.</span><span className="rl-amt">−$188,440</span><span className="rl-ok"><span data-mode-copy="reconStat">matched</span> · 99%</span></div>
                    <div className="rline"><span className="rl-desc">Stripe transfer</span><span className="rl-amt pos">+$142,400</span><span className="rl-ok"><span data-mode-copy="reconStat">matched</span> · 96%</span></div>
                    <div className="rline"><span className="rl-desc">AWS · Marketplace</span><span className="rl-amt">−$88,440</span><span className="rl-ok"><span data-mode-copy="reconStat">matched</span> · 98%</span></div>
                    <div className="rline"><span className="rl-desc">Stripe transfer</span><span className="rl-amt pos">+$88,400</span><span className="rl-rev">held · possible dup</span></div>
                  </div>
                  <div className="led-bar recon-result"><span className="lbl" data-mode-copy="varianceLabel">difference</span><span className="var" data-mode-copy="variance">$0.00</span></div>
                </div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/work/collections" data-feat="coll">
              <div className="bx-head"><div className="bx-t">Collects by voice</div></div><div className="bx-sub">Aleq calls your customers and books the promise to pay.</div>
              <div className="bx-viz"><div className="bxv coll-screen">
                <div className="scr-bar"><span className="scr-dot"></span><span className="scr-name" data-mode-copy="collTitle">AR call · Haven Foods</span><span className="scr-meta" data-mode-copy="collMeta">04:18</span></div>
                <div className="scr-body coll-body">
                  <div className="call-q" data-mode-copy="collLine">&quot;Can you settle the $48k by Friday?&quot;</div>
                  <div className="coll-thread">
                    <div><span data-mode-copy="collStep1K">next move</span><b data-mode-copy="collStep1">Aleq places the call</b></div>
                    <div><span data-mode-copy="collStep2K">result</span><b data-mode-copy="collStep2">promise captured for Friday</b></div>
                  </div>
                  <div className="call-promise fx" style={{ "--i": 0 } as React.CSSProperties}><span className="cp-check">✓</span><span data-mode-copy="collResult">promise captured · ledger updated</span></div>
                </div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/control#beliefs">
              <div className="bx-head"><div className="bx-t">It earns the right to act.</div></div><div className="bx-sub">Autonomy earned per task, before it acts alone.</div>
              <div className="bx-viz"><div className="bxv bel-panel">
                <div className="bel-cap mono">earned autonomy · per task</div>
                <div className="learned-mini">
                  <div className="lm-row"><span className="lm-rule">Stripe payouts<small>412 confirmed</small></span><span className="lm-tag auto">runs alone</span></div>
                  <div className="lm-row"><span className="lm-rule">AWS bill<small>36 confirmed</small></span><span className="lm-tag auto">runs alone</span></div>
                  <div className="lm-row"><span className="lm-rule">Wires over $100k<small>high-value</small></span><span className="lm-tag asks">asks first</span></div>
                  <div className="lm-row"><span className="lm-rule">Period lock<small>controller judgment</small></span><span className="lm-tag manual">you only</span></div>
                </div>
              </div></div>
            </Link>

            <Link className="bx span-2" href="/work/close" data-feat="close">
              <div className="bx-head"><div className="bx-t">Closes continuously</div></div><div className="bx-sub">The month closes itself, a little every day.</div>
              <div className="bx-viz"><div className="bxv close-screen">
                <div className="close-head"><span data-mode-copy="closeClock">May close · 6:42 PM</span><b data-mode-copy="closeState">ready to seal</b></div>
                <div className="close-grid">
                  <div className="ck fx" style={{ "--i": 0 } as React.CSSProperties}><span className="ck-box on">✓</span><span data-mode-copy="close1">Subledgers tied out</span></div>
                  <div className="ck fx" style={{ "--i": 1 } as React.CSSProperties}><span className="ck-box on">✓</span><span data-mode-copy="close2">Accruals &amp; depreciation posted</span></div>
                  <div className="ck fx" style={{ "--i": 2 } as React.CSSProperties}><span className="ck-box on">✓</span><span data-mode-copy="close3">Material wire held for approval</span></div>
                  <div className="ck fx" style={{ "--i": 3 } as React.CSSProperties}><span className="ck-box on">✓</span><span data-mode-copy="close4">Controller sign-off ready</span></div>
                </div>
                <div className="close-proof"><span data-mode-copy="closeProofK">proof packet</span><b data-mode-copy="closeProof">38 entries drafted, one judgment call isolated.</b></div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/work/ap" data-feat="ap">
              <div className="bx-head"><div className="bx-t">Matches and pays bills</div></div><div className="bx-sub">Matched and queued for your one-tap approval.</div>
              <div className="bx-viz"><div className="bxv ap-screen">
                <div className="scr-bar"><span className="scr-dot"></span><span className="scr-name">AP queue · May</span><span className="scr-meta">14 bills</span></div>
                <div className="scr-body ap-body">
                  <div className="match fx" style={{ "--i": 0 } as React.CSSProperties}><span className="m-id" data-mode-copy="apLine1">PO-7731</span><span className="m-arr">↔</span><span data-mode-copy="apLine2">GR ↔ Bill</span><span className="pill-matched" data-mode-copy="apPill">3/3</span></div>
                  <div className="match fx" style={{ "--i": 1 } as React.CSSProperties}><span className="m-id" data-mode-copy="apLine3">$188k wire</span><span className="m-arr">·</span><span data-mode-copy="apLine4">over limit</span><span className="pill-matched pill-warn" data-mode-copy="apPill2">approval</span></div>
                </div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/work/multi-entity" data-feat="multi">
              <div className="bx-head"><div className="bx-t">Consolidates every entity</div></div><div className="bx-sub">Translated, eliminated, and rolled up.</div>
              <div className="bx-viz"><div className="bxv multi-screen">
                <div className="scr-bar"><span className="scr-dot"></span><span className="scr-name">Consolidation · May</span><span className="scr-meta">5 entities</span></div>
                <div className="scr-body multi-body">
                  <div className="bt-entities">
                    <span className="ent fx" style={{ "--i": 0 } as React.CSSProperties}>US</span><span className="ent fx" style={{ "--i": 1 } as React.CSSProperties}>MX</span><span className="ent fx" style={{ "--i": 2 } as React.CSSProperties}>UK</span><span className="ent fx" style={{ "--i": 3 } as React.CSSProperties}>DE</span><span className="ent fx" style={{ "--i": 4 } as React.CSSProperties}>SG</span>
                  </div>
                  <div className="led-bar multi-result"><span className="lbl">intercompany</span><span className="var" data-mode-copy="multiState">eliminated</span></div>
                </div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/control#audit" data-feat="guard">
              <div className="bx-head"><div className="bx-t">It can&apos;t break your books.</div></div><div className="bx-sub">Balanced, reversible, and gated — by construction.</div>
              <div className="bx-viz"><div className="bxv guard-screen">
                <div className="scr-bar"><span className="scr-dot"></span><span className="scr-name">Guardrails</span><span className="scr-meta">every post</span></div>
                <div className="scr-body guard-body">
                  <div className="gate"><span className="pill pill-ok" data-mode-copy="guardPill">posted</span><span data-mode-copy="guard1">Routine payment — sent</span></div>
                  <div className="gate"><span className="gate-ico">=</span><span data-mode-copy="guard2">Double-entry — balanced</span></div>
                  <div className="gate"><span className="gate-ico">↺</span><span data-mode-copy="guard3">Posted — reversible</span></div>
                </div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/connectors" data-feat="cxn">
              <div className="bx-head"><div className="bx-t">Syncs your whole stack</div></div><div className="bx-sub">Plugs into the tools you already run on.</div>
              <div className="bx-viz"><div className="bxv cxn-screen">
                <div className="scr-bar"><span className="scr-dot"></span><span className="scr-name">Integrations</span><span className="scr-meta">12,000+ via Plaid</span></div>
                <div className="scr-body cxn-body">
                  <div className="cxn-chips">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="cxn-chip"><img src="/tech-logos/Quickbooks.png" alt="" width={64} height={64} /><span>QuickBooks</span></span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="cxn-chip"><img src="/tech-logos/Stripe.png" alt="" width={64} height={64} /><span>Stripe</span></span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="cxn-chip"><img src="/tech-logos/brex.png" alt="" width={64} height={64} /><span>Brex</span></span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="cxn-chip"><img src="/tech-logos/ramp.png" alt="" width={64} height={64} /><span>Ramp</span></span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="cxn-chip"><img src="/tech-logos/Gusto.png" alt="" width={64} height={64} /><span>Gusto</span></span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="cxn-chip"><img src="/tech-logos/mercury-bank.png" alt="" width={64} height={64} /><span>Mercury</span></span>
                  </div>
                </div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>
          </div>
          <p className="bento-note mono">Switch the mode — the same work either drafts for you, waits for your approval, or posts itself.</p>
        </div>
      </section>

      {/* ── THE LEDGER ───────────────────────────────────── */}
      <section className="ledger-sec">
        <div className="container">
          <div className="show-head">
            <span className="eyebrow">the system of record</span>
            <h2 className="h2">The whole ledger. Not a piece of it.</h2>
            <p className="lg-lead">Aleq isn&apos;t a layer on top of your books — it is your books. General ledger, financial statements, every account and subledger, in one system that stays balanced by construction.</p>
          </div>

          <div className="lg-grid reveal">
            <Link className="lg-tile" href="/work/general-ledger">
              <div className="lg-head"><h3>General ledger</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Every entry balanced and traceable to its source.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>JE-2041 · Revenue recognition<span className="lg-pill ok">balanced</span></div>
                  <table className="lg-tbl"><tbody>
                    <tr><td>Cash</td><td className="dr">142,400</td><td></td></tr>
                    <tr><td>Deferred revenue</td><td></td><td className="cr">104,200</td></tr>
                    <tr><td>Recognized revenue</td><td></td><td className="cr">38,200</td></tr>
                  </tbody></table>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/general-ledger">
              <div className="lg-head"><h3>Financial statements</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">P&amp;L, balance sheet, and cash flow — always current.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>Income statement · May</div>
                  <div className="lg-row"><span>Revenue</span><span className="lg-amt">$2,418,904</span></div>
                  <div className="lg-row"><span>Gross profit</span><span className="lg-amt">$1,886,745</span></div>
                  <div className="lg-row lg-foot"><span>Net income</span><span className="lg-amt ok">$312,400</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/general-ledger">
              <div className="lg-head"><h3>Trial balance</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Debits equal credits — checked on every post.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>Trial balance · May<span className="lg-pill ok">in balance</span></div>
                  <div className="lg-row"><span>Total debits</span><span className="lg-amt">$8,412,900</span></div>
                  <div className="lg-row"><span>Total credits</span><span className="lg-amt">$8,412,900</span></div>
                  <div className="lg-row lg-foot"><span>difference</span><span className="lg-amt ok">$0.00</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/collections">
              <div className="lg-head"><h3>Receivables</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Every open invoice, aged and tied to the ledger.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>A/R aging · $424,800 open</div>
                  <div className="lg-bar"><i className="s1" style={{ width: "74%" }}></i><i className="s2" style={{ width: "20%" }}></i><i className="s3" style={{ width: "6%" }}></i></div>
                  <div className="lg-row"><span>0–30 days</span><span className="lg-amt">$312,400</span></div>
                  <div className="lg-row"><span>61+ days</span><span className="lg-amt">$24,100</span><span className="lg-tag warn">in collections</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/general-ledger">
              <div className="lg-head"><h3>Chart of accounts</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Your full COA and dimensions — structured, not flat.</p>
              <div className="lg-viz">
                <div className="lg-srf lg-coa">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>Chart of accounts · 142 accounts</div>
                  <div className="lg-row head"><span>1 · Assets</span></div>
                  <div className="lg-row sub"><span>1000 · Cash &amp; equivalents</span></div>
                  <div className="lg-row sub"><span>1100 · Accounts receivable</span></div>
                  <div className="lg-row head"><span>4 · Revenue</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/control">
              <div className="lg-head"><h3>Audit trail</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Every action signed, reversible, and replayable.</p>
              <div className="lg-viz">
                <div className="lg-srf lg-log">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>Audit trail · tamper-evident</div>
                  <div className="lg-row"><span>JE-2041 posted</span><span className="lg-tag ok">signed</span></div>
                  <div className="lg-row"><span>INV-7829 applied</span><span className="lg-tag ok">signed</span></div>
                  <div className="lg-row lg-foot"><span>May · period sealed</span><span className="lg-tag ok">✓</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/general-ledger">
              <div className="lg-head"><h3>Fixed assets</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Capitalized, depreciated, and tracked to net book value.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>Fixed assets · 142 assets</div>
                  <div className="lg-row"><span>Monthly depreciation</span><span className="lg-amt">$14,200</span></div>
                  <div className="lg-row lg-foot"><span>Net book value</span><span className="lg-amt">$486,300</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/general-ledger">
              <div className="lg-head"><h3>Cash flow</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Operating, investing, financing — reconciled to cash.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>Cash flow · May</div>
                  <div className="lg-row"><span>Operating</span><span className="lg-amt pos">+$402,180</span></div>
                  <div className="lg-row"><span>Investing</span><span className="lg-amt">−$88,000</span></div>
                  <div className="lg-row lg-foot"><span>Net change in cash</span><span className="lg-amt ok">+$314,180</span></div>
                </div>
              </div>
            </Link>

            <Link className="lg-tile" href="/work/multi-entity">
              <div className="lg-head"><h3>Multi-currency</h3><span className="lg-arrow">→</span></div>
              <p className="lg-sub">Every currency revalued and translated at close.</p>
              <div className="lg-viz">
                <div className="lg-srf">
                  <div className="lg-srf-bar"><span className="lg-dot"></span>FX revaluation · May<span className="lg-pill ok">revalued</span></div>
                  <div className="lg-row"><span>MXN → USD</span><span className="lg-amt">0.0578</span></div>
                  <div className="lg-row lg-foot"><span>Unrealized FX gain</span><span className="lg-amt ok">$4,200</span></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GAAP / STANDARDS ─────────────────────────────── */}
      <section className="engine-sec">
        <div className="container">
          <div className="intelligence-panel reveal">
            <div className="intelligence-copy">
              <span className="eyebrow">standards engine</span>
              <h2 className="h2">It does the technical accounting. You sign off.</h2>
              <p className="lead">Aleq reads the contract, makes the call against the codification, and drafts the entry with its reasoning — held for your sign-off, reversible, auditor-ready.</p>
              <div className="intel-points">
                <div><b>Applies the standard</b><span>It reads the source and makes the call against the codification — 606 through 815.</span></div>
                <div><b>Shows its work</b><span>Every judgment cited and reasoned. Not a black box your auditor has to take on faith.</span></div>
                <div><b>You sign off</b><span>Nothing material posts until you approve it — and every entry is signed and reversible.</span></div>
              </div>
            </div>
            <div className="intelligence-art">
              <GaapEngine />
            </div>
          </div>
          <div className="ge-chips reveal">
            <Link href="/standards/asc606"><b>606</b> Revenue<span className="ge-arr">→</span></Link>
            <Link href="/standards/asc842"><b>842</b> Leases<span className="ge-arr">→</span></Link>
            <Link href="/standards/asc718"><b>718</b> Stock comp<span className="ge-arr">→</span></Link>
            <Link href="/standards/asc740"><b>740</b> Income tax<span className="ge-arr">→</span></Link>
            <Link href="/standards/asc340"><b>340</b> Commissions<span className="ge-arr">→</span></Link>
            <Link href="/standards/asc350"><b>350</b> Software<span className="ge-arr">→</span></Link>
            <Link href="/standards/asc815"><b>815</b> Hedging<span className="ge-arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE · TAMi ──────────────────────────── */}
      <section className="dsection alt intelligence-sec" id="intelligence">
        <div className="container">
          <div className="intelligence-panel reveal">
            <div className="intelligence-copy">
              <span className="eyebrow">TAMi · The Aleq Mind</span>
              <h2 className="h2">It earns the right to run your books.</h2>
              <p className="lead">Aleq learns from how every call turns out. Once it&apos;s been right enough times, you let it run that task on its own — until then, it asks you first. You decide where the line sits.</p>
              <div className="intel-points">
                <div><b>Runs on its own</b><span>Once a task has a strong track record, Aleq just does it — no babysitting.</span></div>
                <div><b>Asks you first</b><span>Anything new, unproven, or high-stakes waits for your approval.</span></div>
                <div><b>Always reversible</b><span>Every action is logged with the reason attached, and can be reversed with a standard reversing entry.</span></div>
              </div>
              <Link className="btn btn-lg" href="/control#beliefs">See how TAMi works →</Link>
            </div>
            <div className="intelligence-art">
              <TamiTrust />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="ind-sec">
        <div className="container">
          <div className="show-head">
            <span className="eyebrow">who it&apos;s for</span>
            <h2 className="h2">It already knows your accounting.</h2>
            <p className="lg-lead">Aleq doesn&apos;t learn your model from a settings screen — the standards, subledgers, and metrics your business lives on are how it keeps the books.</p>
          </div>
          <div className="indx-grid reveal">
            <Link className="indx" href="/industries/saas">
              <div className="indx-head"><h3>SaaS &amp; subscription</h3><span className="indx-arrow" aria-hidden="true">→</span></div>
              <p>Recognizes revenue as you bill — ratable, usage, and milestone — with deferred-revenue schedules that roll forward on their own.</p>
              <div className="indx-foot"><span className="indx-std mono">ASC 606</span><span className="indx-proof">MRR · ARR · deferred revenue, drillable</span></div>
            </Link>
            <Link className="indx" href="/industries/hardware">
              <div className="indx-head"><h3>Hardware &amp; physical goods</h3><span className="indx-arrow" aria-hidden="true">→</span></div>
              <p>Books revenue at the shipment, lands freight and duty into cost, and ties on-hand inventory back to the entry.</p>
              <div className="indx-foot"><span className="indx-std mono">ASC 606 · 330</span><span className="indx-proof">COGS · landed cost · gross margin</span></div>
            </Link>
            <Link className="indx" href="/industries/marketplaces">
              <div className="indx-head"><h3>Marketplaces</h3><span className="indx-arrow" aria-hidden="true">→</span></div>
              <p>Reconciles every processor payout, fee, and split to the cent — and books revenue gross or net to the policy you set.</p>
              <div className="indx-foot"><span className="indx-std mono">ASC 606</span><span className="indx-proof">payouts · fees · take-rate</span></div>
            </Link>
            <Link className="indx" href="/industries/healthcare">
              <div className="indx-head"><h3>Healthcare &amp; RCM</h3><span className="indx-arrow" aria-hidden="true">→</span></div>
              <p>Ties remittances and payer deposits back to the ledger and keeps the revenue cycle reconciled as cash lands.</p>
              <div className="indx-foot"><span className="indx-std mono">revenue cycle</span><span className="indx-proof">remittances · deposits · AR aging</span></div>
            </Link>
            <Link className="indx" href="/industries/manufacturing">
              <div className="indx-head"><h3>Manufacturing</h3><span className="indx-arrow" aria-hidden="true">→</span></div>
              <p>Carries WIP, applies standard costs, and posts purchase-price and usage variances as production runs.</p>
              <div className="indx-foot"><span className="indx-std mono">ASC 330</span><span className="indx-proof">WIP · standard cost · variances</span></div>
            </Link>
            <Link className="indx" href="/industries/proservices">
              <div className="indx-head"><h3>Professional services</h3><span className="indx-arrow" aria-hidden="true">→</span></div>
              <p>Recognizes project revenue over time, carries unbilled WIP, and ties utilization to the close — by engagement.</p>
              <div className="indx-foot"><span className="indx-std mono">ASC 606</span><span className="indx-proof">over-time revenue · unbilled WIP</span></div>
            </Link>
          </div>
          <div className="ind-cta"><span>Don&apos;t see yours? We&apos;ll model it on your real books.</span><Link className="btn btn-lg" href="/demo">Book a live close →</Link></div>
        </div>
      </section>

      {/* ── OFFER ────────────────────────────────────────── */}
      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an unsigned period.</h2>
          <p className="lead">We close last month on your real books, live. You leave with a signed number — not a sales deck.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/demo">Book a live close</Link>
            <Link className="btn btn-lg" href="/work">See the platform</Link>
          </div>
          <p className="ribbon-fine mono">Live in 48 hours · read-only to start · nothing posts without you</p>
        </div>
      </section>

      <HomeShowcase />
    </>
  );
}
