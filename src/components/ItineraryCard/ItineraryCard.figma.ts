// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=31-719
// source=src/components/ItineraryCard/ItineraryCard.tsx
// component=ItineraryCard
import figma from 'figma'

const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')
const linkText = instance.getString('Link Text')
const arrowIcon = instance.getInstanceSwap('Arrow Icon')
const image = instance.getInstanceSwap('Image')

const arrowIconCode = arrowIcon?.type === 'INSTANCE' ? arrowIcon.executeTemplate().example : undefined
const imageCode = image?.type === 'INSTANCE' ? image.executeTemplate().example : undefined

export default {
  example: figma.code`
    <ItineraryCard
      title="${title}"
      description="${description}"
      linkText="${linkText}"
      ${arrowIconCode ? figma.code`arrowIcon={${arrowIconCode}}` : ''}
      ${imageCode ? figma.code`image={${imageCode}}` : ''}
    />
  `,
  imports: ['import { ItineraryCard } from "earthing-design-system"'],
  id: 'itinerary-card',
  metadata: { nestable: true },
}
