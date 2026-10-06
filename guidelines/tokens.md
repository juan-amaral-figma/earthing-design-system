# Tokens and typography

[Styles](styles.md) · [Setup](setup.md)

## Public access

`primitiveColors` is the only exported JavaScript token value. It is a readonly typed object with `forest` numeric keys and `neutral` keys shown below. `EarthingTheme` is a type union `'light' | 'dark'`, not a runtime object. CSS custom properties below are available through the public stylesheet, not JavaScript semantic token exports. Use `var(--earthing-…)` in application CSS or inline React styles.

```tsx
import { primitiveColors } from '@juan-ds/earthing-design-system';

export function TokenExample() {
  return <div style={{
    background: 'var(--earthing-bg-card)',
    color: 'var(--earthing-text-primary)',
    borderRadius: 'var(--earthing-radius-md)',
    border: `1px solid ${primitiveColors.forest[200]}`,
  }}>Explore destinations</div>;
}
```

Prefer semantic variables when extending themed UI. Primitive names encode palette family/shade, not a documented action priority rule. Semantic names encode background, text, border, action, or surface roles; the table shows actual usage where implemented. Values written as `var(...)` resolve through the primitive table. Dark entries marked “same” inherit the light/root value.

## Primitive colors

Each row is also `primitiveColors.<family>[<key>]` in JavaScript; use strings for `neutral.white`.

| CSS custom property | JS path | Value (both themes) |
|---|---|---|
| `--earthing-forest-950` | `primitiveColors.forest[950]` | `#090b09` |
| `--earthing-forest-900` | `primitiveColors.forest[900]` | `#0e110e` |
| `--earthing-forest-800` | `primitiveColors.forest[800]` | `#1c241c` |
| `--earthing-forest-700` | `primitiveColors.forest[700]` | `#252f25` |
| `--earthing-forest-600` | `primitiveColors.forest[600]` | `#2d3a2d` |
| `--earthing-forest-500` | `primitiveColors.forest[500]` | `#526252` |
| `--earthing-forest-400` | `primitiveColors.forest[400]` | `#5b745b` |
| `--earthing-forest-300` | `primitiveColors.forest[300]` | `#8caf7a` |
| `--earthing-forest-200` | `primitiveColors.forest[200]` | `#a5b5a5` |
| `--earthing-forest-100` | `primitiveColors.forest[100]` | `#e4ecd1` |
| `--earthing-neutral-white` | `primitiveColors.neutral['white']` | `#ffffff` |
| `--earthing-neutral-50` | `primitiveColors.neutral[50]` | `#faf9f5` |
| `--earthing-neutral-100` | `primitiveColors.neutral[100]` | `#f2f0e8` |
| `--earthing-neutral-200` | `primitiveColors.neutral[200]` | `#ecebe3` |
| `--earthing-neutral-300` | `primitiveColors.neutral[300]` | `#e0ddd5` |
| `--earthing-neutral-900` | `primitiveColors.neutral[900]` | `#000000` |

## Semantic colors

| CSS custom property | Light | Dark | Verified consumer/usage |
|---|---|---|---|
| `--earthing-bg-primary` | `var(--earthing-neutral-50)` | `var(--earthing-forest-950)` | Theme canvas, NavBar |
| `--earthing-bg-secondary` | `var(--earthing-neutral-200)` | `var(--earthing-forest-900)` | Defined publicly; not consumed by current components |
| `--earthing-bg-card` | `var(--earthing-neutral-white)` | `var(--earthing-forest-800)` | Defined publicly; not consumed by current components |
| `--earthing-bg-elevated` | `var(--earthing-neutral-white)` | `var(--earthing-forest-700)` | NewsletterSection |
| `--earthing-bg-accent` | `var(--earthing-forest-100)` | `var(--earthing-forest-700)` | Defined publicly; not consumed by current components |
| `--earthing-bg-inverse` | `var(--earthing-forest-600)` | `var(--earthing-neutral-50)` | Defined publicly; not consumed by current components |
| `--earthing-bg-input` | `var(--earthing-neutral-white)` | `var(--earthing-forest-800)` | TextInput |
| `--earthing-bg-footer` | `#f5f5f0` | `var(--earthing-forest-900)` | Footer |
| `--earthing-bg-banner` | `#d9e0d1` | `var(--earthing-forest-700)` | CtaBanner |
| `--earthing-text-primary` | `#1a1a1a` | `var(--earthing-neutral-50)` | Theme text, headings, TextInput, Logo |
| `--earthing-text-secondary` | `#667366` | `var(--earthing-forest-200)` | Body descriptions, links, placeholders |
| `--earthing-text-tertiary` | `var(--earthing-forest-400)` | `var(--earthing-forest-300)` | Defined publicly; not consumed by current components |
| `--earthing-text-inverse` | `var(--earthing-neutral-50)` | `var(--earthing-forest-800)` | Defined publicly; not consumed by current components |
| `--earthing-text-on-accent` | `var(--earthing-neutral-white)` | `var(--earthing-forest-950)` | Primary Button text |
| `--earthing-text-tag` | `#667366` | `var(--earthing-forest-100)` | Tag text (not tag-text) |
| `--earthing-text-link` | `var(--earthing-forest-400)` | `var(--earthing-forest-300)` | Defined publicly; not consumed by current components |
| `--earthing-border-default` | `#d9d9d4` | `var(--earthing-forest-500)` | TextInput, secondary Button |
| `--earthing-border-strong` | `var(--earthing-forest-600)` | `var(--earthing-forest-200)` | Defined publicly; not consumed by current components |
| `--earthing-border-subtle` | `var(--earthing-neutral-200)` | `var(--earthing-forest-700)` | Footer divider |
| `--earthing-accent-primary` | `var(--earthing-forest-300)` | same | Primary Button background, icons, card links/count, footer headings |
| `--earthing-action-primary` | `var(--earthing-forest-600)` | same | Defined publicly; not consumed by current components |
| `--earthing-action-primary-text` | `var(--earthing-neutral-50)` | same | Defined publicly; not consumed by current components |
| `--earthing-action-secondary` | `var(--earthing-neutral-white)` | `var(--earthing-forest-800)` | Secondary Button background |
| `--earthing-action-secondary-text` | `var(--earthing-forest-600)` | `var(--earthing-neutral-50)` | Secondary Button text |
| `--earthing-surface-overlay` | `var(--earthing-neutral-900)` | same | Defined publicly; not consumed by current components |
| `--earthing-surface-footer` | `var(--earthing-forest-600)` | same | Defined publicly; not consumed by current components |
| `--earthing-tag-bg` | `var(--earthing-forest-100)` | `var(--earthing-forest-700)` | Tag background |
| `--earthing-tag-text` | `var(--earthing-forest-600)` | `var(--earthing-forest-100)` | Defined publicly; not consumed by current components |

`--earthing-action-primary` is not Button's primary background; Button uses `--earthing-accent-primary`. `--earthing-tag-text` is defined, but Tag uses `--earthing-text-tag`. Do not assume similarly named tokens are interchangeable.

## Fonts, radii, and focus

| CSS custom property | Value (both themes) | Implemented use |
|---|---|---|
| `--earthing-font-display` | `'Young Serif', Georgia, serif` | Display headings and Logo |
| `--earthing-font-body` | `'DM Sans', Arial, sans-serif` | Body text and controls |
| `--earthing-radius-sm` | `8px` | Defined; unused by current components |
| `--earthing-radius-md` | `16px` | Landscape images and newsletter |
| `--earthing-radius-lg` | `24px` | CTA banner |
| `--earthing-radius-pill` | `999px` | Buttons, input, tags, CTA search |
| `--earthing-focus-ring` | `0 0 0 3px rgb(140 175 122 / 35%)` | Focus box-shadow on Button, links, TextInput, CTA search |

## Typography utilities

Classes are exposed by the stylesheet, not JS tokens. Names identify the CSS scale; they do not enforce an application heading hierarchy or brand rule. Use semantic HTML independently of visual class.

| Class | Font weight / size / line height | Extra declarations |
|---|---|---|
| `.earthing-display-hero` | `400 64px/1.1 var(--earthing-font-display)` | — |
| `.earthing-display-destination` | `400 44px/1 var(--earthing-font-display)` | — |
| `.earthing-display-hero-mobile` | `400 36px/1.15 var(--earthing-font-display)` | — |
| `.earthing-heading-1` | `400 40px/1 var(--earthing-font-display)` | — |
| `.earthing-heading-2` | `400 32px/1.2 var(--earthing-font-display)` | — |
| `.earthing-heading-3` | `400 28px/1 var(--earthing-font-display)` | — |
| `.earthing-heading-4` | `400 24px/1 var(--earthing-font-display)` | — |
| `.earthing-brand-logo` | `700 20px/1 var(--earthing-font-body)` | — |
| `.earthing-body-large` | `400 18px/1 var(--earthing-font-body)` | — |
| `.earthing-body-large-bold` | `700 18px/1 var(--earthing-font-body)` | — |
| `.earthing-body-default` | `400 16px/1 var(--earthing-font-body)` | — |
| `.earthing-body-default-semibold` | `600 16px/1 var(--earthing-font-body)` | — |
| `.earthing-body-card` | `400 15px/1.4 var(--earthing-font-body)` | — |
| `.earthing-body-small` | `400 14px/1.5 var(--earthing-font-body)` | — |
| `.earthing-body-small-semibold` | `600 14px/1 var(--earthing-font-body)` | — |
| `.earthing-body-small-medium` | `500 14px/1 var(--earthing-font-body)` | — |
| `.earthing-label-tag` | `700 12px/1 var(--earthing-font-body)` | — |
| `.earthing-label-stat` | `600 12px/1 var(--earthing-font-body)` | letter-spacing: .5px; |
| `.earthing-label-caption` | `400 12px/1 var(--earthing-font-body)` | — |
| `.earthing-label-uppercase` | `700 14px/1 var(--earthing-font-body)` | letter-spacing: 1px; text-transform: uppercase; |

At ≤767px `.earthing-display-hero` changes to 36px/1.15. `.earthing-display-hero-mobile` is always 36px/1.15; the remaining utilities have no media overrides.

## Public versus internal

The CSS variables and typography helpers above are stylesheet-accessible. Individual component BEM selectors, hardcoded spacing/colors/dimensions, asset resolver, and catalog styles are implementation details, not exported tokens. There are no public spacing, breakpoint, shadow-elevation, motion, status/error, or z-index token collections. Do not invent utility classes such as `bg-earthing-*` or Tailwind token mappings.
