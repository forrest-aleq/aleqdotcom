// Aleq site — animations.
//
//   installGlassBox() · drives the OPR lifecycle inspector: steps an action
//                       through 11 stages, fills the decision meters, hits the
//                       approval gate, runs a 30s undo countdown (accelerated),
//                       then loops. Motion IS the demo.
//   installBento()    · scroll-reveal for the outcome tiles.
//   installPacks()    · scenario-pack filter chips (visual select).
//   installReveal()   · fades elements in on scroll.

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ── Glass box: plain-English "watch it work" demo ────────────
export function installGlassBox() {
  const con = document.querySelector(".gb-console");
  if (!con) return;

  const stages = Array.from(con.querySelectorAll(".lc"));
  const conf = con.querySelector(".gb-conf .mtr") || con.querySelector(".gb-conf");
  const verdict = con.querySelector(".gb-verdict-pill");
  const undo = con.querySelector(".gb-undo");
  if (!stages.length || !conf || !verdict || !undo) return;
  const GATE = 4;  // decides & gets sign-off
  const WORK = 5;  // does the work
  const LAST = stages.length; // proves it

  let timers = [];
  let undoTimer = null;
  const wait = (ms) => new Promise((r) => timers.push(setTimeout(r, ms)));
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; clearInterval(undoTimer); undoTimer = null; };

  function setVerdict(text, approved) {
    verdict.textContent = text;
    verdict.classList.toggle("is-approved", !!approved);
  }

  function reset() {
    clearAll();
    stages.forEach((s) => s.classList.remove("is-done", "is-active"));
    const bar = conf.querySelector("i");
    bar.style.transition = "none";
    bar.style.width = "0";
    void bar.offsetWidth;
    bar.style.transition = "";
    conf.querySelector(".mtr-v").textContent = "—";
    undo.textContent = "";
    setVerdict("working…", false);
  }

  function fillConfidence() {
    conf.querySelector("i").style.width = "96%";
    const vEl = conf.querySelector(".mtr-v");
    const start = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - start) / 900);
      vEl.textContent = Math.round(96 * k) + "%";
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function undoCountdown(from) {
    let s = from;
    undo.textContent = `you can undo · ${s}s`;
    undoTimer = setInterval(() => {
      s -= 1;
      if (s <= 0) { clearInterval(undoTimer); undo.textContent = "signed · sealed to the audit log"; }
      else undo.textContent = `you can undo · ${s}s`;
    }, 200); // accelerated from the real 30s
  }

  async function run() {
    reset();
    for (let i = 1; i <= LAST; i++) {
      const el = stages.find((s) => s.dataset.lc === String(i));
      if (!el) continue;
      el.classList.add("is-active");

      if (i === GATE) {
        fillConfidence();
        await wait(1300);
        setVerdict("cleared to post", true);
        await wait(500);
      } else if (i === WORK) {
        setVerdict("posting…", false);
        undoCountdown(30);
        await wait(750);
      } else if (i === LAST) {
        setVerdict("posted · signed", true);
        await wait(700);
      } else {
        await wait(620);
      }
      el.classList.remove("is-active");
      el.classList.add("is-done");
    }
    await wait(3600); // sit on the finished state
    run();           // loop
  }

  if (prefersReduced) {
    // Respect reduced motion: show the finished, signed state — no looping.
    stages.forEach((s) => s.classList.add("is-done"));
    conf.querySelector("i").style.width = "96%";
    conf.querySelector(".mtr-v").textContent = "96%";
    setVerdict("posted · signed", true);
    undo.textContent = "signed · sealed to the audit log";
    return;
  }

  // Animate while visible; pause and reset when scrolled away.
  if ("IntersectionObserver" in window) {
    let running = false;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !running) { running = true; run(); }
        else if (!e.isIntersecting && running) { running = false; clearAll(); }
      }
    }, { threshold: 0.2 });
    io.observe(con);
  } else {
    run();
  }
}

// ── The work: reconciliation hero settles to $0.00 ──────────
export function installWork() {
  const hero = document.querySelector(".bt-hero");
  if (!hero) return;
  const rows = Array.from(hero.querySelectorAll(".led"));
  const varEl = hero.querySelector(".var");

  const settle = () => {
    if (varEl) {
      const start = performance.now();
      const from = 1284.4;
      const tick = (t) => {
        const k = Math.min(1, (t - start) / 1300);
        varEl.textContent = "$" + (from * (1 - k)).toFixed(2);
        if (k < 1) requestAnimationFrame(tick);
        else varEl.textContent = "$0.00";
      };
      requestAnimationFrame(tick);
    }
    rows.forEach((r, i) => setTimeout(() => r.classList.add("is-matched"), 180 * i));
  };

  if (prefersReduced) {
    rows.forEach((r) => r.classList.add("is-matched"));
    if (varEl) varEl.textContent = "$0.00";
    return;
  }
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { settle(); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(hero);
  } else settle();
}

// ── Operating-memory demos: judgment → belief → action → proof ──
export function installOpRuns() {
  const runs = Array.from(document.querySelectorAll("[data-op-run]"));
  if (!runs.length) return;

  const ensureCursor = (run) => {
    const rail = run.querySelector(".op-rail");
    if (!rail) return null;
    let cursor = rail.querySelector(".op-cursor");
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "op-cursor";
      cursor.innerHTML = "<span>learning</span>";
      rail.appendChild(cursor);
    }
    return cursor;
  };

  const moveCursor = (run, stage) => {
    const cursor = ensureCursor(run);
    const rail = run.querySelector(".op-rail");
    if (!cursor || !rail || !stage) return;
    const y = stage.offsetTop + Math.max(2, stage.offsetHeight / 2 - 14);
    run.style.setProperty("--op-cursor-y", `${Math.round(y)}px`);
    const label = stage.querySelector("b")?.textContent || stage.dataset.status || "working";
    cursor.querySelector("span").textContent = label;
  };

  const complete = (run) => {
    run.classList.add("is-complete");
    const allStages = Array.from(run.querySelectorAll(".op-stage"));
    allStages.forEach((s) => s.classList.add("is-done"));
    allStages[allStages.length - 1]?.classList.add("is-final");
    run.querySelectorAll(".op-meter-line i").forEach((bar) => {
      bar.style.width = bar.closest(".op-meter")?.dataset.value || "96%";
    });
    run.querySelectorAll(".op-proof-row").forEach((row) => row.classList.add("is-on"));
    run.querySelectorAll(".op-packet, .op-memory, .op-proof").forEach((el) => el.classList.add("is-live"));
    run.querySelectorAll("[data-op-status]").forEach((el) => {
      el.textContent = el.dataset.opFinal || "proof attached";
    });
    const mode = run.querySelector(".op-mode");
    if (mode && run.dataset.opFinalMode) mode.textContent = run.dataset.opFinalMode;
    if (allStages.length) moveCursor(run, allStages[allStages.length - 1]);
    run.classList.remove("is-running");
  };

  const start = (run) => {
    if (run.dataset.started === "true") return;
    run.dataset.started = "true";
    const stages = Array.from(run.querySelectorAll(".op-stage"));
    const meters = Array.from(run.querySelectorAll(".op-meter"));
    const proof = Array.from(run.querySelectorAll(".op-proof-row"));
    const status = run.querySelector("[data-op-status]");
    const packet = run.querySelector(".op-packet");
    const memory = run.querySelector(".op-memory");
    const proofBox = run.querySelector(".op-proof");

    ensureCursor(run);

    if (prefersReduced) {
      complete(run);
      return;
    }

    run.classList.add("is-running");
    stages.forEach((stage, index) => {
      setTimeout(() => {
        moveCursor(run, stage);
        run.dataset.opPhase = String(index + 1);
        stage.classList.add("is-active");
        if (status && stage.dataset.status) status.textContent = stage.dataset.status;
        if (index === 0) packet?.classList.add("is-live");
        if (index === Math.max(1, Math.floor(stages.length / 2))) memory?.classList.add("is-live");
        if (index >= stages.length - 1) proofBox?.classList.add("is-live");
        setTimeout(() => {
          stage.classList.remove("is-active");
          stage.classList.add("is-done");
        }, 520);
      }, index * 650);
    });

    meters.forEach((meter, index) => {
      setTimeout(() => {
        const bar = meter.querySelector(".op-meter-line i");
        if (bar) bar.style.width = meter.dataset.value || "96%";
      }, 900 + index * 360);
    });

    proof.forEach((row, index) => {
      setTimeout(() => row.classList.add("is-on"), 1850 + index * 280);
    });

    setTimeout(() => {
      complete(run);
    }, Math.max(3000, stages.length * 650 + 900));
  };

  if (!("IntersectionObserver" in window)) {
    runs.forEach(start);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        start(entry.target);
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.32 });
  runs.forEach((run) => io.observe(run));
}

// ── Scenario-pack filter chips (visual) ──────────────────────
export function installPacks() {
  const row = document.querySelector(".packs-sec .chips");
  if (!row) return;
  row.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    row.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === chip));
  });
}

// ── Bento reveal (delegated to installReveal via class) ──────
export function installBento() {
  document.querySelectorAll(".bt, .cc, .pk, .tm, .sw-card, .cmp-col, .rcard, .vrow, .num-cell, .surface, .kbar, .dsteps, .modestrip, .vs-cols, .matrix-wrap, .rw, .shot, .tami-board, .tami-story, .tami-rule-grid, .op-run").forEach((el) => el.classList.add("reveal"));
}

// ── Reveal on scroll ─────────────────────────────────────────
export function installReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  const revealAll = () => els.forEach((el) => el.classList.add("in"));
  if (prefersReduced || !("IntersectionObserver" in window)) { revealAll(); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }
    // pre-trigger fires ~20%vh early, so reveals finish just before they're in view.
  }, { threshold: 0, rootMargin: "0px 0px 20% 0px" });
  els.forEach((el) => io.observe(el));
  // Safety net: if an observer ever misfires, nothing stays invisible.
  setTimeout(() => { if (els.some((el) => !el.classList.contains("in"))) revealAll(); }, 6000);
}

// ── Tabbed sections (features / industries) ──────────────────
export function installTabs() {
  document.querySelectorAll(".tabs").forEach((tabs) => {
    const btns = Array.from(tabs.querySelectorAll(".tb"));
    const panels = Array.from(tabs.querySelectorAll(".tab-panel"));
    if (!btns.length) return;
    const activate = (key) => {
      btns.forEach((b) => b.classList.toggle("on", b.dataset.tab === key));
      panels.forEach((p) => p.classList.toggle("is-on", p.dataset.tab === key));
    };
    tabs.querySelector(".tabs-nav")?.addEventListener("click", (e) => {
      const b = e.target.closest(".tb");
      if (b?.dataset.tab) activate(b.dataset.tab);
    });
    const initial = btns.find((b) => b.classList.contains("on")) || btns[0];
    activate(initial.dataset.tab);
  });
}

// ── Feature-card micro-demos: the real B2 operation settling, once on first view ──
//   recon difference → $0.00, competence trust meters cross the 0.82 autonomy line,
//   close tasks seal, 3-way match + policy gate reveal. Motion IS the demo.
export function installFeatureDemos() {
  const cards = document.querySelectorAll(".fcard:not(.fcard-ind), .bx");
  if (!cards.length) return;
  const countTo = (el) => {
    const to = parseFloat(el.dataset.count || "0");
    const money = el.dataset.fmt !== "num2";
    const show = (v) => { el.textContent = money ? "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : v.toFixed(2); };
    if (prefersReduced) { show(to); return; }
    const from = parseFloat(el.dataset.from || "0");
    const start = performance.now();
    show(from);
    const tick = (t) => {
      const k = Math.min(1, (t - start) / 1100);
      const e = 1 - Math.pow(1 - k, 3); // easeOutCubic
      show(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(tick); else show(to);
    };
    requestAnimationFrame(tick);
  };
  const live = (card) => { card.classList.add("is-live"); card.querySelectorAll("[data-count]").forEach(countTo); };
  if (prefersReduced || !("IntersectionObserver" in window)) { cards.forEach(live); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { live(e.target); io.unobserve(e.target); }
  }, { threshold: 0.4 });
  cards.forEach((c) => io.observe(c));
}

// ── GAAP standards engine: model the deal, re-derive on change ──
//   Proves the one thing rivals can't fake: the schedule re-derives when the
//   contract changes, and closed periods stay untouched.
export function installGaapDemo() {
  const demo = document.querySelector(".gaap-demo");
  if (!demo) return;
  const EXPAND_AT = 12, MONTHS = 36;
  const bars = demo.querySelector(".gd-bars");
  if (bars && !bars.children.length) {
    for (let i = 0; i < MONTHS; i++) {
      const b = document.createElement("i");
      if (i >= EXPAND_AT) b.classList.add("exp");
      // ripple the re-derivation forward from the expansion point
      b.style.transitionDelay = (i >= EXPAND_AT ? (i - EXPAND_AT) * 18 : 0) + "ms";
      bars.appendChild(b);
    }
  }
  const STATES = {
    signed: {
      deal: "Cyberdyne · SaaS · $540,000 · 36-mo",
      rate: "$15,000 / mo",
      amt: "15,000.00",
      deferred: "$360,000",
      note: "Ratable over 36 months — modeled once, nothing to maintain.",
      payoff: "Modeled once. $15,000 recognized every month, on schedule.",
    },
    expanded: {
      deal: "Cyberdyne · SaaS · $540,000 + $240,000 expansion",
      rate: "$25,000 / mo",
      amt: "25,000.00",
      deferred: "$600,000",
      note: "Prospective treatment (ASC 606-10-25-13). Closed periods stay locked.",
      payoff: "Expansion signed in month 12 — 24 future entries re-derived to $25k/mo. Months 1–12 untouched. No restatement.",
    },
  };
  const apply = (s) => {
    if (!STATES[s]) return;
    demo.dataset.scenario = s;
    const st = STATES[s];
    demo.querySelectorAll("[data-gd]").forEach((el) => {
      const k = el.dataset.gd;
      if (st[k] != null) el.textContent = st[k];
    });
    demo.querySelectorAll(".gd-opt").forEach((o) =>
      o.classList.toggle("on", o.dataset.scenario === s)
    );
  };
  demo.querySelectorAll(".gd-opt").forEach((o) =>
    o.addEventListener("click", () => apply(o.dataset.scenario))
  );
  apply(demo.dataset.scenario || "signed");
}

// ── FAQ accordions: only one open at a time ──────────────────
export function installAccordions() {
  document.querySelectorAll(".pp-faq").forEach((group) => {
    if (group.dataset.accordion === "true") return;
    group.dataset.accordion = "true";
    const items = Array.from(group.querySelectorAll(":scope > details"));
    items.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.open) items.forEach((o) => { if (o !== d) o.open = false; });
      });
    });
  });
}

export function init() {
  installBento();   // tag elements before reveal observes them
  installReveal();
  installTabs();
  installAccordions();
  installGlassBox();
  installOpRuns();
  installFeatureDemos();
  installGaapDemo();
}
