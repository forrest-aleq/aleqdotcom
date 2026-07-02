# B2 Gap Analysis — marketing claims vs. what the backend actually does

> **⚡ Shipping log (2026-07-01 evening):** backend is closing this list fast. Confirmed shipped
> since Parts 1–3 were written, per B2 migrations + commits:
> multi-source (one-to-many) reconciliation matches (`000120`, drops `uq_reconciliation_matches_txn`),
> structural close account reconciliations with prepared/approved workflow (`close_ops.AccountReconciliation`),
> AP vendor bank-detail verification (`000144`), tax economic-nexus thresholds (`000145`),
> tax registration workflows (`000146`), sales-tax filing preparation (`000147`),
> AP bill extractions (`000148`), journal-entry decision bundles + AR/recurring wiring (`000149`),
> multi-signer approvals (`000150`), consolidation intercompany match outcomes + per-relationship
> beliefs (`000151`, commits `e02a15a`/`c8f40ad`), reconciliation workspace panes (`94a06b7`),
> and new `internal/fixedassets` / `internal/expense` modules.
> Companion doc: **`MARKETING_FEATURE_INVENTORY.md`** (say / don't-say, from the team) — this file
> is the build list, that file is the claims list. Verify against current B2 before treating any
> remaining 🔴 below as still open.

Generated 2026-06-30. Every line below was checked against the real B2 Go source at
`/Users/h/Documents/aleq/kill-puzzle/b2` (not the N4-1 design prototype, which lags the backend
significantly in both directions — sometimes under-building what's real, sometimes the marketing
site invents what neither N4-1 nor B2 has). Citations are `file.go:line`. This is a punch list for
backend, organized so engineering can pick items up directly — not a rewrite of the marketing copy.

**Decision behind this doc:** rather than walk marketing claims back to match today's backend, the
plan is to close the gap from the backend side wherever the claim is a reasonable product
direction. Each gap below includes a "what to build" note pointing at the nearest existing pattern
in the codebase to build from (most engines already follow Translator→Driver→ledger.Service, and
asc606 additionally has a Planner/WorkUnit/Verb layer worth reusing for any standard that needs
multi-step orchestration with human-review escalation).

**Verdict legend:** ✅ CONFIRMED — real, matches the claim. 🟡 PARTIAL — real mechanism exists but
narrower/different than claimed. 🔴 NOT FOUND — searched, no supporting code; treat as net-new
build, not a wiring task.

---

## Priority

**Note (2026-06-30):** the eval-stats claims (TAMi's 57-task benchmark, Control's 0.90+ release
gate) are confirmed accurate by the team — the methodology/results live outside this repo and are
still in progress elsewhere. Not a backend gap; removed from the P0 list below, left out of this
doc's scope.

**Note (2026-06-30):** the `/work/collections` page's voice-calling, dunning-ladder,
promise-to-pay-capture, dispute-logging, and finance-charge claims are confirmed NOT in the current
B2 codebase (checked `internal/ar/`, `internal/communications/` — email-only sender, no telephony
dependency in `go.mod`, no dunning/PromiseToPay/dispute/finance-charge types anywhere). Per the
team, this feature set is actively in development — same treatment as the eval stats: leave the
marketing copy as-is, this is a target the backend is building toward, not a claim to walk back.
The one collections claim that IS real today: `SuggestPaymentApplications`
(`internal/ar/service_impl.go:811-915`, scored matching) and `ApplyPayment`
(`internal/ar/service_payment_applications.go:23`, real splitting of one payment across multiple
invoices) — cash application is solid and worth leading with.

**P0 — actively false or contradicted by the code, highest deal/audit risk if a prospect or their
auditor pokes at it:**
- ASC 740 rate-change remeasurement — the real code **errors** on a rate change after posting; the
  page claims the opposite behavior
- ASC 842 lease modification/remeasurement — the page's whole "it remeasures itself" section
  describes a code path (`ScheduleStatusModified`) that's declared but never wired up
- Reconciliation multi-source matching (the page's "247 payments, one payout" hero claim) — blocked
  by a DB unique constraint, not just unbuilt
- Control page "signed actions," undo windows, tamper-evident seals — no crypto signing, no undo
  logic, no seal mechanism anywhere in the repo; these are concrete, checkable technical claims

**P1 — described capability doesn't exist but is a reasonable, scoped build against an existing
pattern:**
- ASC 740 rate-reconciliation bridge, valuation-allowance evidence weighing
- ASC 718 option-pricing (Black-Scholes), true graded-vesting attribution, modification accounting
- ASC 815 effectiveness-test computation, fair-value hedge support
- ASC 842 5-criteria classification test, discount-rate resolution
- ASC 340 commensurate-renewal test / period-of-benefit derivation
- Reconciliation: account scope beyond bank/card (prepaids, accruals, deferred rev, intercompany),
  duplicate detection, persisted match rationale
- TAMi: per-task dollar-threshold approval gate extended to AP payments; structured support bundle
  wired into posting paths (the type already exists, unused)
- Control: per-task-type Manual/Assist/Auto as a real stored setting (today autonomy is a derived
  continuous score, not a user-set discrete mode)

**P2 — partial/nuance gaps, lower urgency:**
- ASC 350 engineering-hours/tracker integration (Linear/Jira) — currently manual entry
- ASC 340 one-year expedient is policy-gated, not automatic
- Reconciliation exception reason-code taxonomy
- Segregation of duties doesn't cover approve-vs-pay specifically (AP payments have no approval
  gate at all today, see P1 item above — once that's added, SOD should extend to it)

---

## 1. ASC 606 — Revenue Recognition (`internal/standards/asc606/`) — ✅ solid, no major gaps

This is the reference implementation — a real five-step engine with `Planner` → `Translator` →
`Driver` → `Verifier` architecture and a `WorkUnit`/`Verb` ontology (`engine.go`,
`planner/rules.go`). Confirmed: performance-obligation identification (`VerbIdentifyPOs`,
`VerbAssessDistinctness`), SSP-based allocation (`VerbDetermineSSP`, `VerbAllocatePrice` via
`relative_ssp`), prospective vs. cumulative-catch-up modification treatment
(`determineModificationType`, `planner/rules.go:354-371`), human-review escalation for financing
components and material rights (`needsHumanReview`, `planner/rules.go:305-323`,
`errors.ErrRequiresHumanReview`), and GL reconciliation (`Reconcile`, `ReconciliationResult` with
`Discrepancies`).

**No backend work needed.** If other standards get a Planner/WorkUnit layer added (see ASC 340/718
below), copy this engine's shape.

---

## 2. ASC 340 — Commissions (`internal/standards/asc340/`)

| Claim | Verdict | Citation |
|---|---|---|
| Commensurate-renewal test (compare renewal vs. new-business commission rate to decide if amortization extends to customer life) | 🔴 NOT FOUND | grepped `renew\|customer.life\|expected.life\|benefit.period\|commensurate` — no hits |
| Period of benefit derived from data | 🔴 NOT FOUND | `CommissionPlan.AmortizationMonths` (`engine.go:77`) is a flat manually-set int, no derivation |
| One-year practical expedient | 🟡 PARTIAL | `engine_impl.go:222-228` — only fires under `PolicyContractOverYear`; `PolicyAlways` ignores period length |
| Write-off on contract termination | ✅ CONFIRMED | `ProcessImpairment` (`engine_impl.go:352-407`), real JE via `TranslateImpairment` |

**What to build:** a `DetermineAmortizationPeriod` step (or new `Verb` if a Planner layer is added)
that takes initial contract term + renewal commission rate + new-business commission rate +
expected customer life (cohort-derived or input) and outputs the benefit period with a basis
string, the same shape as asc606's `VerbDetermineSSP`. Gate the existing one-year expedient check
on the *computed* period instead of requiring `PolicyContractOverYear` to be pre-set.

---

## 3. ASC 350 — Capitalized Software (`internal/standards/asc350/`)

| Claim | Verdict | Citation |
|---|---|---|
| Three-stage phase gating (preliminary/dev/post-implementation) | ✅ CONFIRMED | `ProjectPhase` enum (`engine.go:24-27`), gate at `engine_impl.go:265` |
| Capitalization triggered by phase state, not a manual flag | ✅ CONFIRMED | `isCapitalized := project.Phase == PhaseApplicationDevelopment && ...` |
| Amortization schedule on in-service | ✅ CONFIRMED | `CreateAmortizationSchedule` (`engine_impl.go:340-416`) |
| "Traced to Linear & Jira" — engineering-hours/tracker integration | 🔴 NOT FOUND | grepped `hours\|tracker\|jira\|integration\|engineering\|timesheet` — no hits; `RecordCost` (`engine_impl.go:245-332`) takes a manually-supplied `money.Money` |

**What to build:** the phase-gate logic is solid and the right foundation. The missing piece is an
ingestion path — a Linear/Jira webhook or polling integration (pattern after
`internal/integrations/{qbo,ramp,plaid}/`) that maps epics/issues to a project, pulls engineer
hours per epic, applies a loaded labor rate, and calls `RecordCost` automatically instead of
requiring a manual amount. This is the single most "fix the marketing claim, not the backend"
item on this list, since the hero badge states the integration as a present-tense fact.

---

## 4. ASC 718 — Equity / Stock Comp (`internal/standards/asc718/`)

| Claim | Verdict | Citation |
|---|---|---|
| Grant-date fair value (RSU = share price × units; option = real option-pricing model) | 🔴 NOT FOUND for options | `Grant.CalculateTotalCompensation()` (`grant.go:81-85`) is `FairValuePerShare × TotalShares` for *every* award type. No volatility/expected-term/risk-free-rate fields anywhere; `ExercisePrice` is stored but never read by any computation |
| Graded (tranche-by-tranche, FIN-28-style) vesting attribution | 🟡 PARTIAL | `generatePeriods` (`engine_impl.go:287-344`) does cliff + straight-line only — one hardcoded method, not true per-tranche front-loaded attribution |
| Forfeiture reversal | ✅ CONFIRMED, automatic | `ProcessForfeiture` (`engine_impl.go:156-212`), real reversal JE |
| Modification accounting (incremental FV, repricing) | 🔴 NOT FOUND | No modification `Verb` exists at all — only `VerbCreateVestingSchedule`/`VerbPostVestingExpense`/`VerbPostForfeiture`/`VerbPostCancellation` (`engine.go:27-30`). **The live FAQ on `/standards/asc718` claims this is handled — it isn't.** |

**What to build:**
1. An option-pricing module (Black-Scholes at minimum) taking volatility, expected term, risk-free
   rate, and exercise price as inputs, with the same drafted-assumption + human-review pattern as
   asc606's SSP estimation. Volatility/expected-term need a basis source (peer-company data,
   historical if available) — this is a real product decision, not just an endpoint.
2. A true graded-vesting attribution method as an alternative to the existing cliff+straight-line,
   selectable per grant.
3. A `VerbPostModification`-equivalent: incremental fair value at modification date, recognized
   over remaining service period — mirror asc606's `VerbAssessModification`/`VerbModifyCatchUp`
   shape.

---

## 5. ASC 740 — Income Tax Provision (`internal/standards/asc740/` + `internal/tax/`) — biggest gap

| Claim | Verdict | Citation |
|---|---|---|
| Effective-rate reconciliation bridge (state, permanent items, R&D credit, stock-comp windfall, VA change, each as a line) | 🔴 NOT FOUND | `ComputeProvision` (`engine_impl.go:587-710`) returns one `EffectiveTaxRate` and one `StatutoryRate` (`engine.go:131-151`) — no bucket fields exist at all |
| Valuation-allowance / more-likely-than-not evidence weighing (cumulative losses, projected income, carryforward period) | 🔴 NOT FOUND | `ApplyValuationAllowance` (`engine_impl.go:364-473`) takes a caller-supplied `TargetAllowance` — no evidence inputs anywhere |
| Rate-change remeasurement (auto-recompute deferred balances + catch-up entry at enactment) | 🔴 NOT FOUND, and **contradicted** | A rate change after a balance is posted throws `"posted DTA balance mismatch"` (`engine_impl.go:211-214, 292-295`) instead of remeasuring. The page claims the opposite of actual behavior. |
| NOL carryforward + utilization | ✅ CONFIRMED, but manual | `RecordNOLCarryforward`/`UtilizeNOL` (`engine_impl.go:476-579`) exist but aren't auto-linked to `ComputeProvision` — caller must invoke utilization explicitly |
| §174 R&D capitalization | 🔴 NOT FOUND | zero hits for "174" anywhere in asc740 or internal/tax |

**What to build:** this needs the most net-new engineering of any standard.
1. Refactor `ComputeProvision` to emit a `RateBridgeLine[]` (bucket, rate-point-impact, dollar
   amount) instead of just a final rate — state apportionment, permanent differences, credits, and
   stock-comp windfall each need their own input/computation path.
2. Replace `ApplyValuationAllowance`'s manual `TargetAllowance` with an evidence-weighing function
   (cumulative-loss lookback, income projection input, carryforward-period check against NOL
   expiration) that *recommends* a target and routes it through human-review (asc606's
   `ErrRequiresHumanReview` pattern fits well here — this is exactly the kind of judgment call that
   pattern was built for).
3. Fix the rate-change path to remeasure posted DTA/DTL balances and post a catch-up entry dated to
   the enactment period, instead of erroring.
4. Wire NOL utilization into `ComputeProvision` automatically against current-year income.
5. Add §174 as a temporary-difference type with its 5-year amortization built in.

---

## 6. ASC 815 — Derivatives & Hedging (`internal/standards/asc815/`)

| Claim | Verdict | Citation |
|---|---|---|
| Hedge designation documented at inception (hedged item, risk, method, date) | ✅ CONFIRMED, real | `DesignateCashFlowHedgeInput` (`engine.go:177-186`), `DesignateCashFlowHedge` (`engine_cash_flow_hedges.go:26-119`) validates documentation date vs. trade date. Package doc explicitly scopes this to cash-flow hedges only (`engine.go:1-4`) |
| Effectiveness test (dollar-offset ratio, 80–125% corridor) | 🔴 NOT FOUND — input, not computed | `AssessmentMethod` is a free-form string (`engine.go:118`); `AssessmentResult` is caller-supplied (`RecordValuationInput`, `engine.go:166-175`). No corridor constant, no dollar-offset/regression computation anywhere |
| Effective → OCI / ineffective → earnings routing | ✅ CONFIRMED, real | `buildValuationLines` (`engine_impl.go:461-531`), `ReclassifyHedgeReserve` (`engine_cash_flow_hedges.go:220-339`) tracks reclassification vs. effective-portion sum to prevent over-reclassification |
| Fair-value hedges (both sides through earnings) | 🔴 NOT IMPLEMENTED | Only `DesignationNone`/`DesignationCashFlow` exist (`engine.go:24-29`); `normalizeCreateInstrumentInput` rejects anything else at creation |
| Auto-discontinuation on effectiveness failure | 🟡 PARTIAL | `DedesignateCashFlowHedge` is real but never auto-triggered by an `EffectivenessIneffective` result — requires a separate explicit call |

**What to build:**
1. A real effectiveness-test computation — dollar-offset ratio at minimum (cumulative change in
   hedge value ÷ cumulative change in hedged-item value, against an 80–125% corridor), with
   critical-terms-match as a qualitative fallback path. This becomes the *input* to
   `AssessmentResult` rather than `AssessmentResult` being caller-supplied.
2. Fair-value hedge support: a `DesignationFairValue` type with both-sides-to-earnings routing in
   `buildValuationLines`.
3. Auto-dedesignation: when `RecordValuation` records an ineffective result (or effectiveness drops
   outside the corridor once #1 exists), call `DedesignateCashFlowHedge` automatically rather than
   requiring a separate operator action.

---

## 7. ASC 842 — Leases (`internal/standards/asc842/` + `internal/primitives/lease/`)

| Claim | Verdict | Citation |
|---|---|---|
| Initial measurement (PV of payments + option) and ongoing amortization | ✅ CONFIRMED, solid | `ProcessLease` (`engine_impl.go:50-159`), real PV math (`pv.go:15-72`), effective-interest/straight-line schedules, real JEs via `Translator`/`Driver` |
| 5-criteria operating-vs-finance classification test | 🔴 NOT FOUND | `Lease.LeaseType` is caller-supplied (`lease.go:128`). Fields exist that *could* feed a test (`PurchaseOption`, `ReasonablyCertainPurchase`, `LeaseTermMonths`, `ResidualValue`, `DiscountRate`) but no function computes the test |
| Discount-rate resolution (implicit rate vs. IBR) | 🔴 NOT FOUND | `DiscountRate` is a single caller-supplied value, no selection logic |
| Remeasurement on modification | 🔴 NOT FOUND — **dead stub** | `ModifyLease` (`internal/primitives/lease/service_impl.go:159-223`) only mutates the lease record's payment/rate/term/type fields — never touches `asc842.LeaseSchedule` balances or regenerates periods. `ScheduleStatusModified` (`engine.go:25`) is declared but **never set anywhere** in the codebase. The `lease.modified` event only reaches an audit-log subscriber, nothing recomputes. This is the page's entire "Change the lease — it remeasures itself" section. |
| Short-term/low-value exemption | 🟡 PARTIAL | Mechanism is real (`engine_impl.go:60-62` correctly skips ROU/liability recognition) but `IsShortTerm`/`IsLowValue` are plain caller-supplied booleans, not computed against the ≤12-month/no-purchase-option rule |

**What to build:**
1. A `ClassifyLease` function implementing the 5 ASC 842-10-25-2 criteria against the existing
   fields, outputting `LeaseType` + a reasoning trace — same shape as asc606's SSP-method drafting,
   held for sign-off via `ErrRequiresHumanReview`.
2. Discount-rate resolution: implicit-rate calc where determinable, fallback to a stored/IBR input,
   with the choice and basis surfaced (not silently defaulted).
3. **This is the most actionable item in the whole doc**: wire `ModifyLease` (or a new
   `RemeasureLease` call triggered by the `lease.modified` event) to recompute PV at the current
   rate, diff against the existing liability, adjust the ROU asset by the same delta, post the JE,
   and regenerate `AmortizationPeriod`s from the modification date forward — setting
   `ScheduleStatusModified` along the way, since that status already exists and is just unused.
4. Compute `IsShortTerm`/`IsLowValue` from term + purchase-option fields instead of trusting a
   caller-supplied boolean.

---

## 8. Reconciliation (`internal/banking/`)

| Claim | Verdict | Citation |
|---|---|---|
| `GetReconciliationWorkspace` — real computed workspace | 🟡 PARTIAL | Real object (`service_impl.go:801-861`, `ReconciliationWorkspace`, `banking.go:205-216`) but it's one flat list of bank lines with at most one match each, not a three-pane bank/book/suggestions view |
| Matching with confidence scoring (amount + date + name) | ✅ CONFIRMED, real | `SuggestMatches` (`service_impl.go:635-782`): composite score from exact/near amount, date proximity, Stripe payout-ID match, reference substring, blended with belief strength. Note: name matching is plain `strings.Contains`, not fuzzy/edit-distance |
| Multi-source matching (one payout → many invoices, "247 payments" page claim) | 🔴 BLOCKED BY SCHEMA | `MatchTransactionInput` carries a single `JournalEntryID`; DB has `CREATE UNIQUE INDEX uq_reconciliation_matches_txn` (migration `000033_bank_recon_hardening`) enforcing one bank transaction → one JE. This requires a schema migration, not just new logic. |
| Bank rules that learn/promote autonomy | 🟡 PARTIAL | `BankRule.Confidence`/`AutoApply` are static, manually set at creation (`rules.go:160-162`) — no learning. A *separate* real belief (`reconciliation_accuracy`, EMA-updated via `transaction.matched`/`unmatched` events, `DetermineSupervisionMode` thresholds 0.4/0.7) exists and is returned to the client as `MatchSuggestion.SupervisionMode` — but nothing server-side gates or auto-executes on it (`cmd/api/handlers_banking.go:311-316` just returns the value) |
| Duplicate detection (page's "looks like a duplicate — held for you") | 🔴 NOT FOUND | Only statement-level duplicate-*import* protection exists (`DuplicateStatementError`). No per-transaction probable-duplicate logic anywhere |
| Exception reason codes | 🟡 PARTIAL | Real status queue (`UNMATCHED`/`MATCHED`/`EXCLUDED`), but `ExcludeTransaction` has no reason-code field — just records the actor |
| Account scope beyond bank/card (prepaids, accruals, deferred rev, intercompany, clearing) | 🔴 NOT FOUND | Module is literally scoped "Bank and card reconciliation" (`platform/modules/catalog.go`); zero hits for `prepaid\|accrual\|deferred.rev\|intercompany\|clearing.account\|suspense` anywhere in reconciliation code. `close_ops` has generic free-text checklist items but no structural link to a GL account, no supporting-doc requirement, no preparer→reviewer workflow per account |
| Persisted "why this match" rationale | 🔴 NOT FOUND | `MatchSuggestion.Score`/`Reason` are computed on demand and never written to `ReconciliationMatch` — nothing durable to read for a "why this match" UI on completed matches |

**What to build, in order of what unlocks the marketing page's actual centerpiece claims:**
1. **Multi-source matching** is the highest-value, highest-effort item — it's the page's whole
   "multi-source matching" section. Needs a schema change (drop the 1:1 unique constraint, move to
   a join table `reconciliation_match_lines(bank_transaction_id, journal_entry_id, allocated_amount)`)
   plus split-matching logic in `MatchTransaction`.
2. **Balance-sheet account reconciliation** (prepaids/accruals/deferred-rev/intercompany/clearing)
   is the real "wedge" — this is a new module, not an extension of `bank_recon`. It needs: a
   schedule-vs-GL-balance diff (similar shape to asc606's `Reconcile`/`ReconciliationResult`), a
   supporting-document attachment requirement, and a preparer→reviewer sign-off step (reuse
   `internal/approvals` SOD pattern).
3. Persist `MatchSuggestion.Score`/`Reason` onto `ReconciliationMatch` at match time so completed
   matches have a durable "why" to show.
4. Per-transaction duplicate detection: same-amount + near-date + same-counterparty heuristic,
   holding instead of auto-matching (mirror the existing belief-strength blend in `SuggestMatches`).
5. Make `BankRule.Confidence`/`AutoApply` outcome-driven like the separate belief already is,
   instead of static at creation — and actually gate `ApplyBankRule` execution on it, the way
   `internal/recurring/service_impl.go:202-274` already gates on supervision mode (copy that
   pattern here).

---

## 9. TAMi (cross-cutting: `internal/platform/beliefs/`, `internal/approvals/`, `internal/recurring/`)

| Claim | Verdict | Citation |
|---|---|---|
| Per-rule promotion keyed to approval/reversal count ("412 times, never reversed") | 🔴 NOT FOUND as described | Beliefs are coarse per-module EMA values (`ap_payment_matching`, `reconciliation_accuracy`, etc. — `seeds.go:8-30`), not per-individual-rule counters. No reversal-specific signal exists (`Outcome` enum has no reversal case). One module (`internal/recurring/service_impl.go:202-274`) does real server-side gating on supervision mode — the only place this isn't display-only |
| "$100k auto-payment limit" approval gate | 🟡 PARTIAL | Real `ApprovalPolicy.MinAmount` threshold gate exists (`approvals.go:27-38`) but is wired only to JE post/reverse, invoice finalize, period/FY close — **not to AP vendor payment execution** (`vendor_payment.run` has only an RBAC role check, no dollar gate). The page's literal example isn't backed by the code path it describes. |
| Structured "support bundle" attached to posted entries | 🟡 PARTIAL — unused plumbing | `DecisionBundle` type is fully built and persisted (`beliefs.go:332-340`, `postgres_repository.go:329-363`) but has **zero callers outside the beliefs package itself** — no AP/AR/banking/recurring code creates one. What's actually attached today is ad hoc `Reason`/`ReasonTrace` strings per module, not a structured persisted bundle |
| Eval claim: 57 high-risk tasks, 84%/75%, multi-model (Claude/Codex/Gemini/Qwen) | ⚪ OUT OF SCOPE | Confirmed accurate by the team; methodology/results are owned and tracked outside this repo (this repo has no eval harness — checked `scripts/`, `docs/`, CI workflows — which is expected if the eval lives elsewhere). No backend action needed here. |

**What to build:**
1. Extend the dollar-threshold approval gate (`approvalGate()`, already exists) to
   `vendor_payment.run` in `cmd/api/handlers_ap.go` — this is a small, well-scoped fix since the
   gate infrastructure is real, it's just not called from this path.
2. Wire `DecisionBundle` creation into at least one real posting path (reconciliation match-and-post
   is the natural first one, since it already computes `Score`/`Reason`) so "support" is a real
   persisted object, not assembled narrative.
3. The eval claim is a decision point, not a small build: either (a) stand up a real eval harness —
   a fixed task set, a scoring rubric, and a CI/scheduled job that runs it against current models —
   or (b) the marketing page needs the number pulled until one exists. Given the magnitude of the
   claim (specific percentages, specific model names), this is the single highest-risk item in this
   document if anyone asks for the methodology — the page itself links to "Request the full
   methodology," which currently doesn't exist to send.

---

## 10. Control Plane (`internal/platform/beliefs/`, `internal/approvals/`, `internal/evidence/`, `internal/core/periods/`, `internal/close_ops/`)

| Claim | Verdict | Citation |
|---|---|---|
| Three settable modes (Manual/Assist/Auto) per task type | 🔴 NOT FOUND | `SupervisionMode` is a derived, read-only enum computed from continuous EMA strength (`DetermineSupervisionMode`, `beliefs.go:197-206`) — never a user-set stored field. No `force_mode`/override mechanism found anywhere |
| "Every action signed" (IDs like `a_19d4`), undo 30s / 14 days | 🔴 NOT FOUND | No cryptographic signing infra exists for accounting actions (only unrelated webhook-signature verification for Stripe/Plaid). `AuditRecord` (`evidence.go:31-42`) is a plain log row, no signature/hash field. No `a_`-prefixed ID scheme. "Undo" doesn't appear anywhere in `internal/`; `journal_entry.reverse` is a normal reversal-entry creation with no time-window logic at all |
| Segregation of duties (blocks one person approving + paying) | 🟡 PARTIAL | Real enforcement exists, but for requester≠approver on JE/period/invoice actions (`approvals/service_impl.go:269-271,349-351`) — since AP payment execution has no approval gate at all (see TAMi #2 above), there's no code path to enforce approve-vs-pay specifically for payments |
| Belief thresholds: "20 in a row, above 95%, drops below 70%" | 🔴 CONFIRMED MISMATCH | Real thresholds are continuous EMA at 0.4/0.7 (`beliefs.go:197-205`), no consecutive-streak counter exists anywhere. The marketing numbers don't correspond to any real value. |
| Tamper-evident period seals ("0x4f3b…0eb4," checked on every read) | 🔴 NOT FOUND | Zero hits for "tamper"/"seal" in `close_ops` or `core/periods`. Period locking is plain status columns (`ClosedAt`/`ClosedBy`/`LockedAt`/`LockedBy`) with status-switch enforcement (`close_ops/period_gate.go:36-72`) — no hash/checksum, no read-time verification |
| Pre-release eval gating (0.90+ across close/collections/reconciliation/safety) | ⚪ OUT OF SCOPE | Same as TAMi eval claim — confirmed accurate, owned/tracked outside this repo, no backend action needed |

**What to build:**
1. A real per-task-type mode setting: a stored `task_autonomy_overrides(task_type, mode, set_by)`
   table that, when present, takes precedence over the derived `SupervisionMode` — this is what
   would make "you pick one for each task" literally true instead of "it's computed for you."
2. Actual signing: at minimum an HMAC or content-hash over each posted action's payload, stored on
   the audit record, with an `a_`-style short ID scheme if that's the desired UX. Undo windows need
   real design (what "undo" means per action type — reversing entry vs. literal delete-before-commit
   — this is a product decision as much as an engineering one).
3. Extend SOD checks to AP payment execution once the approval gate exists there (TAMi #2).
4. Either change the belief-promotion copy to describe the real EMA/0.4/0.7 mechanism, or build an
   actual consecutive-success-streak counter with 95%/70% bounds if the streak framing is preferred
   product behavior — these are different mechanisms with different behavior under volatile data, so
   this is a real design choice, not a copy fix.
5. Tamper-evident seals: a hash-chain or signed-checksum over each closed period's entry set,
   verified on read, with a visible break indicator — this is genuinely unbuilt infrastructure, sized
   similarly to the signing work in #2 and probably worth doing together.
6. Eval gating: see TAMi #3 — same underlying need (a real eval harness), referenced from both pages.

---

---

# Part 2 — `/work/*` pages (2026-06-30)

Same method as Part 1: every claim checked against the real B2 Go source, not the N4-1 prototype.
Verdict legend is the same (✅ CONFIRMED / 🟡 PARTIAL / 🔴 NOT FOUND). Two additional notes apply
here that didn't come up in Part 1:

- **Every single `/work/*` page's "Powered by TAMi" section claims a per-vendor or per-rule belief
  counter** ("coded 217× · never corrected", "seen 40×, runs alone"). This is fabricated on all
  seven pages the same way: the real belief system (`internal/platform/beliefs/`) is a **coarse,
  per-module** EMA-updated confidence score (`ap_payment_matching`, `ar_payment_matching`,
  `reconciliation_accuracy`, etc. — `seeds.go:8-42`), not a counter tied to a specific vendor, rule,
  or entity-pair. Multi-entity and Tax are worse still — those modules don't call into the belief
  system **at all** (zero references in either package).
- **Collections' voice-calling / dunning / promise-to-pay / dispute / finance-charge claims are
  confirmed not in the codebase, but the team says this feature set is actively in development —
  leave that copy as-is**, same treatment as the eval-stats claims in Part 1. Included below anyway
  so backend has the precise spec of what's already promised.

**Priority, worst first:** Tax (§14) is the single worst page on the site — nearly every specific
claim is invented, and tax is the only module not connected to the belief system at all. Multi-entity
(§13) is close behind, and its CTA/AOCI gap is worse than "unbuilt" — the product's own standards
registry explicitly excludes it, so that one needs a product decision, not just engineering time. AP
(§11) is heavily fabricated across intake, fraud-checking, and approvals. Collections (§12) is
equally fabricated but exempted per the in-development note above. General Ledger (§10) and
Reporting (§15) are the two solid pages in this batch — treat them as reference quality, not cleanup
targets.

## 9. Close (`/work/close`)

| Claim | Verdict | Citation |
|---|---|---|
| Per-task belief counters ("tied clean 9 closes · never corrected") | 🔴 NOT FOUND as described | Same cross-cutting gap above — coarse per-module EMA only |
| "Pinned to: tamper-evident · S3 + offsite" (closed period seal) | 🔴 NOT FOUND | Same fabrication as Control's seal claim (Part 1, item 9) — no hash/checksum/seal mechanism exists in `close_ops` or `core/periods`; period locking is real but it's a plain status field, not cryptographic |

**What to build:** nothing new — this is the same seal work already specified in Part 1, item 9.

## 10. General Ledger (`/work/general-ledger`) — mostly solid

| Claim | Verdict | Citation |
|---|---|---|
| Balanced-by-construction | ✅ CONFIRMED, rigorously | `ledger.ServiceImpl.ValidateEntry` (`internal/core/ledger/service_impl.go:356-455`) rejects unbalanced entries. Enforced further by a **CI-gated static-analysis rule**: `guardian/rules_accounting.go:14-64` (`RuleNoDirectJournalInsert`, level `FATAL`) scans the entire codebase for direct `INSERT INTO journal_entries` outside the ledger package, run as a required job in `.github/workflows/ci.yml` |
| Immutable history, reversal-only correction | ✅ CONFIRMED | No `DeleteEntry` method exists; `UpdateEntry` never touches line items (`repository.go:32`); no PUT/DELETE route for journal entries at all |
| Period lock enforced at the ledger level | ✅ CONFIRMED | `PostEntry` itself calls `periods.CanPost` inside its own transaction (`service_impl.go:119`) — not just a `close_ops` gate |
| Deterministic provenance on every entry | ✅ CONFIRMED | `SourceType`/`SourceID` required, validated (`ErrEntryMissingProvenance`), used consistently by AP/AR/closing |
| Per-vendor belief counters ("AWS invoices → 50100, coded 217×") | 🔴 NOT FOUND as described | Cross-cutting gap above |

**What to build:** nothing structural — this page is the most accurate on the site. Only fix the
belief-granularity copy.

## 11. Accounts Payable (`/work/ap`) — heavily fabricated

| Claim | Verdict | Citation |
|---|---|---|
| Bill reading with per-field confidence (99% confident, vendor 100%, GL account 96%) | 🔴 NOT FOUND | No OCR/extraction primitive anywhere; `ap.Bill`/`ap.BillLine` (`internal/ap/ap.go:120-189`) have no confidence field. The only "confidence" concept in the repo is the generic belief-strength engine, unrelated to document extraction |
| Three-way match (PO ↔ receipt ↔ bill) | ✅ CONFIRMED, but scoped differently than claimed | Lives in `internal/manufacturing`, not `internal/ap`. `RecordSupplierInvoice` (`manufacturing/service_impl.go:384`) hard-blocks on price/qty mismatch against the PO, then calls `apSvc.CreateBill`. **`ap.Bill` itself has no PO/receipt linkage field** — the match happens upstream before the bill exists. A claim that "AP does three-way matching" should be scoped to manufacturing-linked bills, not universal AP |
| Duplicate payment detection (same vendor/amount/invoice number) | 🔴 NOT FOUND | Only dedup found: identical bill IDs within one payment-run request (`service_payment_runs.go:186-188`), and integration `ExternalID` idempotency. No cross-bill vendor+amount+invoice-number fraud check anywhere |
| Vendor bank-detail-change / new-payee verification hold | 🔴 NOT FOUND | `Vendor` struct (`ap.go:81-117`) has no bank-account/routing field at all — nothing exists to detect a change against |
| 1099/W-9 tracking, holds bill until collected | 🟡 PARTIAL | Fields and status-derivation are real (`Requires1099`, `W9Status`, etc., `ap.go:103-110`; auto-set logic `service_impl.go:1206-1213`) — but nothing in `CreateBill`/`FinalizeBill` blocks a bill with a missing W-9. It tracks; it doesn't hold |
| Approval chain, multi-signer, $ threshold | 🔴 NOT FOUND, at any level | Zero approval logic inside `internal/ap` itself (no `Approv*` symbols, no `internal/approvals` import). Combined with Part 1's finding that `vendor_payment.run` has no dollar-threshold gate either (only an RBAC role check) — there is no approval chain for AP payments at any level of the stack today |

**What to build:**
1. Bill-field extraction with confidence: a real document-intake/OCR pipeline (the existing
   `internal/documentintake` package only stores raw attachments and routes them — no parsing layer
   exists yet to build on).
2. Give `ap.Bill` a PO/receipt reference field so three-way-matched bills carry that provenance
   forward, instead of the match happening upstream and being lost.
3. Cross-bill duplicate detection: same-vendor + same-amount + same-invoice-number heuristic,
   holding instead of auto-creating the bill (mirror the belief-strength blend already used in
   `internal/banking`'s `SuggestMatches`).
4. Vendor bank-account field + a change-detection check before payment.
5. Gate `FinalizeBill`/payment-run inclusion on `W9Status != "MISSING"` for 1099 vendors — the
   tracking already exists, this is just wiring an existing field into an existing validation path.
6. Extend the dollar-threshold approval gate (`approvalGate()`, real, used elsewhere) to
   `vendor_payment.run` — already specified in Part 1, TAMi item 1.

## 12. Collections (`/work/collections`) — in development, leave marketing as-is

| Claim | Verdict | Citation |
|---|---|---|
| AI phone calls (voice, recording, transcription) | 🔴 NOT FOUND — **confirmed in development, keep in marketing** | No telephony dependency in `go.mod`; the only outbound-communication code is `internal/communications/sender.go`, email-only (Resend API) |
| Dunning ladder (day 1/14/30/45/60 escalation) | 🔴 NOT FOUND — **in development** | No dunning/escalation type in `internal/ar` or `internal/communications` |
| Promise-to-pay capture | 🔴 NOT FOUND — **in development** | No `PromiseToPay` type anywhere in the repo |
| Dispute logging on an invoice | 🔴 NOT FOUND — **in development** | `InvoiceStatus` enum has only `DRAFT/FINALIZED/PARTIAL/PAID/VOID` — no disputed state |
| Finance charge / late fee (1.5%/mo) | 🔴 NOT FOUND — **in development** | Zero hits for finance-charge/late-fee/penalty logic anywhere |
| Cash application, incl. splitting one payment across invoices | ✅ CONFIRMED, solid | `SuggestPaymentApplications` (`internal/ar/service_impl.go:811-915`) — real scored matching (exact amount, aging bonus, reference match, belief-blend); `ApplyPayment` (`service_payment_applications.go:23`) really does split one payment across N invoices |

**What to build:** the five in-development items above — no further spec needed here since backend
already has this on the roadmap. Cash application is done; consider leading marketing with it since
it's the one piece that's true today.

## 13. Multi-entity & consolidation (`/work/multi-entity`) — heavily fabricated

| Claim | Verdict | Citation |
|---|---|---|
| FX translation (BS at closing rate, IS at average rate) | ✅ CONFIRMED | `translateBalanceSheet`/`translateIncomeStatement` (`internal/consolidation/service_impl.go:613-722`) |
| Translation difference → CTA/AOCI in equity | 🔴 **EXPLICITLY EXCLUDED**, not just missing | `internal/standards/registry/registry.go:371` lists `"automated CTA rollforward journals"` under `ExcludedTopics` for ASC 830. Mechanically, each entity's equity is re-translated independently at spot rate — no FX differential is ever generated that would need a CTA plug. This is the strongest "the product's own code says this doesn't exist" finding in the whole review |
| Intercompany elimination (auto-match, net to zero) | 🔴 NOT FOUND | Real "elimination entity" concept exists, but the elimination JE is **human-supplied line by line** via `postGroupConsolidationElimination` (`cmd/api/handlers_consolidation_eliminations.go:31-155`). `EliminationMode` field exists but is never branched on anywhere (stored/round-tripped only). No matching/netting logic exists |
| Monetary balance revaluation (FX gain/loss) | ✅ CONFIRMED, solid, accounting-correct | `RunRevaluation` (`internal/multicurrency/service_impl.go:231`) — real per-item revaluation, correctly P&L-routed (distinct from CTA) |
| Group/entity hierarchy, consolidated statements | 🟡 PARTIAL — real but undisclosed restriction | `groups.Group`/`GroupMember` and `consolidation.Service.Preview*` (`internal/consolidation/service_impl.go:66-539`) are real. But `resolveGroupScope` (`:541-566`) only supports **single-level parent, 100% ownership, "full" consolidation method** — non-full ownership/equity method is explicitly rejected as "first-wave." The page presents consolidation as fully general |
| Per-relationship belief ("US↔UK matched 40×, runs alone") | 🔴 NOT FOUND, worse than elsewhere | `internal/consolidation`, `internal/multicurrency`, `internal/core/groups` have **zero references to the belief system at all** — not even the coarse per-module version other pages at least have |
| Coexist with incumbent ERP during onboarding | 🔴 NOT FOUND | No import/integration path for an external system's entity data into a consolidation run. Onboarding's `SourceMode` tracks per-domain connection status within one entity, not multi-entity ERP coexistence |

**What to build:**
1. CTA/AOCI routing: currently explicitly out of scope per the standards registry — this needs a
   product decision (is it wanted?) before it's an engineering task, since the code actively
   documents it as excluded.
2. Real intercompany matching: auto-match receivable/payable pairs by amount + counterparty +
   period, net to zero in consolidation only, replacing the manual line-entry workflow.
3. Extend consolidation beyond single-level/100%-owned/full-method — equity method and partial
   ownership are flagged in the code itself as "first-wave" follow-ups.
4. Wire consolidation/multicurrency/groups into the belief system if per-relationship autonomy is
   wanted — today it's not connected at all.
5. An external-ERP coexistence path is a scoped integration project, not a small fix — likely needs
   its own design (what does "partial consolidation with an external entity" even return?).

## 14. Tax & compliance (`/work/tax`) — the worst on the site

| Claim | Verdict | Citation |
|---|---|---|
| Economic nexus tracking, flags before crossing threshold | 🔴 NOT FOUND | Zero hits for "nexus" or "approach" anywhere in the repo. `internal/tax/tax.go` defines only `TaxJurisdiction`, `TaxPeriodLiability`, `TaxSettlement` — a liability register, nothing more |
| 1099/W-9 tracking | 🟡 PARTIAL | Same real fields as AP (item 11) — but no $600 threshold anywhere in the codebase, and no payment hold tied to `W9Status` |
| Sales-tax registration workflow with sign-off | 🔴 NOT FOUND | No registration type or service exists; the only hit is a descriptive onboarding checklist string |
| Sales-tax filing preparation | 🔴 NOT FOUND | `tax.Service` exposes only jurisdiction CRUD + accrue/settle — no return/filing computation method. `"avalara"` appears once as an unwired suggested-connector label |
| Belief/autonomy per filing type | 🔴 NOT FOUND — **tax isn't in the belief system at all** | No `TaxSeeds` in `beliefs/seeds.go`; `taxSvc` is never wired to `SetBeliefService` in `cmd/api/main.go`, unlike every other module (AR/AP/recurring/closing/banking) |

**What to build:** essentially the whole page, from close to scratch:
1. Nexus tracking: a per-state cumulative-sales counter against published economic-nexus
   thresholds, with an "approaching" percentage computation — net-new.
2. Wire the $600 1099 threshold and a payment-hold check into the existing W-9 fields (small, since
   the fields already exist — same fix as AP item 5).
3. A registration-workflow type with a draft + human-sign-off gate, mirroring the pattern used
   elsewhere (e.g., asc606's `ErrRequiresHumanReview`).
4. Filing-preparation logic: compute an actual return amount ready to hand to a filing provider,
   distinct from the existing accrue/settle liability tracking.
5. Add `TaxSeeds` and wire `taxSvc` into the belief system if per-filing autonomy is wanted —
   today it's the only module with zero integration.

## 15. Financial reporting (`/work/reporting`) — mostly solid

| Claim | Verdict | Citation |
|---|---|---|
| Three-statement assembly from the ledger | ✅ CONFIRMED | `internal/reporting/service_impl.go` builds directly off `ledger.Service` data, not a separate model |
| Drill-down from report line to entries | ✅ CONFIRMED, composed not atomic | Client stitches `AccountActivity` + journal-entry-detail calls — no single "click this line" endpoint, but the underlying data is real and reachable |
| AI-drafted flux/variance commentary | 🔴 NOT a working feature — **status unconfirmed, flagging rather than assuming** | `FPAOracle.ExplainVariance` (`internal/mars/fpa/proposal.go:68-71`) is a fully-designed interface (`VarianceNarrativeRequest` → `VarianceNarrativeProposal` with `Summary`/`EvidenceRefs`/`Claims`) with **zero implementations and zero callers anywhere in the repo**. It also belongs to FP&A plan-vs-actual variance, not month-over-month GL flux. Looks like planned scaffolding (same shape as collections' in-development features), but not confirmed as active dev — needs a decision before treating it like the collections exception |

**What to build:** if flux narrative is confirmed in-development, nothing further needed here beyond
what's already scaffolded. If it's not actively planned, this needs an actual implementation of
`FPAOracle` (or a reporting-specific equivalent) wired to real GL period-over-period deltas, plus
whatever LLM call is meant to draft the prose — none of that exists today.

---

## Cross-cutting notes for whoever picks this up

- **Reusable pattern**: asc606's `Planner`/`Translator`/`Driver`/`Verifier` + `WorkUnit`/`Verb` +
  `ErrRequiresHumanReview` is the most mature architecture in the repo. ASC 740, 718, 815, and 842
  modification-handling would all benefit from adopting this shape rather than the flatter
  `Translator`/`Driver`-only pattern they currently have — it's specifically built for "the engine
  drafts a judgment and stops for sign-off," which is the exact behavior the marketing site claims
  everywhere.
- **The belief/EMA system is real and good** — it's just under-applied. Of all the modules that
  could gate on `DetermineSupervisionMode`, only `internal/recurring` actually does. Wiring it into
  banking match auto-apply, AP coding, and AR collections would make several "TAMi learns and acts"
  claims true with comparatively little new code, since the scoring mechanism already exists.
- **`DecisionBundle` is fully built and completely unused** — wiring it into even one real posting
  path is probably the highest leverage-per-hour item in this whole document.
- The eval-stats claims (TAMi + Control) are the two items that most need a decision before
  anything else: build the harness for real, or pull the numbers. Everything else in this doc is
  "build the feature," these two are "decide if the feature is real."

---

# Part 3 — `/industries/*` pages (2026-07-01)

Same method as Parts 1-2: every claim checked against the real B2 Go source. Six industry pages
(SaaS, Hardware, Marketplaces, Healthcare, Manufacturing, Professional Services) share one template
(`components/IndustryPage.tsx`) but each has bespoke industry-specific claims in `lib/industries.ts`.
This part covers those bespoke claims only — the shared template's generic sections (reconciliation,
AP, GL, leases, etc. shown in the "whole close" bento) restate claims already covered in Parts 1-2 and
aren't re-verified here.

**Priority, worst first:** Healthcare is a clean sweep — every single domain claim (837/835 EDI,
payer-based A/R, contractual allowances, clearinghouse integration) is 100% absent; this backend has
no healthcare/RCM concepts at all, not even a partial analogue. Marketplaces is next, and like
Multi-entity's CTA/AOCI gap, its centerpiece claim isn't just unbuilt — principal-vs-agent
determination is explicitly listed as an **excluded topic** in the standards registry. Professional
Services and SaaS are both heavily fabricated, and one finding there is worse than plain absence: the
percentage-of-completion claim is *contradicted* by hardcoded straight-line-only logic despite a
doc comment and unused verb constants suggesting it was meant to exist. Hardware/Manufacturing is the
most mixed page in this batch — WIP tracking and COGS-on-shipment are genuinely real and well-tested,
but the flagship "how it works" worked example on the Manufacturing page itself is directly
contradicted by the code (see §17, item 1) — a good one to fix first since it's the page's own
demo, not a peripheral claim.

## 16. SaaS & subscription (`/industries/saas`)

| Claim | Verdict | Citation |
|---|---|---|
| ASC 606 revenue rec from contract, modification re-cutting the waterfall | ✅ CONFIRMED | Real five-step engine already verified in Part 1, §1 — this page's claims are consistent with it |
| Usage-based/metered billing accrued from event data, reconciled to invoice | 🔴 NOT FOUND | No usage-event ingestion or accrual-vs-invoiced reconciliation anywhere. `Contract.BillingCycle` has `"usage"` only as a comment example, never branched on in code (`internal/primitives/contract/contract.go:52`) |
| MRR / ARR / NRR derived from the GL | 🔴 NOT FOUND — pure marketing-layer concept | Grepped `MRR\|ARR\|NRR\|recurring.?revenue\|net.?revenue.?retention` repo-wide — zero real hits. `internal/pulse` and `internal/reporting` compute standard GAAP metrics only (revenue, margins, AR/AP aging) — no cohort/retention/recurring-revenue derivation exists at any layer |
| Stripe & Recurly reconciled nightly | 🟡 PARTIAL | Stripe reconciliation is real (Part 1/2 findings). No Recurly-specific integration found — only Stripe exists under `internal/integrations/` |

**What to build:** MRR/ARR/NRR is the load-bearing claim on this entire page (hero card, KPIs, and
the homepage's "deferred" bento tile all show it) and there's nothing to build it from today — it
needs a real recurring-revenue model (subscription line items with start/end dates, a
new/expansion/contraction/churn classification per period) computed from the ledger, not just a
dashboard label. Usage billing needs an actual event-ingestion path before "trued up automatically"
is true.

## 17. Hardware & physical goods (`/industries/hardware`) + Manufacturing (`/industries/manufacturing`)

Grouped together — both pages make nearly identical inventory/costing claims.

| Claim | Verdict | Citation |
|---|---|---|
| Price variance: books inventory at PO price, isolates variance to its own account, holds for sign-off | 🔴 **NOT FOUND — directly contradicts the page's own worked example** | `RecordSupplierInvoiceInput.PriceVarianceAccountID` (`internal/manufacturing/manufacturing.go:260`) is dead code, never read anywhere. The actual check (`service_impl.go:471-473`) unconditionally rejects any bill where unit cost differs from the PO: `conflict("invoice unit cost differs from PO unit cost; price variance flow not enabled")`. No flag or feature toggle changes this. The Manufacturing page's own "How it works" section shows this *exact* scenario (PO $4.10/yd vs. bill $4.50/yd) resulting in a $4,800 PPV entry "held for sign-off" — the real system just rejects the bill, full stop |
| Perpetual inventory (raw/WIP/FG), standard/average/FIFO costing | 🟡 PARTIAL | Real costing methods and per-item valuation exist (`internal/inventory/inventory.go:26-33`, `service_impl.go:291-419`) — but it's one generic item type, no raw/WIP/FG state distinction, and WIP completion (`internal/wip/`) is never wired to the inventory package at the code level (no import either direction) |
| Lower-of-cost-or-NRV write-downs | 🔴 NOT FOUND | Zero hits for "NRV," "net realizable," "lower of cost," or "write-down" anywhere in the repo |
| Landed cost (freight/duty/insurance/broker) rolled into unit cost | 🔴 NOT FOUND | Freight/duty tracked in `internal/carrierexpense/` and `internal/shipmentexecution/` but **always expensed** (posted to an expense account for cost-recharge/margin purposes), never capitalized. No field on `PurchaseOrderLine`/`GoodsReceiptLine` for freight/duty, and nothing rolls such costs into `UnitCost` anywhere |
| COGS relieved on shipment, matched to revenue | ✅ CONFIRMED, solid | `RecordShipment` (`manufacturing/service_impl.go:862-972`) relieves inventory and posts COGS in the same atomic transaction (`RunInTx`) |
| Returns reverse the entry and re-value the restocked unit | 🟡 PARTIAL | A real generic reversal mechanism exists (`inventory.ReverseMovement`, `service_impl.go:580-819`, restores FIFO layers correctly) — but it's exposed only as a standalone API endpoint with no caller in `internal/manufacturing`. A return isn't automatic; it requires manually invoking the generic movement-reversal endpoint against the original shipment |
| Standard costing with purchase-price and usage variances isolated | 🔴 NOT FOUND | Beyond the dead PPV field above, no variance-computation logic exists; `CostingStandard` only assigns a fixed unit cost, never compares actual vs. standard |
| WIP, stage by stage, rollforward always ties | ✅ CONFIRMED, real and well-tested | `internal/wip/` — real `WorkOrder`/`StageEvent` types, per-stage ledger posting, auto-completion logic, tested reversal and concurrency handling (`service_test.go`). Caveat: standalone module, not imported by `internal/manufacturing` or `internal/inventory` — "relieves to finished goods" happens at the GL level only, not as an automatic FG item receipt |
| Retailer chargebacks coded to the order, never written off | 🔴 NOT FOUND as claimed | `CreditMemo` (`internal/ar/ar.go:243-263`) links to one invoice with a lump amount and free-text reason — no SKU/order-line allocation. The only chargeback-named account (`5041`) is Stripe card-network dispute handling, aggregate-only, unrelated to retailer deductions |

**What to build:**
1. **Fix the price-variance flow first** — this is the one item actively contradicting a page's own
   demo, not just an unbuilt claim. Either implement the PPV-isolation path the dead
   `PriceVarianceAccountID` field implies, or the marketing needs to describe what actually
   happens (bill rejected, resubmit or adjust the PO).
2. Wire `internal/wip` completion to `internal/inventory` so finishing a work order creates a real
   finished-goods receipt, not just a GL-level WIP credit.
3. Add freight/duty/broker fields to `PurchaseOrderLine`/`GoodsReceiptLine` and a capitalization
   path into `UnitCost` — today this is architecturally similar to how ASC 350's phase-gate cost
   classification works (Part 1, §3) and could reuse that shape.
4. NRV write-down testing: compare `InventoryBalance` carrying value against a market/NRV input
   periodically, post the write-down automatically.
5. Wire `inventory.ReverseMovement` into a manufacturing-aware "record return" flow that decrements
   `QuantityShipped` and links back to the originating SO line.
6. Order/SKU-level chargeback coding: extend `CreditMemo` with a line-item allocation instead of a
   lump amount + free text.

## 18. Marketplaces (`/industries/marketplaces`)

| Claim | Verdict | Citation |
|---|---|---|
| Principal-vs-agent determination, gross/net recognition per transaction | 🔴 **EXPLICITLY EXCLUDED**, not just missing | `internal/standards/registry/registry.go:148` and `internal/companymodel/projection_test.go:54,84` list `"all principal-agent edge cases"` as an excluded topic. The only code trace is a dead comment in `needsHumanReview` (asc606 `planner/rules.go:317-319`): `// Principal vs agent ambiguity — (Would need product/service type information)` — flagged, never implemented |
| GMV / platform-revenue / seller-liability separated into distinct accounts | 🔴 NOT FOUND | No GMV account, no take-rate revenue account, no seller-liability account anywhere in the chart of accounts or `internal/ar` |
| Transaction-level platform/seller fee splits | 🔴 NOT FOUND | Stripe fee posting is real (`internal/integrations/stripe/webhook_settlement.go:190,277`) but single-entity — the company's own processing fee, no second party, no split of proceeds between platform and seller |
| High-volume payout reconciliation "to $0.00 overnight" | 🟡 PARTIAL, narrower than implied | Bulk *fee* posting per payout is real (one payout → many balance-transaction fee entries, `webhook_settlement.go:50-178`). But the payout itself settles as one lump cash entry, and bank-statement matching is still strictly 1:1 by `amount+stripe_payout_id` (`internal/banking/service_reconciliation_scoring.go:46-55`) — no one-to-many split-matching exists (consistent with the reconciliation finding in Part 1) |
| Seller liabilities & reserves, released on schedule | 🔴 NOT FOUND | Zero hits for escrow/scheduled-release/rolling-reserve/holdback anywhere in the codebase |
| Adyen integration | 🔴 NOT FOUND, at all | Zero matches for "adyen" anywhere in the repo — code, tests, or comments. Only Stripe exists |

**What to build:** this is close to a net-new module. A real marketplace ledger model needs: a
principal-vs-agent control test (the dead comment in asc606 is the closest existing hook — could
follow the same drafted-judgment pattern used for genuinely-implemented 606 judgment calls), distinct
GMV/take-rate/seller-liability account types, per-transaction fee-split posting, and a seller-reserve
liability with a scheduled release job. Adyen would be a net-new integration alongside Stripe.

## 19. Healthcare & RCM (`/industries/healthcare`)

| Claim | Verdict | Citation |
|---|---|---|
| 837 claim file ingestion | 🔴 NOT FOUND | Zero hits for "837" or healthcare-EDI anywhere in the repo |
| 835 remittance advice ingestion | 🔴 NOT FOUND | Zero hits for "835"; the only "remittance" hits are payroll tax/net-pay settlement (`internal/payroll/`), unrelated |
| Net-of-contractual-adjustment revenue recognition, by payer | 🔴 NOT FOUND | Zero hits for "payer" (AR-relevant) or "contractual" anywhere; `internal/standards/asc606` has no payer or allowance concept |
| Payer-based A/R subledger with denial-reason tracking | 🔴 NOT FOUND | `internal/ar/ar.go`'s AR model (`Invoice`, `AgingReport`, etc.) is keyed on `CustomerID` only — no `Payer` or `DenialReason` type exists anywhere |
| Bad-debt / implicit price concession from collection history | 🔴 NOT FOUND | Only a static chart-of-accounts line ("Bad Debt Expense") and a manual credit-memo test — no statistical/historical estimation logic, consistent with ASC 740's valuation allowance being the only (manual) allowance mechanism in the whole codebase |
| Clearinghouse integration | 🔴 NOT FOUND | `internal/integrations/` has Stripe/Plaid/QBO/Ramp only — zero healthcare clearinghouse names (Availity, Waystar, Zirmed, Office Ally, Trizetto, Edifecs) anywhere |

**What to build:** this entire page describes a different product than what exists. There is no
partial substrate to extend — it needs 837/835 EDI parsing, a payer entity type, contractual-allowance
computation per payer contract, denial-reason tracking on AR, and a clearinghouse integration, all
net-new. Worth a product conversation before an engineering estimate: this is the one page in the
whole site where "close the gap" means building a materially different vertical product, not
extending an existing primitive.

## 20. Professional services (`/industries/proservices`)

| Claim | Verdict | Citation |
|---|---|---|
| Percentage-of-completion via cost-to-cost | 🔴 **NOT FOUND — contradicted by code**, not just absent | `RevenueSchedule.Method` (`asc606/engine.go:139`) has a doc comment listing `"output"`/`"input"` as options, but every producer hardcodes `"straight_line"` (`planner/rules.go:167`, `engine_impl.go:608`). Periods are pre-computed by even division (`engine_impl.go:631-683`), not cost-incurred-to-date. `VerbRecognizeOverTime`/`VerbMeasureProgress` are declared but never referenced anywhere else in the repo — dead verb constants suggesting this was planned and abandoned |
| Unbilled WIP / contract asset from approved time entries | 🔴 NOT FOUND | Zero hits for `TimeEntry`/`Timesheet` anywhere. The only "WIP" package is manufacturing-specific (`internal/wip/`, per §17) and unrelated |
| T&M vs. fixed-fee, handled distinctly | 🔴 NOT FOUND | No contract-type flag exists; `ContractLine.RecognitionPattern` only distinguishes `over_time`/`point_in_time` |
| PSA tool integration | 🔴 NOT FOUND | No Harvest/Mavenlink/Kantata/Toggl-type integration anywhere |
| Utilization & realization derived | 🔴 NOT FOUND | Zero hits for engagement/billable-hour/utilization/realization concepts anywhere, including in the KPI/metrics package (`internal/pulse`) |

**What to build:** like Healthcare, this is close to a different product. The one real hook to build
from is the dead `VerbRecognizeOverTime`/`Method: "output"/"input"` scaffolding in asc606 — implementing
real cost-to-cost percent-complete there would fix both this page's centerpiece claim and complete a
capability that was clearly scoped once (the doc comment, the unused verb) and then abandoned. Unbilled
WIP, T&M/fixed-fee branching, PSA integration, and utilization/realization are all net-new.

---

## Cross-cutting notes, Part 3

- **Two "designed-then-abandoned" patterns found in this batch**, both worth flagging to whoever owns
  the asc606 engine: the `Method: "output"/"input"` field (§20) and the `PriceVarianceAccountID` field
  (§17) are both dead — declared, documented, and never wired up. These are cheaper to finish than to
  build from scratch, unlike the healthcare and marketplace gaps which are closer to net-new modules.
- **Two industries (Healthcare, and to a lesser extent Marketplaces/Professional-Services) describe
  products this backend fundamentally isn't built for yet**, not features that are merely unwired.
  Worth a product-scoping conversation on whether these pages should exist in their current form
  before committing engineering time, versus the rest of this document where "build it" is a clear,
  scoped answer.
- Same repeated pattern as Parts 1-2: per-vendor/per-relationship belief counters shown on every
  industry page's capability list are the same coarse-per-module overclaim already documented.
