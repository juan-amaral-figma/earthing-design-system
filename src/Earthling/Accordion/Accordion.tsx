import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useId,
  useState,
} from 'react';
import './Accordion.css';

// ---------------------------------------------------------------------------
// AccordionItem
// ---------------------------------------------------------------------------

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Always-visible header content — string or any ReactNode. */
  trigger: ReactNode;
  /** Expandable body content. */
  children: ReactNode;
  /** Uncontrolled initial open state. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Controlled open state. Must be paired with `onOpenChange`. */
  open?: boolean;
  /** Called when the user toggles the item. */
  onOpenChange?: (open: boolean) => void;
}

export function AccordionItem({
  trigger,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className,
  ...rest
}: AccordionItemProps) {
  const id = useId();
  const panelId = `earthing-accordion-panel-${id}`;
  const triggerId = `earthing-accordion-trigger-${id}`;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const toggle = useCallback(() => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  }, [isControlled, isOpen, onOpenChange]);

  return (
    <div
      {...rest}
      className={['earthing-accordion-item', className].filter(Boolean).join(' ')}
    >
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        className="earthing-accordion-trigger"
      >
        <span className="earthing-accordion-trigger-content">{trigger}</span>
        <svg
          className="earthing-accordion-chevron"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          data-open={isOpen}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="earthing-accordion-panel"
        data-open={isOpen}
      >
        <div className="earthing-accordion-panel-inner">{children}</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Accordion (container)
// ---------------------------------------------------------------------------

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Accordion({ children, className, ...rest }: AccordionProps) {
  return (
    <div
      {...rest}
      className={['earthing-accordion', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}
