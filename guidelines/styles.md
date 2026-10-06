# Styling and composition

[Setup](setup.md) · [Tokens](tokens.md) · [Component overview](components/overview.md)

## Implemented approach

The package uses plain global CSS with `earthing-` class prefixes, semantic custom properties, and component-specific styles. Components accept native `className` and `style` props as documented. Those hooks apply to the root except `TextInput`, where they apply to the input. Internal BEM selectors are implementation details, not a public slot API. Most composed components render their own contents; a native `children` type does not imply an insertion slot.

Use existing components for their implemented roles and semantic tokens for application styling. Young Serif is the display face; DM Sans is the body/UI face. Typography utilities bundle weight, size, and line height but do not set text color or reset element margins. See the exact [type scale](tokens.md#typography-utilities). Components may use their own type declarations rather than utility classes; for example `Logo` uses Young Serif while `.earthing-brand-logo` uses bold DM Sans.

## Layout and responsiveness

Components use flex layouts, fixed gaps/padding, and width/max-width constraints. No public spacing tokens, grid primitive, container utility, or breakpoint export exists. Compose page layout in application CSS; catalog layout classes are excluded from the package. Do not treat the catalog sidebar, grids, minimum specimen widths, or global reset as product requirements.

| Component/utility | Implemented responsive behavior |
|---|---|
| HeroSection / `.earthing-display-hero` | At ≤767px hero type becomes 36px/1.15; section also reduces padding and body type |
| NavBar | At ≤1050px central nav is hidden; at ≤600px sign-in is hidden and padding/action sizing reduces |
| CtaBanner | At ≤900px content/search stack and title becomes 40px; at ≤560px padding reduces and title becomes 34px |
| NewsletterSection | At ≤600px padding reduces; width is 600px with max-width 100% |
| Footer | At ≤800px top/bottom stack; at ≤520px columns and legal links stack |
| Cards / TravelImage | Cards have max-width 100%; images are width 100% with intrinsic aspect-ratio styling; no card media queries |

Other components have no media queries. Long unbroken text and nowrap controls can overflow; verify narrow application layouts. Header heading levels change semantics without changing the component's visual type treatment.

## Themes and limitations

Light and dark are selected by `data-earthing-theme`; there is no theme provider, automatic detection, or transition. CSS variables inherit, so application overrides should be scoped to the intended theme wrapper. Some declarations deliberately remain unchanged in dark, including accent/action-primary colors.

Dark tokens do not make every declaration theme-aware: `CtaBanner` has fixed dark text/white search colors; `DestinationGuideCard` has fixed pale text and background/overlay colors; SVGs and PNGs are not recolored by theme. Check these actual results before choosing dark surfaces. There is no documented contrast certification or complete accessibility guarantee.

Buttons implement hover, active, disabled, and focus-visible styling. Links implement hover and focus-visible; TextInput implements focus-visible and disabled. CtaBanner's search has focus-within styling. No animation beyond Button/NavLink transitions, loading skeleton system, error token set, or reduced-motion override is implemented.
