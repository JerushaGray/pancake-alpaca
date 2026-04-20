# Navigation

Navigation provides wayfinding across sections of the application. It uses icons alongside labels. Icon sizes and colors follow a strict role system.

## Overview

Navigation items are displayed in a vertical sidebar at 240px wide. Each item contains an icon (18px, nav context) and a text label. Active state uses `color.action.primary` to indicate current location.

## Structure

```
Sidebar:
  width:      240px
  background: color.surface.raised (#1e293b)
  padding:    spacing.4 (16px)
  border-right: 1px solid color.surface.border (#334155)

Nav item:
  display:       flex
  align-items:   center
  gap:           spacing.3 (12px)
  padding:       spacing.2 spacing.3 (8px 12px)
  border-radius: radius.md (6px)
  font-size:     typography.font.size.base (14px)
  font-weight:   typography.font.weight.medium (500)
  cursor:        pointer
  transition:    all 120ms ease
```

## Icon System (Nav Context)

- **Size**: 18px (nav context, larger than default 16px for legibility)
- **Default color**: `color.text.secondary` (#94a3b8)
- **Hover color**: `color.interaction.accent` (#22d3ee)
- **Active color**: `color.action.primary` (#22c55e)

## States

### Default
```
color:      color.text.secondary (#94a3b8)
background: transparent
icon-color: color.text.secondary (#94a3b8)
```

### Hover
```
color:      color.text.primary (#f1f5f9)
background: color.surface.overlay (#334155)
icon-color: color.interaction.accent (#22d3ee)
transition: all 120ms ease
```

### Active
```
color:      color.action.primary (#22c55e)
background: rgba(34, 197, 94, 0.1)
icon-color: color.action.primary (#22c55e)
font-weight: typography.font.weight.semibold (600)
```

### Focus
```
outline:        2px solid color.interaction.accent (#22d3ee)
outline-offset: 2px
```
Focus state applies when navigating via keyboard. Do not suppress it.

## Token References

| Property | Token | Value |
|----------|-------|-------|
| Sidebar background | `color.surface.raised` | #1e293b |
| Sidebar border | `color.surface.border` | #334155 |
| Sidebar width | n/a (fixed 240px) | 240px |
| Default item text | `color.text.secondary` | #94a3b8 |
| Hover item text | `color.text.primary` | #f1f5f9 |
| Hover item background | `color.surface.overlay` | #334155 |
| Active item text | `color.action.primary` | #22c55e |
| Active item background | `color.action.primary` at 10% opacity | rgba(34,197,94,0.1) |
| Default icon color | `color.text.secondary` | #94a3b8 |
| Hover icon color | `color.interaction.accent` | #22d3ee |
| Active icon color | `color.action.primary` | #22c55e |
| Focus ring | `color.interaction.accent` | #22d3ee |
| Item border radius | `radius.md` | 6px |
| Item padding vertical | `spacing.2` | 8px |
| Item padding horizontal | `spacing.3` | 12px |
| Item gap | `spacing.3` | 12px |
| Font size | `typography.font.size.base` | 14px |
| Font weight (default) | `typography.font.weight.medium` | 500 |
| Font weight (active) | `typography.font.weight.semibold` | 600 |
| Icon size | 18px (nav context) | 18px |

## Anti-Patterns

- **Do not use cyan as the active state color.** Cyan (`color.interaction.accent`) is for hover and focus. Active state uses green (`color.action.primary`). Swapping these breaks the color role system.
- **Do not suppress focus outlines.** Keyboard navigation requires visible focus. Use `color.interaction.accent` as the focus ring color.
- **Do not add more than one active item at a time.** Only one nav item can be in active state. Multiple active items indicate a routing or state management bug.
- **Do not use nav items as dropdown triggers without explicit disclosure.** If a nav item expands a sub-menu, it must use a visible expand icon and maintain its own hover/active states independently.
- **Do not use icon sizes other than 18px in nav context.** The nav context uses 18px for legibility. Using 16px (default) or 24px breaks visual consistency. See `/docs/icons.md`.
