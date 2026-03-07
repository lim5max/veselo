import { Check } from 'lucide-react'

const HappyPriceChar = () => (
  <svg viewBox="0 0 100 120" fill="none" className="mx-auto mb-4 h-[115px] w-24">
    <circle cx="50" cy="46" r="40" fill="white" opacity="0.2" />
    <circle cx="32" cy="48" r="3.5" fill="white" opacity="0.8" />
    <circle cx="56" cy="52" r="3.5" fill="white" opacity="0.8" />
    <path d="M28 58 C38 70, 52 70, 62 62" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
    <ellipse cx="42" cy="94" rx="7" ry="10" fill="white" opacity="0.15" />
    <ellipse cx="58" cy="94" rx="7" ry="10" fill="white" opacity="0.15" />
    <path d="M80 16 C80 20, 80 20, 84 20 C80 20, 80 20, 80 24 C80 20, 80 20, 76 20 C80 20, 80 20, 80 16Z" fill="white" opacity="0.6" />
    <path d="M18 14 C18 17, 18 17, 21 17 C18 17, 18 17, 18 20 C18 17, 18 17, 15 17 C18 17, 18 17, 18 14Z" fill="white" opacity="0.6" />
  </svg>
)

const features = [
  '3-5 занятий, подобранных под ребёнка',
  'Адреса, цены, расписание в одном сообщении',
  'Экономия целого вечера, а иногда и нескольких',
  'Если не подойдёт, бесплатно дополним подборку',
]

export default function Pricing({ onQuiz }) {
  return (
    <section className="relative py-16 md:py-20" id="pricing">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-dk/20 to-transparent" />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <h2 className="sr mx-auto text-center text-[1.875rem] leading-[1.2] text-indigo md:text-[2.5rem] font-display font-black">
          Персональная <span className="text-pill text-pill-coral">подборка</span>
        </h2>
        <p className="sr sr-d1 mt-2 mb-8 text-center text-xl text-n500 font-hand">Мы сделаем всю работу за вас ✦</p>

        <div className="sr sr-d2 mx-auto max-w-[460px] overflow-hidden rounded-[28px] border border-coral/10 bg-white/92 shadow-[0_20px_60px_rgba(255,107,53,.1),0_8px_32px_rgba(26,26,46,.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(255,107,53,.14),0_12px_40px_rgba(26,26,46,.08)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-coral via-[#FF8F65] to-gold p-8 text-center text-white">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-white/10" />
            <div className="absolute -right-8 -bottom-4 h-32 w-32 rounded-full bg-white/[0.07]" />
            <HappyPriceChar />
            <div className="font-display text-[3.5rem] leading-none font-black drop-shadow-[0_2px_8px_rgba(0,0,0,.1)]">
              200
              <small className="ml-1 text-2xl font-bold">₽</small>
            </div>
            <div className="mt-2 text-xl opacity-90 font-hand">за подборку занятий</div>
            <div className="absolute right-0 bottom-0 left-0 h-6 rounded-t-[32px] bg-white" />
          </div>

          <div className="p-7">
            <ul className="mb-6">
              {features.map((feature, index) => (
                <li key={feature} className={`flex items-start gap-3 py-2.5 text-sm text-n700 ${index > 0 ? 'border-t border-n100' : ''}`}>
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-lt">
                    <Check size={12} className="text-green" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={onQuiz}
              className="block w-full rounded-full bg-coral py-[1.05rem] text-center text-[1.03rem] font-bold text-white shadow-[0_8px_28px_rgba(255,107,53,.25)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-coral-dk active:scale-[0.98] font-head"
            >
              Получить подборку
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
