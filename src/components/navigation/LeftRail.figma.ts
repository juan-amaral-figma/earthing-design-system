// url=https://www.figma.com/design/eHtpixZakVs0Fg2YngCkYi/Untitled?node-id=9-28
// source=src/components/navigation/LeftRail.tsx
// component=LeftRail
import figma from 'figma'

const instance = figma.selectedInstance
const brand = instance.getString('Brand')
const theme = instance.getEnum('Theme', {
  Light: 'light',
  Dark: 'dark',
})

export default {
  example: figma.code`<LeftRail brand="${brand}" theme="${theme}" />`,
  imports: ['import { LeftRail } from "./LeftRail"'],
  id: 'navigation-left-rail',
  metadata: { nestable: true },
}
