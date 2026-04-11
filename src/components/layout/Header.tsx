import { APP_URL } from '../../config'
import logo from '@/assets/logo.png'

function Header() {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-8 h-[74px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 no-underline group">
          <img src={logo} alt="GrindURUS" className="w-10 h-10 object-contain" />
          <span
            className="text-2xl font-semibold font-mono bg-shimmer-size animate-shimmer bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #ff69b4, #ffffff, #ff1493, #ffffff, #ff69b4)' }}
          >
            GrindURUS
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={`${APP_URL}/grinders`}
            className="px-6 py-2.5 rounded-xl font-mono font-bold text-sm text-white no-underline transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,105,180,0.5)]"
            style={{ background: 'linear-gradient(90deg,#ff69b4,#ff1493)' }}
          >
            Open App
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
