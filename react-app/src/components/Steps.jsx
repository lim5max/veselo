/* Goofy blob step characters — quirky asymmetric faces */
const Step1Char = () => (
  <svg viewBox="0 0 90 105" fill="none" className="w-[90px] h-[105px]">
    <ellipse cx="45" cy="42" rx="38" ry="32" fill="#FF8FAB" />
    <circle cx="28" cy="46" r="3.2" fill="#2D1B69" />
    <circle cx="52" cy="50" r="3.2" fill="#2D1B69" />
    <path d="M24 54 C34 62, 48 62, 56 56" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <ellipse cx="35" cy="80" rx="7" ry="10" fill="#FF8FAB" />
    <ellipse cx="55" cy="80" rx="7" ry="10" fill="#FF8FAB" />
    <rect x="62" y="6" width="20" height="15" rx="6" fill="white" opacity="0.8" />
    <path d="M66 21 L70 18 L74 21" fill="white" opacity="0.8" />
    <text x="66" y="17" fontSize="7" fill="#2D1B69" opacity="0.6">?!</text>
  </svg>
)

const Step2Char = () => (
  <svg viewBox="0 0 90 105" fill="none" className="w-[90px] h-[105px]">
    <path d="M14 28 C8 12, 28 2, 45 6 C62 2, 82 12, 76 28 C84 42, 80 60, 68 68 C58 74, 32 74, 22 68 C10 60, 6 42, 14 28Z" fill="#B197FC" />
    <circle cx="30" cy="36" r="3.2" fill="#2D1B69" />
    <circle cx="48" cy="32" r="3.2" fill="#2D1B69" />
    <path d="M26 44 C34 50, 44 48, 50 42" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <ellipse cx="35" cy="82" rx="7" ry="10" fill="#B197FC" />
    <ellipse cx="55" cy="82" rx="7" ry="10" fill="#B197FC" />
    <circle cx="74" cy="14" r="7" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" />
    <line x1="79" y1="19" x2="84" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const Step3Char = () => (
  <svg viewBox="0 0 90 105" fill="none" className="w-[90px] h-[105px]">
    <rect x="8" y="8" width="74" height="64" rx="26" fill="#22C55E" />
    <path d="M44 32 C46 28, 50 28, 52 32" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <path d="M60 36 C62 32, 66 32, 68 36" stroke="#2D1B69" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <path d="M40 46 C50 56, 62 56, 72 48" stroke="#2D1B69" strokeWidth="3" strokeLinecap="round" fill="none" />
    <ellipse cx="35" cy="82" rx="7" ry="10" fill="#22C55E" />
    <ellipse cx="55" cy="82" rx="7" ry="10" fill="#22C55E" />
    <path d="M18 16 C18 20, 18 20, 22 20 C18 20, 18 20, 18 24 C18 20, 18 20, 14 20 C18 20, 18 20, 18 16Z" fill="#FFD23F" />
    <path d="M30 10 C30 13, 30 13, 33 13 C30 13, 30 13, 30 16 C30 13, 30 13, 27 13 C30 13, 30 13, 30 10Z" fill="#FFD23F" />
  </svg>
)

const steps = [
  {
    num: '01',
    Char: Step1Char,
    title: 'Расскажите о\u00a0ребёнке',
    text: 'Анкета из 5\u00a0вопросов: возраст, интересы, район. Занимает 2\u00a0минуты.',
    accent: '#FF8FAB',
    borderColor: '#FF8FAB',
    delay: '',
  },
  {
    num: '02',
    Char: Step2Char,
    title: 'Мы подберём варианты',
    text: 'Живой специалист вручную подберёт 3-5 занятий. Не\u00a0алгоритм\u00a0— человек, который знает рынок.',
    accent: '#B197FC',
    borderColor: '#B197FC',
    delay: 'sr-d2',
  },
  {
    num: '03',
    Char: Step3Char,
    title: 'Получите подборку',
    text: 'Через 1-2 часа в\u00a0мессенджер: описание, цены, расписание, контакты.',
    accent: '#22C55E',
    borderColor: '#22C55E',
    delay: 'sr-d4',
  },
]

export default function Steps() {
  return (
    <section className="py-20 md:py-[6.5rem] relative" id="how">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dk/30 to-cream pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        <p className="sr font-hand text-2xl text-coral text-center">Без усилий</p>
        <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] mb-2 text-center mx-auto">
          Три шага — и&nbsp;<span className="text-pill text-pill-green">занятие найдено</span>
        </h2>
        <p className="sr sr-d2 text-n700 text-[0.9375rem] max-w-[560px] leading-[1.65] mb-14 text-center mx-auto">
          Вы отвечаете — мы&nbsp;ищем, сравниваем, проверяем
        </p>

        <div className="relative max-w-[1060px] mx-auto">
          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0 items-stretch">
            {steps.map((s, i) => (
              <div key={i} className="contents">
                <div className={`sr ${s.delay} group relative`}>
                  <div
                    className="relative rounded-[24px] p-7 bg-white border-l-[4px] h-full transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(26,26,46,.08)]"
                    style={{ borderLeftColor: s.borderColor }}
                  >
                    {/* Character + number */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative shrink-0 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-[-4deg]">
                        <s.Char />
                        <div
                          className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full flex items-center justify-center font-head font-extrabold text-[0.75rem] text-white shadow-[0_3px_10px_rgba(0,0,0,.15)]"
                          style={{ background: s.accent }}
                        >
                          {s.num}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-head font-bold text-[1.15rem] text-indigo mb-2 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-[0.875rem] text-n700 leading-[1.7]">
                      {s.text}
                    </p>
                  </div>
                </div>

                {/* Arrow connector between cards — desktop only */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-3">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-n300">
                      <path d="M0 12 L30 12" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                      <path d="M26 6 L34 12 L26 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
