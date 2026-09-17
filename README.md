# Earthing Design System

A typed React component library based on the Earthing Figma design system. It includes design tokens, light and dark themes, typography utilities, reusable primitives, cards, page sections, icons, and the original Figma image assets.

## Structure

```text
public/
└── earthing/              # Versioned Figma exports
src/
├── components/            # One folder per public component
│   └── Button/
│       ├── Button.tsx
│       ├── Button.css
│       └── index.ts
├── foundations/           # Tokens, themes, and typography
├── utils/                 # Internal utilities
├── index.ts               # Public package API
├── App.tsx                # Development catalog only
└── App.css                # Catalog-only styles
```

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

`npm run build` generates the development catalog in `catalog-dist/` and the publishable library in `dist/`, including TypeScript declarations. Keeping these outputs separate prevents catalog-only files from entering the package.

## Usage

```tsx
import { Button, ItineraryCard } from 'earthing-design-system'
import 'earthing-design-system/styles.css'

export function Example() {
  return (
    <div className="earthing-theme" data-earthing-theme="light">
      <Button>Join Earthling</Button>
      <ItineraryCard
        title="Scenic Roadtrips"
        description="Epic drives winding through rugged coastlines and mountain passes."
        imageName="scenic-roadtrips"
        imageAlt="A coastal road winding through mountains"
      />
    </div>
  )
}
```

Load **Young Serif** and **DM Sans** in the consuming application. The package deliberately supplies fallback fonts instead of making a hidden network request.

## Themes

Apply `data-earthing-theme="light"` or `data-earthing-theme="dark"` to an ancestor with the `earthing-theme` class. All components consume semantic CSS custom properties, so applications may override the theme without changing component CSS.

## Public components

- `Button`, `Tag`, `TextInput`, `NavLink`, `ArrowLink`
- `Icon`, `Logo`, `TravelImage`
- `SectionHeader`, `DestinationGuideCard`, `ItineraryCard`
- `NewsletterSection`, `CtaBanner`, `NavBar`, `HeroSection`, `Footer`

The public API is exported from `src/index.ts`; component internals and catalog styles are not part of the package contract.

## Prepared for future Code Connect

The public APIs intentionally separate Figma text properties from nested instance slots. For example, `ItineraryCard` exposes `title`, `description`, and `linkText` as strings, while `arrowIcon` and `image` accept React nodes for future Figma instance-swap mappings.

Code-only concerns such as URLs, accessible labels, heading levels, and image alternative text remain separate props and should be omitted from Code Connect templates unless the Figma component exposes corresponding properties.

This repository does not yet contain Code Connect configuration or templates. Add those only after the Figma components are finalized and published to the team library.
