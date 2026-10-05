// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-704
// source=src/components/SectionHeader/SectionHeader.tsx
// component=SectionHeader
import figma from 'figma'

const instance = figma.selectedInstance
const title = instance.getString('Title')
const kicker = instance.getString('Kicker')

export default {
  example: figma.code`<SectionHeader kicker="${kicker}" title="${title}" />`,
  imports: ['import { SectionHeader } from "earthing-design-system"'],
  id: 'section-header',
  metadata: { nestable: true },
}
