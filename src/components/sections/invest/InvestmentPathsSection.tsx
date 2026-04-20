import { APP_URL } from '../../../config'
import { Title } from "@/components/ui/Title"
import { Description } from '@/components/ui/Description'
import { SubTitle } from '@/components/ui/SubTitle'

export function InvestmentPathsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-black relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 md:mb-16">
          <Title>Join the Ecosystem</Title>
          <Description className="max-w-[600px] mx-auto">
            Whether you're an individual investor looking for yield, or a protocol looking to harvest your own volatility, we have a path for you.
          </Description>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
          {/* Card: Retail Co-Investor */}
          <div className="flex flex-1 flex-col bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-pink/50 transition-colors duration-500">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/0 to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <span className="text-3xl">👥</span>
            </div>
            
            <SubTitle className="mb-4">
              Retail Co-Investor
            </SubTitle>
            <Description className="mb-10 flex-1">
              You don't need millions to capture institutional yield. Invest in the general crowdfunding pool to become a "co-investor" and start earning from the exact same automated strategies powering the GrindURUS network.
            </Description>
            
            <a
              href={`${APP_URL}/grinders`}
              className="inline-flex items-center justify-center font-mono font-bold text-sm text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_24px_rgba(255,105,180,0.4)]"
              style={{ background: 'linear-gradient(90deg, #ff69b4, #ff1493)' }}
            >
              Enter Crowdfunding Pool
            </a>
          </div>

          {/* Card: Private B2B / Partners */}
          <div className="flex flex-1 flex-col bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-red/50 transition-colors duration-500">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/0 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <span className="text-3xl">🏢</span>
            </div>
            
            <SubTitle className="mb-4">
              Private Client
            </SubTitle>
            <Description className="mb-10 flex-1">
              If you have a token project or a large treasury, we can market take for you separately. Become a private client and deploy our volatility harvesting infrastructure specifically on your native asset pairs to stabilize price action and grow treasury depth.
            </Description>
            
            <a
              href="mailto:contact@grindurus.xyz" // fallback or direct link to contact logic
              className="inline-flex items-center justify-center font-mono font-bold text-sm text-white border border-white/20 hover:border-brand-red px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              Become a Private Client
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
