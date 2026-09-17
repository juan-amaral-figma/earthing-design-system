import type { ImgHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import { assetUrl } from '../../utils/assetUrl'
import './TravelImage.css'

export type TravelImageName = 'rome'|'hilo'|'nice'|'scenic-roadtrips'|'tropical-retreats'|'savannah-safaris'|'off-the-grid'|'rest-and-reset'|'the-alps'
export interface TravelImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> { name: TravelImageName; alt: string }
export function TravelImage({ name, className, alt, ...props }: TravelImageProps) { return <img src={assetUrl(`${name}.png`)} className={classNames('earthing-travel-image', name === 'rome'||name === 'hilo'||name === 'nice' ? 'earthing-travel-image--portrait' : 'earthing-travel-image--landscape', className)} alt={alt} {...props} /> }
