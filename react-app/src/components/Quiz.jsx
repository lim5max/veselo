import { useState, useRef, useCallback } from 'react'
import { ChevronLeft, ArrowRight, Share2 } from 'lucide-react'

const ages = ['4-5 лет', '6-7 лет', '8-9 лет', '10-12 лет', '13-16 лет']

const interests = [
  { val: 'Спорт', color: '#38BDF8', bg: '#EBF8FF' },
  { val: 'Творчество', color: '#B197FC', bg: '#F3EEFF' },
  { val: 'Музыка', color: '#FFD23F', bg: '#FFF8E1' },
  { val: 'Танцы', color: '#FF8FAB', bg: '#FFF0F3' },
  { val: 'Программирование', label: 'IT / Код', color: '#22C55E', bg: '#ECFDF5' },
  { val: 'Наука', color: '#6EE7B7', bg: '#ECFDF5' },
  { val: 'Языки', color: '#FF6B35', bg: '#FFF0EB' },
  { val: 'Шахматы', color: '#2D1B69', bg: '#F0EDFF' },
  { val: 'Другое', color: '#9CA3AF', bg: '#F3F4F6' },
]

const priorities = ['Близко к дому', 'Доступная цена', 'Качество', 'Расписание', 'Маленькие группы', 'Соревнования', 'Чтобы нравилось', 'Проф. развитие']
const budgets = ['до 3 000 ₽', '3–6 тыс. ₽', '6–10 тыс. ₽', '10–15 тыс. ₽', 'Не важно']

const TgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
)
const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
)

/* Quiz character — small companion */
const QuizBuddy = ({ step }) => {
  const expressions = [
    // Step 1: curious
    <svg key="1" viewBox="0 0 60 60" fill="none" className="w-12 h-12"><circle cx="30" cy="30" r="26" fill="#FFD23F"/><ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/><ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/><circle cx="23" cy="27" r="3" fill="#2D1B69"/><circle cx="39" cy="27" r="3" fill="#2D1B69"/><circle cx="24" cy="25.5" r="1.1" fill="white"/><circle cx="40" cy="25.5" r="1.1" fill="white"/><ellipse cx="30" cy="40" rx="4" ry="3" fill="#2D1B69" opacity="0.7"/></svg>,
    // Step 2: excited
    <svg key="2" viewBox="0 0 60 60" fill="none" className="w-12 h-12"><circle cx="30" cy="30" r="26" fill="#FF8FAB"/><ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/><ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/><circle cx="23" cy="27" r="3" fill="#2D1B69"/><circle cx="39" cy="27" r="3" fill="#2D1B69"/><circle cx="24" cy="25.5" r="1.1" fill="white"/><circle cx="40" cy="25.5" r="1.1" fill="white"/><path d="M22 38 C26 44, 34 44, 38 38" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none"/></svg>,
    // Step 3: thinking
    <svg key="3" viewBox="0 0 60 60" fill="none" className="w-12 h-12"><circle cx="30" cy="30" r="26" fill="#B197FC"/><ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/><ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/><circle cx="23" cy="27" r="3" fill="#2D1B69"/><circle cx="39" cy="27" r="3" fill="#2D1B69"/><circle cx="24" cy="25.5" r="1.1" fill="white"/><circle cx="40" cy="25.5" r="1.1" fill="white"/><path d="M24 40 L36 40" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    // Step 4: helpful
    <svg key="4" viewBox="0 0 60 60" fill="none" className="w-12 h-12"><circle cx="30" cy="30" r="26" fill="#38BDF8"/><ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/><ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/><circle cx="23" cy="27" r="3" fill="#2D1B69"/><circle cx="39" cy="27" r="3" fill="#2D1B69"/><circle cx="24" cy="25.5" r="1.1" fill="white"/><circle cx="40" cy="25.5" r="1.1" fill="white"/><path d="M23 38 C27 43, 33 43, 37 38" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none"/></svg>,
    // Step 5: ready!
    <svg key="5" viewBox="0 0 60 60" fill="none" className="w-12 h-12"><circle cx="30" cy="30" r="26" fill="#22C55E"/><ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/><ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/><circle cx="23" cy="27" r="3" fill="#2D1B69"/><circle cx="39" cy="27" r="3" fill="#2D1B69"/><circle cx="24" cy="25.5" r="1.1" fill="white"/><circle cx="40" cy="25.5" r="1.1" fill="white"/><path d="M22 36 C26 44, 34 44, 38 36" stroke="#2D1B69" strokeWidth="2.5" strokeLinecap="round" fill="none"/><circle cx="16" cy="34" r="4" fill="white" opacity="0.25"/><circle cx="44" cy="34" r="4" fill="white" opacity="0.25"/></svg>,
  ]
  return expressions[step - 1] || expressions[0]
}

export default function Quiz() {
  const [step, setStep] = useState(1)
  const [fd, setFd] = useState({
    childAge: '', interests: [], priorities: [], city: 'Москва',
    district: '', budget: '', parentName: '', phone: '', messenger: '', email: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  const update = useCallback((key, val) => {
    setFd(prev => ({ ...prev, [key]: val }))
    setErrors(prev => ({ ...prev, [key]: false }))
  }, [])

  const toggleInterest = useCallback((val) => {
    setFd(prev => {
      const arr = prev.interests.includes(val) ? prev.interests.filter(v => v !== val) : [...prev.interests, val]
      return { ...prev, interests: arr }
    })
  }, [])

  const togglePriority = useCallback((val) => {
    setFd(prev => {
      if (prev.priorities.includes(val)) return { ...prev, priorities: prev.priorities.filter(v => v !== val) }
      if (prev.priorities.length >= 3) return prev
      return { ...prev, priorities: [...prev.priorities, val] }
    })
  }, [])

  const formatPhone = (raw) => {
    const v = raw.replace(/\D/g, '').slice(0, 10)
    let f = ''
    if (v.length > 0) f = '(' + v.slice(0, 3)
    if (v.length >= 3) f += ') '
    if (v.length > 3) f += v.slice(3, 6)
    if (v.length >= 6) f += '-'
    if (v.length > 6) f += v.slice(6, 8)
    if (v.length >= 8) f += '-'
    if (v.length > 8) f += v.slice(8, 10)
    return { formatted: f, phone: v.length === 10 ? '+7' + v : '' }
  }

  const [phoneDisplay, setPhoneDisplay] = useState('')

  const isValid = () => {
    switch (step) {
      case 1: return !!fd.childAge
      case 2: return fd.interests.length > 0
      case 3: return fd.priorities.length > 0
      case 4: return true
      case 5: return !!fd.parentName && !!fd.phone && !!fd.messenger
      default: return false
    }
  }

  const next = () => { if (step < 5 && isValid()) setStep(s => s + 1) }
  const prev = () => { if (step > 1) setStep(s => s - 1) }

  const submit = () => {
    const errs = {}
    if (!fd.parentName) errs.parentName = true
    if (!fd.phone) errs.phone = true
    if (!fd.messenger) errs.messenger = true
    if (Object.keys(errs).length) { setErrors(errs); return }
    console.log('Заявка Весело:', JSON.parse(JSON.stringify(fd)))
    setSubmitted(true)
  }

  const reset = () => {
    setStep(1)
    setFd({ childAge: '', interests: [], priorities: [], city: 'Москва', district: '', budget: '', parentName: '', phone: '', messenger: '', email: '' })
    setPhoneDisplay('')
    setErrors({})
    setSubmitted(false)
  }

  const share = () => {
    const u = location.href
    const t = 'Крутой сервис — подбирают занятия для детей за 200 ₽!'
    if (navigator.share) navigator.share({ title: 'Весело', text: t, url: u }).catch(() => {})
    else navigator.clipboard.writeText(u + '\n' + t).then(() => alert('Ссылка скопирована!'))
  }

  if (submitted) {
    return (
      <section className="py-20 md:py-[6.5rem]" id="quiz" ref={sectionRef}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <div className="max-w-[660px] mx-auto bg-white rounded-[28px] shadow-[0_24px_64px_rgba(26,26,46,.1)] border-2 border-n200/40 p-8 text-center animate-[scale-pop_.5s_cubic-bezier(.4,0,.2,1)_forwards]">
            {/* Happy celebration character */}
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mx-auto mb-4">
              <circle cx="40" cy="40" r="36" fill="#22C55E" />
              <ellipse cx="30" cy="34" rx="5" ry="6" fill="white" />
              <ellipse cx="50" cy="34" rx="5" ry="6" fill="white" />
              <circle cx="31" cy="35" r="3.5" fill="#2D1B69" />
              <circle cx="51" cy="35" r="3.5" fill="#2D1B69" />
              <circle cx="32.5" cy="33" r="1.3" fill="white" />
              <circle cx="52.5" cy="33" r="1.3" fill="white" />
              <path d="M28 52 C34 62, 46 62, 52 52" stroke="#2D1B69" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="20" cy="46" r="5" fill="white" opacity="0.2" />
              <circle cx="60" cy="46" r="5" fill="white" opacity="0.2" />
              <path d="M14 16 C14 20, 14 20, 18 20 C14 20, 14 20, 14 24 C14 20, 14 20, 10 20 C14 20, 14 20, 14 16Z" fill="#FFD23F" />
              <path d="M62 12 C62 15, 62 15, 65 15 C62 15, 62 15, 62 18 C62 15, 62 15, 59 15 C62 15, 62 15, 62 12Z" fill="#FFD23F" />
            </svg>
            <h2 className="font-head font-extrabold text-[1.375rem] text-indigo mb-3">
              Готово! Мы уже ищем занятия
            </h2>
            <p className="text-[0.9375rem] text-n700 leading-[1.7] mb-6 max-w-[420px] mx-auto">
              Подборка из 3-5 занятий придёт в {fd.messenger} в течение 1-2 часов. Мы пришлём описание, цены, расписание и контакты.
            </p>
            <button onClick={share} className="inline-flex items-center gap-2 bg-indigo text-white font-semibold text-sm py-3 px-6 rounded-full transition-all duration-250 hover:bg-indigo-lt hover:-translate-y-px mb-3">
              <Share2 size={15} /> Поделиться
            </button>
            <br />
            <button onClick={reset} className="text-coral font-medium text-sm hover:underline mt-2">Заполнить на другого ребёнка</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-[6.5rem]" id="quiz" ref={sectionRef}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <h2 className="sr font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] text-center mx-auto">
          Подберём занятия для <span className="text-pill text-pill-coral">вашего ребёнка</span>
        </h2>
        <p className="sr sr-d1 font-hand text-xl text-n500 text-center mt-2 mb-10">
          5 коротких вопросов — не больше 2 минут ✦
        </p>
        <div className="sr sr-d2 max-w-[660px] mx-auto bg-white rounded-[28px] shadow-[0_24px_64px_rgba(26,26,46,.1)] overflow-hidden relative border-2 border-n200/40">
          {/* Progress */}
          <div className="pt-6 px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="shrink-0 transition-all duration-300">
                <QuizBuddy step={step} />
              </div>
              <div className="font-hand text-lg text-n500">Шаг {step} из 5</div>
            </div>
            <div className="h-[7px] bg-n100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-coral to-gold rounded-full transition-[width] duration-500" style={{ width: `${step * 20}%` }} />
            </div>
          </div>

          {/* Body */}
          <div className="p-8 min-h-[360px]">
            {/* Step 1: Age */}
            {step === 1 && (
              <div className="animate-[fade-up_.45s_cubic-bezier(.4,0,.2,1)_forwards]">
                <h2 className="font-head font-extrabold text-[1.375rem] text-indigo mb-1">Сколько лет ребёнку?</h2>
                <p className="text-[0.8125rem] text-n500 mb-7 leading-[1.5]">Возраст — первое, от чего зависит выбор занятий</p>
                <div className="grid grid-cols-2 gap-2.5 mb-6 sm:grid-cols-4">
                  {ages.map(a => (
                    <button key={a} onClick={() => update('childAge', a)}
                      className={`py-3 border-2 rounded-2xl text-center font-medium text-sm transition-all duration-200 cursor-pointer ${fd.childAge === a ? 'border-coral bg-coral-lt text-coral-dk font-semibold scale-[1.02]' : 'border-n200/60 text-n700 hover:border-coral hover:text-coral'}`}
                    >{a}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Interests */}
            {step === 2 && (
              <div className="animate-[fade-up_.45s_cubic-bezier(.4,0,.2,1)_forwards]">
                <h2 className="font-head font-extrabold text-[1.375rem] text-indigo mb-1">Что нравится ребёнку?</h2>
                <p className="text-[0.8125rem] text-n500 mb-7 leading-[1.5]">Выберите одно или несколько направлений</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {interests.map(int => {
                    const sel = fd.interests.includes(int.val)
                    return (
                      <button key={int.val} onClick={() => toggleInterest(int.val)}
                        className={`rounded-2xl p-4 text-center transition-all duration-250 border-2 cursor-pointer group ${sel ? 'border-coral shadow-[0_0_0_2px_var(--color-coral)] scale-[1.02]' : 'border-transparent hover:scale-[1.02]'}`}
                        style={{ background: int.bg }}
                      >
                        <span className="block font-head font-bold text-sm" style={{ color: int.color === '#FFD23F' ? '#B8860B' : int.color === '#6EE7B7' ? '#059669' : int.color }}>
                          {int.label || int.val}
                        </span>
                        {sel && (
                          <div className="inline-flex items-center justify-center w-5 h-5 bg-coral rounded-full text-white text-[0.625rem] mt-1.5 animate-[scale-pop_.25s_cubic-bezier(.34,1.56,.64,1)]">✓</div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Priorities */}
            {step === 3 && (
              <div className="animate-[fade-up_.45s_cubic-bezier(.4,0,.2,1)_forwards]">
                <h2 className="font-head font-extrabold text-[1.375rem] text-indigo mb-1">Что для вас важно?</h2>
                <p className="text-[0.8125rem] text-n500 mb-7 leading-[1.5]">Выберите до 3 критериев</p>
                <div className="flex flex-wrap gap-2.5">
                  {priorities.map(p => {
                    const sel = fd.priorities.includes(p)
                    const dis = !sel && fd.priorities.length >= 3
                    return (
                      <button key={p} onClick={() => !dis && togglePriority(p)}
                        className={`inline-flex items-center gap-1.5 py-2.5 px-4 border-2 rounded-full text-[0.8125rem] font-medium transition-all duration-200 cursor-pointer ${sel ? 'border-coral bg-coral text-white' : dis ? 'border-n200/60 text-n700 opacity-30 cursor-not-allowed' : 'border-n200/60 text-n700 hover:border-coral hover:text-coral'}`}
                      >{p}</button>
                    )
                  })}
                </div>
                <div className="font-hand text-base text-n500 mt-3">Выбрано: {fd.priorities.length} из 3</div>
              </div>
            )}

            {/* Step 4: Location */}
            {step === 4 && (
              <div className="animate-[fade-up_.45s_cubic-bezier(.4,0,.2,1)_forwards]">
                <h2 className="font-head font-extrabold text-[1.375rem] text-indigo mb-1">Где вам удобно?</h2>
                <p className="text-[0.8125rem] text-n500 mb-7 leading-[1.5]">Укажите район — мы подберём занятия поблизости</p>
                <div className="mb-4">
                  <label className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Район или метро</label>
                  <input type="text" value={fd.district} onChange={e => update('district', e.target.value)} placeholder="Например: Хамовники или м. Парк Культуры"
                    className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] text-n900 outline-none transition-colors duration-200 focus:border-coral placeholder:text-n400 bg-cream/50" />
                </div>
                <div className="mb-4">
                  <label className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Бюджет в месяц</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map(b => (
                      <button key={b} onClick={() => update('budget', b)}
                        className={`py-2 px-4 border-2 rounded-full text-[0.8125rem] font-medium transition-all duration-200 cursor-pointer ${fd.budget === b ? 'border-coral bg-coral text-white' : 'border-n200/60 text-n700 hover:border-coral hover:text-coral'}`}
                      >{b}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
              <div className="animate-[fade-up_.45s_cubic-bezier(.4,0,.2,1)_forwards]">
                <h2 className="font-head font-extrabold text-[1.375rem] text-indigo mb-1">Куда прислать подборку?</h2>
                <p className="text-[0.8125rem] text-n500 mb-7 leading-[1.5]">Персональные рекомендации — в течение 1-2 часов</p>
                <div className="mb-4">
                  <label className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Ваше имя</label>
                  <input type="text" value={fd.parentName} onChange={e => update('parentName', e.target.value)} placeholder="Как к вам обращаться?"
                    className={`w-full py-3 px-4 border-2 rounded-2xl text-[0.9375rem] text-n900 outline-none transition-colors duration-200 focus:border-coral placeholder:text-n400 bg-cream/50 ${errors.parentName ? 'border-red-500' : 'border-n200/60'}`} />
                  {errors.parentName && <div className="text-xs text-red-500 mt-1">Укажите имя</div>}
                </div>
                <div className="mb-4">
                  <label className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Телефон / WhatsApp</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[0.9375rem] text-n500 font-medium pointer-events-none">+7</span>
                    <input type="tel" value={phoneDisplay} maxLength={15} placeholder="(___) ___-__-__"
                      onChange={e => {
                        const { formatted, phone } = formatPhone(e.target.value)
                        setPhoneDisplay(formatted)
                        update('phone', phone)
                      }}
                      className={`w-full py-3 pl-11 pr-4 border-2 rounded-2xl text-[0.9375rem] text-n900 outline-none transition-colors duration-200 focus:border-coral placeholder:text-n400 bg-cream/50 ${errors.phone ? 'border-red-500' : 'border-n200/60'}`} />
                  </div>
                  {errors.phone && <div className="text-xs text-red-500 mt-1">Введите номер телефона</div>}
                </div>
                <div className="mb-4">
                  <label className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Email <span className="text-n400 font-normal">(необязательно)</span></label>
                  <input type="email" value={fd.email} onChange={e => update('email', e.target.value)} placeholder="Для дополнительной связи"
                    className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] text-n900 outline-none transition-colors duration-200 focus:border-coral placeholder:text-n400 bg-cream/50" />
                </div>
                <div className="mb-4">
                  <label className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Удобный мессенджер</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[{ val: 'Telegram', Icon: TgIcon }, { val: 'WhatsApp', Icon: WaIcon }].map(m => (
                      <button key={m.val} onClick={() => update('messenger', m.val)}
                        className={`flex items-center justify-center gap-2 py-3.5 border-2 rounded-2xl font-semibold text-[0.9375rem] transition-all duration-200 cursor-pointer ${fd.messenger === m.val ? 'border-coral bg-coral-lt text-coral-dk' : 'border-n200/60 text-n700 hover:border-coral'}`}
                      ><m.Icon />{m.val}</button>
                    ))}
                  </div>
                  {errors.messenger && <div className="text-xs text-red-500 mt-1">Выберите мессенджер</div>}
                </div>
                <p className="text-[0.7rem] text-n400 mt-3 leading-[1.5]">Нажимая кнопку, вы соглашаетесь с&nbsp;обработкой персональных данных</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center px-8 pb-8 gap-4">
            <button onClick={prev}
              className={`inline-flex items-center gap-1.5 text-n500 font-medium text-sm py-2 px-3 rounded-xl transition-all duration-200 hover:text-n900 hover:bg-n100 ${step <= 1 ? 'invisible' : ''}`}
            >
              <ChevronLeft size={15} /> Назад
            </button>
            {step < 5 ? (
              <button onClick={next} disabled={!isValid()}
                className="inline-flex items-center gap-2 bg-coral text-white font-head font-bold text-[0.9375rem] py-3 px-6 rounded-full transition-all duration-250 ml-auto hover:bg-coral-dk hover:-translate-y-px disabled:opacity-35 disabled:cursor-not-allowed shadow-[0_6px_20px_rgba(255,107,53,.2)]"
              >
                Далее <ArrowRight size={15} />
              </button>
            ) : (
              <button onClick={submit} disabled={!isValid()}
                className="inline-flex items-center gap-2 bg-coral text-white font-head font-bold text-base py-3.5 px-7 rounded-full transition-all duration-250 ml-auto animate-[glow-pulse_2.8s_ease-in-out_infinite] hover:bg-coral-dk hover:-translate-y-px disabled:opacity-35 disabled:cursor-not-allowed disabled:animate-none shadow-[0_8px_24px_rgba(255,107,53,.2)]"
              >
                Получить подборку за 200 ₽
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
