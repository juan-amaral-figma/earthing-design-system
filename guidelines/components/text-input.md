# TextInput

[Component overview](overview.md) · [Setup](../setup.md)

Labeled native input.

## API

Public `TextInputProps` extends/aliases React `InputHTMLAttributes<HTMLInputElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `label` | `string` | omitted |
| `hideLabel` | `boolean` | true |
| `id` | `string` | generated with useId |

No required props in TypeScript. Provide label or aria-label/aria-labelledby for an accessible name. The wrapper is a label associated to the input id. className/style and all remaining native props target the input, not the wrapper; ref targets the input. Controlled value/onChange and uncontrolled defaultValue use native input events. Input type is not defaulted by the component (browser default is text).

## Minimal usage

```tsx
import { TextInput } from '@juan-ds/earthing-design-system';

export function Example() {
  return <TextInput label="Email address" hideLabel={false} type="email" name="email" autoComplete="email" placeholder="Enter your email" />;
}
```

## Accessibility and states

The label text is visually hidden by default and visible with hideLabel=false. Focus-visible changes the border and adds the ring; disabled dims to .55. Native required, readOnly, validation, and aria-invalid can be supplied, but no error message/state styling or helper text prop exists.

## Layout and limitations

Wrapper and input width 100%, input height 48px with pill radius; no media queries. Do not nest this label wrapper inside another label.
