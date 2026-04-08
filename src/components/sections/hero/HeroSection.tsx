import { useRef } from 'react'
import { APP_URL } from '../../../config'
import { useParticles } from '../../../hooks/useParticles'
import { Button } from '../../ui/Button/Button'
import { OrbitRing } from './OrbitRing'
import { ParticleLayer } from './ParticleLayer'
import logo from '@/assets/logo.png'
import './HeroSection.css'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { particles } = useParticles({ containerRef, targetRef: buttonRef })

  return (
    <section className="hero-section" ref={containerRef}>
      <OrbitRing />

      <div className="hero-bg">
        <img src={logo} alt="" className="hero-bg-logo" aria-hidden />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span>GrindURUS</span>
          <span>Automated Market Taker</span>
        </h1>
        <p className="hero-subtitle">
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
