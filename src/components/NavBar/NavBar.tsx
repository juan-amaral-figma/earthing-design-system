import type { HTMLAttributes } from 'react'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'
import { classNames } from '../../utils/classNames'
import './NavBar.css'
export interface NavigationItem { label: string; href: string }
export interface NavBarProps extends HTMLAttributes<HTMLElement> { items?: NavigationItem[]; homeHref?: string; signInHref?: string; signInLabel?: string; joinHref?: string; joinLabel?: string; onJoin?: () => void }
const defaultItems: NavigationItem[] = [{label:'Destination Guides',href:'#'},{label:'Explore Itineraries',href:'#'},{label:'Journal',href:'#'},{label:'About Us',href:'#'}]
export function NavBar({ items = defaultItems, homeHref = '#', signInHref = '#', signInLabel = 'Sign In', joinHref = '#', joinLabel = 'Join Earthling', onJoin, className, ...props }: NavBarProps) {
  const handleJoin = onJoin ?? (() => {
    if (typeof window !== 'undefined') window.location.assign(joinHref)
  })
  return <header className={classNames('earthing-nav', className)} {...props}><a className="earthing-nav__logo" href={homeHref} aria-label="Earthling home"><Logo /></a><nav aria-label="Main navigation">{items.map(item=><NavLink key={`${item.label}-${item.href}`} href={item.href}>{item.label}</NavLink>)}</nav><div className="earthing-nav__actions"><NavLink href={signInHref}>{signInLabel}</NavLink><Button onClick={handleJoin}>{joinLabel}</Button></div></header>
}
