export type TeamPillar = {
  id: string
  title: string
  emoji: string
  description: string
  /** Replace with `/team/your-name.jpg` (or keep SVG) — files live in `public/team/`. */
  photoSrc: string
  /** `img` alt text (accessibility). */
  photoAlt: string
  /** Optional line under the photo (e.g. name and title). If unset, `photoAlt` is shown in small caps. */
  photoCaption?: string
  /** Optional LinkedIn profile URL (icon under photo). */
  linkedinHref?: string
  href?: string
  cta?: string
}

/** Swap entries, photos, and links as your org publishes real bios. */
export const TEAM_PILLARS: TeamPillar[] = [
  {
    id: 'protocol',
    title: 'Protocol',
    emoji: '⚙️',
    description: 'Smart contracts, risk, and execution infrastructure behind the harvester.',
    photoSrc: '/team/vakhtanh.jpg',
    photoAlt: 'Vakhtanh Chikhladze, Founder, PhD candidate',
    photoCaption: 'Vakhtanh Chikhladze, Founder, PhD Candidate',
    linkedinHref: 'https://www.linkedin.com/in/vakhtanh-chikhladze-333410219/',
    href: 'https://docs.grindurus.xyz',
    cta: 'Documentation',
  },
  {
    id: 'product',
    title: 'Product',
    emoji: '🧩',
    description: 'Interfaces, integrations, and developer experience across chains.',
    photoSrc: '/team/product.svg',
    photoAlt: 'Vsevolod Zhuravlov, Fullstack Dev, ex. LTV Protocol',
    photoCaption: 'Vsevolod Zhuravlov, Fullstack Dev, ex. LTV Protocol',
    linkedinHref: 'https://www.linkedin.com/in/zhuravlof/',
    href: 'https://x.com/grindurus',
    cta: 'Updates',
  },
  {
    id: 'operations',
    title: 'Operations',
    emoji: '🤝',
    description: 'Partnerships, treasury programs, and ecosystem growth.',
    photoSrc: '/team/operations.svg',
    photoAlt: 'Ivan Synenko, Backend Dev, insurance guru',
    photoCaption: 'Ivan Synenko, Backend Dev, insurance guru',
    linkedinHref: 'https://www.linkedin.com/in/ivan-synenko-45227a294/',
    href: 'https://www.linkedin.com/in/vakhtanh-chikhladze-333410219/',
    cta: 'LinkedIn',
  },
]
