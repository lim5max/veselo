import { Check } from 'lucide-react'

const HappyPriceChar = () => (
  <svg viewBox="0 0 100 120" fill="none" className="w-24 h-[115px] mx-auto mb-4">
    {/* Round happy blob */}
    <circle cx="50" cy="46" r="40" fill="white" opacity="0.2" />
    {/* Eyes offset left, different heights — goofy */}
    <circle cx="32" cy="48" r="3.5" fill="white" opacity="0.8" />
    <circle cx="56" cy="52" r="3.5" fill="white" opacity="0.8" />
    {/* Wide goofy grin */}
    <path d="M28 58 C38 70, 52 70, 62 62" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
    {/* Tiny legs */}
    <ellipse cx="42" cy="94" rx="7" ry="10" fill="white" opacity="0.15" />
    <ellipse cx="58" cy="94" rx="7" ry="10" fill="white" opacity="0.15" />
    {/* Sparkles */}
    <path d="M80 16 C80 20, 80 20, 84 20 C80 20, 80 20, 80 24 C80 20, 80 20, 76 20 C80 20, 80 20, 80 16Z" fill="white" opacity="0.6" />
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
        <p className="sr sr-d1 font-hand text-xl text-n500 text-center mt-2 mb-10">Мы сделаем всю работу за вас ✦</p>
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
