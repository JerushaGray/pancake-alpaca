# Typography

Typography tokens live in `tokens/typography.json` and are exposed as CSS custom properties in `themes/css-variables.css`.

---

## Fonts

| Role     | Family             | Token            | Notes                                    |
|----------|--------------------|------------------|------------------------------------------|
| Heading  | Plus Jakarta Sans  | `--font-heading` | All headings, brand wordmark             |
| Body     | Inter              | `--font-body`    | UI elements, paragraphs, labels, inputs  |
| Mono     | JetBrains Mono     | `--font-mono`    | Code snippets, API keys, technical values|

Both fonts are available from Google Fonts. Load them via the `<link>` tag in the `<head>` before any stylesheets. The theme CSS references them by name; if they fail to load, system-ui and monospace are the fallbacks.

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## Type Scale

| Token         | Value      | Use                                          |
|---------------|------------|----------------------------------------------|
| `--text-xs`   | 0.75rem    | Badge labels, column headers, helper text    |
| `--text-sm`   | 0.875rem   | Body text, table cells, input values, labels |
| `--text-base` | 1rem       | Default paragraph text                       |
| `--text-lg`   | 1.125rem   | Card titles, sidebar brand label             |
| `--text-xl`   | 1.25rem    | Section headings (h3)                        |
| `--text-2xl`  | 1.5rem     | Page headings (h2)                           |
| `--text-3xl`  | 1.875rem   | Display headings (h1, landing)               |
| `--text-4xl`  | 2.25rem    | Large metric values                          |

The default body size is `--text-sm` in dense UI contexts. Use `--text-base` for readable long-form content.

---

## Font Weights

| Token                      | Value | Use                                          |
|----------------------------|-------|----------------------------------------------|
| `--font-weight-regular`    | 400   | Body copy, secondary text                    |
| `--font-weight-medium`     | 500   | Nav labels, input text, default interactive  |
| `--font-weight-semibold`   | 600   | Buttons, active nav, table headers, badges   |
| `--font-weight-bold`       | 700   | Page titles, metric values, brand wordmark   |

---

## Line Height

| Token              | Value | Use                                      |
|--------------------|-------|------------------------------------------|
| `--leading-tight`  | 1.25  | Large headings, metric values            |
| `--leading-snug`   | 1.375 | Subheadings, card titles                 |
| `--leading-normal` | 1.5   | Body text, table cells                   |
| `--leading-relaxed`| 1.625 | Documentation, longer prose              |

---

## Letter Spacing

| Token               | Value    | Use                                         |
|---------------------|----------|---------------------------------------------|
| `--tracking-tight`  | -0.01em  | Large headings, metric values               |
| `--tracking-normal` | 0em      | Body text                                   |
| `--tracking-wide`   | 0.025em  | Buttons, nav labels                         |
| `--tracking-wider`  | 0.05em   | Badge text, column headers                  |
| `--tracking-widest` | 0.1em    | Section labels, uppercase micro-labels      |

---

## Hierarchy in Practice

### Page Heading (h1)
- Font: `--font-heading`
- Size: `--text-2xl` to `--text-3xl`
- Weight: `--font-weight-bold`
- Leading: `--leading-tight`
- Tracking: `--tracking-tight`
- Color: `--color-text-primary`

### Section Heading (h2)
- Font: `--font-heading`
- Size: `--text-lg` to `--text-xl`
- Weight: `--font-weight-semibold`
- Color: `--color-text-primary`

### Body / UI Text
- Font: `--font-body`
- Size: `--text-sm`
- Weight: `--font-weight-regular` or `--font-weight-medium`
- Color: `--color-text-primary` or `--color-text-secondary`

### Labels and Captions
- Font: `--font-body`
- Size: `--text-xs`
- Weight: `--font-weight-semibold`
- Tracking: `--tracking-wider` or `--tracking-widest`
- Text-transform: uppercase for column headers and section labels
- Color: `--color-text-tertiary`

### Metric Values
- Font: `--font-heading`
- Size: `--text-4xl`
- Weight: `--font-weight-bold`
- Tracking: `--tracking-tight`
- Color: `--color-text-primary`

---

## Pairing Rules

- Headings are always Plus Jakarta Sans. Body is always Inter.
- Do not mix fonts within a single UI element.
- Mono is for technical strings only (API keys, code, numeric IDs). Do not use it for decorative purposes.
- Avoid using more than three size steps in a single card or section. Hierarchy should be clear, not loud.
