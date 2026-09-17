import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { ArrowLink } from '../ArrowLink'
import { TravelImage, type TravelImageName } from '../TravelImage'
import { classNames } from '../../utils/classNames'
import './ItineraryCard.css'

export interface ItineraryCardProps extends HTMLAttributes<HTMLElement> {
  /** Maps to the Figma `Title` text property. */
  title: string
  /** Maps to the Figma `Description` text property. */
  description: string
  /** Maps to the Figma `Link Text` text property. */
  linkText?: string
  /** Maps to the Figma `Arrow Icon` instance-swap property. */
  arrowIcon?: ReactNode
  /** Maps to the Figma `Image` instance-swap property. */
  image?: ReactNode
  /** Code-only metadata until it is exposed as a Figma property. */
  guideCount?: number
  /** Destination used by the rendered link. */
  href?: string
  /** Convenience fallback used when no custom `image` instance is supplied. */
  imageName?: TravelImageName
  /** Alternative text for the fallback `TravelImage`. */
  imageAlt?: string
}

export const ItineraryCard = forwardRef<HTMLElement, ItineraryCardProps>(
  function ItineraryCard(
    {
      title,
      description,
      linkText = 'Start exploring',
      arrowIcon,
      image,
      guideCount = 12,
      href = '#',
      imageName = 'scenic-roadtrips',
      imageAlt = '',
      className,
      ...props
    },
    ref,
  ) {
    return (
      <article
        ref={ref}
        className={classNames('earthing-itinerary-card', className)}
        {...props}
      >
        {image ?? <TravelImage name={imageName} alt={imageAlt} />}
        <div className="earthing-itinerary-card__meta">
          <div className="earthing-itinerary-card__title">
            <h3>{title}</h3>
            <span>{guideCount} Guides</span>
          </div>
          <p>{description}</p>
          <ArrowLink href={href} icon={arrowIcon}>
            {linkText}
          </ArrowLink>
        </div>
      </article>
    )
  },
)
