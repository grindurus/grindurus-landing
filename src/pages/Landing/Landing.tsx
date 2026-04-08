import { HeroSection } from '../../components/sections/HeroSection/HeroSection'
import { PartnersSection } from '../../components/sections/PartnersSection/PartnersSection'
import { StrategySection } from '../../components/sections/StrategySection/StrategySection'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <HeroSection />
      <PartnersSection />
      <StrategySection />
    </div>
  )
}
