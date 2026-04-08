import { ORBIT_TOKENS } from '../../../constants/tokens'
import { LEMNISCATE_PATH } from '../../../constants/lemniscate'

export function OrbitRing() {
  return (
    <div
      className="orbit-ring"
      style={{ '--orbit-path': `path("${LEMNISCATE_PATH}")` } as React.CSSProperties}
    >
      {ORBIT_TOKENS.map((token, i) => (
        <div
          key={token.symbol}
          className="orbit-ring-icon"
          style={{
            '--orbit-index': i,
            '--orbit-total': ORBIT_TOKENS.length,
            '--token-color': token.color,
          } as React.CSSProperties}
        >
          <span className="orbit-ring-icon-symbol">{token.label}</span>
        </div>
      ))}
    </div>
  )
}
