import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { HeroSection } from './components/sections/HeroSection/HeroSection'
import { PartnersSection } from './components/sections/PartnersSection/PartnersSection'
import { StrategySection } from './components/sections/StrategySection/StrategySection'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main landing">
        <HeroSection />
        <PartnersSection />
        <StrategySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
