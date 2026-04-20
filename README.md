# GetFunnelCaked Brand System

This repository contains the brand foundation for GetFunnelCaked: design tokens, theme outputs, component specs, and a reference UI example.

The system is intentionally minimal. It is meant to be read, extended, and argued with.

---

## Repository Structure

```
/tokens              Design tokens (JSON, source of truth)
/themes              Compiled theme outputs (CSS variables)
/docs                Documentation
  /docs/components   Component specs (Markdown)
/examples            Reference UI (HTML, token-driven)
```

---

## Tokens

All design decisions begin as tokens in `/tokens`. Each file covers one domain.

| File                     | Contents                                     |
|--------------------------|----------------------------------------------|
| `tokens/color.json`      | All color values, semantically named         |
| `tokens/typography.json` | Fonts, sizes, weights, leading, tracking     |
| `tokens/spacing.json`    | Spacing scale and layout dimensions          |
| `tokens/radius.json`     | Border radius scale                          |
| `tokens/interaction.json`| Transitions, focus rings, shadows            |
| `tokens/icons.json`      | Icon library spec, sizes, usage rules        |
| `tokens/voice.json`      | Brand voice rules and example copy           |

Tokens use semantic names, not decorative ones. `color.action.primary` describes its role. `lime-green-500` describes its appearance. The role stays stable as the palette evolves.

---

## Themes

`/themes/css-variables.css` maps every token to a CSS custom property. Use this in any HTML or CSS environment.

```css
/* Reference tokens via CSS variables */
background: var(--color-surface-card);
color: var(--color-text-primary);
```

This repo does not currently use Tailwind. If Tailwind is added, a preset can be generated from the same token source.

---

## Component Specs

`/docs/components/` contains Markdown specs for the core UI components. Each spec includes:

- Variants
- Token mappings (explicit, no hardcoded values)
- Hover, focus, active, and disabled state behavior
- Icon usage rules
- Accessibility guidance

---

## Example UI

`/examples/dashboard.html` is a single HTML file that renders a token-driven dashboard screen. Open it in any browser. No build step required.

It demonstrates: dark sidebar navigation, metric cards, a button row, a data table, and badge variants.

---

## Voice

The brand voice is dry, systems-first, and empathetic toward operators. The rules are in `tokens/voice.json` and `docs/voice-and-tone.md`. The short version: write like a competent colleague, not a cheerleader. No em dashes.

---

## Docs

| File                       | Contents                                 |
|----------------------------|------------------------------------------|
| `docs/brand-overview.md`   | Brand principles and system intent       |
| `docs/color-usage.md`      | How and when to use each color category  |
| `docs/typography.md`       | Font usage, hierarchy, and pairing rules |
| `docs/voice-and-tone.md`   | Voice principles, context rules, examples|
