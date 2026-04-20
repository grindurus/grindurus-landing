import { useEffect, useRef, useState } from 'react'
import { APP_URL } from '../../../config'
import { Button } from "@/components/ui/Button"
import { Title } from '@/components/ui/Title'
import { Description } from '@/components/ui/Description'

const YIELD_MIN = 10
const YIELD_MAX = 60
const HOLD_MS = 3000
const RECALC_MS = 300

function AnimatedProjectedYield() {
  const [value, setValue] = useState(() => YIELD_MIN + Math.random() * (YIELD_MAX - YIELD_MIN))
  const timeoutRef = useRef<number | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(35)
      return
    }

    let cancelled = false
    const randomBetween = () => YIELD_MIN + Math.random() * (YIELD_MAX - YIELD_MIN)

    const clearTimers = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      cancelAnimationFrame(rafRef.current)
    }

    const scheduleHoldThenRecalc = (heldValue: number) => {
      setValue(heldValue)
      timeoutRef.current = window.setTimeout(() => {
        if (cancelled) return
        startRecalc()
      }, HOLD_MS)
    }

    const startRecalc = () => {
      const start = performance.now()
      const tick = (now: number) => {
        if (cancelled) return
        const elapsed = now - start
        if (elapsed >= RECALC_MS) {
          scheduleHoldThenRecalc(randomBetween())
          return
        }
        setValue(randomBetween())
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    timeoutRef.current = window.setTimeout(() => {
      if (cancelled) return
      startRecalc()
    }, HOLD_MS)

    return () => {
      cancelled = true
      clearTimers()
    }
  }, [])

  return (
    <span className="block font-mono font-black text-4xl text-white tabular-nums drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]">
      +{value.toFixed(1)}%
    </span>
  )
}

export function CalculatorCtaSection() {
  return (
    <section className="w-full py-14 md:py-16 bg-black border-b border-black/10 dark:border-white/[0.08] relative">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">

          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <Title>
              Backtest any asset yourself <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-[#ff1493]">
                for just $1
              </span>
            </Title>
            <Description className="mb-10 max-w-[500px]">
              Curious how much your favorite cryptocurrency fluctuates? See the true power of automated market-taking.
              The calculator reveals exactly how volatile an asset is and exactly how much our infrastructure could earn from it.
            </Description>

            <Button href={`${APP_URL}/calculator`} size="lg">
              Launch Volatility Calculator
            </Button>
          </div>

          {/* Right Graphic: Mock Calculator Widget */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[450px] flex items-center justify-center">
            {/* Mock UI Panel */}
            <div className="relative w-full max-w-[380px] bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl z-10">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <span className="font-mono text-xs text-white/40 tracking-wider">CALC_ENGINE_V2</span>
              </div>

              <div className="space-y-4 mb-8">
                {/* Mock Input 1 */}
                <div className="bg-black border border-white/5 rounded-xl p-4 flex justify-between items-center group hover:border-brand-pink/30 transition-colors">
                  <span className="font-sans text-sm text-white/50">Asset Pair</span>
                  <span className="font-mono font-bold text-white group-hover:text-brand-pink transition-colors">SOL / USDC</span>
                </div>
                {/* Mock Input 2 */}
                <div className="bg-black border border-white/5 rounded-xl p-4 flex justify-between items-center group hover:border-brand-pink/30 transition-colors">
                  <span className="font-sans text-sm text-white/50">Timeframe</span>
                  <span className="font-mono font-bold text-white">30 Days</span>
                </div>
                {/* Mock Input 3 */}
                <div className="bg-black border border-white/5 rounded-xl p-4 flex justify-between items-center gap-4 relative overflow-hidden">
                  <span className="font-sans text-sm text-white/50 shrink-0">Initial Capital</span>
                  <div className="font-mono font-bold text-white text-right leading-snug min-w-0">
                    <span className="block">25 SOL</span>
                    <span className="block text-white/70 text-[0.8125rem] font-semibold">5,000 USDC</span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-pink to-transparent w-full"></div>
                </div>
              </div>

              {/* Output Highlight */}
              <div className="relative bg-gradient-to-tr from-brand-pink/20 to-black border border-brand-pink/30 rounded-xl p-6 text-center overflow-hidden">
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-[shimmer_3s_infinite]"></div>
                <span className="block font-sans text-xs text-brand-pink uppercase tracking-widest font-bold mb-2">
                  Projected Annual Yield
                </span>
                <AnimatedProjectedYield />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
