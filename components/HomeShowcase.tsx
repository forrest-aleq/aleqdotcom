"use client";

import { useEffect } from "react";

type Modes = "manual" | "assist" | "auto";

const FOOT: Record<string, Record<Modes, string>> = {
  recon: { manual: "reconciling entry drafted", assist: "reconciling entry ready", auto: "reconciled · $0.00 variance" },
  coll: { manual: "follow-up drafted", assist: "outreach ready", auto: "called · promise captured" },
  close: { manual: "close entries drafted", assist: "close ready to seal", auto: "closed · signed" },
  ap: { manual: "$188k payment drafted", assist: "$188k payment ready", auto: "paid · on time" },
  multi: { manual: "eliminations drafted", assist: "consolidation ready", auto: "consolidated · eliminated" },
  guard: { manual: "every draft stays balanced", assist: "every entry gated & balanced", auto: "balanced · gated · reversible" },
  cxn: { manual: "synced · feeds your drafts", assist: "synced · feeds your queue", auto: "synced · feeds the ledger live" },
};

// Standing-guarantee tiles: their footer is a fixed status, not a draft → approve → post action.
const STATUS_FEATS = new Set(["guard", "cxn"]);

const MODE_COPY: Record<Modes, Record<string, string>> = {
  manual: {
    reconTitle: "Bank reconciliation · May · manual queue", reconMeta: "412 lines waiting", bookBalance: "$2,436,392.50",
    matchLine: "Matches suggested · controller still posts", matchScore: "draft", rSource: "bank line imported", rMatch: "suggested matches",
    rMatchSub: "Aleq groups the evidence; you decide.", rPost: "waiting on you", rPostSub: "No journal posts without a person.",
    varianceLabel: "open variance", variance: "$17,488.40", collTitle: "Collections queue · Haven Foods", collMeta: "manual",
    collLine: "Draft reminder for $48k invoice.", collStep1K: "your work", collStep1: "Review account history", collStep2K: "next",
    collStep2: "You call or send the reminder", collResult: "draft ready · no customer contacted", closeClock: "May close · manual",
    closeState: "waiting on controller", close1: "Subledger checklist prepared", close2: "Accrual drafts queued",
    close3: "Wire exception assigned to controller", close4: "Period stays open", closeProofK: "what Aleq did",
    closeProof: "Prepared the work; nothing posted or sealed.", belief1: "Bank reconciliation", belief1State: "you review each",
    belief2: "Vendor payments", belief2State: "you review each", apLine1: "Bill B-7731", apLine2: "coded draft", apPill: "draft",
    apLine3: "$188k wire", apLine4: "you schedule", apPill2: "manual", multiState: "draft eliminations", guardPill: "drafted",
    guard1: "Payment drafted — you send it", guard2: "Double-entry — balanced", guard3: "Nothing posts without you",
    reconStat: "suggested", learn1: "you post", learn2: "you post", learn3: "you post",
  },
  assist: {
    reconTitle: "Bank reconciliation · May · assisted", reconMeta: "2 approvals left", bookBalance: "$2,418,904.10",
    matchLine: "410 matched · 2 need your judgment", matchScore: "ready", rSource: "evidence lined up", rMatch: "410 matched",
    rMatchSub: "Aleq proposes the reconciling entry.", rPost: "approve to post", rPostSub: "One click posts with rollback.",
    varianceLabel: "pending approval", variance: "$0.00", collTitle: "Voice assist · Haven Foods", collMeta: "approval",
    collLine: "“I can call Haven and ask for Friday payment.”", collStep1K: "Aleq drafts", collStep1: "Call script and ledger context",
    collStep2K: "you approve", collStep2: "Call starts after approval", collResult: "call ready · customer not contacted yet",
    closeClock: "May close · assist", closeState: "approval gate", close1: "Subledgers tied out", close2: "Accrual entries drafted",
    close3: "Material wire held for approval", close4: "Seal period after sign-off", closeProofK: "approval packet",
    closeProof: "38 entries ready; one judgment call isolated.", belief1: "Bank reconciliation", belief1State: "almost trusted",
    belief2: "Vendor payments", belief2State: "waits for your OK", apLine1: "PO-7731", apLine2: "GR ↔ Bill", apPill: "3/3",
    apLine3: "$188k wire", apLine4: "approval gate", apPill2: "approve", multiState: "review packet", guardPill: "gated",
    guard1: "Payment waits for your OK", guard2: "Double-entry — balanced", guard3: "Posts the moment you approve",
    reconStat: "ready", learn1: "your OK", learn2: "your OK", learn3: "your OK",
  },
  auto: {
    reconTitle: "Bank reconciliation · May · autonomous", reconMeta: "412 transactions", bookBalance: "$2,418,904.10",
    matchLine: "410 auto-matched · 2 held for judgment", matchScore: "98% avg", rSource: "bank line read", rMatch: "410 matched",
    rMatchSub: "Routine lines closed continuously.", rPost: "posted with proof", rPostSub: "Reversible journal and support attached.",
    varianceLabel: "difference", variance: "$0.00", collTitle: "AR call · Haven Foods", collMeta: "04:18",
    collLine: "“Can you settle the $48k by Friday?”", collStep1K: "Aleq called", collStep1: "Used account history and tone rules",
    collStep2K: "result", collStep2: "Promise captured for Friday", collResult: "promise captured · ledger updated",
    closeClock: "May close · auto", closeState: "sealed", close1: "Subledgers tied out", close2: "Accruals and depreciation posted",
    close3: "Material wire held outside auto", close4: "Period sealed with proof", closeProofK: "receipt",
    closeProof: "Mechanical work posted; judgment work held.", belief1: "Bank reconciliation", belief1State: "trusted · runs alone",
    belief2: "Vendor payments", belief2State: "waits for your OK", apLine1: "Routine bills", apLine2: "matched + paid", apPill: "auto",
    apLine3: "$188k wire", apLine4: "held above limit", apPill2: "held", multiState: "eliminated", guardPill: "posted",
    guard1: "Routine payment — sent", guard2: "Double-entry — balanced", guard3: "Posted — reversible anytime",
    reconStat: "matched", learn1: "runs alone", learn2: "runs alone", learn3: "asks first",
  },
};

const MODE_METERS: Record<Modes, Record<string, string>> = {
  manual: { belief1: "42%", belief2: "28%" },
  assist: { belief1: "78%", belief2: "64%" },
  auto: { belief1: "91%", belief2: "64%" },
};

// "It earns the right to act" pills, per mode: [label, color-class]
// manual = you do it all · assist = Aleq proposes, you OK · auto = proven runs alone, risky asks, judgment stays you
const MODE_EARNED: Record<Modes, [string, string][]> = {
  manual: [["you post", "manual"], ["you post", "manual"], ["you post", "manual"], ["you only", "manual"]],
  assist: [["your OK", "asks"], ["your OK", "asks"], ["your OK", "asks"], ["you only", "manual"]],
  auto: [["runs alone", "auto"], ["runs alone", "auto"], ["asks first", "asks"], ["you only", "manual"]],
};

export default function HomeShowcase() {
  useEffect(() => {
    const bento = document.querySelector(".bento2") as HTMLElement | null;
    const bModes = document.querySelector(".bento-modes") as HTMLElement | null;
    if (!bento || !bModes) return;
    const tiles = Array.from(document.querySelectorAll<HTMLElement>(".bx[data-feat]"));
    let timers: ReturnType<typeof setTimeout>[] = [];
    const clear = () => { timers.forEach(clearTimeout); timers = []; };

    const renderFoot = (foot: HTMLElement, html: string) => {
      foot.innerHTML = html; foot.classList.remove("bf-in"); void foot.offsetWidth; foot.classList.add("bf-in");
    };

    const applyModeCopy = (mode: Modes) => {
      const copy = MODE_COPY[mode];
      document.querySelectorAll<HTMLElement>("[data-mode-copy]").forEach((el) => {
        const v = copy[el.dataset.modeCopy as string];
        if (v != null) el.textContent = v;
      });
      document.querySelectorAll<HTMLElement>("[data-mode-meter]").forEach((el) => {
        const v = MODE_METERS[mode][el.dataset.modeMeter as string];
        if (v) { el.style.setProperty("--w", v); el.style.width = v; }
      });
      const boxes = Array.from(document.querySelectorAll<HTMLElement>('[data-feat="close"] .ck-box'));
      const states = { manual: ["draft", "draft", "hold", "open"], assist: ["on", "draft", "hold", "open"], auto: ["on", "on", "hold", "on"] }[mode];
      boxes.forEach((box, i) => { box.className = "ck-box"; if (states[i]) box.classList.add(states[i]); box.textContent = states[i] === "on" ? "✓" : ""; });
      // "It earns the right to act" — pills graduate as you grant more autonomy
      const pills = Array.from(document.querySelectorAll<HTMLElement>(".learned-mini .lm-tag"));
      const earned = MODE_EARNED[mode];
      pills.forEach((pill, i) => { if (earned[i]) { pill.className = "lm-tag " + earned[i][1]; pill.textContent = earned[i][0]; } });
    };

    const setMode = (mode: Modes, animate: boolean) => {
      clear();
      bento.setAttribute("data-mode", mode);
      applyModeCopy(mode);
      bModes.querySelectorAll<HTMLElement>(".bm").forEach((x) => x.classList.toggle("on", x.dataset.mode === mode));
      tiles.forEach((tile, idx) => {
        const foot = tile.querySelector<HTMLElement>("[data-foot]");
        if (!foot) return;
        const feat = tile.dataset.feat as string;
        const txt = FOOT[feat][mode];
        const wait = animate ? idx * 120 : 0;
        if (STATUS_FEATS.has(feat)) {
          timers.push(setTimeout(() => renderFoot(foot, `<span class="bf-dot bf-done"></span><span class="bf-txt">${txt}</span>`), wait));
        } else if (mode === "manual") {
          timers.push(setTimeout(() => renderFoot(foot, `<span class="bf-dot bf-draft"></span><span class="bf-txt">${txt} — <b>you post it</b></span>`), wait));
        } else if (mode === "assist") {
          timers.push(setTimeout(() => {
            renderFoot(foot, `<span class="bf-dot bf-pending"></span><span class="bf-txt">${txt}</span><span class="bf-approve" role="button" tabindex="0">Approve →</span>`);
            const ap = foot.querySelector<HTMLElement>(".bf-approve");
            const post = (ev: Event) => { ev.preventDefault(); ev.stopPropagation(); renderFoot(foot, `<span class="bf-dot bf-done"></span><span class="bf-txt"><span class="bf-posted">✓ posted</span></span>`); };
            ap?.addEventListener("click", post);
            ap?.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") post(ev); });
          }, wait));
        } else {
          timers.push(setTimeout(() => {
            renderFoot(foot, `<span class="bf-run"></span><span class="bf-txt">running…</span>`);
            timers.push(setTimeout(() => renderFoot(foot, `<span class="bf-dot bf-done"></span><span class="bf-txt"><span class="bf-posted">✓ ${txt}</span></span>`), 640));
          }, wait));
        }
        if (animate) { tile.classList.remove("is-live"); void tile.offsetWidth; tile.classList.add("is-live"); }
      });
    };

    const onClick = (e: Event) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>(".bm");
      if (b) setMode(b.dataset.mode as Modes, true);
    };
    bModes.addEventListener("click", onClick);
    setMode("auto", true);

    return () => { clear(); bModes.removeEventListener("click", onClick); };
  }, []);

  return null;
}
