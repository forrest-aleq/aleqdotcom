import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFO — the best first job in accounting",
  description:
    "AFOs are the non-code technical elite of the accounting profession — the people who decide whether a company's numbers are true. We pay them like it.",
  // Unlisted: reachable by URL, kept out of the site's nav and search index.
  robots: { index: false, follow: false },
};

const OFFER: [string, string, string][] = [
  ["01", "Base from $120,000", "Positioned well above a traditional entry-level seat — because the work is judgment, not data entry."],
  ["02", "Real equity", "Ownership in the company you help build. Not a perk. A stake."],
  ["03", "Your CPA, paid", "Exam fees, review courses, licensing, and eligible coursework — covered."],
  ["04", "Protected study time", "Real, defended hours to prepare. Not your nights and weekends."],
  ["05", "Field, handled", "Travel, housing, and equipment covered, without expense-report theater."],
  ["06", "Senior CPAs on call", "Standing access to licensed CPAs from the best firms in the country."],
];

const ROLE: [string, string][] = [
  ["You own the close, and your name is on it.", "You review every reconciliation, classification, and entry the system proposes — and you are personally accountable for whether it is right. There is no anonymous workpaper to hide inside."],
  ["You decide with incomplete evidence.", "Real companies are messy. You find what's missing, weigh what contradicts, and make a call you can defend — not a guess you can quietly walk back next week."],
  ["You hold the line on standards.", "Every conclusion rests on a basis: the applicable standard, the evidence, the reasoning. “I think so” is not an answer here, and it will not survive review."],
  ["You turn the mess into a rule.", "Solving an exception once is not the work. Converting it into something the system and the next AFO can reuse is. You are an author of its accounting intelligence, not a user of it."],
  ["You escalate what should be escalated.", "The highest-risk technical judgments go up to the licensed CPA accountable for your work. Knowing exactly where that line sits is part of the craft."],
];

const RIGOR: [string, string][] = [
  ["Reviewed by a licensed CPA, on a cadence.", "Your work is examined and evaluated by a CPA who is accountable for it — regularly, not a signature rubber-stamped at the end of two years. Deficiencies are named in writing and sent back to you."],
  ["Held to professional standards.", "You apply real accounting standards to real transactions and defend the treatment. The bar is the same one a regulator, auditor, or acquirer would hold you to. We do not lower it because you are early."],
  ["Measured on judgment, not volume.", "There is no stack of busywork to disappear into. The system does the volume; what is left is the hard part — and the hard part is the only thing anyone evaluates you on."],
  ["Documented as it happens.", "The work you personally performed, the judgment you exercised, the evidence you reviewed, the standards you applied — all recorded, because it has to hold up to a state board, not just to us."],
  ["Expected to be wrong, and corrected.", "Being caught, named, and remediated is the mechanism — not a failure. You are here to be forged, not flattered. People who need to already be right do not last."],
  ["Exposed at a pace a firm cannot match.", "More companies, more industries, more close failures, more genuine ambiguity in two years than a traditional seat puts in front of you in five — because the work that used to slow you down is gone."],
];

const LEDGER: [string, string, string][] = [
  ["Starting base", "Typically $60–75k", "$120,000+"],
  ["The work", "Repetitive prep, under layers of review", "Real judgment on real companies, early"],
  ["The CPA", "Your private burden, on your own time", "Paid for, with protected study time"],
  ["What you see", "One client, one slice, for years", "Many companies, many industries, fast"],
  ["Your instrument", "Spreadsheets and legacy software", "The most advanced accounting system being built"],
  ["Real responsibility", "Years away", "The reason you're hired"],
  ["The ceiling", "A coin-flip at partner, a decade out", "Mastery with no fixed ceiling — and equity"],
];

const WHO_YES = [
  "You studied accounting because you're good with numbers and you want it to matter.",
  "You'd rather make a defensible call from incomplete evidence than wait to be told the answer.",
  "You can sit across from a CFO and hold the room.",
  "You'll disagree with the system when it's wrong — and explain exactly why.",
  "You'll travel and work inside companies you've never seen before.",
];

const WHO_NO = [
  "You want one desk, one client, and a fixed script.",
  "You'd rather not be the person accountable for the answer.",
  "You treat the CPA as a box to check, not a craft to master.",
  "You want the brand on your résumé more than the work in your hands.",
];

const AFO_CSS = `
.afo-card { display:flex; flex-direction:column; gap:8px; }
.afo-card .prin-t { margin:0; }
.afo-card .afo-d { font-size:15px; color:var(--fg-muted); line-height:1.55; margin:0; }
.afo-num { font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; color:var(--primary); font-weight:600; }
.afo-list { list-style:none; margin:6px 0 0; padding:0; }
.afo-list li { position:relative; padding:11px 0 11px 22px; border-top:1px solid var(--border-2); font-size:15px; color:var(--fg-muted); line-height:1.45; }
.afo-list li:first-child { border-top:0; }
.afo-yes li::before { content:"+"; position:absolute; left:0; top:11px; color:var(--primary); font-family:var(--font-mono); font-weight:600; }
.afo-no li::before { content:"\\2013"; position:absolute; left:0; top:11px; color:var(--fg-faint); font-family:var(--font-mono); font-weight:600; }
.afo-no { background:var(--bg-soft); }
.afo-hard { font-family:var(--font-serif); font-weight:600; font-size:clamp(22px,3.4vw,30px); line-height:1.2; letter-spacing:-.01em; color:var(--fg); margin:34px 0 0; padding-left:20px; border-left:3px solid var(--primary); }
.afo-pathnote .eyebrow { display:block; margin-bottom:10px; }
.afo-pathnote p { margin:0; font-size:16px; color:var(--fg); line-height:1.6; }
.afo-close .l1 { font-family:var(--font-serif); font-weight:600; font-size:clamp(20px,3vw,26px); letter-spacing:-.01em; line-height:1.25; margin-bottom:12px; }
.afo-close .l2 { font-size:15px; color:var(--fg-muted); line-height:1.6; max-width:54ch; }
.afo-close .l3 { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--fg-faint); margin-top:18px; }
`;

export default function Page() {
  return (
    <>
      <style>{AFO_CSS}</style>

      {/* hero */}
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>Now selecting the first AFOs</div>
          <h1 className="h1">
            Nobody built the best first job in accounting.{" "}
            <span style={{ fontStyle: "italic", color: "var(--primary)" }}>So we did.</span>
          </h1>
          <p className="lead" style={{ marginTop: "18px", maxWidth: "40ch" }}>
            AFOs are the <strong style={{ color: "var(--fg)" }}>non-code technical elite</strong> of the accounting profession — the people who decide whether a company&apos;s numbers are true. We pay them like it.
          </p>
          <div className="actions" style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <a className="btn btn-primary btn-lg" href="#apply">Apply to be an AFO</a>
            <a className="btn btn-lg" href="#who">See if it&apos;s you</a>
            <span className="eyebrow" style={{ color: "var(--fg-faint)" }}>Pre-CPA · CPA-track · field-deployed</span>
          </div>
        </div>
      </section>

      {/* premise */}
      <section className="section">
        <div className="container-tight">
          <div className="eyebrow reveal" style={{ marginBottom: "18px" }}>the premise</div>
          <p className="lead reveal" style={{ fontSize: "clamp(19px,2.6vw,24px)", color: "var(--fg)", lineHeight: 1.5, marginBottom: "22px" }}>
            For twenty years, the technology industry decided &ldquo;elite technical talent&rdquo; meant the people who write code. It was wrong.
          </p>
          <p className="lead reveal" style={{ marginBottom: "18px" }}>
            Every serious company runs on people who determine what economically happened, what it owns and owes, whether its revenue is real, and whether an auditor, lender, or investor can trust it. <strong style={{ color: "var(--fg)" }}>That work is technical</strong> — even when no code is written. The profession just never built a job that treated it that way: low pay up front, repetitive work, and a license handed to you as your own private burden.
          </p>
          <p className="lead reveal">
            We changed the economics underneath it. The system does the volume; you do the judgment — and we pay for scarcity, judgment, and trust instead of marking up your hours.
          </p>
        </div>
      </section>

      {/* the two ledgers */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">the two ledgers</div>
            <h2 className="h2">Run the comparison yourself.</h2>
          </div>
          <div className="cmpx reveal">
            <div className="cmpx-head">
              <div className="cmpx-dim" />
              <div className="cmpx-col">
                <small style={{ display: "block", fontWeight: 400, color: "var(--fg-faint)", letterSpacing: ".04em" }}>KPMG · Deloitte · PwC · EY</small>
                The Big Four A1
              </div>
              <div className="cmpx-col cmpx-aleq">
                <small style={{ display: "block", fontWeight: 400, opacity: 0.75 }}>What we built</small>
                The AFO
              </div>
            </div>
            {LEDGER.map(([dim, them, neu]) => (
              <div className="cmpx-row" key={dim}>
                <div className="cmpx-dim">{dim}</div>
                <div className="cmpx-cell">{them}</div>
                <div className="cmpx-cell cmpx-aleq">{neu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the role */}
      <section className="section">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "18px" }}>the role</div>
          <h2 className="h2" style={{ marginBottom: "16px" }}>What an AFO actually does.</h2>
          <p className="lead" style={{ marginBottom: "28px" }}>
            You stand directly behind Aleq — the accounting system that handles the routine work — and you own everything it can&apos;t: the ambiguity, the exceptions, the context, the accountable judgment. You deploy into real companies and make defensible calls from incomplete evidence.
          </p>
          <div className="grid-2 reveal">
            {ROLE.map(([h, d]) => (
              <div className="card afo-card" key={h}>
                <h3 className="prin-t">{h}</h3>
                <p className="afo-d">{d}</p>
              </div>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "26px" }}>
            The role is technical because the work is technical — not because you write code. And none of it is handed to you gently.
          </p>
        </div>
      </section>

      {/* the rigor */}
      <section className="section alt">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "18px" }}>the rigor</div>
          <h2 className="h2" style={{ marginBottom: "16px" }}>This is not a soft landing.</h2>
          <p className="lead" style={{ marginBottom: "28px" }}>
            It is the most demanding accounting apprenticeship we know how to build, and that is exactly the value. You are not here to be comfortable. You are here to become someone a serious company would trust with its numbers — which means being held, from the start, to a standard most juniors do not meet for years.
          </p>
          <div className="grid-2 reveal">
            {RIGOR.map(([h, d], i) => (
              <div className="card afo-card" key={h}>
                <span className="afo-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="prin-t">{h}</h3>
                <p className="afo-d">{d}</p>
              </div>
            ))}
          </div>
          <div className="afo-hard">
            AI does not make this easier. It makes it harder — it strips out the work a weaker junior could hide behind and leaves you alone with the judgment.
          </div>
        </div>
      </section>

      {/* the offer */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">the offer</div>
            <h2 className="h2">An offer you should have to explain saying no to.</h2>
          </div>
          <div className="grid-3 reveal">
            {OFFER.map(([n, t, d]) => (
              <div className="card afo-card" key={n}>
                <span className="afo-num">{n}</span>
                <h3 className="prin-t">{t}</h3>
                <p className="afo-d">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the CPA / path */}
      <section className="section alt">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "18px" }}>the CPA</div>
          <h2 className="h2" style={{ marginBottom: "16px" }}>A real path to the license. Not a slogan.</h2>
          <p className="lead" style={{ marginBottom: "24px" }}>
            Your qualifying experience is supervised by licensed CPAs and documented as it happens, while you do work that&apos;s actually worth documenting. The exact path depends on your state — so we map it with you, in writing, before you start.
          </p>
          <div className="card afo-pathnote reveal">
            <span className="eyebrow">What we won&apos;t pretend</span>
            <p>
              There is no single national clock and no guaranteed timeline. What there <strong>is</strong>: real supervised experience, a senior CPA accountable for your work, and a documented, jurisdiction-specific route to the license — handed to you before you accept, not promised after.
            </p>
          </div>
        </div>
      </section>

      {/* who / the fit */}
      <section className="section" id="who">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">the fit</div>
            <h2 className="h2">Who this is for.</h2>
          </div>
          <div className="grid-2 reveal">
            <div className="card">
              <h4 className="eyebrow" style={{ marginBottom: "14px" }}>This is you</h4>
              <ul className="afo-list afo-yes">
                {WHO_YES.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="card afo-no">
              <h4 className="eyebrow" style={{ marginBottom: "14px", color: "var(--fg-faint)" }}>This isn&apos;t</h4>
              <ul className="afo-list afo-no">
                {WHO_NO.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="afo-hard">
            This is one of the hardest accounting jobs in the country to get. That&apos;s the point.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pp-cta" id="apply">
        <div className="pp-narrow">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>Applications open · reviewed personally</div>
          <h2>
            The first AFOs are being{" "}
            <span style={{ fontStyle: "italic", color: "var(--primary)" }}>chosen now.</span>
          </h2>
          <p>
            Tell us who you are, what you&apos;ve worked on, and where you want your license. If the work is yours to do, we&apos;ll know quickly.
          </p>
          <div className="pp-actions" style={{ alignItems: "center" }}>
            <a className="btn btn-primary btn-lg" href="mailto:forrest@aleq.com?subject=AFO%20application">Begin your application</a>
            <span className="eyebrow" style={{ color: "var(--fg-faint)" }}>No portals. No black holes. A real person reads it.</span>
          </div>
        </div>
      </section>

      {/* closing statement */}
      <section className="section afo-close">
        <div className="container-tight">
          <div className="l1">We train the accountants companies hire to run the future of accounting.</div>
          <div className="l2">
            The smartest technical people in a company don&apos;t all write code. Some are responsible for whether the numbers are true. We built the job that finally treats that as elite work.
          </div>
          <div className="l3">AFO · Field role · San Diego, to start</div>
        </div>
      </section>
    </>
  );
}
