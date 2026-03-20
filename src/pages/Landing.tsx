import { useState, useRef, useEffect, useCallback } from 'react'
import { APP_URL } from '../config'
import logo from '@/assets/logo.png'
import binanceLogo from '@/assets/binance-logo.png'
import cowLogo from '@/assets/cow-logo.png'
import logoLifiDark from '@/assets/logo_lifi_dark.svg'
import logoLifiLight from '@/assets/logo_lifi_light.svg'
import bullSell from '@/assets/bull-sell.png'
import bullIllustration from '@/assets/bull-illustration.png'
import './Landing.css'

/* Lemniscate path for even arc-length distribution (64 points) */
const LEMNISCATE_PATH = (() => {
  const pts: string[] = []
  const scaleX = 520
  const scaleY = 500
  for (let i = 0; i <= 64; i++) {
    const t = (2 * Math.PI * i) / 64
    const denom = 1 + Math.sin(t) ** 2
    const x = (Math.cos(t) / denom) * scaleX
    const y = (Math.sin(t) * Math.cos(t) / denom) * scaleY
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return `M ${pts.join(' L ')} Z`
})()

const INTEGRATED_PARTNERS = [
  { id: 'ethereum', name: 'ETHEREUM', href: 'https://ethereum.org', img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
  { id: 'arbitrum', name: 'ARBITRUM', href: 'https://arbitrum.io', img: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg' },
  { id: 'binance', name: 'BINANCE', href: 'https://binance.com', img: binanceLogo },
  { id: 'cow', name: 'COW PROTOCOL', href: 'https://cow.fi', img: cowLogo },
  { id: 'solana', name: 'SOLANA', href: 'https://solana.com', img: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
  { id: 'lifi', name: 'LI.FI', href: 'https://li.fi', img: logoLifiDark, imgLight: logoLifiLight },
]

const ORBIT_TOKENS = [
  { symbol: 'USDC', color: '#2775ca', label: '$' },
  { symbol: 'WETH', color: '#627eea', label: 'W' },
  { symbol: 'USDT', color: '#26a17b', label: '₮' },
  { symbol: 'UNI', color: '#ff007a', label: 'U' },
  { symbol: 'AAVE', color: '#2ebac6', label: 'A' },
  { symbol: 'DAI', color: '#f4b731', label: 'D' },
  { symbol: 'WBTC', color: '#f09242', label: '₿' },
  { symbol: 'LINK', color: '#2a5ada', label: 'L' },
  { symbol: 'CRV', color: '#40649f', label: 'C' },
  { symbol: 'MKR', color: '#1aab9b', label: 'M' },
  { symbol: 'SNX', color: '#00d1ff', label: 'S' },
  { symbol: 'SUSHI', color: '#fa52a0', label: 'H' },
  { symbol: 'COMP', color: '#00d395', label: 'C' },
  { symbol: 'ARB', color: '#28a0f0', label: 'A' },
  { symbol: 'OP', color: '#ff0420', label: 'O' },
]

interface SpawnedParticle {
  id: number
  midX: number
  midY: number
  endX: number
  endY: number
}

export default function Landing() {
  const landingRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [particles, setParticles] = useState<SpawnedParticle[]>([])
  const [mintMode, setMintMode] = useState<'buy' | 'sell'>('buy')
  const [activeToggle, setActiveToggle] = useState<0 | 1>(0)
  const nextIdRef = useRef(0)

  const spawnParticle = useCallback(() => {
    const landing = landingRef.current
    const button = buttonRef.current
    if (!landing || !button) return

    const landingRect = landing.getBoundingClientRect()
    const buttonRect = button.getBoundingClientRect()

    const centerX = landingRect.width / 2
    const centerY = landingRect.height / 2
    const buttonCenterX = buttonRect.left - landingRect.left + buttonRect.width / 2
    const buttonCenterY = buttonRect.top - landingRect.top + buttonRect.height / 2
    const endX = buttonCenterX - centerX
    const endY = buttonCenterY - centerY

    const midX = (Math.random() - 0.5) * 200
    const midY = (Math.random() - 0.5) * 200

    const id = nextIdRef.current++
    setParticles((prev) => [
      ...prev,
      { id, midX, midY, endX, endY },
    ])
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id))
    }, 3200)
  }, [])

  useEffect(() => {
    const initial = setTimeout(spawnParticle, 2000)
    const timer = setInterval(spawnParticle, 7000)
    return () => {
      clearTimeout(initial)
      clearInterval(timer)
    }
  }, [spawnParticle])

  return (
    <div className="landing" ref={landingRef}>
      <section className="landing-hero-section">
      <div
        className="landing-orbit"
        style={{ '--orbit-path': `path("${LEMNISCATE_PATH}")` } as React.CSSProperties}
      >
        {ORBIT_TOKENS.map((token, i) => (
          <div
            key={token.symbol}
            className="landing-orbit-icon"
            style={{
              '--orbit-index': i,
              '--orbit-total': ORBIT_TOKENS.length,
              '--token-color': token.color,
            } as React.CSSProperties}
          >
            <span className="landing-orbit-icon-symbol">{token.label}</span>
          </div>
        ))}
      </div>

      <div className="landing-hero-bg">
        <img src={logo} alt="" className="landing-hero-logo" aria-hidden />
      </div>

      <section className="landing-hero">
        <h1 className="landing-title">
          <span>GrindURUS</span>
          <span>Automated Market Taker</span>
        </h1>
        <p className="landing-subtitle">
          multichain price volatility harvester protocol
        </p>
        <a
          ref={buttonRef}
          href={`${APP_URL}/grinders`}
          className="landing-cta"
        >
          Open App
        </a>
      </section>
      </section>

      <section className="landing-integrated-section">
        <h2 className="landing-integrated-title">Integrated with</h2>
        <div className="landing-integrated-marquee">
          <div className="landing-integrated-track">
            {[...INTEGRATED_PARTNERS, ...INTEGRATED_PARTNERS, ...INTEGRATED_PARTNERS, ...INTEGRATED_PARTNERS].map((p, i) => (
              <a
                key={`${p.id}-${i}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-integrated-logo"
              >
                {'imgLight' in p ? (
                  <>
                    <img src={p.img} alt={p.name} width={32} height={32} className="landing-integrated-logo-dark" aria-hidden />
                    <img src={(p as { imgLight: string }).imgLight} alt={p.name} width={32} height={32} className="landing-integrated-logo-light" aria-hidden />
                  </>
                ) : (
                  <img src={p.img} alt={p.name} width={32} height={32} />
                )}
                <span className="landing-integrated-name">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-mint-section">
        <div className="landing-mint-card">
          <div className="landing-mint-content">
            <div className="landing-mint-visual">
              <img
                src={bullSell}
                alt=""
                className={`landing-mint-img ${
                  (activeToggle === 0 && mintMode === 'sell') || (activeToggle === 1 && mintMode === 'buy')
                    ? 'active'
                    : ''
                }`}
                aria-hidden
              />
              <img
                src={bullIllustration}
                alt=""
                className={`landing-mint-img landing-mint-img-red ${
                  (activeToggle === 0 && mintMode === 'buy') || (activeToggle === 1 && mintMode === 'sell')
                    ? 'active'
                    : ''
                }`}
                aria-hidden
              />
            </div>
            <div className="landing-mint-text-block">
            <h2 className="landing-mint-title">Strategy</h2>
            <div className="landing-mint-toggle-row">
              <div className="landing-mint-toggle-group">
                <span className="landing-mint-toggle-label">DIRECT</span>
                <div className="landing-mint-toggle">
                  <button
                    type="button"
                    className={`landing-mint-toggle-btn ${mintMode === 'buy' && activeToggle === 0 ? 'active' : ''}`}
                    onClick={() => { setMintMode('buy'); setActiveToggle(0); }}
                  >
                    buy low
                  </button>
                  <button
                    type="button"
                    className={`landing-mint-toggle-btn ${mintMode === 'sell' && activeToggle === 0 ? 'active' : ''}`}
                    onClick={() => { setMintMode('sell'); setActiveToggle(0); }}
                  >
                    sell high
                  </button>
                </div>
              </div>
              <span className="landing-mint-toggle-or">OR</span>
              <div className="landing-mint-toggle-group">
                <span className="landing-mint-toggle-label">INVERSE</span>
                <div className="landing-mint-toggle">
                  <button
                    type="button"
                    className={`landing-mint-toggle-btn ${mintMode === 'sell' && activeToggle === 1 ? 'active' : ''}`}
                    onClick={() => { setMintMode('sell'); setActiveToggle(1); }}
                  >
                    sell high
                  </button>
                  <button
                    type="button"
                    className={`landing-mint-toggle-btn ${mintMode === 'buy' && activeToggle === 1 ? 'active' : ''}`}
                    onClick={() => { setMintMode('buy'); setActiveToggle(1); }}
                  >
                    buy low
                  </button>
                </div>
              </div>
            </div>
            <h3 className="landing-mint-subtitle">
              {mintMode === 'buy' ? 'Aggressive Buy' : 'Profitable Sell'}
            </h3>
            <a href={`${APP_URL}/grinders`} className="landing-mint-btn">
              Open App
            </a>
            </div>
          </div>
        </div>
      </section>

      {particles.map((p) => (
        <div
          key={p.id}
          className="landing-particle"
          style={
            {
              '--mid-x': `${p.midX}px`,
              '--mid-y': `${p.midY}px`,
              '--end-x': `${p.endX}px`,
              '--end-y': `${p.endY}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
