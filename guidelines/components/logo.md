# Logo

[Component overview](overview.md) · [Setup](../setup.md)

Logo image and visible brand text.

## API

Public `LogoProps` extends/aliases React `HTMLAttributes<HTMLDivElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `compact` | `boolean` | false |
| `label` | `string` | 'Earthling' |

No required props. compact selects logo-footer.svg and reduced sizing; otherwise logo.svg. Label is visible text, separate from the image. Native div props are forwarded; no ref forwarding, href, or image URL override. Wrap in an anchor for navigation, as NavBar does.

## Minimal usage

```tsx
import { Logo } from '@juan-ds/earthing-design-system';

export function Example() {
  return <Logo label="Earthling" />;
}
```

## Accessibility and states

Decorative image alt is empty; visible label supplies text. No interactive, selected, or disabled behavior. Changing label does not change the SVG artwork.

## Layout and limitations

Inline flex, 8px gap; image 32×32px with 20px Young Serif text, compact image 24×24px and text 18px. No media query; logo SVGs are embedded in the library JavaScript.
