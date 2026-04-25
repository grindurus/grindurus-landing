import { useState } from 'react'
import { APP_URL } from '../../../config'
import tokenUsdc from '@/assets/token-usdc.svg'
import { Title } from "@/components/ui/Title"
import { Description } from '@/components/ui/Description'
import { Button } from '@/components/ui/Button'

const SOL_TOKEN_IMG =
  'https://assets.coingecko.com/coins/images/4128/small/solana.png'

const GRAI_CHAINS = [
  { id: 'solana', name: 'Solana' },
  { id: 'arbitrum', name: 'Arbitrum' },
  { id: 'ethereum', name: 'Ethereum' },
] as const

/** Orbit radius in px — slightly outside the GRAI disc (h-32 → r≈64) */
const GRAI_ORBIT_R = 70

const graiOrbitElectrons = [
  { angleDeg: 0, img: tokenUsdc as string, glowDelayClass: '' },
  { angleDeg: 180, img: SOL_TOKEN_IMG, glowDelayClass: '[animation-delay:2.1s]' },
] as const

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GraiProductSection() {
  const [chainIdx, setChainIdx] = useState(0)
  const active = GRAI_CHAINS[chainIdx]

  const goPrev = () => {
    setChainIdx((i) => (i - 1 + GRAI_CHAINS.length) % GRAI_CHAINS.length)
  }

  const goNext = () => {
    setChainIdx((i) => (i + 1) % GRAI_CHAINS.length)
  }

  return (
    <section className="relative w-full py-6 md:py-12 lg:py-16 bg-black">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8 max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Left: Text Content */}
        <div className="flex min-w-0 max-w-full flex-col items-start text-left">
          <Title className="flex flex-col gap-2">
            <div className="text-white">Onchain Foundation.</div>
            <div className="text-brand-pink">Tokenized Volatility.</div>
          </Title>
          <Description className="mb-10">
            Earn from volatility without trading.<br></br>
            GRAI gives you passive access to the GrindURUS strategy.
          </Description>
          <Button href={`${APP_URL}/grinders`} size="md">
            Explore GRAI
          </Button>
        </div>

        {/* Right: chain carousel + GRAI */}
        <div className="relative flex min-h-[340px] w-full md:min-w-[400px] md:max-w-[440px] flex-col items-center justify-center gap-5">
          <div className="flex w-full max-w-[380px] shrink-0 flex-col items-center px-2">
            <p className="mb-2 text-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
              Network
            </p>
            <div
              className="flex w-full items-center gap-1.5"
              role="group"
              aria-label="Network carousel"
            >
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous network"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-colors hover:border-brand-pink/40 hover:bg-white/[0.1] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-center">
                <span
                  key={active.id}
                  className="font-mono text-sm font-bold uppercase tracking-wide text-transparent bg-clip-text sm:text-base"
                  style={{ backgroundImage: 'linear-gradient(90deg, #ff69b4, #ff1493)' }}
                >
                  {active.name}
                </span>
              </div>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next network"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-colors hover:border-brand-pink/40 hover:bg-white/[0.1] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[260px] w-full flex-1 items-center justify-center">
            <div className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-white/10 flex items-center justify-center
                          shadow-[inset_0_0_80px_rgba(255,105,180,0.1),0_0_120px_rgba(255,105,180,0.15)] animate-[spin_30s_linear_infinite]">
              <div className="w-[80%] h-[80%] rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]"></div>
            </div>

            <div className="relative z-10 flex h-[220px] w-[220px] shrink-0 items-center justify-center overflow-visible">
              {/*
              2D orbit: spinner shares the exact same flex center as the GRAI badge (no inline transform
              fighting Tailwind translate). Electrons on opposite sides of a circle — true closed path
              around the nucleus.
            */}
              <div
                className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center"
                aria-hidden
              >
                <div className="relative h-[156px] w-[156px] animate-[spin_26s_linear_infinite]">
                  {graiOrbitElectrons.map(({ angleDeg, img, glowDelayClass }) => (
                    <div
                      key={angleDeg}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateY(-${GRAI_ORBIT_R}px)`,
                      }}
                    >
                      <div className="flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center animate-[spin_26s_linear_infinite_reverse]">
                        <img
                          src={img}
                          alt=""
                          width={36}
                          height={36}
                          className={`h-9 w-9 object-contain animate-grai-token-glow ${glowDelayClass}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="relative z-10 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-[3px] border-white/10 bg-black
                          shadow-[0_0_60px_rgba(0,0,0,0.8),inset_0_4px_20px_rgba(255,255,255,0.1)]"
              >
                <span
                  className="font-mono font-black text-4xl text-transparent bg-clip-text leading-none"
                  style={{ backgroundImage: 'linear-gradient(135deg, #fff, #ff69b4)' }}
                >
                  GRAI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
