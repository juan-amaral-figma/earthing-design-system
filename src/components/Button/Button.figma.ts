// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=143-151
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('Label')
const variant = instance.getEnum('Type', {
  Primary: 'primary',
  Secondary: 'secondary',
})

export default {
  example: figma.code`<Button variant="${variant}">${label}</Button>`,
  imports: ['import { Button } from "earthing-design-system"'],
  id: 'button',
  metadata: { nestable: true },
}
