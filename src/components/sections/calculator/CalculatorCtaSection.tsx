import { useEffect, useRef, useState } from 'react'
import { APP_URL } from '../../../config'
import { Button } from "@/components/ui/Button"
import { Title } from '@/components/ui/Title'
import { Description } from '@/components/ui/Description'

const YIELD_MIN = 10
const YIELD_MAX = 60
const INITIAL_USDC = 5_000
const HOLD_MS = 3000
const RECALC_MS = 300

function useAnimatedYield() {
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

  return value
}

function OutputStats() {
  const yield_ = useAnimatedYield()
  const finalUsdc = INITIAL_USDC * (1 + yield_ / 100)
  const finalFormatted = finalUsdc.toLocaleString('en-US', { maximumFractionDigits: 0 })

  return (
    <div className="bg-black border border-white/10 rounded-xl px-4 py-4 flex items-stretch divide-x divide-white/10">
      {/* Yield % */}
      <div className="flex-1 flex flex-col items-center text-center pr-4">
        <span className="font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-1.5">
          Annual Yield
        </span>
        <span className="font-mono font-black text-2xl text-[#4ade80] tabular-nums leading-none">
          +{yield_.toFixed(1)}%
        </span>
      </div>
      {/* Final amount */}
      <div className="flex-1 flex flex-col items-center text-center pl-4">
        <span className="font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-1.5">
          Final Amount
        </span>
        <span className="font-mono font-black text-2xl text-white tabular-nums leading-none">
          ${finalFormatted}
        </span>
      </div>
    </div>
  )
}

export function CalculatorCtaSection() {
  return (
    <section className="w-full py-12 md:py-14 lg:py-16 bg-black relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

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
              Launch Calculator
            </Button>
          </div>

          {/* Right Graphic: Mock Calculator Widget */}
          <div className="relative flex items-center justify-center">
            <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-6 w-full">

              {/* Panel header */}
              <div className="flex items-center justify-between">
                <span className="block font-sans text-xs text-white/40 uppercase tracking-widest font-bold">
                  Calculator
                </span>
                <span className="font-mono text-xs text-white/25 tracking-wider">CALC_ENGINE_V2</span>
              </div>

              {/* Asset Pair */}
              <div>
                <span className="block font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-2">
                  Asset Pair
                </span>
                <div className="bg-black border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between hover:border-brand-pink/30 transition-colors duration-150 group">
                  <span className="font-sans text-sm text-white/50">Pair</span>
                  <span className="font-mono font-bold text-white group-hover:text-brand-pink transition-colors duration-150">SOL / USDC</span>
                </div>
              </div>

              {/* Timeframe */}
              <div>
                <span className="block font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-2">
                  Timeframe
                </span>
                <div className="bg-black border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between hover:border-brand-pink/30 transition-colors duration-150 group">
                  <span className="font-sans text-sm text-white/50">Period</span>
                  <span className="font-mono font-bold text-white group-hover:text-brand-pink transition-colors duration-150">30 Days</span>
                </div>
              </div>

              {/* Initial Capital */}
              <div>
                <span className="block font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-2">
                  Initial Capital
                </span>
                <div className="bg-black border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between relative overflow-hidden">
                  <span className="font-sans text-sm text-white/50">Amount</span>
                  <div className="font-mono font-bold text-white text-right leading-snug">
                    <span className="block">25 SOL</span>
                    <span className="block text-white/50 text-[0.8125rem] font-semibold">$5,000</span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-pink to-transparent w-full"></div>
                </div>
              </div>

              {/* Output Stats */}
              <div>
                <span className="block font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-2">
                  Projected Results
                </span>
                <OutputStats />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
