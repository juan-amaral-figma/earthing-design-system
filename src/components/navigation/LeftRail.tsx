import { defaultNavigation } from './navigation'
import type { NavigationItem, NavigationTheme } from './navigation'

export interface LeftRailProps {
  brand?: string
  items?: readonly NavigationItem[]
  theme?: NavigationTheme
}

export function LeftRail({
  brand = 'E',
  items = defaultNavigation,
  theme,
}: LeftRailProps) {
  return (
    <aside
      className="left-rail"
      aria-label="Navegação principal"
      data-theme={theme}
    >
      <a className="rail-brand" href="#center" aria-label="Earthing Design System">
        {brand}
      </a>
      <nav className="rail-navigation">
        {items.map((item) => (
          <a key={item.label} href={item.href} aria-label={item.label} title={item.label}>
            <svg viewBox="0 0 20 22" aria-hidden="true">
              {item.icon}
            </svg>
          </a>
        ))}
      </nav>
    </aside>
  )
}
