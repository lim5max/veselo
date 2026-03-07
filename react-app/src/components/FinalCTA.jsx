import { ArrowRight } from 'lucide-react'

const CTACharacter = () => (
  <svg viewBox="0 0 120 140" fill="none" className="mx-auto mb-6 h-[130px] w-28">
    <ellipse cx="60" cy="55" rx="48" ry="42" fill="white" opacity="0.15" />
    <circle cx="36" cy="58" r="4" fill="white" opacity="0.8" />
    <circle cx="72" cy="64" r="4" fill="white" opacity="0.8" />
    <path d="M30 70 C44 82, 64 82, 78 72" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
    <ellipse cx="48" cy="104" rx="8" ry="12" fill="white" opacity="0.12" />
    <ellipse cx="72" cy="104" rx="8" ry="12" fill="white" opacity="0.12" />
    <ellipse cx="14" cy="42" rx="7" ry="5" fill="white" opacity="0.12" />
    <ellipse cx="106" cy="42" rx="7" ry="5" fill="white" opacity="0.12" />
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
    <section className="relative overflow-hidden bg-indigo py-18 text-center text-white md:py-22">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,107,53,.15)_0%,transparent_50%,rgba(255,210,63,.1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(177,151,252,.15),transparent_60%)]" />
      <DoodleStar className="absolute top-8 left-[10%] h-8 w-8 animate-[wiggle_3s_ease-in-out_infinite]" />
      <DoodleStar className="absolute bottom-12 right-[12%] h-6 w-6 animate-[float-b_4s_ease-in-out_infinite]" />
      <DoodleStar className="absolute top-16 right-[25%] h-4 w-4 animate-[wiggle_5s_ease-in-out_infinite]" />

      <div className="relative z-1 mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="sr opacity-85">
          <CTACharacter />
        </div>
        <h2 className="sr sr-d1 mb-3 text-[1.625rem] leading-[1.3] md:text-[2.5rem] font-display font-black">
          Пока вы откладываете, ребёнок мог бы уже <span className="text-[1.2em] text-gold font-hand">заниматься</span>
        </h2>
        <p className="sr sr-d2 mx-auto mb-8 max-w-[500px] text-base opacity-80">
          Анкета на 2 минуты, и через час подборка у вас в мессенджере. Всё просто.
        </p>
        <button
          onClick={onQuiz}
          className="sr sr-d3 group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-[1.1rem] text-[1.0625rem] font-bold text-coral shadow-[0_8px_28px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-cream hover:shadow-[0_12px_36px_rgba(255,255,255,.2)] active:scale-[0.98] font-head"
        >
          Подобрать занятия
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
}
