/* Category characters — each a unique shape with relevant accessories */
const cats = [
  {
    label: 'Спорт',
    color: '#38BDF8',
    lightBg: '#EBF8FF',
    char: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="34" fill="#38BDF8" />
        <ellipse cx="30" cy="34" rx="4.5" ry="5" fill="white" />
        <ellipse cx="50" cy="34" rx="4.5" ry="5" fill="white" />
        <circle cx="31" cy="35" r="3" fill="#2D1B69" />
        <circle cx="51" cy="35" r="3" fill="#2D1B69" />
        <circle cx="32" cy="33.5" r="1.1" fill="white" />
        <circle cx="52" cy="33.5" r="1.1" fill="white" />
        <path d="M30 50 C34 56, 46 56, 50 50" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M10 22 C20 17, 60 17, 70 22" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
        <circle cx="40" cy="8" r="4" fill="#FFD23F" />
      </svg>
    ),
  },
  {
    label: 'Творчество',
    color: '#B197FC',
    lightBg: '#F3EEFF',
    char: (
      <svg viewBox="0 0 80 90" fill="none">
        <path d="M12 30 C6 14, 28 2, 40 6 C52 2, 74 14, 68 30 C78 42, 74 65, 62 76 C52 84, 28 84, 18 76 C6 65, 2 42, 12 30Z" fill="#B197FC" />
        <ellipse cx="30" cy="40" rx="4" ry="3" fill="white" />
        <ellipse cx="50" cy="40" rx="4" ry="3" fill="white" />
        <circle cx="31" cy="40.5" r="2.5" fill="#2D1B69" />
        <circle cx="51" cy="40.5" r="2.5" fill="#2D1B69" />
        <path d="M33 56 C37 60, 43 60, 47 56" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="58" y="10" width="4" height="24" rx="2" fill="#FF6B35" transform="rotate(25 60 22)" opacity="0.7" />
        <circle cx="64" cy="6" r="4" fill="#FF6B35" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: 'Музыка',
    color: '#FFD23F',
    lightBg: '#FFF8E1',
    char: (
      <svg viewBox="0 0 80 80" fill="none">
        <path d="M40 4 L54 30 L74 30 L58 48 L64 72 L40 58 L16 72 L22 48 L6 30 L26 30Z" fill="#FFD23F" />
        <ellipse cx="32" cy="38" rx="4" ry="4.5" fill="white" />
        <ellipse cx="48" cy="38" rx="4" ry="4.5" fill="white" />
        <circle cx="33" cy="39" r="2.5" fill="#2D1B69" />
        <circle cx="49" cy="39" r="2.5" fill="#2D1B69" />
        <path d="M34 50 C37 54, 43 54, 46 50" stroke="#2D1B69" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="65" r="4" fill="#2D1B69" opacity="0.4" />
        <rect x="19" y="48" width="2" height="17" rx="1" fill="#2D1B69" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: 'Танцы',
    color: '#FF8FAB',
    lightBg: '#FFF0F3',
    char: (
      <svg viewBox="0 0 80 100" fill="none">
        <path d="M15 30 C8 14, 30 2, 40 6 C50 2, 72 14, 65 30 C75 40, 72 65, 60 78 C50 90, 30 90, 20 78 C8 65, 5 40, 15 30Z" fill="#FF8FAB" />
        <ellipse cx="30" cy="40" rx="4.5" ry="5" fill="white" />
        <ellipse cx="50" cy="40" rx="4.5" ry="5" fill="white" />
        <circle cx="31" cy="41" r="3" fill="#2D1B69" />
        <circle cx="51" cy="41" r="3" fill="#2D1B69" />
        <ellipse cx="40" cy="58" rx="6" ry="4" fill="#2D1B69" opacity="0.7" />
        <ellipse cx="40" cy="57" rx="4" ry="2.5" fill="#E11D7A" />
        <circle cx="22" cy="52" r="4" fill="#FFD23F" opacity="0.3" />
        <circle cx="58" cy="52" r="4" fill="#FFD23F" opacity="0.3" />
        {/* Little crown/bow */}
        <circle cx="40" cy="6" r="3" fill="#FFD23F" />
        <circle cx="34" cy="8" r="2" fill="#FFD23F" />
        <circle cx="46" cy="8" r="2" fill="#FFD23F" />
      </svg>
    ),
  },
  {
    label: 'Программирование',
    color: '#22C55E',
    lightBg: '#ECFDF5',
    char: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="6" y="6" width="68" height="68" rx="18" fill="#22C55E" />
        <ellipse cx="30" cy="34" rx="5" ry="6" fill="white" />
        <ellipse cx="50" cy="34" rx="5" ry="6" fill="white" />
        <circle cx="31" cy="35" r="3.5" fill="#2D1B69" />
        <circle cx="51" cy="35" r="3.5" fill="#2D1B69" />
        <circle cx="32.5" cy="33" r="1.3" fill="white" />
        <circle cx="52.5" cy="33" r="1.3" fill="white" />
        <path d="M32 52 C36 57, 44 57, 48 52" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Code brackets */}
        <path d="M16 20 L10 28 L16 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
        <path d="M64 20 L70 28 L64 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: 'Шахматы',
    color: '#2D1B69',
    lightBg: '#F0EDFF',
    char: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="34" fill="#2D1B69" />
        <ellipse cx="30" cy="34" rx="5" ry="6" fill="white" />
        <ellipse cx="50" cy="34" rx="5" ry="6" fill="white" />
        <circle cx="31" cy="35" r="3.5" fill="#2D1B69" />
        <circle cx="51" cy="35" r="3.5" fill="#2D1B69" />
        <circle cx="32.5" cy="33" r="1.3" fill="white" />
        <circle cx="52.5" cy="33" r="1.3" fill="white" />
        <path d="M32 52 C36 56, 44 56, 48 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Crown */}
        <path d="M26 12 L30 6 L34 12 L38 4 L42 12 L46 6 L50 12 L54 6 L54 16 L26 16Z" fill="#FFD23F" />
      </svg>
    ),
  },
  {
    label: 'Языки',
    color: '#FF6B35',
    lightBg: '#FFF0EB',
    char: (
      <svg viewBox="0 0 80 80" fill="none">
        <rect x="6" y="10" width="68" height="54" rx="22" fill="#FF6B35" />
        <path d="M22 64 L32 54 L42 64Z" fill="#FF6B35" />
        <ellipse cx="30" cy="34" rx="5" ry="5.5" fill="white" />
        <ellipse cx="50" cy="34" rx="5" ry="5.5" fill="white" />
        <circle cx="31" cy="35" r="3" fill="#2D1B69" />
        <circle cx="51" cy="35" r="3" fill="#2D1B69" />
        <circle cx="32" cy="33.5" r="1.2" fill="white" />
        <circle cx="52" cy="33.5" r="1.2" fill="white" />
        <path d="M34 48 C37 52, 43 52, 46 48" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="8" y="20" fontSize="10" fontWeight="bold" fill="white" opacity="0.5">Hi!</text>
        <text x="56" y="20" fontSize="10" fontWeight="bold" fill="white" opacity="0.5">Привет</text>
      </svg>
    ),
  },
  {
    label: 'Наука',
    color: '#6EE7B7',
    lightBg: '#ECFDF5',
    char: (
      <svg viewBox="0 0 80 80" fill="none">
        <path d="M40 4 L70 24 L70 56 L40 76 L10 56 L10 24Z" fill="#6EE7B7" />
        <ellipse cx="30" cy="36" rx="4.5" ry="5" fill="white" />
        <ellipse cx="50" cy="36" rx="4.5" ry="5" fill="white" />
        <circle cx="31" cy="37" r="3" fill="#2D1B69" />
        <circle cx="51" cy="37" r="3" fill="#2D1B69" />
        <circle cx="32" cy="35.5" r="1.2" fill="white" />
        <circle cx="52" cy="35.5" r="1.2" fill="white" />
        <path d="M33 52 C37 57, 43 57, 47 52" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Flask */}
        <rect x="56" y="6" width="6" height="14" rx="2" fill="white" opacity="0.5" />
        <path d="M54 20 L50 28 C48 32, 54 36, 58 36 L62 36 C66 36, 72 32, 70 28 L66 20Z" fill="white" opacity="0.5" />
        <circle cx="60" cy="28" r="2" fill="#FF6B35" opacity="0.6" />
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
