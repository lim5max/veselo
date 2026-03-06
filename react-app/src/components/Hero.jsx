import { ArrowRight } from 'lucide-react'

const CHILD_PHOTO = 'https://files.1mi.media/f6aaefee1c8c421c941dce6a5a0412f3891d1e3a/c:1456:819:nowe:0:-2/4767aa549d078e28aa31a22545adcf6fb9b965351d0e73172e634f0336ed.webp'

/* Hand-drawn doodles */
const Sparkle4 = ({ className = '', color = '#F8DC5B' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 0 C12 10, 12 10, 12 12 C12 10, 12 10, 24 12 C12 12, 12 12, 12 24 C12 12, 12 12, 0 12 C12 12, 12 12, 12 0Z" fill={color} opacity="0.55" />
  </svg>
)

const DoodleHeart = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21 C6 16, 2 12, 2 8 C2 5, 4.5 2, 7.5 2 C9.5 2, 11 3, 12 5 C13 3, 14.5 2, 16.5 2 C19.5 2, 22 5, 22 8 C22 12, 18 16, 12 21Z" fill="#F6A4E8" opacity="0.4" />
  </svg>
)

const DoodleCurve = ({ className = '' }) => (
  <svg viewBox="0 0 120 40" fill="none" className={className}>
    <path d="M5 30 C25 5, 55 35, 80 15 C95 5, 105 18, 115 10" stroke="#6C52C9" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 5" opacity="0.12" />
  </svg>
)

const avatars = [
  { letter: 'М', gradient: 'linear-gradient(135deg,#FFA561,#FFC08C)' },
  { letter: 'О', gradient: 'linear-gradient(135deg,#C9A4FF,#A684F4)' },
  { letter: 'Д', gradient: 'linear-gradient(135deg,#91E27A,#9AF0A6)' },
  { letter: 'А', gradient: 'linear-gradient(135deg,#F8DC5B,#fbbf24)' },
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
      <Sparkle4 className="absolute top-52 left-[8%] w-5 h-5 animate-[float-b_4s_ease-in-out_infinite]" color="#FFA561" />
      <DoodleHeart className="absolute bottom-28 right-[22%] w-8 h-8 animate-[float-a_5s_ease-in-out_infinite]" />
      <Sparkle4 className="absolute bottom-44 left-[12%] w-5 h-5 animate-[wiggle_4s_ease-in-out_infinite]" color="#C9A4FF" />
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

          {/* Desktop: Photo composition with floating badges */}
          <div className="sr sr-d2 relative h-[480px] lg:h-[520px] hidden md:block">
            {/* Anchoring background card */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[48%] -translate-y-[48%] w-[420px] h-[420px] z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-peach-lt/60 to-lavender-lt/50 rounded-[48px] rotate-[-4deg] shadow-[0_24px_80px_rgba(45,27,105,.06),0_8px_32px_rgba(255,107,53,.06)] border border-white/60" />
              <div className="absolute inset-3 bg-gradient-to-tr from-gold-lt/30 via-transparent to-coral-lt/20 rounded-[44px] rotate-[-4deg]" />
            </div>

            {/* Child photo */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[380px] h-[380px] z-[2]">
              <img
                src={CHILD_PHOTO}
                alt="Счастливый ребёнок на занятиях"
                className="w-full h-full object-cover rounded-[40px] shadow-[0_20px_60px_rgba(45,27,105,.12)]"
              />
              {/* Soft gradient overlay at bottom for blending */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-cream/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge: Creativity — top-right */}
            <div className="absolute top-[20px] right-[10px] z-[5] animate-[float-a_5s_ease-in-out_infinite]">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3.5 py-2 shadow-[0_6px_24px_rgba(0,0,0,.08)] border border-n200/40 flex items-center gap-1.5">
                <span className="text-[0.8rem]">🎨</span>
                <span className="text-[0.7rem] font-bold text-indigo">Творчество</span>
              </div>
            </div>

            {/* Floating badge: Sport — right side */}
            <div className="absolute top-[180px] right-[-10px] z-[5] animate-[float-b_6s_ease-in-out_infinite]">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3.5 py-2 shadow-[0_6px_24px_rgba(0,0,0,.08)] border border-n200/40 flex items-center gap-1.5">
                <span className="text-[0.8rem]">⚽</span>
                <span className="text-[0.7rem] font-bold text-indigo">Спорт</span>
              </div>
            </div>

            {/* Floating badge: Dance — bottom-right */}
            <div className="absolute bottom-[40px] right-[20px] z-[5] animate-[float-c_4.5s_ease-in-out_infinite]">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3.5 py-2 shadow-[0_6px_24px_rgba(0,0,0,.08)] border border-n200/40 flex items-center gap-1.5">
                <span className="text-[0.8rem]">💃</span>
                <span className="text-[0.7rem] font-bold text-indigo">Танцы</span>
              </div>
            </div>

            {/* Floating stat card — bottom-left */}
            <div className="absolute bottom-[60px] left-[0px] z-[5] animate-[float-a_5s_ease-in-out_infinite]">
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

            {/* Small rating badge — top-left */}
            <div className="absolute top-[30px] left-[-10px] z-[5] animate-[float-c_6s_ease-in-out_infinite]">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-[0_8px_28px_rgba(45,27,105,.07)] border border-white/70">
                <div className="flex items-center gap-1">
                  <span className="text-gold text-[0.75rem]">★★★★★</span>
                </div>
                <p className="text-[0.55rem] text-n500 mt-0.5 font-medium">870+ подборок</p>
              </div>
            </div>

            {/* Music note badge */}
            <div className="absolute bottom-[200px] left-[-15px] z-[5] animate-[wiggle_3s_ease-in-out_infinite]">
              <div className="bg-gold/15 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-[1rem]">🎵</span>
              </div>
            </div>

            {/* Sparkle accents */}
            <Sparkle4 className="absolute top-[100px] right-[0px] w-6 h-6 z-[6] animate-[wiggle_2.5s_ease-in-out_infinite]" />
            <Sparkle4 className="absolute bottom-[150px] left-[-25px] w-4 h-4 z-[6] animate-[float-a_3.5s_ease-in-out_infinite]" color="#C9A4FF" />
            <Sparkle4 className="absolute top-[60px] right-[180px] w-4 h-4 z-[6] animate-[float-b_4s_ease-in-out_infinite]" color="#F6A4E8" />
          </div>

          {/* Mobile: Photo */}
          <div className="sr sr-d2 md:hidden relative mx-auto w-[280px] h-[280px]">
            <div className="absolute -inset-3 bg-gradient-to-br from-peach-lt/60 via-lavender-lt/40 to-gold-lt/50 rounded-[36px] rotate-[-3deg]" />
            <img
              src={CHILD_PHOTO}
              alt="Счастливый ребёнок на занятиях"
              className="relative w-full h-full object-cover rounded-[28px] shadow-[0_16px_48px_rgba(45,27,105,.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
