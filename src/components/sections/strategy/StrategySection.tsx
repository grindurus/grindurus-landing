import { useState } from 'react'
import { APP_URL } from '../../../config'
import { Button } from '../../ui/Button/Button'
import bullSell from '@/assets/bull-sell.png'
import bullIllustration from '@/assets/bull-illustration.png'
import './StrategySection.css'

type MintMode = 'buy' | 'sell'
type ToggleGroup = 0 | 1

export function StrategySection() {
  const [mintMode, setMintMode] = useState<MintMode>('buy')
  const [activeToggle, setActiveToggle] = useState<ToggleGroup>(0)

  const isSellActive =
    (activeToggle === 0 && mintMode === 'sell') ||
    (activeToggle === 1 && mintMode === 'buy')

  const isBuyActive =
    (activeToggle === 0 && mintMode === 'buy') ||
    (activeToggle === 1 && mintMode === 'sell')

  return (
    <section className="strategy-section">
      <div className="strategy-card">
        <div className="strategy-content">
          {/* Visual */}
          <div className="strategy-visual">
            <img
              src={bullSell}
              alt=""
              className={`strategy-img${isSellActive ? ' active' : ''}`}
              aria-hidden
            />
            <img
              src={bullIllustration}
              alt=""
              className={`strategy-img strategy-img-red${isBuyActive ? ' active' : ''}`}
              aria-hidden
            />
          </div>

          {/* Text block */}
          <div className="strategy-text-block">
            <h2 className="strategy-title">Strategy</h2>

            <div className="strategy-toggle-row">
              {/* DIRECT group */}
              <div className="strategy-toggle-group">
                <span className="strategy-toggle-label">DIRECT</span>
                <div className="strategy-toggle">
                  <button
                    type="button"
                    className={`strategy-toggle-btn${mintMode === 'buy' && activeToggle === 0 ? ' active' : ''}`}
                    onClick={() => { setMintMode('buy'); setActiveToggle(0) }}
                  >
                    buy low
                  </button>
                  <button
                    type="button"
                    className={`strategy-toggle-btn${mintMode === 'sell' && activeToggle === 0 ? ' active' : ''}`}
                    onClick={() => { setMintMode('sell'); setActiveToggle(0) }}
                  >
                    sell high
                  </button>
                </div>
              </div>

              <span className="strategy-toggle-or">OR</span>

              {/* INVERSE group */}
              <div className="strategy-toggle-group">
                <span className="strategy-toggle-label">INVERSE</span>
                <div className="strategy-toggle">
                  <button
                    type="button"
                    className={`strategy-toggle-btn${mintMode === 'sell' && activeToggle === 1 ? ' active' : ''}`}
                    onClick={() => { setMintMode('sell'); setActiveToggle(1) }}
                  >
                    sell high
                  </button>
                  <button
                    type="button"
                    className={`strategy-toggle-btn${mintMode === 'buy' && activeToggle === 1 ? ' active' : ''}`}
                    onClick={() => { setMintMode('buy'); setActiveToggle(1) }}
                  >
                    buy low
                  </button>
                </div>
              </div>
            </div>

            <h3 className="strategy-subtitle">
              {mintMode === 'buy' ? 'Aggressive Buy' : 'Profitable Sell'}
            </h3>

            <Button href={`${APP_URL}/grinders`} size="md">
              Open App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
