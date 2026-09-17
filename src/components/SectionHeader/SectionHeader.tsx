import type { HTMLAttributes } from 'react'
import type { HeadingLevel } from '../../types'
import { classNames } from '../../utils/classNames'
import './SectionHeader.css'
export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> { kicker?: string; title: string; headingAs?: HeadingLevel }
export function SectionHeader({ kicker = 'SECTION KICKER', title, headingAs: Heading = 'h2', className, ...props }: SectionHeaderProps) {
  return <div className={classNames('earthing-section-header', className)} {...props}><span>{kicker}</span><Heading>{title}</Heading></div>
}
