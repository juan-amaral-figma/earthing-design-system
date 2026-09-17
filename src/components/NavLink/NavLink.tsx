import { forwardRef, type AnchorHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import './NavLink.css'
export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink({ className, ...props }, ref) { return <a ref={ref} className={classNames('earthing-nav-link', className)} {...props} /> })
