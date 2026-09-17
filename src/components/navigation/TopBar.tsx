import { defaultNavigation } from './navigation'
import type { NavigationItem, NavigationTheme } from './navigation'

export interface TopBarProps {
  brand?: string
  items?: readonly NavigationItem[]
  theme?: NavigationTheme
}

export function TopBar({
  brand = 'Earthing Design System',
  items = defaultNavigation,
  theme,
}: TopBarProps) {
  return (
    <header className="top-bar" data-theme={theme}>
      <a className="brand" href="#center">
        <span className="brand-mark" aria-hidden="true">E</span>
        <span>{brand}</span>
      </a>
      <nav aria-label="Navegação principal">
        {items.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}
