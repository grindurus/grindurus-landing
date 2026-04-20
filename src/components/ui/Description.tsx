interface DescriptionProps {
  children: React.ReactNode
  className?: string
}

export function Description({ children, className } : DescriptionProps) {
  return (
    <div className={`font-mono text-white/60 leading-relaxed ${className ?? ""}`}>
      {children}
    </div>
  )
}

// mb-10 flex-1