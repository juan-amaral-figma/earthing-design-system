# CtaBanner

[Component overview](overview.md) · [Setup](../setup.md)

Destination prompt form with a submit arrow.

## API

Public `CtaBannerProps` extends/aliases React `FormHTMLAttributes<HTMLFormElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `title` | `string` | 'The world is your oyster, where would you like to go?' |
| `description` | `string` | Tell us your mood—like “cozy cabin in misty woods”—and we’ll draft a matching journey. |
| `placeholder` | `string` | 'Speak or type your destination...' |
| `inputLabel` | `string` | 'Describe your destination' |
| `submitLabel` | `string` | 'Submit destination' |
| `headingAs` | `HeadingLevel` | 'h2' |
| `inputId` | `string` | generated with useId |

No required props. Root native form props include onSubmit/action/method. Internal uncontrolled text input has name=destination and associated hidden label; read FormData on submit. inputId affects that input, while native id targets the form. No inner value/onChange/required/disabled API, children insertion slot, or destination generation service. Do not nest forms. The microphone is decorative; no speech input is implemented despite placeholder wording.

## Minimal usage

```tsx
import { CtaBanner } from '@juan-ds/earthing-design-system';

export function Example() {
  return <CtaBanner onSubmit={(event) => { event.preventDefault(); }} />;
}
```

## Accessibility and states

Heading, associated label, decorative icons, and native type=submit button with aria-label=submitLabel. Search container uses focus-within ring. No error/success/loading UI or independent button focus-visible style. Fixed text/search colors limit dark theme adaptation.

## Layout and limitations

Horizontal content/search at desktop (560px/max 52% and 480px/max 46%); 56px padding, 40px gap, min-height 244px. At ≤900px stacks, children width 100%, padding 40px, heading 40px. At ≤560px padding 32px 24px, heading 34px; desktop heading 48px/1.1.
