# NavBar

[Component overview](overview.md) · [Setup](../setup.md)

Brand header with main navigation and account actions.

## API

Public `NavBarProps` extends/aliases React `HTMLAttributes<HTMLElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `items` | `NavigationItem[]` | Destination Guides, Explore Itineraries, Journal, About Us; all href="#" |
| `homeHref` | `string` | '#' |
| `signInHref` | `string` | '#' |
| `signInLabel` | `string` | 'Sign In' |
| `joinHref` | `string` | '#' |
| `joinLabel` | `string` | 'Join Earthling' |
| `onJoin` | `() => void` | window.location.assign(joinHref) in browser |

No required props. NavigationItem requires label:string and href:string. Root is header; native props target it. onJoin replaces joinHref navigation when provided. Join is a Button, not an anchor; default handler guards window access. Logo is fixed to the default Earthling brand. No logo slot, child insertion slot, active-item API, hamburger, or routing integration. Use unique label/href pairs.

## Minimal usage

```tsx
import { NavBar } from '@juan-ds/earthing-design-system';

export function Example() {
  return <NavBar homeHref="/" items={[{ label: "Guides", href: "/guides" }]} signInHref="/sign-in" joinHref="/join" />;
}
```

## Accessibility and states

Home anchor has fixed aria-label="Earthling home"; central nav has aria-label="Main navigation". Native links and button supply interaction semantics. Root ARIA props do not change those inner labels. No active aria-current propagation. Built-in primitives provide focus styling, but the outer home anchor has no custom focus rule.

## Layout and limitations

Full width, min-height 90px, padding 24px 80px. At ≤1050px main nav disappears and horizontal padding is 32px; no menu replaces it. At ≤600px sign-in disappears, min-height 72px, padding 16px 20px, join padding reduces. Provide a separate application mobile navigation if those routes must remain reachable.
