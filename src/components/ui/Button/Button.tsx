import { Ref } from 'react'
import './Button.css'

interface ButtonProps {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  innerRef?: Ref<HTMLAnchorElement>
}

export function Button({ href, children, size = 'lg', className = '', innerRef }: ButtonProps) {
  return (
    <a
      ref={innerRef}
      href={href}
      className={`btn btn-${size} ${className}`.trim()}
    >
      {children}
    </a>
  )
}
