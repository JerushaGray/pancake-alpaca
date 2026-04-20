# Anti-Patterns

This document catalogs prohibited patterns across the GetFunnelCaked design system. Anti-patterns are practices that produce incorrect, inconsistent, or inaccessible results and must not appear in production code.

---

## System-Wide Anti-Patterns

### No Hardcoded Values

Do not use raw hex colors, pixel values for spacing or radius, or font size literals in component CSS or HTML style attributes. All values must reference CSS custom properties derived from tokens.

**Wrong:**
```css
.button { background-color: #22c55e; padding: 8px 16px; border-radius: 6px; }
```

**Correct:**
```css
.button {
  background-color: var(--token-color-action-primary);
  padding: var(--token-spacing-2) var(--token-spacing-4);
  border-radius: var(--token-radius-md);
}
```

### No Token Bypass

Do not override component styles using `!important`, inline `style` attributes, or utility class overrides that skip the token system. If a one-off style is required, document it with a comment and file a token addition request.

### No Decorative Color Use

Color roles are functional, not expressive.

- Green (`color.action.*`) = action only. Buttons, CTAs, active navigation.
- Cyan (`color.interaction.*`) = interaction and data. Links, focus rings, sort indicators.
- Lavender (`color.brand.*`) = brand emphasis. Headings, section titles, brand identity.

Do not use green to mean "done" in a badge. Do not use cyan for a heading. Do not use lavender for a button.

### No Undocumented Variants

Every component variant, state, or size must be defined in the corresponding `/components/*.md` file before implementation. Do not ship variants not covered by a spec.

### No Suppressed Focus States

Focus indicators must always be visible. Do not use `outline: none` or `outline: 0` without replacing the focus indicator with a `2px solid var(--token-color-interaction-accent)` outline.

---

## Button Anti-Patterns

- Do not use the primary (green) variant for decorative or low-emphasis actions. One primary button per view section.
- Do not add icon-only buttons without `aria-label`.
- Do not use danger style for cancel or dismiss actions. Danger is for destructive operations only.
- Do not create new button variants without a spec entry and token justification.
- Do not use the ghost variant for primary conversion actions.

## Input Anti-Patterns

- Do not use placeholder text as a label substitute. Placeholder disappears on input.
- Do not suppress focus outlines on inputs. Cyan focus ring is required.
- Do not indicate error state with color alone. Always include an error message text element below the field.
- Do not use disabled inputs as a substitute for read-only display. Use a read-only display component instead.
- Do not set fixed widths on inputs unless justified by a specific layout constraint.

## Table Anti-Patterns

- Do not use zebra striping with custom colors. Row hover provides sufficient row differentiation.
- Do not skip the empty state. An empty table body with no explanation is an unfinished UI.
- Do not activate multiple sort columns simultaneously. Only one column is sorted at a time.
- Do not use color in table rows outside of `color.status.*` for status indicators.
- Do not hardcode column widths in component-level styles.

## Badge Anti-Patterns

- Do not use badge color variants outside of `color.status.*` or the neutral variant.
- Do not use green badges for anything other than success or active status.
- Do not make badges interactive (clickable, dismissible) without converting to a tag or chip component.
- Do not use font sizes larger than `typography.font.size.xs` (11px) in badges.
- Do not create new badge color variants without a documented status token addition.

## Navigation Anti-Patterns

- Do not use cyan as the active navigation state color. Active uses `color.action.primary` (green).
- Do not mark multiple navigation items as active simultaneously.
- Do not use icon sizes other than 18px in nav context.
- Do not add navigation items without a corresponding route or section.
- Do not suppress focus outlines on navigation items.

## Icon Anti-Patterns

- Do not use non-Tabler icon libraries alongside Tabler Icons.
- Do not use filled icon variants.
- Do not use icons without accessible labels on interactive elements.
- Do not resize webfont icons with `width`/`height`. Use `font-size`.
- Do not hardcode icon colors. Reference token CSS variables only.
