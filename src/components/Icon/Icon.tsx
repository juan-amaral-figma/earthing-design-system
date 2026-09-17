import type { HTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import { assetUrl } from '../../utils/assetUrl'
import './Icon.css'

export type IconName = 'arrow-right' | 'chevron-right' | 'double-arrow' | 'microphone'
export interface IconProps extends HTMLAttributes<HTMLSpanElement> { name: IconName; decorative?: boolean }

export function Icon({ name, decorative = true, className, ...props }: IconProps) {
  const accessibilityProps = decorative
    ? { 'aria-hidden': true as const }
    : { role: 'img', 'aria-label': props['aria-label'] ?? name.replaceAll('-', ' ') }
  if (name === 'microphone') return <span className={classNames('earthing-icon', className)} {...props} {...accessibilityProps}><img src={assetUrl('microphone.svg')} alt="" /></span>
  const glyph = name === 'arrow-right' ? '→' : name === 'chevron-right' ? '›' : '»'
  return <span className={classNames('earthing-icon', `earthing-icon--${name}`, className)} {...props} {...accessibilityProps}>{glyph}</span>
}
