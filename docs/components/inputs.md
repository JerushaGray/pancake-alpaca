# Input Component Spec

## Overview

Inputs capture user-entered data. Keep labels visible, keep helper text honest, and keep error messages useful.

---

## Variants

| Variant    | Use case                                           |
|------------|----------------------------------------------------|
| `text`     | General single-line text input.                    |
| `password` | Masked entry with show/hide toggle.                |
| `search`   | Filtered search with leading search icon.          |
| `textarea` | Multi-line text entry.                             |
| `select`   | Single-choice dropdown.                            |

---

## Anatomy

1. Label (always visible, above the field)
2. Input field
3. Leading icon (optional)
4. Trailing icon or action (optional, e.g., clear button, show/hide)
5. Helper text (below field, describes expected input)
6. Error message (replaces helper text when validation fails)

---

## Token Mappings

| Property              | Token                          |
|-----------------------|--------------------------------|
| background            | `--color-surface-card`         |
| border                | 1px solid `--color-border-default` |
| border (hover)        | 1px solid `--color-border-strong` |
| border (focus)        | 1px solid `--color-action-primary` |
| border (error)        | 1px solid `--color-status-error` |
| text                  | `--color-text-primary`         |
| placeholder           | `--color-text-tertiary`        |
| label text            | `--color-text-secondary`       |
| helper text           | `--color-text-tertiary`        |
| error text            | `--color-status-error`         |
| border-radius         | `--radius-md`                  |
| padding (inline)      | `--space-3`                    |
| padding (block)       | `--space-2`                    |
| font-family           | `--font-body`                  |
| font-size             | `--text-sm`                    |
| leading icon color    | `--color-text-tertiary`        |
| icon size             | `--icon-sm`                    |

---

## States

| State      | Border                             | Background               | Notes                                   |
|------------|------------------------------------|--------------------------|-----------------------------------------|
| `default`  | `--color-border-default`           | `--color-surface-card`   |                                         |
| `hover`    | `--color-border-strong`            | `--color-surface-card`   |                                         |
| `focus`    | `--color-action-primary`           | `--color-surface-card`   | Focus ring on outer wrapper.            |
| `error`    | `--color-status-error`             | `--color-surface-card`   | Error message appears below.            |
| `disabled` | `--color-border-subtle`            | `--color-surface-base`   | Opacity `0.5`. Cursor `not-allowed`.    |
| `readonly` | `--color-border-subtle`            | `--color-surface-base`   | Cursor `default`. No focus ring.        |

---

## Focus Behavior

- Focus ring applies to the input element, not just the border.
- Ring: `--focus-ring-width` solid `--focus-ring-color`, offset `--focus-ring-offset`.
- Transition: `--duration-fast` `--easing-default`.

---

## Icon Usage

- Use Tabler Icons, outline style.
- Leading icons are decorative. Mark with `aria-hidden="true"`.
- Trailing icons that perform an action (clear, show password) require `aria-label`.
- Icon size: `--icon-sm` for standard inputs, `--icon-base` for large inputs.

---

## Validation

- Validate on blur, not on every keystroke.
- Show one error at a time, the most critical one.
- Error messages describe what is wrong and how to fix it.

---

## Accessibility

- Every input has a visible `<label>` element linked via `for`/`id`.
- `aria-describedby` links helper or error text to the input.
- `aria-invalid="true"` on inputs in error state.
- `aria-required="true"` on required fields.
