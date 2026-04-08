import { INTEGRATED_PARTNERS } from '../../../constants/partners'

export function PartnersSection() {
  const marqueeItems = [
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
  ]

  return (
    <section className="py-10 border-y border-white/[0.08] overflow-hidden">
      <h2 className="font-mono font-bold text-[clamp(1.5rem,4vw,2.25rem)] text-white dark:text-white text-center mb-6">
        Integrated with
      </h2>
      <div className="overflow-hidden marquee-mask">
        <div className="flex gap-12 w-max px-6 animate-[marquee-scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeItems.map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline text-white/90 dark:text-white/90 flex-shrink-0 transition-all duration-200 hover:opacity-100"
            >
              {p.imgLight ? (
                <>
                  <img src={p.img}      alt={p.name} width={40} height={40} className="object-contain block dark:block [data-theme='light']_&:hidden" aria-hidden />
                  <img src={p.imgLight} alt={p.name} width={40} height={40} className="object-contain hidden dark:hidden [data-theme='light']_&:block" aria-hidden />
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
