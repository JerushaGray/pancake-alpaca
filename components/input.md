# Input

Inputs collect structured data. Keep them minimal: label above, error below, no decorative styling. Focus state must always be visible.

## Variants

### Text Input
Standard single-line text entry.

```
background:   color.surface.raised (#1e293b)
color:        color.text.primary (#f1f5f9)
border:       1px solid color.surface.border (#334155)
border-radius: radius.md (6px)
padding:      spacing.2 spacing.3 (8px 12px)
font-size:    typography.font.size.base (14px)
font-family:  typography.font.family.base
width:        100%
```

### Select
Dropdown selection. Same visual as text input, with a chevron icon.

```
appearance: none
background: color.surface.raised with chevron icon at right
padding-right: spacing.8 (32px) to clear the icon
```

### Textarea
Multi-line text entry. No resize handle on x-axis.

```
resize:     vertical
min-height: spacing.12 (48px)
```

## States

### Default
Base styles above. Border is `color.surface.border`.

### Focus
```
outline:        2px solid color.interaction.accent (#22d3ee)
outline-offset: 2px
border-color:   color.interaction.accent (#22d3ee)
```
Focus state must be visible for keyboard navigation. Do not suppress it.

### Error
```
border-color: color.status.error (#ef4444)
color:        color.text.primary (unchanged)
```
Error message below input:
```
color:     color.status.error (#ef4444)
font-size: typography.font.size.sm (13px)
margin-top: spacing.1 (4px)
```

### Disabled
```
opacity:    0.5
cursor:     not-allowed
pointer-events: none
background: color.surface.base (#0f172a)
```

## Token References

| Property | Token | Value |
|----------|-------|-------|
| Background | `color.surface.raised` | #1e293b |
| Text color | `color.text.primary` | #f1f5f9 |
| Border | `color.surface.border` | #334155 |
| Focus ring | `color.interaction.accent` | #22d3ee |
| Error border | `color.status.error` | #ef4444 |
| Error text | `color.status.error` | #ef4444 |
| Disabled background | `color.surface.base` | #0f172a |
| Border radius | `radius.md` | 6px |
| Padding vertical | `spacing.2` | 8px |
| Padding horizontal | `spacing.3` | 12px |
| Font size | `typography.font.size.base` | 14px |
| Label font size | `typography.font.size.sm` | 13px |
| Label color | `color.text.secondary` | #94a3b8 |

## Anti-Patterns

- **Do not suppress focus outlines.** Focus visibility is required for accessibility. Never use `outline: none` without a replacement focus indicator using `color.interaction.accent`.
- **Do not hardcode colors.** All values must reference tokens via CSS custom properties.
- **Do not use placeholder text as labels.** Placeholder disappears on input. Always include a visible label element above the field.
- **Do not style error states with only color.** Include an error message text. Color alone is not sufficient for accessibility.
- **Do not use decorative borders or shadows on default state.** The border should be `color.surface.border` at default. Extra decoration adds noise.
