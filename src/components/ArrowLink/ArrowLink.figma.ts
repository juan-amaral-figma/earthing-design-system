// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-706
// source=src/components/ArrowLink/ArrowLink.tsx
// component=ArrowLink
import figma from 'figma'

const label = figma.selectedInstance.getString('Label')

export default {
  example: figma.code`<ArrowLink href="#">${label}</ArrowLink>`,
  imports: ['import { ArrowLink } from "earthing-design-system"'],
  id: 'arrow-link',
  metadata: { nestable: true },
}
