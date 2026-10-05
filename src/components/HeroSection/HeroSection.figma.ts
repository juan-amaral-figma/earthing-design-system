// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=101-108
// source=src/components/HeroSection/HeroSection.tsx
// component=HeroSection
import figma from 'figma'

const instance = figma.selectedInstance
const title = instance.getString('Title')
const subtitle = instance.getString('Subtitle')

export default {
  example: figma.code`<HeroSection title="${title}" subtitle="${subtitle}" />`,
  imports: ['import { HeroSection } from "earthing-design-system"'],
  id: 'hero-section',
  metadata: { nestable: true },
}
