export interface OrbitToken {
  symbol: string
  color: string
  label: string
}

export const ORBIT_TOKENS: OrbitToken[] = [
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
