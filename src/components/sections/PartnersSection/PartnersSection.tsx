import { INTEGRATED_PARTNERS } from '../../../constants/partners'
import './PartnersSection.css'

export function PartnersSection() {
  // Quadruple the list to ensure seamless infinite scroll
  const marqueeItems = [
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
    ...INTEGRATED_PARTNERS,
  ]

  return (
    <section className="partners-section">
      <h2 className="partners-title">Integrated with</h2>
      <div className="partners-marquee">
        <div className="partners-track">
          {marqueeItems.map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="partners-logo"
            >
              {p.imgLight ? (
                <>
                  <img
                    src={p.img}
                    alt={p.name}
                    width={32}
                    height={32}
                    className="partners-logo-dark"
                    aria-hidden
                  />
                  <img
                    src={p.imgLight}
                    alt={p.name}
                    width={32}
                    height={32}
                    className="partners-logo-light"
                    aria-hidden
                  />
                </>
              ) : (
                <img src={p.img} alt={p.name} width={32} height={32} />
              )}
              <span className="partners-logo-name">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
