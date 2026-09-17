import type { FormHTMLAttributes } from 'react'
import type { HeadingLevel } from '../../types'
import { TextInput } from '../TextInput'
import { classNames } from '../../utils/classNames'
import './NewsletterSection.css'
export interface NewsletterSectionProps extends FormHTMLAttributes<HTMLFormElement> { eyebrow?: string; title?: string; inputLabel?: string; placeholder?: string; headingAs?: HeadingLevel }
export function NewsletterSection({ eyebrow = 'Ready to start exploring?', title = 'Sign up for our newsletter', inputLabel = 'Email address', placeholder = 'Enter your email', headingAs: Heading = 'h2', className, ...props }: NewsletterSectionProps) {
  return <form className={classNames('earthing-newsletter', className)} {...props}><span>{eyebrow}</span><Heading>{title}</Heading><TextInput type="email" name="email" autoComplete="email" label={inputLabel} placeholder={placeholder} /></form>
}
