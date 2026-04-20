# Sidebar Navigation Component Spec

## Overview

The sidebar is the primary navigation structure. It is persistent on desktop and collapses to a drawer on smaller viewports. It orients the operator within the product and gives access to the main sections.

---

## Structure

```
Sidebar
  Logo / Brand mark
  Nav section (primary links)
    Nav item (icon + label)
    Nav item (icon + label + badge count)
    ...
  Spacer (flex-grow)
  Nav section (secondary / bottom links)
    Nav item (Settings)
    Nav item (User / Account)
```

---

## Dimensions

| Property      | Token                        |
|---------------|------------------------------|
| width         | `--layout-sidebar-width`     |
| background    | `--color-surface-sidebar`    |
| border-right  | 1px solid `--color-border-default` |
| padding (y)   | `--space-4`                  |
| padding (x)   | `--space-3`                  |

---

## Logo Area

| Property       | Token / Value               |
|----------------|-----------------------------|
| height         | 56px                        |
| padding        | `--space-3` `--space-4`     |
| border-bottom  | 1px solid `--color-border-default` |
| brand text     | `--font-heading`, `--font-weight-bold`, `--text-lg` |
| brand text color | `--color-text-primary`    |

---

## Nav Item Token Mappings

| State      | Background                    | Text                         | Icon color                  |
|------------|-------------------------------|------------------------------|-----------------------------|
| default    | transparent                   | `--color-text-secondary`     | `--color-text-tertiary`     |
| hover      | `--color-surface-overlay`     | `--color-text-primary`       | `--color-text-secondary`    |
| active     | `rgba(132,204,22,0.10)`       | `--color-text-action`        | `--color-text-action`       |
| focus      | `--color-surface-overlay`     | `--color-text-primary`       | `--color-text-secondary`    |
| disabled   | transparent                   | `--color-text-tertiary`      | `--color-text-tertiary`     |

### Nav Item Layout

| Property       | Token / Value               |
|----------------|-----------------------------|
| display        | flex, align-items center    |
| padding        | `--space-2` `--space-3`     |
| gap            | `--space-3`                 |
| border-radius  | `--radius-md`               |
| font-size      | `--text-sm`                 |
| font-weight (default) | `--font-weight-medium` |
| font-weight (active) | `--font-weight-semibold` |
| transition     | `--duration-fast` `--easing-default` |

### Active Indicator

- Left border: 2px solid `--color-action-primary` on the active item.
- Background tint as shown above.
- Text and icon shift to action color.

---

## Icon Usage

- All nav icons: Tabler Icons, outline style, `--icon-base` (20px).
- Icons are `aria-hidden="true"`. The nav item label conveys meaning.
- Icon color follows the state table above.

---

## Section Labels

Optional. Used to group related nav items.

| Property       | Token                       |
|----------------|-----------------------------|
| text           | `--color-text-tertiary`     |
| font-size      | `--text-xs`                 |
| font-weight    | `--font-weight-semibold`    |
| letter-spacing | `--tracking-widest`         |
| text-transform | uppercase                   |
| padding        | `--space-4` `--space-3` `--space-1` |

---

## Badge Counts

If a nav item has an unread count or notification badge:
- Badge is positioned to the right of the label.
- Use the `info` badge variant but constrained to a pill shape.
- Hide at zero count; do not show "0".

---

## States

| State       | Behavior                                            |
|-------------|-----------------------------------------------------|
| collapsed   | Width reduces to icon-only (48px). Labels hidden. Tooltips on hover. |
| expanded    | Full width with icons and labels.                   |
| mobile      | Hidden by default. Opens as a full-height drawer with overlay. |

---

## Responsive Behavior

- At viewports below 1024px, the sidebar hides off-canvas.
- A hamburger button (`menu` icon from Tabler) in the top bar opens the drawer.
- The overlay behind the drawer: `--color-surface-base` at 70% opacity.
- Drawer close: tap overlay or press Escape.

---

## Accessibility

- `<nav aria-label="Main navigation">` wraps the sidebar.
- Active item: `aria-current="page"` on the active `<a>` or `<button>`.
- Collapsed sidebar: icons must have `title` or adjacent tooltip for screen readers.
- Keyboard: Tab navigates items; Enter or Space activates.
- Mobile drawer: focus trap while open; Escape closes; return focus to the trigger on close.
