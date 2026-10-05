// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-698
// source=src/components/Tag/Tag.tsx
// component=Tag
import figma from 'figma'

const label = figma.selectedInstance.getString('Label')

export default {
  example: figma.code`<Tag>${label}</Tag>`,
  imports: ['import { Tag } from "earthing-design-system"'],
  id: 'tag',
  metadata: { nestable: true },
}
