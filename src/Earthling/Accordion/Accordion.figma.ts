// url=https://www.figma.com/design/iSAyrPTYN18NDK6embp4pX/Earthing?node-id=TODO
// source=src/Earthling/Accordion/Accordion.tsx
// component=AccordionItem
import figma from 'figma'

const instance = figma.selectedInstance
const trigger = instance.getString('Trigger')
const open = instance.getBoolean('Open')
const triggerIcon = instance.getInstanceSwap('Trigger Icon')

const triggerIconCode = triggerIcon?.type === 'INSTANCE' ? triggerIcon.executeTemplate().example : undefined

export default {
  example: figma.code`
    <Accordion>
      <AccordionItem
        trigger=${triggerIconCode
          ? figma.code`{
          <span style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            ${trigger}
            {${triggerIconCode}}
          </span>
        }`
          : figma.code`"${trigger}"`}
        ${open ? figma.code`defaultOpen` : ''}
      >
        {/* accordion body content */}
      </AccordionItem>
    </Accordion>
  `,
  imports: ['import { Accordion, AccordionItem } from "earthing-design-system"'],
  id: 'accordion-item',
  metadata: { nestable: true },
}
