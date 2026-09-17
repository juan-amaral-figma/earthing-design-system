import type { HTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import { assetUrl } from '../../utils/assetUrl'
import './Logo.css'

export interface LogoProps extends HTMLAttributes<HTMLDivElement> { compact?: boolean; label?: string }
export function Logo({ compact = false, label = 'Earthling', className, ...props }: LogoProps) {
  return <div className={classNames('earthing-logo', compact && 'earthing-logo--compact', className)} {...props}>
    <img src={assetUrl(compact ? 'logo-footer.svg' : 'logo.svg')} alt="" />
    <span>{label}</span>
  </div>
}
