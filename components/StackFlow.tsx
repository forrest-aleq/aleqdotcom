// "Your stack today" — one real transaction follows the fragmented chain hop by
// hop, accruing days at every handoff — then the same transaction runs through
// Aleq and lands as a balanced, traced entry the day it arrived. Driven by
// installStackFlow() in lib/animations.js (plays once on scroll-into-view,
// click the card to replay, respects reduced-motion).

// Inbound-handoff friction shown on each node after the first, and the days
// that friction costs by the time the transaction reaches that node.
const FRICTION = ["exported to CSV", "keyed by hand", "weeks late", "reconciled at close", "trued up late"];
const DAYS = [0, 1, 3, 9, 14];

function dayFor(i: number): number {
  return DAYS[i] ?? DAYS[DAYS.length - 1] + (i - DAYS.length + 1) * 3;
}

export default function StackFlow({ tools }: { tools: string[] }) {
  return (
    <div className="sflow">
      <div className="sflow-k">your stack today</div>
      <div className="sflow-rail">
        <span className="sflow-token" aria-hidden="true">
          <i />
          <b>$12,400</b>
        </span>
        {tools.map((t, i) => (
          <div className="sflow-node" key={i}>
            <span className="sflow-dot" aria-hidden="true" />
            <span className="sflow-name">{t}</span>
            {i > 0 && (
              <span className="sflow-friction">{FRICTION[(i - 1) % FRICTION.length]}</span>
            )}
            <span className="sflow-day">day {dayFor(i)}</span>
          </div>
        ))}
      </div>
      <div className="sflow-collapse" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
      <div className="sflow-aleq">
        <div className="sflow-aleq-head">
          <svg className="sflow-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m20 6-11 11-5-5" />
          </svg>
          Aleq — one ledger, real-time
        </div>
        <div className="sflow-receipt">
          <div className="sflow-receipt-row">
            <span className="sflow-side dr">DR</span>
            <span>Cash</span>
            <b>$12,400.00</b>
          </div>
          <div className="sflow-receipt-row">
            <span className="sflow-side cr">CR</span>
            <span>Accounts receivable</span>
            <b>$12,400.00</b>
          </div>
          <div className="sflow-receipt-foot">balanced · posted day 0 · source: bank line BT-1142</div>
        </div>
      </div>
    </div>
  );
}
