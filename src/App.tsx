import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { HeroSection } from './components/sections/hero/HeroSection'
import { PartnersSection } from './components/sections/partners/PartnersSection'
import { StrategySection } from './components/sections/strategy/StrategySection'
import { GraiProductSection } from './components/sections/product/GraiProductSection'
import { AnnualResultsSection } from './components/sections/results/AnnualResultsSection'
import { CalculatorCtaSection } from './components/sections/calculator/CalculatorCtaSection'
import { InvestmentPathsSection } from './components/sections/invest/InvestmentPathsSection'
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-1 relative bg-white dark:bg-black">
        <HeroSection />
        <StrategySection />
        <GraiProductSection />
        <AnnualResultsSection />
        <CalculatorCtaSection />
        <InvestmentPathsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
