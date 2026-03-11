import { useEffect, useMemo, useRef, useState } from 'react'

const QUESTIONS = [
  {
    key: 'qTried',
    title: '1. Какие кружки или занятия ребенок уже пробовал и ему не понравилось?',
    subtitle: 'можно выбрать из списка или вписать своё',
    options: ['Робототехника', 'Программирование / создание игр', 'Рисование / дизайн', 'Театр / сцена / выступления', 'Танцы / спорт', 'Моделирование / сборка / техника', 'Мультфильмы / анимация', 'Языковые курсы', 'Музыка / вокал'],
    hasOther: true,
  },
  {
    key: 'qNotFit',
    title: '2. Что именно не подошло в каком-то из занятий?',
    subtitle: 'можно выбрать несколько вариантов',
    options: ['Ребёнку было скучно — не происходило ничего интересного', 'Было слишком сложно — он не понимал, что делать', 'Не понравился педагог', 'Ему было некомфортно в группе', 'Не видел результата — не понимал, зачем это', 'Много теории, мало действия', 'У него не спрашивали, что ему интересно', 'Просто не зашло — не «его»'],
  },
  {
    key: 'q6',
    title: '3. Чем он может заниматься сам, без напоминаний?',
    subtitle: 'можно выбрать несколько',
    options: ['Игры / гаджеты', 'Конструирование / сборка', 'Рисование / дизайн', 'Придумывание историй, просмотр фильмов', 'Спорт / активные игры', 'Мультфильмы, персонажи, кино', 'Интерес к животным, природе, картам', 'Общение, выступления', 'Языки', 'Музыка / пение'],
    hasOther: true,
  },
  {
    key: 'q2',
    title: '4. Как ребёнок обычно чувствует себя среди других детей?',
    options: ['Легко знакомится и ведёт за собой', 'Сначала присматривается, потом включается', 'Предпочитает 1–2 близких друга', 'Сильно привязан(а) к родителю, тревожится', 'Чаще сам(а) по себе', 'Ориентируется на более активных детей'],
  },
  {
    key: 'q8',
    title: '5. В каких условиях ребёнку комфортнее заниматься?',
    options: ['Шумно и много детей', 'Тихо, в небольшой группе', 'Один на один с педагогом', 'Спокойная, «домашняя» атмосфера', 'На улице или на природе', 'Чёткие правила и структура', 'Больше свободы и импровизации', 'Яркая и визуально насыщенная среда', 'Минимум лишних стимулов'],
  },
  {
    key: 'q3',
    title: '6. После каких занятий он выходит особенно вдохновлённым?',
    options: ['Когда сделал что-то своими руками', 'Когда была игровая форма или соревнование', 'Когда сам разобрался в чём-то сложном', 'Когда придумал и реализовал что-то своё'],
  },
  {
    key: 'q9',
    title: '7. Что чаще всего раздражает ребёнка?',
    options: ['Когда приходится долго ждать', 'Когда трогают его/её вещи', 'Фразы типа «ты не справишься»', 'Когда нарушают правила', 'Громкие звуки', 'Когда его/её перебивают', 'Скука и однообразие', 'Когда не принимают в игру', 'Когда просят переделывать', 'Критика в его/её адрес'],
  },
  {
    key: 'q4',
    title: '8. Как ребёнок относится к соревнованию и оценке результатов?',
    options: ['Любит соревноваться и побеждать', 'Главное — участие, проигрыш не пугает', 'Тяжело переживает проигрыши', 'Предпочитает заниматься без соревнований', 'Сначала загорается, потом быстро устает', 'Идёт до конца, очень включается'],
  },
  {
    key: 'q1',
    title: '9. Что вы хотите получить от занятий в первую очередь?',
    options: ['Полезно занять ребёнка', 'Больше активности и здоровья', 'Развитие навыков и мышления', 'Общение и социализация', 'Понять сильные стороны на будущее', 'Чтобы ребёнку нравилось и было в радость'],
  },
]

const STEPS = ['basic', ...QUESTIONS.map((q) => q.key), 'contacts']

const initialData = {
  childAge: '',
  childGender: '',
  format: [],
  preferredTime: [],
  city: 'Москва',
  location: '',
  parentName: '',
  contactMethods: [],
  email: '',
  telegram: '',
  comment: '',
  consent: false,
  otherText: {},
  ...Object.fromEntries(QUESTIONS.map((q) => [q.key, []])),
}

export default function Quiz({ paymentSuccess, paymentFail, onClosePaymentSuccess, onClosePaymentFail }) {
  const [data, setData] = useState(initialData)
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('info')
  const [submitting, setSubmitting] = useState(false)
  const [step, setStep] = useState(0)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFail, setShowFail] = useState(false)

  useEffect(() => {
    if (paymentSuccess) {
      setShowSuccess(true)
    }
  }, [paymentSuccess])

  useEffect(() => {
    if (paymentFail) {
      setShowFail(true)
    }
  }, [paymentFail])

  const isOffline = Array.isArray(data.format) && data.format.includes('offline')
  const stepKey = STEPS[step]
  const progress = Math.round(((step + 1) / STEPS.length) * 100)


  const currentQuestion = QUESTIONS.find((q) => q.key === stepKey)
  const currentSelectedCount = currentQuestion ? (Array.isArray(data[currentQuestion.key]) ? data[currentQuestion.key].length : 0) : 0

  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    if (!(stepKey === 'contacts' && isOffline)) return
    if (mapInstanceRef.current || !mapContainerRef.current) return

    let cancelled = false

    import('maplibre-gl').then((mod) => {
      if (cancelled || mapInstanceRef.current || !mapContainerRef.current) return
      const maplibregl = mod.default

      const link = document.getElementById('maplibre-css')
      if (!link) {
        const l = document.createElement('link')
        l.id = 'maplibre-css'
        l.rel = 'stylesheet'
        l.href = 'https://unpkg.com/maplibre-gl/dist/maplibre-gl.css'
        document.head.appendChild(l)
      }

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: {
          version: 8,
          sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap' } },
          layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
        },
        center: [37.6176, 55.7558],
        zoom: 10,
      })

      map.addControl(new maplibregl.NavigationControl(), 'top-left')
      mapInstanceRef.current = map

      map.on('click', (e) => {
        const { lat, lng } = e.lngLat
        if (!markerRef.current) {
          markerRef.current = new maplibregl.Marker().setLngLat([lng, lat]).addTo(map)
        } else {
          markerRef.current.setLngLat([lng, lat])
        }
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=ru&zoom=18`)
          .then((r) => r.json())
          .then((json) => {
            const a = json.address || {}
            const short = [a.road, a.house_number].filter(Boolean).join(', ')
              || [a.suburb, a.city_district].filter(Boolean).join(', ')
              || json.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`
            setData((prev) => ({ ...prev, location: short }))
          })
          .catch(() => setData((prev) => ({ ...prev, location: `${lat.toFixed(5)}, ${lng.toFixed(5)}` })))
      })
    })

    return () => {
      cancelled = true
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        markerRef.current = null
      }
    }
  }, [stepKey, isOffline])

  const update = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const toggleMultiAnswer = (key, value, max = 3) => {
    setData((prev) => {
      const current = Array.isArray(prev[key]) ? prev[key] : []
      const exists = current.includes(value)

      if (!exists && current.length >= max) {
        return prev
      }

      return {
        ...prev,
        [key]: exists ? current.filter((v) => v !== value) : [...current, value],
      }
    })
  }

  const isStepValid = useMemo(() => {
    if (stepKey === 'basic') {
      return Boolean(data.childAge && data.childGender)
    }

    if (stepKey === 'contacts') {
      const formatOk = Array.isArray(data.format) && data.format.length > 0
      const offlineOk = !isOffline || Boolean(data.location)
      const timeOk = Array.isArray(data.preferredTime) && data.preferredTime.length > 0
      const methodsOk = Array.isArray(data.contactMethods) && data.contactMethods.length > 0
      const hasEmail = data.contactMethods.includes('email') ? Boolean(data.email && data.email.trim()) : true
      const hasTelegram = data.contactMethods.includes('telegram') ? Boolean(data.telegram && data.telegram.trim()) : true
      const nameOk = Boolean(data.parentName && data.parentName.trim())
      return Boolean(nameOk && data.consent && formatOk && offlineOk && timeOk && methodsOk && hasEmail && hasTelegram)
    }

    const question = QUESTIONS.find((q) => q.key === stepKey)
    if (!question) return false
    return Array.isArray(data[stepKey]) && data[stepKey].length > 0
  }, [data, isOffline, stepKey])

  const canSubmit = useMemo(() => {
    const basic = !!(data.childAge && data.childGender)
    const offlineOk = !isOffline || Boolean(data.location)
    const methodsOk = Array.isArray(data.contactMethods) && data.contactMethods.length > 0
    const hasEmail = data.contactMethods.includes('email') ? Boolean(data.email && data.email.trim()) : true
    const hasTelegram = data.contactMethods.includes('telegram') ? Boolean(data.telegram && data.telegram.trim()) : true
    const timeOk = Array.isArray(data.preferredTime) && data.preferredTime.length > 0
    const contacts = Boolean(data.parentName && data.parentName.trim()) && data.consent && Array.isArray(data.format) && data.format.length > 0 && timeOk && methodsOk && hasEmail && hasTelegram
    const questionsOk = QUESTIONS.every((q) => Array.isArray(data[q.key]) && data[q.key].length > 0)
    return Boolean(basic && offlineOk && contacts && questionsOk)
  }, [data, isOffline])

  const nextStep = () => {
    if (!isStepValid) {
      setStatusType('error')
      setStatus('Заполните текущий шаг.')
      return
    }
    setStatusType('info')
    setStatusType('info')
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
      setStatusType('error')
      setStatus('Проверьте обязательные поля.')
      return
    }

    const endpoint = import.meta.env.VITE_PAYMENT_API_URL || '/api/payment'

    try {
      setSubmitting(true)
      setStatusType('info')
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

      const result = await res.json()

      if (result.paymentUrl) {
        window.location.href = result.paymentUrl
      } else {
        setShowSuccess(true)
        setStatus('')
        setData(initialData)
        setStep(0)
      }
    } catch (err) {
      console.error('Ошибка отправки анкеты:', err)
      setStatusType('error')
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
        <p className="sr sr-d1 font-hand text-xl text-n500 text-center mt-2 mb-10">Анкета на 2 минуты — и через час подборка у вас в мессенджере. Всё просто.</p>

        <div className="sr sr-d2 max-w-[760px] mx-auto bg-white rounded-[28px] shadow-[0_24px_64px_rgba(26,26,46,.1)] border-2 border-n200/40 p-6 md:p-8">
          <div className="mb-6">
            {/* Step dots */}
            <div className="flex items-center gap-1 mb-3">
              {STEPS.map((s, i) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i < step ? 'bg-coral flex-1' :
                    i === step ? 'bg-coral flex-[2]' :
                    'bg-n200 flex-1'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[0.75rem] text-n400">
                {stepKey === 'basic' ? 'Профиль ребёнка' : stepKey === 'contacts' ? 'Последний шаг!' : `Вопрос ${step} из ${QUESTIONS.length}`}
              </span>
              <span className="text-[0.75rem] font-semibold text-coral">{progress}%</span>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-5">
            {stepKey === 'basic' && (
              <>
                <div className="space-y-5">
                  <div>
                    <p className="block text-[1.05rem] font-bold text-n900 leading-snug mb-3">Расскажите о ребёнке</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[0.8125rem] text-n500 mb-1.5">Возраст</p>
                        <div className="relative">
                          <input
                            type="number"
                            min="3"
                            max="17"
                            inputMode="numeric"
                            value={data.childAge}
                            onChange={(e) => {
                              const v = e.target.value
                              if (v === '' || (Number(v) >= 1 && Number(v) <= 17)) update('childAge', v)
                            }}
                            placeholder="7"
                            className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[1.25rem] font-bold text-center bg-white outline-none focus:border-coral transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[0.8125rem] text-n400 pointer-events-none">лет</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[0.8125rem] text-n500 mb-1.5">Пол</p>
                        <div className="grid grid-cols-2 gap-2 h-[calc(100%-1.75rem)]">
                          {[{ label: 'Мальчик', value: 'male' }, { label: 'Девочка', value: 'female' }].map((g) => {
                            const selected = data.childGender === g.value
                            return (
                              <button
                                key={g.value}
                                type="button"
                                onClick={() => update('childGender', g.value)}
                                className={`flex items-center justify-center border-2 rounded-2xl text-[0.875rem] font-semibold transition-all duration-200 ${selected ? 'border-coral bg-coral-lt text-coral-dk shadow-[0_2px_10px_rgba(255,165,97,.12)]' : 'border-n200/60 text-n700 hover:border-coral/50'}`}
                              >
                                {g.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {QUESTIONS.map((q) => (
              stepKey === q.key && (
                <div key={q.key} className="space-y-4">
                  <div>
                    <span className="block text-[1.05rem] font-bold text-n900 leading-snug">{q.title}</span>
                    {q.subtitle && <span className="block text-[0.8125rem] text-n400 mt-0.5">({q.subtitle})</span>}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i < currentSelectedCount ? 'bg-coral scale-110' : 'bg-n200'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[0.75rem] text-n400">
                        {currentSelectedCount === 0 ? 'Выберите до 3' : currentSelectedCount === 3 ? 'Максимум выбрано' : `Выбрано ${currentSelectedCount} из 3`}
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt) => {
                      const selected = Array.isArray(data[q.key]) && data[q.key].includes(opt)
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleMultiAnswer(q.key, opt)}
                          className={`flex items-center gap-2.5 py-2.5 px-4 border-2 rounded-2xl text-[0.8125rem] text-left transition-all duration-200 ${selected ? 'border-coral bg-coral-lt text-coral-dk font-semibold shadow-[0_2px_10px_rgba(255,165,97,.12)]' : 'border-n200/60 text-n700 hover:border-coral/50 hover:bg-white'}`}
                        >
                          <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${selected ? 'border-coral bg-coral' : 'border-n300'}`}>
                            {selected && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          {opt}
                        </button>
                      )
                    })}
                    {q.hasOther && (() => {
                      const otherSelected = Array.isArray(data[q.key]) && data[q.key].includes('Другое')
                      return (
                        <div className={`flex items-center gap-2.5 py-2.5 px-4 border-2 rounded-2xl text-[0.8125rem] text-left transition-all duration-200 ${otherSelected ? 'border-coral bg-coral-lt shadow-[0_2px_10px_rgba(255,165,97,.12)]' : 'border-n200/60 hover:border-coral/50 hover:bg-white'}`}>
                          <button
                            type="button"
                            onClick={() => toggleMultiAnswer(q.key, 'Другое')}
                            className="flex items-center gap-2.5 flex-shrink-0"
                          >
                            <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${otherSelected ? 'border-coral bg-coral' : 'border-n300'}`}>
                              {otherSelected && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          </button>
                          <input
                            type="text"
                            placeholder="Другое..."
                            value={(data.otherText && data.otherText[q.key]) || ''}
                            onFocus={() => { if (!otherSelected) toggleMultiAnswer(q.key, 'Другое') }}
                            onChange={(e) => setData((prev) => ({ ...prev, otherText: { ...prev.otherText, [q.key]: e.target.value } }))}
                            className={`bg-transparent outline-none flex-1 min-w-0 ${otherSelected ? 'text-coral-dk font-semibold' : 'text-n700'}`}
                          />
                        </div>
                      )
                    })()}
                  </div>
                </div>
              )
            ))}

            {stepKey === 'contacts' && (
              <>
                {/* ── Группа: Формат и расписание ── */}
                <div className="rounded-2xl border border-n200/50 bg-n50/50 p-4 md:p-5 space-y-4">
                  <p className="text-[0.9375rem] font-bold text-n900">Формат и расписание</p>

                  <div>
                    <p className="text-[0.8125rem] text-n500 mb-2">Формат занятий <span className="text-n400">(можно оба)</span></p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[{ label: 'Онлайн', value: 'online', icon: '💻' }, { label: 'Оффлайн', value: 'offline', icon: '📍' }].map((opt) => {
                        const selected = Array.isArray(data.format) && data.format.includes(opt.value)
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleMultiAnswer('format', opt.value)}
                            className={`py-3 border-2 rounded-2xl font-semibold text-[0.9375rem] transition-all duration-200 ${selected ? 'border-coral bg-coral-lt text-coral-dk shadow-[0_2px_12px_rgba(255,165,97,.15)]' : 'border-n200/60 text-n700 hover:border-coral/50 hover:bg-white'}`}
                          >
                            <span className="mr-1.5">{opt.icon}</span>{opt.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="text-[0.8125rem] text-n500 mb-2">Когда удобнее заниматься?</p>
                    <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-1.5">
                      <div />
                      {['Утро', 'День', 'Вечер'].map((h) => (
                        <div key={h} className="text-center text-n400 text-[0.7rem] font-medium pb-0.5">{h}</div>
                      ))}
                      {['Будни', 'Выходные'].map((day) => (
                        <>
                          <div key={day} className="text-n700 font-medium pr-2 flex items-center text-[0.8125rem]">{day}</div>
                          {['утро', 'день', 'вечер'].map((time) => {
                            const val = `${day} ${time}`
                            const selected = Array.isArray(data.preferredTime) && data.preferredTime.includes(val)
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => toggleMultiAnswer('preferredTime', val, 6)}
                                className={`py-2 rounded-xl text-center text-[0.8125rem] transition-all duration-200 ${selected ? 'border-2 border-coral bg-coral-lt text-coral-dk font-semibold shadow-[0_2px_8px_rgba(255,165,97,.12)]' : 'border-2 border-n200/60 text-n500 hover:border-coral/50 hover:bg-white'}`}
                              >
                                {time === 'утро' ? '9–12' : time === 'день' ? '12–17' : '17–21'}
                              </button>
                            )
                          })}
                        </>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Группа: Локация (только оффлайн) ── */}
                {isOffline && (
                  <div className="rounded-2xl border border-n200/50 bg-n50/50 p-4 md:p-5 space-y-3">
                    <p className="text-[0.9375rem] font-bold text-n900">Локация</p>
                    <input
                      className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-white outline-none focus:border-coral transition-colors"
                      value={data.location}
                      onChange={(e) => update('location', e.target.value)}
                      placeholder="Район, метро или улица"
                    />
                    <div className="border-2 border-n200/60 rounded-2xl overflow-hidden">
                      <div ref={mapContainerRef} className="w-full h-[260px]" />
                      <div className="px-3 py-1.5 text-[0.7rem] text-n400 bg-white">Кликните по карте — адрес подставится автоматически</div>
                    </div>
                  </div>
                )}

                {/* ── Группа: Контакты ── */}
                <div className="rounded-2xl border border-n200/50 bg-n50/50 p-4 md:p-5 space-y-4">
                  <p className="text-[0.9375rem] font-bold text-n900">Контактные данные</p>

                  <label className="block">
                    <span className="text-[0.8125rem] text-n500 mb-1.5 block">Имя родителя <span className="text-coral">*</span></span>
                    <input autoComplete="name" className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-white outline-none focus:border-coral transition-colors" value={data.parentName} onChange={(e) => update('parentName', e.target.value)} placeholder="Как к вам обращаться" />
                  </label>

                  <div>
                    <p className="text-[0.8125rem] text-n500 mb-2">Как удобнее связаться?</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: 'telegram', label: 'Telegram', icon: '✈️' },
                        { key: 'email', label: 'Email', icon: '✉️' },
                      ].map((m) => {
                        const selected = Array.isArray(data.contactMethods) && data.contactMethods.includes(m.key)
                        return (
                          <button
                            key={m.key}
                            type="button"
                            onClick={() => toggleMultiAnswer('contactMethods', m.key)}
                            className={`py-2.5 px-3 border-2 rounded-xl text-[0.85rem] transition-all duration-200 ${selected ? 'border-coral bg-coral-lt text-coral-dk font-semibold shadow-[0_2px_12px_rgba(255,165,97,.15)]' : 'border-n200/60 text-n700 hover:border-coral/50 hover:bg-white'}`}
                          >
                            <span className="mr-1.5">{m.icon}</span>{m.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {data.contactMethods.includes('telegram') && (
                    <label className="block">
                      <span className="text-[0.8125rem] text-n500 mb-1.5 block">Telegram <span className="text-coral">*</span></span>
                      <input autoComplete="username" className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-white outline-none focus:border-coral transition-colors" value={data.telegram} onChange={(e) => update('telegram', e.target.value)} placeholder="@username" />
                    </label>
                  )}

                  {data.contactMethods.includes('email') && (
                    <label className="block">
                      <span className="text-[0.8125rem] text-n500 mb-1.5 block">Email <span className="text-coral">*</span></span>
                      <input type="email" autoComplete="email" className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-white outline-none focus:border-coral transition-colors" value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="name@example.com" />
                    </label>
                  )}

                  <label className="block">
                    <span className="text-[0.8125rem] text-n500 mb-1.5 block">Комментарий <span className="text-n400 font-normal">(необязательно)</span></span>
                    <textarea rows={2} className="w-full py-3 px-4 border-2 border-n200/60 rounded-2xl text-[0.9375rem] bg-white outline-none focus:border-coral transition-colors resize-none" value={data.comment} onChange={(e) => update('comment', e.target.value)} placeholder="Пожелания, особенности ребёнка..." />
                  </label>
                </div>

                {/* ── Согласие ── */}
                <label className="flex items-start gap-3 text-[0.8125rem] text-n700 p-4 rounded-2xl border border-n200/50 bg-white cursor-pointer transition-all hover:border-coral/30">
                  <input type="checkbox" checked={data.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-0.5 w-4 h-4 accent-coral rounded" />
                  <span>
                    Согласен(а) с{' '}
                    <button type="button" onClick={() => setShowPrivacy(true)} className="text-indigo underline underline-offset-2 decoration-indigo/30 hover:decoration-indigo transition-colors">
                      политикой обработки данных
                    </button>
                    {' '}<span className="text-coral">*</span>
                  </span>
                </label>
              </>
            )}

            <div className="pt-4 flex items-center justify-between border-t border-n200/40">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 0 || submitting}
                className="inline-flex items-center gap-1.5 text-n500 font-semibold text-[0.875rem] py-2.5 px-4 rounded-full transition-all hover:text-n700 hover:bg-n100 disabled:opacity-0 disabled:pointer-events-none"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Назад
              </button>

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid || submitting}
                  className="inline-flex items-center gap-1.5 bg-coral text-white font-head font-bold text-[0.9375rem] py-3 px-7 rounded-full transition-all duration-200 hover:bg-coral-dk hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,165,97,.3)] disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  Далее
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-coral text-white font-head font-bold text-[0.9375rem] py-3 px-7 rounded-full transition-all duration-200 hover:bg-coral-dk hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,165,97,.3)] disabled:opacity-35 disabled:cursor-not-allowed"
                  disabled={!canSubmit || submitting}
                >
                  {submitting ? 'Отправка...' : 'Отправить анкету'}
                </button>
              )}
            </div>

            {status && (
              <p className={`text-sm mt-3 ${statusType === 'error' ? 'text-red-500' : statusType === 'success' ? 'text-green-600' : 'text-n500'}`}>{status}</p>
            )}

          </form>
        </div>
      </div>

      {/* ── Success Modal ── */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => { setShowSuccess(false); onClosePaymentSuccess?.() }}>
          <div className="absolute inset-0 bg-n900/40 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-[28px] shadow-[0_32px_80px_rgba(26,26,46,.18)] max-w-[440px] w-full overflow-hidden animate-[scale-pop_.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-8 pt-10 pb-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M12 20.5L17.5 26L28 15" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-black text-[1.5rem] text-indigo leading-tight mb-2">Анкета отправлена!</h3>
              <p className="text-n500 text-[0.9375rem] leading-relaxed mb-1">
                Спасибо за доверие! Мы уже подбираем лучшие занятия для вашего ребёнка.
              </p>
              <p className="text-n400 text-[0.8125rem]">
                Персональная подборка придёт вам в течение часа.
              </p>
            </div>
            <div className="px-8 pb-8">
              <button
                type="button"
                onClick={() => { setShowSuccess(false); onClosePaymentSuccess?.() }}
                className="w-full py-3.5 bg-coral text-white font-head font-bold text-base rounded-full transition-all duration-200 hover:bg-coral-dk hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,165,97,.3)]"
              >
                Отлично!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Fail Modal ── */}
      {showFail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => { setShowFail(false); onClosePaymentFail?.() }}>
          <div className="absolute inset-0 bg-n900/40 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-[28px] shadow-[0_32px_80px_rgba(26,26,46,.18)] max-w-[440px] w-full overflow-hidden animate-[scale-pop_.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-8 pt-10 pb-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M14 14L26 26M26 14L14 26" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-black text-[1.5rem] text-indigo leading-tight mb-2">Оплата не прошла</h3>
              <p className="text-n500 text-[0.9375rem] leading-relaxed mb-1">
                К сожалению, платёж не удался. Попробуйте ещё раз или выберите другой способ оплаты.
              </p>
              <p className="text-n400 text-[0.8125rem]">
                Ваша анкета сохранена — повторная отправка не потребуется.
              </p>
            </div>
            <div className="px-8 pb-8">
              <button
                type="button"
                onClick={() => { setShowFail(false); onClosePaymentFail?.() }}
                className="w-full py-3.5 bg-coral text-white font-head font-bold text-base rounded-full transition-all duration-200 hover:bg-coral-dk hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,165,97,.3)]"
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Privacy Policy Modal ── */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
          <div className="absolute inset-0 bg-n900/40 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-[24px] shadow-[0_32px_80px_rgba(26,26,46,.18)] max-w-[640px] w-full max-h-[80vh] flex flex-col overflow-hidden animate-[scale-pop_.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-n200/50">
              <h3 className="font-display font-bold text-[1.1rem] text-indigo">Политика обработки данных</h3>
              <button type="button" onClick={() => setShowPrivacy(false)} className="w-8 h-8 rounded-full bg-n100 hover:bg-n200 flex items-center justify-center text-n500 transition-colors text-lg leading-none">&times;</button>
            </div>
            <div className="px-6 py-5 overflow-y-auto text-[0.8125rem] text-n700 leading-[1.7] space-y-4">
              <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса «Весело» (далее — Сервис).</p>

              <h4 className="font-bold text-n900 text-[0.875rem]">1. Какие данные мы собираем</h4>
              <p>Имя родителя, контактные данные (Telegram, email), возраст ребёнка, предпочтения по формату и расписанию занятий, а также ответы на вопросы анкеты. Данные ребёнка обрабатываются исключительно с согласия родителя (законного представителя).</p>

              <h4 className="font-bold text-n900 text-[0.875rem]">2. Цели обработки</h4>
              <p>Подбор подходящих детских занятий, секций и кружков; связь с родителем для предоставления персональной подборки; улучшение работы Сервиса.</p>

              <h4 className="font-bold text-n900 text-[0.875rem]">3. Хранение и защита</h4>
              <p>Персональные данные хранятся на защищённых серверах и не передаются третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РФ. Мы применяем организационные и технические меры для защиты данных от несанкционированного доступа.</p>

              <h4 className="font-bold text-n900 text-[0.875rem]">4. Срок хранения</h4>
              <p>Персональные данные хранятся не дольше, чем это необходимо для целей обработки. Вы можете запросить удаление данных в любой момент, написав нам.</p>

              <h4 className="font-bold text-n900 text-[0.875rem]">5. Права пользователя</h4>
              <p>Вы вправе запросить информацию об обработке ваших данных, потребовать их изменения или удаления, а также отозвать согласие на обработку, направив запрос на нашу электронную почту.</p>

              <h4 className="font-bold text-n900 text-[0.875rem]">6. Файлы cookie</h4>
              <p>Сервис может использовать файлы cookie для обеспечения корректной работы и аналитики. Вы можете отключить cookie в настройках браузера.</p>

              <p className="text-n400 text-[0.75rem]">Дата последнего обновления: 1 марта 2026 г.</p>
            </div>
            <div className="px-6 py-4 border-t border-n200/50">
              <button type="button" onClick={() => setShowPrivacy(false)} className="w-full py-3 bg-indigo text-white font-head font-bold rounded-full hover:bg-indigo-lt transition-colors">
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
