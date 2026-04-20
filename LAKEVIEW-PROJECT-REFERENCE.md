# Lakeview Spine & Wellness — Project Reference

> Load this file into Antigravity as your single source of truth for the Lakeview Spine & Wellness website project. It covers brand identity, voice, design system, all site copy, services and pricing, business details, technical stack, and build notes.

---

## Table of Contents

1. [Business Information](#1-business-information)
2. [Brand Identity & Voice](#2-brand-identity--voice)
3. [Design System](#3-design-system)
4. [Site Architecture](#4-site-architecture)
5. [Services & Pricing](#5-services--pricing)
6. [Packages & Memberships](#6-packages--memberships)
7. [Page-by-Page Copy](#7-page-by-page-copy)
8. [Blog Articles](#8-blog-articles)
9. [Testimonials](#9-testimonials)
10. [Technical Stack & Configuration](#10-technical-stack--configuration)
11. [Pending Swap-Ins](#11-pending-swap-ins)
12. [Pre-Launch Checklist](#12-pre-launch-checklist)

---

## 1. Business Information

| Field | Value |
|---|---|
| Clinic name | Lakeview Spine & Wellness |
| Provider | Dr. Elena Mercer, DC |
| Address | 123 Lakeview Drive SE, Grand Rapids, MI 49506 |
| Phone | (616) 555-0192 |
| Email | hello@lakeviewspinewellness.com |
| Website | lakeviewspinewellness.com |
| Booking system | Acuity Scheduling |
| Google Business | Needs to be set up / verified |

### Hours

| Day | Hours |
|---|---|
| Monday | 8:00 AM – 6:00 PM |
| Tuesday | 8:00 AM – 6:00 PM |
| Wednesday | 10:00 AM – 6:00 PM |
| Thursday | 8:00 AM – 6:00 PM |
| Friday | 8:00 AM – 4:00 PM |
| Saturday | 9:00 AM – 1:00 PM |
| Sunday | Closed |

### Location Notes
- Free parking in front of the clinic
- Accessible entrance on the north side of the building
- Neighborhood: Lakeview / East Grand Rapids area

---

## 2. Brand Identity & Voice

### Tagline
> "Chiropractic care that fits real life."

### Brand Positioning
Lakeview Spine & Wellness is a straightforward, personable chiropractic clinic in Grand Rapids. The brand is built on three pillars:

1. **Personalized care** — Dr. Mercer sees patients herself; no rotating staff or rushed adjustments
2. **Clear communication** — patients always know what was found, what's recommended, and why
3. **Realistic expectations** — no over-promising, no upselling, no pressure

### Target Audience
- Working adults (25–55) with recurring desk-related tension (neck, shoulder, low back)
- Active adults and amateur athletes managing training-related soreness or injury
- Pregnant patients looking for safe, qualified prenatal chiropractic
- New-to-chiropractic patients who are a little nervous or skeptical
- Patients referred by other providers who want a clinical, not sales-y experience

### Voice & Tone
The brand voice is **direct, calm, honest, and human**. Write the way a smart clinician talks to a patient they respect.

**Do:**
- Use plain language — say "neck pain" not "cervical dysfunction"
- Be specific about what patients can expect
- Acknowledge uncertainty when it exists ("coverage varies — call us and we'll check")
- Write short sentences and short paragraphs
- Start CTAs with verbs: "Book," "Call," "Read," "Learn"

**Don't:**
- Use jargon, all-caps, or exclamation points
- Make outcome promises ("we'll fix your pain")
- Use vague wellness language ("unleash your body's natural healing")
- Pressure or upsell — no "limited-time offer" framing
- Use passive voice where active is possible

### Brand Vocabulary
| Use | Avoid |
|---|---|
| Chiropractic adjustment | Manipulation, crack, pop |
| Discomfort or tension | Agony, suffering |
| Evaluation or exam | Assessment battery |
| We'll check your coverage | We're in-network with... |
| Book a visit | Schedule a consultation |
| Soft tissue work | Myofascial release (in body copy) |
| Dr. Mercer | The doctor, the chiropractor |

---

## 3. Design System

### Color Tokens

| Token | Value | Use |
|---|---|---|
| `--color-text-primary` | `#1A1A18` | Headings, body text |
| `--color-text-secondary` | `#5C5C56` | Body paragraphs, descriptions |
| `--color-text-muted` | `#8C8880` | Meta text, captions, placeholders |
| `--color-accent` | `#4A7C6F` | Primary CTA buttons, links, highlights |
| `--color-accent-hover` | `#3A6B5E` | Button hover state |
| `--color-bg-primary` | `#FAFAF8` | Default page background |
| `--color-bg-warm` | `#F0EDE8` | Alternating section backgrounds |
| `--color-bg-white` | `#FFFFFF` | Cards, modal surfaces |
| `--color-border` | `#E8E4DF` | Dividers, card borders, input borders |
| `--color-footer-bg` | `#2C2C28` | Footer background |
| `--color-footer-text` | `#C8C4BC` | Footer body text |

### Typography

- **Font family:** Inter (Google Fonts) — weights 400, 500, 600, 700
- **Base size:** 16px
- **Line height (body):** 1.7
- **Heading scale:**
  - H1: 48px desktop / 34px mobile
  - H2: 32px desktop / 26px mobile
  - H3: 20px
  - Overline: 11px, letter-spacing 0.1em, uppercase, accent color

### Layout

- **Container max-width:** 1160px (standard) / 720px (text/article pages)
- **Section padding:** 80px top/bottom desktop / 56px mobile
- **Header height:** 72px desktop / 60px mobile
- **Grid gap:** 24px standard / 16px tight
- **Border radius:** 8px (md) / 12px (lg) / 4px (sm)

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Desktop | > 960px | Full layout, horizontal nav |
| Tablet | 769–960px | Condensed nav, 2-col grids |
| Mobile | ≤ 768px | Single column, mobile menu |

### Spacing Scale

`--space-xs`: 4px · `--space-sm`: 8px · `--space-md`: 16px · `--space-lg`: 24px · `--space-xl`: 40px · `--space-2xl`: 64px · `--space-3xl`: 96px

### Component Patterns

**Buttons:**
- `.btn.btn--primary` — filled sage green, white text
- `.btn.btn--outline` — outline sage green, transparent bg
- `.btn.btn--white` — white bg, dark text (for use on dark backgrounds)
- `.btn--lg` — 18px text, more padding
- `.btn-link` — text-only, underline on hover

**Cards:**
- `.card` — white bg, border, border-radius, padding 28px, full-height
- `.card-grid.card-grid--3` — 3-column responsive grid
- `.card-grid.card-grid--2` — 2-column responsive grid

**Info boxes:**
- `.info-box` — warm bg, border-radius, padding, used for callouts

**Section templates:**
- **Template A:** Full-width hero (image + overlay), headline + subhead + CTA
- **Template B:** Centered headline + 3-column card grid
- **Template C:** 2-column text + image (image right)
- **Template D:** Warm bg, 2-column image + text (image left)
- **Template E:** Centered headline + 2×2 card grid (wider cards)
- **Template F:** Dark bg CTA band, headline + body + 1–2 CTAs
- **Template G:** Standard page header (overline + H1 + lead text)

---

## 4. Site Architecture

### All Pages (20)

| URL | Title | Template | Notes |
|---|---|---|---|
| `/` | Home | Multi-section | 8 sections, JSON-LD schema |
| `/services/` | Services | G + content | All 6 services expanded |
| `/new-patients/` | New Patients | G + content | Steps + FAQ accordion |
| `/book/` | Book Online | G + embed | Acuity embed placeholder |
| `/packages/` | Packages | G + content | 4 packages + mini FAQ |
| `/about/` | About | G + content | Clinic story + Dr. Mercer bio |
| `/faq/` | FAQ | G + accordion | 12 Q&As in 3 groups |
| `/contact/` | Contact | G + 2-col | Form + hours, JSON-LD schema |
| `/blog/` | Blog | G + cards | 4 article cards |
| `/blog/workstation-habits-neck-tension/` | Blog article | Article | 5 workstation habits |
| `/blog/first-chiropractic-visit/` | Blog article | Article | What to expect |
| `/blog/when-tension-needs-attention/` | Blog article | Article | 5 signals |
| `/blog/recovery-habits-active-adults/` | Blog article | Article | Recovery habits |
| `/insurance/` | Insurance & Payment | G + content | Insurance grid + payment options |
| `/new-patient-forms/` | New Patient Forms | G + content | Explains Acuity intake flow |
| `/privacy/` | Privacy Policy | Text layout | noindex, full policy |
| `/thank-you/` | Thank You | Simple | Post-booking + post-form |
| `/404.html` | 404 | Simple | Custom error page |

### Navigation Structure

**Header nav (desktop):** Services · New Patients · About · Blog · Contact · [Book Online] (CTA)

**Mobile menu:** Book Online → (CTA) · Services · New Patients · About · Blog · Contact · Phone + Hours

**Footer nav columns vary by page** — contextually relevant links per page section

### Internal Linking Notes
- "New Patients" nav link → `/new-patients/` (first visit guide, not forms)
- "New Patient Forms" is a separate page linked from `/new-patients/` and footer where relevant
- All blog post footers link back to `/blog/`
- All package CTAs on `/packages/` temporarily → `/book/` (replace with Acuity package URLs)

---

## 5. Services & Pricing

All prices are self-pay rates. Insurance coverage varies by plan.

### New Patient Exam
- **Duration:** 45 minutes
- **Price:** $95
- **Who it's for:** Anyone coming in for the first time
- **What it includes:** Full intake, postural and movement assessment, orthopedic testing as needed, full report of findings, treatment plan recommendation
- **Requires:** Intake form (completed during online booking via Acuity)
- **Notes:** Dr. Mercer sees you the full 45 minutes. You leave knowing what was found and what she recommends.

### Chiropractic Adjustment
- **Duration:** 20 minutes
- **Price:** $55
- **Who it's for:** Established patients (returning visit)
- **What it includes:** Brief check-in, targeted spinal or extremity adjustment based on your current presentation
- **Notes:** Can be booked with a 15-min massage add-on (+$25)

### Sports Recovery Visit
- **Duration:** 30 minutes
- **Price:** $75
- **Who it's for:** Active adults, athletes, new and existing patients
- **What it includes:** Movement screen, soft tissue work (instrument-assisted or manual), adjustment as indicated
- **Notes:** Designed for proactive maintenance, not just injury response. Good entry point for active adults who aren't sure if chiropractic is right for them.

### Prenatal Care Visit
- **Duration:** 30 minutes
- **Price:** $65
- **Who it's for:** Pregnant patients, any trimester
- **What it includes:** Pregnancy-adapted adjustment (side-lying positioning), round ligament and pubic symphysis assessment as needed
- **Notes:** Dr. Mercer has additional training in prenatal care. Comfortable positioning for all trimesters.

### Posture & Mobility Assessment
- **Duration:** 30 minutes
- **Price:** $65
- **Who it's for:** New and existing patients
- **What it includes:** Standing postural analysis, functional movement screen, tailored mobility recommendations and exercises
- **Notes:** Good option for patients who want to understand their baseline before starting care, or who primarily want preventive guidance.

### Massage — Standalone Session
- **Duration:** 30 minutes
- **Price:** $50
- **Who it's for:** New and existing patients
- **Notes:** Focused therapeutic massage; not a full-body relaxation massage. Targeted to areas of tension or restriction.

### Massage Add-On
- **Duration:** 15 minutes
- **Price:** $25
- **Who it's for:** Existing patients booking an Adjustment or Sports Recovery Visit
- **Notes:** Added to the beginning of your appointment. Same session, extended time.

---

## 6. Packages & Memberships

### Reset Package
- **Visits:** 3 visits within 30 days
- **Price:** $145
- **Savings:** Save $20 vs. individual pricing
- **Best for:** Acute issue, new patient getting started, or returning patient after a break
- **Notes:** No auto-renewal, no commitment

### Momentum Package ⭐ Most Popular
- **Visits:** 6 visits within 60 days
- **Price:** $270
- **Savings:** Save $60 vs. individual pricing
- **Best for:** Patients with a recurring issue who want consistent care without a monthly commitment
- **Notes:** No auto-renewal, no commitment

### Athlete Support Plan
- **Visits:** 4 visits per month
- **Price:** $260/month
- **Commitment:** Month-to-month, cancel anytime
- **Best for:** Active adults and athletes who want regular soft tissue work and adjustment as part of their training routine
- **Notes:** Mix-and-match visit types (Adjustment, Sports Recovery, Add-on Massage)

### Monthly Wellness Membership
- **Visits:** 2 visits per month
- **Price:** $89/month
- **Commitment:** No long-term contract, cancel anytime with 30 days notice
- **Best for:** Patients who want ongoing maintenance care at a predictable monthly cost
- **Notes:** Most popular among established patients maintaining results

### Package Notes (for copy/design use)
- All packages are purchased through Acuity Scheduling (package purchase URLs to be added)
- Packages are transferable between visit types except New Patient Exam
- No cash refunds on packages; unused visits do not expire within the stated timeframe

---

## 7. Page-by-Page Copy

### Home (`/`)

**Hero section:**
- Overline: Grand Rapids, MI
- Headline: Chiropractic care that fits real life.
- Subhead: Personalized care, honest communication, and a booking process that does not require a phone call. Dr. Mercer sees every patient herself.
- CTA 1: Book Online (→ /book/)
- CTA 2: See Services (→ /services/)

**Credibility strip (5 items):**
- Accepting new patients
- Same-week appointments available
- Online booking, no phone call required
- Insurance accepted · Self-pay welcome
- Dr. Elena Mercer, DC — sees every patient

**Services preview (6 cards):**
1. New Patient Exam — 45 min · $95 — Your first visit. Full assessment, clear findings, honest recommendation.
2. Chiropractic Adjustment — 20 min · $55 — For established patients. Targeted, efficient, and done on time.
3. Sports Recovery Visit — 30 min · $75 — Soft tissue work and adjustment for active adults. New and existing patients welcome.
4. Prenatal Care — 30 min · $65 — Pregnancy-adapted care in any trimester. Comfortable positioning throughout.
5. Posture & Mobility — 30 min · $65 — Postural analysis and a mobility screen with targeted recommendations.
6. Massage — 30 min standalone $50 · 15 min add-on $25 — Therapeutic massage as a standalone or added to your visit.

**Why Lakeview (2-col):**
- Headline: What makes this clinic different from others you may have tried.
- Body: Dr. Mercer sees every patient herself — not a rotating roster of providers. She spends the full appointment time with you. At the end of your first visit, you will have a clear understanding of what she found, what she recommends, and what you can do on your own to help. No pressure to sign up for a care plan. No upselling. Just a clear picture of what is going on and what your options are.

**New patient pathway (2-col reverse):**
- Headline: Book online. Fill out a short form. Show up.
- Body: The intake form is part of the online booking process — it takes about five minutes and appears automatically after you select your appointment time. When you arrive, Dr. Mercer has already reviewed your responses. You spend your time in the appointment, not in the waiting room filling out paperwork.
- CTA: Book a New Patient Exam (→ /book/)

**Packages teaser:**
- Overline: Packages & Memberships
- Headline: More visits, lower cost per visit.
- Body: If you are coming in regularly, prepaid visit packages reduce what you pay per appointment. No long-term contracts. No auto-renewals on visit packs.
- CTA: View Packages (→ /packages/)

**Testimonials (4):** See Section 9

**Blog preview (3 cards):** Latest 3 articles

**CTA Band:**
- Headline: Ready to book your first visit?
- Body: Same-week appointments are usually available. Online booking takes about two minutes.
- CTA 1: Book Online (→ /book/)
- CTA 2: Call (616) 555-0192

---

### Services (`/services/`)

**Page header:**
- Overline: Services
- H1: Everything we offer, with pricing.
- Lead: Transparent pricing, clear visit descriptions, and no hidden fees. All prices listed are self-pay rates.

**Each service block includes:** Service name, duration + price, who-it's-for badge, body copy, details strip (duration / typical patients / booking notes).

**"Not Sure" guidance block:**
- Headline: Not sure which visit type to book?
- Body: Book a New Patient Exam if this is your first visit — it covers a full assessment regardless of your concern. If you are an existing patient or have a specific question, call us at (616) 555-0192.

**Packages banner:**
- Headline: Visiting more than once? Packages save you money.
- CTA: See Packages → /packages/

---

### New Patients (`/new-patients/`)

**Page header:**
- Overline: New Patients
- H1: What to expect at your first visit.
- Lead: A New Patient Exam is 45 minutes. By the end of it, you will know what Dr. Mercer found and what she recommends.

**4-step walkthrough:**

Step 1 — Book online and complete your intake form
The intake form is part of the Acuity booking process. It appears automatically after you select your appointment time. It asks seven short questions and takes about five minutes to complete. You do not need to print anything or arrive early to fill out paperwork.

Step 2 — Dr. Mercer reviews your form before you arrive
Your intake responses go directly to Dr. Mercer. She reviews them before your appointment so the visit starts in context, not from zero.

Step 3 — Your 45-minute exam
The exam includes a conversation about your concern and health history, postural and movement assessment, orthopedic and neurological testing as indicated, and Dr. Mercer's hands-on evaluation of the areas you came in for.

Step 4 — You leave knowing what was found
Dr. Mercer explains what she found, what she thinks is contributing to it, and what she recommends. If chiropractic care is a good fit, she will explain the plan. If something else would serve you better, she will tell you that too.

**What to bring / wear:**
- Nothing to bring — intake form is completed during booking
- Wear or bring comfortable clothes you can move in
- If you have recent imaging (X-ray, MRI), you are welcome to bring it, but it is not required

**After your first visit:**
You may feel some mild soreness in the areas that were treated — similar to how muscles feel after new exercise. This typically resolves within 24–48 hours. Dr. Mercer will tell you what to watch for and when to reach back out.

**Insurance summary box:**
We accept most major insurance plans. Coverage for chiropractic varies by plan. If you want to know what your plan covers before booking, call us at (616) 555-0192 and we will check for you. See the full Insurance & Payment page for details.

**FAQ (12 questions, 3 groups):**

Group: Before Your First Visit

Q: Do I need a referral to see a chiropractor?
A: No. In Michigan, you can see a chiropractor directly without a referral. Some insurance plans may require one for coverage — we can check your specific plan when you call.

Q: What should I wear to my appointment?
A: Comfortable clothes you can move in. Athletic wear works well. You will be asked to perform some simple movements and Dr. Mercer may need to access your spine, so avoid overly restrictive clothing.

Q: How long does the first visit take?
A: 45 minutes. This includes the intake conversation, the physical assessment, and Dr. Mercer's findings and recommendations. Follow-up adjustment visits are 20 minutes.

Q: Do I need to bring anything?
A: No. The intake form is completed as part of online booking. If you have recent imaging (X-ray or MRI) you think is relevant, you are welcome to bring it, but it is not required.

Q: I've never been to a chiropractor. Is it going to hurt?
A: Most patients do not find adjustments painful. You may feel mild pressure or hear a popping sound during the adjustment — this is normal and not harmful. Dr. Mercer explains what she is doing before she does it. If anything feels uncomfortable, tell her and she will adjust her approach.

Group: About Your Care

Q: Will I need to come back multiple times?
A: That depends on what Dr. Mercer finds. She will give you an honest recommendation at the end of your first visit. Some conditions respond quickly; others benefit from a short series of visits. She will not recommend more visits than she believes are useful.

Q: What is the popping sound during an adjustment?
A: The sound comes from a small release of gas from the joint space — the same mechanism as cracking your knuckles. It is not bones grinding or anything structural. Not every adjustment produces a sound, and the absence of a sound does not mean the adjustment was ineffective.

Q: Can chiropractic care help with [specific condition]?
A: The most honest answer is: it depends on what is driving your symptoms. Common presentations that respond well to chiropractic care include mechanical neck and back pain, tension headaches, and certain types of joint restriction. Dr. Mercer will tell you at your first visit whether she thinks chiropractic is a good fit for your specific situation.

Q: Do you treat children?
A: Not currently. Dr. Mercer sees adult patients (18+). For pediatric care, we recommend asking your child's pediatrician for a referral to a provider with specialized training.

Group: Scheduling & Payment

Q: How do I book?
A: Online at lakeviewspinewellness.com/book/ — available 24/7. You can also call (616) 555-0192 during office hours.

Q: What insurance do you accept?
A: We accept most major commercial plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and Medicare. Coverage varies significantly by plan type. Call us before your first visit and we will verify your benefits.

Q: What if I need to cancel or reschedule?
A: Appointments can be modified through the link in your Acuity confirmation email, or by calling us during office hours. We ask for at least 24 hours notice when possible.

**Packages awareness box:**
- Headline: Visiting more than once? Packages save you money per visit.
- CTA: View Packages → /packages/

---

### Book Online (`/book/`)

**Page header:**
- Overline: Scheduling
- H1: Book your appointment online.
- Lead: Select a visit type, pick a time, and complete your intake form — all in one step. Same-week appointments are usually available.

**[Acuity embed placeholder — swap in when Acuity is set up]**

**Booking guidance list:**
- New to the clinic? Book a New Patient Exam
- Returning patient? Book a Chiropractic Adjustment or Sports Recovery Visit
- The intake form for new patients appears automatically during booking
- After booking, you will receive a confirmation email with appointment details

**Phone fallback:**
- Body: Prefer to book by phone? Call us at (616) 555-0192 during office hours.

---

### Packages (`/packages/`)

**Page header:**
- Overline: Packages & Memberships
- H1: More visits, lower cost per visit.
- Lead: Prepaid visit packages reduce what you pay per appointment. No long-term contracts on visit packs. Monthly plans cancel anytime.

**Package cards (4):** See Section 6

**Mini FAQ (4 questions):**

Q: Can I use a package for any visit type?
A: Yes, with one exception. Visit packages can be applied to Chiropractic Adjustments, Sports Recovery Visits, Prenatal Visits, and Posture & Mobility Assessments. New Patient Exams are billed separately at $95.

Q: Do packages expire?
A: Visit packs (Reset and Momentum) do not expire within the stated timeframe — 30 days for Reset, 60 days for Momentum. Monthly memberships and the Athlete Support Plan run on a monthly cycle.

Q: Can I cancel a monthly plan?
A: Yes. Both monthly plans (Athlete Support Plan and Monthly Wellness Membership) can be cancelled anytime. We ask for 30 days notice so we do not charge you for a month you do not plan to use.

Q: What if I buy a package and chiropractic turns out not to be a good fit?
A: If you complete your New Patient Exam and Dr. Mercer does not believe chiropractic care is appropriate for your situation, we will not push you toward a package. Packages are for patients who have already established that they are continuing care.

---

### About (`/about/`)

**Page header:**
- Overline: About
- H1: A straightforward clinic with one focus: helping you feel better and move well.

**Clinic story (2-col):**
Headline: Why we opened Lakeview Spine & Wellness.
Body: Lakeview Spine & Wellness was opened to fill a specific gap: a chiropractic clinic where patients could get honest, skilled care without the pressure of aggressive care plans or the frustration of seeing a different provider every time. The clinic is designed around one provider seeing patients herself, taking the time to explain findings clearly, and making recommendations based on what patients actually need — not on what generates the most return visits.

**Practice philosophy:**
Headline: How we approach care.
Body 1: Every patient who comes in has a different situation. Some are managing an acute issue. Some have had the same problem for years and are finally deciding to get a professional read on it. Some are active adults who want to maintain their function rather than react to injury. The approach to each of these is different, and Dr. Mercer designs care plans accordingly.
Body 2: What stays consistent is the commitment to clear communication. At the end of every visit, you know what was found, what was done, and what the plan is. If something is outside the scope of what chiropractic care addresses well, you will hear that — along with a referral to someone better positioned to help.

**Dr. Mercer bio (2-col reverse):**
Headline: Dr. Elena Mercer, DC
Body 1: Dr. Mercer earned her Doctor of Chiropractic degree from National University of Health Sciences and has been practicing in West Michigan for over eight years. She holds additional certifications in prenatal and pediatric chiropractic care through the ICPA and has completed advanced coursework in sports chiropractic and instrument-assisted soft tissue mobilization.
Body 2: Before opening Lakeview Spine & Wellness, Dr. Mercer practiced at a multi-provider clinic in the Grand Rapids area. She opened Lakeview in 2024 with the intention of practicing the way she believed care should be delivered — one provider, enough time per patient, and no pressure tactics.

Credential pills: Doctor of Chiropractic · ICPA Certified (Prenatal & Pediatric) · IASTM Certified · 8+ Years Practice · Grand Rapids Native

Pull quote: "I want patients to leave knowing what I found and what I actually recommend — not just feeling like something happened to them."

---

### FAQ (`/faq/`)

**Page header:**
- Overline: FAQ
- H1: Common questions, answered directly.
- Lead: If something you need to know is not here, call us at (616) 555-0192.

**Full 12-item accordion in 3 groups:**
(Same questions as documented in New Patients section above, plus any additional FAQ-specific items)

**CTA Band:**
- Headline: Have a question that is not here?
- Body: Call us — we are happy to help before you commit to booking.
- CTA: Call (616) 555-0192

---

### Contact (`/contact/`)

**Page header:**
- Overline: Contact
- H1: Reach us by phone, email, or the form below.
- Lead: For scheduling, use the online booking system. For questions, insurance verification, or anything else — we are here.

**Contact details (left column):**
- Address: 123 Lakeview Drive SE, Grand Rapids, MI 49506
- Phone: (616) 555-0192
- Email: hello@lakeviewspinewellness.com
- Hours: (hours table — see Section 1)
- Parking: Free parking in front. Accessible entrance on the north side.
- Insurance: We verify insurance coverage before your visit. Call or email and we will check your plan.

**Contact form (right column):**
- Fields: Full name (required), Email (required), Phone (optional), Patient type (select: New patient / Existing patient / Not sure yet), Message (required), How did you hear about us (select: Google / Friend or family / Instagram / Facebook / Another provider / Other)
- Submit button: Send Message
- Form action: Netlify Forms → redirect to /thank-you

**[Google Maps embed placeholder — swap in when embed code is ready]**

---

### Blog (`/blog/`)

**Page header:**
- Overline: Blog
- H1: Resources for patients and people considering care.
- Lead: Short articles on what to expect from chiropractic care, managing common issues, and staying active.

**Article card list (4 articles):**
1. Simple Recovery Habits for Active Adults — Active Adults · 4 min read
2. When Recurring Tension Becomes Something Worth Getting Checked — Wellness Tips · 5 min read
3. What Actually Happens at Your First Chiropractic Visit — New Patients · 4 min read
4. Five Workstation Habits That Contribute to Neck Tension — Desk Workers · 3 min read

---

### Insurance & Payment (`/insurance/`)

**Page header:**
- Overline: Insurance & Payment
- H1: We work with most major plans — and with patients who prefer to pay directly.
- Lead: Coverage for chiropractic care varies significantly by plan. If you have specific questions before your first visit, call us — we will tell you what we know and help you figure out what makes sense.

**Insurance accepted:**
Blue Cross Blue Shield · Aetna · Cigna · United Healthcare · Medicare · (Call for others)

**Payment options:**
- Self-Pay: Pricing posted on Services page, no surprise fees
- HSA & FSA: Generally eligible for chiropractic care
- Care Packages: Reduce per-visit cost (link to /packages/)
- Major credit cards: Visa, Mastercard, Amex, Discover

**CTA Band:**
- Headline: Have a question before you book?
- Body: Call us and we will verify your insurance benefits before your first visit — no obligation.
- CTA 1: Call (616) 555-0192
- CTA 2: Or Book Online →

---

### New Patient Forms (`/new-patient-forms/`)

**Page header:**
- Overline: New Patient Forms
- H1: Complete your intake form before your first visit.
- Lead: The New Patient Intake form is completed as part of the online booking process through Acuity Scheduling — you do not need to print or bring anything.

**How it works (3 info boxes):**
1. Completed during online booking — The form appears automatically after you select your appointment time, before you confirm your booking.
2. Takes about 3–5 minutes — Seven short questions about health history, your main concern, and consent to contact.
3. Nothing to print or bring — Your responses go directly to Dr. Mercer before your appointment.

**CTA:** Book a New Patient Exam (→ /book/)

---

### Thank You (`/thank-you/`)

**Heading:** You're all set.
**Body (booking):** Your appointment is confirmed. Check your email for a confirmation with the date, time, and any pre-visit details. If you need to reschedule, use the link in that email or call us at (616) 555-0192.
**Body (contact form):** We will get back to you within one business day. If you need something sooner, call (616) 555-0192.
**Soft CTA:** While you are here, take a look at our Packages & Memberships (→ /packages/) — if you are planning more than one visit, packages reduce your per-visit cost.

---

## 8. Blog Articles

### Article 1: Five Workstation Habits That Contribute to Neck Tension
**URL:** `/blog/workstation-habits-neck-tension/`
**Tag:** Desk Workers · **Read time:** 3 min · **Date:** April 2026

**5 habits covered:**
1. Monitor position too low — eyes should land at the top third of the screen
2. Phone held in the neck crook — use a headset or speakerphone
3. No movement breaks — set a reminder every 30–45 min to stand and change position
4. Chair height mismatched — feet flat, knees roughly level with hips, not higher
5. Sleeping on your stomach — increases cervical rotation for hours, contributes to morning tension

**Article footer CTA:** Book a Posture & Mobility Assessment

---

### Article 2: What Actually Happens at Your First Chiropractic Visit
**URL:** `/blog/first-chiropractic-visit/`
**Tag:** New Patients · **Read time:** 4 min · **Date:** April 2026

**Sections:**
1. Before you walk in: intake form completed during booking, reviewed by Dr. Mercer
2. The intake conversation: 10–15 min, your health history, what brings you in
3. The physical assessment: posture, movement, orthopedic testing, hands-on evaluation
4. The adjustment — maybe: may or may not happen first visit depending on what's found
5. What you leave with: clear explanation of findings and recommendations
6. What to wear / bring: comfortable clothes, imaging optional

**Article footer CTA:** Book a New Patient Exam

---

### Article 3: When Recurring Tension Becomes Something Worth Getting Checked
**URL:** `/blog/when-tension-needs-attention/`
**Tag:** Wellness Tips · **Read time:** 5 min · **Date:** April 2026

**5 signals:**
1. Present for more than 4–6 weeks without clear improvement trend
2. Always returns to the same specific location — suggests mechanical pattern
3. Starting to affect what you do — modifying activities counts as meaningful impact
4. Management working less well — needing more ibuprofen/stretching for same relief
5. Spreading or changing character — from localized to broader, or dull to sharper

**Also covers:** What a first chiropractic visit actually answers, honest evaluation framing

**Article footer CTA:** Book a New Patient Exam

---

### Article 4: Simple Recovery Habits for Active Adults
**URL:** `/blog/recovery-habits-active-adults/`
**Tag:** Active Adults · **Read time:** 4 min · **Date:** April 2026

**Habits covered:**
1. Prioritize sleep above everything — 7–9 hours, soft tissue repair happens during sleep
2. Address tightness before it becomes restriction — 10–15 min post-session mobility work
3. Manage training load transitions carefully — 10% per week guideline for volume/intensity increases
4. Use soft tissue work regularly, not reactively — once/month maintenance vs. emergency response
5. Eat and hydrate to support recovery — post-session protein + carbs within 2 hours, pale yellow urine benchmark

**Article footer CTA:** Book a Sports Recovery Visit

---

## 9. Testimonials

These four testimonials appear on the homepage and may be used on other pages.

> **Sarah K.** — "I had been dealing with the same neck and shoulder tension for two years. After four visits I finally felt like something was actually changing."

> **Marcus T.** — "I was nervous about my first chiropractic appointment. Dr. Mercer explained every step before she did it and made sure I was comfortable the whole time."

> **Priya R.** — "Booking online was simple, the intake form was easy, and the appointment started on time. For a first visit, I wasn't expecting it to feel that organized."

> **James L.** — "I liked that she told me what she found, what she thought would help, and what to watch for — not just 'come back three times a week.'"

---

## 10. Technical Stack & Configuration

### Hosting & Deployment

| Setting | Value |
|---|---|
| Platform | Netlify (static hosting, no build step) |
| Build command | (none — pure HTML/CSS/JS) |
| Publish directory | `antigravity-site/` |
| Node version | N/A |
| Branch | main |

### Booking System

| Setting | Value |
|---|---|
| Platform | Acuity Scheduling |
| Embed type | Full scheduling page (not compact button) |
| Embed location | `/book/index.html` — replace placeholder div with Acuity `<script>` tag |
| Acuity background color | `#FAFAF8` |
| Acuity button color | `#4A7C6F` |
| Post-booking redirect | `/thank-you` |

**To get the embed code:**
1. Log in to Acuity → Integrations → Client-facing scheduling page
2. Select "Embed a scheduling page"
3. Copy the `<script>` tag
4. Replace the placeholder `<div>` in `/book/index.html`

### Contact Form

| Setting | Value |
|---|---|
| Platform | Netlify Forms |
| Form attributes | `name="contact"`, `data-netlify="true"`, `netlify-honeypot="bot-field"` |
| Submit redirect | `/thank-you` |
| Notifications | Configure in Netlify dashboard → Forms → contact → Notifications → hello@lakeviewspinewellness.com |

### Domain & DNS

- Domain: `lakeviewspinewellness.com`
- DNS: Point to Netlify via A record or CNAME (Netlify provides these)
- HTTPS: Netlify provisions SSL automatically via Let's Encrypt

### Security Headers (in `netlify.toml`)

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Cache Headers
- HTML: no-cache (always fresh)
- CSS/JS: 1 year cache (cache-busting via filename versioning when updated)
- Images: 1 year cache

### SEO

- **Sitemap:** `/sitemap.xml` — update domain when confirmed, submit to Google Search Console
- **Robots:** `/robots.txt` — allows all, points to sitemap
- **JSON-LD schema:** Local Business schema on `/` and `/contact/`
- **Canonical URLs:** All pages include `<link rel="canonical">`
- **Meta descriptions:** Unique on all pages
- **noindex:** Only `/privacy/` has `noindex`

### Local Business JSON-LD Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Lakeview Spine & Wellness",
  "image": "https://lakeviewspinewellness.com/images/clinic-exterior.webp",
  "url": "https://lakeviewspinewellness.com",
  "telephone": "+16165550192",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Lakeview Drive SE",
    "addressLocality": "Grand Rapids",
    "addressRegion": "MI",
    "postalCode": "49506",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Thursday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "10:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "16:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
  ],
  "priceRange": "$$"
}
```

---

## 11. Pending Swap-Ins

These items are placeholders in the current HTML files and need to be updated before launch:

| Item | File | What to do |
|---|---|---|
| Acuity embed code | `/book/index.html` | Replace placeholder div with Acuity `<script>` embed tag. Set background #FAFAF8, button #4A7C6F, redirect /thank-you |
| Acuity package URLs | `/packages/index.html` | Replace `/book/` hrefs on all 4 "Get [Package]" buttons with Acuity direct package purchase URLs |
| Google Maps iframe | `/contact/index.html` | Replace placeholder div with Google Maps embed iframe for 123 Lakeview Drive SE, Grand Rapids |
| Real phone number | All HTML files | Replace `(616) 555-0192` / `6165550192` with actual phone number |
| Real address | All HTML files | Replace `123 Lakeview Drive SE` with actual address |
| Real email | All HTML files | Verify `hello@lakeviewspinewellness.com` is correct and active |
| Images | `/images/` folder | Add all WebP images per the art direction in `/images/README.md` |
| Sitemap domain | `/sitemap.xml` | Confirm `lakeviewspinewellness.com` is the correct domain |
| Robots.txt sitemap URL | `/robots.txt` | Update with final domain |
| Google Search Console | — | Submit sitemap after DNS is live |
| Netlify Forms notification | Netlify dashboard | Set up email notification to hello@lakeviewspinewellness.com |

---

## 12. Pre-Launch Checklist

### Content
- [ ] All placeholder contact details replaced (phone, address, email)
- [ ] Acuity embed live on `/book/`
- [ ] Acuity package purchase URLs on `/packages/`
- [ ] Google Maps embed on `/contact/`
- [ ] All images added to `/images/` (WebP, correct filenames)
- [ ] Blog article images added
- [ ] Dr. Mercer headshot added

### Technical
- [ ] Netlify site created, publish directory set to `antigravity-site/`
- [ ] Custom domain connected and HTTPS active
- [ ] Netlify Forms notification configured (hello@lakeviewspinewellness.com)
- [ ] Contact form tested end-to-end (submit → thank-you redirect → email received)
- [ ] Booking tested (Acuity flow → thank-you redirect)
- [ ] 404 page confirmed working
- [ ] Sitemap submitted to Google Search Console

### QA
- [ ] All navigation links work across all pages
- [ ] Mobile menu opens and closes correctly
- [ ] Mobile menu body-scroll lock works
- [ ] FAQ accordions open/close correctly (single-open mode)
- [ ] No broken internal links
- [ ] All pages tested at 375px, 768px, 1280px
- [ ] Page load speed tested (target: < 2s on mobile)
- [ ] All images have alt text
- [ ] Meta descriptions present on all pages

### SEO
- [ ] Google Search Console connected
- [ ] Sitemap submitted
- [ ] Google Business Profile created / verified at clinic address
- [ ] NAP (Name, Address, Phone) consistent across site and Google Business

---

*Last updated: April 2026. This document is the single source of truth for the Lakeview Spine & Wellness website project.*
