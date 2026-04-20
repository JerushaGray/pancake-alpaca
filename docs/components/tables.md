# Table Component Spec

## Overview

Tables display structured data. Columns should be scannable. Rows should be selectable if bulk actions are possible. Dense layouts are acceptable here.

---

## Variants

| Variant     | Use case                                                      |
|-------------|---------------------------------------------------------------|
| `default`   | Standard data table with border separators between rows.      |
| `striped`   | Alternating row backgrounds for wide tables with many columns.|
| `compact`   | Reduced row height for high-density dashboards.               |

---

## Anatomy

1. Table container (with optional scroll wrapper)
2. `<thead>` with column headers
3. `<tbody>` with data rows
4. Optional: empty state (no rows)
5. Optional: pagination row below the table
6. Optional: toolbar above (search, filter, export)

---

## Token Mappings

### Container

| Property       | Token                         |
|----------------|-------------------------------|
| background     | `--color-surface-card`        |
| border         | 1px solid `--color-border-default` |
| border-radius  | `--radius-lg`                 |
| shadow         | `--shadow-card`               |

### Header Row

| Property       | Token                         |
|----------------|-------------------------------|
| background     | `--color-surface-base`        |
| text           | `--color-text-tertiary`       |
| font-size      | `--text-xs`                   |
| font-weight    | `--font-weight-semibold`      |
| letter-spacing | `--tracking-wider`            |
| text-transform | uppercase                     |
| padding        | `--space-3` `--space-4`       |
| border-bottom  | 1px solid `--color-border-default` |

### Data Row

| Property              | Token                                    |
|-----------------------|------------------------------------------|
| background (default)  | transparent                              |
| background (hover)    | `--color-surface-overlay`                |
| background (selected) | `rgba(132,204,22,0.06)`                  |
| text                  | `--color-text-primary`                   |
| font-size             | `--text-sm`                              |
| padding               | `--space-3` `--space-4`                  |
| border-bottom         | 1px solid `--color-border-subtle`        |
| transition            | `--duration-fast` `--easing-default`     |

### Striped Variant (even rows)

| Property   | Token                          |
|------------|--------------------------------|
| background | `--color-surface-base`         |

### Compact Variant

| Property | Token               |
|----------|---------------------|
| padding  | `--space-2` `--space-4` |

---

## States

| State      | Background                         | Notes                                  |
|------------|------------------------------------|----------------------------------------|
| `hover`    | `--color-surface-overlay`          | Transition on background.              |
| `selected` | `rgba(132,204,22,0.06)`            | Checkbox checked. Row border-left accent optional. |
| `loading`  | Skeleton rows                      | Animate with subtle pulse effect.      |
| `empty`    | Full-width message centered        | Use empty state pattern.               |

---

## Icon Usage

- Status badges in cells may include a small status icon (Tabler, outline).
- Sort indicators use `chevron-up` / `chevron-down` / `selector` from Tabler.
- Row action menus use `dots-vertical` or explicit action icons (pencil, trash).
- Icons in table cells: `--icon-sm`.

---

## Column Alignment

- Text columns: left-aligned.
- Numeric columns: right-aligned.
- Status/badge columns: center-aligned.
- Action columns: right-aligned, no header label.

---

## Accessibility

- Use `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, `<td>` semantic elements.
- Sortable headers: `aria-sort="ascending"` or `aria-sort="descending"`.
- Row selection: checkbox with `aria-label="Select row for [item name]"`.
- Empty state: conveyed via `role="status"` or live region.
