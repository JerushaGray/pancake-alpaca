# Badge

Badges communicate status or category in a compact inline format. They are read-only labels -- they do not trigger actions.

## Variants

All badge variants map directly to `color.status.*` tokens. Each variant uses the status color for text and a lower-opacity fill for background.

### Success
```
background: rgba(34, 197, 94, 0.15)   (color.status.success at 15% opacity)
color:      color.status.success (#22c55e)
```

### Warning
```
background: rgba(245, 158, 11, 0.15)  (color.status.warning at 15% opacity)
color:      color.status.warning (#f59e0b)
```

### Error
```
background: rgba(239, 68, 68, 0.15)   (color.status.error at 15% opacity)
color:      color.status.error (#ef4444)
```

### Info
```
background: rgba(34, 211, 238, 0.15)  (color.status.info at 15% opacity)
color:      color.status.info (#22d3ee)
```

### Neutral
```
background: rgba(148, 163, 184, 0.15) (color.text.secondary at 15% opacity)
color:      color.text.secondary (#94a3b8)
```

## Shared Badge Styles

```
display:       inline-flex
align-items:   center
gap:           spacing.1 (4px)
padding:       spacing.1 spacing.2 (4px 8px)
border-radius: radius.full (9999px)
font-size:     typography.font.size.xs (11px)
font-weight:   typography.font.weight.semibold (600)
line-height:   typography.font.leading.tight (1.25)
white-space:   nowrap
```

## Token References

| Property | Token | Value |
|----------|-------|-------|
| Success color | `color.status.success` | #22c55e |
| Warning color | `color.status.warning` | #f59e0b |
| Error color | `color.status.error` | #ef4444 |
| Info color | `color.status.info` | #22d3ee |
| Neutral color | `color.text.secondary` | #94a3b8 |
| Padding vertical | `spacing.1` | 4px |
| Padding horizontal | `spacing.2` | 8px |
| Gap (icon + text) | `spacing.1` | 4px |
| Border radius | `radius.full` | 9999px |
| Font size | `typography.font.size.xs` | 11px |
| Font weight | `typography.font.weight.semibold` | 600 |
| Line height | `typography.font.leading.tight` | 1.25 |

## Anti-Patterns

- **Do not use decorative colors.** Badge colors must map to `color.status.*` or `color.text.secondary`. Using green for a non-success badge, or lavender as a badge color, misrepresents status and breaks the color role system.
- **Do not use badges as buttons.** Badges are read-only. If a badge needs to be clickable, convert it to a tag or chip component with explicit interaction states.
- **Do not hardcode badge colors.** All background and text values must reference tokens. Background opacity should be applied via `rgba()` referencing the token value, not a custom hex.
- **Do not create custom badge variants.** The five defined variants (success, warning, error, info, neutral) cover all valid status states. New semantic states require a token addition and justification.
- **Do not use large text in badges.** Badge font size is `typography.font.size.xs` (11px). Larger text breaks the compact inline format.
