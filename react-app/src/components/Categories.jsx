/* Goofy blob category characters — quirky asymmetric faces */
const cats = [
  {
    label: 'Спорт',
    color: '#38BDF8',
    lightBg: '#ECF4FF',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Round blob */}
        <circle cx="40" cy="38" r="30" fill="#38BDF8" />
        {/* Eyes low, spread wide, right eye lower */}
        <circle cx="24" cy="42" r="2.8" fill="#2D1B69" />
        <circle cx="48" cy="46" r="2.8" fill="#2D1B69" />
        {/* Wide grin spanning under eyes */}
        <path d="M20 50 C30 58, 44 58, 52 52" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        {/* Headband */}
        <path d="M12 24 C22 18, 58 18, 68 24" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Tiny legs */}
        <ellipse cx="32" cy="72" rx="6" ry="9" fill="#38BDF8" />
        <ellipse cx="48" cy="72" rx="6" ry="9" fill="#38BDF8" />
        {/* Small arm */}
        <ellipse cx="12" cy="44" rx="5" ry="4" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    label: 'Творчество',
    color: '#B197FC',
    lightBg: '#F5EDFF',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Tall ghost-like blob */}
        <path d="M14 28 C8 12, 28 2, 40 5 C52 2, 72 12, 66 28 C74 40, 70 60, 58 66 C50 70, 30 70, 22 66 C10 60, 6 40, 14 28Z" fill="#B197FC" />
        {/* Face offset to upper-right, eyes at different heights */}
        <circle cx="42" cy="28" r="2.8" fill="#2D1B69" />
        <circle cx="58" cy="32" r="2.8" fill="#2D1B69" />
        {/* Small smile tucked under, off-center */}
        <path d="M42 36 C48 42, 56 40, 60 36" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tiny legs */}
        <ellipse cx="32" cy="76" rx="6" ry="9" fill="#B197FC" />
        <ellipse cx="50" cy="76" rx="6" ry="9" fill="#B197FC" />
        {/* Paintbrush */}
        <rect x="10" y="12" width="3.5" height="22" rx="1.5" fill="#FF6B35" transform="rotate(-15 12 23)" opacity="0.7" />
        <circle cx="8" cy="8" r="4" fill="#FF6B35" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: 'Музыка',
    color: '#FFD23F',
    lightBg: '#FFF9D9',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Spiky star-like blob */}
        <path d="M40 6 L50 26 L72 26 L56 40 L62 62 L40 50 L18 62 L24 40 L8 26 L30 26Z" fill="#FFD23F" />
        {/* Happy squint eyes — off center, different sizes */}
        <path d="M32 38 C33 34, 38 34, 39 38" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M46 34 C47 31, 51 31, 52 34" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        {/* Wonky smile */}
        <path d="M30 46 C36 52, 46 50, 54 44" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tiny legs */}
        <ellipse cx="34" cy="72" rx="6" ry="9" fill="#FFD23F" />
        <ellipse cx="48" cy="72" rx="6" ry="9" fill="#FFD23F" />
        {/* Music note */}
        <circle cx="16" cy="68" r="3.5" fill="#2D1B69" opacity="0.35" />
        <rect x="19" y="52" width="2" height="16" rx="1" fill="#2D1B69" opacity="0.35" />
      </svg>
    ),
  },
  {
    label: 'Танцы',
    color: '#FF8FAB',
    lightBg: '#FFF0FC',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Tall wobbly blob */}
        <path d="M16 30 C10 14, 30 2, 40 6 C50 2, 70 14, 64 30 C72 42, 68 58, 58 66 C50 72, 30 72, 22 66 C12 58, 8 42, 16 30Z" fill="#FF8FAB" />
        {/* Eyes close together and low, tilted */}
        <circle cx="36" cy="46" r="2.8" fill="#2D1B69" />
        <circle cx="48" cy="44" r="2.8" fill="#2D1B69" />
        {/* Open happy mouth — between eyes */}
        <ellipse cx="42" cy="54" rx="6" ry="4.5" fill="#2D1B69" opacity="0.6" />
        {/* Tiny legs - one kicked up */}
        <ellipse cx="32" cy="78" rx="6" ry="8" fill="#FF8FAB" />
        <ellipse cx="54" cy="74" rx="6" ry="8" fill="#FF8FAB" transform="rotate(-20 54 74)" />
        {/* Bow on top */}
        <circle cx="40" cy="6" r="3" fill="#FFD23F" />
        <circle cx="35" cy="7" r="2" fill="#FFD23F" />
        <circle cx="45" cy="7" r="2" fill="#FFD23F" />
        {/* Small arm waving */}
        <ellipse cx="70" cy="36" rx="5" ry="4" fill="#FF8FAB" />
      </svg>
    ),
  },
  {
    label: 'Программирование',
    color: '#22C55E',
    lightBg: '#EEFFEF',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Square-ish blob */}
        <rect x="10" y="10" width="60" height="55" rx="20" fill="#22C55E" />
        {/* Eyes shifted right, one higher */}
        <circle cx="44" cy="28" r="2.8" fill="#2D1B69" />
        <circle cx="58" cy="32" r="2.8" fill="#2D1B69" />
        {/* Smile offset right */}
        <path d="M42 38 C48 44, 56 44, 62 40" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tiny legs */}
        <ellipse cx="32" cy="72" rx="6" ry="9" fill="#22C55E" />
        <ellipse cx="50" cy="72" rx="6" ry="9" fill="#22C55E" />
        {/* Code brackets */}
        <path d="M16 18 L10 26 L16 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.45" />
        <path d="M64 18 L70 26 L64 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.45" />
      </svg>
    ),
  },
  {
    label: 'Шахматы',
    color: '#2D1B69',
    lightBg: '#F1EAFE',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Round dark blob */}
        <circle cx="40" cy="40" r="30" fill="#2D1B69" />
        {/* White dot eyes — offset left, right eye lower */}
        <circle cx="28" cy="38" r="2.8" fill="white" />
        <circle cx="44" cy="42" r="2.8" fill="white" />
        {/* Smile white, wonky */}
        <path d="M24 48 C32 56, 42 54, 48 48" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        {/* Tiny legs */}
        <ellipse cx="32" cy="74" rx="6" ry="9" fill="#2D1B69" />
        <ellipse cx="48" cy="74" rx="6" ry="9" fill="#2D1B69" />
        {/* Crown */}
        <path d="M28 14 L32 6 L36 14 L40 4 L44 14 L48 6 L52 14 L52 18 L28 18Z" fill="#FFD23F" />
      </svg>
    ),
  },
  {
    label: 'Языки',
    color: '#FF6B35',
    lightBg: '#FFF1E5',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Speech-bubble blob */}
        <rect x="8" y="12" width="64" height="46" rx="22" fill="#FF6B35" />
        <path d="M22 58 L30 52 L38 58Z" fill="#FF6B35" />
        {/* Face shifted right, eyes wide apart and low */}
        <circle cx="38" cy="38" r="2.8" fill="#2D1B69" />
        <circle cx="60" cy="34" r="2.8" fill="#2D1B69" />
        {/* Smile between eyes */}
        <path d="M40 44 C48 48, 56 46, 62 42" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tiny legs */}
        <ellipse cx="32" cy="72" rx="6" ry="9" fill="#FF6B35" />
        <ellipse cx="48" cy="72" rx="6" ry="9" fill="#FF6B35" />
        {/* Text hints */}
        <text x="12" y="24" fontSize="8" fontWeight="bold" fill="white" opacity="0.45">Hi!</text>
      </svg>
    ),
  },
  {
    label: 'Наука',
    color: '#6EE7B7',
    lightBg: '#EEFFEF',
    char: (
      <svg viewBox="0 0 80 95" fill="none">
        {/* Hexagon blob */}
        <path d="M40 6 L68 22 L68 52 L40 68 L12 52 L12 22Z" fill="#6EE7B7" />
        {/* Eyes shifted left, close together, one higher */}
        <circle cx="26" cy="32" r="2.8" fill="#2D1B69" />
        <circle cx="38" cy="36" r="2.8" fill="#2D1B69" />
        {/* Smile under eyes, curving */}
        <path d="M22 42 C28 48, 36 48, 42 44" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tiny legs */}
        <ellipse cx="32" cy="76" rx="6" ry="9" fill="#6EE7B7" />
        <ellipse cx="50" cy="76" rx="6" ry="9" fill="#6EE7B7" />
        {/* Flask */}
        <rect x="58" y="8" width="5" height="12" rx="2" fill="white" opacity="0.45" />
        <path d="M56 20 L53 26 C52 30, 56 33, 60 33 L64 33 C68 33, 72 30, 71 26 L68 20Z" fill="white" opacity="0.45" />
        <circle cx="62" cy="26" r="2" fill="#FF6B35" opacity="0.5" />
      </svg>
    ),
  },
]

export default function Categories() {
  return (
    <section className="py-20 md:py-[6.5rem]" id="categories">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <p className="sr font-hand text-2xl text-coral">Направления</p>
        <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] mb-2">
          Кружки, секции и&nbsp;<span className="text-pill text-pill-gold">мастер-классы</span>
        </h2>
        <p className="sr sr-d2 text-n700 text-[0.9375rem] max-w-[560px] leading-[1.65] mb-10">
          Подберём из&nbsp;любой категории&nbsp;— от&nbsp;спорта до&nbsp;робототехники
        </p>
        <div className="sr sr-d3 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {cats.map((c, i) => (
            <div
              key={i}
              className="flex-[0_0_200px] lg:flex-none rounded-[28px] overflow-hidden relative cursor-pointer snap-start transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(26,26,46,.12)] group border-2 border-white/60 hover:border-white"
              style={{ background: c.lightBg }}
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]" style={{ background: `radial-gradient(circle at 50% 40%, ${c.color}15, transparent 70%)` }} />
              <div className="p-7 pb-5 flex flex-col items-center text-center h-[240px] lg:h-[260px] justify-center relative">
                <div className="w-[100px] h-[100px] mb-5 transition-all duration-500 group-hover:scale-115 group-hover:rotate-[-6deg] group-hover:drop-shadow-[0_8px_20px_rgba(0,0,0,.08)]">
                  {c.char}
                </div>
                <span className="font-head font-bold text-[1.0625rem] transition-all duration-300 group-hover:tracking-wide" style={{ color: c.color === '#FFD23F' ? '#B8860B' : c.color === '#6EE7B7' ? '#059669' : c.color }}>
                  {c.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
