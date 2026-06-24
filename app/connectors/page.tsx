import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connectors — Aleq plugs into the stack you already run on",
  description:
    "Aleq connects read-only to your banks, processors, cards, payroll, and cap table — the systems it reads forever — and to your old accounting system, which it replaces. Chase to Mercury, Stripe to Carta, plus 12,000+ institutions via Plaid; everything reconciled to one ledger.",
};

type Item = { name: string; logo?: string; mono?: string };
type Group = { label: string; sub: string; items: Item[] };

// Systems of record for real-world events. Aleq reads these — read-only, forever.
const READS: Group[] = [
  {
    label: "Banks",
    sub: "balances, statements, and transactions — reconciled nightly",
    items: [
      { name: "Chase", logo: "chase-bank.png" },
      { name: "J.P. Morgan", mono: "JPM" },
      { name: "Bank of America", mono: "BofA" },
      { name: "Wells Fargo", mono: "WF" },
      { name: "Mercury", logo: "mercury-bank.png" },
      { name: "Wise", logo: "Wise.png" },
    ],
  },
  {
    label: "Payment processors",
    sub: "charges, refunds, fees, and payouts, matched to the cent",
    items: [
      { name: "Stripe", logo: "Stripe.png" },
      { name: "Adyen", mono: "Ad" },
      { name: "PayPal", logo: "Paypal.png" },
      { name: "Square", logo: "Square.png" },
      { name: "Shopify", logo: "Shopify.png" },
      { name: "Recurly", logo: "recurly.png" },
    ],
  },
  {
    label: "Cards & spend",
    sub: "card spend captured and coded to policy — the card stays yours",
    items: [
      { name: "Brex", logo: "brex.png" },
      { name: "Ramp", logo: "ramp.png" },
    ],
  },
  {
    label: "Payroll & HR",
    sub: "runs, taxes, and benefits, posted by entity",
    items: [
      { name: "Gusto", logo: "Gusto.png" },
      { name: "Rippling", mono: "R" },
      { name: "Deel", logo: "Deel.png" },
    ],
  },
  {
    label: "Cap table & equity",
    sub: "grants and vesting read straight into ASC 718",
    items: [{ name: "Carta", mono: "C" }],
  },
  {
    label: "Cloud & infrastructure",
    sub: "usage invoices captured and capitalized where they qualify",
    items: [
      { name: "AWS", mono: "AWS" },
      { name: "Google Cloud", logo: "Google.png" },
      { name: "Microsoft", logo: "Microsoft.png" },
    ],
  },
];

// Tools that only recorded the accounting. Aleq replaces these — connect once, then switch off.
const REPLACES: Group[] = [
  {
    label: "Accounting & ERP",
    sub: "your general ledger — rebuilt clean, then retired",
    items: [
      { name: "QuickBooks", logo: "Quickbooks.png" },
      { name: "NetSuite", mono: "NS" },
      { name: "Xero", logo: "Xero.png" },
      { name: "Sage Intacct", mono: "SI" },
    ],
  },
  {
    label: "Bill pay & AP",
    sub: "Aleq matches and schedules bills itself",
    items: [{ name: "Bill.com", logo: "Bill.png" }],
  },
  {
    label: "Close, recon & reporting",
    sub: "the bolt-ons and spreadsheets Aleq makes unnecessary",
    items: [
      { name: "Spreadsheets", logo: "Excel.png" },
      { name: "FloQast", mono: "Fq" },
    ],
  },
];

function Tile({ item, repl }: { item: Item; repl?: boolean }) {
  return (
    <div className={"cxn-tile" + (repl ? " repl" : "")}>
      {item.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="cxn-logo" src={"/tech-logos/" + item.logo} alt="" width={120} height={120} />
      ) : (
        <span className="cxn-mono">{item.mono}</span>
      )}
      <span className="cxn-name">{item.name}</span>
      {repl ? <span className="cxn-repl-badge">→ Aleq</span> : null}
    </div>
  );
}

function Catalog({ groups, repl }: { groups: Group[]; repl?: boolean }) {
  return (
    <div className="cxn-groups reveal">
      {groups.map((g) => (
        <div className="cxn-group" key={g.label}>
          <div className="cxn-group-head">
            <h3>{g.label}</h3>
            <span>{g.sub}</span>
          </div>
          <div className="cxn-grid">
            {g.items.map((it) => (
              <Tile item={it} repl={repl} key={it.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="pp-wrap">
        <div className="pp-hero">
          <div className="pp-hero-copy">
            <div className="pp-eyebrow">Connectors</div>
            <h1>
              Connect your stack.
              <br />
              Aleq does the rest.
            </h1>
            <p className="pp-hero-lead">
              Aleq plugs into the tools you already run on — read-only to start.
              The systems that hold your money it reads forever. The accounting
              system you run today, it replaces.
            </p>
            <div className="pp-actions">
              <Link className="btn btn-primary btn-lg" href="/company/contact">
                See it on your books
              </Link>
              <a className="btn btn-lg" href="#kinds">
                Read vs. replace
              </a>
            </div>
            <div className="pp-note">
              <span className="t-dot" />
              read-only credentials · revocable any time
            </div>
          </div>

          <div className="pp-hero-art pp-frame reveal">
            <div className="pp-card">
              <div className="pp-card-head">
                <svg className="pp-card-mark" viewBox="0 0 48 48">
                  <use href="#aleq-mark" />
                </svg>
                Connected sources
                <span className="pp-live">
                  <i />
                  live
                </span>
              </div>
              <div className="pp-tb">
                <div className="pp-tb-row">
                  <span className="pp-tb-acct"><small>read-only · forever</small>Chase · operating</span>
                  <span className="pp-num" style={{ color: "var(--positive)" }}>synced</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct"><small>read-only · forever</small>Stripe · payouts</span>
                  <span className="pp-num" style={{ color: "var(--positive)" }}>synced</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct"><small>read-only · forever</small>Carta · equity</span>
                  <span className="pp-num" style={{ color: "var(--positive)" }}>synced</span>
                </div>
                <div className="pp-tb-row">
                  <span className="pp-tb-acct">
                    <small>migrating off · rebuilding 18 months</small>
                    NetSuite · retiring
                  </span>
                  <span className="pp-num" style={{ color: "var(--warning)" }}>62%</span>
                </div>
              </div>
              <div className="pp-tb-foot">
                <span className="pp-tb-k">Reconciled to one ledger · nightly</span>
                <span className="pp-ok">tied out</span>
              </div>
            </div>
            <div className="pp-float">
              <div className="pp-float-k">everything else</div>
              <div className="pp-float-v">12,000+ via Plaid</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two kinds of connection ────────────────────────────── */}
      <section className="pp-section alt" id="kinds">
        <div className="pp-wrap">
          <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}>
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>Read vs. replace</div>
            <h2 className="pp-h">Not every connection means the same thing.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Most software calls everything an &ldquo;integration.&rdquo; That
              hides the point of Aleq: some of these systems you keep forever, and
              some of them Aleq is here to take off your books.
            </p>
          </div>
          <div className="cxn-kinds">
            <div className="cxn-kind">
              <div className="cxn-kind-k">Aleq reads these · read-only, forever</div>
              <h3>Where your money actually moves.</h3>
              <p>
                Your bank, your processor, your payroll, your cap table — these are
                the systems of record for real-world events. Aleq connects read-only,
                pulls every transaction as it happens, and never moves money to set up.
                It does not replace them.
              </p>
              <ul>
                <li>You keep banking at Chase or Mercury.</li>
                <li>You keep charging on Stripe.</li>
                <li>You keep running payroll in Gusto.</li>
                <li>Aleq reads it all and reconciles it nightly.</li>
              </ul>
            </div>
            <div className="cxn-kind repl">
              <div className="cxn-kind-k">Aleq replaces these · migrate once, then switch off</div>
              <h3>Where the accounting used to happen.</h3>
              <p>
                Your general ledger and its bolt-ons only <em>recorded</em> the
                accounting. Aleq does it. You connect them once so Aleq can rebuild
                your history clean — then you turn them off. Aleq becomes the system
                of record.
              </p>
              <ul>
                <li>QuickBooks, NetSuite, Xero, Sage Intacct become the ledger.</li>
                <li>Bill.com becomes accounts payable.</li>
                <li>FloQast and the close spreadsheets become the close.</li>
                <li>One migration — then you stop paying for them.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How a connection works ─────────────────────────────── */}
      <section className="pp-section" id="how">
        <div className="pp-wrap">
          <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "44px", padding: 0 }}>
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>How it works</div>
            <h2 className="pp-h">Read-only in. Reconciled out.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Every connection starts read-only — Aleq never moves money to set up.
              The sources it reads it reconciles to the ledger nightly. The old
              accounting system it rebuilds clean, then you switch off.
            </p>
          </div>
          <div className="cxn-flows reveal">
            <div className="cxn-flow">
              <div className="cxn-flow-k">Sources Aleq reads</div>
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <div><span className="pp-k">Connect</span></div>
                  <div>
                    <b>Read-only credentials</b>
                    <span className="sub">banks, processors, payroll, cap table</span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                </div>
                <div className="pp-drill-step">
                  <div><span className="pp-k">Ingest</span></div>
                  <div>
                    <b>Every event, as it happens</b>
                    <span className="sub">charges, payouts, runs, statements</span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                </div>
                <div className="pp-drill-step">
                  <div><span className="pp-k">Reconcile</span></div>
                  <div>
                    <b>Tied to the ledger, nightly</b>
                    <span className="sub">matched to the bank · $0.00 variance</span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cxn-flow">
              <div className="cxn-flow-k">Systems Aleq replaces</div>
              <div className="pp-drill">
                <div className="pp-drill-step">
                  <div><span className="pp-k">Connect</span></div>
                  <div>
                    <b>Point Aleq at the old ERP</b>
                    <span className="sub">QuickBooks, NetSuite, Xero, Intacct</span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                </div>
                <div className="pp-drill-step">
                  <div><span className="pp-k">Rebuild</span></div>
                  <div>
                    <b>History re-derived from source</b>
                    <span className="sub">18 months, on standard, traceable</span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                </div>
                <div className="pp-drill-step">
                  <div><span className="pp-k">Cut over</span></div>
                  <div>
                    <b>Tie out, then switch it off</b>
                    <span className="sub">Aleq is the system of record</span>
                  </div>
                  <div className="pp-drill-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The full catalog, split by relationship ────────────── */}
      <section className="pp-section alt">
        <div className="pp-wrap">
          <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "44px", padding: 0 }}>
            <div className="pp-eyebrow" style={{ display: "inline-block" }}>The catalog</div>
            <h2 className="pp-h">Everything your books touch.</h2>
            <p className="pp-sub" style={{ margin: "18px auto 0" }}>
              Grouped by what Aleq does with each one. Don&apos;t see yours? Aleq
              connects to 12,000+ institutions through Plaid, plus an open API — and
              new connectors ship every week.
            </p>
          </div>

          <div className="cxn-cat">
            <span className="cxn-cat-k">Aleq reads these</span>
            <small>read-only, forever — never replaced</small>
            <span className="ln" />
          </div>
          <Catalog groups={READS} />

          <div className="cxn-cat">
            <span className="cxn-cat-k">Aleq replaces these</span>
            <small>connect once to migrate, then switch off</small>
            <span className="ln" />
          </div>
          <Catalog groups={REPLACES} repl />
        </div>
      </section>

      {/* ── Trust ──────────────────────────────────────────────── */}
      <section className="pp-section">
        <div className="pp-narrow" style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>Trust</div>
          <h2 className="pp-h">Read-only by default. Revocable always.</h2>
        </div>
        <div className="pp-faq reveal">
          <details open><summary>Is it really read-only?</summary><p>Yes. Every connection is established with read-only credentials, and Aleq never moves money to set up. When Aleq does act — paying a bill, posting an entry — it happens inside the <Link href="/control" style={{ color: "var(--primary)" }}>control plane</Link>: gated to the mode you set, signed, and reversible.</p></details>
          <details><summary>What happens if I revoke a connection?</summary><p>Disconnect any source at any time from your settings or at the provider. Aleq stops ingesting immediately, and everything it already reconciled stays intact — the ledger and its evidence don&apos;t disappear with the connection.</p></details>
          <details><summary>How is the data handled?</summary><p>Connections run through audited aggregators like Plaid and direct provider APIs, encrypted in transit and at rest. Credentials are tokenized, not stored as passwords. See <Link href="/legal/security" style={{ color: "var(--primary)" }}>security</Link> for the full posture.</p></details>
          <details><summary>What if I leave?</summary><p>Your books are yours. Aleq exports the full ledger, the journal entries, and the supporting evidence — so you can take the system of record with you.</p></details>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-narrow">
          <h2>Connect one source. Watch it reconcile.</h2>
          <p>
            Link a bank and your processor read-only. In 48 hours Aleq reconciles
            your last close to the penny and shows you the trail — then it&apos;s the
            system of record, and the old one comes off the bill.
          </p>
          <div className="pp-actions">
            <Link className="btn btn-primary btn-lg" href="/company/contact">
              Book a working session
            </Link>
            <Link className="btn btn-lg" href="/migrate">
              See how migration works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
