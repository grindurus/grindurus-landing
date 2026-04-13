export function StrategySection() {
  return (
    <section className="w-full pt-24 pb-12 md:pb-14 bg-black border-b border-black/10 dark:border-white/[0.08] relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">

        {/* Section heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-mono font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.2] text-white mb-6">
            Dual-Sided Strategy
          </h2>
          <div className="mx-auto max-w-[38rem] text-center font-sans text-lg font-normal leading-[1.65] tracking-[-0.01em] text-white/75 antialiased sm:text-xl sm:leading-[1.6] md:text-2xl md:leading-[1.55]">
            <p className="m-0 text-balance">
              Market price volatility is an opportunity. 
            </p>
            <p className="m-0 mt-3 text-balance sm:mt-3.5 md:mt-4">
              No need to predict the market.
            </p>
            <p className="m-0 mt-3 text-balance sm:mt-3.5 md:mt-4">
              Your capital works in both modes.
            </p>
          </div>
        </div>

        {/* Strategy Cards Grid */}
        <div className="flex gap-8 mb-20">

          {/* Card 1: Buy Low, Sell High */}
          <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-pink/30 hover:shadow-[0_20px_60px_rgba(255,105,180,0.1)] transition-all duration-500">
            {/* Inner Glow */}
            <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-brand-pink/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-pink/20 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-8 w-max">
                <span className="w-2 h-2 rounded-full bg-brand-pink mr-2 shadow-[0_0_8px_rgba(255,105,180,0.8)]"></span>
                DIRECT MODE
              </div>

              <h3 className="font-mono text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-pink mb-6">
                Buy Low, Sell High
              </h3>

              <div className="font-sans text-[1.1rem] text-white/60 leading-relaxed mb-10 flex-grow space-y-2">
                <p>Use USDC to buy dips and sell rallies.</p>
                <p className="font-medium">
                  Result: Your USDC grows.
                </p>
              </div>

              {/* Graphic */}
              <div className="w-full h-40 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center p-6 relative">
                <div className="pointer-events-none absolute bottom-2 left-3 z-10 flex items-center gap-2 sm:bottom-2.5 sm:left-4 sm:gap-2.5">
                  <span
                    className="block h-0 w-4 shrink-0 border-0 border-t-2 border-dashed border-white/50 sm:w-5"
                    aria-hidden
                  />
                  <span className="font-mono text-[10px] font-medium tracking-wide text-white/55 sm:text-xs">
                    decision curve
                  </span>
                </div>
                <svg viewBox="0 0 120 70" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="0" y1="35" x2="120" y2="35" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Trajectory */}
                  <path d="M 10 35 C 30 55, 40 55, 60 55 C 80 55, 90 15, 110 15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Points */}
                  <circle cx="60" cy="55" r="4" fill="#ff69b4" className="animate-pulse" />
                  <circle cx="110" cy="15" r="4" fill="#fff" className="animate-pulse" style={{ animationDelay: '1s' }} />

                  {/* Labels */}
                  <text x="60" y="70" fill="#ff69b4" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="1">BUY (SOL)</text>
                  <text x="110" y="7" fill="#fff" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="1">SELL (+USDC)</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Sell High, Buy Low */}
          <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-red/30 hover:shadow-[0_20px_60px_rgba(255,20,147,0.1)] transition-all duration-500">
            {/* Inner Glow */}
            <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-brand-red/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-red/20 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-8 w-max">
                <span className="w-2 h-2 rounded-full bg-brand-red mr-2 shadow-[0_0_8px_rgba(255,20,147,0.8)]"></span>
                INVERSE MODE
              </div>

              <h3 className="font-mono text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-red mb-6">
                Sell High, Buy Low
              </h3>

              <div className="font-sans text-[1.1rem] text-white/60 leading-relaxed mb-10 flex-grow space-y-2">
                <p>
                  Sell peaks and rebuy dips.
                </p>
                <p className="font-medium">
                  Result: You accumulate more SOL
                </p>
              </div>

              {/* Graphic */}
              <div className="w-full h-40 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center p-6 relative">
                <div className="pointer-events-none absolute bottom-2 left-3 z-10 flex items-center gap-2 sm:bottom-2.5 sm:left-4 sm:gap-2.5">
                  <span
                    className="block h-0 w-4 shrink-0 border-0 border-t-2 border-dashed border-white/50 sm:w-5"
                    aria-hidden
                  />
                  <span className="font-mono text-[10px] font-medium tracking-wide text-white/55 sm:text-xs">
                    decision curve
                  </span>
                </div>
                <svg viewBox="0 0 120 70" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="0" y1="35" x2="120" y2="35" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Trajectory */}
                  <path d="M 10 35 C 30 15, 40 15, 60 15 C 80 15, 90 55, 110 55" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Points */}
                  <circle cx="60" cy="15" r="4" fill="#ff1493" className="animate-pulse" />
                  <circle cx="110" cy="55" r="4" fill="#fff" className="animate-pulse" style={{ animationDelay: '1s' }} />

                  {/* Labels */}
                  <text x="60" y="7" fill="#ff1493" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="1">SELL (USDC)</text>
                  <text x="110" y="70" fill="#fff" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="1">BUY (+SOL)</text>
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
