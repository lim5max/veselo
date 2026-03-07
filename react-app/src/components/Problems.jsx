/* Goofy blob problem characters — quirky asymmetric faces */
const SearchChar = () => (
  <svg viewBox="0 0 56 66" fill="none" className="w-14 h-[66px] shrink-0">
    {/* Squishy blob body */}
    <ellipse cx="28" cy="28" rx="24" ry="22" fill="#FFBE98" />
    {/* Eyes far apart, right eye lower — tired look */}
    <circle cx="16" cy="30" r="2.2" fill="#2D1B69" />
    <circle cx="36" cy="34" r="2.2" fill="#2D1B69" />
    {/* Wavy tired mouth, off-center */}
    <path d="M14 38 C20 36, 28 36, 34 40" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    {/* Tiny legs */}
    <ellipse cx="22" cy="52" rx="5" ry="7" fill="#FFBE98" />
    <ellipse cx="34" cy="52" rx="5" ry="7" fill="#FFBE98" />
    {/* Magnifying glass */}
    <circle cx="46" cy="12" r="6" stroke="#2D1B69" strokeWidth="2" fill="none" opacity="0.4" />
    <line x1="50" y1="16" x2="54" y2="20" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
)

const MoneyChar = () => (
  <svg viewBox="0 0 56 66" fill="none" className="w-14 h-[66px] shrink-0">
    {/* Rectangular blob */}
    <rect x="6" y="8" width="44" height="38" rx="16" fill="#FFD23F" />
    {/* Eyes close together, shifted left */}
    <circle cx="18" cy="26" r="2.2" fill="#2D1B69" />
    <circle cx="28" cy="24" r="2.2" fill="#2D1B69" />
    {/* Tiny worried "o" mouth, offset */}
    <ellipse cx="22" cy="36" rx="3" ry="3.5" fill="#2D1B69" opacity="0.6" />
    {/* Tiny legs */}
    <ellipse cx="22" cy="52" rx="5" ry="7" fill="#FFD23F" />
    <ellipse cx="36" cy="52" rx="5" ry="7" fill="#FFD23F" />
  </svg>
)

const ConfusedChar = () => (
  <svg viewBox="0 0 56 66" fill="none" className="w-14 h-[66px] shrink-0">
    {/* Bumpy clover-like blob */}
    <circle cx="20" cy="20" r="14" fill="#B197FC" />
    <circle cx="38" cy="20" r="14" fill="#B197FC" />
    <circle cx="20" cy="36" r="14" fill="#B197FC" />
    <circle cx="38" cy="36" r="14" fill="#B197FC" />
    {/* Eyes at very different heights — truly confused */}
    <circle cx="22" cy="22" r="2.5" fill="#2D1B69" />
    <circle cx="36" cy="32" r="2.5" fill="#2D1B69" />
    {/* Squiggle confused mouth, diagonal */}
    <path d="M20 40 C24 37, 28 42, 32 38 C36 35, 40 40, 42 37" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Tiny legs */}
    <ellipse cx="22" cy="54" rx="5" ry="6" fill="#B197FC" />
    <ellipse cx="36" cy="54" rx="5" ry="6" fill="#B197FC" />
    {/* Question mark */}
    <text x="43" y="12" fontSize="12" fontWeight="bold" fill="#2D1B69" opacity="0.4">?</text>
  </svg>
)

const ClockChar = () => (
  <svg viewBox="0 0 56 66" fill="none" className="w-14 h-[66px] shrink-0">
    {/* Half-dome blob (squishy shape) */}
    <path d="M4 42 C4 18, 16 6, 28 6 C40 6, 52 18, 52 42 L4 42Z" fill="#22C55E" />
    <rect x="4" y="38" width="48" height="8" rx="4" fill="#22C55E" />
    {/* Eyes offset right, one higher */}
    <circle cx="30" cy="24" r="2.2" fill="#2D1B69" />
    <circle cx="42" cy="28" r="2.2" fill="#2D1B69" />
    {/* Flat line mouth — shifted right */}
    <path d="M32 34 L44 35" stroke="#2D1B69" strokeWidth="2.2" strokeLinecap="round" />
    {/* Tiny legs */}
    <ellipse cx="20" cy="52" rx="5" ry="7" fill="#22C55E" />
    <ellipse cx="36" cy="52" rx="5" ry="7" fill="#22C55E" />
    {/* Clock on top */}
    <circle cx="18" cy="10" r="5" stroke="#2D1B69" strokeWidth="1.5" fill="white" opacity="0.5" />
    <line x1="18" y1="10" x2="18" y2="7" stroke="#2D1B69" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="18" y1="10" x2="20" y2="10" stroke="#2D1B69" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
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
    <section className="py-16 md:py-20 overflow-hidden" id="problems">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <span className="sr font-hand text-2xl text-coral">Узнаёте себя?</span>
          <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] mt-1">
            Поиск занятий — это <span className="text-pill text-pill-coral">стресс</span>
          </h2>
        </div>
        <div className="grid gap-4 max-w-[980px] mx-auto md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className={`sr sr-d${i + 1} group relative flex items-start gap-4 overflow-hidden rounded-[22px] border border-n200/60 border-l-4 bg-white/86 p-5 backdrop-blur-sm transition-all duration-350 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(26,26,46,.08)] md:p-6 ${item.border}`}
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
