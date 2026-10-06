# NewsletterSection

[Component overview](overview.md) · [Setup](../setup.md)

Newsletter form containing an email field.

## API

Public `NewsletterSectionProps` extends/aliases React `FormHTMLAttributes<HTMLFormElement>`. Native attributes, events, `className`, and `style` are supported; named custom props below supplement them.

| Prop | Type / valid values | Default |
|---|---|---|
| `eyebrow` | `string` | 'Ready to start exploring?' |
| `title` | `string` | 'Sign up for our newsletter' |
| `inputLabel` | `string` | 'Email address' |
| `placeholder` | `string` | 'Enter your email' |
| `headingAs` | `HeadingLevel` | 'h2' |

No required props. Native form action/method/onSubmit and other root props are forwarded. The internal TextInput is type=email, name=email, autoComplete=email with hidden label. It is uncontrolled and not required. There is no input value/onChange prop, submit button, child insertion slot, success UI, or subscription service. Do not nest forms. The example prevents navigation only; connect actual submission in the application, for example reading FormData from event.currentTarget.

## Minimal usage

```tsx
import { NewsletterSection } from '@juan-ds/earthing-design-system';

export function Example() {
  return <NewsletterSection onSubmit={(event) => { event.preventDefault(); }} />;
}
```

## Accessibility and states

Native form and heading semantics with associated hidden input label. Inherits TextInput focus treatment. There is no live region, error feedback, or explicit submit control; keyboard implicit submission alone does not provide a complete visible submission flow.

## Layout and limitations

600px width/max-width 100%, centered column with 24px gap, 80px 40px padding. At ≤600px padding becomes 56px 24px. Heading is 32px/1.2.
