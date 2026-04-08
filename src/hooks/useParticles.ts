import { useState, useRef, useCallback, useEffect, RefObject } from 'react'

export interface SpawnedParticle {
  id: number
  midX: number
  midY: number
  endX: number
  endY: number
}

interface UseParticlesOptions {
  containerRef: RefObject<HTMLDivElement | null>
  targetRef: RefObject<HTMLAnchorElement | null>
}

export function useParticles({ containerRef, targetRef }: UseParticlesOptions) {
  const [particles, setParticles] = useState<SpawnedParticle[]>([])
  const nextIdRef = useRef(0)

  const spawnParticle = useCallback(() => {
    const container = containerRef.current
    const target = targetRef.current
    if (!container || !target) return

    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()

    const centerX = containerRect.width / 2
    const centerY = containerRect.height / 2
    const targetCenterX = targetRect.left - containerRect.left + targetRect.width / 2
    const targetCenterY = targetRect.top - containerRect.top + targetRect.height / 2

    const endX = targetCenterX - centerX
    const endY = targetCenterY - centerY
    const midX = (Math.random() - 0.5) * 200
    const midY = (Math.random() - 0.5) * 200

    const id = nextIdRef.current++
    setParticles(prev => [...prev, { id, midX, midY, endX, endY }])

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id))
    }, 3200)
  }, [containerRef, targetRef])

  useEffect(() => {
    const initial = setTimeout(spawnParticle, 2000)
    const timer = setInterval(spawnParticle, 7000)
    return () => {
      clearTimeout(initial)
      clearInterval(timer)
    }
  }, [spawnParticle])

  return { particles }
}
