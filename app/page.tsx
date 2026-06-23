import type { Metadata } from "next";
import Link from "next/link";
import HomeShowcase from "@/components/HomeShowcase";

export const metadata: Metadata = {
  title: "Aleq — the autonomous controller you can audit.",
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
            <div className="hero-eyebrow"><span className="he-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span> The autonomous controller you can audit</div>
            <h1 className="hero-h1" id="home-hero-title">
              <span className="hl">Closes the books while you sleep.</span>
              <span className="hl hero-h1-em">Proves every move by morning.</span>
            </h1>
            <p className="hero-sub">It runs reconciliation, the close, and collections on your real books — and every move it makes is signed and reversible.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">Book a demo</Link>
              <Link className="btn btn-lg btn-hero-ghost" href="/company/contact">See a live close →</Link>
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
              <div className="bx-head"><div className="bx-t">Reconciliation</div></div><div className="bx-sub">Every line matched to its source — overnight, to the penny.</div>
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
              <div className="bx-head"><div className="bx-t">Collections by voice</div></div><div className="bx-sub">Aleq calls your customers and books the promise to pay.</div>
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

            <Link className="bx" href="/control">
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
              <div className="bx-head"><div className="bx-t">Continuous close</div></div><div className="bx-sub">The month closes itself, a little every day.</div>
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
              <div className="bx-head"><div className="bx-t">Accounts payable</div></div><div className="bx-sub">Bills matched and queued for your one-tap approval.</div>
              <div className="bx-viz"><div className="bxv" style={{ padding: "12px 14px" }}>
                <div className="match fx" style={{ "--i": 0 } as React.CSSProperties}><span className="m-id" data-mode-copy="apLine1">PO-7731</span><span className="m-arr">↔</span><span data-mode-copy="apLine2">GR ↔ Bill</span><span className="pill-matched" data-mode-copy="apPill">3/3</span></div>
                <div className="match fx" style={{ "--i": 1 } as React.CSSProperties}><span className="m-id" data-mode-copy="apLine3">$188k wire</span><span className="m-arr">·</span><span data-mode-copy="apLine4">over limit</span><span className="pill-matched" data-mode-copy="apPill2" style={{ marginLeft: "auto", color: "var(--warning)", background: "color-mix(in oklch,var(--warning) 12%,transparent)", borderColor: "color-mix(in oklch,var(--warning) 35%,transparent)" }}>approval</span></div>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/work/multi-entity" data-feat="multi">
              <div className="bx-head"><div className="bx-t">Multi-entity</div></div><div className="bx-sub">Every entity translated, eliminated, consolidated.</div>
              <div className="bx-viz"><div className="bxv bt-entities">
                <span className="ent fx" style={{ "--i": 0 } as React.CSSProperties}>US</span><span className="ent fx" style={{ "--i": 1 } as React.CSSProperties}>MX</span><span className="ent fx" style={{ "--i": 2 } as React.CSSProperties}>UK</span><span className="ent fx" style={{ "--i": 3 } as React.CSSProperties}>DE</span><span className="ent fx" style={{ "--i": 4 } as React.CSSProperties}>SG</span>
                <span className="ent-elim fx" style={{ "--i": 5 } as React.CSSProperties}><span className="cp-check">✓</span><span data-mode-copy="multiState">eliminated</span></span>
              </div></div>
              <div className="bx-foot" data-foot></div>
            </Link>

            <Link className="bx" href="/control">
              <div className="bx-head"><div className="bx-t">It can&apos;t break your books.</div></div><div className="bx-sub">Balanced, reversible, and gated — by construction.</div>
              <div className="bx-viz"><div className="bxv" style={{ padding: "18px 16px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "center" }}>
                <div className="gate" style={{ fontSize: "12.5px", padding: "6px 0", display: "flex", alignItems: "center", gap: "9px" }}><span className="pill pill-ok" data-mode-copy="guardPill">posted</span><span data-mode-copy="guard1">Routine payment — sent</span></div>
                <div className="gate" style={{ fontSize: "12.5px", padding: "6px 0", display: "flex", alignItems: "center", gap: "9px" }}><span className="gate-ico" style={{ color: "var(--positive)" }}>=</span><span data-mode-copy="guard2">Double-entry — balanced</span></div>
                <div className="gate" style={{ fontSize: "12.5px", padding: "6px 0", display: "flex", alignItems: "center", gap: "9px" }}><span className="gate-ico" style={{ color: "var(--positive)" }}>↺</span><span data-mode-copy="guard3">Posted — reversible</span></div>
              </div></div>
            </Link>

            <Link className="bx" href="/control">
              <div className="bx-head"><div className="bx-t">Your stack, connected.</div></div><div className="bx-sub">Syncs with the tools you already run on.</div>
              <div className="bx-viz"><div className="bxv" style={{ padding: "9px 14px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="cxn" style={{ borderBottom: "1px solid var(--border-2)" }}><img src="/tech-logos/Quickbooks.png" alt="" width={2500} height={2500} />QuickBooks<span className="cxn-ok">synced</span></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="cxn" style={{ borderBottom: "1px solid var(--border-2)" }}><img src="/tech-logos/brex.png" alt="" width={400} height={400} />Brex<span className="cxn-ok">synced</span></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="cxn" style={{ borderBottom: 0 }}><img src="/tech-logos/Gusto.png" alt="" width={160} height={160} />Gusto<span className="cxn-ok">synced</span></div>
              </div></div>
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
          <div className="engine-split">
            <div className="engine-copy">
              <span className="eyebrow">standards engine</span>
              <h2 className="h2">The GAAP writes itself.</h2>
              <p className="lead">Model the contract once. Aleq derives the journal entries on schedule — and re-derives them when the deal changes.</p>
              <div className="asc-links">
                <Link href="/standards/asc606">ASC 606 · Revenue</Link>
                <Link href="/standards/asc842">ASC 842 · Leases</Link>
                <Link href="/standards/asc718">ASC 718 · Stock comp</Link>
                <Link href="/standards/asc740">ASC 740 · Income taxes</Link>
                <Link href="/standards/asc340">ASC 340 · Commissions</Link>
                <Link href="/standards/asc350">ASC 350 · Intangibles</Link>
                <Link href="/standards/asc815">ASC 815 · Hedging</Link>
              </div>
            </div>
            <div className="std-stack reveal">
              <div className="std-ghost std-ghost-2"><span className="std-tag">ASC 718 · Stock comp</span></div>
              <div className="std-ghost std-ghost-1"><span className="std-tag">ASC 606 · Revenue</span></div>
              <div className="engine-art std-front">
                <div className="eng-head"><span className="eng-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span>ASC 842 · Lease schedule · 201 Spear St<span className="eng-tag">derived</span></div>
                <table className="eng-sched">
                  <thead><tr><th>Period</th><th>Interest</th><th>Principal</th><th>Liability</th></tr></thead>
                  <tbody>
                    <tr className="on"><td>May 2026</td><td>$10,455</td><td>$28,045</td><td>$1,764,355</td></tr>
                    <tr><td>Jun 2026</td><td>$10,292</td><td>$28,208</td><td>$1,736,147</td></tr>
                    <tr><td>Jul 2026</td><td>$10,128</td><td>$28,372</td><td>$1,707,775</td></tr>
                    <tr><td>Aug 2026</td><td>$9,962</td><td>$28,538</td><td>$1,679,237</td></tr>
                    <tr><td>Sep 2026</td><td>$9,795</td><td>$28,705</td><td>$1,650,532</td></tr>
                    <tr><td>Oct 2026</td><td>$9,627</td><td>$28,873</td><td>$1,621,659</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE · TAMi ──────────────────────────── */}
      <section className="dsection alt intelligence-sec" id="intelligence">
        <div className="container">
          <div className="intelligence-panel reveal">
            <div className="intelligence-copy">
              <span className="eyebrow">the mind behind aleq · TAMi</span>
              <h2 className="h2">Belief, action, outcome — on a loop.</h2>
              <p className="lead">TAMi forms a belief for every call, acts on it inside your policy, checks the result against the source, and folds that outcome back in. That loop is how Aleq learns your books — and earns the right to run them.</p>
              <div className="intel-points">
                <div><b>Belief graph</b><span>Every call is a belief, built from your team&apos;s own approvals and weighted by outcomes.</span></div>
                <div><b>Earned autonomy</b><span>Autonomy unlocks per task — only once the belief is strong enough to run.</span></div>
                <div><b>Signed &amp; replayable</b><span>Every action leaves a receipt your auditor can replay.</span></div>
              </div>
              <Link className="btn btn-lg" href="/tami">See how TAMi works →</Link>
            </div>
            <div className="intelligence-art">
              <div className="loop2 reveal">
                <div className="l2-grid">
                  <div className="l2-node" style={{ gridArea: "n1" }}>
                    <div className="l2-k">01 · observe</div>
                    <div className="l2-h">A payout lands</div>
                    <div className="l2-d">$46,443 · net of fees · 2-day batch</div>
                  </div>
                  <div className="l2-arr" style={{ gridArea: "a1" }}>→</div>
                  <div className="l2-node" style={{ gridArea: "n2" }}>
                    <div className="l2-k">02 · belief</div>
                    <div className="l2-h">Matched to a belief</div>
                    <div className="l2-d">Stripe → clearing · strength 0.98</div>
                  </div>
                  <div className="l2-arr" style={{ gridArea: "a4" }}>↑</div>
                  <div className="l2-hub" style={{ gridArea: "hub" }}>
                    <span className="l2-mark"><svg viewBox="0 0 48 48"><use href="#aleq-mark" /></svg></span>
                    <b>TAMi</b>
                    <span>learns</span>
                  </div>
                  <div className="l2-arr" style={{ gridArea: "a2" }}>↓</div>
                  <div className="l2-node" style={{ gridArea: "n4" }}>
                    <div className="l2-k">04 · outcome</div>
                    <div className="l2-h">Tied out &amp; signed</div>
                    <div className="l2-d">$0.00 variance · reversible</div>
                  </div>
                  <div className="l2-arr" style={{ gridArea: "a3" }}>←</div>
                  <div className="l2-node" style={{ gridArea: "n3" }}>
                    <div className="l2-k">03 · act</div>
                    <div className="l2-h">Acts inside policy</div>
                    <div className="l2-d">JE posted · 247 payments tied</div>
                  </div>
                </div>
                <div className="l2-foot"><span className="seal-dot"></span> Every confirmed outcome strengthens the belief — the next one runs itself.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="ind-sec">
        <div className="container">
          <div className="show-head">
            <span className="eyebrow">who it&apos;s for</span>
            <h2 className="h2">Built for how your business actually runs.</h2>
            <p className="lg-lead">Aleq speaks your industry&apos;s accounting — the standards, the subledgers, and the metrics your model lives on.</p>
          </div>
          <div className="ind-grid reveal">
            <div className="ind-card"><h3>SaaS &amp; subscription</h3><p>ASC 606 revenue, MRR/ARR, and deferred schedules — recognized as you bill.</p></div>
            <div className="ind-card"><h3>Hardware &amp; physical goods</h3><p>Inventory, COGS, and landed cost tied to every shipment.</p></div>
            <div className="ind-card"><h3>Marketplaces</h3><p>High-volume payouts, fees, and splits reconciled to the cent.</p></div>
            <div className="ind-card"><h3>Healthcare &amp; RCM</h3><p>Claims, remittances, and the revenue cycle tied to the ledger.</p></div>
            <div className="ind-card"><h3>Manufacturing</h3><p>WIP, standard costing, and variances posted automatically.</p></div>
            <div className="ind-card"><h3>Professional services</h3><p>Project revenue, utilization, and unbilled WIP — by engagement.</p></div>
          </div>
          <div className="ind-cta"><span>Don&apos;t see yours? We&apos;ll model it.</span><Link className="btn btn-lg" href="/company/contact">Talk to us →</Link></div>
        </div>
      </section>

      {/* ── PROOF ────────────────────────────────────────── */}
      <section className="numbers">
        <div className="container">
          <div className="num-strip">
            <div className="num-cell"><div className="num-v">$0.00</div><div className="num-l">Reconciliation variance</div></div>
            <div className="num-cell"><div className="num-v">100<span className="u">%</span></div><div className="num-l">GAAP, derived</div></div>
            <div className="num-cell"><div className="num-v">48<span className="u">hrs</span></div><div className="num-l">Time to live</div></div>
            <div className="num-cell"><div className="num-v">$60<span className="u">/hr</span></div><div className="num-l">Worked, not seats</div></div>
          </div>
        </div>
      </section>

      {/* ── OFFER ────────────────────────────────────────── */}
      <section className="ribbon-cta">
        <div className="container-tight">
          <h2 className="h2">Bring an unsigned period.</h2>
          <p className="lead">We close last month on your real books, live. You leave with a number.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">Book a live close</Link>
            <Link className="btn btn-lg" href="/company/pricing">Pricing</Link>
          </div>
        </div>
      </section>

      <HomeShowcase />
    </>
  );
}
