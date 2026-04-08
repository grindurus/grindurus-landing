import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Landing from './pages/Landing/Landing'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Landing />
      </main>
      <Footer />
    </div>
  )
}

export default App
