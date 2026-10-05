// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-733
// source=src/components/CtaBanner/CtaBanner.tsx
// component=CtaBanner
import figma from 'figma'

const title = figma.selectedInstance.getString('Title')

export default {
  example: figma.code`<CtaBanner title="${title}" />`,
  imports: ['import { CtaBanner } from "earthing-design-system"'],
  id: 'cta-banner',
  metadata: { nestable: true },
}
