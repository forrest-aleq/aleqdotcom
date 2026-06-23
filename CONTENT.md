# Aleq website — full content (copy deck)

Verbatim text of every page, extracted from `app/**/page.tsx` on 2026-06-22.
Headings prefixed `###`, kickers *italic*, table rows shown as `cell | cell`, list items as `-`.
Note: the homepage bento and some widgets also have Manual/Assist/Auto copy variants in `components/HomeShowcase.tsx` (not duplicated here).

---

## `/company/contact`

talk to aleq

# No SDR. No demo theatre. A live close on the call.

30 minutes. We close last month on your real books, while you watch.
You walk away with a number — what Aleq saved you, what it would cost going forward.

### Book a slot.

Your name
Work email
Company
Your role
CEO / Founder
CFO / VP Finance
Controller
Accountant / Senior
Investor
Other
Annual revenue
Pre-revenue
$1–5M
$5–25M
$25–100M
$100M+
Current stack
Anything else?
Talk to Aleq →

We respond within 90 minutes during business hours.
Got it.
We'll reach out within 90 minutes with a calendar link. If it's urgent, ping hello@aleq.com .

#### What the call looks like

- You connect view-only access to your bank + accounting system. (5 min)
- Aleq pulls your books and runs last month's close. Live. While you watch. (~6 min wall-clock for most $5–50M companies — you'll see the timestamps.)
- We compare what Aleq did to what your team did, line by line. Discrepancies have explanations.
- You see the labor math: human cost vs. Aleq cost on those exact tasks.
- If you want to keep going, we kick off a 48-hour migration. If not, we delete the access tokens and you walk.

No deck. We don't have one. We don't think you have time for it.

No SDR. The first call is with a founder. The second is with the engineer who'd run your migration.

---

## `/company/pricing`

pricing

# $60 per operator hour. Metered, audited, capped.

Aleq is finance labor. The rate is flat across every action class.
The meter records every operation in second-precision and posts a monthly
reconciliation to your AP — the same way you would settle any other vendor invoice.
labor calculator

### Enter your finance team. See the math, not the marketing.

Loaded cost (salary, benefits, payroll tax, tooling, real estate) versus Aleq metered labor at $60 per operator hour.

#### Replace the in-house finance team

Slide to match your headcount. Loaded cost = base × 1.30 (benefits, tax, tooling, real estate).

Controller (base salary) $165,000
Senior staff accountant $95,000
AR / collections clerk $58,000
AP clerk $54,000
QBO / NetSuite + add-ons (annual) $48,000
Aleq hours / month (est.) 28 h

Most $5–50M ARR companies run Aleq 18–40 hrs/mo. Closes books, AR, AP, reconciles, dunning, voice calls.
In-house team — annual
$465,400
Aleq labor — annual
$20,160
Aleq throughput multiplier
23×
Net annual savings
$445,240 /yr
Coverage is 24×7. Capacity scales without re-quoting.
action classes

### One rate. Three classes of work.

Every Aleq operation falls into one of three classes. The rate is the same. The classes describe what Aleq is doing on your behalf and how the meter records it.

background labor
Books, reconciliations, AR/AP, period close
$60 /hr
- Bank reconciliation and transaction classification
- Invoicing, payment application, AP three-way match
- Journal entries, accruals, period close binding
- Tax provision, sales tax filings, 1099 prep
- Metered to the second of CPU and ledger I/O
communication labor
Bespoke email, dunning, vendor & customer comms
$60 /hr
- Per-customer dunning notes that read prior history
- Payment-plan negotiation (text) within standing orders
- Vendor confirmations and statement reconciliation
- Inbound finance-mailbox handling and routing
- Drafts under Assist mode · sends under Autonomous mode
voice labor
Outbound and inbound telephony
$60 /hr + $0.10/min carrier pass-through
- Live collection calls — negotiates, waives, escalates
- Vendor reconciliation and dispute calls
- Customer payment confirmations
- Recording and transcript attached to the journal entry
- Carrier-grade telephony, regulatory consent flows
how the meter is structured

### Software is the receipt. Labor is the product.

No seats
Headcount on your finance team is irrelevant to the bill. Aleq is one operator regardless of how many of your people coordinate with it.

No tiers
Every capability — voice, policy book, audit log, ERP write-back — is enabled on every account. Pricing does not gate features.

Hard cap
Set a monthly hour ceiling. Aleq queues non-urgent operations to the next cycle when you approach it. The book never goes red without your sign-off.

contracting

### Standard terms, ready for procurement.

Aleq is sold as a labor service, not a software license. Contracts are written for finance and procurement, not for development teams.

`Term | Default`
`Rate | $60 per operator hour, all action classes. Telephony pass-through at carrier cost.`
`Billing cadence | Monthly invoice, NET 30. Reconciliation packet with second-precision operation log.`
`Term | 12 months, 60-day notice to non-renew. Month-to-month available.`
`Hour cap | Customer-set monthly ceiling. Operations exceeding the cap queue or escalate per policy book.`
`Data residency | US-West-2 default. EU (Frankfurt) and UK (London) on enterprise contracts.`
`Compliance | Security review materials, DPA, subprocessor list, and auditor support available on request under MNDA.`
`Liability | Standard mutual indemnity, capped at twelve months of fees paid. Higher caps available on enterprise agreements.`
`Exit | Full data export in your ERP's native format. Policy book exported as plain Markdown. No retention beyond 90 days post-termination unless contractually required.`
questions finance teams ask

### What CFOs ask before signing.

How is an "operator hour" defined?
It is the wall-clock time Aleq spends executing on your behalf, summed across goroutines. Idle time is not billed. Voice time is billed end-to-end including hold and IVR. The monthly reconciliation packet itemizes every operation.
What does a typical month look like?
Companies in the $5M–$50M ARR range run 18–40 operator hours per month. That covers daily reconciliation, AR/AP, dunning, three voice calls per day, and a fully-bound monthly close.
Can we run Aleq in Assist mode only?
Yes. In Assist mode Aleq drafts every action — journal entries, dunning notes, payment runs — and waits for a human to approve. The hour rate is the same. Most teams move portions of work to Autonomous as confidence builds.
What happens if Aleq makes a mistake?
Every journal posts with a pre-computed reverse pair. Misclassifications and erroneous payments are reversible from the audit log with one click. The reversal is itself a billable operation but is typically waived on root-cause analysis.
Are voice and email actions metered the same way?
Yes — the rate is $60 per operator hour for both. Voice incurs an additional carrier pass-through ($0.10/min in the US). The reconciliation packet shows the breakdown.
Do we keep our existing ERP?
Yes. Aleq integrates with NetSuite, QuickBooks Online, Sage Intacct, and Xero. We do not replace your ERP or migrate your data. Aleq operates on your books, in place.

### Bring an unsigned period. We will close it on the call.

No deck, no SDR. We connect read-only to your ERP, replay the trailing month, and produce a close packet during the working session.

Book a working session
Compare against NetSuite, Puzzle, Rillet

---

## `/compare/campfire`

Aleq
vs.
Campfire

# Campfire answers your books. Aleq acts on them.

Campfire is an AI-native ERP with an ask-and-answer layer — "Slack for accounting." Aleq is the controller that does the work: gated, reversible, signed — then tells you exactly what it did.

the difference in one line
Campfire lets you ask about your books. Aleq acts on them — gated, reversible, signed — then tells you exactly what it did.

#### Aleq

autonomous controller
Does the work; you supervise.
- Does the work — closes, reconciles, collects — not just answers
- Acts on the books, doesn't only answer questions about them
- Governed autonomy: approval gates plus 30-second undo
- Every action signed, replayable, and reversible
- Collections by voice, in your name
- Billed by the hour worked — $/hr, no platform fee

#### Campfire

AI-native ERP · ask & answer
Answers about the work; you do it.
- Ask questions about your books in plain English
- You still do the work the answer implies
- Conversational, not autonomous execution
- No signed, action-level audit trail
- No collections execution
- Platform pricing
*head to head*

### Where they actually differ.

`Aleq | Campfire`
`Does the work end to end | ✓ | ask only`
`Acts vs. answers | ✓ acts | answers`
`Autonomous & governed (gates, undo) | ✓ | —`
`Signed audit trail | ✓ | —`
`Collections by voice | ✓ | —`
*moving from Campfire*

### From asking about the books to acting on them, in 48 hours.

No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.

01 Connect read-only Aleq reads Campfire and your feeds with read-only credentials. Nothing changes.
02 Replay a period It re-closes a month you've already signed and shows you every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to Auto on your timeline.
04 Move from asking to acting Stop querying the books and start delegating the work — gated and signed.
"Answering questions about the books isn't doing the books. We needed the entry made, checked, and signed — not a chat that tells us what to type."
— the case for a controller over a console

### Stop asking. Start delegating.

A conversational layer tells you what's wrong. Aleq fixes it — gated, reversible, and on the record.

Book a working session
See all comparisons

---

## `/compare/netsuite`

Aleq
vs.
NetSuite

# The ERP stores your close. Aleq does it.

NetSuite is the system of record — powerful, and entirely operated by you and a bench of consultants. Aleq is the controller that operates the books for you, and leaves a trail more auditable than the ledger itself.

the difference in one line
NetSuite gives you the most configurable place in the world to record the work. Aleq does the work — closes, reconciles, collects — and signs every move so your auditor can replay it.

#### Aleq

autonomous controller
Does the work; you supervise.
- Closes, reconciles, and collects end to end — autonomously, governed
- Live in 48 hours, read-only credentials, no implementation project
- Every action signed, gated, replayable, and reversible
- Eval-gated before any change touches your books
- Billed by the hour worked — $60/hr, no seats, no platform fee

#### NetSuite

legacy ERP
Stores the work; you operate it.
- You and your team do the close — NetSuite records it
- $50k–200k and 3–6 months of consultants to implement
- Audit trail is manual; no action-level signing or one-click undo
- No autonomous execution, no collections by voice
- Seat licenses plus platform and module fees
*head to head*

### Where they actually differ.

`Aleq | NetSuite`
`Does the work end to end | ✓ | you operate it`
`Autonomous & governed (gates, undo) | ✓ | —`
`Action-level audit trail | ✓ signed | manual`
`Collections by voice | ✓ | —`
`Time to live | 48 hours | 3–6 months`
`Pricing model | $/hr worked | seats + platform`
*leaving NetSuite*

### From system of record to live, in 48 hours.

No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.

01 Connect read-only Aleq reads NetSuite and your feeds with read-only credentials. Nothing changes.
02 Replay a period It re-closes a month you've already signed and shows you every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to Auto on your timeline.
04 Keep your ERP Aleq operates on top — keep NetSuite as the store, or migrate later.
"We didn't need a more configurable place to type the journal entry. We needed the entry made, checked, and signed — by morning."
— the case for a controller over a console

### Still doing the close inside NetSuite?

Bring an unsigned period. We'll connect read-only and close it — with the full signed trail — on the call.

Book a working session
See all comparisons

---

## `/compare`

*compare*

# Everyone else sells software. Aleq does the work.

NetSuite, Rillet, Campfire, Puzzle — even the AI-native ones are systems you operate. Aleq is the controller that operates them, and proves every move.

`Aleq autonomous controller | NetSuite legacy ERP | Sage Intacct finance system | SAP enterprise ERP | QuickBooks accounting system | Rillet AI-native ERP | Campfire AI-native ERP | Puzzle AI general ledger`
`Does the work, end to end | ✓ | you operate it | you operate it | you operate it | you operate it | you operate it | you operate it | you operate it`
`Autonomous & governed (approval gates, undo) | ✓ | — | — | — | — | — | — | —`
`Every action traced & replayable | ✓ | manual | manual | manual | — | — | — | —`
`Collections by voice | ✓ | — | — | — | — | — | — | —`
`Eval-gated before every change | ✓ | — | — | — | — | — | — | —`
`Time to live | 48 hours | 3–6 months | 2–4 months | 6–12 months | days | weeks | weeks | days`
`Pricing model | $/hr worked | seats + platform | seats + modules | seats + SI | tiered $/mo | platform fee | platform fee | tiered $/mo`
`Built for | any finance org | mid-market+ | mid-market | enterprise | SMB | SaaS | startups | startups · SMB`
leaving NetSuite vs. NetSuite Legacy ERP · months and six figures to implement.
You do the close; NetSuite stores it. Aleq does the close and is more auditable than the system of record.

Aleq vs. NetSuite →
leaving Rillet vs. Rillet AI-native ERP, built for SaaS revenue recognition.
Rillet automates the ledger; you still run it . Aleq runs it for you — across every vertical.

Aleq vs. Rillet →
leaving Campfire vs. Campfire AI-native ERP · ask-and-answer "Slack for accounting."
Campfire lets you ask about your books. Aleq acts on them — gated, reversible, signed.

Aleq vs. Campfire →
leaving Puzzle vs. Puzzle AI general ledger for startups · auto-categorization.
Puzzle keeps clean books. Aleq is the controller — close, collections, multi-entity, audit — you'd otherwise hire.

Aleq vs. Puzzle →
leaving Sage Intacct vs. Sage Intacct Finance system with dimensions, workflows, and reporting.
Intacct organizes the finance system. Aleq operates the work around it and shows each decision.

Aleq vs. Sage Intacct →
leaving SAP vs. SAP Enterprise ERP backbone.
SAP is infrastructure. Aleq is the operator layer that runs close, recon, AP, and collections.

Aleq vs. SAP →
leaving QuickBooks vs. QuickBooks Accounting system and forms.
QuickBooks stores the books. Aleq does the repetitive finance labor around them.

Aleq vs. QuickBooks →

### Bring an unsigned period.

We'll connect read-only, replay the books, and produce a close packet — with the full trail — on the call.

Book a working session
Rate card

---

## `/compare/puzzle`

Aleq
vs.
Puzzle

# Puzzle keeps the books. Aleq is the controller.

Puzzle is an AI general ledger for startups — clean books with auto-categorization. Aleq is the controller you'd otherwise hire: close, collections, multi-entity, tax, and audit — governed and signed.

the difference in one line
Puzzle keeps clean books for a small company. Aleq is the controller — close, collections, multi-entity, audit — you'd otherwise hire.

#### Aleq

autonomous controller
Does the work; you supervise.
- Full controller scope — close, AP, collections, multi-entity, tax, audit
- Autonomous and governed: approval gates plus 30-second undo
- Every action signed, reversible, and replayable
- Collections by voice, in your name
- Multi-entity and multi-currency consolidation
- Scales well past startup and SMB

#### Puzzle

AI general ledger · startups
Keeps the books; you do the rest.
- Clean GL plus auto-categorization for startups
- Bookkeeping scope, not controller scope
- You or your accountant still do the close
- Single-entity focus
- No collections execution
- SMB tier pricing — $/mo
*head to head*

### Where they actually differ.

`Aleq | Puzzle`
`Scope | full controller | GL / bookkeeping`
`Does the close | ✓ | —`
`Multi-entity & FX | ✓ | limited`
`Collections by voice | ✓ | —`
`Signed audit trail | ✓ | —`
*growing past Puzzle*

### From clean books to a controller, in 48 hours.

No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.

01 Connect read-only Aleq reads Puzzle and your feeds with read-only credentials. Nothing changes.
02 Replay a period It re-closes a month you've already signed and shows you every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to Auto on your timeline.
04 Graduate from bookkeeping Add close, collections, multi-entity, and audit — the controller's job.
"Clean books are the floor; a controller is the job. We needed the close done, checked, and signed — not just a tidy ledger to read."
— the case for a controller over a console

### Outgrowing bookkeeping?

Keep Puzzle's clean ledger if you like it. Aleq is the controller that does the work it can't.

Book a working session
See all comparisons

---

## `/compare/quickbooks`

Aleq vs. QuickBooks

# QuickBooks is where the forms live. Aleq is the controller doing the work.

QuickBooks is familiar because people know how to operate it. Aleq replaces the manual operating work: match the bank, post the entry, chase the invoice, and explain the result.

the difference in one line
QuickBooks gives you accounting forms. Aleq fills the work gap around them with governed, explainable finance labor.

#### Aleq

autonomous controller
Does the repetitive finance work.
- Reconciles bank and card activity continuously
- Drafts and posts journal entries with evidence attached
- Calls or emails customers for collections
- Escalates when the policy or confidence says stop

#### QuickBooks

accounting system
Stores the books; people do the work.
- Bank rules and forms still require human operation
- Close, AP, accruals, and collections are manual workflows
- Audit evidence is assembled after the fact
- Automation is rules-based, not judgment-aware
*head to head*

### What changes when Aleq is doing the work.

`Aleq | QuickBooks`
`Bank reconciliation | continuous | manual matching`
`Journal entries | drafted or posted | human-entered`
`Collections by voice | ✓ | —`
`Explains why it acted | ✓ | audit log`
`Best role | finance operator | book of record`
*keep your books*

### Aleq works on top — keep QuickBooks.

No migration, no rip-and-replace. Aleq connects read-only and does the operating work around the books you already keep.

01 Connect read-only Aleq reads QuickBooks and your bank, card, and processor feeds. Nothing changes.
02 Replay a month It re-reconciles and re-closes a month you've already done, and shows every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to automatic on your timeline.
04 Keep QuickBooks QuickBooks stays your book of record. Aleq does the operating work around it.
"We didn't need to leave QuickBooks. We needed the work around it — the matching, the chasing, the entries — done and explained ."
— the case for an operator over another login

### Keep the books. Remove the manual work.

Connect read-only and watch Aleq reconcile, explain, and stage entries against a real month.

Book a working session
All comparisons

---

## `/compare/rillet`

Aleq
vs.
Rillet

# Rillet modernized the ledger. Aleq runs it for you.

Rillet is an AI-native ERP, built for SaaS billing and revenue recognition — and entirely operated by you. Aleq is the controller that does the work across every vertical, and gates, signs, and reverses every move.

the difference in one line
Rillet modernized the ledger and pointed it at SaaS rev rec. Aleq runs the ledger for you — across hardware, services, marketplaces, and multi-entity — and gates and signs every move.

#### Aleq

autonomous controller
Does the work; you supervise.
- Does the work autonomously, you supervise — closes, reconciles, collects
- Every vertical — hardware, services, marketplaces — not just subscription
- Governed autonomy: approval gates plus 30-second undo
- Every action signed, replayable, and reversible
- Collections by voice, in your name
- Billed by the hour worked — $60/hr, no platform fee

#### Rillet

AI-native ERP · SaaS
You operate the platform; AI assists.
- You operate the platform — AI assists, you do the work
- Built around SaaS billing and ASC 606 revenue recognition
- No autonomous execution of the work
- Narrower integration ecosystem
- No collections execution
- Platform pricing; young company (~60 people)
*head to head*

### Where they actually differ.

`Aleq | Rillet`
`Does the work end to end | ✓ | you operate it`
`Autonomous & governed (gates, undo) | ✓ | —`
`Verticals | any | SaaS-first`
`Action-level audit trail | ✓ signed | —`
`Collections by voice | ✓ | —`
*moving from Rillet*

### From a SaaS ledger to a controller, in 48 hours.

No rip-and-replace. Aleq connects read-only and starts proving itself against the books you already keep.

01 Connect read-only Aleq reads Rillet and your feeds with read-only credentials. Nothing changes.
02 Replay a period It re-closes a month you've already signed and shows you every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to Auto on your timeline.
04 Expand beyond SaaS rev rec Add hardware, services, marketplaces, and multi-entity — Aleq does the work.
"We outgrew subscription-only accounting — entities, currencies, mixed revenue. We needed the work done, checked, and signed , not a nicer place to operate."
— the case for a controller over a console

### Past pure SaaS? Bring the books.

If you've outgrown subscription-only accounting — entities, currencies, mixed revenue — Aleq does the work Rillet leaves to you.

Book a working session
See all comparisons

---

## `/compare/sage-intacct`

Aleq vs. Sage Intacct

# Sage Intacct gives finance a system. Aleq gives finance an operator.

Intacct can store dimensions, approvals, reports, and journals. Aleq does the controller work on top: reconcile, investigate, post, collect, and leave the receipt.

the difference in one line
Sage Intacct is where the work is recorded. Aleq is the worker that completes the close, explains the decisions, and stops at your policy gates.

#### Aleq

autonomous controller
Does the work; you supervise.
- Matches transactions, drafts entries, posts approved work
- Explains why every action happened and what changed
- Starts read-only, then earns Assist and Auto by capability
- Billed by work performed, not seats

#### Sage Intacct

finance system
Organizes the work; your team operates it.
- Strong dimensional accounting and reporting
- Month-end still depends on people running the workflow
- Exception resolution, entries, and evidence assembly stay manual
- Pricing and implementation are software-led
*head to head*

### Where they differ.

`Aleq | Sage Intacct`
`Does the close work itself | ✓ | workflow`
`Autonomy per capability | ✓ | —`
`Explains every action | ✓ | audit log`
`Collections by voice | ✓ | —`
`Best role | controller labor | system of record`
*leaving the manual work*

### Live in 48 hours, alongside Intacct.

No re-implementation. Aleq connects read-only and starts proving itself against the books you already keep.

01 Connect read-only Aleq reads Sage Intacct and your feeds with read-only access. Nothing changes.
02 Replay a period It re-closes a month you've already signed and shows every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to automatic on your timeline.
04 Keep Intacct Aleq operates on top — keep Intacct as the system, or migrate later.
"Intacct gave us a solid system. Aleq gave us the person to operate it — closing, reconciling, and signing every move."
— the case for an operator over a console

### Keep the finance system. Replace the manual work.

Connect read-only and watch Aleq close a real month against your existing books.

Book a working session
All comparisons

---

## `/compare/sap`

Aleq vs. SAP

# SAP is the enterprise backbone. Aleq is the controller that gets the work done.

SAP is powerful infrastructure. Aleq is not trying to be another ERP migration. It operates finance workflows against the ledger, evidence, approvals, and policies you already have.

the difference in one line
SAP is where enterprise finance data lives. Aleq is the autonomous controller that reconciles, investigates, drafts, posts, and explains the work.

#### Aleq

autonomous controller
Runs finance work around the system of record.
- Works from read-only evidence before any write access
- Automates routine close, recon, AP, and collections work
- Stops at material policy gates and explains the decision
- Leaves signed, replayable action receipts

#### SAP

enterprise ERP
A durable system; still operated by teams.
- Deep enterprise process coverage and configurability
- Implementation and change management are major projects
- Close execution still depends on people and workflows
- Action explanation is not the product center
*head to head*

### The useful comparison.

`Aleq | SAP`
`ERP replacement required | No | It is the ERP`
`Does finance work itself | ✓ | workflow`
`Per-action explanation | ✓ | logs`
`Autonomy gates | ✓ | —`
`Best role | operator layer | system backbone`
*no rip-and-replace*

### Aleq runs beside SAP, live in 48 hours.

Keep the enterprise backbone. Aleq connects read-only and operates the controller-level work on top.

01 Connect read-only Aleq reads SAP and your feeds with read-only access. Nothing changes.
02 Replay a period It re-closes a month you've already signed and shows every step.
03 Start in Assist Aleq proposes; you approve. Move proven work to automatic on your timeline.
04 Keep SAP SAP stays the system of record. Aleq does the operating work beside it.
"We weren't going to replace SAP. We needed the close done and signed on top of it — without another consulting project."
— the case for an operator over a backbone

### Put Aleq beside the system you already trust.

We start read-only, replay a period, and show the actions before anything writes back.

Book a working session
All comparisons

---

## `/control`

the control plane · the moat

# Autonomy you can put on a leash.

It's not all-or-nothing. Aleq runs in one of three modes — and you set which, per task . Every action it takes is gated, signed, reversible, and eval-tested before it touches your books.

See it on your books
How it decides ↓
signed action receipts · ed25519 · 14-day reverse window
Action trail · today
all signed
a_19d4 May reconciliation · JE-12491 reversible
a_19c8 dunning · Haven Foods logged
a_1a02 AWS bill B-3041 · auto-posted reversible
a_1a07 Foxconn wire · awaiting CEO held
0x4f3b…0eb4 · ed25519 · hand your auditor a replay
*it's not all-or-nothing*

### Three modes. You set which, per task.

Start in Assist, move work to Auto only when you trust it, pull anything back to Manual anytime.

manual Aleq advises. You act.
It researches, drafts, and flags what needs doing. You make every call and post it yourself.

assist default Aleq proposes. You approve.
It prepares the entry and shows its work. One-click approve — or reject — before anything posts.

auto Aleq acts. You can undo.
It does the work and posts it, signed. Reverse in one click — 30s window, 14-day trail.

signed & replayable
Every action, signed. Hand your auditor a replay.
Each thing Aleq does carries an ed25519-signed, reversible ID in the action trail. Not a screenshot of a dashboard — a replayable record your auditor can verify independently.

- Why / Signal / Policy / Origin / Effects on every action
- Mechanical actions clear silently; material ones surface for approval
- Period seals pinned to S3 + offsite, hashed
Reasoning · a_19d4
`Why | 247 lines tie to bank to the penny`
`Signal | variance = $0.00 · within rules`
`Policy | P-RECON-DIFF-ZERO`
`Effects | posts JE-12491 · seals May`
reversible 14d · ed25519
undo & simulate
Undo anything. Dry-run first.
A 30-second undo window on every action, and a 14-day reverse window after that. Simulate any action against your real books with zero side effects before it runs.

- Every posting has its reverse pair staged
- Dry-run mode: see the entry, the trail, the effect — commit nothing
payment.send · Foxconn
`approved | wire | $188,440`
`2/10 net 60 | discount captured | −$3,768`
undo · 27s
the policy book is readable
It tells you what it believes — and why.
Every belief carries evidence, an autonomy strength, and a threshold that invalidates it. Above 95% accuracy on 20+ outcomes, a belief locks and Aleq acts without asking. Below 70%, or if new evidence drops accuracy, it asks first.

- Each belief shows its evidence count and "if wrong" impact
- Your accept / reject feedback flows back into autonomy
Belief register 6 active
`Belief | Autonomy | State`
`STRIPE TRANSFER ⇒ Stripe Clearing | 1.00 | locked`
`AWS bill in last 3 days, ±4% | 0.99 | locked`
`Foxconn early-pay 2/10 always on | 0.92 | tracking`
`Stark pays only after escalation | 0.42 | asks first`
eval-gated
It passes the test before it touches the books.
Every version of Aleq is graded against scenario packs — golden cases drawn from real close, collections, and reconciliation work. No pass, no deploy. The gate is 0.90; nothing ships under it.

- Scenario packs per function, scored A–F
- Regression-tested on every change — accounting can't silently drift
Eval gate · build 2026.4
`month-end-close pack | 0.96 | pass`
`collections pack | 0.94 | pass`
`reconciliation pack | 0.97 | pass`
`gate ≥ 0.90 | — | deploy`

### Trust is set, not assumed.

Connect read-only, start everything in Assist, and move work to Auto only when the trail earns it.

Book a working session
Security

---

## `/legal/privacy`

legal · privacy policy

# Privacy policy

Last updated · 2026-04-12 · v3.2

This privacy policy describes how Aleq, Inc. ("Aleq", "we", "us") collects, uses, and protects information when you use our products and services. This policy applies to aleq.com and the Aleq application.

### What we collect

We collect three categories of data:

- Customer financial data — your accounting ledger, bank feeds, customer + vendor records, contracts, and related materials you authorize Aleq to access. This is required for Aleq to function as your AI CFO.
- Account data — name, email, role, company, billing details. Used for authentication and billing.
- Usage data — actions taken in the product, error reports, performance metrics. Used to improve reliability and to debug.

### How we use it

Customer financial data is used solely to operate Aleq for that customer's account. We do not use customer financial data to train shared models, generate marketing assets, or share with any third party except as required by law or to operate the service (e.g., sending an email through SES on your behalf).

### Per-tenant isolation

Each customer's data is stored in a per-tenant database with a per-tenant encryption key. Aleq runtime processes are isolated per tenant. There are no cross-tenant queries, no shared embeddings, and no shared model fine-tunes.

### Data residency

By default, US customers are hosted in AWS us-west-2 and us-east-1. EU customers are hosted in eu-central-1. AU customers are hosted in ap-southeast-2. Data does not cross regions without explicit contractual agreement.

### Subprocessors

We use the following subprocessors to operate Aleq. Each is bound by a Data Processing Agreement that meets or exceeds GDPR and CCPA requirements:

- Amazon Web Services — infrastructure, storage, encryption
- Anthropic, OpenAI — language model inference (zero-retention agreements in place)
- Bland.ai — telephony for outbound voice (where customer enables)
- ElevenLabs — voice synthesis (where customer enables)
- Deepgram — speech-to-text (where customer enables)
- Stripe — billing and metering
- Drata — compliance monitoring
- Postmark, AWS SES — transactional email
The current list of subprocessors is also published at aleq.com/subprocessors and updated 30 days before any change.

### Your rights

You have the right to access, correct, export, or delete your data. Customer admins can do most of this self-serve in the product. To exercise rights you can't perform yourself, contact privacy@aleq.com and we will respond within 30 days.

### Retention

While your account is active, we retain your data indefinitely so the service can function. After account closure, we retain data for 90 days (for backup and recovery) and then permanently delete it. You can request immediate deletion in writing.

### Contact

Questions, complaints, or rights requests: privacy@aleq.com

Aleq, Inc. · Delaware corporation · principal place of business in San Francisco, CA

---

## `/legal/security`

legal · security disclosures

# Security disclosures

For the product-level audit trail, see Control plane . This page is the formal disclosure document.

### Compliance

- Security review — vendor security questionnaires, architecture notes, and relevant reports are available under NDA.
- GDPR + CCPA — DPA available pre-sales. EU representative listed in DPA.
- HIPAA — BAA available for healthcare customers. Aleq's per-tenant isolation supports HIPAA-grade obligations.
- PCI-DSS — Aleq does not store cardholder data. Card data is tokenized at point of capture by our PCI-Level-1 payment processor.

### Encryption

- At rest — AES-256-GCM with per-tenant data encryption keys. Keys are managed in AWS KMS with HSM-backed master keys.
- In transit — TLS 1.3 with forward secrecy. HSTS enabled with 2-year max-age.
- Backups — encrypted with the same per-tenant keys. Retained 90 days.

### Audit signatures

Every journal entry posted by Aleq is signed at the time of post with an ed25519 keypair held in HSM. Period closes are sealed with an aggregate signature over the entire period's signed entries. Auditors can verify cryptographically that no entries have been altered after signing.

### Access controls

- SSO — SAML 2.0 and OIDC supported (Okta, Azure AD, Google Workspace).
- SCIM — automatic user provisioning and deprovisioning.
- RBAC — granular, per-action permission model. Standard roles + custom role builder.
- MFA — required for all human users on privileged actions. Hardware security keys supported.

### Vulnerability disclosure

If you believe you've found a security vulnerability in Aleq, please email security@aleq.com . We acknowledge reports within 24 hours and aim to remediate critical issues within 14 days.

We operate a bug bounty program in coordination with HackerOne. Eligible reports receive bounties from $500 to $25,000 based on severity and impact. Full scope and rules are at aleq.com/bounty .

### Incident response

Aleq maintains a 24/7 security operations center. In the event of a customer-impacting security incident:

- Initial customer notification within 24 hours.
- Status updates every 4 hours during the active phase.
- Final post-incident report within 5 business days, including cause, scope, remediation, and prevention measures.

### Penetration testing

Aleq commissions an annual external penetration test by an independent firm (Trail of Bits, 2026-Q1). Customers can request the executive summary under NDA.

### Customer references

The following customers have agreed to share their security review experience with Aleq under NDA:

- Foxwell Robotics — Series C hardware company
- Helix Cloud — Series C SaaS company
- Loft Marketplace — Series B marketplace company
Contact security@aleq.com to request introductions.

---

## `/legal/terms`

legal · terms of service

# Terms of service

Last updated · 2026-04-12 · v3.4 · plain-English summary above each section

These Terms govern access to and use of the Aleq product and services (the "Service"). By using the Service, you ("Customer") agree to these Terms. The Service is operated by Aleq, Inc. ("Aleq").

### 1 · The Service

Plain-English: Aleq is the AI CFO. We do the work; you pay for the hour we worked.

Aleq provides an autonomous AI controller that performs accounting, treasury, accounts receivable, and accounts payable operations on behalf of Customer. The Service is metered in seconds of Aleq labor at a rate of $60.00 per hour (the "Labor Rate"), or such other rate as agreed in writing.

### 2 · Customer responsibilities

Plain-English: tell us what's true, sign your standing orders, don't ask us to commit fraud.

- Customer represents that all data provided to the Service is accurate and that Customer has the right to share it.
- Customer is responsible for reviewing and signing the Standing Orders policy book before authorizing autonomous operations.
- Customer agrees not to use the Service to commit, conceal, or facilitate fraudulent or unlawful activity.
- Customer remains the legal owner of its books, records, and accounting outputs. Aleq is an agent of Customer for the work it performs.

### 3 · Fees and billing

Plain-English: $60/hr metered, billed monthly, second-precision.

Aleq labor is metered to the second and billed monthly in arrears. Telephony and third-party voice fees (where Customer enables voice) are passed through at cost plus 0%. Customer may set a monthly cap on metered hours; Aleq will queue lower-priority work when the cap is reached.

### 4 · Confidentiality

Plain-English: we don't share, train on, or sell your data.

Aleq will not use Customer financial data to train shared models, generate marketing assets, or share with any third party except as required to operate the Service or by law. Per-tenant isolation as described in our Privacy Policy applies.

### 5 · Term and termination

Plain-English: leave anytime with 30 days' notice. We'll give you your data.

Either party may terminate this agreement upon 30 days' written notice. Upon termination, Aleq will export Customer's complete ledger and source documents in a portable format (CSV + signed manifest) and securely delete Customer data within 90 days, retaining only what is required by law.

### 6 · Liability

Plain-English: capped at 12× monthly fees; standard limitations.

Aleq's aggregate liability under this agreement is capped at 12 times the average monthly fees over the prior 12 months (or actual months billed if fewer). Neither party is liable for indirect, consequential, or punitive damages. Standard force majeure applies.

### 7 · Disputes

Plain-English: California law. Try to talk to us first. Then arbitrate.

This agreement is governed by California law. The parties will attempt to resolve disputes informally for 30 days before binding arbitration in San Francisco County, CA, under JAMS rules.

### Contact

Questions: legal@aleq.com

Aleq, Inc. · Delaware corporation · principal place of business in San Francisco, CA

---

## `/migrate`

Move to Aleq

# Switch systems in twenty minutes. With proof.

Connect your systems and Aleq rebuilds your books from the source — reconciled to the penny before the meeting is over.

Watch a live migration
How it works
Move to Aleq · Sirius Robotics
19:42
Trial balance matches
Cash matches
Accounts receivable matches
Accounts payable matches
Unexplained variance $0.00
8,412 records · 412 accounts
Certificate · ready for cutover
The moment

### Twenty minutes ago, this company ran on Rillet.

No implementation project. No six-month cutover. You connect the systems, give one instruction, and watch the books move — reconciled.

&rsaquo;
Migrate this company into Aleq — and don't stop until the books reconcile.
01 Connect Your current system and your banks, read-only. Nothing changes yet.
02 Reconstruct Aleq rebuilds the ledger from the source events, not your old records.
03 Reconcile Both ledgers, side by side, until every variance is explained.
04 Certify A signed reconciliation certificate. Cut over when you're ready.
Clean by reconstruction

### Don't migrate your mess. Rebuild it clean.

Most migrations copy your bad chart of accounts, duplicate vendors, and years of workarounds straight across. Aleq connects to the source — bank, billing, spend, payroll, contracts — and reconstructs the books from the real events. Your old ledger becomes the thing we check against, not the thing we copy.

sources Mercury · Stripe · Ramp bank, billing, spend, payroll, contracts
rebuild Aleq reconstructs the ledger clean chart, deduped vendors, real coding
old ledger Comparison oracle used to check the rebuild, every variance explained
Proven before cutover

### Both ledgers, side by side. Every difference explained.

Aleq runs in parallel with your current system and reconciles the two — line by line. Where they differ, it tells you exactly why. You cut over when the variance is zero and you've seen the proof, not on a promise.

Reconciliation · Aleq vs Rillet
1,842 balances matched tied out
Stripe payout timing explained
Duplicate vendor merged explained
0 unexplained variance
certificate signed
Low-risk by design

### Start on top. Cut over when you're ready.

You don't rip anything out on day one. Aleq connects over your existing stack and runs the close as the intelligence layer. After a month or two of clean closes, replacing the ledger is just the final database swap — in a workflow Aleq already runs.

week 1 Shadow mode reads your stack, reconciles alongside it
month 1–2 Control plane runs the close on top of the incumbent
cutover System of record the final database swap — no leap of faith
From any system

### It already speaks your stack.

Aleq reads the incumbent through its own interfaces, then proves the rebuild against it. Every migration makes the next one better.

Rillet 96%
NetSuite 91%
Sage Intacct 90%
Xero 89%
QuickBooks 88%
20 min Typical migration
$0.00 Unexplained variance
100 % Records traced to source
1 Signed reconciliation certificate

### Bring your books. Watch them move.

Connect read-only and let Aleq reconstruct a real month in parallel with your current system — reconciled, explained, and certified before you decide anything.

Book a live migration
See the work it runs

---

## `/packs/ap`

ap pack

# It extracts, matches three ways, and routes the approval — then pays on time.

Aleq reads the bill, runs the PO-to-receipt-to-bill match, posts the clean ones, and routes the rest to the right approver by your thresholds. It captures the early-pay discounts that are worth taking, blocks the vendors missing a W-9, and never wires above limit without the human sign-offs.

Run AP on your real bills with us
See it in detail →
0.95
eval score · grade A
10 scenarios · 6 capabilities gate ≥ 0.90 · pass
412 Bills auto-posted YTD
11.4 days Average days to pay
$3,768 Early-pay discount captured
10 Scenarios in this pack
*period 2026-04 · AP queue*

### Three-way match, then the payment run.

Each bill carries the match result, the terms, and how it cleared. Clean 3/3 matches auto-post; discounts get taken when the math works; anything missing a control is blocked before it can pay.

AP queue · 3-way match 3 ready · 1 blocked
`Bill | Match | Amount | How`
`PO-2025-0411 ↔ GR ↔ Bill | 3/3 matched | $54,200 | auto`
`AWS · B-3041 | ap.three_way_match | $88,440 | auto-posted`
`Foxconn · B-3051 (2/10 net 60) | −$3,768 discount | $188,440 | wire`
`Mark Zhao | missing W-9 | $12,500 | blocked`
2 auto · 1 wire drafted · 1 blocked · every posting ed25519 signed
it routes by your thresholds
Under $5k auto-posts. A $188k wire walks the full approval chain.
Aleq applies your approval matrix on every bill: under $5k posts on its own, over $5k routes to the controller under P-AMT-5K, and any wire over $100k needs both the controller and the CEO. The Foxconn wire is mid-chain right now — Forrest H approved, Hannah K approved, CEO pending — and it won't move a dollar until that last signature lands.

Approval chain · B-3051 wire
`Under $5k | auto-post | auto`
`Over $5k · controller | P-AMT-5K | routed`
`Forrest H | controller | approved`
`Hannah K | controller | approved`
`CEO · wire &gt; $100k | $188,440 | pending`
WIRE HELD · waiting on CEO signature
*in this pack*

### Six capabilities, ten scenarios.

ap.extract_bill Bill extraction Line items, terms, and vendor read straight off the bill.
ap.three_way_match 3-way match PO to goods-receipt to bill, with clean matches auto-posted.
ap.approval_routing Approval routing Dollar-threshold routing to the right approver, signed per step.
ap.payment_run Payment runs Scheduled runs that pay on time without paying early for nothing.
ap.early_pay_capture Early-pay capture 2/10 net 60 and similar discounts taken when the math works.
ap.vendor_w9 W-9 controls Vendors missing a W-9 blocked before a payment can go out.
*vs the alternatives*

### Accounts payable — Aleq does the work.

#### Aleq

autonomous controller
Reads, matches, routes, prepares.
- Extracts and codes every bill to the GL
- Three-way matches PO · GR · Bill before approval
- Routes the right approver by policy
- Prepares the payment and routes it for execution

#### Bill.com

AP automation
Pays the bills you enter.
- You code the bill and confirm the match
- Approval routing, but no autonomous matching
- No GL-level posting or signed action trail
- Catches little before a dollar moves
`Aleq | Bill.com`
`Extracts & codes the bill | ✓ | partial`
`Three-way match | ✓ | partial`
`Routes the approval | ✓ | ✓`
`Prepares & routes payment | ✓ | ✓`
`Signed GL posting | ✓ | —`

### Bring your bill stack.

We'll connect read-only, run the 3-way match on your real bills, route the approvals by your thresholds, and show you the discounts left on the table — with the full signed trail — on the call.

Book a working session
All scenario packs

---

## `/packs/audit`

audit pack

# Every action signed. Every period replayable. Hand your auditor a replay, not a shrug.

Aleq signs every action with ed25519 as it happens, so the evidence is built before anyone asks for it. Replay any period exactly as it ran, bundle the PBC list, and export the whole close package to your auditor in one click.

Replay a real period with us
See it in detail →
0.98
eval score · grade A
8 scenarios · 5 capabilities gate ≥ 0.90 · pass
Policy Retention follows your controls
ed25519 Every action signed
14 days Reverse window per entry
8 Scenarios in this pack
*period 2026-03 · sealed*

### A signed receipt behind every action.

Each receipt carries the action, what it touched, and its state. Auto actions are ed25519 signed as they run; entries stay reversible for 14 days; the period seal is pinned to S3 and offsite.

Evidence trail · 2026-03 all signed · seal pinned
`Receipt | Action | Touched | State`
`a_19d4 | May reconciliation | JE-12491 | reversible`
`a_19c8 | Dunning — Haven Foods | logged | signed`
`a_1a02 | AWS bill auto-posted | B-3041 | reversible`
`period seal · 2026-03 | ed25519 pinned | S3 + offsite | sealed`
every action ed25519 signed · period seal pinned S3 + offsite
it hands the auditor a replay
The close package is already emailed to audit@pwc.com — replayable to the keystroke.
When PwC LLP asked for support, there was nothing to assemble. Aleq had already signed every action with ed25519 as it ran, so the close package — statements, JEs, receipts, and the seal — went to audit@pwc.com in one click. Hand your auditor a replay, not a shrug: any period reruns exactly as it happened, with the seal hash pinned at 0x4f3b…0eb4.

Close package · PwC LLP
`Recipient | auditor | audit@pwc.com`
`Firm | engagement | PwC LLP`
`Action trail | retention | policy-based`
`Signature scheme | every action | ed25519`
`Seal hash | pinned | 0x4f3b…0eb4`
SENT · replayable to the keystroke · ed25519 signed end to end
*in this pack*

### Five capabilities, eight scenarios.

evidence.signed_trail Signed trail Every action ed25519 signed the moment it happens.
evidence.period_replay Period replay Any period rerun exactly as it ran, to the keystroke.
evidence.pbc_bundle PBC bundle The prepared-by-client list assembled from the signed trail.
evidence.action_trail Action trail A signed action trail, retained by your policy and exportable for audit.
evidence.auditor_export Auditor export The full close package exported to your auditor in one click.
*vs the alternatives*

### Audit & evidence — Aleq does the work.

#### Aleq

autonomous controller
Signed and replayable by default.
- Every action signed — ed25519
- The whole period replayable to the keystroke
- Evidence trail on every entry
- Period seal pinned offsite

#### NetSuite

legacy ERP
Stores the records. You assemble the evidence.
- No action-level signing
- No period replay
- Audit prep is manual assembly
- Logs, but not immutable by default
`Aleq | NetSuite`
`Every action signed · ed25519 | ✓ | —`
`Period replayable | ✓ | —`
`Evidence on every entry | ✓ | manual`
`Policy-based retention | ✓ | partial`

### Bring a period your auditor will question.

We'll connect read-only, replay a real period on your books, and hand you the signed package — statements, entries, receipts, and the seal — exactly as your auditor would receive it, on the call.

Book a working session
All scenario packs

---

## `/packs/collections`

ar pack

# It works the ladder, makes the call, and books the cash.

Aleq runs the whole receivables motion: tiered dunning, bespoke follow-ups, voice calls in your name, promise capture, and cash application. It negotiates the small plans on its own, escalates the big ones with the context, and stops at the credit-hold decisions that have to be yours.

Run collections on your real AR
See it in detail →
0.94
eval score · grade A
11 scenarios · 7 capabilities gate ≥ 0.90 · pass
48.2 days Average DSO, trailing
78 % Cash auto-applied
99 % First-pass application
11 Scenarios in this pack
*dunning ladder · 2026-04*

### The collections ladder, rung by rung.

Each step carries an owner, a capability tag, a policy ID, and an autonomy tier. Tier 1 runs signed; Tier 2 drafts for your approval; credit holds and the CFO call stay human-only.

Collections ladder · open AR $1.41M open · 11 in flight
`Step | Capability | Policy | How`
`30-day reminder | ar.send_dunning | P-DUNNING-30D | auto`
`60-day bespoke dunning | ar.send_dunning | P-DUNNING-60D | drafted`
`Call & negotiate 60-day plan | ar.voice_call | P-AMT-25K-PAY | drafted`
`Escalate &gt;$100k — credit hold + CFO call | ar.credit_hold | P-AR-ESCALATE-90 | you`
`Cash application — incoming receipts | ar.cash_application | 78% auto | auto`
2 auto · 2 drafted · 1 human-only · every auto action ed25519 signed
it knows when to escalate
Stark Industries broke 3 promises. Aleq stopped emailing and flagged you.
Three missed promises on $412.4k, and a 14% historical write-off rate at this stage — so Aleq didn't send a fourth polite reminder. It rolled up the full payment history, the broken-promise timeline, and the write-off risk, then queued a credit-hold decision and a CFO call for you. Where the math still works, it just collects: a voice call to Haven Foods captured a firm promise of $48,000 on Friday.

At-risk receivables · Apr 2026
`Stark Industries | 3 missed · 14% w/o | $412.4k | credit hold`
`Haven Foods | voice · captured | $48,000 | Fri`
`Wayne Logistics | 60-day plan | $92,100 | drafted`
`Acme Retail Co. | 30-day reminder | $18,400 | sent`
ESCALATED · $412.4k waiting on your credit-hold call
*in this pack*

### Seven capabilities, eleven scenarios.

ar.send_dunning Tiered dunning 30/60/90 ladder with bespoke language per counterparty and stage.
ar.voice_call Voice calls in your name Outbound calls placed on your behalf, with the conversation logged.
ar.promise_capture Promise capture Firm amounts and dates captured verbatim and tracked to the day.
ar.cash_application Cash application Incoming receipts matched to invoices at 99% first-pass.
ar.credit_hold Escalation & credit hold Above-threshold accounts escalated with full history for your call.
ar.aging Aging by counterparty Live aging buckets per customer, scored for write-off risk.
*vs the alternatives*

### Collections — Aleq does the work.

#### Aleq

autonomous controller
Works the ladder, makes the call, books the cash.
- Works the full aging ladder by policy
- Places the call by voice — captures the promise to date & amount
- Applies the cash to the invoice when it lands
- Escalates with the receipts, signed

#### Bill.com

AR automation
Sends reminders. You still chase.
- Automated email reminders only
- No voice, no live negotiation
- You apply the cash and track the promise
- No policy-driven escalation
`Aleq | Bill.com`
`Works the aging ladder | ✓ | reminders`
`Calls by voice | ✓ | —`
`Captures the promise | ✓ | —`
`Applies the cash | ✓ | partial`
`Pricing | $/hr worked | per-user`

### Bring your open AR.

We'll connect read-only, run the ladder on your real receivables, and show you the drafts, the calls, and the cash — with the full signed trail — on the call.

Book a working session
All scenario packs

---

## `/packs/month-end-close`

close pack

# The close runs itself — and waits where it should.

Aleq drives the whole checklist: subledger tie-outs, accruals, depreciation, FX, ASC 842 lease rolls, intercompany eliminations, and flux review. It works continuously, escalates the blockers, and stops dead at sign-off and period lock — those stay human-only.

Close a real month with us
See the close in detail →
0.96
eval score · grade A
14 scenarios · 9 capabilities gate ≥ 0.90 · pass
8 days Close target, group-wide
6 Entities · 3 currencies
22 Tasks on the checklist
2 Human-only steps
*period 2026-04 · day 4 of 8*

### The real checklist, by area.

Each task carries an owner, an ASC/capability tag, a confidence score, and an autonomy tier. Tier 1 runs signed; Tier 2 drafts for your approval; sign-off and lock are human-only.

Close checklist · Sirius Robotics group 62% · 4 days to close
`Task | Capability | Conf | How`
`Bank reconciliation — JPMC / Mercury | bank.reconcile_period | 0.99 | auto`
`Deferred revenue waterfall | ar.deferred_rev_release | 0.99 | auto`
`Gusto payroll posting + accrual | payroll.post_accrual | 0.99 | auto`
`Run depreciation | fixedassets.depreciate | 0.99 | auto`
`ASC 842 ROU + lease-liability roll | leases.asc842_roll | 0.99 | auto`
`Sub-ledger to GL tie-out | ledger.tieout | 0.96 | drafted`
`Intercompany elimination | consolidation.eliminations | 0.95 | drafted`
`Income tax provision | tax.income_provision | 0.88 | drafted`
`Controller sign-off | — human only — | — | you`
`Period lock | — human only — | — | you`
15 auto · 5 drafted · 2 human-only · every auto action ed25519 signed
it escalates the blocker
One entity is blocking the group. Aleq already drafted the email.
Sirius Robotik GmbH (DE) is stuck — a VAT reconciliation is waiting on a missing vendor invoice, and 7 downstream tasks are blocked behind it. Aleq flagged the critical path, drafted a bilingual note to the DE controller, and queued it for 9:00 AM CET. The rest of the group keeps closing.

Group close · Apr 2026
`Sirius Treasury LLC | USD | 100%`
`Sirius Robotics Pte. (SG) | USD | 91%`
`Sirius Robotics MX | MXN | 84%`
`Sirius Robotics, Inc. (US) | USD | 62%`
`Sirius Robotics UK Ltd. | GBP | 55%`
`Sirius Robotik GmbH (DE) | EUR | blocked`
CRITICAL PATH · 7 tasks waiting on DE
*in this pack*

### Nine capabilities, fourteen scenarios.

ledger.tieout Subledger tie-outs AR, AP, payroll, and fixed-asset subledgers reconciled to the GL.
payroll.post_accrual Accruals & payroll Gusto posting, bonus accrual review, recurring accruals.
fixedassets.depreciate Depreciation Straight-line depreciation run plus additions review.
leases.asc842_roll ASC 842 lease roll ROU asset + lease-liability roll, auto-posted via recurring entry.
multicurrency.run_revaluation FX translation ASC 830 revaluation, IS at average / BS at spot, CTA to AOCI.
ledger.flux_analysis Flux review Variance investigation on anything moving more than 5%.
*vs the alternatives*

### The close — Aleq does the work.

#### Aleq

autonomous controller
Closes the books, continuously, signed.
- Drafts every close entry — accruals, FX, eliminations
- Runs the checklist itself and ties out the subledgers
- Continuous close, not an 8-day fire drill
- Seals the period — signed, replayable

#### NetSuite

legacy ERP
Records the close. You run it.
- You and your team work the checklist
- Entries are manual; the ERP stores them
- Close is a month-end project
- Audit trail is manual sign-off
`Aleq | NetSuite`
`Drafts the close entries | ✓ | —`
`Runs the checklist itself | ✓ | you operate`
`Continuous close | ✓ | —`
`Signed period seal | ✓ | manual`
`Time to live | 48 hours | 3–6 months`

### Bring an unsigned period.

We'll connect read-only, run the checklist on your real books, and produce a close packet — with the full signed trail — on the call.

Book a working session
All scenario packs

---

## `/packs/multi-entity`

multi pack

# Six entities, three currencies — one clean consolidation.

Aleq nets the intercompany matrix, runs ASC 830 translation, revalues FX with the CTA routed to AOCI, posts the eliminations, and ties out the group. When a subsidiary side is missing or a variance won't net, it chases the right controller and flags exactly what's off.

Consolidate your real group with us
See it in detail →
0.93
eval score · grade A
12 scenarios · 8 capabilities gate ≥ 0.90 · pass
6 Entities consolidated
3 Reporting currencies
100 % Intercompany matched
CTA Routed to AOCI 3050
*period 2026-04 · group close*

### The intercompany matrix, netted both sides.

Each leg carries the two sides, the amount, and whether it nets. Matched legs eliminate automatically; a missing counterparty side or an amount mismatch is flagged before consolidation.

Intercompany matrix · group 5 legs · 2 flagged
`Leg | Type | Amount | Status`
`US → MX | mgmt fee | $124,400 | matched`
`MX → US | royalty | $84,200 | matched`
`US → UK | IP license | $142,000 | matched`
`UK → US | R&D | $88,400 | UK side missing`
`DE → US | commission $42,100 vs $41,800 | $300 | variance`
3 netted · 1 missing side · 1 variance · every elimination ed25519 signed
it runs the translation
ASC 830, done right: income statement at average, balance sheet at spot, CTA to AOCI.
Aleq revalued the foreign subs under ASC 830 — IS at the period-average rate, BS at the spot rate — and routed the cumulative translation adjustment to AOCI account 3050. MX revalued −$8,420 (JE-12482, signed); UK +$1,840 (JE-12483, signed). The matched intercompany legs eliminated through ELIM-001, Dr 5210 / Cr 5310, under P-INTERCO-NET at 0.99.

FX revaluation · Apr 2026
`REV-2026-04-001 · MX | JE-12482 | −$8,420 | signed`
`REV-2026-04-001 · UK | JE-12483 | +$1,840 | signed`
`CTA → AOCI 3050 | ASC 830 | −$6,580 | posted`
`Elimination · ELIM-001 | DR 5210 | CR 5310 | 0.99`
P-INTERCO-NET · CTA to AOCI · entries ed25519 signed
*in this pack*

### Eight capabilities, twelve scenarios.

consolidation.eliminations Intercompany eliminations Matched legs netted and eliminated under a signed netting policy.
multicurrency.run_revaluation FX revaluation Period revaluation with the CTA isolated and routed to AOCI.
consolidation.contact_subsidiary Subsidiary outreach Missing sides and mismatches chased to the right local controller.
consolidation.translate ASC 830 translation IS at average, BS at spot, applied per line across the group.
ledger.tieout Group tie-outs Entity subledgers tied to the consolidated GL before reporting.
consolidation.group_report Group reporting Consolidated statements assembled with the full elimination trail.
*vs the alternatives*

### Multi-entity — Aleq does the work.

#### Aleq

autonomous controller
Matches, revalues, eliminates — one clean group.
- Auto-matches intercompany across every entity
- Revalues FX under ASC 830 — IS at average, BS at spot
- Posts the eliminations, not just tracks them
- Every entry traces back to its source

#### NetSuite

legacy ERP
Stores the entities. You consolidate.
- Consolidation module — you operate it
- FX and eliminations are manual setup
- Intercompany matched by hand
- Audit trail is manual
`Aleq | NetSuite`
`Intercompany auto-match | ✓ | manual`
`FX revaluation · ASC 830 | ✓ | setup`
`Eliminations posted | ✓ | manual`
`One consolidated view | ✓ | ✓`
`Time to live | 48 hours | 3–6 months`

### Bring your group structure.

We'll connect read-only, net the intercompany matrix on your real entities, run the translation, and hand you a consolidated set — with the full signed trail — on the call.

Book a working session
All scenario packs

---

## `/packs`

*scenario packs*

# Hire it for the work you already know.

Each pack is a set of jobs Aleq runs end to end, scored against golden scenarios drawn from real books. Nothing ships below the 0.90 eval gate.

close A · 0.96
Month-end close starter
Subledger tie-outs, accruals, depreciation, FX, lease rolls, and flux review — closed continuously across entities.
14 scenarios · 9 capabilities →
ar A · 0.94
Collections & dunning
Tiered dunning, voice calls in your name, promise capture, and cash application at 99% first-pass.
11 scenarios · 7 capabilities →
recon A · 0.97
Bank & card reconciliation
Match to source, investigate exceptions, post reconciling entries, seal the journal at $0 variance.
9 scenarios · 5 capabilities →
multi A · 0.93
Multi-entity consolidation
Intercompany eliminations, FX revaluation under ASC 830, per-entity close across currencies.
12 scenarios · 8 capabilities →
ap A · 0.95
AP & 3-way match
PO ↔ GR ↔ bill matched before a dollar moves, approval routing, and payment runs with early-pay capture.
10 scenarios · 6 capabilities →
audit A · 0.98
Audit-ready evidence
Signed action trail, period replays, and evidence bundles delivered to your auditor's PBC list.
8 scenarios · 5 capabilities →

### Don't see your job? Bring it.

If you can describe the work, we can build the pack — and eval-gate it before it touches your books.

Book a working session
See the work

---

## `/packs/reconciliation`

recon pack

# It reconciles to zero — and tells you why, line by line.

Aleq matches every bank and card line to the ledger, investigates the exceptions, writes the durable rules so they never come back, and seals the journal. When a variance won't close on its own, it traces the cause and drafts the entry — then drives the period to $0.00.

Reconcile a real account with us
See it in detail →
0.97
eval score · grade A
9 scenarios · 5 capabilities gate ≥ 0.90 · pass
$0.00 Closing variance
2,261 Lines matched this period
99.5 % First-pass match rate
9 Scenarios in this pack
*period 2026-04 · feed live*

### Every line, matched or explained.

Each transaction carries a counterparty, the ledger match, a confidence score, and how it cleared. Tier 1 matches run signed; exceptions are investigated; duplicates and fees are caught before they post.

Bank feed · JPMC ••4421 2,261 matched · 4 exceptions
`Transaction | Match | Conf | How`
`BT-9001 · ACH RAMP $88,400 | INV-7819 | 1.00 | 100%`
`BT-9003 · WIRE FOXCONN −$188,440 | B-3051 | 0.99 | 99%`
`BT-9004 · AWS −$88,440 | B-3041 | 0.98 | 98%`
`BT-9010 · STRIPE payout | duplicate possible | 0.61 | review`
`BT-9009 · CHASE WIRE FEE −$45 | bank.write_rule | 0.97 | rule`
2,261 matched · 1 rule written · 1 exception open · every match ed25519 signed
it closes the variance
A $17,488 gap on JPMC ••4421. Aleq found both causes and posted the fix.
The account wouldn't tie. Aleq traced the variance to two roots — an unaccrued payroll-tax draft and a duplicate Stripe payout that hit twice — drafted the correcting entry, posted JE-12491 under P-RECON-DIFF-ZERO, and drove the period to $0.00. The duplicate is now a standing rule, so it never reopens.

Variance trace · JPMC ••4421
`Opening variance | unreconciled | $17,488`
`Payroll-tax draft | DR 6120 | $8,420`
`Duplicate Stripe payout | CR 1010 | $9,068`
`JE-12491 posted | P-RECON-DIFF-ZERO | signed`
`Closing variance | reconciled | $0.00`
VARIANCE CLEARED · JE-12491 · ed25519 signed · reversible 14 days
*in this pack*

### Five capabilities, nine scenarios.

bank.reconcile_period Period reconciliation Whole-account reconciliation driven to a $0.00 closing variance.
bank.match_transactions Transaction matching Bank and card lines matched to the ledger at 99.5% first-pass.
bank.investigate_exception Exception investigation Unmatched lines traced to root cause, not just flagged.
bank.write_rule Rule-writing Recurring fees and patterns captured as durable matching rules.
bank.flag_duplicate Duplicate detection Double payouts and re-presented charges caught before they post.
bank.seal_journal Sealed journals Posted entries sealed and ed25519 signed, reversible for 14 days.
*vs the alternatives*

### Reconciliation — Aleq does the work.

#### Aleq

autonomous controller
Reconciles, end to end. You wake to $0.00.
- Matches every line to its source — exact, fuzzy, many-to-one
- Investigates the exceptions and posts the reconciling entry
- Signs the journal — one-click reversible
- Runs continuously, not a month-end scramble

#### BlackLine

close software
Tracks the reconciliation. You still match.
- Templates and checklists — you work each item
- Flags exceptions back to you; nothing posts itself
- Sign-off is manual
- Built around the month-end cycle
`Aleq | BlackLine`
`Does the matching itself | ✓ | templates`
`Posts the reconciling entry | ✓ | —`
`Signed & one-click reversible | ✓ | manual`
`Continuous, not month-end | ✓ | —`
`Time to live | 48 hours | weeks`

### Bring an account that won't tie.

We'll connect read-only, reconcile a real period on your books, and hand you a $0.00 variance with the trace, the entries, and the full signed trail — on the call.

Book a working session
All scenario packs

---

## `/`

The autonomous controller you can audit

# 

Closes the books while you sleep.
Proves every move by morning.
It runs reconciliation, the close, and collections on your real books — and every move it makes is signed and reversible.

Book a demo
See a live close →
*what it does*

### It runs the books. You decide how much.

Manual
Assist
Autonomous
Reconciliation Every line matched to its source — overnight, to the penny.
Bank reconciliation · May · JPMC ••4421 412 transactions
Statement balance $2,418,904.10
Book balance $2,418,904.10
410 auto-matched · 2 to your judgment 98% avg
ACH · Ramp Business +$88,400 matched · 100%
Wire · Foxconn Mfg. −$188,440 matched · 99%
Stripe transfer +$142,400 matched · 96%
AWS · Marketplace −$88,440 matched · 98%
Stripe transfer +$88,400 held · possible dup
difference $0.00
Collections by voice Aleq calls your customers and books the promise to pay.
AR call · Haven Foods 04:18
"Can you settle the $48k by Friday?"
next move Aleq places the call
result promise captured for Friday
✓ promise captured · ledger updated
It earns the right to act. Autonomy earned per task, before it acts alone.
earned autonomy · per task
Stripe payouts 412 confirmed runs alone
AWS bill 36 confirmed runs alone
Wires over $100k high-value asks first
Period lock controller judgment you only
Continuous close The month closes itself, a little every day.
May close · 6:42 PM ready to seal
✓ Subledgers tied out
✓ Accruals & depreciation posted
✓ Material wire held for approval
✓ Controller sign-off ready
proof packet 38 entries drafted, one judgment call isolated.
Accounts payable Bills matched and queued for your one-tap approval.
PO-7731 ↔ GR ↔ Bill 3/3
$188k wire · over limit approval
Multi-entity Every entity translated, eliminated, consolidated.
US MX UK DE SG
✓ eliminated
It can't break your books. Balanced, reversible, and gated — by construction.
posted Routine payment — sent
= Double-entry — balanced
↺ Posted — reversible
Your stack, connected. Syncs with the tools you already run on.
QuickBooks synced
Brex synced
Gusto synced
Switch the mode — the same work either drafts for you, waits for your approval, or posts itself.

*standards engine*

### The GAAP writes itself.

Model the contract once. Aleq derives the journal entries on schedule — and re-derives them when the deal changes.

ASC 606 · Revenue
ASC 842 · Leases
ASC 718 · Stock comp
ASC 740 · Income taxes
ASC 340 · Commissions
ASC 350 · Intangibles
ASC 815 · Hedging
Lease schedule · 201 Spear St · ASC 842 derived
`Period | Interest | Principal | Liability`
`May 2026 | $10,455 | $28,045 | $1,764,355`
`Jun 2026 | $10,292 | $28,208 | $1,736,147`
`Jul 2026 | $10,128 | $28,372 | $1,707,775`
`Aug 2026 | $9,962 | $28,538 | $1,679,237`
`Sep 2026 | $9,795 | $28,705 | $1,650,532`
`Oct 2026 | $9,627 | $28,873 | $1,621,659`
*the intelligence · TAMi*

### Aleq learns how your team decides.

A Stripe deposit comes in. TAMi recognizes the treatment your controller approved before, runs only inside that pattern, and attaches the reason.

Learned from approvals The controller approved this exact treatment before.
Allowed only here Same source, account, memo pattern, and variance rule.
Proof attached Shows why it posted and how to roll it back.
See how TAMi works →
TAMi · customer memory routine bank rec learning
Learns the pattern Your controller keeps approving Stripe deposits to the clearing account. learn
Earns the task After enough correct approvals, this bank-rec slice can run without asking. earn
Acts inside limits Same account, same source, same variance rule. Anything else stops. act
Leaves the receipt Why it acted, what changed, and how to roll it back. prove
customer rule Stripe deposits → clearing account checking
learned from your approvals
allowed for routine deposits
stops on new evidence
autonomy earned for this task
draft first runs alone
auto only for the proven bank-rec pattern.
proof
Shows the approvals that taught it and the exact ledger change.

rollback
If the pattern breaks, it drops back to draft and asks first.

*what it does*
Reconciliation →
Collections by voice →
Continuous close →
Accounts payable →
Multi-entity & consolidation →
Tax & compliance →
*who it's for*
SaaS & subscription →
Hardware & physical goods →
Marketplaces →
Healthcare & RCM →
Manufacturing →
Professional services →
$0.00 Reconciliation variance
every GAAP standard, derived
48 hrs Time to live
$60 /hr Worked, not seats

### Bring an unsigned period.

We close last month on your real books, live. You leave with a number.

Book a live close
Pricing

---

## `/sitemap`

sitemap

# Everything on the site.

Every page, organized by section. Use the search if you know what you're looking for.

#### Product

- Homepage
- The work
- TAMi · the intelligence
- Control plane
- Signed audit trail
- Scenario packs

#### The work

- All work
- Reconciliation
- The close
- Accounts payable
- Collections
- Multi-entity
- Tax

#### Scenario packs

- All packs
- Reconciliation pack
- Month-end close pack
- AP pack
- Collections pack
- Multi-entity pack
- Audit pack

#### Standards

- ASC 606
- ASC 842
- ASC 718
- ASC 740
- ASC 815
- ASC 350
- ASC 340

#### Compare

- All comparisons
- vs. Rillet
- vs. Campfire
- vs. Puzzle
- vs. NetSuite
- vs. Sage Intacct
- vs. SAP
- vs. QuickBooks

#### Company

- Teams
- Pricing
- Contact

#### Legal

- Privacy policy
- Terms of service
- Security

---

## `/standards/asc340`

ASC 340-40 · Commissions

# 

Commissions,
capitalized and amortized.
Capitalize the commission, amortize it over the life of the customer — no side spreadsheet to reconcile.

See it on your books
How it works
Deferred commissions · Cyberdyne · C-7015
draft
Commission paid
$54,000
Amortization period
36 months
Amortized to date
$9,000
Deferred balance
$45,000
This month
$1,500
Deferred commission balance
On schedule · ties to 13500
re-derives on
churn tracked
The cost to obtain a contract

### Capitalize, don't expense it all at once.

The commission you pay to win a contract is an incremental cost
of obtaining it — so under ASC 340-40 it's capitalized, not
run straight through the P&L the month it's paid. Aleq
reads the commission off the closed deal, capitalizes it as a
contract cost asset, and sets it up to amortize over the
customer life.
Paid
Commission paid
$54,000 to win Cyberdyne · C-7015
$54,000
Capitalized
Contract cost asset · 13500
deferred commission, not expensed
$54,000
Amortized
Over the customer life
36 months · $1,500 / mo
$1,500
The amortization basis

### Amortized over the customer life.

The capitalized commission is amortized on a systematic basis
over the period you expect to benefit — the life of the customer
relationship, not just the initial contract term. Each month
Aleq draws down the deferred balance and books the expense,
opening to closing, with the expected-life basis attached.
Monthly amortization · period 7 of 36
Opening deferred
$46,500
− Amortization this month
$(1,500)
basis Expected customer life · 36 mo
straight-line
= Closing deferred
$45,000
When the deal changes

### Churn re-derives the schedule.

When a customer churns early, the benefit period ends — so the
remaining deferred commission is expensed in the period it
happens. Aleq watches the CRM, catches the cancellation, and
re-derives the schedule: the unamortized balance writes off in
full, with the journal entry drafted and tied back to the
contract.
Early churn · Cyberdyne · C-7015
DR
Commission expense
remaining deferred, written off
$45,000
CR
Deferred commission · 13500
$45,000
Schedule re-derived on churn
drafted for accept
The hard call stays yours

### 

The amortization-period judgment stays human.

Once the period is set, the monthly amortization rolls forward
unattended. But how long the customer relationship is expected
to last — and whether to elect the one-year practical expedient
— is a judgment call. So Aleq drafts the period and the basis
behind it, then stops and hands it to you. High-impact
assumptions are always a human sign-off.
Amortization period
Expected customer life · 36 months
drafted from cohort retention · held for your sign-off
Aleq's reasoning

Average tenure across the comparable cohort runs 34–38
months including expected renewals, beyond the 12-month
initial term. The benefit period is the relationship, not
the first contract, so amortization is drafted over 36
months.
Review & sign off
FAQ

### What controllers and auditors ask.

What costs qualify to capitalize under 340-40?

The incremental costs of obtaining a contract — costs you'd
only incur because the contract was won, the clearest being sales
commissions. Costs you'd incur regardless of whether the deal
closed aren't incremental, so they stay expensed. Aleq
capitalizes the qualifying commission off the closed deal and
leaves the rest in the P&L.
How is the amortization period (expected customer life)
determined?

The capitalized cost amortizes over the period you expect to
benefit, which is the life of the customer relationship —
including anticipated renewals — not just the initial term. Aleq
drafts a period from your cohort retention and shows the basis,
then stops for your sign-off. The call stays yours.
Do you apply the one-year practical expedient?

Only if you elect it. The expedient lets you expense costs to
obtain a contract immediately when the amortization period would
be a year or less. Aleq surfaces where it would apply and drafts
the election, but treats it as a human judgment — you choose
whether to take it, and it's documented either way.
What happens on early churn?

When a customer cancels before the period ends, the remaining
deferred balance is no longer expected to benefit a future period,
so it's written off in the period of churn. Aleq catches the
cancellation from the CRM, re-derives the schedule, and drafts the
entry expensing the unamortized balance — tied back to the
contract.
Does it tie to the CRM and the commission plan?

Yes. Each schedule traces back to the closed deal, the commission
paid under your plan, and the contract it relates to — so the
deferred balance ties to the general-ledger account with its basis
attached. When the deal changes in the CRM, the schedule
re-derives and the trail stays intact.

### See your commissions capitalized correctly.

Connect read-only and watch Aleq capitalize the commissions you pay
to win contracts, amortize them over the customer life, and
re-derive the schedule when a deal changes — drafted and tied out.
Book a working session
All standards engines

---

## `/standards/asc350`

ASC 350-40 · Capitalized software

# 

Software you build,
capitalized right.
Capitalize the build, amortize it on schedule — every cost tied to the work behind it.

See it on your books
How it works
Capitalized software · FY2026
draft
Capitalized this year
$612,000
Useful life
3 years
Amortized to date
$(102,000)
Net book value
$510,000
This month
$(17,000)
On schedule
ties to 15500
derived
from payroll + engineering time
Capitalize vs. expense

### It knows what qualifies to capitalize.

ASC 350-40 capitalizes cost only during the
application-development stage — once the project is past the
preliminary phase and not yet in service. Aleq reads each
project against that line: development-stage cost becomes an
asset, while research, planning, and post-launch maintenance are
expensed as incurred. No single bucket, no manual sorting.
Stage
Application development
Coding, configuration, testing toward release
capitalized
Stage
Preliminary & research
Scoping, evaluating alternatives, design exploration
expensed
Stage
Post-implementation
Maintenance, bug fixes, minor upgrades after launch
expensed
The schedule, computed

### Amortized over the useful life.

Once a project goes live, Aleq amortizes the capitalized balance
straight-line over its useful life and books the entry every
month — no workbook to maintain, no formula to chase. The
rollforward stays current, opening to closing, and ties back to
the asset account on the trial balance.
Amortization · Apr 2026
Opening net book value
$527,000
straight-line · 3-yr life Amortization this
month
$(17,000)
Closing net book value
$510,000
When something is retired

### Impairment, watched.

When a capitalized feature is retired or abandoned before the
end of its life, its remaining balance can't keep sitting
on the books. Aleq flags the event, drafts the write-off for the
unamortized balance, and books it to impairment — so the asset
reflects what's actually still in use.
Feature retired · remaining balance impaired
DR
Impairment loss
$48,000
CR
Capitalized software 15500
$48,000
Unamortized balance written off
booked to impairment
The hard call stays yours

### The capitalization judgment stays human.

The mechanics roll forward unattended once they're set. But
which projects and stages qualify — and how long the useful life
really is — are judgment calls. So Aleq drafts the call with the
basis behind it, then stops and hands it to you. High-impact
positions are always a human sign-off.
Capitalization · Billing rebuild
Capitalize from application-development stage · 3-year useful
life
drafted $612,000 · held for your sign-off
Aleq's reasoning

Preliminary scoping closed in Q4; coding and testing began
Jan and qualify under ASC 350-40. Useful life of 3 years
matches the prior platform's replacement cadence.
Both the stage cutoff and the life estimate are judgment —
escalated for review.
Review & sign off
FAQ

### What controllers and auditors ask.

What development costs qualify to capitalize, and at which stage?

Only cost incurred during the application-development stage —
coding, configuration, and testing once the project is past
preliminary scoping and before it goes live. Research, planning,
data conversion, and post-launch maintenance are expensed as
incurred. Aleq maps each project's cost to its stage and
applies that line, with the basis attached to every amount.
How is the useful life determined?

Aleq drafts a useful life from how long comparable software has
stayed in service — replacement cadence, roadmap, and the
asset's expected economic life — and amortizes straight-line
over it. The estimate is a judgment call, so it's surfaced
for your sign-off rather than assumed, and you can override it.
How is impairment handled?

When a capitalized feature is retired or abandoned before the end
of its life, Aleq flags it and drafts the write-off of the
remaining unamortized balance to impairment loss. You review the
event and sign off; the asset then reflects only what's still
in use.
How does it derive the amounts from payroll and engineering time?

Aleq ties capitalized cost to the underlying source — payroll for
the engineers on qualifying work and the time attributed to
development-stage activity — rather than a year-end estimate. Each
capitalized amount traces back to who worked on what and when, so
the schedule is built from the books, not reconstructed.
Is the schedule auditable?

The capitalized-software schedule exports as a tied-out workpaper
with full provenance — the stage determination, the cost basis,
the useful life, and the monthly amortization and impairment
entries — and ties to the asset account on the trial balance. It
reviews like well-documented prep, not a model's guess.

### See your software capitalized correctly.

Connect read-only and watch Aleq sort development cost by stage,
capitalize what qualifies, and amortize it over the useful life —
the schedule, the entries, and the basis, drafted and tied out.
Book a working session
All standards engines

---

## `/standards/asc606`

ASC 606 · Revenue recognition

# 

Revenue, recognized
on schedule.
Model the contract once. Aleq recognizes revenue on schedule from your real ledger — and re-derives it the moment the deal changes.

See it on your books
How it works
Revenue recognition · Cyberdyne · C-7015
live
Contract value
$540,000
Term
36 months
Recognized to date
$90,000
Deferred revenue
$450,000
This month
$15,000
Recognition schedule
On schedule · ties to the ledger
month 12
expansion → re-derived tied
From contract to schedule

### 

Model the contract. The schedule writes itself.

Aleq reads the signed contract, identifies the distinct
performance obligations, and allocates the transaction price
across them. A 36-month subscription with no upfront milestone
recognizes ratably — $15,000 a month — and the schedule is
derived from the deal, not typed into a workbook.
source
Signed contract C-7015
Cyberdyne · SaaS · $540,000 · 36-mo term
$540,000
obligation
One performance obligation
Subscription access, satisfied over time
36 mo
schedule
Ratable over the term
Recognized straight-line from the ledger
$15,000/mo
Deferred revenue

### Deferred revenue, rolled forward.

Every period, Aleq rolls the deferred-revenue balance forward —
opening balance, plus what you billed, less what you recognized,
equals closing. The waterfall ties to the ledger and to the
recognition schedule, so the contract liability on your balance
sheet is always the number you can defend.
Deferred revenue rollforward · this month
Opening deferred revenue
$465,000
+ Billings
$15,000
− Recognized this month
$(30,000)
= Closing deferred revenue
$450,000
Always live

### Change the deal — it re-derives.

In month 12 the customer expands by $240,000. Aleq re-derives
the remaining schedule prospectively — the unrecognized balance
spreads over the months that are left, lifting recognition to
$25,000 a month — and the closed periods stay exactly as they
were filed. No workbook to rebuild.
Modification · month 12 expansion
Expansion booked
$240,000
Remaining performance obligation
$600,000
Months remaining
24 months
Recognition, months 1–11
$15,000/mo
Recognition re-derived, months 13–36
$25,000/mo
Prospective · closed periods untouched
re-derived
The hard call stays yours

### The allocation judgment stays human.

Ratable recognition runs unattended once the contract is
modeled. But when a deal bundles obligations with no observable
price, the standalone-selling-price allocation is a judgment —
so Aleq drafts the split and the reasoning behind it, then stops
and hands it to you. High-impact allocations are always a human
sign-off.
SSP allocation · bundled deal
Allocate $540,000 across subscription + implementation
drafted 92% / 8% · held for your sign-off
Aleq's reasoning

The subscription has an observable standalone price;
implementation does not. The allocation uses an
expected-cost-plus-margin estimate for the service, which
is a judgment under ASC 606-10-32-33 — so it's
drafted, not booked.
Review & sign off
FAQ

### What controllers and auditors ask.

Is the revenue auditable under ASC 606?

Yes. Every recognized dollar traces back to the signed contract,
the identified performance obligations, and the allocation behind
it — the five steps documented, the schedule tied to the ledger.
It reviews like well-documented prep, not a model's guess.
How do you handle contract modifications and expansions?

When a deal changes, Aleq re-derives the remaining schedule
prospectively — the unrecognized balance spreads over the periods
that are left. Modifications that add distinct goods at standalone
price are treated as separate contracts; the trail records which
path applied and why.
How is standalone selling price (SSP) allocated?

Where a standalone price is observable, Aleq uses it. Where it
isn't, it drafts an estimate — adjusted market or
expected-cost-plus-margin — with the reasoning attached, then
stops for your sign-off. The allocation is a judgment, so it never
runs unattended.
Does it handle usage-based / consumption revenue?

Yes. For consumption arrangements, recognition follows usage as
it's delivered rather than ratably, drawn from the metered
data in your books. Fixed and variable consideration are tracked
separately, with variable amounts constrained until they're
no longer at significant risk of reversal.
What happens to closed periods when a deal changes?

They stay exactly as they were. Re-derivation is prospective — the
change flows through current and future periods, and the sealed
prior periods are never rewritten. The schedule moves forward; the
history holds.

### See revenue recognized on your real contracts.

Connect read-only and watch Aleq model your contracts, allocate the
price, and recognize revenue on schedule — the deferred-revenue
waterfall and the SSP allocation, drafted and tied out.
Book a working session
All standards engines

---

## `/standards/asc718`

ASC 718 · Stock-based compensation

# 

Stock comp,
expensed on schedule.
Grant the equity once. Aleq expenses it on schedule, through every vesting date and forfeiture.

See it on your grants
How it works
Stock comp expense · FY2026
draft
Grant-date fair value
$1,648,000
1-yr cliff Vesting
4 years
Expensed to date
$412,400
This month
$34,333
Unvested remaining
$1,235,600
On schedule · ties to 60400
on schedule
syncs from
Carta connected
The expense, derived

### From grant to expense, derived.

Aleq reads each option grant — the shares, the grant-date fair
value, the vesting terms — and derives the period expense from
it. A four-year graded schedule with a one-year cliff becomes
straight-line expense over the service period, recomputed every
month as new grants land and tranches vest.
grant
Option grant · 240,000 shares
Grant-date fair value $1,648,000
Carta
vesting
4-year graded · 1-yr cliff
48 monthly tranches after the cliff
schedule
expense
Straight-line · $34,333 / mo
Booked to 60400 Stock-Based Comp
60400
Departures, handled

### Forfeitures, handled.

When an employee departs before a tranche vests, Aleq reverses
the expense booked against unvested awards and reschedules what
remains. No spreadsheet to unwind, no manual true-up — the
reversal flows straight to the period and the rollforward stays
tied to the cap table.
Forfeiture · departed pre-vest
DR
Additional paid-in capital 30300
$28,600
CR
Stock-based compensation 60400
$28,600
Unvested expense reversed
booked to 60400
Re-measured on change

### Modifications re-measure.

Reprice a grant or accelerate vesting and the award changes — so
Aleq measures the incremental fair value at the modification
date and books it over the remaining service period. The
original grant-date expense stays exactly as it was; only the
increment is added.
Modification · repricing
Fair value before repricing
$1,648,000
Fair value after repricing
$1,742,000
Incremental fair value
$94,000
over remaining service period Incremental
expense / mo
$2,765
Increment booked · grant-date expense unchanged
on schedule
The valuation call stays yours

### Fair-value assumptions stay human.

Mechanics roll forward unattended once they're proven. But
the valuation inputs — expected volatility, expected term, the
409A price — are judgment, so Aleq drafts each assumption with
the basis behind it, then stops and escalates for your sign-off.
The high-impact call is always a human's.
Black-Scholes assumptions
Grant-date fair value · $6.87 / option
drafted from inputs · held for your sign-off
Aleq's reasoning

Expected volatility 52% from the peer set, expected term
6.1 years from the simplified method, and a $4.12 fair
value per the latest 409A. Each input is sourced — but the
valuation is judgment, so it's escalated, not booked.
Review & sign off
FAQ

### What controllers and auditors ask.

How is grant-date fair value determined?

Aleq drafts it with a Black-Scholes computation off your inputs —
expected volatility, expected term, risk-free rate, and the 409A
fair value per share — each one sourced and shown. The valuation
is judgment, so it's escalated for your sign-off rather than
booked on its own.
How are forfeitures handled?

When an employee departs before a tranche vests, Aleq reverses the
expense booked against the unvested awards and reschedules
what's left. The reversal flows to the period and the
rollforward stays tied to your cap table.
What about repricings and modifications?

It measures the incremental fair value at the modification date
and books only that increment over the remaining service period.
The original grant-date expense is untouched, and every
modification keeps its basis attached.
Does it sync from Carta or my cap-table system?

Yes. Grants, vesting terms, and exercises read straight from Carta
(or your cap-table system), so the expense is derived from the
same source of truth your equity team works in — no manual
re-entry.
Is the SBC rollforward auditable?

The expense exports as a tied-out workpaper with full provenance —
grant-date fair value, the vesting schedule, the journal entries,
and the assumptions behind each grant — so it reviews like
well-documented prep, not a model's guess.

### See stock comp expensed on your grants.

Connect your cap table read-only and watch Aleq compute stock-based
compensation each period — the vesting schedule, forfeitures, and
modifications, drafted and tied out to your books.
Book a working session
All standards engines

---

## `/standards/asc740`

ASC 740 · Income taxes

# 

Your tax provision,
always current.
Your tax provision, computed live off the real ledger and current all year — not rebuilt the week before you file.

See it on your books
How it works
Rate reconciliation · Sirius Robotics · FY2026
draft
Pretax book loss
$(2,385,722)
21% Tax at statutory rate
$(501,002)
State, net of federal
$(91,400)
Permanent differences
$48,200
Change in valuation allowance
$543,000
Provision for income tax · ETR 0.1%
$(1,202)
ties to
the trial balance signed
The provision, computed

### 

Book-to-tax differences, computed — not retyped.

Aleq reads each temporary difference straight from your books
and tax basis, measures it at the enacted rate, and rolls it
into the deferred balance. For a company running losses, that
means the NOLs, the §174 R&D capitalization, and the stock
comp — gross deferred tax assets, then the valuation allowance
against them.
Deferred tax assets · FY2026
Net operating loss carryforward
$4,182,000
§174 R&D capitalization
$1,224,000
Stock-based compensation
$412,400
Accrued bonus
$218,400
Valuation allowance
$(5,443,000)
Net deferred tax asset
$0
Always live

### Change the rate, and it re-measures.

When an enacted rate changes — or a true-up lands from the filed
return — Aleq remeasures the deferred balances and books the
difference to the provision automatically. No workbook to
rebuild, no formula to chase, and the prior periods stay exactly
as they were.
Rate change · 21% → 24%
DR
Deferred tax expense
$87,000
CR
Deferred tax liability
$87,000
Deferred balances remeasured
booked to provision
The hard call stays yours

### 

The valuation-allowance judgment never runs on its own.

Routine differences roll forward unattended once they're
proven. But whether you can support a deferred tax asset is a
judgment call — so Aleq drafts the allowance and the
cumulative-loss reasoning behind it, then stops and hands it to
you. High-impact positions are always a human sign-off.
Valuation allowance
Full allowance against the deferred tax assets
drafted $5,443,000 · held for your sign-off
Aleq's reasoning

Three years of cumulative pretax losses are negative
evidence under ASC 740-10-30. Without sufficient projected
income, the deferred tax assets are not
more-likely-than-not to be realized.
Review & sign off
FAQ

### What controllers and tax leads ask.

Does Aleq file my return?

No. Aleq computes and drafts the provision and the workpapers
behind it — the rate reconciliation, the deferred rollforward, the
valuation-allowance memo. Filing stays with your tax preparer;
they get a clean, tied-out starting point instead of a spreadsheet
to rebuild.
Who's accountable if a tax position is wrong?

You are — Aleq is the workpaper, not the signer. Every number ties
to the trial balance with its basis attached, so you and your
preparer can see and stand behind the support for each position.
How does it handle the valuation-allowance judgment?

It drafts the allowance and the cumulative-income reasoning, then
stops for a human. The realizability call is high-impact, so it
never runs unattended — you sign off.
Will my auditor and outside tax firm accept it?

The provision exports as a tied-out workpaper with full provenance
— book-to-tax basis, enacted rates, and the journal entries — so
it reviews like well-documented prep, not a model's guess.
What happens when the filed return differs from the provision?

You book the return-to-provision true-up and Aleq remeasures the
deferred balances from there, with the change flowing to the
current-period provision and the trail intact.

### See your provision on your real books.

Connect read-only and watch Aleq compute current and deferred tax
from your trial balance — the rate reconciliation, the deferreds,
and the valuation-allowance memo, drafted and tied out.
Book a working session
All standards engines

---

## `/standards/asc815`

ASC 815 · Derivatives & hedging

# 

Hedges, marked
and measured.
Hedge accounting without the spreadsheet — Aleq values each instrument and books the entries on schedule.

See it on your books
How it works
Hedge · GBP/USD forward · H-001
marked
Notional
£1,200,000
contracted Forward rate
1.2614
Fair value this period
$34,200
Effective portion → OCI
$31,800
Ineffective → earnings
$2,400
Cash-flow hedge · documented
effective
designation
cash-flow hedge on file
Marked every period

### Every derivative, fair-valued.

Aleq marks each position to market every period from the current
rate curve — the forward, the option, the swap — and books the
change. No month-end spreadsheet pull, no stale valuation
sitting on the balance sheet.
Fair value · H-001
Opening fair value
$18,400
Change this period
$15,800
Closing fair value
$34,200
marked to the current rate
ties to the ledger
Tested, not assumed

### Effectiveness, tested every period.

Aleq runs the effectiveness test against the hedged item, splits
the effective and ineffective portions, and keeps the result
with the hedge. When a hedge stops being effective, it flags it
— it doesn't let an ineffective hedge quietly ride in OCI.
Effectiveness · this period
Effective portion
$31,800
Ineffective portion
$2,400
test result
highly effective
Routed by designation

### OCI or earnings, by your designation.

The effective portion of a cash-flow hedge goes to OCI and
reclasses to earnings when the forecasted transaction hits; the
ineffective portion goes straight to earnings. Aleq books both
sides correctly and reclasses on settlement — automatically,
with the trail.
Period entry
DR
Derivative asset
$34,200
CR
OCI — effective portion
$31,800
CR
Earnings — ineffective
$2,400
Balanced
$0.00
The hard call stays yours

### The hedge designation stays human.

Hedge accounting only applies if you designate and document the
hedge at inception — contemporaneously. Aleq drafts the
designation and the documentation the moment a derivative is
booked, then holds it for your sign-off. It won't apply
hedge accounting to a position you never designated.
Hedge designation
Designate GBP/USD forward as a cash-flow hedge
drafted at inception · held for your sign-off
Aleq's reasoning

The forward hedges a forecasted GBP vendor payment in
April 2027. Designation and documentation are prepared at
inception so hedge accounting can apply — it must be
contemporaneous, so it waits for you.
Review & sign off
FAQ

### What controllers and auditors ask.

How is the derivative fair-valued?

Aleq marks each position to market every period from the current
rate curve, books the change, and ties it to the ledger — so the
balance-sheet value is never stale.
How is hedge effectiveness tested?

It runs the effectiveness test against the hedged item each
period, splits the effective and ineffective portions, and flags
any hedge that stops being highly effective rather than letting it
ride.
How is hedge documentation maintained?

Designation and documentation are drafted at inception — they have
to be contemporaneous — and held for your sign-off, so the
paperwork an auditor needs exists from day one.
How is the OCI-versus-earnings split handled?

The effective portion of a cash-flow hedge posts to OCI and
reclasses to earnings when the forecasted transaction occurs; the
ineffective portion goes to earnings. Aleq books both and
reclasses on settlement.
Is it auditable?

Every mark, test, and entry carries its inputs and a signature,
and exports as a workpaper — so it reviews like well-documented
hedge accounting, not a black box.

### See your hedges marked and measured.

Connect read-only and watch Aleq fair-value your derivatives, test
effectiveness, and route each change to OCI or earnings — documented
and tied out.
Book a working session
All standards engines

---

## `/standards/asc842`

ASC 842 · Leases

# 

Leases on the
balance sheet, derived.
Sign a lease and the schedule builds itself — right-of-use asset, lease liability, and every period after.

See it on your books
How it works
Lease schedule · 535 Mission · L-001
live
Right-of-use asset
$1,840,000
Lease liability
$1,792,400
Monthly payment
$38,500
7.0% / 12 on opening liability Interest this
month
$10,455
Amortization this month
$28,045
On schedule · ties to the ledger
on schedule
on a change
remeasures on modification
From agreement to entries

### Model the lease. The entries derive.

You model the lease once — term, payments, the discount rate.
From the signed agreement Aleq derives the lease liability as
the present value of the payments, recognizes the right-of-use
asset against it, and stands up the amortization schedule for
both. No workbook to wire, no formula to chase.
Input
Signed lease
535 Mission · 60-mo · $38,500/mo · 7.0%
Recognized
ROU asset + lease liability
PV of payments at the discount rate
Each month
Amortization, booked
interest accreted · ROU amortized · payment applied
Always live

### Liability and ROU, amortized.

Each month the lease liability accretes interest at the discount
rate, the payment reduces it, and the right-of-use asset
amortizes in parallel. Aleq rolls the schedule forward and books
the entries — opening balance to closing balance — so the
balance sheet stays current without a touch.
Amortization · period 13 of 60
Opening lease liability
$1,792,400
7.0% / 12 + Interest accreted
$10,455
− Lease payment
$(38,500)
ROU asset amortized
$(28,045)
= Closing lease liability
$1,764,355
When the lease changes

### Modify the lease — it remeasures.

Extend the term, change the rent, exercise an option — and Aleq
remeasures the lease liability at the current discount rate and
adjusts the right-of-use asset for the same amount. It books the
difference and rebuilds the schedule from there, while the prior
periods stay exactly as they were.
Modification · term +24 mo
DR
Right-of-use asset
remeasured at 7.4% current rate
$612,800
CR
Lease liability
$612,800
Liability remeasured · ROU adjusted
schedule rebuilt
The hard call stays yours

### The classification judgment stays human.

Once a lease is modeled, the schedule rolls forward on its own.
But whether a lease is operating or finance — and which discount
rate applies — is a judgment call. So Aleq drafts the
classification and the rate with its reasoning, then stops for
your sign-off. Where you've elected the short-term
exemption, it applies it and recognizes the expense
straight-line.
Lease classification
Operating lease · incremental borrowing rate 7.0%
drafted · held for your sign-off
Aleq's reasoning

Term is 60 months against an estimated 25-year economic
life, with no transfer of ownership and no bargain
purchase option — so none of the ASC 842-10-25 finance
criteria are met. No rate is implicit in the lease, so the
incremental borrowing rate applies.
Review & sign off
FAQ

### What controllers and auditors ask.

Operating vs finance lease — how is it classified?

Aleq tests the lease against the ASC 842-10-25 criteria —
ownership transfer, bargain purchase option, term against economic
life, present value against fair value — and drafts the
classification with its reasoning. It's a judgment call, so
it stops there: you review the draft and sign off before it's
locked.
What discount rate does it use?

The rate implicit in the lease where it's determinable;
otherwise your incremental borrowing rate. Aleq proposes the rate
and shows the basis, and you confirm it — the rate drives the
liability and every period after, so it never picks one
unattended.
How are modifications and remeasurements handled?

When a lease is modified — term extended, payments changed, an
option exercised — Aleq remeasures the liability at the current
discount rate, adjusts the right-of-use asset for the same amount,
books the difference, and rebuilds the schedule from that date
forward. Prior periods stay untouched.
Does it handle the short-term lease exemption?

Yes, where you've elected it by asset class. For a lease of
twelve months or less with no purchase option Aleq applies the
exemption — no ROU asset or liability — and recognizes the lease
cost straight-line over the term.
Is the ROU and liability rollforward auditable?

Every period exports as a tied-out rollforward — opening balance,
interest, payments, amortization, closing balance — traced back to
the signed lease and the rate you confirmed. It reviews like
well-documented prep, not a model's guess, with the journal
entries and provenance attached.

### See your leases on the balance sheet.

Model a lease and watch Aleq derive the right-of-use asset and lease
liability, amortize both over the term, and keep the rollforward
tied out and current — drafted for your sign-off.
Book a working session
All standards engines

---

## `/tami`

the intelligence · TAMi

# It knows when to act, when to ask, and how to explain itself.

TAMi is Aleq's operating memory. It watches outcomes, turns repeated judgment into evidence-backed rules, unlocks autonomy inside your limits, and drops back to asking when the evidence changes.

See it on your books
The control plane
observe · learn · unlock · act · explain
TAMi loop · bank.auto_match live
01 · observed 412 Stripe transfers
same source, same memo pattern, same clearing account

02 · learned Route to Stripe Clearing
412 confirmations, 0 reversals, strength 1.00

03 · unlocked Auto under policy limits
posts routine matches, holds material judgment

04 · acted 410 posted, 2 held
$0.00 variance, approval queue attached

This is not a chat answer. It is a rule with evidence, limits, and a rollback path.
*15-second version*

### A judgment becomes automation only after it proves itself.

One event becomes a remembered pattern, then a bounded action with the evidence still attached.

TAMi · operating memory learned bank rule earned
Reads how this customer decided before Past approvals, reversals, account mappings, materiality limits, and controller overrides. history
Forms a narrow belief Stripe payouts from the operating bank go to Stripe Clearing when the cash tie-out is exact. rule
Earns the task, not the company 412 confirmations and 0 reversals unlock auto for this exact capability only. scope
Checks the leash before acting If source, amount, account, vendor, or risk class leaves the rule, Aleq asks first. gate
Leaves proof and rollback Receipt shows why, policy, ledger impact, and the reversal path if the belief goes bad. proof
customer-specific belief This is how your team treats Stripe payouts observing
source operating bank payout memo
account Stripe Clearing 11000
limit routine cash only
belief strength strong enough to run
asks acts alone · 1.00
locked drops back to asking if the pattern starts failing.
evidence
Customer approvals and reversals are the training signal, not generic accounting workflow.

scope
The autonomy is bounded to one task, one memo pattern, one bank source, and one ledger treatment.

receipt
Each action carries source docs, policy gate, journal impact, and undo path.

TAMi learns how this customer works, then earns permission one task at a time
new event

#### It sees a bank line it has not earned yet.

STRIPE TRANSFER ST_4f29ad +$142,400
Where should future Stripe transfers go?
Stripe Clearing 11000
belief forms

#### It turns repeated approvals into a rule.

STRIPE TRANSFER &rarr; Stripe Clearing
1.00
412 confirmations · 0 reversals · locked
controlled action

#### It acts only inside the policy you set.

410 routine matches posted
2 material items held
evidence, journal impact, and undo path attached
*what the product has to show*

### The story is always: source, belief, gate, action.

Every autonomous move carries the evidence, the learned rule, the policy gate, and the receipt.

source
It starts with real evidence, not a prompt.
TAMi sees the bank line, the invoice, the ledger state, the policy book, and the history of what you approved before. The screen says exactly which evidence mattered.

Evidence packet · ST_4f29ad ready
`Bank line | STRIPE TRANSFER ST_4f29ad | $142,400`
`Matched source | Stripe payout batch · Apr 30 | 100%`
`Ledger effect | Dr cash · Cr Stripe Clearing | balanced`
`Policy | routine cash clearing under threshold | auto`
evidence shown before any posting
gate
It stops at judgment calls.
Autonomy is not bravado. A strong bank-matching belief can still hit a policy gate if the dollar amount, account, vendor, or risk class requires a human.

Approval gate · payment.send held
Needs approval

#### $188,440 Foxconn wire

Early-pay discount is attractive, but the amount exceeds your $100k auto-payment limit.

belief strength 0.92
policy limit $100k
mode Assist
action queued · no money moved
action
When it acts, the receipt explains the move.
The receipt is the marketing point and the product point: why this happened, which signal triggered it, which policy allowed it, and what changed in the books.

Action receipt · cash.apply posted
why
Amount, customer, and memo match invoice INV-7829 to the penny.

signal
ACH $312,400 · memo CYBERDYNE-MAR

policy
customer exact match can auto-apply below exception threshold

effect
Cr A/R $312,400 · Dr cash $312,400 · invoice marked paid

reversible entry staged · replay attached
*earned autonomy*

### Every capability has its own leash.

Bank matching can run automatically while payments wait for approval and period lock stays manual. That is the whole point.

Auto bank.auto_match
18,420 runs · 98.7% success · routine cash clearing only

Assist ap.schedule_payment
drafts wire, attaches evidence, waits for controller approval

Manual close.lock_period
prepares the package, but a human seals the period

*vs generic AI*

### Not a chatbot. A governed operating memory.

#### TAMi

governed intelligence
Builds rules from evidence and acts only inside limits.
- Shows the source evidence behind every belief
- Unlocks autonomy per capability, not globally
- Stops at policy gates and asks precise questions
- Leaves a receipt for every action it takes

#### Generic AI layer

chat or copilot
Answers questions. You still operate the books.
- No durable belief register tied to outcomes
- No per-capability autonomy or policy gate
- No permissioned execution path into the ledger
- No action receipt your auditor can replay

### Watch it learn on your books.

Connect read-only and see the first beliefs form, the first gates trigger, and the first action receipts explain themselves.

Book a working session
The control plane

---

## `/teams`

*teams*

# Aleq joins your finance team.

One autonomous controller that fills the seats you can't keep staffed — and works cleanly alongside the ones you can. Hired by the hour worked — and you see every step it takes.

controller
Owns the ledger and the close.
The seat Aleq was built for. The books are current, always — not at month-end, continuously.

- continuous close
- reconciliations · $0 variance
- journal integrity
- flux review
ar · collections
Gets you paid.
Calls and emails past-due accounts in your voice, captures the promise, applies the cash.

- voice + email dunning
- promise capture
- cash application
- aging by counterparty
accounts payable
Pays the right bills, on time.
Nothing moves without a clean three-way match and the right approval at the gate.

- 3-way match
- approval routing
- payment runs
- vendor onboarding
close · consolidation
Closes the month across entities.
Six entities, five currencies, one cadence — eliminations and all.

- subledger tie-outs
- FX revaluation
- intercompany eliminations
- accruals
tax · compliance
Keeps you filing-ready.
Jurisdiction logic and evidence assembled as it happens, not scrambled at deadline.

- sales & use tax
- 1099 / 1099-K
- jurisdictional rules
- audit evidence bundles
fp&a support
Feeds the forecast.
Real actuals the moment cash moves — your analysts model on live numbers, not last month's.

- variance drivers
- board-ready reporting
- live actuals
- investor packets

### Hire it for one seat. Keep it for the team.

Start Aleq on the close or on collections. Watch every step it takes. Add seats as the trust compounds.

Book a working session
Rate card

---

## `/work/ap`

Accounts payable

# Pays the right bills. On your approval.

Every bill checked and ready to pay. You approve — money never moves on its own.

See it on your bills
How it works
Bill · Foxconn Mfg · FX-2026-04
read & coded
Amount vendor invoice $188,440
Due terms · net 60 2026-06-30
GL account suggested 14000 · Inventory
Three-way match PO ↔ receipt ↔ bill matched
Matched · ready · held above your $100k limit
Ready to approve
early-pay 2/10
wire by Mon saves $3,768
It understands the bill

### It reads the bill, not just files it.

A PDF lands in your inbox and Aleq pulls out the vendor, the bill number, the due date, and the amount — then suggests the GL account it belongs in, with a confidence score on each read. Nothing is keyed by hand, and nothing posts on a guess.

What Aleq read off the bill
99% confident
Vendor Foxconn Mfg. 100%
Bill number FX-2026-04 100%
Due date 2026-06-30 · net 60 99%
Amount $188,440.00 100%
GL account 14000 Inventory — suggested 96%
Nothing pays on trust alone

### Three-way match before a dollar moves.

Aleq ties the bill back to the purchase order you raised and the goods you actually received. Quantities, prices, and totals have to agree across all three before it's cleared to pay — so you're never paying for a PO you didn't approve or a shipment that never arrived.

the order PO-7731 · $188,440 raised & approved · 1,000 units
the receipt Goods received · 1,000 warehouse signed off · qty agrees
the bill FX-2026-04 · ties out price, qty, total all agree — cleared
The right people, in the right order

### The right approval, every time.

Your $100k limit isn't a suggestion. A $188,440 wire climbs the approval chain to a second signer before it can be released; small, routine bills on a vendor you trust move on their own. Every approval is logged, so the trail reads cleanly months later.

Who has to approve this
Foxconn wire · $188,440 over your $100k limit Two approvers
First approver — Controller Forrest Mae approved
Second approver — CFO required over $100k Awaiting
Routine bills under $5k trusted vendors Auto-approved
It gets better the longer it runs

### It learns your vendors.

When the same bill is coded the same way enough times, Aleq stops asking. You can see every rule it's learned, how sure it is, and whether it runs on its own yet — and the ones that always need a human, like a big wire or a 1099 vendor with no W-9, stay held no matter how routine they look.

What Aleq has learned
AWS bill in the last days of the month → 50100 coded 36× · never wrong Runs alone
Wires over $100,000 policy · always a human Asks first
1099 vendor, missing W-9 held until on file Held
FAQ

### What CFOs ask first.

How do you stop a duplicate or fraudulent payment?
Every bill is matched against the ones already in your system before it can be scheduled — same vendor, same amount, same invoice number gets caught and held, not paid twice. Bank details that change on a known vendor, or a brand-new payee, are flagged for a human to confirm. And nothing is cleared to pay until it ties to a real PO and a real receipt, so an invented invoice has nothing to match.

Who approves before money moves?
You set the approval chain, and Aleq follows it exactly. Below your threshold on a vendor it has proven, it can clear a routine bill on its own; over the limit, on a new vendor, or on anything unusual, it routes the bill up the chain — a $100k+ wire needs your second signer before it can be released. Every approval is logged with who approved what, and when.

Does Aleq actually send the payment?
No. Aleq prepares the payment — matched, coded, approved, and ready — and routes it for execution on your existing rails. It hands a clean, approved batch to your bank or payment provider; it does not move the money itself and has no standing authority to. You stay in control of the release.

What about 1099s and missing W-9s?
Aleq knows which vendors are 1099-reportable and tracks what's on file. If a bill comes in from a 1099 vendor with no W-9, it's held — coded and ready, but not cleared to pay — until the form is collected, so you're never short the information you need at year-end. It keeps the running totals you'll report, but it does not file your taxes.

Can it touch a closed period?
No. Closed and locked periods are off-limits to Aleq, the same as anyone else. A bill that belongs to a prior period is surfaced for your review rather than posted silently; everything else posts to the open period with full support attached.

### Put Aleq on your bill inbox.

Forward a week of real bills and watch Aleq read each one, run the match, and route it for approval — every payment prepared, nothing moved without your yes.

Book a working session
See all the work

---

## `/work/close`

The close

# Closes the month. Day by day, not at the end.

Aleq closes a little every day. Month-end becomes a sign-off, not a sprint.

See it on your books
How it works
May close · Sirius Robotics · day 3 of 5
on schedule
Bank reconciliation all accounts · $0.00 difference Done
Revenue recognition deferred revenue released Done
AP cutoff invoices accrued to period Done
Accruals & depreciation drafted · awaiting accept Drafted
Flux narrative variances explained · read it Your review
Period sign-off seal & lock the period You only
22 tasks across 6 entities
15 auto · 5 drafted · 2 human-only
day 3 of 5
62% of the close done on schedule
Always closing

### The close runs continuously.

Reconciliations, accruals, and cutoff don't wait for the calendar to flip. Aleq works each task the moment its inputs are ready, so by the time you sit down it's day 3 of 5 with most of the work behind you — not a five-day fire drill that starts on the first.

May close · where it stands
Done posted & reconciled 14 tasks
Drafted waiting on your accept 5 tasks
Waiting upstream input not in yet 3 tasks
day 3 of 5, not a 5-day fire drill
62% done
Every entity, one view

### Across every entity, one close.

US parent, MX, UK, DE — each on its own books, all on one board. Aleq tracks the critical path across them, so a missing vendor invoice in Germany shows up as the one thing standing between you and a sealed period — not something you discover on day five.

Close status, by entity
US Parent all close tasks complete 12 / 12 done
MX Ops accruals in progress 5 / 14 on track
UK Ops reconciled · cutoff clear 9 / 11 on track
DE Ops VAT reconciliation · vendor invoice missing 3 / 12 blocked
critical path: clear DE Ops to seal the group
1 blocker
The line you draw

### What runs, what's drafted, what's yours.

The mechanical work runs on its own. The judgment calls come to you drafted and explained, ready to accept. And the two things that should always be a person's — the flux review and the period lock — stay yours, every close.

How the close splits
Runs on its own bank rec · revenue recognition · payroll accrual Automatic
Drafted for you eliminations · tax provision · AP cutoff Posts on your yes
Human only flux review · period lock You only
When it's done, it's done

### Sealed and signed.

You sign off and the period seals. Every journal in it is signed, the audit package is built, and the whole thing is pinned where it can't quietly change. When someone asks how a number was reached three quarters from now, the answer is already saved.

Period 2026-04 · sealed
signed
Period 2026-04 sealed · signed by Forrest Mae Locked
Journals in the period each one signed 8,412
Audit package statements · support · trail Ready
Pinned to tamper-evident S3 + offsite
closed on schedule · day 5 of 5
signed & pinned
FAQ

### What CFOs ask first.

What's your support for a SOX or financial-statement audit?
Every close task carries its own support — the entries it posted, the documents behind them, the reason each was made, and a signature. Sign-off and period lock are logged to the person who made them. The whole trail exports as your audit package, so each number reviews like well-documented work, not a black box, and your controls over what posts automatically are visible and testable.

Can it close the period without me?
No. Aleq does the work — reconciles, posts, accrues, drafts the judgment calls — but the flux review and the period sign-off are always a person's. Nothing seals until you sign. You stay the controller of record on the close, every period.

How do you handle a blocked entity or the critical path?
Aleq tracks dependencies across every entity and surfaces the one thing holding up the seal — say a missing vendor invoice blocking a VAT reconciliation in your German entity. The rest of the close keeps moving; the blocker is flagged with what's needed and who owns it, so nothing stalls quietly and you find it on day two, not day five.

What's in the close package for the board and auditors?
The signed financial statements, the supporting schedules, the full journal and decision trail, the flux narrative explaining material variances, and the sign-off record. It's built as the period closes — not assembled by hand afterward — and pinned to durable storage so it reads the same the day you close it and three quarters later.

Can a closed period be changed?
Not silently. Once you sign and lock a period it's sealed and pinned tamper-evident; Aleq can't post into it, same as anyone else. A correction goes through a clearly recorded reopen-and-re-sign, or posts to the open period as a prior-period adjustment — visible, attributed, and never quietly slipped into closed books.

### Run your next close with Aleq.

Watch Aleq run a real month on your books — every entity on one board, every entry explained, the period sealed on schedule. You sign off.

Book a working session
See all the work

---

## `/work/collections`

Collections

# Gets you paid. Without the awkward calls.

Aleq chases every overdue invoice in your team's voice — you get the promised date, not the awkward call.

Put Aleq on collections
How it works
Collections · overdue
working
Stark Industries INV-7827 · 61+ days $412,400 high risk
Globex Corp. INV-7831 · 31–60 days $148,200 at risk
Cyberdyne Systems INV-7829 · promise to pay Fri $96,400 on track
3 of 14 cases shown
14 reminders sent today · 0 waiting on you
this morning
14 reminders sent 0 waiting on you
It owns the follow-up

### Every overdue invoice is a case.

Not a line on an aging report you keep meaning to call. Aleq opens a case the day an invoice goes past due, tracks every touch and every promise, and works it until it's paid or you step in. You see what's been done and what's next — for each one.

Case · Stark Industries
13 days past due
Stark Industries · $412,400
INV-7827 · 3 missed promises this year
Next move
Escalate to their AP lead and apply the 1.5%/mo finance charge in your terms. Stark has paid late before — and only moves once it's escalated.

✓ Approve next move
It sounds like your team

### It reaches out in your voice.

Email or a call, written the way your team actually talks — firm or friendly, your call. You set the tone and the limits once; Aleq sends on your standing orders, or holds for your yes on anything you flag. Nothing goes out in a voice you didn't approve.

Drafted · reminder to Globex
your voice
"Hi Dana — following up on INV-7831"
$148,200 · now 34 days past due
Tone rules you set
Friendly first reminder, no finance charge before 45 days, never threaten to pause service. Sent on your standing orders.

✓ Approve & send
It listens, then records

### It captures the promise.

When a customer says they'll pay Friday, Aleq writes it down — the amount, the date, who said it — and updates the ledger. If they dispute the invoice, it logs that instead and routes it to you. You always know where every dollar stands and why.

Where each case stands
Cyberdyne Systems $96,400 · pays Friday — recorded, ledger updated Promise to pay
Initech LLC $58,900 · says a line item is wrong — sent to you Dispute
Stark Industries $412,400 · 3rd reminder out, no reply yet Dunning
It gets better the longer it runs

### It learns who pays only after a nudge.

Some customers always pay on the first reminder. Some only move once you escalate. Aleq learns the difference per customer — chasing harder where it has to, staying light where it doesn't — and you can see every pattern and switch any of them off.

What Aleq has learned
Ramp pays on the first reminder seen 9× · never needed more Runs alone
Globex pays around day 35 seen 6× Runs alone
Stark pays only after escalation seen 7× Asks first
FAQ

### What finance leaders ask first.

Does it contact my customers without me?
Only the way you tell it to. You set the tone and the limits up front — how firm, how often, what's off-limits. Aleq drafts each reminder, then sends it under your standing orders. Flag any customer, amount, or step and it holds for your approval first. You can pull the whole thing back to draft-only at any time.

What happens with a disputed invoice?
It stops chasing and routes it to you. If a customer says a line is wrong or the work wasn't delivered, Aleq logs the dispute with what was said, pauses the reminders on that case, and hands it over. It never argues the merits of a dispute on your behalf.

Could it damage a customer relationship?
The controls are built to prevent exactly that. You set tone rules and escalation thresholds per customer, and Aleq stays inside them — leaning on the accounts it's learned will always pay late, and going light on the ones who don't. A finance charge or a hard escalation only fires where your terms allow it, and you stay in control of every case.

How does this move DSO?
By working every overdue invoice the day it ages, not just the ones someone got to. Consistent, on-time follow-up across the whole ledger is what brings days-sales-outstanding down — most teams simply can't staff it. Aleq can, so promises get made earlier and kept more often.

Where's the record of what was said?
On the case. Every email, every call summary, every promise and dispute is timestamped and attached to the invoice, so you can see who said what and when — and it exports for your records. Nothing about a customer's account changes without a trail back to the reason.

### Put Aleq on collections.

Set the tone and the limits, and watch Aleq work a real aging report — every reminder in your voice, every promise captured, every case yours to step into.

Book a working session
See all the work

---

## `/work/general-ledger`

General ledger

# Always balanced. Always current.

Your trial balance is live, not a report you wait for — and every number traces to its source in a click.

See it on your books
How it works
Trial balance · Sirius Robotics · May 2026
live
10100 JPMC Operating $2,418,904.10
12000 Accounts Receivable $1,284,400.00
25000 Deferred Revenue ($360,000.00)
40000 Subscription Revenue ($3,540,000.00)
50100 Cloud Infrastructure $129,640.00
412 accounts · debits = credits
$0.00 out of balance
Traceability

### Every number traces to its proof.

Take any figure on the trial balance and follow it down — to the entry that created it, then to the bill, contract, or bank line behind that entry. No balance is a black box, and nothing traces back to a spreadsheet.

balance $129,640.00 50100 · Cloud Infrastructure
entry JE-2026-0391 posted May 4 · double-entry
source AWS invoice · $88,440 matched to bank line BT-9004
By construction

### It can't post a book that doesn't balance.

Double-entry isn't a convention here — it's enforced in the engine. An entry where debits don't equal credits is rejected before it ever reaches your ledger. The books can't drift, because the system that writes them won't let them.

Journal entry · JE-2026-0412
DR 12000 Accounts Receivable $142,400.00
CR 40000 Subscription Revenue $142,400.00
Debits − Credits $0.00 · balanced
Always current

### Live. Never a batch job.

There's no "run the trial balance" step. As entries post through the month, the numbers are current to the second — so the close starts from books that are already true, and your board figures never wait on a batch.

Trial balance · day 3 of close
live
Assets $31.2M
Liab. & equity $24.8M
Revenue $23.4M
Expense $17.0M
updated to the second
$0.00 out of balance
$0.00 Out of balance, all year
8,412 Entries posted in May
100 % Traced to source evidence
48 hrs From connect to live
You set the leash

### You decide how much it posts.

Per account, never all-or-nothing. Let proven coding run on its own, keep the judgment calls for your team, and change it any time.

manual
Drafts, you post.
Aleq codes and balances every entry. You post each one yourself.

assist default
Posts on your yes.
It shows the coding and the evidence; one click posts it, with rollback.

auto
Posts, you can undo.
For proven accounts. Signed when it posts, reversible for 14 days.

### See it on your own books.

Connect read-only and watch Aleq code, post, and balance a real month — every number traced, signed, and reversible.

Book a working session
See all the work

---

## `/work/multi-entity`

Multi-entity & consolidation

# Many books. One close.

Every entity stays on its own books. Aleq rolls them into one consolidated close — without the month-end spreadsheet.

See it on your group
How it works
Consolidation · Sirius Group · May
in balance
Sirius Robotics (US) USD · reporting currency consolidated
Sirius Robotics UK Ltd GBP · translated @ 1.2614 consolidated
Sirius Robotik GmbH EUR · translated @ 1.0922 consolidated
Intercompany US ↔ UK ↔ GmbH eliminated
6 entities · 3 currencies · IC eliminated
Group consolidated · in balance
consolidated close
ties to the locals in balance
Translation

### Each entity, in its own currency.

Your UK and German books stay in pounds and euros, the way the locals keep them. Aleq translates each one into your reporting currency at the rate it should use — balance sheet at the closing rate, income at the period average — and shows you the rate behind every line. Nothing is converted on a number you can't see.

Translated to USD · May
closing rates
Sirius Robotics UK Ltd GBP balances → USD @ 1.2614 £3,180,000 → $4,011,252
Sirius Robotik GmbH EUR balances → USD @ 1.0922 €2,450,000 → $2,675,890
Sirius Robotics (US) USD · reporting currency $17,540,000
Translation difference → cumulative translation adjustment (equity)
rate shown on every line
Eliminations

### Intercompany, eliminated.

When the US bills the UK for shared services, that's a receivable on one set of books and a payable on the other — real to each entity, but not to the group. Aleq matches the two sides, nets them to zero in consolidation, and leaves the standalone books untouched. You see exactly what came out and why.

Intercompany eliminations · May
IC receivable — US owes from UK shared services · Sirius Robotics (US) +$840,000
IC payable — UK owes to US shared services · Sirius Robotics UK Ltd −$840,000
Elimination entry removed in consolidation only $0.00
Standalone books unchanged · 2 sides matched
netted to $0.00
No black boxes

### Translated at the right rate, every time.

Every translation posts as a real, balanced journal entry — the source balance, the rate, and where the difference lands. When rates move, the difference goes to cumulative translation adjustment in equity, not into earnings by accident. You can open any entry and trace the number all the way back.

Translation entry · GmbH → USD
@ 1.0922
DR Translated assets — GmbH €2,450,000 at the closing rate $2,675,890
CR Translated liabilities & equity — GmbH at the matching rates $2,612,140
CR Cumulative translation adjustment equity · not earnings $63,750
Balanced · traces to the source balance and rate in balance
It gets better the longer it runs

### It learns your group structure.

The eliminations that run the same way every month, Aleq runs on its own. But a new intercompany relationship — a German loan to the UK that's never appeared before — it drafts and holds for your yes. You can see every relationship it's learned, whether it runs alone yet, and switch any of them off.

What Aleq has learned · group
US ↔ UK shared services → eliminate run 24× · always matched Runs alone
GmbH GBP/EUR balances → translate run 18× Runs alone
New: GmbH loan to UK Ltd first time seen this period Asks first
FAQ

### What controllers ask first.

Can Aleq consolidate alongside my existing ERP (e.g. NetSuite)?
Yes. Aleq consolidates the entities it runs and can sit alongside an incumbent ERP during the transition — it doesn't have to own every entity on day one. You bring the entities it keeps the books for into the group consolidation, and the rest can stay where they are until you're ready to move them. There's no all-or-nothing cutover.

How do you handle intercompany eliminations?
Aleq matches the two sides of every intercompany balance — the receivable on one entity and the payable on the other — and removes them in consolidation only, so the standalone books stay exactly as the local team keeps them. Each elimination shows both sides and nets to zero. A relationship it has seen many times runs on its own; a new one drafts and waits for your approval.

What FX rates do you use, and how is CTA handled?
Balance-sheet accounts translate at the period closing rate and income-statement accounts at the period average, with each rate shown on the line it applied to. The resulting translation difference posts to cumulative translation adjustment in equity — not into earnings — and you can open the entry to see the source balance, the rate, and where it landed. You can review or adjust the rates before anything is locked.

Is the consolidation auditable across entities?
Yes. Every translation and elimination posts as a balanced journal entry that carries its own support — the source balance, the rate or the matched intercompany line, the reason, and a signature — so it reviews like a well-documented manual entry. The full trail exports per entity and for the group, and you can see who or what touched every number, all the way back to the local books.

What about a new entity or an acquisition?
You add it to the group and map its accounts to your consolidated chart; Aleq starts translating and eliminating for it from there. While it's new, Aleq drafts the entries and holds them for your approval rather than running on its own — it earns autonomy on that entity the same way it does everywhere else, once it has matched enough closes. Aleq drafts and prepares the consolidated close; it doesn't file your returns or replace your review.

### Consolidate your group with Aleq.

Bring in the entities Aleq runs and watch a real month consolidate — each one translated at the rate you can see, intercompany eliminated, the group tied out and in balance.

Book a working session
See all the work

---

## `/work`

*the work*

# Everything a controller does — done overnight.

These are the standing jobs Aleq runs while you sleep. Each one reconciled, signed, and reversible — not flagged for your review.

✣ Aleq · work graph customer operating memory earned
Watches how your finance team decides Bank treatments, payment gates, collection tone, close sign-offs, entity relationships, and tax choices. observe
Turns repeated judgment into memory Aleq remembers the treatment, the evidence, the limits, and when to stop asking. learn
Earns autonomy per task Reconciliation can Auto while AP wires stay Assist and period lock stays Manual. leash
Runs only inside your controls When a pattern leaves its learned scope, Aleq asks with the evidence already attached. act
Proves and rolls back Every action has source evidence, policy, ledger impact, signature, and undo path. proof
customer terms Aleq learns how this company runs finance observing
auto routine bank rec · earned
assist $188k payment · approval
manual period lock · judgment
operating memory task-by-task permission
asks runs inside controls
bounded the same customer memory powers every standing job.
unique
Aleq does not just automate a workflow; it earns permission from this customer’s own history.

control
Autonomy is never global. Each job has its own evidence, go/no-go line, mode, and rollback.

outcome
The work runs overnight and arrives with proof instead of a new review queue.

your team teaches it · it earns permission · it runs inside your controls · it proves the work
general ledger Books that can't lie.
Every balance drills to the entry and the evidence; double-entry enforced.

reconciliation Reconciled to the penny.
Every account matched to its source, $0.00 variance, by morning.

collections Gets you paid.
Calls and emails past-due accounts in your voice; captures the promise.

the close Closes the month.
Continuous close — day 3 of 5, not a five-day fire drill.

accounts payable Pays the right bills.
Three-way match and the right approval before a dollar moves.

multi-entity Closes across entities.
Six entities, five currencies, intercompany eliminations — one close.

tax & compliance Keeps you filing-ready.
Sales tax, 1099s, and audit evidence assembled as it happens.

### Pick one. Watch it run.

Connect read-only and put Aleq on your real books — every step visible, every action reversible.

Book a working session
Rate card

---

## `/work/reconciliation`

Reconciliation

# Reconciled to the penny, by morning.

Aleq reconciles overnight. You wake up to finished books — not a to-do list .

See it on your books
How it works
Reconciliation · JPMC Operating ••4421 · May
done 03:42
Ramp Business Corp matched to invoice INV-7819 +$88,400 100%
Wire out — Foxconn Mfg. matched to bill B-3051 −$188,440 99%
Stripe transfer matched to invoice INV-7820 +$142,400 96%
Stripe transfer looks like a duplicate — held for you +$88,400 review
412 lines · 410 matched · 2 held for you
$0.00 difference
last night
2,261 lines matched $0.00
It does the hard part

### It works the exceptions — it doesn't hand them back.

Your operating account came in $17,488 off the books. Aleq tracked it down — an unrecorded payroll-tax draft and a duplicate Stripe payout — posted the fixes, and left them one click to undo. You see the work that got done, not a pile of flags to chase.

the gap $17,488.53 off bank vs. books, JPMC ••4421
what it found Two causes, explained an unrecorded payroll-tax draft + a duplicate payout
the result $0.00, entries posted each one reversible in a click
No black boxes

### Every match shows its reasoning.

Each suggested match comes with a confidence score and the plain reason behind it — the amount, the timing, the name on the transaction. Accept it in a click, or open the receipt and check. Nothing posts on a guess.

Suggested match
96% confident
Stripe transfer · +$142,400
matches Vanta Inc. · invoice INV-7820
Why this match
The amount matches to the cent, it landed within five days of the invoice, and "Vanta" appears on the transaction.

✓ Accept match
It gets better the longer it runs

### It learns your rules — then earns the right to run them.

When the same call goes the same way enough times, Aleq stops asking. You can see every rule it's learned, how sure it is, and whether it runs on its own yet — and switch any of them off.

What Aleq has learned
Stripe payouts → Stripe clearing matched 412× · never wrong Runs alone
AWS bill in the last days of the month seen 36× Runs alone
Stark pays only after a nudge seen 7× Asks first
You stay in control

### You decide how much it does.

Set it per account, never all-or-nothing. Aleq can draft and wait for your yes, or post on its own where it's earned the trust — and you can pull any account back the moment you want. Everything it posts is signed and reversible.

How much Aleq runs, by account
Bank — JPMC ••4421 reconciliation Automatic
Card — Brex reconciliation Automatic
Vendor wires over $100k payments Posts on your yes
Close the period sign-off You only
FAQ

### What controllers ask first.

How do my auditors treat entries Aleq posts?
Every reconciling entry carries its own support — the bank line, the matched document, the reason it matched, and a signature — so it reviews like a well-documented manual entry, not a black box. The complete trail exports for your audit, and you can see who (or what) touched every number.

Can it touch a period I've already closed?
No. Closed and locked periods are off-limits to Aleq, the same as anyone else. Reconciling entries post to the open period; anything that would affect a prior period is surfaced for your review, never posted silently.

What decides whether it posts on its own or waits for me?
You do. You set the materiality threshold and which accounts run automatically. Under the limit on a pattern it has proven, it posts; over the limit, on a new counterparty, or on anything unusual, it drafts and holds for your approval.

What happens when it gets one wrong?
Every posting is reversible — the reversing entry is staged before it posts — so you undo it in a click. Aleq learns from the correction and asks first on anything like it until it's sure. You stay the controller of record on every entry.

Where does my bank data live, and can it move money?
Aleq connects read-only through your existing feeds: it sees transactions but can't move money or change a bank setting. Data is encrypted and access is role-scoped — full detail on the security page .

### Put it on reconciliation first.

Connect read-only and watch Aleq reconcile a real month on your books — every match explained, every entry reversible.

Book a working session
See all the work

---

## `/work/tax`

Tax & compliance

# Filing-ready, as it happens.

Tax stops being a season. Aleq keeps you filing-ready all year, with the evidence attached.

See it on your books
How it works
Tax · Sirius Robotics · 2026
watching
Florida approaching nexus · $98k of $100k register soon
California registered · collecting 8.63% registered
New York registered · collecting 8.75% registered
1099s 14 vendors assembling on track
4 jurisdictions · 1 registration due
Nothing past due
right now
FL at 98% of $100k no surprises
Before, not after

### It watches nexus before you cross it.

Aleq tracks your sales into every state against that state's economic-nexus threshold, in real time. Florida is at $98k of the $100k trigger and trending to cross around May 12 — so you register before the next ship, not after a notice arrives. You see why it's flagged, and what to do next.

Economic nexus · Florida
Florida — $98,400 of $100,000
crosses ~May 12 · register before next ship
Why this is flagged
Florida's economic-nexus threshold is $100,000 in sales. You're at 98% and trending up — once you cross, you owe registration and collection, so Aleq surfaces it with runway to act.

Start registration
All year, not in January

### 1099s assembled as you pay.

Every contractor payment is flagged and totaled the moment it clears, and Aleq checks each vendor has a W-9 on file. Totals build through the year, so January is a review — not a scramble to chase down a year of payments and missing forms.

1099-NEC · assembling for 2026
Anders Design LLC W-9 on file $42,400
Riley Ops Consulting W-9 on file $28,900
Marlowe Studio W-9 missing — requested W-9 needed
14 vendors over $600 · 1 W-9 outstanding
on track for Jan 31
Tied to your books

### The income-tax provision, current.

Aleq keeps the income-tax provision live off your trial balance — the statutory rate, the valuation allowance, the effective rate — so it's ready when you close, not rebuilt at year-end. For a company running losses, that lands at roughly a 0% effective rate, with the reasoning attached.

See the full provision &rarr;
Rate reconciliation · FY2026
Pretax book loss $(2,385,722)
21% Tax at statutory rate $(501,002)
Change in valuation allowance $543,000
Provision for income tax · ETR ~0%
$(1,202)
It earns the routine

### It learns your filing calendar.

The filings you make every period, on the same schedule, Aleq prepares on its own once they're proven — the package is ready and waiting. A new jurisdiction or a first-time registration is a judgment call, so it stops and asks before it acts.

What Aleq runs, by filing
CA sales tax — monthly return prepared 18× · on schedule Runs alone
NY sales tax — quarterly return prepared 6× Runs alone
FL — first-time registration new jurisdiction Asks first
FAQ

### What finance leads ask first.

Does Aleq file my sales tax and 1099s?
No — Aleq prepares the filings and the evidence behind them, and works with your filing provider through Avalara-style integrations. The returns are computed, the 1099s are assembled with W-9s checked, and the support is tied out — then your provider files them. Aleq doesn't file on your behalf.

Who's liable if a filing is wrong?
You are — Aleq prepares the workpaper, it isn't the filer of record. Every figure ties back to your books with its source attached, so you and your filing provider can see and stand behind the support for each return before it goes out.

How does it track economic nexus across states?
It measures your sales into each state against that state's economic-nexus threshold — dollars and transaction count — in real time, and flags a state as you approach the trigger, not after you cross it. You get runway to register before the next taxable sale.

How does this connect to the income-tax provision (ASC 740)?
The same trial balance drives both. Aleq keeps the income-tax provision current off your books — the rate reconciliation, the deferreds, the valuation allowance — so it's ready at close. See the full ASC 740 provision engine .

What about multi-state and registrations?
Aleq tracks every state you sell into and surfaces where you've crossed, where you're close, and where you're already registered. For a new jurisdiction it drafts the registration and the reasoning, then stops for your sign-off — a first-time registration never runs unattended.

### Stay filing-ready with Aleq.

Connect read-only and watch Aleq track your nexus, assemble your 1099s, and keep the provision current — every filing prepared, every number tied to your books.

Book a working session
See all the work

---