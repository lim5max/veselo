import { useEffect, useState } from 'react'

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    {/* Happy circle character */}
    <circle cx="18" cy="18" r="16" fill="#FF6B35" />
    <circle cx="18" cy="18" r="16" fill="url(#logo-grad)" />
    {/* Eyes */}
    <ellipse cx="12.5" cy="15" rx="2.5" ry="3" fill="white" />
    <ellipse cx="23.5" cy="15" rx="2.5" ry="3" fill="white" />
    <circle cx="13" cy="15.5" r="1.5" fill="#2D1B69" />
    <circle cx="24" cy="15.5" r="1.5" fill="#2D1B69" />
    {/* Sparkle eyes */}
    <circle cx="13.8" cy="14.5" r="0.6" fill="white" />
    <circle cx="24.8" cy="14.5" r="0.6" fill="white" />
    {/* Happy mouth */}
    <path d="M12 22 C14 26, 22 26, 24 22" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Rosy cheeks */}
    <circle cx="9" cy="21" r="2.5" fill="#FF8FAB" opacity="0.5" />
    <circle cx="27" cy="21" r="2.5" fill="#FF8FAB" opacity="0.5" />
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36">
        <stop offset="0%" stopColor="#FF6B35" />
        <stop offset="100%" stopColor="#FFD23F" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Navbar({ onQuiz }) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const handler = () => setStuck(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-400 ease-out ${
      stuck
        ? 'py-2.5 bg-cream/92 backdrop-blur-[20px] backdrop-saturate-[1.4] shadow-[0_2px_20px_rgba(45,27,105,.06)]'
        : 'py-4'
    }`}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-head font-black text-[1.6rem] text-indigo tracking-tight">
          <LogoIcon />
          <span>Весело</span>
        </a>
        <button
          onClick={onQuiz}
          className="bg-coral text-white font-head font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-coral-dk hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,107,53,.2)] active:scale-[0.97]"
        >
          Подобрать занятия
        </button>
      </div>
    </nav>
  )
}
