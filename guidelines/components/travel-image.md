# TravelImage

[Component overview](overview.md) · [Setup](../setup.md)

Bundled destination or itinerary image.

## API

Public `TravelImageProps` extends/aliases React `Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `name` | `TravelImageName: 'rome' | 'hilo' | 'nice' | 'scenic-roadtrips' | 'tropical-retreats' | 'savannah-safaris' | 'off-the-grid' | 'rest-and-reset' | 'the-alps'` | required |
| `alt` | `string` | required |

name and alt are required. Names select matching statically imported PNG URLs from an internal map; the library build embeds the images as data URLs. src is excluded from the public type; no src/base URL override or ref forwarding. Remaining native image props are forwarded, including loading, width, height, sizes, and srcSet. Loading is not defaulted to lazy. Provide meaningful alt for informative images or empty alt when intentionally decorative.

## Minimal usage

```tsx
import { TravelImage } from '@juan-ds/earthing-design-system';

export function Example() {
  return <TravelImage name="scenic-roadtrips" alt="A winding coastal road" loading="lazy" />;
}
```

## Accessibility and states

Native img alternative text; no error fallback, caption, placeholder, or loading state UI. It does not generate responsive srcSet sources.

## Layout and limitations

Width 100% and object-fit cover. rome/hilo/nice use 411/480 portrait ratio; all others use 405/240 and radius-md. No media queries. Assets are embedded in the library JavaScript; see setup.md.
