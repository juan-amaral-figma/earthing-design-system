import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ variant = 'primary', className, type = 'button', ...props }, ref) {
  return <button ref={ref} type={type} className={classNames('earthing-button', `earthing-button--${variant}`, className)} {...props} />
})
