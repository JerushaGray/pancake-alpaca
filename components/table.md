# Table

Tables display structured, comparable data in rows and columns. Optimize for scanability: consistent column widths, left-aligned text, minimal decoration.

## Variants

### Default
Static read-only table. No sorting, no row actions.

```
width:            100%
border-collapse:  collapse
background:       color.surface.raised (#1e293b)
border-radius:    radius.lg (8px)
overflow:         hidden
```

Header row:
```
background:    color.surface.overlay (#334155)
color:         color.text.secondary (#94a3b8)
font-size:     typography.font.size.sm (13px)
font-weight:   typography.font.weight.semibold (600)
padding:       spacing.3 spacing.4 (12px 16px)
text-align:    left
```

Body rows:
```
color:         color.text.primary (#f1f5f9)
font-size:     typography.font.size.base (14px)
padding:       spacing.3 spacing.4 (12px 16px)
border-bottom: 1px solid color.surface.border (#334155)
```

Row hover:
```
background: color.surface.overlay (#334155)
transition: background 100ms ease
```

### Sortable
Sortable columns extend default. Clickable headers show a sort indicator.

Sort indicator states:
- Unsorted: icon `ti-arrows-sort`, color `color.text.muted` (#475569)
- Ascending: icon `ti-arrow-up`, color `color.interaction.accent` (#22d3ee)
- Descending: icon `ti-arrow-down`, color `color.interaction.accent` (#22d3ee)

Header cell (sortable):
```
cursor:      pointer
user-select: none
```
Header hover:
```
color: color.text.primary (#f1f5f9)
```

### With Row Actions
Extends default or sortable. Rightmost column contains action buttons.

Row action buttons use ghost variant (see `/components/button.md`):
- Edit: icon `ti-edit`, label "Edit"
- Delete: icon `ti-trash`, danger ghost variant

Action column:
```
text-align: right
white-space: nowrap
```

## Empty State Behavior

When a table has no rows, display a centered empty state inside the table body:

```
padding:    spacing.10 (40px) vertically
text-align: center
color:      color.text.muted (#475569)
font-size:  typography.font.size.base (14px)
```

Empty state structure:
1. Icon: `ti-inbox`, 32px, `color.text.muted`
2. Primary message: "No data found" (or context-specific)
3. Optional secondary message in `color.text.muted`, `typography.font.size.sm`

Do not show table headers when the table is in empty state.

## Token References

| Property | Token | Value |
|----------|-------|-------|
| Table background | `color.surface.raised` | #1e293b |
| Header background | `color.surface.overlay` | #334155 |
| Header text | `color.text.secondary` | #94a3b8 |
| Body text | `color.text.primary` | #f1f5f9 |
| Row border | `color.surface.border` | #334155 |
| Row hover | `color.surface.overlay` | #334155 |
| Sort active color | `color.interaction.accent` | #22d3ee |
| Sort muted color | `color.text.muted` | #475569 |
| Empty state text | `color.text.muted` | #475569 |
| Cell padding vertical | `spacing.3` | 12px |
| Cell padding horizontal | `spacing.4` | 16px |
| Border radius | `radius.lg` | 8px |
| Header font size | `typography.font.size.sm` | 13px |
| Body font size | `typography.font.size.base` | 14px |

## Anti-Patterns

- **Do not use zebra striping with custom colors.** Row hover provides sufficient differentiation. Custom alternating row colors add visual noise and require separate token justification.
- **Do not hardcode column widths in component styles.** Use `table-layout: auto` or define widths with spacing tokens where fixed sizing is required.
- **Do not mix sort state across columns.** Only one column is active for sorting at a time. Clear all other sort indicators when a new column is selected.
- **Do not skip the empty state.** An empty table body with no message is an unfinished UI. Always implement the empty state pattern.
- **Do not use decorative colors in rows.** Row background colors outside hover and selected states must be justified by status (use `color.status.*`) and documented.
