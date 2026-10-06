# HeroSection

[Component overview](overview.md) · [Setup](../setup.md)

Introductory page section with heading and subtitle.

## API

Public `HeroSectionProps` extends/aliases React `HTMLAttributes<HTMLElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `title` | `string` | 'Find your next slow-paced, mindful adventure' |
| `subtitle` | `string` | Expertly curated destination guides focusing on slow travel, local culture, architectural treasures, and remote landscape itineraries. |
| `headingAs` | `HeadingLevel` | 'h1' |

No required props. Renders section, chosen heading, and paragraph; native props target the section. No children slot, image/CTA slot, variants, ref forwarding, or interactive state. Set headingAs for the application hierarchy; it does not alter visual scale.

## Minimal usage

```tsx
import { HeroSection } from '@juan-ds/earthing-design-system';

export function Example() {
  return <HeroSection title="Explore at your own pace" subtitle="Discover local guides and quiet landscapes." headingAs="h1" />;
}
```

## Accessibility and states

Native section and heading semantics; no automatic aria-labelledby or landmark name. No accessibility behavior beyond rendered HTML.

## Layout and limitations

Full width, 80px 80px 48px padding and 20px gap; heading 64px/1.1, subtitle width 720px/max 100%, 18px/1.25. At ≤767px padding 56px 24px 40px; heading 36px/1.15 and subtitle 16px/1.5.
