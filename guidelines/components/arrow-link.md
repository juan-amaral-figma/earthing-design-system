# ArrowLink

[Component overview](overview.md) · [Setup](../setup.md)

Text anchor with trailing icon slot.

## API

Public `ArrowLinkProps` extends/aliases React `AnchorHTMLAttributes<HTMLAnchorElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `icon` | `ReactNode` | <Icon name="arrow-right" /> |

No required props. Supply href and readable children. Children are placed inside a span; icon follows. Undefined icon uses the default; null suppresses it. Ref targets the anchor. Custom icon nodes need their own accessibility handling. Do not nest interactive elements inside this anchor.

## Minimal usage

```tsx
import { ArrowLink } from '@juan-ds/earthing-design-system';

export function Example() {
  return <ArrowLink href="/itineraries">Start exploring</ArrowLink>;
}
```

## Accessibility and states

Native link semantics; default icon is aria-hidden. Hover changes color and focus-visible adds ring. No disabled, selected, loading, or router state.

## Layout and limitations

Inline flex with 6px gap, nowrap; no media query.
