# Badge Component Spec

## Overview

Badges communicate status or category at a glance. They are read-only labels, not interactive controls.

---

## Variants

| Variant     | Use case                                      |
|-------------|-----------------------------------------------|
| `success`   | Active, completed, healthy.                   |
| `warning`   | Needs attention, pending, at-risk.            |
| `error`     | Failed, blocked, critical.                    |
| `info`      | Informational, neutral-positive, in-progress. |
| `neutral`   | Draft, inactive, archived.                    |

---

## Sizes

| Size | Font size    | Padding                      |
|------|--------------|------------------------------|
| `sm` | `--text-xs`  | `--space-1` / `--space-0-5`  |
| `md` | `--text-xs`  | `--space-2` / `--space-1`    |

Default size is `md`.

---

## Token Mappings

| Variant   | Background                      | Text                          |
|-----------|---------------------------------|-------------------------------|
| `success` | `--color-badge-success-bg`      | `--color-badge-success-text`  |
| `warning` | `--color-badge-warning-bg`      | `--color-badge-warning-text`  |
| `error`   | `--color-badge-error-bg`        | `--color-badge-error-text`    |
| `info`    | `--color-badge-info-bg`         | `--color-badge-info-text`     |
| `neutral` | `--color-badge-neutral-bg`      | `--color-badge-neutral-text`  |

### Common Properties

| Property       | Token                      |
|----------------|----------------------------|
| font-family    | `--font-body`              |
| font-size      | `--text-xs`                |
| font-weight    | `--font-weight-semibold`   |
| letter-spacing | `--tracking-wider`         |
| text-transform | uppercase                  |
| border-radius  | `--radius-full`            |
| display        | inline-flex                |
| align-items    | center                     |
| gap (with icon)| `--space-1`                |

---

## States

Badges are display-only. They do not have hover, focus, or active states.

If a badge is used as a filter chip (clickable), it should be implemented as a button with the badge visual style and standard focus ring behavior from the interaction tokens.

---

## Icon Usage

- Optional leading status icon from Tabler Icons, outline style.
- Icon size: `--icon-xs` inside `sm` badge, `--icon-sm` inside `md` badge.
- Mark decorative icons `aria-hidden="true"`.
- Semantic icons (where the icon carries meaning without accompanying text) require `title` or `aria-label`.

| Variant   | Suggested Tabler Icon  |
|-----------|------------------------|
| `success` | `circle-check`         |
| `warning` | `alert-triangle`       |
| `error`   | `circle-x`             |
| `info`    | `info-circle`          |
| `neutral` | `minus-circle`         |

---

## Content Rules

- Badge text should be one to three words.
- Avoid sentence case; use title case for status labels.
- Do not put actionable phrases in a badge. Badges describe state; they do not instruct.

---

## Accessibility

- Purely visual badges: `aria-label` on the parent cell or containing element if needed for screen reader context.
- If badge communicates critical status, use `role="status"` or wrap in a live region if it updates dynamically.
