// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-700
// source=src/components/TextInput/TextInput.tsx
// component=TextInput
import figma from 'figma'

const placeholder = figma.selectedInstance.getString('Placeholder')

export default {
  example: figma.code`<TextInput placeholder="${placeholder}" />`,
  imports: ['import { TextInput } from "earthing-design-system"'],
  id: 'text-input',
  metadata: { nestable: true },
}
