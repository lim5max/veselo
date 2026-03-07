import { ArrowRight, MapPin, Star, Zap, Users, Palette, Activity } from 'lucide-react'

const Sparkle = ({ className = '', color = '#FFD23F' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 0 C12 10, 12 10, 12 12 C12 10, 12 10, 24 12 C12 12, 12 12, 12 24 C12 12, 12 12, 0 12 C12 12, 12 12, 12 0Z" fill={color} opacity="0.55" />
  </svg>
)

const BlurredLogo = ({ colors, shape = 'circle' }) => (
  <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl" style={{ filter: 'blur(4px)' }}>
    {shape === 'circle' ? (
      <>
        <div className="absolute inset-0 rounded-full" style={{ background: colors[0] }} />
        <div className="absolute top-1 left-2 h-5 w-5 rounded-full" style={{ background: colors[1] }} />
        <div className="absolute right-1 bottom-1 h-3 w-4" style={{ background: colors[2] || colors[1] }} />
      </>
    ) : shape === 'blocks' ? (
      <>
        <div className="absolute inset-0" style={{ background: colors[0] }} />
        <div className="absolute top-0 left-0 h-1/2 w-1/2" style={{ background: colors[1] }} />
        <div className="absolute right-0 bottom-0 h-1/2 w-1/2" style={{ background: colors[2] || colors[1] }} />
      </>
    ) : (
      <>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }} />
        <div className="absolute top-2 left-1 h-2 w-7 rounded bg-white opacity-60" />
        <div className="absolute bottom-2 left-2 h-2 w-5 rounded bg-white opacity-40" />
      </>
    )}
  </div>
)

const traits = [
  { icon: '12', label: 'лет', bg: 'bg-sky-lt', text: 'text-[#0284C7]', isBig: true },
  { Icon: Palette, label: 'Творчество', bg: 'bg-lavender-lt', text: 'text-[#7C3AED]' },
  { Icon: Activity, label: 'Движение', bg: 'bg-coral-lt', text: 'text-coral-dk' },
  { Icon: Zap, label: 'Энергия: высокая', bg: 'bg-gold-lt', text: 'text-[#B8860B]' },
  { Icon: Users, label: 'Командный игрок', bg: 'bg-green-lt', text: 'text-[#16A34A]' },
]

const activities = [
  {
    name: 'Студия керамики «Глинка»',
    category: 'Творчество',
    catColor: '#B197FC',
    catBg: '#F5EDFF',
    distance: '1.2 км',
    rating: 4.9,
    logo: { colors: ['#B197FC', '#E8DBFF', '#A684F4'], shape: 'circle' },
  },
  {
    name: 'Футбольная школа «Чемпион»',
    category: 'Спорт',
    catColor: '#38BDF8',
    catBg: '#ECF4FF',
    distance: '0.8 км',
    rating: 4.8,
    logo: { colors: ['#38BDF8', '#1E90FF', '#ECF4FF'], shape: 'blocks' },
  },
  {
    name: 'Театральная студия «Маска»',
    category: 'Творчество',
    catColor: '#FF8FAB',
    catBg: '#FFF0FC',
    distance: '1.5 км',
    rating: 5.0,
    logo: { colors: ['#FF6B35', '#FFD23F'], shape: 'gradient' },
  },
  {
    name: 'Секция капоэйры «Movimento»',
    category: 'Спорт / Танцы',
    catColor: '#22C55E',
    catBg: '#EEFFEF',
    distance: '2.1 км',
    rating: 4.7,
    logo: { colors: ['#22C55E', '#FFD23F', '#2D1B69'], shape: 'circle' },
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
    <span className="ml-0.5 text-[0.7rem] font-bold text-indigo">{rating}</span>
  </div>
)

export default function ChildProfile({ onQuiz }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-[6.5rem]" id="child-profile">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        <div className="absolute -top-[100px] -left-[150px] h-[500px] w-[500px] bg-[radial-gradient(circle,var(--color-lavender-lt)_0%,transparent_65%)] opacity-50" />
        <div className="absolute -right-[150px] -bottom-[100px] h-[500px] w-[500px] bg-[radial-gradient(circle,var(--color-peach-lt)_0%,transparent_65%)] opacity-40" />
      </div>

      <Sparkle className="absolute top-20 right-[10%] h-6 w-6 animate-[wiggle_3s_ease-in-out_infinite]" />
      <Sparkle className="absolute bottom-32 left-[8%] h-5 w-5 animate-[float-b_4s_ease-in-out_infinite]" color="#B197FC" />
      <Sparkle className="absolute top-40 left-[15%] h-4 w-4 animate-[float-a_5s_ease-in-out_infinite]" color="#FF8FAB" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="mb-12 text-center">
          <span className="sr text-2xl text-coral font-hand">Как это выглядит?</span>
          <h2 className="sr sr-d1 mt-1 text-[1.875rem] leading-[1.2] text-indigo md:text-[2.5rem] font-display font-black">
            Персональная <span className="text-pill text-pill-lavender">подборка</span> за 2 минуты
          </h2>
          <p className="sr sr-d2 mx-auto mt-3 max-w-[540px] text-[0.9375rem] leading-[1.65] text-n700">
            Расскажите о ребёнке, и мы подберём занятия, которые ему точно понравятся
          </p>
        </div>

        <div className="sr sr-d3 relative mx-auto max-w-[1060px]">
          <div className="absolute -inset-3 -z-1 rotate-[-1deg] rounded-[36px] border border-white/50 bg-gradient-to-br from-lavender-lt/60 via-white/40 to-peach-lt/50" />

          <div className="overflow-hidden rounded-[28px] border border-n200/40 bg-white/80 shadow-[0_24px_80px_rgba(45,27,105,.06)] backdrop-blur-sm">
            <div className="p-6 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative mb-6">
                    <div className="relative h-[180px] w-[160px]">
                      <div className="absolute inset-0 rotate-[3deg] rounded-[32px] bg-gradient-to-br from-sky-lt via-lavender-lt to-gold-lt" />
                      <div className="absolute inset-1.5 flex items-center justify-center overflow-hidden rounded-[28px] bg-white">
                        <img
                          src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?w=320&h=360&fit=crop&crop=face"
                          alt="Мальчик"
                          className="h-full w-full rounded-[28px] object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-n200/40 bg-white px-5 py-1.5 shadow-[0_6px_24px_rgba(45,27,105,.08)]">
                      <span className="text-[0.9rem] font-bold text-indigo font-head">Миша</span>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="mb-3 text-center text-[1.15rem] text-n500 lg:text-left font-hand">Характеристики:</p>
                    <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                      {traits.map((trait, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 rounded-full border border-white/60 px-3.5 py-[6px] text-[0.75rem] font-bold shadow-[0_2px_8px_rgba(0,0,0,.04)] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(0,0,0,.08)] font-head ${trait.bg} ${trait.text}`}
                        >
                          {trait.isBig ? (
                            <span className="text-[0.95rem] leading-none font-black">{trait.icon}</span>
                          ) : (
                            <trait.Icon size={13} strokeWidth={2.5} />
                          )}
                          {trait.label}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-gold/10 bg-gold-lt/50 px-4 py-3">
                      <svg className="absolute -top-2 left-5 h-4 w-4 text-gold-lt" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0 L16 16 L0 16Z" />
                      </svg>
                      <p className="text-[1.05rem] leading-snug text-[#8B6914] font-hand">
                        Любит лепить из пластилина, бегает на переменах, обожает командные игры
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-coral/10">
                      <span className="text-[0.7rem]">&#10024;</span>
                    </div>
                    <h3 className="text-[1.05rem] font-bold text-indigo font-head">Подобранные занятия</h3>
                    <span className="ml-auto rounded-full bg-n100 px-2.5 py-1 text-[0.7rem] font-medium text-n400">4 совпадения</span>
                  </div>

                  <div className="grid gap-3">
                    {activities.map((activity, i) => (
                      <div
                        key={i}
                        className="group flex cursor-pointer items-center gap-4 rounded-[18px] border border-n200/50 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-n200 hover:shadow-[0_8px_32px_rgba(45,27,105,.07)]"
                      >
                        <BlurredLogo colors={activity.logo.colors} shape={activity.logo.shape} />
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-[0.875rem] font-bold text-indigo transition-colors duration-300 group-hover:text-coral-dk font-head">
                            {activity.name}
                          </h4>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span
                              className="rounded-full px-2 py-0.5 text-[0.65rem] font-bold"
                              style={{ background: activity.catBg, color: activity.catColor }}
                            >
                              {activity.category}
                            </span>
                            <span className="flex items-center gap-0.5 text-[0.7rem] text-n500">
                              <MapPin size={10} strokeWidth={2.5} />
                              {activity.distance}
                            </span>
                          </div>
                          <div className="mt-1.5">
                            <StarRating rating={activity.rating} />
                          </div>
                        </div>
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-n100 opacity-0 transition-all duration-300 group-hover:bg-coral/10 group-hover:opacity-100">
                          <ArrowRight size={14} className="text-n400 transition-colors group-hover:text-coral" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-center text-[0.7rem] font-medium italic text-n400">
                    Логотипы скрыты и откроются в вашей персональной подборке
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-n200/40 pt-8 text-center">
                <p className="mb-4 text-[1.3rem] text-n500 font-hand">Хотите такую же подборку для своего ребёнка?</p>
                <button
                  onClick={onQuiz}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-10 py-[1.1rem] text-[1.05rem] font-bold text-white shadow-[0_8px_32px_rgba(255,107,53,.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-coral-dk active:scale-[0.98] font-head"
                >
                  Получить подборку для своего ребёнка
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
                <p className="mt-3 text-[0.75rem] text-n400">Бесплатно, за 2 минуты, без регистрации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
