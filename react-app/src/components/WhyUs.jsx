/* Kawaii benefit characters */
const ListChar = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-[72px] h-[72px]">
    <circle cx="40" cy="40" r="36" fill="#FF6B35" />
    <ellipse cx="30" cy="34" rx="5" ry="6" fill="white" />
    <ellipse cx="50" cy="34" rx="5" ry="6" fill="white" />
    <circle cx="31" cy="35" r="3.5" fill="#2D1B69" />
    <circle cx="51" cy="35" r="3.5" fill="#2D1B69" />
    <circle cx="32.5" cy="33" r="1.3" fill="white" />
    <circle cx="52.5" cy="33" r="1.3" fill="white" />
    <path d="M30 52 C34 58, 46 58, 50 52" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="46" r="5" fill="#FFD23F" opacity="0.35" />
    <circle cx="58" cy="46" r="5" fill="#FFD23F" opacity="0.35" />
    <rect x="56" y="4" width="18" height="22" rx="4" fill="white" stroke="#2D1B69" strokeWidth="1.5" opacity="0.7" />
    <line x1="60" y1="10" x2="70" y2="10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <line x1="60" y1="15" x2="70" y2="15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <line x1="60" y1="20" x2="66" y2="20" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
  </svg>
)

const SpeedChar = () => (
  <svg viewBox="0 0 80 90" fill="none" className="w-[72px] h-[81px]">
    <path d="M10 30 C5 15, 25 2, 40 5 C55 2, 75 15, 70 30 C80 42, 78 65, 65 76 C55 85, 25 85, 15 76 C2 65, 0 42, 10 30Z" fill="#FFD23F" />
    <ellipse cx="30" cy="40" rx="5" ry="6" fill="white" />
    <ellipse cx="50" cy="40" rx="5" ry="6" fill="white" />
    <circle cx="31" cy="41" r="3.5" fill="#2D1B69" />
    <circle cx="51" cy="41" r="3.5" fill="#2D1B69" />
    <circle cx="32.5" cy="39" r="1.3" fill="white" />
    <circle cx="52.5" cy="39" r="1.3" fill="white" />
    <path d="M32 58 C36 63, 44 63, 48 58" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="52" r="5" fill="#FF8FAB" opacity="0.3" />
    <circle cx="58" cy="52" r="5" fill="#FF8FAB" opacity="0.3" />
    <path d="M62 8 L56 22 L62 22 L56 36" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const ShieldChar = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-[72px] h-[72px]">
    <path d="M40 4 L70 20 L70 52 L40 72 L10 52 L10 20Z" fill="#22C55E" />
    <ellipse cx="30" cy="34" rx="5" ry="5.5" fill="white" />
    <ellipse cx="50" cy="34" rx="5" ry="5.5" fill="white" />
    <circle cx="31" cy="35" r="3" fill="#2D1B69" />
    <circle cx="51" cy="35" r="3" fill="#2D1B69" />
    <circle cx="32" cy="33.5" r="1.2" fill="white" />
    <circle cx="52" cy="33.5" r="1.2" fill="white" />
    <path d="M32 50 C36 55, 44 55, 48 50" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="44" r="4" fill="white" opacity="0.25" />
    <circle cx="58" cy="44" r="4" fill="white" opacity="0.25" />
    <circle cx="40" cy="8" r="3" fill="#FFD23F" />
  </svg>
)

const MsgChar = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-[72px] h-[72px]">
    <rect x="6" y="8" width="68" height="54" rx="22" fill="#38BDF8" />
    <path d="M20 62 L30 52 L40 62Z" fill="#38BDF8" />
    <ellipse cx="30" cy="32" rx="5" ry="6" fill="white" />
    <ellipse cx="50" cy="32" rx="5" ry="6" fill="white" />
    <circle cx="31" cy="33" r="3.5" fill="#2D1B69" />
    <circle cx="51" cy="33" r="3.5" fill="#2D1B69" />
    <circle cx="32.5" cy="31" r="1.3" fill="white" />
    <circle cx="52.5" cy="31" r="1.3" fill="white" />
    <path d="M33 46 C36 50, 44 50, 47 46" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="40" r="4" fill="#FFD23F" opacity="0.3" />
    <circle cx="58" cy="40" r="4" fill="#FFD23F" opacity="0.3" />
  </svg>
)

const cards = [
  { Char: ListChar, num: '3-5', title: 'занятий в подборке', text: 'Не\u00a0каталог на\u00a01000 строк, а\u00a0готовый шорт-лист. Собрал живой специалист.', accent: '#FF6B35', pill: 'bg-coral-lt' },
  { Char: SpeedChar, num: '2 мин', title: 'на заполнение анкеты', text: 'Столько займёт анкета. Дальше мы\u00a0всё сделаем сами.', accent: '#B8860B', pill: 'bg-gold-lt' },
  { Char: ShieldChar, num: '1', title: 'неудачный абонемент = 5-8 тыс.', text: 'Одна ошибка в\u00a0выборе стоит в\u00a040 раз дороже подборки. Проще проверить заранее.', accent: '#16A34A', pill: 'bg-green-lt' },
  { Char: MsgChar, num: '1-2 ч', title: 'и подборка у вас', text: 'В\u00a0мессенджере. С\u00a0ценами, адресами и\u00a0расписанием.', accent: '#0284C7', pill: 'bg-sky-lt' },
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
