import { Check } from 'lucide-react'

const HappyPriceChar = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 mx-auto mb-4">
    <circle cx="50" cy="50" r="44" fill="white" opacity="0.2" />
    <ellipse cx="38" cy="42" rx="6" ry="7" fill="white" />
    <ellipse cx="62" cy="42" rx="6" ry="7" fill="white" />
    <circle cx="39" cy="43" r="4" fill="#2D1B69" />
    <circle cx="63" cy="43" r="4" fill="#2D1B69" />
    <circle cx="40.5" cy="41" r="1.5" fill="white" />
    <circle cx="64.5" cy="41" r="1.5" fill="white" />
    <path d="M38 64 C42 72, 58 72, 62 64" stroke="#2D1B69" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="28" cy="56" r="6" fill="#FFD23F" opacity="0.3" />
    <circle cx="72" cy="56" r="6" fill="#FFD23F" opacity="0.3" />
    {/* Coin sparkle */}
    <path d="M78 18 C78 22, 78 22, 82 22 C78 22, 78 22, 78 26 C78 22, 78 22, 74 22 C78 22, 78 22, 78 18Z" fill="white" opacity="0.6" />
    <path d="M18 14 C18 17, 18 17, 21 17 C18 17, 18 17, 18 20 C18 17, 18 17, 15 17 C18 17, 18 17, 18 14Z" fill="white" opacity="0.6" />
  </svg>
)

const features = [
  '3-5 занятий, подобранных под ребёнка',
  'Адреса, цены, расписание — в\u00a0одном сообщении',
  'Экономия целого вечера (а то и нескольких)',
  'Не подойдёт — дополним бесплатно',
]

export default function Pricing({ onQuiz }) {
  return (
    <section className="py-20 md:py-[6.5rem] relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dk/30 to-cream pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        <h2 className="sr font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] text-center mx-auto">
          Персональная <span className="text-pill text-pill-coral">подборка</span>
        </h2>
        <p className="sr sr-d1 font-hand text-xl text-n500 text-center mt-2 mb-10">Вы выбираете — мы делаем всю работу ✦</p>
        <div className="sr sr-d2 max-w-[480px] mx-auto bg-white rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(255,107,53,.12),0_8px_32px_rgba(26,26,46,.06)] border-2 border-coral/10 transition-all duration-500 hover:shadow-[0_32px_80px_rgba(255,107,53,.18),0_12px_40px_rgba(26,26,46,.08)] hover:-translate-y-1">
          <div className="bg-gradient-to-br from-coral via-[#FF8F65] to-gold p-10 text-center text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-white/[0.07] rounded-full" />
            <HappyPriceChar />
            <div className="font-display font-black text-[4rem] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,.1)]">200<small className="text-2xl font-bold ml-1">₽</small></div>
            <div className="font-hand text-xl mt-2 opacity-90">за подборку занятий</div>
            <div className="absolute -bottom-px left-0 right-0 h-6 bg-white rounded-t-[32px]" />
          </div>
          <div className="p-8">
            <ul className="mb-6">
              {features.map((f, i) => (
                <li key={i} className={`flex items-start gap-3 py-2.5 text-sm text-n700 ${i > 0 ? 'border-t border-n100' : ''}`}>
                  <span className="w-5 h-5 rounded-full bg-green-lt flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-green" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={onQuiz}
              className="block w-full bg-coral text-white font-head font-bold text-[1.0625rem] py-[1.1rem] rounded-full text-center transition-all duration-300 animate-[glow-pulse_2.8s_ease-in-out_infinite] hover:bg-coral-dk hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_28px_rgba(255,107,53,.25)]"
            >
              Получить подборку
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
