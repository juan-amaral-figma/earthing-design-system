import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { Icon } from '../Icon'
import { classNames } from '../../utils/classNames'
import './ArrowLink.css'
export interface ArrowLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode
}

export const ArrowLink = forwardRef<HTMLAnchorElement, ArrowLinkProps>(function ArrowLink(
  { className, children, icon = <Icon name="arrow-right" />, ...props },
  ref,
) {
  return <a ref={ref} className={classNames('earthing-arrow-link', className)} {...props}><span>{children}</span>{icon}</a>
})
