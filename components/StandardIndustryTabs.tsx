// Industry tabs for standards pages. Static markup that conforms to the
// site-wide tab engine (lib/animations.js · installTabs) — it wires clicks by
// matching data-tab on .tb to data-tab on .tab-panel. First tab is pre-selected.

type Row = { acct: string; sub?: string; val: string; neg?: boolean };

export type IndustryTab = {
  id: string;
  label: string;
  sub: string;
  eyebrow: string;
  h: string;
  p: string;
  points: { b: string; t: string }[];
  card: {
    head: string;
    rows: Row[];
    footK: string;
    footV?: string;
    ok?: string;
  };
  /** Set when this case isn't built yet — shows an honest "not yet supported"
   *  badge instead of implying it's live, rather than omitting the gap. */
  unsupported?: boolean;
};

export default function StandardIndustryTabs({
  eyebrow,
  heading,
  sub,
  tabs,
}: {
  eyebrow: string;
  heading: string;
  sub: string;
  tabs: IndustryTab[];
}) {
  return (
    <section className="pp-section">
      <div className="pp-wrap">
        <div
          className="pp-narrow"
          style={{ textAlign: "center", marginBottom: "40px", padding: 0 }}
        >
          <div className="pp-eyebrow" style={{ display: "inline-block" }}>
            {eyebrow}
          </div>
          <h2 className="pp-h">{heading}</h2>
          <p className="pp-sub" style={{ margin: "18px auto 0" }}>
            {sub}
          </p>
        </div>

        <div className="tabs ind-tabs reveal">
          <div
            className="tabs-nav"
            role="tablist"
            style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
          >
            {tabs.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                data-tab={t.id}
                className={"tb" + (i === 0 ? " on" : "")}
              >
                <span className="tb-h">{t.label}</span>
                <span className="tb-s">{t.sub}</span>
              </button>
            ))}
          </div>

          <div className="tabs-stage">
            {tabs.map((t, i) => (
              <div
                key={t.id}
                role="tabpanel"
                data-tab={t.id}
                className={"tab-panel" + (i === 0 ? " is-on" : "")}
              >
                <div className="tp-text">
                  <div className="tp-eb">{t.eyebrow}</div>
                  <h3 className="tp-h">{t.h}</h3>
                  <p className="tp-p">{t.p}</p>
                  <ul className="tp-list">
                    {t.points.map((pt, j) => (
                      <li key={j}>
                        <b>{pt.b}</b> {pt.t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tp-visual bare">
                  <div className={"pp-card" + (t.unsupported ? " pp-card-unsupported" : "")}>
                    <div className="pp-card-head">
                      <svg className="pp-card-mark" viewBox="0 0 48 48">
                        <use href="#aleq-mark" />
                      </svg>
                      {t.card.head}
                      {t.unsupported ? (
                        <span className="pp-unsupported">not yet supported</span>
                      ) : (
                        <span className="pp-live">
                          <i />
                          derived
                        </span>
                      )}
                    </div>
                    <div className="pp-tb">
                      {t.card.rows.map((r, j) => (
                        <div className="pp-tb-row" key={j}>
                          <span className={"pp-tb-acct" + (r.neg ? " neg" : "")}>
                            {r.sub ? <small>{r.sub}</small> : null}
                            {r.acct}
                          </span>
                          <span className={"pp-num" + (r.neg ? " neg" : "")}>
                            {r.val}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pp-tb-foot">
                      <span className="pp-tb-k">{t.card.footK}</span>
                      {t.card.ok ? (
                        <span className="pp-ok">{t.card.ok}</span>
                      ) : (
                        <span
                          className="pp-num"
                          style={{ fontSize: "16px", fontWeight: 600 }}
                        >
                          {t.card.footV}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
