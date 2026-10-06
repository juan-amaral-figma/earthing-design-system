# Button

[Component overview](overview.md) · [Setup](../setup.md)

Native action button with primary/secondary presentation.

## API

Public `ButtonProps` extends/aliases React `ButtonHTMLAttributes<HTMLButtonElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `variant` | `'primary' | 'secondary'` | 'primary' |
| `type` | `'button' | 'submit' | 'reset'` | 'button' |

No required props. Supply children or an accessible name. Native disabled, event, form, and ARIA props are forwarded; ref targets the button. The primary variant uses accent-primary and text-on-accent; secondary has a border and action-secondary colors.

## Minimal usage

```tsx
import { Button } from '@juan-ds/earthing-design-system';

export function Example() {
  return <Button variant="secondary" onClick={() => {}}>Explore</Button>;
}
```

## Accessibility and states

Native button semantics and keyboard activation. Hover applies brightness(.96), active translates 1px, focus-visible adds the focus ring, and disabled dims to .5 with native disabled behavior. No loading/error state or size prop.

## Layout and limitations

Inline flex, pill radius, nowrap text; primary min-height 42px, secondary 45px, padding 12px 24px. No media query; arrange/wrap buttons at the application level.
