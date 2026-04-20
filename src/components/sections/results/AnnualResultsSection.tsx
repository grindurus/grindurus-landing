import { Title } from "@/components/ui/Title"

export function AnnualResultsSection() {
  return (
    <section className="relative w-full py-24 bg-black border-b border-black/10 dark:border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center">
          <Title>Performance</Title>
        </div>

        {/* Comparison: mock rising charts */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Standard — slow, noisy uptrend */}
          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-8">
            <h3 className="mb-1 font-mono text-sm font-bold uppercase tracking-widest text-white/50">Standard Yield</h3>
            <span className="mb-6 font-mono text-2xl font-black text-white/80 md:text-3xl">Buy &amp; Hold</span>
            <div className="relative mt-auto min-h-[200px] w-full flex-1">
              <div className="pointer-events-none absolute left-0 top-0 z-10 flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/40" aria-hidden />
                <span className="font-mono text-sm font-medium tracking-wide text-white/55 md:text-base">
                  Locked Yield
                </span>
              </div>
              <svg
                className="h-full w-full min-h-[200px]"
                viewBox="0 0 400 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="annual-mock-hold-area" x1="200" y1="0" x2="200" y2="220" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(255,255,255,0.12)" />
                    <stop offset="1" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="0" y1="165" x2="400" y2="165" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path
                  d="M0 86 C70 84 130 98 200 110 C235 118 258 178 305 182 C340 185 372 118 400 68 L400 220 L0 220 Z"
                  fill="url(#annual-mock-hold-area)"
                />
                <path
                  d="M0 86 C70 84 130 98 200 110 C235 118 258 178 305 182 C340 185 372 118 400 68"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* GrindURUS — steeper harvest curve */}
          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-brand-pink/30 bg-[#111] p-8 shadow-[0_0_40px_rgba(255,105,180,0.05)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-transparent" />
            <h3 className="relative z-10 mb-1 font-mono text-sm font-bold uppercase tracking-widest text-brand-pink">
              GrindURUS Protocol Yield
            </h3>
            <span className="relative z-10 mb-6 font-mono text-2xl font-black text-white md:text-3xl">Buy Low, Sell High</span>
            <div className="relative z-10 mt-auto min-h-[200px] w-full flex-1">
              <div className="pointer-events-none absolute left-0 top-0 z-10 flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink shadow-[0_0_8px_rgba(255,105,180,0.65)]"
                  aria-hidden
                />
                <span className="font-mono text-sm font-medium tracking-wide text-brand-pink md:text-base">
                  Volatility Yield
                </span>
              </div>
              <svg
                className="h-full w-full min-h-[200px]"
                viewBox="0 0 400 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="annual-mock-gru-area" x1="200" y1="0" x2="200" y2="220" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff69b4" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#ff1493" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="annual-mock-gru-line" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff69b4" />
                    <stop offset="1" stopColor="#ff1493" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="0" y1="165" x2="400" y2="165" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path
                  d="M0 205 L48 188 L96 168 L144 138 L192 108 L240 78 L288 52 L336 38 L368 28 L400 18 L400 220 L0 220 Z"
                  fill="url(#annual-mock-gru-area)"
                />
                <path
                  d="M0 205 L48 188 L96 168 L144 138 L192 108 L240 78 L288 52 L336 38 L368 28 L400 18"
                  stroke="url(#annual-mock-gru-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
