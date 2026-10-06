# Consumer setup

[Start here](Guidelines.md) · [Styles](styles.md) · [Components](components/overview.md)

## Install and import

```sh
npm install @juan-ds/earthing-design-system react react-dom
```

The package declares `react >=18` and `react-dom >=18` as peers. Development uses React/React DOM 19.2.8; React 18 compatibility is declared, not separately runtime-tested here. `TextInput` and `CtaBanner` use React `useId`. Use a React-capable ESM bundler and compatible React typings for TypeScript consumers. No CommonJS export is declared.

Import named values and types from the package root. Import the CSS once in the application's entry module, before application overrides (for example `src/main.tsx`); do not import it again in each component.

```tsx
import '@juan-ds/earthing-design-system/styles.css';
import { Button, type EarthingTheme } from '@juan-ds/earthing-design-system';

export function App() {
  const theme: EarthingTheme = 'light';
  return <div className="earthing-theme" data-earthing-theme={theme}>
    <Button>Explore</Button>
  </div>;
}
```

Only `.` and `./styles.css` are declared package subpath exports. Do not deep-import `src`, `dist`, component folders, or utilities. The JS root exports components and `primitiveColors`; the root declarations also export component props, supporting types, `HeadingLevel`, and `EarthingTheme`.

## CSS, themes, and fonts

No provider or theme hook is implemented or required. Put `earthing-theme` and `data-earthing-theme="light"` or `"dark"` on an ancestor. Light tokens also exist at `:root`; the class applies background, foreground, and body font. Set theme state in the application; there is no automatic system preference detection or persistence.

The CSS is precompiled plain CSS: no Tailwind, CSS-in-JS provider, or consumer source scanning is needed. The package does not ship the catalog's global reset, body margin/minimum width, smooth scrolling, root sizing, catalog grid, or font download. Scope any application reset yourself; component dimensions use normal CSS box sizing and differ under `content-box` versus `border-box`.

Load Young Serif regular (400) and DM Sans 400/500/600/700 through your application's approved font loader or `@font-face`. Fonts are not bundled or fetched by the library. Fallbacks are Georgia/serif and Arial/sans-serif. The development catalog loads Google Fonts in its own CSS; that stylesheet is not public package CSS.

## Image and SVG deployment

`TravelImage`, `Logo`, and the microphone `Icon` use explicit static imports for the 12 original assets in `src/assets/earthing/`: nine PNGs, `logo.svg`, `logo-footer.svg`, and `microphone.svg`. The internal utility maps supported image names to imported URLs; there is no dynamic directory URL or configurable asset base.

The local Vite library build embeds these assets as data URLs in the generated JavaScript. Consumers do not need to copy an asset directory, preserve a sibling `earthing/` path, or import repository-local images. The catalog build uses the same static imports and emits hashed PNG URLs; Vite manages the configured base path.

Applications that enforce Content Security Policy must allow `data:` image sources (for example in `img-src`) to display the embedded library assets. Embedded images increase JavaScript size; all nine photos are retained when `TravelImage` is used because image selection is dynamic. Asset bytes have not been resized or recompressed.

Other files in `src/assets/`, outside `earthing/`, remain unrelated to the library exports. Do not import them in Make kit consumer examples. Custom `ItineraryCard.image` nodes and `DestinationGuideCard.imageSrc` can still use application-owned URLs.

This describes the current local build. It does not establish that an already published version contains the migrated assets; the Make kit must consume a package artifact built from this change.
