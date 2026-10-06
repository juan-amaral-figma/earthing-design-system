# DestinationGuideCard

[Component overview](overview.md) · [Setup](../setup.md)

Destination article with tags and optional background image.

## API

Public `DestinationGuideCardProps` extends/aliases React `HTMLAttributes<HTMLElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `destination` | `string` | required |
| `description` | `string` | required |
| `tags` | `string[]` | ['Cultural Guide', 'Italy'] |
| `imageSrc` | `string` | omitted |

destination and description are required. Renders article, tags, fixed h3, and paragraph. imageSrc is an application-controlled URL, not a TravelImageName; no image is loaded by default. When supplied, it sets a gradient/background image after spreading style, replacing style.backgroundImage. tags=[] removes tags. Native root props are forwarded; no ref forwarding, href, custom image slot, headingAs, or variants. Use unique tag text (React keys use tag strings).

## Minimal usage

```tsx
import { DestinationGuideCard } from '@juan-ds/earthing-design-system';

export function Example() {
  return <DestinationGuideCard destination="Rome" description="Explore local culture and architecture." tags={["Cultural guide", "Italy"]} imageSrc="/images/rome.jpg" />;
}
```

## Accessibility and states

The background image has no img alt or separate accessible image semantics; convey essential image information in text. Article is not a link or keyboard action. No hover/focus/selected state. Tag styling and pale text persist across themes.

## Layout and limitations

Width 380px, max-width 100%, height 480px, padding 32px, background center/cover; no media queries. Fixed height and overflow hidden may clip long content.
