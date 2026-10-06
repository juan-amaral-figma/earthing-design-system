# Footer

[Component overview](overview.md) · [Setup](../setup.md)

Brand footer with grouped links and legal links.

## API

Public `FooterProps` extends/aliases React `HTMLAttributes<HTMLElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `description` | `string` | A platform helping global travelers find their next mindful, slow-paced adventure. Handcrafted by local guides worldwide. |
| `columns` | `FooterColumn[]` | Explore: Guides/Itineraries/Maps/Hotels; Company: Our Story/Sustainability/Careers/Press; Social: Instagram/X (Twitter)/VSCO/Pinterest; all href="#" |
| `legalLinks` | `FooterLink[]` | Privacy Policy, Terms of Service; both href="#" |
| `copyright` | `string` | '© 2026 Earthling Travel Inc. Mindful explorations forever.' |

No required props. FooterLink requires label:string and href:string; FooterColumn requires title:string and links:FooterLink[]. Root native footer props are forwarded. Fixed compact Logo and h3 column titles; no logo/heading/children slots, variants, or ref forwarding. Empty arrays remove corresponding link groups. Use unique column titles, link labels within each column, and legal labels (React keys). Copyright is a fixed default string, not computed from the current date.

## Minimal usage

```tsx
import { Footer } from '@juan-ds/earthing-design-system';

export function Example() {
  return <Footer columns={[{ title: "Explore", links: [{ label: "Guides", href: "/guides" }] }]} legalLinks={[{ label: "Privacy", href: "/privacy" }]} copyright="© Example Travel" />;
}
```

## Accessibility and states

Native footer and anchor semantics. Link groups are divs, not labeled nav landmarks. Links implement hover color; no custom focus-visible rule or active/disabled state is implemented here. Do not infer contact/social services or links from default # placeholders.

## Layout and limitations

Desktop padding 80px 80px 40px; 60px root gap, brand width 320px/max 100%, columns horizontal. At ≤800px padding 56px 24px 32px, gap 48px, top/bottom stack and column gap 32px. At ≤520px columns and legal links stack.
