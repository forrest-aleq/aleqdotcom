import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Aleq — Live close on the call",
  description:
    "No demo theatre. We close last month live, on the call. You walk away with a number. 30-minute slot. Be ready to share view-only QBO / NetSuite access.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container-tight">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>talk to aleq</div>
          <h1 className="h1">No SDR. No demo theatre. <br /><span style={{ color: "var(--primary)", fontStyle: "italic" }}>A live close on the call.</span></h1>
          <p className="lead" style={{ marginTop: "18px" }}>
            30 minutes. We close last month on your real books, while you watch.
            You walk away with a number — what Aleq saved you, what it would cost going forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid reveal">
            <div>
              <h2 className="h2" style={{ marginBottom: "24px" }}>Book a slot.</h2>

              <form id="contact-form" data-contact>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Founder" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" required placeholder="jane@yourcompany.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" required placeholder="Your Company, Inc." />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Your role</label>
                  <select id="role" name="role" defaultValue="CEO / Founder">
                    <option>CEO / Founder</option>
                    <option>CFO / VP Finance</option>
                    <option>Controller</option>
                    <option>Accountant / Senior</option>
                    <option>Investor</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="size">Annual revenue</label>
                  <select id="size" name="size" defaultValue="Pre-revenue">
                    <option>Pre-revenue</option>
                    <option>$1–5M</option>
                    <option>$5–25M</option>
                    <option>$25–100M</option>
                    <option>$100M+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="stack">Current stack</label>
                  <input id="stack" name="stack" type="text" placeholder="QBO, NetSuite, Puzzle, Digits, Rillet, Campfire…" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Anything else?</label>
                  <textarea id="message" name="message" placeholder="What's frustrating about your current finance ops?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>Talk to Aleq →</button>
                <p style={{ fontSize: "12px", color: "var(--fg-faint)", marginTop: "12px", textAlign: "center" }}>
                  We respond within 90 minutes during business hours.
                </p>
              </form>

              <div id="thanks" style={{ display: "none", padding: "32px", background: "color-mix(in oklch, var(--positive) 8%, transparent)", border: "1px solid color-mix(in oklch, var(--positive) 28%, transparent)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 500, marginBottom: "8px", color: "var(--positive)" }}>Got it.</div>
                <p style={{ color: "var(--fg-muted)", fontSize: "14px" }}>We&apos;ll reach out within 90 minutes with a calendar link. If it&apos;s urgent, ping <a href="mailto:hello@aleq.com" style={{ color: "var(--primary)" }}>hello@aleq.com</a>.</p>
              </div>
            </div>

            <div className="what-to-expect">
              <h3>What the call looks like</h3>
              <ol>
                <li>You connect view-only access to your bank + accounting system. (5 min)</li>
                <li>Aleq pulls your books and runs last month&apos;s close. Live. While you watch. (~6 min wall-clock for most $5–50M companies — you&apos;ll see the timestamps.)</li>
                <li>We compare what Aleq did to what your team did, line by line. Discrepancies have explanations.</li>
                <li>You see the labor math: human cost vs. Aleq cost on those exact tasks.</li>
                <li>If you want to keep going, we kick off a 48-hour migration. If not, we delete the access tokens and you walk.</li>
              </ol>

              <hr style={{ margin: "24px 0", border: 0, borderTop: "1px solid var(--border)" }} />

              <p style={{ fontSize: "13.5px", color: "var(--fg-muted)", lineHeight: 1.55 }}>
                <strong style={{ color: "var(--fg)" }}>No deck.</strong> We don&apos;t have one. We don&apos;t think you have time for it.
              </p>
              <p style={{ fontSize: "13.5px", color: "var(--fg-muted)", lineHeight: 1.55, marginTop: "8px" }}>
                <strong style={{ color: "var(--fg)" }}>No SDR.</strong> The first call is with a founder. The second is with the engineer who&apos;d run your migration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
