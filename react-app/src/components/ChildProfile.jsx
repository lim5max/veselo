import { ArrowRight, MapPin, Star, Zap, Users, Palette, Activity } from 'lucide-react'

/* ---- Kawaii Child Avatar ---- */
const ChildAvatar = ({ className = '' }) => (
  <svg viewBox="0 0 140 160" fill="none" className={className}>
    {/* Hair */}
    <ellipse cx="70" cy="52" rx="52" ry="48" fill="#A684F4" />
    <path d="M22 52 C22 28, 44 8, 70 8 C96 8, 118 28, 118 52" fill="#6D3FCC" />
    {/* Face */}
    <ellipse cx="70" cy="72" rx="44" ry="42" fill="#FFCBA4" />
    {/* Eyes */}
    <ellipse cx="54" cy="68" rx="6" ry="7" fill="white" />
    <ellipse cx="86" cy="68" rx="6" ry="7" fill="white" />
    <circle cx="55" cy="69" r="4.5" fill="#6C52C9" />
    <circle cx="87" cy="69" r="4.5" fill="#6C52C9" />
    <circle cx="57" cy="67" r="1.8" fill="white" />
    <circle cx="89" cy="67" r="1.8" fill="white" />
    {/* Blush */}
    <circle cx="40" cy="80" r="6" fill="#F6A4E8" opacity="0.3" />
    <circle cx="100" cy="80" r="6" fill="#F6A4E8" opacity="0.3" />
    {/* Smile */}
    <path d="M55 88 C60 96, 80 96, 85 88" stroke="#6C52C9" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Body/shirt */}
    <path d="M35 112 C35 105, 48 100, 70 100 C92 100, 105 105, 105 112 L108 150 C108 155, 100 158, 70 158 C40 158, 32 155, 32 150Z" fill="#8DBDFF" />
    {/* Shirt collar */}
    <path d="M58 102 L70 114 L82 102" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
    {/* Star on shirt */}
    <path d="M70 125 L73 132 L80 132 L74 136 L76 143 L70 139 L64 143 L66 136 L60 132 L67 132Z" fill="#F8DC5B" opacity="0.7" />
  </svg>
)

/* ---- Decorative sparkle (reused from Hero style) ---- */
const Sparkle = ({ className = '', color = '#F8DC5B' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 0 C12 10, 12 10, 12 12 C12 10, 12 10, 24 12 C12 12, 12 12, 12 24 C12 12, 12 12, 0 12 C12 12, 12 12, 12 0Z" fill={color} opacity="0.55" />
  </svg>
)

/* ---- Blurred "Logo" Placeholders ---- */
const BlurredLogo = ({ colors, shape = 'circle' }) => (
  <div className="w-11 h-11 rounded-xl overflow-hidden relative flex-shrink-0" style={{ filter: 'blur(4px)' }}>
    {shape === 'circle' ? (
      <>
        <div className="absolute inset-0 rounded-full" style={{ background: colors[0] }} />
        <div className="absolute top-1 left-2 w-5 h-5 rounded-full" style={{ background: colors[1] }} />
        <div className="absolute bottom-1 right-1 w-4 h-3" style={{ background: colors[2] || colors[1] }} />
      </>
    ) : shape === 'blocks' ? (
      <>
        <div className="absolute inset-0" style={{ background: colors[0] }} />
        <div className="absolute top-0 left-0 w-1/2 h-1/2" style={{ background: colors[1] }} />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2" style={{ background: colors[2] || colors[1] }} />
      </>
    ) : (
      <>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }} />
        <div className="absolute top-2 left-1 w-7 h-2 rounded" style={{ background: 'white', opacity: 0.6 }} />
        <div className="absolute bottom-2 left-2 w-5 h-2 rounded" style={{ background: 'white', opacity: 0.4 }} />
      </>
    )}
  </div>
)

const traits = [
  { icon: '7', label: 'лет', bg: 'bg-sky-lt', text: 'text-[#6FA7EE]', isBig: true },
  { Icon: Palette, label: 'Творчество', bg: 'bg-lavender-lt', text: 'text-[#7C3AED]' },
  { Icon: Activity, label: 'Движение', bg: 'bg-coral-lt', text: 'text-coral-dk' },
  { Icon: Zap, label: 'Энергия: высокая', bg: 'bg-gold-lt', text: 'text-[#C5A542]' },
  { Icon: Users, label: 'Командный игрок', bg: 'bg-green-lt', text: 'text-[#73D664]' },
]

const activities = [
  {
    name: 'Студия керамики «Глинка»',
    category: 'Творчество',
    catColor: '#C9A4FF',
    catBg: '#F5EDFF',
    distance: '1.2 км',
    rating: 4.9,
    reviews: 48,
    logo: { colors: ['#C9A4FF', '#E8DBFF', '#A684F4'], shape: 'circle' },
  },
  {
    name: 'Футбольная школа «Чемпион»',
    category: 'Спорт',
    catColor: '#8DBDFF',
    catBg: '#ECF4FF',
    distance: '0.8 км',
    rating: 4.8,
    reviews: 124,
    logo: { colors: ['#8DBDFF', '#1E90FF', '#ECF4FF'], shape: 'blocks' },
  },
  {
    name: 'Театральная студия «Маска»',
    category: 'Творчество',
    catColor: '#F6A4E8',
    catBg: '#FFF0FC',
    distance: '1.5 км',
    rating: 5.0,
    reviews: 36,
    logo: { colors: ['#FFA561', '#F8DC5B'], shape: 'gradient' },
  },
  {
    name: 'Секция капоэйры «Movimento»',
    category: 'Спорт / Танцы',
    catColor: '#91E27A',
    catBg: '#EEFFEF',
    distance: '2.1 км',
    rating: 4.7,
    reviews: 19,
    logo: { colors: ['#91E27A', '#F8DC5B', '#6C52C9'], shape: 'circle' },
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < Math.floor(rating) ? 'fill-gold text-gold' : 'text-n300'}
        strokeWidth={0}
        fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
        stroke={i < Math.floor(rating) ? 'none' : 'currentColor'}
      />
    ))}
    <span className="text-[0.7rem] font-bold text-indigo ml-0.5">{rating}</span>
  </div>
)

export default function ChildProfile({ onQuiz }) {
  return (
    <section className="py-20 md:py-[6.5rem] relative overflow-hidden" id="child-profile">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[100px] -left-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,var(--color-lavender-lt)_0%,transparent_65%)] opacity-50" />
        <div className="absolute -bottom-[100px] -right-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,var(--color-peach-lt)_0%,transparent_65%)] opacity-40" />
      </div>

      {/* Floating sparkles */}
      <Sparkle className="absolute top-20 right-[10%] w-6 h-6 animate-[wiggle_3s_ease-in-out_infinite]" />
      <Sparkle className="absolute bottom-32 left-[8%] w-5 h-5 animate-[float-b_4s_ease-in-out_infinite]" color="#C9A4FF" />
      <Sparkle className="absolute top-40 left-[15%] w-4 h-4 animate-[float-a_5s_ease-in-out_infinite]" color="#F6A4E8" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="sr font-hand text-2xl text-coral">Как это выглядит?</span>
          <h2 className="sr sr-d1 font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] mt-1">
            Персональная <span className="text-pill text-pill-lavender">подборка</span> за 2 минуты
          </h2>
          <p className="sr sr-d2 text-n700 text-[0.9375rem] max-w-[540px] mx-auto leading-[1.65] mt-3">
            Расскажите о ребёнке — и мы подберём занятия, которые ему точно понравятся
          </p>
        </div>

        {/* Main card */}
        <div className="sr sr-d3 relative max-w-[1060px] mx-auto">
          {/* Decorative tilted background card */}
          <div className="absolute -inset-3 bg-gradient-to-br from-lavender-lt/60 via-white/40 to-peach-lt/50 rounded-[36px] rotate-[-1deg] -z-1 border border-white/50" />

          <div className="bg-white/80 backdrop-blur-sm rounded-[28px] border border-n200/40 shadow-[0_24px_80px_rgba(45,27,105,.06)] overflow-hidden">
            {/* "Demo" ribbon */}
            <div className="bg-gradient-to-r from-lavender/10 via-gold-lt/60 to-coral-lt/40 px-6 py-2.5 flex items-center justify-center gap-2 border-b border-n200/30">
              <div className="w-2 h-2 rounded-full bg-coral animate-[glow-pulse_2.8s_ease-in-out_infinite]" />
              <span className="font-hand text-[1.1rem] text-indigo">Пример подборки для Миши, 7 лет</span>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">

                {/* LEFT: Child profile */}
                <div className="flex flex-col items-center lg:items-start">
                  {/* Avatar area */}
                  <div className="relative mb-6">
                    <div className="w-[160px] h-[180px] relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-lt via-lavender-lt to-gold-lt rounded-[32px] rotate-[3deg]" />
                      <div className="absolute inset-1.5 bg-white rounded-[28px] flex items-center justify-center overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?w=320&h=360&fit=crop&crop=face"
                          alt="Мальчик"
                          className="w-full h-full object-cover rounded-[28px]"
                        />
                      </div>
                    </div>
                    {/* Floating name badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-1.5 shadow-[0_6px_24px_rgba(45,27,105,.08)] border border-n200/40">
                      <span className="font-head font-bold text-[0.9rem] text-indigo">Миша</span>
                    </div>
                  </div>

                  {/* Characteristics */}
                  <div className="w-full">
                    <p className="font-hand text-[1.15rem] text-n500 mb-3 text-center lg:text-left">Характеристики:</p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {traits.map((t, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 ${t.bg} ${t.text} font-head font-bold text-[0.75rem] px-3.5 py-[6px] rounded-full border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,.04)] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(0,0,0,.08)]`}
                        >
                          {t.isBig ? (
                            <span className="text-[0.95rem] font-black leading-none">{t.icon}</span>
                          ) : (
                            <t.Icon size={13} strokeWidth={2.5} />
                          )}
                          {t.label}
                        </span>
                      ))}
                    </div>

                    {/* Handwritten note */}
                    <div className="mt-5 bg-gold-lt/50 rounded-2xl px-4 py-3 border border-gold/10 relative">
                      <svg className="absolute -top-2 left-5 w-4 h-4 text-gold-lt" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0 L16 16 L0 16Z" />
                      </svg>
                      <p className="font-hand text-[1.05rem] text-[#8B6914] leading-snug">
                        Любит лепить из пластилина, бегает на переменах, обожает командные игры
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Suggested activities */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                      <span className="text-[0.7rem]">&#10024;</span>
                    </div>
                    <h3 className="font-head font-bold text-[1.05rem] text-indigo">Подобранные занятия</h3>
                    <span className="ml-auto text-[0.7rem] text-n400 font-medium bg-n100 px-2.5 py-1 rounded-full">4 совпадения</span>
                  </div>

                  <div className="grid gap-3">
                    {activities.map((a, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-4 bg-white rounded-[18px] p-4 border border-n200/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(45,27,105,.07)] hover:-translate-y-0.5 hover:border-n200 cursor-pointer"
                      >
                        {/* Blurred logo */}
                        <BlurredLogo colors={a.logo.colors} shape={a.logo.shape} />

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-head font-bold text-[0.875rem] text-indigo truncate group-hover:text-coral-dk transition-colors duration-300">
                            {a.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span
                              className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: a.catBg, color: a.catColor }}
                            >
                              {a.category}
                            </span>
                            <span className="flex items-center gap-0.5 text-[0.7rem] text-n500">
                              <MapPin size={10} strokeWidth={2.5} />
                              {a.distance}
                            </span>
                          </div>
                          <div className="mt-1.5">
                            <StarRating rating={a.rating} />
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="w-8 h-8 rounded-full bg-n100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-coral/10 flex-shrink-0">
                          <ArrowRight size={14} className="text-n400 group-hover:text-coral transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hint about blur */}
                  <p className="text-[0.7rem] text-n400 mt-3 text-center font-medium italic">
                    Логотипы скрыты — откроются в вашей персональной подборке
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-n200/40 text-center">
                <p className="font-hand text-[1.3rem] text-n500 mb-4">
                  Хотите такую же подборку для своего ребёнка?
                </p>
                <button
                  onClick={onQuiz}
                  className="inline-flex items-center gap-2.5 bg-coral text-white font-head font-bold text-[1.05rem] px-10 py-[1.1rem] rounded-full transition-all duration-300 animate-[glow-pulse_2.8s_ease-in-out_infinite] hover:bg-coral-dk hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] group shadow-[0_8px_32px_rgba(255,107,53,.25)]"
                >
                  Получить подборку для своего ребёнка
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
                <p className="text-[0.75rem] text-n400 mt-3">Бесплатно, за 2 минуты, без регистрации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
