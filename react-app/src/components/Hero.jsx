import { ArrowRight } from 'lucide-react'

const CHILD_PHOTO = 'https://files.1mi.media/f6aaefee1c8c421c941dce6a5a0412f3891d1e3a/c:1456:819:nowe:0:-2/4767aa549d078e28aa31a22545adcf6fb9b965351d0e73172e634f0336ed.webp'

const Sparkle = ({ className = '', color = '#FFD23F' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 0 C12 10, 12 10, 12 12 C12 10, 12 10, 24 12 C12 12, 12 12, 12 24 C12 12, 12 12, 0 12 C12 12, 12 12, 12 0Z" fill={color} opacity="0.55" />
  </svg>
)

const DoodleHeart = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21 C6 16, 2 12, 2 8 C2 5, 4.5 2, 7.5 2 C9.5 2, 11 3, 12 5 C13 3, 14.5 2, 16.5 2 C19.5 2, 22 5, 22 8 C22 12, 18 16, 12 21Z" fill="#FF8FAB" opacity="0.4" />
  </svg>
)

const avatars = [
  { letter: 'М', gradient: 'linear-gradient(135deg,#FF6B35,#FFC08C)' },
  { letter: 'О', gradient: 'linear-gradient(135deg,#B197FC,#A684F4)' },
  { letter: 'Д', gradient: 'linear-gradient(135deg,#22C55E,#9AF0A6)' },
  { letter: 'А', gradient: 'linear-gradient(135deg,#FFD23F,#FBBF24)' },
]

const tags = [
  { icon: '🎨', label: 'Творчество', className: 'top-[42px] right-[4px] animate-[float-a_5s_ease-in-out_infinite]' },
  { icon: '⚽', label: 'Спорт', className: 'top-[190px] right-[-12px] animate-[float-b_6s_ease-in-out_infinite]' },
  { icon: '💃', label: 'Танцы', className: 'bottom-[52px] right-[10px] animate-[float-c_4.5s_ease-in-out_infinite]' },
]

export default function Hero({ onQuiz }) {
  return (
    <section className="relative flex items-center overflow-hidden pt-24 pb-12 md:min-h-[820px] md:pt-28 md:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cream via-cream to-peach-lt/30" />
      <div className="pointer-events-none absolute -top-[180px] -right-[180px] h-[680px] w-[680px] bg-[radial-gradient(circle,var(--color-peach-lt)_0%,transparent_65%)] opacity-60" />
      <div className="pointer-events-none absolute -bottom-[120px] -left-[220px] h-[560px] w-[560px] bg-[radial-gradient(circle,var(--color-lavender-lt)_0%,transparent_65%)] opacity-40" />
      <div className="pointer-events-none absolute top-[16%] right-[10%] h-[300px] w-[300px] bg-[radial-gradient(circle,var(--color-gold-lt)_0%,transparent_65%)] opacity-20" />

      <Sparkle className="absolute top-30 right-[14%] h-6 w-6 animate-[wiggle_3s_ease-in-out_infinite]" />
      <Sparkle className="absolute top-48 left-[7%] h-4 w-4 animate-[float-b_4s_ease-in-out_infinite]" color="#FF6B35" />
      <DoodleHeart className="absolute bottom-18 right-[20%] h-7 w-7 animate-[float-a_5s_ease-in-out_infinite]" />
      <Sparkle className="absolute bottom-34 left-[10%] h-4 w-4 animate-[wiggle_4s_ease-in-out_infinite]" color="#B197FC" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="relative z-2 max-w-[700px]">
            <div className="sr mb-5 inline-flex items-center gap-2 rounded-full border border-gold/15 bg-gold-lt/75 px-5 py-1.5 text-[1rem] font-bold text-[#A67B00] shadow-[0_2px_12px_rgba(255,210,63,.1)] backdrop-blur-sm font-hand">
              Кружки, секции, курсы, мастер-классы
            </div>

            <h1 className="sr sr-d1 mb-5 text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-indigo sm:text-[3.1rem] lg:text-[3.85rem] font-display font-black">
              <span className="hidden lg:block">
                Подберём <span className="text-pill text-pill-coral">занятия</span><br />
                ребёнку на основе<br />
                <span className="text-pill text-pill-gold">предпочтений</span>
              </span>
              <span className="lg:hidden">
                Подберём <span className="text-pill text-pill-coral">занятия</span> ребёнку на основе <span className="text-pill text-pill-gold">предпочтений</span>
              </span>
            </h1>

            <p className="sr sr-d2 mb-3 max-w-[540px] text-[1rem] leading-[1.72] text-n700 md:text-[1.06rem]">
              Расскажите, какой у вас ребёнок: спокойный или активный, любит творчество, движение или общение. Мы соберём короткую подборку занятий, которые ему действительно подойдут.
            </p>
            <p className="sr sr-d2 mb-8 text-[1.15rem] text-n500 font-hand">Без каталогов на 200 ссылок и случайного выбора ✦</p>

            <div className="sr sr-d3 mb-6">
              <button
                onClick={onQuiz}
                className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-9 py-[1rem] text-[1.02rem] font-bold text-white shadow-[0_8px_32px_rgba(255,107,53,.22)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-coral-dk active:scale-[0.98] font-head"
              >
                Подобрать занятия
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>

            <div className="sr sr-d4 mt-6 flex items-center gap-3.5 text-[0.8125rem] text-n500">
              <div className="flex">
                {avatars.map((avatar, index) => (
                  <span
                    key={avatar.letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-[2.5px] border-cream text-[0.6rem] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,.08)]"
                    style={{ background: avatar.gradient, marginLeft: index > 0 ? '-8px' : 0 }}
                  >
                    {avatar.letter}
                  </span>
                ))}
              </div>
              <span className="font-medium">870+ подборок уже отправлено родителям</span>
            </div>
          </div>

          <div className="sr sr-d2 relative hidden h-[430px] md:block lg:h-[470px]">
            <div className="absolute top-[50%] left-[56%] z-0 h-[390px] w-[390px] -translate-x-[48%] -translate-y-[48%] lg:h-[420px] lg:w-[420px]">
              <div className="absolute inset-0 rotate-[-4deg] rounded-[48px] border border-white/60 bg-gradient-to-br from-white/80 via-peach-lt/55 to-lavender-lt/45 shadow-[0_24px_80px_rgba(45,27,105,.05),0_8px_32px_rgba(255,107,53,.05)]" />
              <div className="absolute inset-3 rotate-[-4deg] rounded-[44px] bg-gradient-to-tr from-gold-lt/25 via-transparent to-coral-lt/18" />
            </div>

            <div className="absolute top-[50%] left-[56%] z-[2] h-[340px] w-[340px] -translate-x-[50%] -translate-y-[50%] lg:h-[370px] lg:w-[370px]">
              <img
                src={CHILD_PHOTO}
                alt="Счастливый ребёнок на занятиях"
                className="h-full w-full rounded-[40px] object-cover shadow-[0_20px_60px_rgba(45,27,105,.12)]"
              />
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-cream/20 via-transparent to-transparent" />
            </div>

            {tags.map((tag) => (
              <div key={tag.label} className={`absolute z-[5] ${tag.className}`}>
                <div className="flex items-center gap-1.5 rounded-xl border border-n200/40 bg-white/88 px-3 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,.07)] backdrop-blur-sm">
                  <span className="text-[0.8rem]">{tag.icon}</span>
                  <span className="text-[0.72rem] font-bold text-indigo">{tag.label}</span>
                </div>
              </div>
            ))}

            <div className="absolute top-[54px] left-[56px] z-[5] animate-[float-c_6s_ease-in-out_infinite]">
              <div className="rounded-xl border border-white/70 bg-white/88 px-3 py-2 shadow-[0_8px_28px_rgba(45,27,105,.06)] backdrop-blur-sm">
                <div className="flex items-center gap-1">
                  <span className="text-[0.75rem] text-gold">★★★★★</span>
                </div>
                <p className="mt-0.5 text-[0.55rem] font-medium text-n500">870+ подборок</p>
              </div>
            </div>

            <div className="absolute bottom-[178px] left-[46px] z-[5] animate-[wiggle_3s_ease-in-out_infinite]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/12">
                <span className="text-[0.95rem]">🎵</span>
              </div>
            </div>

            <Sparkle className="absolute top-[104px] right-[0px] z-[6] h-5 w-5 animate-[wiggle_2.5s_ease-in-out_infinite]" />
            <Sparkle className="absolute bottom-[154px] left-[28px] z-[6] h-4 w-4 animate-[float-a_3.5s_ease-in-out_infinite]" color="#B197FC" />
          </div>

          <div className="sr sr-d2 relative mx-auto h-[260px] w-[260px] md:hidden">
            <div className="absolute -inset-3 rotate-[-3deg] rounded-[32px] bg-gradient-to-br from-peach-lt/60 via-lavender-lt/40 to-gold-lt/50" />
            <img
              src={CHILD_PHOTO}
              alt="Счастливый ребёнок на занятиях"
              className="relative h-full w-full rounded-[26px] object-cover shadow-[0_16px_48px_rgba(45,27,105,.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
