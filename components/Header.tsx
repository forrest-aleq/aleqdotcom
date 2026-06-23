"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ICONS: Record<string, string> = {
  recon: '<path d="m8 6-4 4 4 4"/><path d="m16 14 4-4-4-4"/><path d="M4 10h16"/>',
  ap: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 10h18"/>',
  voice:
    '<path d="M15.5 13.5l-2 1.5a11 11 0 0 1-5-5l1.5-2L7.5 4H4a1.5 1.5 0 0 0-1.5 1.6A15.5 15.5 0 0 0 16 20.5 1.5 1.5 0 0 0 17.5 19v-3.5z"/>',
  close:
    '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17"/><path d="M8 3v4M16 3v4"/><path d="m8.5 15 2.5 2.5L16 12.5"/>',
  entity: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  tax: '<path d="M5 19 19 5"/><circle cx="7.5" cy="7.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>',
  ledger: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 9v11"/>',
  migrate: '<path d="M4 8h12m-4-4 4 4-4 4"/><path d="M20 16H8m4-4-4 4 4 4"/>',
  control:
    '<path d="M4 7h11M19 7h1M4 12h1M9 12h11M4 17h7M15 17h5"/><circle cx="17" cy="7" r="2"/><circle cx="7" cy="12" r="2"/><circle cx="13" cy="17" r="2"/>',
  audit:
    '<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/>',
  standards: '<path d="M4 5a2 2 0 0 1 2-2h13v14H6a2 2 0 0 0-2 2z"/><path d="M19 17H6"/>',
  tami: '<path d="M12 3l1.7 5L19 9.7l-5.3 1.7L12 17l-1.7-5.6L5 9.7l5.3-1.7z"/>',
  gauge: '<path d="M5 18a8 8 0 1 1 14 0"/><path d="M12 14l3.5-3.5"/>',
  doc: '<path d="M14 3v5h5"/><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M8 13h8M8 17h5"/>',
};

function Ic({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: NAV_ICONS[name] || "" }}
    />
  );
}

function Caret() {
  return (
    <svg className="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-video") as HTMLElement | null;
    if (!hero) {
      setTransparent(false);
      return;
    }
    const apply = () => setTransparent(window.scrollY < hero.offsetHeight - 70);
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    return () => window.removeEventListener("scroll", apply);
  }, []);

  const logo = transparent ? "/brand/aleq-lockup-light.png" : "/brand/aleq-lockup.png";

  return (
    <header className={`site-header${transparent ? " is-transparent" : ""}`}>
      <div className="site-header-inner">
        <Link className="site-logo" href="/" aria-label="Aleq home" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="aleq" width={2883} height={1160} />
        </Link>
        <nav className={`site-nav${open ? " open" : ""}`} id="site-nav" onClick={() => setOpen(false)}>
          <span className="nav-item">
            <Link className="nav-trigger" href="/work">Platform <Caret /></Link>
            <span className="nav-panel nav-mega2">
              <div className="nav-mcol">
                <div className="nav-col-h">close the books</div>
                <Link className="nav-mi" href="/work/reconciliation"><span className="nav-ic"><Ic name="recon" /></span><span className="nav-mt"><b>Reconciliation</b><small>matched to the penny, every night</small></span></Link>
                <Link className="nav-mi" href="/work/general-ledger"><span className="nav-ic"><Ic name="ledger" /></span><span className="nav-mt"><b>General ledger</b><small>always balanced, always current</small></span></Link>
                <Link className="nav-mi" href="/work/close"><span className="nav-ic"><Ic name="close" /></span><span className="nav-mt"><b>Continuous close</b><small>the month seals itself</small></span></Link>
                <div className="nav-col-h nav-col-h2">cash in &amp; out</div>
                <Link className="nav-mi" href="/work/ap"><span className="nav-ic"><Ic name="ap" /></span><span className="nav-mt"><b>Accounts payable</b><small>bills matched, paid on approval</small></span></Link>
                <Link className="nav-mi" href="/work/collections"><span className="nav-ic"><Ic name="voice" /></span><span className="nav-mt"><b>Collections by voice</b><small>AR calls that get the promise</small></span></Link>
              </div>
              <div className="nav-mcol">
                <div className="nav-col-h">scale &amp; comply</div>
                <Link className="nav-mi" href="/work/multi-entity"><span className="nav-ic"><Ic name="entity" /></span><span className="nav-mt"><b>Multi-entity &amp; consolidation</b><small>many books, one truth</small></span></Link>
                <Link className="nav-mi" href="/work/tax"><span className="nav-ic"><Ic name="tax" /></span><span className="nav-mt"><b>Tax &amp; compliance</b><small>provisions and filings, derived</small></span></Link>
                <div className="nav-col-h nav-col-h2">trust &amp; control</div>
                <Link className="nav-mi" href="/control#modes"><span className="nav-ic"><Ic name="control" /></span><span className="nav-mt"><b>Control plane</b><small>Manual · Assist · Auto</small></span></Link>
                <Link className="nav-mi" href="/control#audit"><span className="nav-ic"><Ic name="audit" /></span><span className="nav-mt"><b>Signed audit trail</b><small>every move, traced &amp; reversible</small></span></Link>
                <Link className="nav-mi" href="/migrate"><span className="nav-ic"><Ic name="migrate" /></span><span className="nav-mt"><b>Migrate to Aleq</b><small>books rebuilt from source</small></span></Link>
              </div>
              <div className="nav-mstd">
                <span className="nav-mstd-h"><span className="nav-mstd-ic"><Ic name="standards" /></span>every GAAP standard, derived</span>
                <span className="nav-mstd-chips">
                  <Link href="/standards/asc606">606 · Revenue</Link>
                  <Link href="/standards/asc842">842 · Leases</Link>
                  <Link href="/standards/asc718">718 · Stock comp</Link>
                  <Link href="/standards/asc740">740 · Income tax</Link>
                  <Link href="/standards/asc340">340 · Commissions</Link>
                  <Link href="/standards/asc350">350 · Intangibles</Link>
                  <Link href="/standards/asc815">815 · Hedging</Link>
                </span>
              </div>
              <Link className="nav-mega-foot" href="/work">See the whole platform <span aria-hidden="true">→</span></Link>
            </span>
          </span>
          <span className="nav-item">
            <Link className="nav-trigger" href="/tami">TAMi <Caret /></Link>
            <span className="nav-panel nav-tami">
              <Link className="nav-mi" href="/tami"><span className="nav-ic nav-ic-accent"><Ic name="tami" /></span><span className="nav-mt"><b>How TAMi works</b><small>evidence-backed beliefs, not a chatbot</small></span></Link>
              <Link className="nav-mi" href="/control#modes"><span className="nav-ic nav-ic-accent"><Ic name="gauge" /></span><span className="nav-mt"><b>Earned autonomy, per task</b><small>it proves itself before it acts alone</small></span></Link>
              <Link className="nav-mi" href="/control#audit"><span className="nav-ic nav-ic-accent"><Ic name="doc" /></span><span className="nav-mt"><b>Every decision, explained</b><small>the reason and the rollback, attached</small></span></Link>
            </span>
          </span>
          <span className="nav-item">
            <Link className="nav-trigger" href="/packs">Resources <Caret /></Link>
            <span className="nav-panel">
              <Link href="/packs">Scenario packs<small>the jobs Aleq runs</small></Link>
              <Link href="/compare">Compare<small>vs. the incumbents</small></Link>
              <Link href="/teams">Teams<small>built for controllers</small></Link>
              <Link href="/legal/security">Security<small>controls, encryption, access</small></Link>
            </span>
          </span>
          <Link href="/company/pricing">Pricing</Link>
        </nav>
        <div className="site-cta">
          <Link className="btn btn-ghost btn-sm" href="/company/contact">Log in</Link>
          <Link className="btn btn-primary btn-sm" href="/company/contact">Book a demo</Link>
          <button
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
