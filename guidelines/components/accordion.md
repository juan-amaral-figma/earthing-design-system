# Accordion

[Component overview](overview.md) · [Setup](../setup.md)

Collapsible content sections with accessible trigger buttons and a smooth expand/collapse animation.

## API

### `Accordion`

Public `AccordionProps` extends `HTMLAttributes<HTMLDivElement>`. A thin wrapper that stacks `AccordionItem` children with shared divider borders.

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | required |

### `AccordionItem`

Public `AccordionItemProps` extends `HTMLAttributes<HTMLDivElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `trigger` | `ReactNode` | required |
| `children` | `ReactNode` | required |
| `defaultOpen` | `boolean` | `false` |
| `open` | `boolean` | undefined (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | undefined |

`trigger` is always visible and renders inside the accessible `<button>`. `children` are the expandable body. Supply `open` + `onOpenChange` for controlled usage; omit both and use `defaultOpen` for uncontrolled usage.

## Minimal usage

```tsx
import { Accordion, AccordionItem } from '@juan-ds/earthing-design-system';

export function Example() {
  return (
    <Accordion>
      <AccordionItem trigger="Day 1 — Arrival & First Soak">
        <p>Arrive at Keflavík and take a slow drive south through lava fields…</p>
      </AccordionItem>
      <AccordionItem trigger="Day 2 — Mossy Forest Walk" defaultOpen>
        <p>A gentle two-hour trail leads through birch woodland…</p>
      </AccordionItem>
    </Accordion>
  );
}
```

## Controlled usage

```tsx
const [open, setOpen] = useState(false);

<AccordionItem
  trigger="Day 3 — Deep Rest Day"
  open={open}
  onOpenChange={setOpen}
>
  <p>No agenda. Read, sleep, journal.</p>
</AccordionItem>
```

## Trigger composition

The `trigger` prop accepts any `ReactNode`, so you can compose rich headers with numbered labels, subtitles, or icons alongside the built-in chevron:

```tsx
<AccordionItem
  trigger={
    <>
      <span className="earthing-label-stat" style={{ color: 'var(--earthing-accent-primary)' }}>01</span>
      <span>
        <span className="earthing-heading-3">Arrival & First Soak</span>
        <span className="earthing-body-small" style={{ color: 'var(--earthing-text-secondary)', display: 'block' }}>
          Hveragerði · ~3 hrs travel
        </span>
      </span>
    </>
  }
>
  …
</AccordionItem>
```

## Accessibility and states

Each item renders a native `<button>` with `aria-expanded` and `aria-controls` pointing to a `role="region"` panel labelled by the trigger. Both `id` attributes are generated via `useId` to avoid collisions. The trigger receives a visible focus ring matching the kit's `--earthing-focus-ring` token. No roving tabindex or `aria-disabled` state is implemented; disabled items should be omitted from the tree.

## Animation

Expand/collapse uses the `grid-template-rows: 0fr ↔ 1fr` technique with a CSS transition. This avoids JavaScript height measurement and works without `max-height` hacks. A `prefers-reduced-motion` override is not yet added; contribute it if motion reduction is a requirement.

## Layout and limitations

Full-width column flex; item borders are `--earthing-forest-600`. First item adds a top border. Trigger padding is `24px 0`; adjust via `className` or `style` on `AccordionItem`. No built-in max-width, animation duration token, or exclusive-open (accordion-group) mode. Build an exclusive-open wrapper at the application level using controlled `open`/`onOpenChange` props.

## Origin

Adapted from the `DayAccordion` local component built in the Figma Make itinerary prototype for the "Rest and Reset" slow-travel experience page. Itinerary-specific content (day number, image, highlights list) was stripped; `trigger` and `children` are now caller-supplied `ReactNode` values.
