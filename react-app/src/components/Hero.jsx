import { ArrowRight } from 'lucide-react'

/* ---- Kawaii Characters ---- */
const SportyCircle = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className}>
    <circle cx="60" cy="60" r="54" fill="#38BDF8" />
    <ellipse cx="45" cy="50" rx="6" ry="7" fill="white" />
    <ellipse cx="75" cy="50" rx="6" ry="7" fill="white" />
    <circle cx="46" cy="51" r="4" fill="#2D1B69" />
    <circle cx="76" cy="51" r="4" fill="#2D1B69" />
    <circle cx="48" cy="49" r="1.5" fill="white" />
    <circle cx="78" cy="49" r="1.5" fill="white" />
    <path d="M42 72 C48 82, 72 82, 78 72" stroke="#2D1B69" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="65" r="6" fill="#FF8FAB" opacity="0.4" />
    <circle cx="88" cy="65" r="6" fill="#FF8FAB" opacity="0.4" />
    <path d="M12 42 C30 35, 90 35, 108 42" stroke="#FF6B35" strokeWidth="5" strokeLinecap="round" fill="none" />
    <circle cx="60" cy="10" r="8" fill="#FFD23F" />
    <path d="M56 8 L60 2 L64 8" fill="#FFD23F" />
  </svg>
)

const ArtisticBlob = ({ className = '' }) => (
  <svg viewBox="0 0 120 130" fill="none" className={className}>
    <path d="M20 40 C10 20, 40 5, 60 8 C80 5, 110 20, 100 40 C115 55, 110 80, 95 95 C80 110, 40 110, 25 95 C10 80, 5 55, 20 40Z" fill="#B197FC" />
    <ellipse cx="45" cy="55" rx="5.5" ry="3.5" fill="white" />
    <ellipse cx="75" cy="55" rx="5.5" ry="3.5" fill="white" />
    <circle cx="46" cy="55.5" r="2.5" fill="#2D1B69" />
    <circle cx="76" cy="55.5" r="2.5" fill="#2D1B69" />
    <path d="M48 74 C53 80, 67 80, 72 74" stroke="#2D1B69" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="35" cy="68" r="5" fill="#FF8FAB" opacity="0.35" />
    <circle cx="85" cy="68" r="5" fill="#FF8FAB" opacity="0.35" />
    <rect x="88" y="20" width="4" height="28" rx="2" fill="#8B5CF6" transform="rotate(30 90 34)" />
    <path d="M96 10 C100 8, 104 14, 100 20 C96 26, 88 22, 92 16Z" fill="#FF6B35" transform="rotate(30 96 15)" />
  </svg>
)

const MusicStar = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className}>
    <path d="M60 5 L72 42 L112 42 L80 65 L90 102 L60 80 L30 102 L40 65 L8 42 L48 42Z" fill="#FFD23F" />
    <ellipse cx="48" cy="50" rx="4.5" ry="5.5" fill="white" />
    <ellipse cx="72" cy="50" rx="4.5" ry="5.5" fill="white" />
    <circle cx="49" cy="51" r="3" fill="#2D1B69" />
    <circle cx="73" cy="51" r="3" fill="#2D1B69" />
    <circle cx="50.5" cy="49.5" r="1.2" fill="white" />
    <circle cx="74.5" cy="49.5" r="1.2" fill="white" />
    <path d="M50 66 C54 72, 66 72, 70 66" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="40" cy="60" r="4" fill="#FF8FAB" opacity="0.4" />
    <circle cx="80" cy="60" r="4" fill="#FF8FAB" opacity="0.4" />
    <circle cx="22" cy="95" r="5" fill="#2D1B69" />
    <rect x="26" y="72" width="2.5" height="23" rx="1" fill="#2D1B69" />
    <path d="M28 72 C32 68, 38 70, 36 76" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
)

const DancingSquiggle = ({ className = '' }) => (
  <svg viewBox="0 0 100 130" fill="none" className={className}>
    <path d="M20 30 C10 15, 35 0, 50 5 C65 0, 90 15, 80 30 C95 40, 95 70, 80 85 C90 100, 75 120, 50 115 C25 120, 10 100, 20 85 C5 70, 5 40, 20 30Z" fill="#FF8FAB" />
    <ellipse cx="38" cy="48" rx="5" ry="6" fill="white" />
    <ellipse cx="62" cy="48" rx="5" ry="6" fill="white" />
    <circle cx="39" cy="49" r="3.5" fill="#2D1B69" />
    <circle cx="63" cy="49" r="3.5" fill="#2D1B69" />
    <circle cx="40.5" cy="47" r="1.3" fill="white" />
    <circle cx="64.5" cy="47" r="1.3" fill="white" />
    <ellipse cx="50" cy="68" rx="8" ry="5" fill="#2D1B69" opacity="0.8" />
    <ellipse cx="50" cy="67" rx="5" ry="3" fill="#E11D7A" />
    <circle cx="28" cy="60" r="5" fill="#FFD23F" opacity="0.35" />
    <circle cx="72" cy="60" r="5" fill="#FFD23F" opacity="0.35" />
  </svg>
)

/* Hand-drawn doodles */
const Sparkle4 = ({ className = '', color = '#FFD23F' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 0 C12 10, 12 10, 12 12 C12 10, 12 10, 24 12 C12 12, 12 12, 12 24 C12 12, 12 12, 0 12 C12 12, 12 12, 12 0Z" fill={color} opacity="0.55" />
  </svg>
)

const DoodleHeart = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21 C6 16, 2 12, 2 8 C2 5, 4.5 2, 7.5 2 C9.5 2, 11 3, 12 5 C13 3, 14.5 2, 16.5 2 C19.5 2, 22 5, 22 8 C22 12, 18 16, 12 21Z" fill="#FF8FAB" opacity="0.4" />
  </svg>
)

const DoodleCurve = ({ className = '' }) => (
  <svg viewBox="0 0 120 40" fill="none" className={className}>
    <path d="M5 30 C25 5, 55 35, 80 15 C95 5, 105 18, 115 10" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 5" opacity="0.12" />
  </svg>
)

const avatars = [
  { letter: 'М', gradient: 'linear-gradient(135deg,#FF6B35,#ff8f65)' },
  { letter: 'О', gradient: 'linear-gradient(135deg,#B197FC,#8B5CF6)' },
  { letter: 'Д', gradient: 'linear-gradient(135deg,#22C55E,#34d399)' },
  { letter: 'А', gradient: 'linear-gradient(135deg,#FFD23F,#fbbf24)' },
]

export default function Hero({ onQuiz }) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Layered warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-peach-lt/30 pointer-events-none" />
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,var(--color-peach-lt)_0%,transparent_65%)] pointer-events-none opacity-70" />
      <div className="absolute -bottom-[100px] -left-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-lavender-lt)_0%,transparent_65%)] pointer-events-none opacity-50" />
      <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,var(--color-gold-lt)_0%,transparent_65%)] pointer-events-none opacity-30" />

      {/* Floating doodles */}
      <Sparkle4 className="absolute top-32 right-[15%] w-7 h-7 animate-[wiggle_3s_ease-in-out_infinite]" />
      <Sparkle4 className="absolute top-52 left-[8%] w-5 h-5 animate-[float-b_4s_ease-in-out_infinite]" color="#FF6B35" />
      <DoodleHeart className="absolute bottom-28 right-[22%] w-8 h-8 animate-[float-a_5s_ease-in-out_infinite]" />
      <Sparkle4 className="absolute bottom-44 left-[12%] w-5 h-5 animate-[wiggle_4s_ease-in-out_infinite]" color="#B197FC" />
      <DoodleCurve className="absolute bottom-16 left-[5%] w-32 h-10 opacity-60" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        <div className="grid gap-10 items-center lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="relative z-2">
            <div className="sr inline-flex items-center gap-2.5 bg-gold-lt/80 text-[#A67B00] font-hand font-bold text-[1.2rem] px-5 py-1.5 rounded-full mb-7 border border-gold/15 backdrop-blur-sm shadow-[0_2px_12px_rgba(255,210,63,.12)]">
              Кружки, секции, курсы, мастер-классы
            </div>
            <h1 className="sr sr-d1 font-display font-black text-[2.5rem] sm:text-[3.25rem] lg:text-[3.85rem] leading-[1.08] text-indigo mb-6 tracking-[-0.02em]">
              Подберём{' '}
              <span className="text-pill text-pill-coral">занятия</span>{' '}
              ребёнку на&nbsp;основе{' '}
              <span className="text-pill text-pill-gold">предпочтений</span>
            </h1>
            <p className="sr sr-d2 text-[1.05rem] text-n700 max-w-[500px] mb-3 leading-[1.75]">
              Ответьте на 5&nbsp;вопросов за&nbsp;2&nbsp;минуты&nbsp;— и&nbsp;получите персональную подборку из&nbsp;3-5 лучших кружков рядом с&nbsp;домом.
            </p>
            <p className="sr sr-d2 font-hand text-[1.35rem] text-n500 mb-9">Прямо в мессенджер, без лишних поисков ✦</p>
            <button
              onClick={onQuiz}
              className="sr sr-d3 inline-flex items-center gap-2.5 bg-coral text-white font-head font-bold text-[1.05rem] px-10 py-[1.1rem] rounded-full transition-all duration-300 animate-[glow-pulse_2.8s_ease-in-out_infinite] hover:bg-coral-dk hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] group shadow-[0_8px_32px_rgba(255,107,53,.25)]"
            >
              Подобрать занятия
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            <div className="sr sr-d4 flex items-center gap-3.5 mt-8 text-[0.8125rem] text-n500">
              <div className="flex">
                {avatars.map((a, i) => (
                  <span
                    key={i}
                    className="w-8 h-8 rounded-full border-[2.5px] border-cream flex items-center justify-center text-[0.5rem] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,.08)]"
                    style={{ background: a.gradient, marginLeft: i > 0 ? '-8px' : 0 }}
                  >
                    {a.letter}
                  </span>
                ))}
              </div>
              <span className="font-medium">870+ подборок уже отправлено родителям</span>
            </div>
          </div>

          {/* Desktop: Dense character composition with overlapping depth */}
          <div className="sr sr-d2 relative h-[480px] lg:h-[520px] hidden md:block">
            {/* Anchoring background card — large rounded shape that grounds everything */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[48%] -translate-y-[48%] w-[420px] h-[420px] z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-peach-lt/60 to-lavender-lt/50 rounded-[48px] rotate-[-4deg] shadow-[0_24px_80px_rgba(45,27,105,.06),0_8px_32px_rgba(255,107,53,.06)] border border-white/60" />
              <div className="absolute inset-3 bg-gradient-to-tr from-gold-lt/30 via-transparent to-coral-lt/20 rounded-[44px] rotate-[-4deg]" />
            </div>

            {/* Decorative dashed orbit ring */}
            <svg className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[48%] w-[380px] h-[380px] z-[1] animate-[spin_60s_linear_infinite]" viewBox="0 0 380 380" fill="none">
              <circle cx="190" cy="190" r="170" stroke="#B197FC" strokeWidth="1.5" strokeDasharray="8 12" opacity="0.2" />
            </svg>

            {/* Main character — SportyCircle, hero position top-right, LARGE */}
            <div className="absolute top-[10px] right-[10px] z-[5] animate-[float-a_7s_ease-in-out_infinite]">
              <div className="relative">
                <SportyCircle className="w-[185px] h-[185px] drop-shadow-[0_16px_40px_rgba(56,189,248,.25)]" />
                {/* Badge: activity type */}
                <div className="absolute -bottom-2 -left-3 bg-white rounded-xl px-3 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,.08)] border border-n200/40 flex items-center gap-1.5 animate-[float-b_5s_ease-in-out_infinite]">
                  <span className="text-[0.7rem]">⚽</span>
                  <span className="text-[0.65rem] font-bold text-indigo">Спорт</span>
                </div>
              </div>
            </div>

            {/* ArtisticBlob — overlaps SportyCircle from the left */}
            <div className="absolute top-[40px] right-[195px] z-[4] animate-[float-b_6s_ease-in-out_infinite]">
              <div className="relative">
                <ArtisticBlob className="w-[155px] h-[167px] drop-shadow-[0_14px_36px_rgba(177,151,252,.25)]" />
                {/* Badge: creativity */}
                <div className="absolute -top-1 -right-4 bg-white rounded-xl px-3 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,.08)] border border-n200/40 flex items-center gap-1.5 animate-[float-a_4s_ease-in-out_infinite]">
                  <span className="text-[0.7rem]">🎨</span>
                  <span className="text-[0.65rem] font-bold text-indigo">Творчество</span>
                </div>
              </div>
            </div>

            {/* MusicStar — center-left, overlaps both blobs above */}
            <div className="absolute bottom-[100px] right-[230px] z-[6] animate-[float-c_8s_ease-in-out_infinite]">
              <div className="relative">
                <MusicStar className="w-[150px] h-[150px] drop-shadow-[0_14px_36px_rgba(255,210,63,.3)]" />
              </div>
            </div>

            {/* DancingSquiggle — bottom-right, overlaps MusicStar */}
            <div className="absolute bottom-[15px] right-[40px] z-[3] animate-[float-b_9s_ease-in-out_infinite_reverse]">
              <div className="relative">
                <DancingSquiggle className="w-[150px] h-[195px] drop-shadow-[0_14px_36px_rgba(255,143,171,.25)]" />
                {/* Badge: dance */}
                <div className="absolute top-2 -left-6 bg-white rounded-xl px-3 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,.08)] border border-n200/40 flex items-center gap-1.5 animate-[float-c_4.5s_ease-in-out_infinite]">
                  <span className="text-[0.7rem]">💃</span>
                  <span className="text-[0.65rem] font-bold text-indigo">Танцы</span>
                </div>
              </div>
            </div>

            {/* Floating stat card — adds tbh-style content density */}
            <div className="absolute bottom-[85px] right-[5px] z-[8] animate-[float-a_5s_ease-in-out_infinite]">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(45,27,105,.08)] border border-white/70">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-coral-dk flex items-center justify-center">
                    <span className="text-white text-[0.65rem] font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-[0.6rem] text-n500 leading-tight">Подобрано за</p>
                    <p className="text-[0.85rem] font-black text-indigo leading-tight">2 минуты</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small rating badge — top-left floating */}
            <div className="absolute top-[25px] right-[370px] z-[7] animate-[float-c_6s_ease-in-out_infinite]">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-[0_8px_28px_rgba(45,27,105,.07)] border border-white/70">
                <div className="flex items-center gap-1">
                  <span className="text-gold text-[0.75rem]">★★★★★</span>
                </div>
                <p className="text-[0.55rem] text-n500 mt-0.5 font-medium">870+ подборок</p>
              </div>
            </div>

            {/* Music note badge near MusicStar */}
            <div className="absolute bottom-[240px] right-[185px] z-[7] animate-[wiggle_3s_ease-in-out_infinite]">
              <div className="bg-gold/15 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-[1rem]">🎵</span>
              </div>
            </div>

            {/* Sparkle accents between characters */}
            <Sparkle4 className="absolute top-[195px] right-[155px] w-6 h-6 z-[9] animate-[wiggle_2.5s_ease-in-out_infinite]" />
            <Sparkle4 className="absolute bottom-[200px] right-[380px] w-4 h-4 z-[9] animate-[float-a_3.5s_ease-in-out_infinite]" color="#B197FC" />
            <Sparkle4 className="absolute top-[70px] right-[145px] w-4 h-4 z-[9] animate-[float-b_4s_ease-in-out_infinite]" color="#FF8FAB" />
            <Sparkle4 className="absolute bottom-[60px] right-[225px] w-3.5 h-3.5 z-[9] animate-[wiggle_3.5s_ease-in-out_infinite]" color="#FF6B35" />
          </div>

          {/* Mobile character row */}
          <div className="sr sr-d2 md:hidden flex justify-center items-end gap-2 py-4">
            <SportyCircle className="w-[72px] h-[72px] animate-[bounce-soft_3s_ease-in-out_infinite] -mr-2" />
            <ArtisticBlob className="w-[68px] h-[75px] animate-[bounce-soft_3s_ease-in-out_infinite_.2s] -mb-1" />
            <MusicStar className="w-[68px] h-[68px] animate-[bounce-soft_3s_ease-in-out_infinite_.4s] -mr-2" />
            <DancingSquiggle className="w-[64px] h-[83px] animate-[bounce-soft_3s_ease-in-out_infinite_.6s]" />
          </div>
        </div>
      </div>
    </section>
  )
}
