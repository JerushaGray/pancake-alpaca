# Color Usage

All color values live in `tokens/color.json` and are exposed as CSS custom properties in `themes/css-variables.css`. Do not hardcode hex values in components.

---

## Categories

### Brand Colors

| Token                      | Value     | Use                                              |
|----------------------------|-----------|--------------------------------------------------|
| `--color-brand-primary`    | `#9333EA` | Brand identity elements, logos, accent highlights|
| `--color-brand-secondary`  | `#7C3AED` | Supporting brand elements, gradient pairs        |

Brand colors are for identity, not for interactive elements. Do not use the brand purple as a button background.

---

### Action Colors

| Token                              | Value     | Use                                     |
|------------------------------------|-----------|-----------------------------------------|
| `--color-action-primary`           | `#84CC16` | Primary buttons, active states, key CTAs|
| `--color-action-primary-hover`     | `#65A30D` | Primary button hover                    |
| `--color-action-primary-active`    | `#4D7C0F` | Primary button active (pressed)         |
| `--color-action-destructive`       | `#EF4444` | Delete buttons, destructive confirmations|
| `--color-action-destructive-hover` | `#DC2626` | Destructive button hover                |

Lime green (`#84CC16`) is the primary action color. Use it for the main call-to-action per section. Do not stack multiple lime-green buttons in a single view.

---

### Interaction Colors

| Token                              | Value     | Use                                          |
|------------------------------------|-----------|----------------------------------------------|
| `--color-interaction-accent`       | `#35C7DD` | Links, secondary interactive highlights      |
| `--color-interaction-accent-hover` | `#22B3CA` | Accent hover                                 |
| `--color-interaction-focus-ring`   | `#84CC16` | Focus outline on all interactive elements    |

The focus ring color matches the action primary. This provides consistent keyboard navigation affordance across the product.

---

### Surface Colors

| Token                      | Value     | Use                                               |
|----------------------------|-----------|---------------------------------------------------|
| `--color-surface-base`     | `#0F0F14` | Page background                                   |
| `--color-surface-card`     | `#111827` | Cards, panels, table backgrounds                  |
| `--color-surface-overlay`  | `#1A1F2E` | Hover states, active row highlights, dropdowns    |
| `--color-surface-sidebar`  | `#0A0A0F` | Sidebar background (slightly darker than base)    |

The surface hierarchy goes: sidebar (darkest) > base > card > overlay (lightest). Depth is communicated through this scale, not through shadows alone.

---

### Border Colors

| Token                    | Value     | Use                                          |
|--------------------------|-----------|----------------------------------------------|
| `--color-border-subtle`  | `#111827` | Internal row dividers, lightest separators   |
| `--color-border-default` | `#1F2937` | Card borders, input borders, panel edges     |
| `--color-border-strong`  | `#374151` | Button borders, active dividers              |

Use `--color-border-default` for most structural borders. Use `--color-border-strong` where a border needs to compete with adjacent elements.

---

### Text Colors

| Token                    | Value     | Use                                              |
|--------------------------|-----------|--------------------------------------------------|
| `--color-text-primary`   | `#E5E7EB` | Main content, headings, active labels            |
| `--color-text-secondary` | `#B0B7C3` | Supporting text, inactive nav labels, captions   |
| `--color-text-tertiary`  | `#9CA3AF` | Placeholders, helper text, column headers        |
| `--color-text-inverse`   | `#0F0F14` | Text on light backgrounds (e.g., primary buttons)|
| `--color-text-action`    | `#84CC16` | Active nav items, text-only action links         |
| `--color-text-accent`    | `#35C7DD` | Hyperlinks, informational highlights             |
| `--color-text-brand`     | `#9333EA` | Brand name callouts only                         |

Do not use `--color-text-tertiary` for any text that conveys critical information. It does not pass WCAG AA contrast on `--color-surface-card`.

---

### Status Colors

| Token                    | Value     | Use                                         |
|--------------------------|-----------|---------------------------------------------|
| `--color-status-success` | `#22C55E` | Success indicators, positive metrics        |
| `--color-status-warning` | `#F59E0B` | Warning states, at-risk metrics             |
| `--color-status-error`   | `#EF4444` | Error states, failed operations             |
| `--color-status-info`    | `#35C7DD` | Informational states, neutral-positive      |

Status colors are for semantic meaning only. Do not use `--color-status-success` as a decorative green.

---

### Badge Colors

Badge colors are pre-paired backgrounds and text colors for use with the Badge component. Always use the paired values together.

| Variant   | Background Token               | Text Token                     |
|-----------|--------------------------------|--------------------------------|
| success   | `--color-badge-success-bg`     | `--color-badge-success-text`   |
| warning   | `--color-badge-warning-bg`     | `--color-badge-warning-text`   |
| error     | `--color-badge-error-bg`       | `--color-badge-error-text`     |
| info      | `--color-badge-info-bg`        | `--color-badge-info-text`      |
| neutral   | `--color-badge-neutral-bg`     | `--color-badge-neutral-text`   |

---

## Rules

1. Always reference a token. Never write a hex value directly in component styles.
2. Text on dark surfaces: use `--color-text-primary` or `--color-text-secondary`. Check contrast for `--color-text-tertiary` before using it for content.
3. One primary action per section. Lime green draws the eye. Use it where you mean it.
4. Status colors carry semantic meaning. Do not repurpose them for decoration.
