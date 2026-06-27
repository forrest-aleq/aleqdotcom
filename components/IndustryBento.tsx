import Link from "next/link";

type Item = { label: string; href: string; desc?: string; img?: string; tile?: string };

// Map a work/standard surface to a bespoke, high-def tile visual.
function kindFor(href: string): string {
  if (href.includes("reconciliation")) return "recon";
  if (href.includes("collections")) return "ar";
  if (href.includes("/ap")) return "ap";
  if (href.includes("close")) return "close";
  if (href.includes("multi-entity")) return "multi";
  if (href.includes("general-ledger")) return "gl";
  if (href.includes("/tax")) return "tax";
  if (href.includes("asc606")) return "rev";
  if (href.includes("asc718")) return "sbc";
  if (href.includes("asc340")) return "comm";
  if (href.includes("asc842")) return "lease";
  if (href.includes("asc350")) return "soft";
  return "gl";
}

function Head({ k, pill, tone }: { k: string; pill: string; tone?: string }) {
  return (
    <div className="ibt-head">
      <span className="ibt-kick">{k}</span>
      <span className={"ibt-pill" + (tone ? " " + tone : "")}>{pill}</span>
    </div>
  );
}

function Inner({ kind }: { kind: string }) {
  switch (kind) {
    case "deferred":
      return (
        <>
          <Head k="subscription revenue · ASC 606" pill="recognized as billed" tone="ok" />
          <div className="ibt-stat">$24.4M<small>ARR · deferred schedule current to the day</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>MRR</span><b>$2.03M</b></div>
            <div className="ibt-row"><span>deferred revenue</span><b>$8.62M</b></div>
            <div className="ibt-row"><span>net revenue retention</span><b>114%</b></div>
          </div>
        </>
      );
    case "recon":
      return (
        <>
          <Head k="bank vs. books" pill="reconciled" tone="ok" />
          <div className="ibt-stat">$0.00<small>difference · matched overnight</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>2,261 lines</span><b>matched</b></div>
            <div className="ibt-row"><span>exceptions left for you</span><b>2</b></div>
          </div>
        </>
      );
    case "ar":
      return (
        <>
          <Head k="cash application" pill="0.4d to apply" tone="ok" />
          <div className="ibt-stat">$679,200<small>applied to invoices today</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>247 receipts → invoices</span><b>auto</b></div>
            <div className="ibt-bar"><i style={{ width: "92%" }} /></div>
          </div>
        </>
      );
    case "ap":
      return (
        <>
          <Head k="accounts payable" pill="paid on approval" />
          <div className="ibt-stat">$481,800<small>in bills, matched &amp; coded</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>Amazon Web Services</span><b>approved</b></div>
            <div className="ibt-row"><span>Cooley LLP · $22,400</span><b className="ibt-warn">needs you</b></div>
          </div>
        </>
      );
    case "close":
      return (
        <>
          <Head k="continuous close" pill="day 4 of 8 · 62%" />
          <div className="ibt-cks">
            <div className="ibt-ck"><span className="box">✓</span>Subledgers tied</div>
            <div className="ibt-ck"><span className="box">✓</span>Accruals posted</div>
            <div className="ibt-ck"><span className="box wait" />Flux &amp; sign-off</div>
          </div>
        </>
      );
    case "multi":
      return (
        <>
          <Head k="multi-entity close" pill="eliminated" tone="ok" />
          <div className="ibt-stat">6 → 1<small>entities to one consolidation</small></div>
          <div className="ibt-chips">
            <span className="ibt-chip">US</span><span className="ibt-chip">MX</span>
            <span className="ibt-chip">UK</span><span className="ibt-chip">DE</span>
            <span className="ibt-chip">SG</span>
          </div>
        </>
      );
    case "gl":
      return (
        <>
          <Head k="general ledger" pill="in balance" tone="ok" />
          <div className="ibt-stat">DR = CR<small>checked on every post</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>Total debits</span><b>$8,412,900</b></div>
            <div className="ibt-row"><span>Total credits</span><b>$8,412,900</b></div>
          </div>
        </>
      );
    case "tax":
      return (
        <>
          <Head k="tax &amp; provision" pill="current" tone="ok" />
          <div className="ibt-stat">14 states<small>economic nexus, watched live</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>approaching threshold</span><b className="ibt-warn">2</b></div>
            <div className="ibt-row"><span>provision (ASC 740)</span><b>tied out</b></div>
          </div>
        </>
      );
    case "rev":
      return (
        <>
          <Head k="revenue · ASC 606" pill="derived" tone="ok" />
          <div className="ibt-stat">$2.22M<small>active contract value, recognized</small></div>
          <div className="ibt-chips">
            <span className="ibt-chip">ratable</span>
            <span className="ibt-chip">point-in-time</span>
            <span className="ibt-chip">usage</span>
          </div>
        </>
      );
    case "sbc":
      return (
        <>
          <Head k="stock comp · ASC 718" pill="derived" tone="ok" />
          <div className="ibt-stat">$412,400<small>SBC expense this period</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>grants from cap table</span><b>auto</b></div>
            <div className="ibt-bar"><i style={{ width: "58%" }} /></div>
          </div>
        </>
      );
    case "comm":
      return (
        <>
          <Head k="commissions · ASC 340" pill="derived" tone="ok" />
          <div className="ibt-stat">$484.4K<small>capitalized, then amortized</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>amortized this period</span><b>$31,400</b></div>
            <div className="ibt-bar"><i style={{ width: "44%" }} /></div>
          </div>
        </>
      );
    case "lease":
      return (
        <>
          <Head k="leases · ASC 842" pill="derived" tone="ok" />
          <div className="ibt-stat">$1.76M<small>lease liability, ROU derived</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>interest this period</span><b>$10,455</b></div>
            <div className="ibt-row"><span>principal</span><b>$28,045</b></div>
          </div>
        </>
      );
    case "soft":
      return (
        <>
          <Head k="software · ASC 350" pill="derived" tone="ok" />
          <div className="ibt-stat">$486,300<small>capitalized software, net</small></div>
          <div className="ibt-rows">
            <div className="ibt-row"><span>monthly amortization</span><b>$14,200</b></div>
            <div className="ibt-bar"><i style={{ width: "68%" }} /></div>
          </div>
        </>
      );
    default:
      return (
        <>
          <Head k="general ledger" pill="in balance" tone="ok" />
          <div className="ibt-stat">Balanced<small>every entry, by construction</small></div>
        </>
      );
  }
}

export default function IndustryBento({ items }: { items: Item[] }) {
  return (
    <div className="ind-breadth bento reveal">
      {items.map((b) => (
        <Link className="ind-bx" key={b.href + b.label} href={b.href}>
          <Inner kind={b.tile ?? kindFor(b.href)} />
          <div className="ibt-foot">
            <span className="ibt-name">{b.label}</span>
            <span className="ibt-arw" aria-hidden="true">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
