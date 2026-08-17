import { APP_URL } from '../../../config'
import { Title } from "@/components/ui/Title"
import { Description } from '@/components/ui/Description'
import { Button } from '@/components/ui/Button'
import { GraiHolderScene } from './GraiHolderScene'

export function GraiProductSection() {
  return (
    <section className="relative w-full py-6 md:py-12 lg:py-16 bg-black">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8 max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Left: Text Content */}
        <div className="flex min-w-0 max-w-full flex-col items-start text-left">
          <Title className="flex flex-col gap-2">
            <div className="text-white">Onchain Foundation.</div>
            <div className="text-brand-pink">Tokenized Volatility.</div>
          </Title>
          <Description>
            Earn from price volatility without trading.<br></br>
            GRAI gives you passive access to the yield
          </Description>
          <p className="mb-10 mt-3 text-sm md:text-base font-mono text-brand-pink leading-relaxed">
            Deposit assets. Receive GRAI. Let GrindURUS harvest volatility.
          </p>
          <Button href={`${APP_URL}/grai`} size="md">
            Explore GRAI
          </Button>
        </div>

        <div className="relative flex min-h-[500px] w-full md:min-w-[400px] md:max-w-[440px] flex-col items-center justify-center">
          <GraiHolderScene />
        </div>
      </div>
    </section>
  )
}
