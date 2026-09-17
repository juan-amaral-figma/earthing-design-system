import type { HTMLAttributes } from 'react'
import type { HeadingLevel } from '../../types'
import { classNames } from '../../utils/classNames'
import './HeroSection.css'
export interface HeroSectionProps extends HTMLAttributes<HTMLElement> { title?: string; subtitle?: string; headingAs?: HeadingLevel }
export function HeroSection({ title = 'Find your next slow-paced, mindful adventure', subtitle = 'Expertly curated destination guides focusing on slow travel, local culture, architectural treasures, and remote landscape itineraries.', headingAs: Heading = 'h1', className, ...props }: HeroSectionProps) { return <section className={classNames('earthing-hero-section', className)} {...props}><Heading>{title}</Heading><p>{subtitle}</p></section> }
