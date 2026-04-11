export function AnnualResultsSection() {
  return (
    <section className="relative w-full py-24 bg-black border-b border-black/10 dark:border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center">
          <h2 className="font-mono font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.2] text-white mb-8">
            The Power of Volatility Harvesting
          </h2>
          {/* <p className="font-mono text-[1.1rem] text-white/60 mb-16 max-w-[600px] mx-auto">
            See the difference. While "buy and hold" leaves you exactly where the market decides, our automated strategies continuously extract value.
          </p> */}
        </div>

        {/* Comparison Grid */}
        <div className="flex gap-8 mb-8">

          {/* Card: Buy and Hold */}
          <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden">
            <h3 className="font-mono font-bold text-white/50 text-sm uppercase tracking-widest mb-4">Standard</h3>
            <span className="font-mono font-black text-3xl text-white/80 mb-2">Buy & Hold</span>
            <div className="w-full bg-white/5 h-2 rounded-full my-6 overflow-hidden">
              <div className="h-full bg-white/20 w-[15%]"></div>
            </div>
            <p className="font-mono text-sm text-white/40 leading-relaxed">
              Market-dependent yields with zero active value extraction during sideways or choppy price action.
            </p>
          </div>

          {/* Card: Buy Low Sell High (GrindURUS) */}
          <div className="bg-[#111] border border-brand-pink/30 rounded-2xl p-8 justify-center relative overflow-hidden shadow-[0_0_40px_rgba(255,105,180,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-transparent pointer-events-none"></div>
            <h3 className="font-mono font-bold text-brand-pink text-sm uppercase tracking-widest mb-4 z-10">GrindURUS Protocol</h3>
            <span className="font-mono font-black text-3xl text-white z-10 mb-2">Buy Low, Sell High</span>
            <div className="w-full bg-white/10 h-2 rounded-full my-6 overflow-hidden z-10">
              <div className="h-full w-[85%] relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #ff69b4, #ff1493)' }}>
                {/* animated shine overlay inside the bar */}
                <div className="absolute top-0 bottom-0 left-[-100%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
            <p className="font-mono text-sm text-white/70 leading-relaxed z-10">
              Actively accumulates small spreads on every micro-turn of the market, compounding over time.
            </p>
          </div>

        </div>

        {/* Conclusion / Why GRAI rises */}
        <div className="block bg-white/5 border border-white/10 rounded-2xl p-8 text-left relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-pink/20 blur-[50px] rounded-full point-events-none"></div>
          <h3 className="font-mono font-bold text-xl text-white mb-3">Why is GRAI rising in price?</h3>
          <p className="font-mono text-[0.95rem] text-white/70 leading-[1.8]">
            Because every automated trade captures market spread. Rather than paying yields out in inflationary governance tokens, the value harvested from volatility is continuously funneled back into the core infrastructure, increasing the underlying fundamental backing of the GRAI token itself.
          </p>
        </div>
      </div>
    </section>
  )
}
