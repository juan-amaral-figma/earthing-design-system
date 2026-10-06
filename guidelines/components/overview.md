# Public component catalog

[Guidelines](../Guidelines.md) · [Setup](../setup.md) · [Styles](../styles.md)

All 16 components below are named root exports. Use exactly the listed public package imports; no default component exports or component subpaths exist. Read each component file before using it. Custom props and defaults are listed there; native React attributes remain available for the stated root type. None of the package components require a provider.

| Component | Purpose | Exact import | Documentation |
|---|---|---|---|
| `Button` | Native action button with primary/secondary presentation | `import { Button } from '@juan-ds/earthing-design-system';` | [Button](button.md) |
| `Tag` | Non-interactive uppercase label | `import { Tag } from '@juan-ds/earthing-design-system';` | [Tag](tag.md) |
| `TextInput` | Labeled native input | `import { TextInput } from '@juan-ds/earthing-design-system';` | [TextInput](text-input.md) |
| `NavLink` | Text navigation anchor | `import { NavLink } from '@juan-ds/earthing-design-system';` | [NavLink](nav-link.md) |
| `ArrowLink` | Text anchor with trailing icon slot | `import { ArrowLink } from '@juan-ds/earthing-design-system';` | [ArrowLink](arrow-link.md) |
| `Icon` | Small decorative glyph or microphone asset | `import { Icon } from '@juan-ds/earthing-design-system';` | [Icon](icon.md) |
| `Logo` | Logo image and visible brand text | `import { Logo } from '@juan-ds/earthing-design-system';` | [Logo](logo.md) |
| `TravelImage` | Bundled destination or itinerary image | `import { TravelImage } from '@juan-ds/earthing-design-system';` | [TravelImage](travel-image.md) |
| `SectionHeader` | Kicker and semantic section heading | `import { SectionHeader } from '@juan-ds/earthing-design-system';` | [SectionHeader](section-header.md) |
| `DestinationGuideCard` | Destination article with tags and optional background image | `import { DestinationGuideCard } from '@juan-ds/earthing-design-system';` | [DestinationGuideCard](destination-guide-card.md) |
| `ItineraryCard` | Article with image, guide count, title, description, and exploration link | `import { ItineraryCard } from '@juan-ds/earthing-design-system';` | [ItineraryCard](itinerary-card.md) |
| `NewsletterSection` | Newsletter form containing an email field | `import { NewsletterSection } from '@juan-ds/earthing-design-system';` | [NewsletterSection](newsletter-section.md) |
| `CtaBanner` | Destination prompt form with a submit arrow | `import { CtaBanner } from '@juan-ds/earthing-design-system';` | [CtaBanner](cta-banner.md) |
| `NavBar` | Brand header with main navigation and account actions | `import { NavBar } from '@juan-ds/earthing-design-system';` | [NavBar](nav-bar.md) |
| `HeroSection` | Introductory page section with heading and subtitle | `import { HeroSection } from '@juan-ds/earthing-design-system';` | [HeroSection](hero-section.md) |
| `Footer` | Brand footer with grouped links and legal links | `import { Footer } from '@juan-ds/earthing-design-system';` | [Footer](footer.md) |

## Supporting public types

Root type exports: `ArrowLinkProps`, `ButtonProps`, `CtaBannerProps`, `DestinationGuideCardProps`, `FooterProps`, `FooterColumn`, `FooterLink`, `HeroSectionProps`, `IconProps`, `IconName`, `ItineraryCardProps`, `LogoProps`, `NavBarProps`, `NavigationItem`, `NavLinkProps`, `NewsletterSectionProps`, `SectionHeaderProps`, `TagProps`, `TextInputProps`, `TravelImageProps`, `TravelImageName`, `HeadingLevel`, and `EarthingTheme`. Use `import type { … } from '@juan-ds/earthing-design-system'`.

`HeadingLevel` is `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'`. [Tokens](../tokens.md) documents the other root runtime export, `primitiveColors`.

## Composition rules

Use Button for actions and NavLink/ArrowLink for navigation. Custom nodes are supported only by ArrowLink.icon and ItineraryCard.image/arrowIcon; most composed components do not render supplied children. Do not nest interactive controls inside anchors, or forms inside NewsletterSection/CtaBanner. Supply actual navigation destinations and form behavior. Built-in images and SVGs are embedded in the library JavaScript; no asset-copy step is required. Read [image and SVG setup](../setup.md#image-and-svg-deployment) for CSP requirements and package-artifact compatibility.
