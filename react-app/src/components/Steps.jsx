/* Step characters */
const Step1Char = () => (
  <svg viewBox="0 0 90 90" fill="none" className="w-[90px] h-[90px]">
    <circle cx="45" cy="45" r="40" fill="#FF8FAB" />
    <ellipse cx="34" cy="38" rx="5" ry="6" fill="white" />
    <ellipse cx="56" cy="38" rx="5" ry="6" fill="white" />
    <circle cx="35" cy="39" r="3.5" fill="#2D1B69" />
    <circle cx="57" cy="39" r="3.5" fill="#2D1B69" />
    <circle cx="36.5" cy="37" r="1.3" fill="white" />
    <circle cx="58.5" cy="37" r="1.3" fill="white" />
    <path d="M35 56 C39 62, 51 62, 55 56" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="25" cy="50" r="5" fill="#FFD23F" opacity="0.3" />
    <circle cx="65" cy="50" r="5" fill="#FFD23F" opacity="0.3" />
    {/* Speech bubble */}
    <rect x="60" y="8" width="22" height="16" rx="6" fill="white" opacity="0.8" />
    <path d="M64 24 L68 20 L72 24" fill="white" opacity="0.8" />
    <text x="64" y="19" fontSize="7" fill="#2D1B69" opacity="0.6">?!</text>
  </svg>
)

const Step2Char = () => (
  <svg viewBox="0 0 90 100" fill="none" className="w-[90px] h-[100px]">
    <path d="M12 32 C6 16, 28 4, 45 8 C62 4, 84 16, 78 32 C88 44, 84 70, 70 82 C58 92, 32 92, 20 82 C6 70, 2 44, 12 32Z" fill="#B197FC" />
    <ellipse cx="34" cy="42" rx="5" ry="6" fill="white" />
    <ellipse cx="56" cy="42" rx="5" ry="6" fill="white" />
    <circle cx="35" cy="43" r="3.5" fill="#2D1B69" />
    <circle cx="57" cy="43" r="3.5" fill="#2D1B69" />
    <circle cx="36.5" cy="41" r="1.3" fill="white" />
    <circle cx="58.5" cy="41" r="1.3" fill="white" />
    <path d="M36 60 C40 65, 50 65, 54 60" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="54" r="5" fill="#FF8FAB" opacity="0.3" />
    <circle cx="66" cy="54" r="5" fill="#FF8FAB" opacity="0.3" />
    {/* Magnifying glass */}
    <circle cx="72" cy="18" r="8" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" />
    <line x1="78" y1="24" x2="84" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const Step3Char = () => (
  <svg viewBox="0 0 90 90" fill="none" className="w-[90px] h-[90px]">
    <rect x="5" y="5" width="80" height="80" rx="22" fill="#22C55E" />
    <ellipse cx="34" cy="38" rx="5" ry="6" fill="white" />
    <ellipse cx="56" cy="38" rx="5" ry="6" fill="white" />
    <circle cx="35" cy="39" r="3.5" fill="#2D1B69" />
    <circle cx="57" cy="39" r="3.5" fill="#2D1B69" />
    <circle cx="36.5" cy="37" r="1.3" fill="white" />
    <circle cx="58.5" cy="37" r="1.3" fill="white" />
    <path d="M32 56 C38 64, 52 64, 58 56" stroke="#2D1B69" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="50" r="5" fill="white" opacity="0.2" />
    <circle cx="66" cy="50" r="5" fill="white" opacity="0.2" />
    {/* Sparkle */}
    <path d="M72 10 C72 14, 72 14, 76 14 C72 14, 72 14, 72 18 C72 14, 72 14, 68 14 C72 14, 72 14, 72 10Z" fill="#FFD23F" />
    <path d="M14 14 C14 17, 14 17, 17 17 C14 17, 14 17, 14 20 C14 17, 14 17, 11 17 C14 17, 14 17, 14 14Z" fill="#FFD23F" />
  </svg>
)

/* Hand-drawn doodle arrow connecting steps */
const DoodleConnector = () => (
  <svg viewBox="0 0 100 30" fill="none" className="hidden md:block w-24 h-8 text-coral">
    <path d="M4 15 C20 8, 45 22, 70 12 C78 9, 84 10, 88 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 5" opacity="0.5" style={{ animation: 'dash-flow 1.5s linear infinite' }} />
    <path d="M82 6 L92 14 L82 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
  </svg>
)

const steps = [
  { num: '01', Char: Step1Char, title: 'Расскажите о\u00a0ребёнке', text: 'Анкета из 5\u00a0вопросов: возраст, интересы, район. Занимает 2\u00a0минуты.', delay: '' },
  { num: '02', Char: Step2Char, title: 'Мы подберём варианты', text: 'Живой специалист вручную подберёт 3-5 занятий. Не\u00a0алгоритм — человек, который знает рынок.', delay: 'sr-d2' },
  { num: '03', Char: Step3Char, title: 'Получите подборку', text: 'Через 1-2 часа в\u00a0мессенджер: описание, цены, расписание, контакты.', delay: 'sr-d4' },
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
        <p className="sr sr-d2 text-n700 text-[0.9375rem] max-w-[560px] leading-[1.65] mb-12 text-center mx-auto">
          Вы отвечаете — мы&nbsp;ищем, сравниваем, проверяем
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-[960px] mx-auto items-center md:items-start justify-center">
          {steps.map((s, i) => (
            <div key={i} className="contents">
              <div className={`sr ${s.delay} text-center relative z-1 flex-1 max-w-[280px] group`}>
                <div className="bg-white/70 backdrop-blur-sm rounded-[28px] p-6 pb-5 border border-white/80 shadow-[0_4px_20px_rgba(26,26,46,.04)] transition-all duration-400 hover:shadow-[0_12px_36px_rgba(26,26,46,.08)] hover:-translate-y-1">
                  <div className="relative inline-block mb-4 transition-transform duration-400 group-hover:scale-105 group-hover:rotate-[-3deg]">
                    <s.Char />
                    <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-coral to-gold flex items-center justify-center font-head font-extrabold text-sm text-white shadow-[0_4px_16px_var(--color-coral-glow)]">
                      {s.num}
                    </div>
                  </div>
                  <h3 className="font-head font-bold text-[1.0625rem] text-indigo mb-1.5">{s.title}</h3>
                  <p className="text-[0.8125rem] text-n700 leading-[1.6] max-w-[260px] mx-auto">{s.text}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center mt-8 md:mt-16">
                  <DoodleConnector />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
