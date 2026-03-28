import { useMemo, useState } from 'react'
import './Landing.css'

const APY = 0.2
const MARKET_APY = 0.08

const LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const STRATEGY_DATA = [100, 108, 106, 118, 122, 120, 130, 135, 132, 142, 145, 148.5]
const MARKET_DATA = [100, 105, 98, 112, 110, 102, 115, 118, 112, 120, 115, 118.2]

function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  })
}

function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function seriesToPath(values: number[], width: number, height: number, padding: number): string {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = Math.max(max - min, 1)
  const innerWidth = width - padding * 2
  const innerHeight = height - padding * 2

  return values
    .map((value, index) => {
      const x = padding + (index / (values.length - 1)) * innerWidth
      const y = padding + ((max - value) / range) * innerHeight
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

export default function Landing() {
  const [investment, setInvestment] = useState<number>(10000)
  const [startDate, setStartDate] = useState<string>('2025-01-01')
  const [endDate, setEndDate] = useState<string>('2025-12-31')

  const {
    years,
    finalStrategy,
    finalMarket,
    strategyReturn,
    marketReturn,
    alpha,
  } = useMemo(() => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const amount = clamp(Number.isFinite(investment) ? investment : 0, 0, Number.MAX_SAFE_INTEGER)

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
      return {
        years: 0,
        finalStrategy: amount,
        finalMarket: amount,
        strategyReturn: 0,
        marketReturn: 0,
        alpha: 0,
      }
    }

    const msPerYear = 1000 * 60 * 60 * 24 * 365.25
    const elapsedYears = (end.getTime() - start.getTime()) / msPerYear

    const strategyFinal = amount * (1 + APY) ** elapsedYears
    const marketFinal = amount * (1 + MARKET_APY) ** elapsedYears

    const strategyPct = amount > 0 ? ((strategyFinal - amount) / amount) * 100 : 0
    const marketPct = amount > 0 ? ((marketFinal - amount) / amount) * 100 : 0

    return {
      years: elapsedYears,
      finalStrategy: strategyFinal,
      finalMarket: marketFinal,
      strategyReturn: strategyPct,
      marketReturn: marketPct,
      alpha: strategyPct - marketPct,
    }
  }, [investment, startDate, endDate])

  const chartWidth = 900
  const chartHeight = 360
  const chartPadding = 28

  const strategyPath = useMemo(
    () => seriesToPath(STRATEGY_DATA, chartWidth, chartHeight, chartPadding),
    [chartWidth, chartHeight, chartPadding],
  )
  const marketPath = useMemo(
    () => seriesToPath(MARKET_DATA, chartWidth, chartHeight, chartPadding),
    [chartWidth, chartHeight, chartPadding],
  )

  return (
    <div className="landing">
      <section className="hero-section">
        <div className="hero-grid-overlay" aria-hidden />
        <div className="hero-content">
          <h1 className="hero-title">GrindURUS</h1>
          <p className="hero-subtitle">Automated market taker protocol</p>
          <p className="hero-link-row">
            Statistically proven 20% annual return{' '}
            <a href="#backtest" className="hero-link">
              [See Backtest]
            </a>
          </p>

          <div className="hero-manifesto">
            <p>No futures. No options. Just pure math.</p>
            <p className="hero-emphasis">We BUY LOW.</p>
            <p className="hero-emphasis">We SELL HIGH.</p>
            <p>We profit on volatility.</p>
          </div>
        </div>
      </section>

      <section id="backtest" className="backtest-section">
        <div className="section-heading">
          <h2>Backtest</h2>
          <p>Learn how much would you have earned if you invested:</p>
        </div>

        <div className="backtest-grid">
          <article className="control-card">
            <h3>Calculator</h3>

            <label htmlFor="investment">Investment Amount (USD)</label>
            <input
              id="investment"
              type="number"
              min={0}
              step={100}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
            />

            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <div className="result-box">
              <p className="result-label">Estimated Final Amount (20% annualized)</p>
              <p className="result-value">{formatCurrency(finalStrategy)}</p>
              <p className="result-meta">Net profit: {formatCurrency(finalStrategy - investment)}</p>
            </div>

            <ul className="metric-list" aria-label="strategy metrics">
              <li>
                <span>Period</span>
                <strong>{years.toFixed(2)} years</strong>
              </li>
              <li>
                <span>Strategy Return</span>
                <strong className="positive">{formatPercent(strategyReturn)}</strong>
              </li>
              <li>
                <span>Market Return (8% benchmark)</span>
                <strong>{formatPercent(marketReturn)}</strong>
              </li>
              <li>
                <span>Outperformance</span>
                <strong className="accent">{formatPercent(alpha)}</strong>
              </li>
            </ul>

            <p className="footnote">
              Backtest chart below shows a sample 2025 strategy curve vs SOL market baseline.
            </p>
          </article>

          <article className="chart-card">
            <div className="chart-header">
              <h3>Performance Chart (2025)</h3>
              <div className="legend">
                <span><i className="legend-dot strategy" /> Strategy</span>
                <span><i className="legend-dot market" /> Market (SOL)</span>
              </div>
            </div>

            <div className="chart-wrapper" role="img" aria-label="Backtest strategy and market chart">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="strategyGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(247,37,133,0.45)" />
                    <stop offset="100%" stopColor="rgba(247,37,133,0)" />
                  </linearGradient>
                </defs>

                <path
                  d={`${strategyPath} L ${chartWidth - chartPadding} ${chartHeight - chartPadding} L ${chartPadding} ${chartHeight - chartPadding} Z`}
                  fill="url(#strategyGlow)"
                />
                <path d={marketPath} className="market-line" />
                <path d={strategyPath} className="strategy-line" />
              </svg>

              <div className="x-axis-labels">
                {LABELS.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>

            <div className="chart-footer">
              <div>
                <p>Sample Start</p>
                <strong>{formatCurrency(investment)}</strong>
              </div>
              <div>
                <p>Sample Strategy End</p>
                <strong className="accent">{formatCurrency(finalStrategy)}</strong>
              </div>
              <div>
                <p>Sample Market End</p>
                <strong>{formatCurrency(finalMarket)}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
