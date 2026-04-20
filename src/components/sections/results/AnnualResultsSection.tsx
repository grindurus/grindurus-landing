import { useState, useMemo } from "react"
import { Title } from "@/components/ui/Title"
import { PerformanceChart, type ChartDataPoint } from "./PerformanceChart"
import { Description } from "@/components/ui/Description"

// ─── Data ─────────────────────────────────────────────────────────────────────
const ALL_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

type PairKey = "SOL/USDC" | "ETH/USDC" | "BTC/USDC" | "ARB/USDC"
const PAIRS: PairKey[] = ["SOL/USDC", "ETH/USDC", "BTC/USDC", "ARB/USDC"]

const PAIR_DATA: Record<PairKey, ChartDataPoint[]> = {
  "SOL/USDC": [
    { month: "Jan", strategy: 100, market: 100 },
    { month: "Feb", strategy: 104, market: 101 },
    { month: "Mar", strategy: 109, market:  99 },
    { month: "Apr", strategy: 113, market: 103 },
    { month: "May", strategy: 118, market: 100 },
    { month: "Jun", strategy: 124, market: 105 },
    { month: "Jul", strategy: 130, market: 102 },
    { month: "Aug", strategy: 135, market: 108 },
    { month: "Sep", strategy: 140, market: 104 },
    { month: "Oct", strategy: 144, market: 107 },
    { month: "Nov", strategy: 148, market: 110 },
    { month: "Dec", strategy: 153, market: 112 },
  ],
  "ETH/USDC": [
    { month: "Jan", strategy: 100, market: 100 },
    { month: "Feb", strategy: 103, market: 102 },
    { month: "Mar", strategy: 107, market: 100 },
    { month: "Apr", strategy: 111, market: 104 },
    { month: "May", strategy: 116, market: 101 },
    { month: "Jun", strategy: 121, market: 106 },
    { month: "Jul", strategy: 126, market: 103 },
    { month: "Aug", strategy: 131, market: 109 },
    { month: "Sep", strategy: 136, market: 107 },
    { month: "Oct", strategy: 140, market: 111 },
    { month: "Nov", strategy: 145, market: 113 },
    { month: "Dec", strategy: 150, market: 116 },
  ],
  "BTC/USDC": [
    { month: "Jan", strategy: 100, market: 100 },
    { month: "Feb", strategy: 102, market: 101 },
    { month: "Mar", strategy: 105, market: 103 },
    { month: "Apr", strategy: 108, market: 105 },
    { month: "May", strategy: 112, market: 103 },
    { month: "Jun", strategy: 116, market: 107 },
    { month: "Jul", strategy: 120, market: 105 },
    { month: "Aug", strategy: 124, market: 110 },
    { month: "Sep", strategy: 128, market: 108 },
    { month: "Oct", strategy: 132, market: 112 },
    { month: "Nov", strategy: 137, market: 114 },
    { month: "Dec", strategy: 142, market: 117 },
  ],
  "ARB/USDC": [
    { month: "Jan", strategy: 100, market: 100 },
    { month: "Feb", strategy: 106, market: 100 },
    { month: "Mar", strategy: 112, market:  97 },
    { month: "Apr", strategy: 117, market: 101 },
    { month: "May", strategy: 123, market:  98 },
    { month: "Jun", strategy: 130, market: 103 },
    { month: "Jul", strategy: 137, market: 100 },
    { month: "Aug", strategy: 143, market: 106 },
    { month: "Sep", strategy: 149, market: 102 },
    { month: "Oct", strategy: 154, market: 105 },
    { month: "Nov", strategy: 159, market: 108 },
    { month: "Dec", strategy: 165, market: 111 },
  ],
}

// ─── Styled Select (matches app design language) ──────────────────────────────
interface AppSelectProps<T extends string | number> {
  value: T
  onChange: (v: T) => void
  options: { label: string; value: T; disabled?: boolean }[]
  id?: string
}

function AppSelect<T extends string | number>({ value, onChange, options, id }: AppSelectProps<T>) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => {
          const raw = e.target.value
          // Preserve type: if initial value is number, cast back
          onChange((typeof value === "number" ? Number(raw) : raw) as T)
        }}
        className={[
          "w-full appearance-none",
          "bg-black border border-white/10 rounded-xl",
          "px-4 py-3 pr-10",
          "font-mono font-bold text-white text-sm",
          "cursor-pointer outline-none",
          "hover:border-brand-pink/30 focus:border-brand-pink/50",
          "transition-colors duration-150",
        ].join(" ")}
        // Inline style for <option> background since Tailwind can't reach it
        style={{ colorScheme: "dark" }}
      >
        {options.map((opt) => (
          <option
            key={String(opt.value)}
            value={opt.value}
            disabled={opt.disabled}
            style={{ background: "#0a0a0a", color: opt.disabled ? "rgba(255,255,255,0.25)" : "#fff" }}
          >
            {opt.label}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35"
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// ─── Field label ──────────────────────────────────────────────────────────────
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-sans text-xs text-white/40 uppercase tracking-widest font-bold mb-2">
      {children}
    </span>
  )
}

// ─── Controls panel ───────────────────────────────────────────────────────────
interface ControlsProps {
  pair: PairKey
  onPair: (p: PairKey) => void
  fromMonth: number
  onFrom: (m: number) => void
  toMonth: number
  onTo: (m: number) => void
}

function ChartControls({ pair, onPair, fromMonth, onFrom, toMonth, onTo }: ControlsProps) {
  const pairOptions = PAIRS.map((p) => ({ label: p, value: p }))

  const fromOptions = ALL_MONTHS.map((m, i) => ({
    label: m,
    value: i,
    disabled: i >= toMonth,
  }))

  const toOptions = ALL_MONTHS.map((m, i) => ({
    label: m,
    value: i,
    disabled: i <= fromMonth,
  }))

  return (
    <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-4 md:p-6 flex flex-row flex-wrap md:flex-col gap-4 md:gap-6 h-full">

      {/* Asset Pair */}
      <div>
        <FieldLabel>Asset Pair</FieldLabel>
        <AppSelect value={pair} onChange={onPair} options={pairOptions} id="ctrl-pair" />
      </div>

      {/* Year — static 2025 display row */}
      <div>
        <FieldLabel>Year</FieldLabel>
        <div className="bg-black border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="font-sans text-sm text-white/50">Period</span>
          <span className="font-mono font-bold text-white">2025</span>
        </div>
      </div>

      {/* Period: From → To */}
      <div className="flex flex-col gap-4">
        <FieldLabel>Period</FieldLabel>

        <div>
          <span className="block font-sans text-xs text-white/30 tracking-widest mb-1.5 pl-0.5">From</span>
          <AppSelect value={fromMonth} onChange={onFrom} options={fromOptions} id="ctrl-from" />
        </div>

        <div>
          <span className="block font-sans text-xs text-white/30 tracking-widest mb-1.5 pl-0.5">To</span>
          <AppSelect value={toMonth} onChange={onTo} options={toOptions} id="ctrl-to" />
        </div>
      </div>

    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function AnnualResultsSection() {
  const [pair, setPair] = useState<PairKey>("SOL/USDC")
  const [fromMonth, setFromMonth] = useState(0)
  const [toMonth, setToMonth] = useState(11)

  const chartData = useMemo<ChartDataPoint[]>(() => {
    return PAIR_DATA[pair].slice(fromMonth, toMonth + 1)
  }, [pair, fromMonth, toMonth])

  const [asset] = pair.split("/")
  const marketLabel = `Market ${asset}`

  return (
    <section className="relative w-full py-16 md:py-24 bg-black">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">

        <div className="text-center mb-12">
          <Title>Performance</Title>
          <Description>
            GRAI gives you passive access to the GrindURUS strategy.<br />
            Earn from volatility without trading.
          </Description>
        </div>

        {/* controls above chart on mobile, 1/3+2/3 from md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

          {/* Controls — 1 col */}
          <div className="col-span-1">
            <ChartControls
              pair={pair}
              onPair={setPair}
              fromMonth={fromMonth}
              onFrom={(m) => {
                setFromMonth(m)
                if (m >= toMonth) setToMonth(Math.min(m + 1, 11))
              }}
              toMonth={toMonth}
              onTo={(m) => {
                setToMonth(m)
                if (m <= fromMonth) setFromMonth(Math.max(m - 1, 0))
              }}
            />
          </div>

          {/* Chart — 2 cols */}
          <div className="col-span-2">
            <PerformanceChart
              data={chartData}
              strategyLabel="Strategy"
              marketLabel={marketLabel}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
