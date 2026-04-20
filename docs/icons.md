# Icons

GetFunnelCaked uses Tabler Icons exclusively. Tabler Icons are MIT-licensed, open-source, and provide consistent outline-style SVG icons.

## Source

CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
```

Usage:
```html
<i class="ti ti-{icon-name}"></i>
```

Browse icons: https://tabler.io/icons

## Style

Use outline style only. Tabler's default webfont renders outline. Do not use filled variants.

## Sizes

| Context | Size | Notes |
|---------|------|-------|
| Default | 16px | Body, tables, badges, buttons |
| Navigation | 18px | Sidebar nav items only |
| Empty states | 32px | Centered icon in empty state blocks |
| Stat cards | 18px | Header icon in metric cards |

Set size via `font-size` on the icon element:

```css
.nav-item-icon { font-size: 18px; }
.empty-state-icon { font-size: 32px; }
```

Do not use CSS `width`/`height` to resize webfont icons.

## Colors

| State | Token | Value |
|-------|-------|-------|
| Default | `color.text.secondary` | #94a3b8 |
| Hover | `color.interaction.accent` | #22d3ee |
| Active | `color.action.primary` | #22c55e |
| Muted / decorative | `color.text.muted` | #475569 |
| Error | `color.status.error` | #ef4444 |
| Warning | `color.status.warning` | #f59e0b |

Icon color must always reference a token. No hardcoded hex values.

## Common Icons by Context

| Context | Icon |
|---------|------|
| Dashboard | `ti-layout-dashboard` |
| Analytics | `ti-chart-bar` |
| Contacts | `ti-users` |
| Campaigns | `ti-speakerphone` |
| Funnels | `ti-funnel` |
| Settings | `ti-settings` |
| Edit action | `ti-edit` |
| Delete action | `ti-trash` |
| Add / new | `ti-plus` |
| Search | `ti-search` |
| Filter | `ti-filter` |
| Download / export | `ti-download` |
| Sort (unsorted) | `ti-arrows-sort` |
| Sort ascending | `ti-arrow-up` |
| Sort descending | `ti-arrow-down` |
| Error / alert | `ti-alert-circle` |
| Success / check | `ti-circle-check` |
| Empty state | `ti-inbox` |
| Link | `ti-link` |
| Mail | `ti-mail` |
| Bell / notification | `ti-bell` |

## Anti-Patterns

- **Do not mix icon libraries.** Tabler Icons is the only approved icon set. Do not import Heroicons, Font Awesome, or Material Icons alongside Tabler.
- **Do not use filled style.** Tabler provides filled variants. Do not use them. Outline icons are the system standard.
- **Do not use icons without accessible labels.** Standalone icon buttons must include `aria-label`. Icon-only navigation items must include a visible or screen-reader text label.
- **Do not resize icons with width/height.** Use `font-size` for webfont icons.
- **Do not use icons as the only status indicator.** Icons supplement text or color. They do not replace accessible text labels.
