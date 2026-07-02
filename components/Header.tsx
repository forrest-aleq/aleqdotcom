"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ICONS: Record<string, string> = {
  recon: '<path d="m8 8-4 4 4 4"/><path d="m16 16 4-4-4-4"/><path d="M4 12h16"/>',
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
  saas: '<path d="M7 18a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.2A3.75 3.75 0 0 1 17 18z"/>',
  hardware:
    '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>',
  market:
    '<path d="M4 9h16l-1.2-4.2A1 1 0 0 0 17.8 4H6.2a1 1 0 0 0-1 .8z"/><path d="M5 9v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/><path d="M9.5 19v-4.5h5V19"/>',
  health:
    '<path d="M12 3l7 3v5c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6z"/><path d="M12 8.5v5M9.5 11h5"/>',
  factory:
    '<path d="M3 21V11l5 3.2V11l5 3.2V8l6 3.6V21z"/><path d="M3 21h18"/><path d="M7 17h.01M11 17h.01M15 17h.01"/>',
  briefcase:
    '<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>',
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
    <>
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
                <Link className="nav-mi" href="/work/reporting"><span className="nav-ic"><Ic name="doc" /></span><span className="nav-mt"><b>Financial reporting</b><small>board-ready the day you close</small></span></Link>
                <div className="nav-col-h nav-col-h2">cash in &amp; out</div>
                <Link className="nav-mi" href="/work/ap"><span className="nav-ic"><Ic name="ap" /></span><span className="nav-mt"><b>Accounts payable</b><small>bills matched, paid on approval</small></span></Link>
                <Link className="nav-mi" href="/work/collections"><span className="nav-ic"><Ic name="voice" /></span><span className="nav-mt"><b>Accounts receivable</b><small>collections calls that get the promise</small></span></Link>
              </div>
              <div className="nav-mcol">
                <div className="nav-col-h">scale &amp; comply</div>
                <Link className="nav-mi" href="/work/multi-entity"><span className="nav-ic"><Ic name="entity" /></span><span className="nav-mt"><b>Multi-entity &amp; consolidation</b><small>many books, one truth</small></span></Link>
                <Link className="nav-mi" href="/work/tax"><span className="nav-ic"><Ic name="tax" /></span><span className="nav-mt"><b>Tax &amp; compliance</b><small>provisions and filings, derived</small></span></Link>
                <div className="nav-col-h nav-col-h2">trust &amp; control</div>
                <Link className="nav-mi" href="/control#modes"><span className="nav-ic"><Ic name="control" /></span><span className="nav-mt"><b>Control plane</b><small>Manual · Assist · Auto</small></span></Link>
                <Link className="nav-mi" href="/control#beliefs"><span className="nav-ic nav-ic-accent"><svg viewBox="0 0 48 48" aria-hidden="true"><use href="#aleq-mark" /></svg></span><span className="nav-mt"><b>TAMi — The Aleq Mind</b><small>learns your books — not a chatbot</small></span></Link>
                <Link className="nav-mi" href="/control#audit"><span className="nav-ic"><Ic name="audit" /></span><span className="nav-mt"><b>Audit trail</b><small>every move, logged &amp; reversible</small></span></Link>
              </div>
              <div className="nav-std-row">
                <span className="nav-std-k">accounting standards</span>
                <Link href="/standards/asc606"><b>606</b> Revenue</Link>
                <Link href="/standards/asc842"><b>842</b> Leases</Link>
                <Link href="/standards/asc718"><b>718</b> Stock comp</Link>
                <Link href="/standards/asc740"><b>740</b> Income tax</Link>
                <Link href="/standards/asc340"><b>340</b> Commissions</Link>
                <Link href="/standards/asc350"><b>350</b> Software</Link>
                <Link href="/standards/asc815"><b>815</b> Hedging</Link>
              </div>
            </span>
          </span>
          <span className="nav-item">
            <Link className="nav-trigger" href="/industries">Industries <Caret /></Link>
            <span className="nav-panel nav-mega2">
              <div className="nav-mcol">
                <div className="nav-col-h">what you sell</div>
                <Link className="nav-mi" href="/industries/saas"><span className="nav-ic"><Ic name="saas" /></span><span className="nav-mt"><b>SaaS &amp; subscription</b><small>ASC 606, MRR, deferred revenue</small></span></Link>
                <Link className="nav-mi" href="/industries/marketplaces"><span className="nav-ic"><Ic name="market" /></span><span className="nav-mt"><b>Marketplaces</b><small>payouts, fees, net vs gross</small></span></Link>
                <Link className="nav-mi" href="/industries/proservices"><span className="nav-ic"><Ic name="briefcase" /></span><span className="nav-mt"><b>Professional services</b><small>% complete, utilization</small></span></Link>
              </div>
              <div className="nav-mcol">
                <div className="nav-col-h">what you make &amp; move</div>
                <Link className="nav-mi" href="/industries/hardware"><span className="nav-ic"><Ic name="hardware" /></span><span className="nav-mt"><b>Hardware &amp; devices</b><small>inventory, COGS, landed cost</small></span></Link>
                <Link className="nav-mi" href="/industries/manufacturing"><span className="nav-ic"><Ic name="factory" /></span><span className="nav-mt"><b>Manufacturing</b><small>WIP, standard cost, variances</small></span></Link>
                <Link className="nav-mi" href="/industries/healthcare"><span className="nav-ic"><Ic name="health" /></span><span className="nav-mt"><b>Healthcare</b><small>payer mix, net patient revenue</small></span></Link>
              </div>
            </span>
          </span>
          <span className="nav-item">
            <Link className="nav-trigger" href="/compare">Resources <Caret /></Link>
            <span className="nav-panel nav-mega">
              <div className="nav-col">
                <div className="nav-col-h">evaluate</div>
                <Link href="/scenarios">Scenario packs</Link>
                <Link href="/compare">Compare Aleq</Link>
                <Link href="/connectors">Connectors</Link>
                <Link href="/legal/security">Security</Link>
              </div>
              <div className="nav-col">
                <div className="nav-col-h">get started</div>
                <Link href="/migrate">How migration works</Link>
                <Link href="/teams">Teams</Link>
                <Link href="/company/contact">Contact</Link>
              </div>
            </span>
          </span>
          <span className="nav-item">
            <Link className="nav-trigger" href="/demo">Pricing</Link>
          </span>
        </nav>
        <div className="site-cta">
          <Link className="btn btn-ghost btn-sm" href="/company/contact">Log in</Link>
          <Link className="btn btn-primary btn-sm" href="/demo">Demo</Link>
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
    <div className="nav-scrim" aria-hidden="true" />
    </>
  );
}
