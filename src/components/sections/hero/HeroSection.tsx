import { APP_URL } from '../../../config'
import { Button } from '../../ui/Button'
import { OrbitRing } from './OrbitRing'

export function HeroSection() {
  return (
    /*
     * The section is the coordinate space for the animation.
     * – overflow-hidden: keeps any icon that briefly overshoots clipped
     * – min-h-[90vh]:    tall enough that the lemniscate has room to breathe on mobile too
     */
    <section
      className="relative w-full min-h-[90vh] bg-black border-b border-black/10 dark:border-white/[0.08] flex items-center justify-center overflow-hidden"
    >
      {/* ── Background animation layer (opacity handled inside OrbitRing) ── */}
      <OrbitRing />

      {/* ── Hero text – sits above animation via z-10 ── */}
      <div className="max-w-[1280px] mx-auto px-8 w-full flex justify-center">
        <div className="relative z-10 text-center max-w-[800px] w-full">
        <h1 className="font-mono font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.2]">
          <span className="block text-brand-pink text-[1.2em] [text-shadow:0_0_20px_black]">GrindURUS</span>
          <span className="block text-white dark:text-white text-[0.6em] [text-shadow:0_0_20px_black] pb-6">
            Automated Market Taker
          </span>
        </h1>

        <p className="
          font-mono text-[clamp(0.95rem,2vw,1.1rem)] leading-[1.7]
          text-white/75 dark:text-white/80 mb-10 max-w-[520px] mx-auto [text-shadow:0_0_20px_black]">
          Multichain price volatility harvester protocol
        </p>

        <Button href={`${APP_URL}/grinders`} size="md">
          Open App
        </Button>
        </div>
      </div>
    </section>
  )
}
