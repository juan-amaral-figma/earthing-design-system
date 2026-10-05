// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-702
// source=src/components/NavLink/NavLink.tsx
// component=NavLink
import figma from 'figma'

const label = figma.selectedInstance.getString('Label')

export default {
  example: figma.code`<NavLink href="#">${label}</NavLink>`,
  imports: ['import { NavLink } from "earthing-design-system"'],
  id: 'nav-link',
  metadata: { nestable: true },
}
