# Button Component Spec

## Overview

Buttons trigger actions. They are not links. If it navigates somewhere, use an anchor element.

---

## Variants

| Variant     | Use case                                          |
|-------------|---------------------------------------------------|
| `primary`   | Main call to action on a given view. One per section. |
| `secondary` | Supporting actions alongside a primary button.    |
| `ghost`     | Low-priority actions in dense layouts or toolbars. |
| `danger`    | Destructive actions (delete, remove, disconnect). |

---

## Sizes

| Size  | Padding (inline / block) | Font size        |
|-------|--------------------------|------------------|
| `sm`  | `--space-3` / `--space-1-5` | `--text-sm`  |
| `md`  | `--space-4` / `--space-2`   | `--text-sm`  |
| `lg`  | `--space-5` / `--space-2-5` | `--text-base`|

---

## Token Mappings

### Primary

| Property           | Token                              |
|--------------------|------------------------------------|
| background         | `--color-action-primary`           |
| background (hover) | `--color-action-primary-hover`     |
| background (active)| `--color-action-primary-active`    |
| text               | `--color-text-inverse`             |
| border             | none                               |
| border-radius      | `--radius-md`                      |
| font-family        | `--font-body`                      |
| font-weight        | `--font-weight-semibold`           |

### Secondary

| Property           | Token                              |
|--------------------|------------------------------------|
| background         | transparent                        |
| background (hover) | `--color-surface-overlay`          |
| text               | `--color-text-primary`             |
| border             | 1px solid `--color-border-strong`  |
| border-radius      | `--radius-md`                      |

### Ghost

| Property           | Token                              |
|--------------------|------------------------------------|
| background         | transparent                        |
| background (hover) | `--color-surface-overlay`          |
| text               | `--color-text-secondary`           |
| text (hover)       | `--color-text-primary`             |
| border             | none                               |

### Danger

| Property           | Token                              |
|--------------------|------------------------------------|
| background         | `--color-action-destructive`       |
| background (hover) | `--color-action-destructive-hover` |
| text               | `#ffffff`                          |
| border             | none                               |

---

## States

| State      | Behavior                                                                 |
|------------|--------------------------------------------------------------------------|
| `hover`    | Background shifts to hover token. Transition: `--duration-fast` ease-out. |
| `focus`    | Outline: `--focus-ring-width` solid `--focus-ring-color`, offset `--focus-ring-offset`. |
| `active`   | Background shifts to active token. Slight scale-down (`scale(0.98)`) optional. |
| `disabled` | Opacity: `0.45`. Cursor: `not-allowed`. No pointer events.               |
| `loading`  | Show a spinner icon (Tabler `loader-2`, animated). Text hidden or replaced with loading label. |

---

## Icon Usage

- Icons are optional and must use the outline style from Tabler Icons.
- Leading icon: icon precedes label text, gap `--space-2`.
- Trailing icon: icon follows label text, gap `--space-2`.
- Icon-only buttons must include a visible tooltip or `aria-label`.
- Icon size matches the button size: `sm` uses `--icon-sm`, `md` and `lg` use `--icon-base`.

---

## Accessibility

- Use `<button>` for actions; use `<a>` for navigation.
- `aria-disabled="true"` on disabled buttons that still need to be focusable.
- Loading state: set `aria-busy="true"` and `aria-label` describing progress.
