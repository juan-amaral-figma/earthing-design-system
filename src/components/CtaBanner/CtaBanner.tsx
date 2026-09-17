import { useId, type FormHTMLAttributes } from 'react'
import type { HeadingLevel } from '../../types'
import { Icon } from '../Icon'
import { classNames } from '../../utils/classNames'
import './CtaBanner.css'
export interface CtaBannerProps extends FormHTMLAttributes<HTMLFormElement> { title?: string; description?: string; placeholder?: string; inputLabel?: string; submitLabel?: string; headingAs?: HeadingLevel; inputId?: string }
export function CtaBanner({ title = 'The world is your oyster, where would you like to go?', description = 'Tell us your mood—like “cozy cabin in misty woods”—and we’ll draft a matching journey.', placeholder = 'Speak or type your destination...', inputLabel = 'Describe your destination', submitLabel = 'Submit destination', headingAs: Heading = 'h2', inputId, className, ...props }: CtaBannerProps) {
  const generatedId = useId()
  const destinationInputId = inputId ?? `earthing-destination-${generatedId.replaceAll(':', '')}`
  return <form className={classNames('earthing-cta-banner', className)} {...props}>
    <div className="earthing-cta-banner__content"><Heading>{title}</Heading><p>{description}</p></div>
    <div className="earthing-cta-banner__search"><label className="earthing-sr-only" htmlFor={destinationInputId}>{inputLabel}</label><Icon name="microphone" /><input id={destinationInputId} name="destination" placeholder={placeholder}/><button type="submit" aria-label={submitLabel}><Icon name="arrow-right" /></button></div>
  </form>
}
