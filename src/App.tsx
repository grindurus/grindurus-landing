import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { HeroSection } from './components/sections/hero/HeroSection'
import { PartnersSection } from './components/sections/partners/PartnersSection'
import { StrategySection } from './components/sections/strategy/StrategySection'
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black dark:bg-black">
      <Header />
      <main className="flex-1 relative bg-black dark:bg-black [data-theme='light']_&:bg-white">
        <HeroSection />
        <PartnersSection />
        <StrategySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
