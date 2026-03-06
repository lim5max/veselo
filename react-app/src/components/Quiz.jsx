import { useMemo, useState } from 'react'

const QUESTIONS = [
  {
    key: 'q1',
    title: '1. Какие ожидания от занятий?',
    options: ['Занять время', 'Здоровье/энергия', 'Ум/навыки', 'Общение', 'Профессия в будущем', 'Радость/удовольствие'],
  },
  {
    key: 'q2',
    title: '2. Как ребёнок вливается в коллектив?',
    options: ['Лидер, сам знакомится', 'Наблюдатель, входит постепенно', 'Избирательно, 1-2 друга', 'Тревожно, не отпускает меня', 'Игнорирует всех, сам по себе', 'Пристраивается к активным'],
  },
  {
    key: 'q3',
    title: '3. Что успокаивает ребёнка?',
    options: ['Беготня/шум', 'Рисование/конструктор', 'Музыка/пение', 'Разговоры со мной', 'Объятия/тактильность', 'Одиночество/тишина', 'Еда/вкусняшки'],
  },
  {
    key: 'q4',
    title: '4. Как ребенок относится к соревнованиям?',
    options: ['Любит, хочет побеждать', 'Ради процесса, проигрыш не страшен', 'Болезненно, до слёз', 'Не любит, только для себя', 'Заводится, но быстро выгорает', 'Сражается до последнего'],
  },
  {
    key: 'q6',
    title: '6. Что ребёнок выбирает в свободное время?',
    options: ['Активные игры/спорт', 'Творчество (лепить/рисовать)', 'Гаджеты/мультики', 'Помощь мне по дому', 'Чтение книг', 'Конструирование/сборку', 'Настольные игры', 'Общение с друзьями', 'Гулять на улице', 'Ничего не делать'],
  },
  {
    key: 'q7',
    title: '7. Как реагирует на трудности?',
    options: ['Легко бросает, если не получается', 'Упрямо добивается, даже со слезами', 'Ищет помощь у взрослых', 'Быстро переключается на другое', 'Злится, может сломать/кинуть', 'Хитрит, ищет обходные пути', 'Замирает и не знает, что делать', 'Смеётся/отшучивается', 'Плачет/обижается', 'Просит подсказку'],
  },
  {
    key: 'q8',
    title: '7. Какая обстановка важна ребенку?',
    options: ['Шумно, много детей', 'Тихо, мало людей', 'Индивидуально с педагогом', 'Домашняя, привычная', 'На улице/на природе', 'Чёткая структура и правила', 'Свобода и импровизация', 'Всё яркое/красочное', 'Минимализм/ничего лишнего'],
  },
  {
    key: 'q9',
    title: '8. Что ребенка раздражает?',
    options: ['Когда заставляют ждать', 'Когда трогают его вещи', 'Когда говорят "ты не справишься"', 'Когда нарушают правила', 'Громкие звуки', 'Когда перебивают', 'Однообразие/скучно', 'Когда не берут в игру', 'Когда просят повторить/исправить', 'Критика в его сторону'],
  },
  {
    key: 'q10',
    title: '9. Какой он в компании друзей?',
    options: ['Главный затейник', 'Тень, делает как все', 'Миротворец, всех мирит', 'Сам по себе, одиночка', 'Задира/спорщик', 'Защитник слабых', 'Душа компании, весельчак', 'Наблюдатель со стороны', 'Молчун/стеснительный', 'Лидер, но тихий'],
  },
]

const STEPS = ['basic', ...QUESTIONS.map((q) => q.key), 'contacts']

const initialData = {
  childAge: '',
  format: '',
  city: '',
  location: '',
  contactMethods: [],
  phone: '',
  email: '',
  telegram: '',
  comment: '',
  consent: false,
  ...Object.fromEntries(QUESTIONS.map((q) => [q.key, []])),
}

export default function Quiz() {
  const [data, setData] = useState(initialData)
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [step, setStep] = useState(0)

  const isOffline = data.format === 'offline'
  const stepKey = STEPS[step]
  const progress = Math.round(((step + 1) / STEPS.length) * 100)

  const update = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const toggleMultiAnswer = (key, value) => {
    setData((prev) => {
      const current = Array.isArray(prev[key]) ? prev[key] : []
      const exists = current.includes(value)
      return {
        ...prev,
        [key]: exists ? current.filter((v) => v !== value) : [...current, value],
      }
    })
  }

  const isStepValid = useMemo(() => {
    if (stepKey === 'basic') {
      const base = !!data.childAge
      return Boolean(base)
    }

    if (stepKey === 'contacts') {
      const formatOk = Boolean(data.format)
      const offlineOk = !isOffline || (data.city && data.location)
      const methodsOk = Array.isArray(data.contactMethods) && data.contactMethods.length > 0
      const hasData = (data.phone && data.phone.trim()) || (data.email && data.email.trim()) || (data.telegram && data.telegram.trim())
      return Boolean(data.consent && formatOk && offlineOk && methodsOk && hasData)
    }

    const question = QUESTIONS.find((q) => q.key === stepKey)
    if (!question) return false
    return Array.isArray(data[stepKey]) && data[stepKey].length > 0
  }, [data, isOffline, stepKey])

  const canSubmit = useMemo(() => {
    const basic = !!data.childAge
    const offlineOk = !isOffline || (data.city && data.location)
    const methodsOk = Array.isArray(data.contactMethods) && data.contactMethods.length > 0
    const hasData = (data.phone && data.phone.trim()) || (data.email && data.email.trim()) || (data.telegram && data.telegram.trim())
    const contacts = data.consent && data.format && methodsOk && hasData
    const questionsOk = QUESTIONS.every((q) => Array.isArray(data[q.key]) && data[q.key].length > 0)
    return Boolean(basic && offlineOk && contacts && questionsOk)
  }, [data, isOffline])

  const nextStep = () => {
    if (!isStepValid) {
      setStatus('Заполните текущий шаг.')
      return
    }
    setStatus('')
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const prevStep = () => {
    setStatus('')
    setStep((s) => Math.max(s - 1, 0))
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!canSubmit) {
      setStatus('Проверьте обязательные поля.')
      return
    }

    const endpoint = import.meta.env.VITE_LEAD_API_URL || '/api/lead'

    try {
      setSubmitting(true)
      setStatus('Отправляем анкету...')

      const payload = {
        ...data,
        source: 'veselo-web',
        createdAt: new Date().toISOString(),
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      setStatus('Спасибо! Анкета отправлена. Скоро свяжемся с вами.')
      setData(initialData)
      setStep(0)
    } catch (err) {
      console.error('Ошибка отправки анкеты:', err)
      setStatus('Не удалось отправить анкету. Попробуйте ещё раз или свяжитесь с нами напрямую.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-[6.5rem]" id="quiz">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <h2 className="sr font-display font-black text-[1.875rem] md:text-[2.5rem] text-indigo leading-[1.2] text-center mx-auto">
          Подберём занятия для <span className="text-pill text-pill-coral">вашего ребёнка</span>
        </h2>
        <p className="sr sr-d1 font-hand text-xl text-n500 text-center mt-2 mb-10">Пошаговая анкета</p>

        <div className="sr sr-d2 max-w-[760px] mx-auto bg-white rounded-[28px] shadow-[0_24px_64px_rgba(26,26,46,.1)] border-2 border-n200/40 p-6 md:p-8">
          <div className="mb-5">
            <div className="flex items-center justify-between text-[0.8125rem] text-n500 mb-1.5">
              <span>Шаг {step + 1} из {STEPS.length}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-n100 rounded-full overflow-hidden">
              <div className="h-2 bg-coral transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <form onSubmit={submit} className="space-y-5">
            {stepKey === 'basic' && (
              <>
                <div>
                  <p className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Возраст ребёнка</p>
                  <div className="flex flex-wrap gap-2">
                    {['2-3 года', '4-5 лет', '6-7 лет', '8-9 лет', '10-12 лет', '13-16 лет', '17-18 лет'].map((age) => {
                      const selected = data.childAge === age
                      return (
                        <button
                          key={age}
                          type="button"
                          onClick={() => update('childAge', age)}
                          className={`py-2 px-3 border-2 rounded-full text-[0.8125rem] transition-all ${selected ? 'border-coral bg-coral-lt text-coral-dk font-semibold' : 'border-n200/60 text-n700 hover:border-coral'}`}
                        >
                          {age}
                        </button>
                      )
                    })}
                  </div>
                </div>


              </>
            )}

            {QUESTIONS.map((q) => (
              stepKey === q.key && (
                <div key={q.key}>
                  <span className="block text-[1rem] font-semibold text-n900 mb-2">{q.title}</span>
                  <p className="text-[0.8125rem] text-n500 mb-3">Можно выбрать несколько вариантов</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => {
                      const selected = Array.isArray(data[q.key]) && data[q.key].includes(opt)
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleMultiAnswer(q.key, opt)}
                          className={`py-2 px-3 border-2 rounded-full text-[0.8125rem] transition-all ${selected ? 'border-coral bg-coral-lt text-coral-dk font-semibold' : 'border-n200/60 text-n700 hover:border-coral'}`}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            ))}

            {stepKey === 'contacts' && (
              <>
                <div>
                  <p className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Формат занятий</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[{ label: 'Онлайн', value: 'online' }, { label: 'Оффлайн', value: 'offline' }].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('format', opt.value)}
                        className={`py-3.5 border-2 rounded-2xl font-semibold text-[0.9375rem] transition-all ${data.format === opt.value ? 'border-coral bg-coral-lt text-coral-dk' : 'border-n200/60 text-n700 hover:border-coral'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {isOffline && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Город</span>
                      <input className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-cream/50 outline-none focus:border-coral" value={data.city} onChange={(e) => update('city', e.target.value)} />
                    </label>
                    <label className="block">
                      <span className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Локация</span>
                      <input className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-cream/50 outline-none focus:border-coral" value={data.location} onChange={(e) => update('location', e.target.value)} />
                    </label>
                  </div>
                )}

                <div>
                  <span className="block text-[1rem] font-semibold text-n900 mb-2">Контакты родителя</span>
                  <p className="text-[0.8125rem] text-n500 mb-3">Выберите удобные варианты связи</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'call', label: 'Звонок' },
                      { key: 'whatsapp', label: 'WhatsApp' },
                      { key: 'telegram', label: 'Telegram' },
                      { key: 'email', label: 'Email' },
                    ].map((m) => {
                      const selected = Array.isArray(data.contactMethods) && data.contactMethods.includes(m.key)
                      return (
                        <button
                          key={m.key}
                          type="button"
                          onClick={() => toggleMultiAnswer('contactMethods', m.key)}
                          className={`py-2 px-3 border-2 rounded-full text-[0.8125rem] transition-all ${selected ? 'border-coral bg-coral-lt text-coral-dk font-semibold' : 'border-n200/60 text-n700 hover:border-coral'}`}
                        >
                          {m.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Телефон</span>
                    <input className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-cream/50 outline-none focus:border-coral" value={data.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+7..." />
                  </label>
                  <label className="block">
                    <span className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Email</span>
                    <input type="email" className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-cream/50 outline-none focus:border-coral" value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="name@example.com" />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Telegram (username, необязательно)</span>
                    <input className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-cream/50 outline-none focus:border-coral" value={data.telegram} onChange={(e) => update('telegram', e.target.value)} placeholder="@username" />
                  </label>
                </div>

                <label className="block">
                  <span className="block text-[0.8125rem] font-semibold text-n700 mb-1.5">Комментарий (необязательно)</span>
                  <input className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-cream/50 outline-none focus:border-coral" value={data.comment} onChange={(e) => update('comment', e.target.value)} />
                </label>

                <label className="inline-flex items-center gap-2 text-[0.8125rem] text-n700">
                  <input type="checkbox" checked={data.consent} onChange={(e) => update('consent', e.target.checked)} />
                  Согласен(а) на обработку персональных данных
                </label>
              </>
            )}

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 0 || submitting}
                className="inline-flex items-center gap-2 border-2 border-n200/60 text-n700 font-semibold text-sm py-2.5 px-5 rounded-full transition-all hover:border-coral disabled:opacity-35 disabled:cursor-not-allowed"
              >
                Назад
              </button>

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid || submitting}
                  className="inline-flex items-center gap-2 bg-coral text-white font-head font-bold text-base py-3.5 px-7 rounded-full transition-all duration-250 hover:bg-coral-dk hover:-translate-y-px disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  Далее
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-coral text-white font-head font-bold text-base py-3.5 px-7 rounded-full transition-all duration-250 hover:bg-coral-dk hover:-translate-y-px disabled:opacity-35 disabled:cursor-not-allowed"
                  disabled={!canSubmit || submitting}
                >
                  {submitting ? 'Отправка...' : 'Отправить анкету'}
                </button>
              )}
            </div>

            {status && <p className="text-sm text-n500 mt-3">{status}</p>}

            <p className="text-sm text-n500 mt-2">После отправки анкеты подборка уже собирается. Ожидайте в течение 1-2 часов.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
