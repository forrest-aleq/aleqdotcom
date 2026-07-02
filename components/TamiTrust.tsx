// The Aleq action trail, in plain language. The split IS the product:
// mechanical work posts on its own; the judgment call sits and waits for you.

const POSTED: { headline: string; reason: string }[] = [
  { headline: "Reconciled the bank to the books", reason: "412 lines matched · $0.00 variance" },
  { headline: "Paid the AWS invoice", reason: "$88,440 · three-way matched, within policy" },
  { headline: "Recognized May subscription revenue", reason: "ratable under ASC 606" },
];

const RAIL_ICONS = [
  "M3 12h7M3 7h11M3 17h9",
  "m8 6-4 4 4 4M16 14l4-4-4-4M4 10h16",
  "M4 5h16v14H4zM4 9h16M9 9v10",
];

export default function TamiTrust() {
  return (
    <div className="tami-app reveal">
      <div className="ta-rail">
        <span className="ta-logo">
          <svg viewBox="0 0 48 48">
            <use href="#aleq-mark" />
          </svg>
        </span>
        {RAIL_ICONS.map((d, i) => (
          <span className="ta-ico" key={i}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
              <path d={d} />
            </svg>
          </span>
        ))}
        <span className="ta-ico on" aria-label="action trail">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
      </div>

      <div className="ta-main">
        <div className="ta-bar">
          <span className="ta-title">Action trail</span>
          <span className="ta-sub">every move logged &amp; reversible</span>
        </div>

        <div className="ta-rows">
          {/* the judgment call — it stopped and asked you */}
          <div className="ta-arow featured">
            <span className="ta-dot await" />
            <div className="ta-abody">
              <div className="ta-ah">Place Stark Industries on credit hold</div>
              <div className="ta-ar">
                3 missed promises, 18 days past due — over the limit you set.
                $112,400 at risk.
              </div>
            </div>
            <div className="ta-aside">
              <span className="ta-status await">needs you</span>
              <span className="ta-approve">Approve</span>
            </div>
          </div>

          {/* the routine — it just did it */}
          {POSTED.map((a) => (
            <div className="ta-arow" key={a.headline}>
              <span className="ta-dot ok" />
              <div className="ta-abody">
                <div className="ta-ah">{a.headline}</div>
                <div className="ta-ar">{a.reason}</div>
              </div>
              <div className="ta-aside">
                <span className="ta-status posted">posted</span>
              </div>
            </div>
          ))}
        </div>

        <div className="ta-foot">
          <span className="ta-foot-dot" />
          Three it ran on its own. One it stopped and brought to you.
        </div>
      </div>
    </div>
  );
}
