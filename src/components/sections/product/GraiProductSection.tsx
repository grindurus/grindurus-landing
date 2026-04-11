import { APP_URL } from '../../../config'

export function GraiProductSection() {
  return (
    <section className="relative w-full py-24 bg-black border-b border-black/10 dark:border-white/[0.08]">
      <div className="flex justify-between max-w-[1280px] mx-auto px-8">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left">
          <h2 className="flex flex-col gap-2 w-full font-mono font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.2] text-white mb-6">
            <div className="text-white">A Robust Foundation.</div>
            <div className="text-brand-pink">Tokenized Volatility.</div>
          </h2>
          <p className="font-mono text-[1.05rem] leading-[1.7] text-white/70 max-w-[500px] mb-8">
            Our flagship product is the <strong className="text-white">GRAI cryptocurrency</strong>—a unique asset that natively represents tokenized volatility, built directly on top of our automated infrastructure.
          </p>
          <a
            href={`${APP_URL}/grinders`}
            className="inline-flex items-center justify-center font-mono font-bold text-sm text-white px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_24px_rgba(255,105,180,0.4)]"
            style={{ background: 'linear-gradient(90deg, #ff69b4, #ff1493)' }}
          >
            Explore GRAI
          </a>
        </div>

        {/* Right: Visual Graphic */}
        <div className="min-h-[400px] min-w-[400px] flex justify-center items-center relative">
          <div className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-white/10 flex items-center justify-center
                          shadow-[inset_0_0_80px_rgba(255,105,180,0.1),0_0_120px_rgba(255,105,180,0.15)] animate-[spin_30s_linear_infinite]">
            <div className="w-[80%] h-[80%] rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-[3px] border-white/10 bg-black flex items-center justify-center
                          shadow-[0_0_60px_rgba(0,0,0,0.8),inset_0_4px_20px_rgba(255,255,255,0.1)]">
            <span className="font-mono font-black text-4xl text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #fff, #ff69b4)' }}>
              GRAI
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
