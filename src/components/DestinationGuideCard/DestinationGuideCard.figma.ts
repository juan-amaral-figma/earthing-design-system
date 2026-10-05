// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-709
// source=src/components/DestinationGuideCard/DestinationGuideCard.tsx
// component=DestinationGuideCard
import figma from 'figma'

const instance = figma.selectedInstance
const destination = instance.getString('Destination')
const description = instance.getString('Description')

export default {
  example: figma.code`<DestinationGuideCard destination="${destination}" description="${description}" />`,
  imports: ['import { DestinationGuideCard } from "earthing-design-system"'],
  id: 'destination-guide-card',
  metadata: { nestable: true },
}
