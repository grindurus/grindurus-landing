import { useState } from 'react'
import { APP_URL } from '../../../config'
import { Button } from '../../ui/Button'
import bullSell from '@/assets/bull-sell.png'
import bullIllustration from '@/assets/bull-illustration.png'

type MintMode = 'buy' | 'sell'
type ToggleGroup = 0 | 1

export function StrategySection() {
  const [mintMode, setMintMode] = useState<MintMode>('buy')
  const [activeToggle, setActiveToggle] = useState<ToggleGroup>(0)

  const isSellActive =
    (activeToggle === 0 && mintMode === 'sell') ||
    (activeToggle === 1 && mintMode === 'buy')

  const isBuyActive =
    (activeToggle === 0 && mintMode === 'buy') ||
    (activeToggle === 1 && mintMode === 'sell')

  const toggleBtnBase = 'font-mono font-semibold text-sm px-5 py-2 uppercase rounded-lg border-none cursor-pointer transition-all duration-200'
  const toggleBtnInactive = 'bg-transparent text-white/60 hover:text-white/90'
  const toggleBtnActive = 'text-white'

  return (
    <section className="py-16 px-8 max-w-[1280px] mx-auto">
      {/* Section heading */}
      <h2 className="font-mono font-bold text-[clamp(1.5rem,3vw,2rem)] text-white dark:text-white text-center mb-10">
        Strategy
      </h2>

      <div className="bg-[#0a0a0a] border border-white/[0.12] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh]">
          {/* Visual panel */}
          <div className="relative min-h-[320px] md:min-h-0">
            <img
              src={bullSell}
              alt=""
              aria-hidden
              className={`absolute inset-0 w-full h-full object-cover object-[15%_center] transition-opacity duration-[400ms] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_88%,transparent_100%)] ${isSellActive ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
              src={bullIllustration}
              alt=""
              aria-hidden
              className={`absolute inset-0 w-full h-full object-cover object-[15%_center] transition-opacity duration-[400ms] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_88%,transparent_100%)] ${isBuyActive ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* Text / controls panel */}
          <div className="p-10 flex flex-col justify-center items-start gap-0">
            {/* Toggle groups row */}
            <div className="flex items-center gap-4 mb-5">
              {/* DIRECT */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-mono text-[0.95rem] font-semibold text-white/50 uppercase tracking-wide">DIRECT</span>
                <div className="flex bg-white/[0.08] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => { setMintMode('buy'); setActiveToggle(0) }}
                    className={`${toggleBtnBase} ${mintMode === 'buy' && activeToggle === 0 ? toggleBtnActive : toggleBtnInactive}`}
                    style={mintMode === 'buy' && activeToggle === 0 ? { background: 'linear-gradient(90deg,#ff69b4,#ff1493)' } : undefined}
                  >
                    buy low
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMintMode('sell'); setActiveToggle(0) }}
                    className={`${toggleBtnBase} ${mintMode === 'sell' && activeToggle === 0 ? toggleBtnActive : toggleBtnInactive}`}
                    style={mintMode === 'sell' && activeToggle === 0 ? { background: 'linear-gradient(90deg,#ff69b4,#ff1493)' } : undefined}
                  >
                    sell high
                  </button>
                </div>
              </div>

              <span className="font-mono text-sm font-semibold text-white/50 mt-5">OR</span>

              {/* INVERSE */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-mono text-[0.95rem] font-semibold text-white/50 uppercase tracking-wide">INVERSE</span>
                <div className="flex bg-white/[0.08] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => { setMintMode('sell'); setActiveToggle(1) }}
                    className={`${toggleBtnBase} ${mintMode === 'sell' && activeToggle === 1 ? toggleBtnActive : toggleBtnInactive}`}
                    style={mintMode === 'sell' && activeToggle === 1 ? { background: 'linear-gradient(90deg,#ff69b4,#ff1493)' } : undefined}
                  >
                    sell high
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMintMode('buy'); setActiveToggle(1) }}
                    className={`${toggleBtnBase} ${mintMode === 'buy' && activeToggle === 1 ? toggleBtnActive : toggleBtnInactive}`}
                    style={mintMode === 'buy' && activeToggle === 1 ? { background: 'linear-gradient(90deg,#ff69b4,#ff1493)' } : undefined}
                  >
                    buy low
                  </button>
                </div>
              </div>
            </div>

            <h3 className="font-mono font-semibold text-base text-white dark:text-white mb-4">
              {mintMode === 'buy' ? 'Aggressive Buy' : 'Profitable Sell'}
            </h3>

            <Button href={`${APP_URL}/grinders`} size="md">
              Open App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
