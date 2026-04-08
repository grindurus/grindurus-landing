import { Ref } from 'react'

interface ButtonProps {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  innerRef?: Ref<HTMLAnchorElement>
}

const sizeClasses = {
  sm: 'text-sm px-6 py-2.5',
  md: 'text-[0.95rem] px-8 py-3.5',
  lg: 'text-base px-10 py-4',
}

export function Button({ href, children, size = 'lg', className = '', innerRef }: ButtonProps) {
  return (
    <a
      ref={innerRef}
      href={href}
      className={[
        'inline-block no-underline font-mono font-bold text-white rounded-xl',
        'transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,105,180,0.5)] hover:text-white',
        sizeClasses[size],
        className,
      ].join(' ')}
      style={{ background: 'linear-gradient(90deg,#ff69b4,#ff1493)' }}
    >
      {children}
    </a>
  )
}
