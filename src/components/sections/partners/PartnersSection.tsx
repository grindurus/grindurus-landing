import { INTEGRATED_PARTNERS } from '../../../constants/partners'

export function PartnersSection() {
  const marqueeItems = [
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
  ]

  return (
    <section className="py-24 border-b border-black/10 dark:border-white/[0.08] overflow-hidden bg-black">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="font-mono font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.2] text-black dark:text-white text-center mb-6">
          Integrated with
        </h2>
      </div>
      <div className="overflow-hidden marquee-mask">
        <div className="flex gap-12 w-max px-6 animate-[marquee-scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeItems.map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline text-[#1a1a1a]/90 dark:text-white/90 flex-shrink-0 transition-all duration-200 hover:opacity-100"
            >
              {p.imgLight ? (
                <>
                  <img src={p.img}      alt={p.name} width={40} height={40} className="object-contain hidden dark:block" aria-hidden />
                  <img src={p.imgLight} alt={p.name} width={40} height={40} className="object-contain block dark:hidden" aria-hidden />
                </>
              ) : (
                <img src={p.img} alt={p.name} width={40} height={40} className="object-contain" />
              )}
              <span className="font-mono text-base font-semibold whitespace-nowrap">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
