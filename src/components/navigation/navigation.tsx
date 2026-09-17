import type { ReactNode } from 'react'

export type NavigationTheme = 'light' | 'dark'

export interface NavigationItem {
  label: string
  href: string
  icon: ReactNode
}

export const defaultNavigation: readonly NavigationItem[] = [
  {
    label: 'Início',
    href: '#center',
    icon: (
      <path d="M3 10.5 10 4l7 6.5V18a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1z" />
    ),
  },
  {
    label: 'Documentação',
    href: '#docs',
    icon: (
      <path d="M5 3h8l3 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7 1v3h3M7 11h5M7 15h6" />
    ),
  },
  {
    label: 'Comunidade',
    href: '#social',
    icon: (
      <path d="M7.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.75-.5a2.5 2.5 0 1 0 0-5M2.5 18v-1.5A3.5 3.5 0 0 1 6 13h3a3.5 3.5 0 0 1 3.5 3.5V18m.5-5h.5a3 3 0 0 1 3 3v2" />
    ),
  },
]
