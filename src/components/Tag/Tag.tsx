import type { HTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import './Tag.css'
export type TagProps = HTMLAttributes<HTMLSpanElement>
export function Tag({ className, ...props }: TagProps) { return <span className={classNames('earthing-tag', className)} {...props} /> }
