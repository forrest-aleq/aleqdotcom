// "Your stack today" — a motion demo. A transaction crawls hop-by-hop down the
// fragmented tool chain (each handoff a manual, lagging step), then the whole
// mess collapses into one Aleq ledger. Driven by installStackFlow() in
// lib/animations.js (plays on scroll-into-view, respects reduced-motion).

// Inbound-handoff friction shown on each node after the first.
const FRICTION = ["exported to CSV", "keyed by hand", "weeks late", "reconciled at close", "trued up late"];

export default function StackFlow({ tools }: { tools: string[] }) {
  return (
    <div className="sflow">
      <div className="sflow-k">your stack today</div>
      <div className="sflow-rail">
        <span className="sflow-token" aria-hidden="true" />
        {tools.map((t, i) => (
          <div className="sflow-node" key={i}>
            <span className="sflow-dot" aria-hidden="true" />
            <span className="sflow-name">{t}</span>
            {i > 0 && (
              <span className="sflow-friction">{FRICTION[(i - 1) % FRICTION.length]}</span>
            )}
          </div>
        ))}
      </div>
      <div className="sflow-collapse" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
      <div className="sflow-aleq">
        <svg className="sflow-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m20 6-11 11-5-5" />
        </svg>
        Aleq — one ledger, real-time
      </div>
    </div>
  );
}
