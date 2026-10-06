# Icon

[Component overview](overview.md) · [Setup](../setup.md)

Small decorative glyph or microphone asset.

## API

Public `IconProps` extends/aliases React `HTMLAttributes<HTMLSpanElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `name` | `IconName: 'arrow-right' | 'chevron-right' | 'double-arrow' | 'microphone'` | required |
| `decorative` | `boolean` | true |

name is required. The first three icons are text glyphs →, ›, »; microphone renders a bundled SVG image. No size/variant prop or ref forwarding. Native span props target the outer span. Accessibility props are applied after native props: decorative=true forces aria-hidden=true; decorative=false forces role=img and uses aria-label or the name with hyphens replaced by spaces.

## Minimal usage

```tsx
import { Icon } from '@juan-ds/earthing-design-system';

export function Example() {
  return <Icon name="microphone" decorative={false} aria-label="Microphone" />;
}
```

## Accessibility and states

Non-interactive by itself, with no button, speech capture, or keyboard handler. The microphone image has empty alt because the span carries its semantics. When pairing with named controls, keep icons decorative.

## Layout and limitations

Default 16×20px; arrow-right 11×14px, chevron-right 6×14px, double-arrow 8×14px. No media query. The microphone SVG is embedded in the library JavaScript; see setup.md.
