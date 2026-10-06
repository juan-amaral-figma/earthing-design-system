# Tag

[Component overview](overview.md) · [Setup](../setup.md)

Non-interactive uppercase label.

## API

Public `TagProps` extends/aliases React `HTMLAttributes<HTMLSpanElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

No additional custom props.

No required props or variants. Children provide content. Native span props are forwarded; no ref forwarding or selection/dismiss interaction.

## Minimal usage

```tsx
import { Tag } from '@juan-ds/earthing-design-system';

export function Example() {
  return <Tag>Cultural guide</Tag>;
}
```

## Accessibility and states

A plain span with no status/live-region role or keyboard behavior. Text is uppercased by CSS. No disabled, selected, error, or interactive state is implemented.

## Layout and limitations

Inline flex, pill padding 4px 10px, 12px bold type, nowrap. No media queries. DestinationGuideCard overrides tag padding to 6px 12px.
