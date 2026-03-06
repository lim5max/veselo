import { ArrowRight } from 'lucide-react'

const CTACharacter = () => (
  <svg viewBox="0 0 120 140" fill="none" className="w-28 h-[130px] mx-auto mb-6">
    {/* Big happy blob */}
    <ellipse cx="60" cy="55" rx="48" ry="42" fill="white" opacity="0.15" />
    {/* Eyes low and wide, left higher — goofy */}
    <circle cx="36" cy="58" r="4" fill="white" opacity="0.8" />
    <circle cx="72" cy="64" r="4" fill="white" opacity="0.8" />
    {/* Wide goofy grin spanning under eyes */}
    <path d="M30 70 C44 82, 64 82, 78 72" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
    {/* Tiny legs */}
    <ellipse cx="48" cy="104" rx="8" ry="12" fill="white" opacity="0.12" />
    <ellipse cx="72" cy="104" rx="8" ry="12" fill="white" opacity="0.12" />
    {/* Small raised arms */}
    <ellipse cx="14" cy="42" rx="7" ry="5" fill="white" opacity="0.12" />
    <ellipse cx="106" cy="42" rx="7" ry="5" fill="white" opacity="0.12" />
    {/* Sparkles */}
    <path d="M10 14 C10 18, 10 18, 14 18 C10 18, 10 18, 10 22 C10 18, 10 18, 6 18 C10 18, 10 18, 10 14Z" fill="#FFD23F" opacity="0.8" />
    <path d="M110 12 C110 16, 110 16, 114 16 C110 16, 110 16, 110 20 C110 16, 110 16, 106 16 C110 16, 110 16, 110 12Z" fill="#FFD23F" opacity="0.8" />
  </svg>
)

const DoodleStar = ({ className = '' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 0 C10 7, 10 7, 10 10 C10 7, 10 7, 20 10 C10 10, 10 10, 10 20 C10 10, 10 10, 0 10Z" fill="white" opacity="0.1" />
  </svg>
)

export default function FinalCTA({ onQuiz }) {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden bg-indigo text-white text-center">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,107,53,.15)_0%,transparent_50%,rgba(255,210,63,.1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(177,151,252,.15),transparent_60%)]" />
      {/* Doodle decorations */}
      <DoodleStar className="absolute top-8 left-[10%] w-10 h-10 animate-[wiggle_3s_ease-in-out_infinite]" />
      <DoodleStar className="absolute bottom-12 right-[12%] w-7 h-7 animate-[float-b_4s_ease-in-out_infinite]" />
      <DoodleStar className="absolute top-16 right-[25%] w-5 h-5 animate-[wiggle_5s_ease-in-out_infinite]" />
      <DoodleStar className="absolute bottom-20 left-[20%] w-4 h-4 animate-[float-a_6s_ease-in-out_infinite]" />
      <DoodleStar className="absolute top-12 left-[40%] w-6 h-6 animate-[float-c_5s_ease-in-out_infinite]" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative z-1">
        <div className="sr">
          <CTACharacter />
        </div>
        <h2 className="sr sr-d1 font-display font-black text-[1.625rem] md:text-[2.5rem] mb-3 leading-[1.3]">
          Пока вы откладываете — ребёнок мог&nbsp;бы уже <span className="font-hand text-gold text-[1.2em]">заниматься</span>
        </h2>
        <p className="sr sr-d2 opacity-80 text-base mb-8 max-w-[500px] mx-auto">
          Анкета на&nbsp;2&nbsp;минуты — и&nbsp;через час подборка у&nbsp;вас в&nbsp;мессенджере. Всё просто.
        </p>
        <button
          onClick={onQuiz}
          className="sr sr-d3 inline-flex items-center gap-2.5 bg-white text-coral font-head font-bold text-[1.0625rem] py-[1.1rem] px-10 rounded-full transition-all duration-300 hover:bg-cream hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(255,255,255,.2)] hover:scale-[1.03] active:scale-[0.98] shadow-[0_8px_28px_rgba(0,0,0,.15)] group"
        >
          Подобрать занятия <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
}
