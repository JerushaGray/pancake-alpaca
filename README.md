# GetFunnelCaked Design System

A dark-mode-first, token-driven UI system for GetFunnelCaked.

## System Constraints

- Dark-mode-first: dark theme is the default and primary target.
- High contrast over decoration: clarity before aesthetics.
- Color is functional, not expressive: green = action, cyan = interaction, lavender = brand.
- Components are minimal and repeatable: no one-off variants.
- Voice is direct and systems-first: no fluff, no em dashes, max 4 lines per paragraph.

## Structure

- `/tokens` - design tokens (colors, spacing, radius, typography)
- `/themes` - dark and light theme mappings
- `/components` - component specifications
- `/examples` - authoritative example UIs
- `/docs` - voice system, icons, anti-patterns
- `/scripts` - validation tooling

## No Hardcoded Values

Components must reference tokens only. No hex colors, no raw pixel values for spacing or radius outside of `/tokens`.

Run validation: `node scripts/validate-tokens.js`

## Making Changes

- New tokens: justify why existing tokens do not work.
- New components: must reuse existing tokens.
- New variants: avoid unless required by a defined spec.

## Token Naming

All tokens follow `category.role.variant` naming:
- `color.action.primary`
- `spacing.4`
- `radius.md`
- `typography.font.size.base`

## Color Roles

| Color | Role | Example use |
|-------|------|-------------|
| Green | Action | Buttons, CTAs |
| Cyan | Interaction / Data | Links, focus rings, charts |
| Lavender | Brand emphasis | Headings, highlights |

## Icon System

Use Tabler Icons, outline style only. See `/docs/icons.md`.

## Validation

Run `node scripts/validate-tokens.js` to check for hardcoded values in components and examples.
