import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'
import './TextInput.css'
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; hideLabel?: boolean }
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput({ label, hideLabel = true, className, id, ...props }, ref) {
  const generatedId = useId()
  const inputId = id ?? `earthing-input-${generatedId.replaceAll(':', '')}`
  return <label className="earthing-input-field" htmlFor={inputId}>
    {label && <span className={hideLabel ? 'earthing-sr-only' : 'earthing-input-field__label'}>{label}</span>}
    <input ref={ref} id={inputId} className={classNames('earthing-input', className)} {...props} />
  </label>
})
