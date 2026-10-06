# SectionHeader

[Component overview](overview.md) · [Setup](../setup.md)

Kicker and semantic section heading.

## API

Public `SectionHeaderProps` extends/aliases React `HTMLAttributes<HTMLDivElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `title` | `string` | required |
| `kicker` | `string` | 'SECTION KICKER' |
| `headingAs` | `HeadingLevel ('h1' through 'h6')` | 'h2' |

title is required. headingAs controls the heading element, not its visual size. Native props target the wrapping div. No children slot, ref forwarding, variants, or interactive states. Empty kicker still leaves the span.

## Minimal usage

```tsx
import { SectionHeader } from '@juan-ds/earthing-design-system';

export function Example() {
  return <SectionHeader kicker="Explore" title="Destination guides" headingAs="h2" />;
}
```

## Accessibility and states

Native heading semantics; choose a heading level that fits the application hierarchy. The wrapper does not automatically label a section or create a landmark.

## Layout and limitations

Column flex, 8px gap; kicker 12px uppercase with .6px tracking; heading 40px/1 Young Serif. No media queries.
