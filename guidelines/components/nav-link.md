# NavLink

[Component overview](overview.md) · [Setup](../setup.md)

Text navigation anchor.

## API

Public `NavLinkProps` extends/aliases React `AnchorHTMLAttributes<HTMLAnchorElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

No additional custom props.

No required props/defaults/variants. Supply href and children for real navigation. Native anchor attributes and events are forwarded; ref targets the anchor. Add aria-current="page" when appropriate; there is no automatic active detection or router integration.

## Minimal usage

```tsx
import { NavLink } from '@juan-ds/earthing-design-system';

export function Example() {
  return <NavLink href="/guides">Destination guides</NavLink>;
}
```

## Accessibility and states

Native link semantics when href is present. Hover changes text color; focus-visible adds a ring. No disabled or selected style; aria-disabled alone does not stop navigation.

## Layout and limitations

Inline flex with 8px 4px padding and nowrap text. No media query.
