import { APP_URL } from '../../../config'
import { Button } from '../../ui/Button'

export function CalculatorCtaSection() {
  return (
    <section className="w-full py-24 bg-black border-b border-black/10 dark:border-white/[0.08] relative">
      <div className="max-w-[1280px] mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">

          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="font-mono font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] text-white mb-6">
              Test any asset yourself <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-[#ff1493]">
                for just $5
              </span>
            </h2>

            <p className="font-sans text-[1.1rem] text-white/60 mb-10 max-w-[500px] leading-relaxed">
              Curious how much your favorite cryptocurrency fluctuates? See the true power of automated market-taking.
              The calculator reveals exactly how volatile an asset is—and exactly how much our infrastructure could earn from it.
            </p>

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
                  <span className="font-mono font-bold text-white group-hover:text-brand-pink transition-colors">SOL / USDT</span>
                </div>
                {/* Mock Input 2 */}
                <div className="bg-black border border-white/5 rounded-xl p-4 flex justify-between items-center group hover:border-brand-pink/30 transition-colors">
                  <span className="font-sans text-sm text-white/50">Timeframe</span>
                  <span className="font-mono font-bold text-white">30 Days</span>
                </div>
                {/* Mock Input 3 */}
                <div className="bg-black border border-white/5 rounded-xl p-4 flex justify-between items-center relative overflow-hidden">
                  <span className="font-sans text-sm text-white/50">Initial Capital</span>
                  <span className="font-mono font-bold text-white">$10,000</span>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-pink to-transparent w-full"></div>
                </div>
              </div>

              {/* Output Highlight */}
              <div className="relative bg-gradient-to-tr from-brand-pink/20 to-black border border-brand-pink/30 rounded-xl p-6 text-center overflow-hidden">
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-[shimmer_3s_infinite]"></div>
                <span className="block font-sans text-xs text-brand-pink uppercase tracking-widest font-bold mb-2">Projected Yield</span>
                <span className="block font-mono font-black text-4xl text-white drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]">
                  +42.8%
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
