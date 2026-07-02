# Aleq website — Information Architecture (as-built)

Snapshot of every page and the sections that exist on it, captured 2026-06-22 from `app/**/page.tsx`.
Notation: each page lists its sections top-to-bottom. `kicker` = the small mono eyebrow above a heading.
Most page families share a template — noted per group.

Global chrome (every page): **Header** (logo · Platform mega-menu · TAMi · Resources · Pricing · Log in · Demo) and **Footer** (brand blurb + Product / Standards / Compare / Company / Legal columns + bottom bar).

---

## Home — `/`
1. **Hero** (`home-hero`, dark video `Kurt.mp4` + tint overlay) — "Closes the books while you sleep. Proves every move by morning." + Demo / See a live close.
2. **Bento** (`bento-sec`) — kicker *what it does* · "It runs the books. You decide how much."
   - Manual / Assist / Autonomous mode toggle that re-skins the grid (interactive).
   - 8 tiles: Reconciliation (2×2 hero) · Collections by voice · It earns the right to act · Continuous close (wide) · Accounts payable · Multi-entity · It can't break your books · Your stack, connected.
3. **Standards engine** (`engine-sec`) — "The GAAP writes itself." + 7 ASC links + live lease-schedule table.
4. **Intelligence · TAMi** (`dsection`) — "Aleq learns how your team decides." + 3 points + TAMi op-run widget.
5. **Find** (`find-sec`) — two link columns: *what it does* (6 work surfaces) · *who it's for* (6 industries).
6. **Numbers** (`numbers`) — $0.00 variance · every GAAP standard · 48 hrs to live · $60/hr.
7. **CTA** (`ribbon-cta`) — "Bring an unsigned period."

---

## Platform / The work

### `/work` (hub)
1. Hero (`page-hero`) — kicker *the work* · "Everything a controller does — done overnight."
2. Work graph (`dp-section`) — the surfaces, interactive.
3. CTA — "Pick one. Watch it run."

### Work detail pages — shared template (`pp-wrap`: hero → 4–5 `pp-section` → FAQ → `pp-cta`)
| Route | Hero (H1) | Section headings (kickers) |
|---|---|---|
| `/work/reconciliation` | Reconciled to the penny, by morning. | It does the hard part · No black boxes · It gets better the longer it runs · You stay in control · FAQ |
| `/work/ap` | Pays the right bills. On your approval. | It understands the bill · Nothing pays on trust alone · Right people right order · It learns your vendors · FAQ |
| `/work/close` | Closes the month. Day by day. | Always closing · Every entity one view · The line you draw · Sealed and signed · FAQ |
| `/work/collections` | Gets you paid. Without the awkward calls. | It owns the follow-up · It sounds like your team · It captures the promise · It learns who pays late · FAQ |
| `/work/multi-entity` | Many books. One close. | Translation · Eliminations · No black boxes · It learns your group structure · FAQ |
| `/work/tax` | Filing-ready, as it happens. | Watches nexus · 1099s as you pay · Income-tax provision · It learns your filing calendar · FAQ |
| `/work/general-ledger` | Always balanced. Always current. | Traceability · By construction · Always current · You set the leash *(no FAQ)* |

Each detail page ends with a `pp-cta` ("See it on your own books" / "Put it on reconciliation first" / etc.).

---

## Scenario packs

### `/packs` (hub)
1. Hero (`pk-hero`) — kicker *scenario packs* · "Hire it for the work you already know."
2. Pack grid (`dsection`).
3. CTA — "Don't see your job? Bring it."

### Pack detail pages — shared template (`pk-hero` → demo `dsection` ×2 → *in this pack* → *vs the alternatives* head-to-head → `ribbon-cta`)
| Route | Hero (H1) | Scenario demo | "In this pack" | Compared vs |
|---|---|---|---|---|
| `/packs/reconciliation` | Reconciles to zero — and tells you why. | feed live · "Every line, matched or explained" | 5 capabilities, 9 scenarios | BlackLine |
| `/packs/ap` | Extracts, matches three ways, routes approval. | AP queue · "Three-way match, then payment run" | 6 capabilities, 10 scenarios | Bill.com |
| `/packs/collections` | Works the ladder, makes the call, books cash. | dunning ladder · "rung by rung" | 7 capabilities, 11 scenarios | Bill.com |
| `/packs/month-end-close` | The close runs itself — waits where it should. | day 4 of 8 · "real checklist by area" | 9 capabilities, 14 scenarios | NetSuite |
| `/packs/multi-entity` | Six entities, three currencies, one consolidation. | group close · "intercompany matrix" | 8 capabilities, 12 scenarios | NetSuite |
| `/packs/audit` | Every action signed. Every period replayable. | sealed period · "signed receipt per action" | 5 capabilities, 8 scenarios | NetSuite |

---

## Standards — `/standards/*` — shared template (`pp-wrap` → 4 `pp-section` → FAQ → `pp-cta`)
Each: derive-the-entries → the schedule → re-derive on change → **the hard call stays human** → FAQ.
| Route | Hero (H1) |
|---|---|
| `/standards/asc606` | Revenue, recognized on schedule. |
| `/standards/asc842` | Leases on the balance sheet, derived. |
| `/standards/asc718` | Stock comp, expensed on schedule. |
| `/standards/asc740` | Your tax provision, always current. |
| `/standards/asc340` | Commissions, capitalized and amortized. |
| `/standards/asc350` | Software you build, capitalized right. |
| `/standards/asc815` | Hedges, marked and measured. |

---

## Compare

### `/compare` (hub)
1. Hero (`page-hero`) — kicker *compare* · "Everyone else sells software. Aleq does the work."
2. Matrix (`cmp-section`) — Aleq vs NetSuite / Sage Intacct / SAP / QuickBooks / Rillet / Campfire / Puzzle.
3. CTA — "Bring an unsigned period."

### Compare detail pages — shared template (`vs-hero` → `vs-claim` → Aleq-vs-X cards → *head to head* → migration → `ribbon-cta`)
| Route | Hero (H1) | Migration heading | CTA |
|---|---|---|---|
| `/compare/netsuite` | The ERP stores your close. Aleq does it. | system of record → live in 48h | Still doing the close inside NetSuite? |
| `/compare/sap` | SAP is the backbone. Aleq gets the work done. | runs beside SAP, live in 48h | Put Aleq beside the system you trust. |
| `/compare/sage-intacct` | A system vs. an operator. | live in 48h, alongside Intacct | Replace the manual work. |
| `/compare/quickbooks` | Where the forms live vs. the controller. | works on top — keep QuickBooks | Remove the manual work. |
| `/compare/rillet` | Rillet modernized the ledger. Aleq runs it. | SaaS ledger → controller in 48h | Past pure SaaS? Bring the books. |
| `/compare/campfire` | Campfire answers your books. Aleq acts. | asking → acting, in 48h | Stop asking. Start delegating. |
| `/compare/puzzle` | Puzzle keeps the books. Aleq is the controller. | clean books → controller in 48h | Outgrowing bookkeeping? |

---

## Control plane & Intelligence

### `/control`
1. Hero (`dp-hero`) — kicker *the control plane · the moat* · "Autonomy you can put on a leash." + Action-trail widget (all signed).
2. **Three modes** (`dsection`) — kicker *it's not all-or-nothing* · "Three modes. You set which, per task." — Manual / Assist / Auto columns.
3. **Trust features** (`dsection`) — 4 cards: signed & replayable · undo & simulate · readable policy book · eval-gated.
4. CTA — "Trust is set, not assumed."

### `/tami`
1. Hero (`dp-hero`) — kicker *the intelligence · TAMi* · "It knows when to act, when to ask, and how to explain itself."
2. **15-second version** (`dsection`) — 3 steps: sees an unearned line → turns approvals into a rule → acts inside policy.
3. **Source→belief→gate→action** (`dsection`) — op-run story; $188,440 Foxconn wire example.
4. **Earned autonomy** (`dsection`) — "Every capability has its own leash."
5. **vs generic AI** (`dsection`) — TAMi vs Generic AI layer table.
6. CTA — "Watch it learn on your books."

### `/migrate` — template (`pp-wrap` → 5 `pp-section` → `pp-cta`)
1. Hero — kicker *Move to Aleq* · "Switch systems in twenty minutes. With proof." + migration certificate widget.
2. The moment — "Twenty minutes ago, this company ran on Rillet."
3. Clean by reconstruction — "Don't migrate your mess. Rebuild it clean."
4. Proven before cutover — "Both ledgers, side by side."
5. Low-risk by design — "Start on top. Cut over when ready."
6. From any system — "It already speaks your stack."
7. CTA — "Bring your books. Watch them move."

---

## Company

### `/company/pricing`
1. Hero (`page-hero`) — kicker *pricing* · "$60 per operator hour. Metered, audited, capped."
2. Labor calculator — "Enter your finance team. See the math." (Replace-the-team calculator widget.)
3. Action classes — "One rate. Three classes of work."
4. How the meter works — "Software is the receipt. Labor is the product."
5. Contracting — "Standard terms, ready for procurement."
6. FAQ — "What CFOs ask before signing."
7. CTA — "Bring an unsigned period. We will close it on the call."

### `/company/contact`
1. Hero (`page-hero`) — kicker *talk to aleq* · "No SDR. No demo theatre. A live close on the call."
2. Booking section — "Book a slot." + "What the call looks like."

### `/teams`
1. Hero (`page-hero`) — kicker *teams* · "Aleq joins your finance team."
2. Roles section (`work-sec`).
3. CTA — "Hire it for one seat. Keep it for the team."

---

## Legal — `/legal/*` (`page-hero` → `section` with H2 list)
| Route | H1 | Sections |
|---|---|---|
| `/legal/privacy` | Privacy policy | collect · use · per-tenant isolation · residency · subprocessors · rights · retention · contact |
| `/legal/security` | Security disclosures | compliance · encryption · audit signatures · access · vuln disclosure · incident response · pentest · references |
| `/legal/terms` | Terms of service | service · responsibilities · fees · confidentiality · term · liability · disputes · contact |

---

## Utility

### `/sitemap`
1. Hero (`page-hero`) — kicker *sitemap* · "Everything on the site."
2. Link index (`section`) — grouped: Product · The work · Scenario packs · Standards · Compare · Company · Legal.

---

## Page-template summary
| Template | Shape | Used by |
|---|---|---|
| `home-hero` + mixed | bespoke | `/` |
| `pp-wrap` | hero → N `pp-section` → (FAQ) → `pp-cta` | all `/work/*`, all `/standards/*`, `/migrate` |
| `pk-hero` | hero → demo → in-this-pack → vs → cta | all `/packs/*` |
| `vs-hero` | hero → claim → Aleq-vs-X → head-to-head → migration → cta | all `/compare/*` |
| `dp-hero` | hero+widget → feature `dsection`s → cta | `/control`, `/tami` |
| `page-hero` | hero → body → cta | `/work`, `/packs`, `/compare`, `/teams`, `/company/*`, `/legal/*`, `/sitemap` |
