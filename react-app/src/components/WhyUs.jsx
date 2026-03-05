/* Goofy blob characters — quirky but centered faces */
const ListChar = () => (
  <svg viewBox="0 0 80 90" fill="none" className="w-[72px] h-[81px]">
    {/* Wide pill blob body */}
    <ellipse cx="40" cy="40" rx="34" ry="28" fill="#FF6B35" />
    {/* Eyes centered, right slightly lower */}
    <circle cx="32" cy="34" r="3" fill="#2D1B69" />
    <circle cx="50" cy="36" r="3" fill="#2D1B69" />
    {/* Wide smile centered */}
    <path d="M28 46 C34 52, 46 52, 54 46" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    {/* Tiny stubby legs */}
    <ellipse cx="30" cy="72" rx="6" ry="8" fill="#FF6B35" />
    <ellipse cx="50" cy="72" rx="6" ry="8" fill="#FF6B35" />
    {/* Clipboard accessory */}
    <rect x="58" y="4" width="16" height="20" rx="3" fill="white" stroke="#2D1B69" strokeWidth="1.5" opacity="0.7" />
    <line x1="62" y1="10" x2="70" y2="10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <line x1="62" y1="15" x2="70" y2="15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
  </svg>
)

const SpeedChar = () => (
  <svg viewBox="0 0 80 90" fill="none" className="w-[72px] h-[81px]">
    {/* Tall blob body */}
    <path d="M14 25 C8 10, 30 2, 40 5 C50 2, 72 10, 66 25 C74 38, 70 58, 58 65 C50 70, 30 70, 22 65 C10 58, 6 38, 14 25Z" fill="#FFD23F" />
    {/* Eyes centered-ish, left slightly higher */}
    <circle cx="32" cy="32" r="2.8" fill="#2D1B69" />
    <circle cx="50" cy="34" r="2.8" fill="#2D1B69" />
    {/* Smile centered */}
    <path d="M30 42 C36 48, 46 48, 52 42" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Tiny legs */}
    <ellipse cx="32" cy="72" rx="6" ry="8" fill="#FFD23F" />
    <ellipse cx="50" cy="72" rx="6" ry="8" fill="#FFD23F" />
    {/* Lightning bolt */}
    <path d="M62 8 L56 22 L62 22 L56 36" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const ShieldChar = () => (
  <svg viewBox="0 0 80 90" fill="none" className="w-[72px] h-[81px]">
    {/* Shield-shaped blob */}
    <path d="M40 6 L68 22 L66 54 L40 68 L14 54 L12 22Z" fill="#22C55E" />
    {/* Eyes centered, left slightly higher */}
    <circle cx="34" cy="32" r="2.8" fill="#2D1B69" />
    <circle cx="48" cy="34" r="2.8" fill="#2D1B69" />
    {/* Wide goofy grin centered */}
    <path d="M30 42 C36 48, 46 48, 52 42" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    {/* Tiny legs */}
    <ellipse cx="32" cy="74" rx="6" ry="8" fill="#22C55E" />
    <ellipse cx="50" cy="74" rx="6" ry="8" fill="#22C55E" />
    {/* Star on top */}
    <circle cx="40" cy="10" r="3.5" fill="#FFD23F" />
  </svg>
)

const MsgChar = () => (
  <svg viewBox="0 0 80 90" fill="none" className="w-[72px] h-[81px]">
    {/* Speech-bubble blob body */}
    <rect x="8" y="10" width="64" height="48" rx="24" fill="#38BDF8" />
    <path d="M22 58 L30 50 L38 58Z" fill="#38BDF8" />
    {/* Eyes centered, right slightly lower */}
    <circle cx="30" cy="28" r="2.8" fill="#2D1B69" />
    <circle cx="50" cy="30" r="2.8" fill="#2D1B69" />
    {/* Smile centered */}
    <path d="M28 38 C34 44, 44 44, 52 38" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Tiny legs */}
    <ellipse cx="30" cy="72" rx="6" ry="8" fill="#38BDF8" />
    <ellipse cx="50" cy="72" rx="6" ry="8" fill="#38BDF8" />
  </svg>
)

const cards = [
  { Char: ListChar, num: '3-5', title: 'занятий в подборке', text: 'Не\u00a0каталог на\u00a01000 строк, а\u00a0готовый шорт-лист. Только то, что подходит именно вам.', accent: '#FF6B35', pill: 'bg-coral-lt' },
  { Char: SpeedChar, num: '2 мин', title: 'на заполнение анкеты', text: 'Столько займёт анкета. Дальше мы\u00a0всё сделаем сами.', accent: '#B8860B', pill: 'bg-gold-lt' },
  { Char: ShieldChar, num: '1', title: 'живой специалист на вашей стороне', text: 'Не\u00a0бот и\u00a0не\u00a0фильтр на\u00a0сайте. Реальный человек изучит анкету, позвонит в\u00a0кружки и\u00a0соберёт подборку под вашего ребёнка.', accent: '#16A34A', pill: 'bg-green-lt' },
  { Char: MsgChar, num: '1-2 ч', title: 'и подборка у вас в телефоне', text: 'В\u00a0мессенджере. С\u00a0ценами, адресами и\u00a0расписанием.', accent: '#0284C7', pill: 'bg-sky-lt' },
]

export default function WhyUs() {
  return (
    <section className="py-20 md:py-[6.5rem] relative" id="whyus">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dk/40 to-cream pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        <p className="sr font-hand text-[1.6rem] text-coral text-center">Почему мы?</p>
        <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] text-center mx-auto mb-2">
          Не очередной <span className="text-pill text-pill-lavender">каталог</span>
        </h2>
        <p className="sr sr-d1 text-n700 text-[0.9375rem] max-w-[560px] leading-[1.65] mb-12 text-center mx-auto">
          Мы не сваливаем на вас 200 ссылок — мы отбираем лучшее
        </p>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`sr ${i > 0 ? `sr-d${i}` : ''} group rounded-[28px] p-7 relative overflow-hidden bg-white border-2 border-n200/30 shadow-[0_4px_16px_rgba(26,26,46,.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(26,26,46,.1)] hover:border-transparent`}
            >
              {/* Colored accent corner */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.07] transition-all duration-500 group-hover:opacity-[0.12] group-hover:scale-125" style={{ background: c.accent }} />
              <div className="flex gap-6 items-start">
                {/* Character with soft bg circle */}
                <div className="relative shrink-0">
                  <div className={`absolute inset-0 ${c.pill} rounded-full scale-[1.2] opacity-40 transition-all duration-500 group-hover:scale-[1.4] group-hover:opacity-60`} />
                  <div className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]">
                    <c.Char />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-black text-[2.5rem] leading-none mb-1.5 transition-colors duration-300" style={{ color: c.accent }}>{c.num}</div>
                  <h3 className="font-head font-bold text-[1rem] text-indigo mb-1.5">{c.title}</h3>
                  <p className="text-[0.8125rem] text-n700 leading-[1.65]">{c.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
