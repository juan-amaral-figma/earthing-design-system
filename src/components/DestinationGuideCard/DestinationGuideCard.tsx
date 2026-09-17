import type { HTMLAttributes } from 'react'
import { Tag } from '../Tag'
import { classNames } from '../../utils/classNames'
import './DestinationGuideCard.css'
export interface DestinationGuideCardProps extends HTMLAttributes<HTMLElement> { destination: string; description: string; tags?: string[]; imageSrc?: string }
export function DestinationGuideCard({ destination, description, tags = ['Cultural Guide','Italy'], imageSrc, className, style, ...props }: DestinationGuideCardProps) {
  return <article className={classNames('earthing-destination-card', className)} style={{...style, ...(imageSrc ? { backgroundImage:`linear-gradient(180deg, rgb(9 11 9 / 8%) 0%, rgb(9 11 9 / 70%) 100%), url(${imageSrc})` } : {})}} {...props}>
    <div className="earthing-destination-card__tags">{tags.map(tag=><Tag key={tag}>{tag}</Tag>)}</div>
    <div><h3>{destination}</h3><p>{description}</p></div>
  </article>
}
