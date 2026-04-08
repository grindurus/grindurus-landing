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
          className="particle"
          style={{
            '--mid-x': `${p.midX}px`,
            '--mid-y': `${p.midY}px`,
            '--end-x': `${p.endX}px`,
            '--end-y': `${p.endY}px`,
          } as React.CSSProperties}
        />
      ))}
    </>
  )
}
