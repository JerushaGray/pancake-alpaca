# Button

Buttons trigger actions. Use sparingly: one primary action per view. Green is reserved for action only -- do not use it for decorative or informational purposes.

## Variants

### Primary
The main call-to-action. Use once per page section.

```
background: color.action.primary (#22c55e)
color:       color.text.inverse (#0f172a)
border:      none
radius:      radius.md (6px)
padding:     spacing.2 spacing.4 (8px 16px)
font-size:   typography.font.size.base (14px)
font-weight: typography.font.weight.semibold (600)
```

### Secondary
Supporting action. Outlined style, no fill.

```
background: transparent
color:       color.action.primary (#22c55e)
border:      1px solid color.action.primary
radius:      radius.md (6px)
padding:     spacing.2 spacing.4 (8px 16px)
font-size:   typography.font.size.base (14px)
font-weight: typography.font.weight.medium (500)
```

### Ghost
Low-emphasis action. No border, no background.

```
background: transparent
color:       color.text.secondary (#94a3b8)
border:      none
radius:      radius.md (6px)
padding:     spacing.2 spacing.4 (8px 16px)
font-size:   typography.font.size.base (14px)
font-weight: typography.font.weight.regular (400)
```

### Danger
Destructive action. Red only for destructive operations.

```
background: color.status.error (#ef4444)
color:       color.text.primary (#f1f5f9)
border:      none
radius:      radius.md (6px)
padding:     spacing.2 spacing.4 (8px 16px)
font-size:   typography.font.size.base (14px)
font-weight: typography.font.weight.semibold (600)
```

## States

### Default
No modification beyond variant styles above.

### Hover
```
transform:  translateY(-1px)
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
transition: all 150ms ease
```
- Primary hover background: `color.action.primary.hover` (#16a34a)
- Secondary hover background: `color.surface.raised` (#1e293b)
- Ghost hover color: `color.text.primary` (#f1f5f9)
- Danger hover background: darkened by 10%

### Focus
```
outline:        2px solid color.interaction.accent (#22d3ee)
outline-offset: 2px
```

### Disabled
```
opacity:        0.5
pointer-events: none
cursor:         not-allowed
```
Use `color.action.primary.disabled` (#166534) as background on disabled primary buttons.

## Token References

| Property | Token | Value |
|----------|-------|-------|
| Primary background | `color.action.primary` | #22c55e |
| Primary hover | `color.action.primary.hover` | #16a34a |
| Primary active | `color.action.primary.active` | #15803d |
| Primary disabled | `color.action.primary.disabled` | #166534 |
| Focus ring | `color.interaction.accent` | #22d3ee |
| Danger background | `color.status.error` | #ef4444 |
| Text on primary | `color.text.inverse` | #0f172a |
| Text on ghost | `color.text.secondary` | #94a3b8 |
| Border radius | `radius.md` | 6px |
| Padding vertical | `spacing.2` | 8px |
| Padding horizontal | `spacing.4` | 16px |
| Font size | `typography.font.size.base` | 14px |
| Font weight (primary) | `typography.font.weight.semibold` | 600 |

## Anti-Patterns

- **Do not use green for decorative buttons.** Green is reserved for actions (CTAs). If a button does not trigger a primary action, use secondary or ghost.
- **Do not hardcode colors.** All color values must reference CSS custom properties mapped from tokens. No raw hex values in component CSS.
- **Do not add new variants without justification.** Four variants cover all use cases. A new variant requires a documented spec entry and token additions.
- **Do not bypass tokens.** Avoid `style` attributes or inline overrides that skip the token system. Exceptions require explicit annotation.
- **Do not use danger for non-destructive actions.** Red signals deletion or irreversible operations. Cancel or dismiss actions use ghost.
