import { useRef } from 'react'
import { APP_URL } from '../../../config'
import { useParticles } from '../../../hooks/useParticles'
import { Button } from '../../ui/Button'
import { OrbitRing } from './OrbitRing'
import { ParticleLayer } from './ParticleLayer'
import logo from '@/assets/logo.png'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { particles } = useParticles({ containerRef, targetRef: buttonRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <OrbitRing />

      {/* Watermark background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logo}
          alt=""
          aria-hidden
          className="w-[min(40vw,400px)] h-auto opacity-[0.12] object-contain"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-[720px] px-8">
        <h1 className="font-mono font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight flex flex-col gap-1 mb-6">
          <span className="text-brand-pink dark:text-brand-pink">GrindURUS</span>
          <span className="text-[0.85em] font-semibold text-white dark:text-white">Automated Market Taker</span>
        </h1>
        <p className="font-mono text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.7] text-white/85 dark:text-white/85 mb-8">
          multichain price volatility harvester protocol
        </p>
        <Button href={`${APP_URL}/grinders`} size="lg" innerRef={buttonRef}>
          Open App
        </Button>
      </div>

      <ParticleLayer particles={particles} />
    </section>
  )
}
