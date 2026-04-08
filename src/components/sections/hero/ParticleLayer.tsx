import { SpawnedParticle } from '../../../hooks/useParticles'

interface ParticleLayerProps {
  particles: SpawnedParticle[]
}

export function ParticleLayer({ particles }: ParticleLayerProps) {
  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle-anim absolute left-1/2 top-1/2 w-3 h-3 rounded-full pointer-events-none z-[5]"
          style={{
            '--mid-x': `${p.midX}px`,
            '--mid-y': `${p.midY}px`,
            '--end-x': `${p.endX}px`,
            '--end-y': `${p.endY}px`,
            background: 'linear-gradient(135deg,#ff69b4,#a78bfa)',
          } as React.CSSProperties}
        />
      ))}
    </>
  )
}
