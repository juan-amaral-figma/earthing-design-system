// url=https://www.figma.com/design/eHtpixZakVs0Fg2YngCkYi/Untitled?node-id=8-23
// source=src/components/navigation/TopBar.tsx
// component=TopBar
import figma from 'figma'

const instance = figma.selectedInstance
const brand = instance.getString('Brand')
const item1 = instance.getString('Item 1')
const item2 = instance.getString('Item 2')
const item3 = instance.getString('Item 3')
const theme = instance.getEnum('Theme', {
  Light: 'light',
  Dark: 'dark',
})

export default {
  example: figma.code`
    <TopBar
      brand="${brand}"
      theme="${theme}"
      items={[
        { ...defaultNavigation[0], label: "${item1}" },
        { ...defaultNavigation[1], label: "${item2}" },
        { ...defaultNavigation[2], label: "${item3}" },
      ]}
    />
  `,
  imports: [
    'import { TopBar } from "./TopBar"',
    'import { defaultNavigation } from "./navigation"',
  ],
  id: 'navigation-top-bar',
  metadata: { nestable: true },
}
