# Voice and Tone

The voice rules for GetFunnelCaked are codified in `tokens/voice.json`. This document explains the reasoning.

---

## The Short Version

Write like a competent colleague who has seen too many broken systems and has stopped pretending that is normal. Be useful. Be honest. Be occasionally dry. Never punch at the person reading.

---

## Principles

### Dry Humor

Wit is welcome. Forced jokes are not.

A good line lands because it is accurate, not because it is trying to land. If you are working hard to be clever, cut the joke and write the fact.

Dry humor works best in empty states, loading messages, and error recovery. It does not belong in confirmation dialogs or critical error messages where the operator needs to act.

### Systems-First

Operators are managing workflows, not browsing a storefront. They need to understand how the system works before they can trust it.

Lead with function. Explain what the system is doing, then explain why it matters. Avoid leading with outcomes ("Save hours every week") before establishing the mechanism ("Sequences run automatically once a contact enters the trigger step").

### Empathy Toward Operators

Running a business involves real stakes. When something breaks, it is not just a UX inconvenience. Acknowledge that without being theatrical about it.

Empathy here means: be accurate, be prompt, tell the operator what happened, and tell them what to do about it. That is more useful than sympathy.

### Sarcasm Rules

Sarcasm is allowed when the target is broken industry logic, bad defaults, or absurd complexity. It is not allowed when the target is the user or their decisions.

Fine: "Most email tools default to sending at 9am on Tuesday. We let you decide."
Not fine: "Looks like you forgot to set a trigger. That happens."

If the sentence puts any blame on the reader, rewrite it.

### No Em Dashes

Do not use em dashes (the `—` character, U+2014) or double hyphens (`--`) used as em dash substitutes. Use a comma, a period, or restructure the sentence. This is not a style preference. It is a rule.

---

## Tone by Context

| Context           | Tone                                                           |
|-------------------|----------------------------------------------------------------|
| Empty states      | Direct, practical, optionally dry. Say what is missing and how to fix it. |
| Error messages    | State what happened. State what to do. No blame, no drama.     |
| Success messages  | Confirm the action. Keep it short. Resist exclamation points.  |
| Onboarding        | Clear, thorough, assumes the user is smart but new.            |
| Tooltips          | One sentence. Fact first.                                      |
| Loading states    | Show progress or say nothing. No "Almost there!"              |
| Destructive confirmations | State exactly what will be deleted or affected. Confirm to continue. |

---

## Word List

### Use

| Word / Phrase       | Notes                                              |
|---------------------|----------------------------------------------------|
| you, your           | Address the operator directly                      |
| sequence, funnel    | Use consistently; pick one per context and stick to it |
| contact             | Not "lead" or "subscriber" unless context demands  |
| step                | Individual node in a sequence                      |
| trigger             | The event that starts a sequence                   |
| conversion          | When a contact completes the desired action        |
| connected           | Integration is live                                |
| disconnected        | Integration is inactive or failed                  |

### Avoid

| Word / Phrase        | Reason                                            |
|----------------------|---------------------------------------------------|
| seamlessly           | Empty modifier. If something is seamless, show it. |
| powerful             | Marketing filler. Describe the capability instead. |
| easy                 | Condescending when things are not easy, wrong when they are |
| just                 | Minimizes real complexity ("just connect your CRM")|
| revolutionary        | No.                                               |
| unlock               | Overused. Say what the feature does.              |
| game-changer         | No.                                               |
| exclamation points in errors | Inappropriate tone for failure states.   |
| em dash              | Use a comma, period, or restructure               |

---

## Examples

### Empty State

Bad: "No funnels yet! Get started by creating your first one!"
Good: "No funnels here. Add one to get the sequence going."

### Save Success

Bad: "Awesome! Your changes were saved!"
Good: "Changes saved."

### Delete Confirmation

Bad: "Are you sure? This cannot be undone!"
Good: "This will permanently delete the funnel and its steps. Confirm to continue."

### Integration Error

Bad: "Oops! Something went wrong connecting to your CRM."
Good: "Connection failed. Check your API credentials and try again."

### Loading State

Bad: "Almost there! We're getting things ready..."
Good: (Show a progress indicator with no copy, or "Loading funnels...")

### Onboarding Step

Bad: "Setting up sequences is super easy and will save you tons of time!"
Good: "A sequence runs automatically when a contact matches the trigger condition. Set up the trigger first, then add steps."
