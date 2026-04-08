import { ORBIT_TOKENS } from '../../../constants/tokens'
import { LEMNISCATE_PATH } from '../../../constants/lemniscate'

export function OrbitRing() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ '--orbit-path': `path("${LEMNISCATE_PATH}")` } as React.CSSProperties}
    >
      {ORBIT_TOKENS.map((token, i) => (
        <div
          key={token.symbol}
          className="orbit-icon absolute w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-white text-[0.75rem] opacity-70 left-1/2 top-1/2 shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-[orbit-infinity_80s_linear_infinite]"
          style={{
            '--orbit-index': i,
            '--orbit-total': ORBIT_TOKENS.length,
            '--token-color': token.color,
            background: token.color,
            animationDelay: `calc(${i} / ${ORBIT_TOKENS.length} * -80s)`,
          } as React.CSSProperties}
        >
          <span className="font-mono text-[0.6rem]">{token.label}</span>
        </div>
      ))}
    </div>
  )
}
