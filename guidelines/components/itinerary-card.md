# ItineraryCard

[Component overview](overview.md) · [Setup](../setup.md)

Article with image, guide count, title, description, and exploration link.

## API

Public `ItineraryCardProps` extends/aliases React `HTMLAttributes<HTMLElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `title` | `string` | required |
| `description` | `string` | required |
| `linkText` | `string` | 'Start exploring' |
| `arrowIcon` | `ReactNode` | undefined → default ArrowLink arrow |
| `image` | `ReactNode` | undefined/null → fallback TravelImage |
| `guideCount` | `number` | 12 |
| `href` | `string` | '#' |
| `imageName` | `TravelImageName` | 'scenic-roadtrips' |
| `imageAlt` | `string` | '' |

title and description are required. Ref targets the article. image replaces the fallback with a ReactNode; a custom image must supply its own sizing/alternative text. Fallback uses imageName and imageAlt. Nullish image uses the fallback; use a custom empty fragment to intentionally render no image. arrowIcon passes to ArrowLink; undefined selects its default, null suppresses it. Native root props do not affect the inner anchor. guideCount is rendered literally as “N Guides” with no singularization or numeric validation.

## Minimal usage

```tsx
import { ItineraryCard } from '@juan-ds/earthing-design-system';

export function Example() {
  return <ItineraryCard title="Scenic roadtrips" description="Explore coastal roads and mountain passes." guideCount={8} href="/itineraries/roadtrips" imageName="scenic-roadtrips" imageAlt="A coastal road through mountains" />;
}
```

## Accessibility and states

Article and fixed h3 semantics; only the inner ArrowLink is a link, not the entire card. Default imageAlt is empty (decorative). No card hover/selected/loading state. Ensure custom image/icon nodes have appropriate semantics and actual href is supplied.

## Layout and limitations

Width 405px with max-width 100%, column flex, 16px image/meta gap. Title/count use a horizontal row; count cannot shrink. No media query; long titles/counts can overflow narrow containers.
