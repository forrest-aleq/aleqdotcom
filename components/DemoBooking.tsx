"use client";

import { useState } from "react";
import { CALENDAR_EMBED_URL, LOOPS_FORM_ENDPOINT, DEMO_EMAIL } from "@/lib/conversion";

// Fire a conversion event into whatever analytics is live (PostHog + GA4,
// both env-gated in components/Analytics.tsx). No-ops when neither is loaded.
function track(event: string, props: Record<string, string> = {}) {
  const w = window as unknown as {
    posthog?: { capture: (e: string, p?: object) => void };
    gtag?: (...args: unknown[]) => void;
  };
  w.posthog?.capture(event, props);
  w.gtag?.("event", event, props);
}

// The booking card. Three states, best available wins:
// 1. Calendar embed configured → real self-serve scheduling, zero back-and-forth.
// 2. Loops configured → email capture into the nurture loop, same-day reply.
// 3. Neither → mailto with a prefilled working-session request.

export default function DemoBooking() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [software, setSoftware] = useState("");
  const [size, setSize] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  if (CALENDAR_EMBED_URL) {
    return (
      <div className="demo-card" id="book">
        <div className="demo-card-head">
          <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
          Pick a time — 30 minutes
        </div>
        <iframe
          src={CALENDAR_EMBED_URL}
          className="demo-calendar"
          title="Book a working session"
          loading="lazy"
        />
        <p className="demo-fine">Prefer email? <a href={`mailto:${DEMO_EMAIL}`}>{DEMO_EMAIL}</a> — we reply same day.</p>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // tie the anonymous session to a person the moment they self-identify
    (window as unknown as { posthog?: { identify: (id: string, p?: object) => void } }).posthog?.identify(email, { company, software, size });
    track("demo_request_submitted", { software, size, method: LOOPS_FORM_ENDPOINT ? "loops" : "mailto" });
    if (!LOOPS_FORM_ENDPOINT) {
      window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent("Working session — " + (company || "my company"))}&body=${encodeURIComponent(`We'd like to close a period live.\n\nName: ${firstName}\nEmail: ${email}\nRunning today: ${software}\nTeam size: ${size}`)}`;
      return;
    }
    setState("sending");
    try {
      const res = await fetch(LOOPS_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, firstName, company, software, size, userGroup: "demo-request", source: "demo-page" }).toString(),
      });
      setState(res.ok ? "done" : "error");
      track(res.ok ? "demo_request_confirmed" : "demo_request_error", { software, size });
    } catch {
      setState("error");
      track("demo_request_error", { software, size });
    }
  }

  return (
    <div className="demo-card" id="book">
      <div className="demo-card-head">
        <svg className="pp-card-mark" viewBox="0 0 48 48"><use href="#aleq-mark" /></svg>
        Book your working session
      </div>
      {state === "done" ? (
        <div className="demo-done">
          <b>You&apos;re in.</b>
          <p>We reply the same day with times. Have an unsigned period in mind — that&apos;s the one we&apos;ll close.</p>
        </div>
      ) : (
        <form className="demo-fields" onSubmit={submit}>
          <label className="demo-field">
            <span>First name</span>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Sarah" autoComplete="given-name" />
          </label>
          <label className="demo-field">
            <span>Work email</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" autoComplete="email" />
          </label>
          <label className="demo-field">
            <span>Company</span>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme, Inc." autoComplete="organization" />
          </label>
          <label className="demo-field">
            <span>What you run today <em>— so we prep the right close</em></span>
            <select value={software} onChange={(e) => setSoftware(e.target.value)}>
              <option value="" disabled>Select one</option>
              <option>QuickBooks</option>
              <option>NetSuite</option>
              <option>Sage Intacct</option>
              <option>Xero</option>
              <option>Spreadsheets</option>
              <option>Other</option>
            </select>
          </label>
          <label className="demo-field">
            <span>Team size</span>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="" disabled>Select one</option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary btn-lg demo-submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Get times — same day"}
          </button>
          {state === "error" && <p className="demo-fine demo-err">That didn&apos;t send — email us directly at <a href={`mailto:${DEMO_EMAIL}`}>{DEMO_EMAIL}</a>.</p>}
          {state !== "error" && <p className="demo-fine">No sequence, no SDR. One reply with times, from a person.</p>}
        </form>
      )}
    </div>
  );
}
