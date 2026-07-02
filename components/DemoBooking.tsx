"use client";

import { useState } from "react";
import { CALENDAR_EMBED_URL, LOOPS_FORM_ENDPOINT, DEMO_EMAIL } from "@/lib/conversion";

// The booking card. Three states, best available wins:
// 1. Calendar embed configured → real self-serve scheduling, zero back-and-forth.
// 2. Loops configured → email capture into the nurture loop, same-day reply.
// 3. Neither → mailto with a prefilled working-session request.

export default function DemoBooking() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
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
    if (!LOOPS_FORM_ENDPOINT) {
      window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent("Working session — " + (company || "my company"))}&body=${encodeURIComponent("We'd like to close a period live. Email: " + email)}`;
      return;
    }
    setState("sending");
    try {
      const res = await fetch(LOOPS_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, company, userGroup: "demo-request", source: "demo-page" }).toString(),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
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
            <span>Work email</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" autoComplete="email" />
          </label>
          <label className="demo-field">
            <span>Company</span>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme, Inc." autoComplete="organization" />
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
