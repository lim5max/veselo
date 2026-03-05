/* Kawaii problem characters — each a different shape expressing frustration */
const SearchChar = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14 shrink-0">
    <circle cx="28" cy="28" r="24" fill="#FFBE98" />
    {/* Tired eyes - half closed */}
    <ellipse cx="20" cy="24" rx="4" ry="2.5" fill="white" />
    <ellipse cx="36" cy="24" rx="4" ry="2.5" fill="white" />
    <circle cx="20.5" cy="24.5" r="2" fill="#2D1B69" />
    <circle cx="36.5" cy="24.5" r="2" fill="#2D1B69" />
    {/* Wavy tired mouth */}
    <path d="M20 36 C23 33, 25 37, 28 34 C31 37, 33 33, 36 36" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Magnifying glass */}
    <circle cx="44" cy="14" r="7" stroke="#2D1B69" strokeWidth="2" fill="none" opacity="0.4" />
    <line x1="49" y1="19" x2="53" y2="23" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
)

const MoneyChar = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14 shrink-0">
    <rect x="4" y="6" width="48" height="44" rx="14" fill="#FFD23F" />
    {/* Worried eyes */}
    <ellipse cx="20" cy="24" rx="4" ry="5" fill="white" />
    <ellipse cx="36" cy="24" rx="4" ry="5" fill="white" />
    <circle cx="20" cy="25" r="2.5" fill="#2D1B69" />
    <circle cx="36" cy="25" r="2.5" fill="#2D1B69" />
    <circle cx="21" cy="23.5" r="1" fill="white" />
    <circle cx="37" cy="23.5" r="1" fill="white" />
    {/* Worried eyebrows */}
    <path d="M15 17 L23 19" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" />
    <path d="M41 17 L33 19" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" />
    {/* Small worried mouth */}
    <circle cx="28" cy="37" r="4" fill="#2D1B69" opacity="0.7" />
    <circle cx="28" cy="36" r="2.5" fill="#FFD23F" />
  </svg>
)

const ConfusedChar = () => (
  <svg viewBox="0 0 56 62" fill="none" className="w-14 h-[62px] shrink-0">
    <path d="M8 20 C4 8, 20 0, 28 3 C36 0, 52 8, 48 20 C55 28, 52 45, 42 52 C36 58, 20 58, 14 52 C4 45, 1 28, 8 20Z" fill="#B197FC" />
    {/* Spiral eyes */}
    <circle cx="20" cy="26" r="5" stroke="white" strokeWidth="2" fill="none" />
    <path d="M20 22 C22 22, 24 24, 22 26 C20 28, 18 26, 20 24" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="36" cy="26" r="5" stroke="white" strokeWidth="2" fill="none" />
    <path d="M36 22 C38 22, 40 24, 38 26 C36 28, 34 26, 36 24" stroke="white" strokeWidth="1.5" fill="none" />
    {/* Confused squiggle mouth */}
    <path d="M20 40 C24 37, 26 42, 30 39 C34 36, 36 41, 38 38" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Question mark */}
    <text x="42" y="12" fontSize="14" fontWeight="bold" fill="#2D1B69" opacity="0.5">?</text>
  </svg>
)

const ClockChar = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14 shrink-0">
    {/* Triangle shape */}
    <path d="M28 4 L52 48 L4 48Z" fill="#22C55E" rx="4" />
    <path d="M28 8 L49 46 L7 46Z" fill="#22C55E" />
    {/* Droopy eyes */}
    <ellipse cx="22" cy="32" rx="3.5" ry="2" fill="white" />
    <ellipse cx="34" cy="32" rx="3.5" ry="2" fill="white" />
    <circle cx="22.5" cy="32.5" r="1.5" fill="#2D1B69" />
    <circle cx="34.5" cy="32.5" r="1.5" fill="#2D1B69" />
    {/* Flat line mouth */}
    <path d="M22 40 L34 40" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" />
    {/* Clock hands on top */}
    <circle cx="28" cy="18" r="6" stroke="#2D1B69" strokeWidth="1.5" fill="white" opacity="0.5" />
    <line x1="28" y1="18" x2="28" y2="14" stroke="#2D1B69" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="28" y1="18" x2="31" y2="18" stroke="#2D1B69" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const items = [
  { Char: SearchChar, bg: 'bg-peach-lt', border: 'border-l-peach', title: 'Весь вечер в телефоне — а\u00a0толку ноль', text: 'Десятки вкладок, противоречивые отзывы, устаревшие адреса. Ребёнок давно уснул — а\u00a0вы всё листаете.' },
  { Char: MoneyChar, bg: 'bg-gold-lt', border: 'border-l-gold', title: 'Страх ошибиться и\u00a0потерять деньги', text: 'Ребёнок сходит два раза и\u00a0бросит. Абонемент за\u00a05-8 тысяч — впустую.' },
  { Char: ConfusedChar, bg: 'bg-lavender-lt', border: 'border-l-lavender', title: 'Тысячи вариантов — ни\u00a0одного подходящего', text: 'Эта ближе к\u00a0дому, та дешевле, третью «вроде хвалят». Как выбрать — непонятно.' },
  { Char: ClockChar, bg: 'bg-green-lt', border: 'border-l-green', title: 'Время уходит — ребёнок мог\u00a0бы уже заниматься', text: 'Пока вы выбираете, ребёнок сидит в\u00a0планшете. Неделя за\u00a0неделей.' },
]

export default function Problems() {
  return (
    <section className="py-20 md:py-[6.5rem] overflow-hidden" id="problems">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <span className="sr font-hand text-2xl text-coral">Узнаёте себя?</span>
          <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] mt-1">
            Поиск занятий — это <span className="text-pill text-pill-coral">стресс</span>
          </h2>
        </div>
        <div className="grid gap-4 max-w-[800px] mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={`sr sr-d${i + 1} group flex gap-5 items-center p-5 px-6 bg-white rounded-[20px] border border-n200/60 border-l-4 ${item.border} transition-all duration-350 relative overflow-hidden hover:shadow-[0_8px_32px_rgba(26,26,46,.08)] hover:-translate-y-0.5`}
            >
              <item.Char />
              <div>
                <h3 className="font-head font-bold text-[0.9375rem] text-indigo mb-1">{item.title}</h3>
                <p className="text-[0.8125rem] text-n700 leading-[1.55]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
