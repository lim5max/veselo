import { useState, useCallback, useEffect } from 'react'

const QUESTIONS_MAP = {
  q6: '1. Что ребёнку обычно нравится делать в свободное время?',
  q2: '2. Как ребёнок обычно чувствует себя среди других детей?',
  q10: '3. Какая роль у ребёнка в компании?',
  q8: '4. В каких условиях ребёнку комфортнее заниматься?',
  q3: '5. Что помогает ребёнку успокоиться?',
  q9: '6. Что чаще всего раздражает ребёнка?',
  q7: '7. Как ребёнок реагирует, когда что-то не получается?',
  q4: '8. Как ребёнок относится к соревнованию и оценке результатов?',
  q1: '9. Что вы хотите получить от занятий в первую очередь?',
}

const QUESTIONS_ORDER = ['q6', 'q2', 'q10', 'q8', 'q3', 'q9', 'q7', 'q4', 'q1']

export default function Admin() {
  const [auth, setAuth] = useState(() => sessionStorage.getItem('admin_auth') || '')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [leads, setLeads] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [expandedId, setExpandedId] = useState(null)

  const fetchLeads = useCallback(async (token) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Basic ${token}` },
      })
      if (res.status === 401) {
        sessionStorage.removeItem('admin_auth')
        setAuth('')
        setLeads(null)
        return
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setLeads(data.leads)
    } catch (err) {
      setError('Ошибка загрузки: ' + err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (auth && leads === null) {
      fetchLeads(auth)
    }
  }, [auth, leads, fetchLeads])

  const doLogin = useCallback(async (e) => {
    e.preventDefault()
    setError('')
    const token = btoa(`${login}:${password}`)
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Basic ${token}` },
      })
      if (res.status === 401) {
        setError('Неверный логин или пароль')
        return
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      sessionStorage.setItem('admin_auth', token)
      setAuth(token)
      setLeads(data.leads)
    } catch (err) {
      setError('Ошибка подключения: ' + err.message)
    } finally {
      setLoading(false)
    }
  }, [login, password])

  const logout = () => {
    sessionStorage.removeItem('admin_auth')
    setAuth('')
    setLeads(null)
  }

  if (!auth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 flex items-center justify-center p-4">
        <form onSubmit={doLogin} className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,.08)] p-8 w-full max-w-sm space-y-5">
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Админ-панель</h1>
            <p className="text-sm text-gray-400 mt-1">Весело</p>
          </div>
          {error && <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-2">{error}</p>}
          <input
            className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl outline-none focus:border-indigo-500 transition-colors"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl outline-none focus:border-indigo-500 transition-colors"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    )
  }

  if (leads === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          Загрузка...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <h1 className="text-lg font-bold text-gray-900">Заявки <span className="text-indigo-600">({leads.length})</span></h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchLeads(auth)}
            disabled={loading}
            className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-800 disabled:opacity-50 transition-colors"
          >
            <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Обновить
          </button>
          <button onClick={logout} className="text-sm text-gray-400 hover:text-red-500 transition-colors">
            Выйти
          </button>
        </div>
      </header>

      {error && <p className="text-red-500 text-sm px-6 pt-4">{error}</p>}

      <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-4">
        {leads.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <p className="text-gray-400 text-lg">Заявок пока нет</p>
            <p className="text-gray-300 text-sm mt-1">Они появятся здесь после заполнения анкеты</p>
          </div>
        )}

        {leads.map((lead) => {
          const isExpanded = expandedId === lead.id
          return (
            <div key={lead.id} className="bg-white rounded-2xl border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,.04)] overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,.07)]">
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                      {(lead.parent_name || '?')[0].toUpperCase()}
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">{lead.parent_name || 'Без имени'}</span>
                      <span className="ml-2 text-xs text-gray-300 font-mono">#{lead.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaymentBadge status={lead.payment_status} />
                    <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">{formatDate(lead.created_at)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <Field label="Возраст" value={lead.child_age} />
                  <Field label="Формат" value={Array.isArray(lead.format) ? lead.format.join(', ') : lead.format} />
                  <Field label="Время" value={Array.isArray(lead.preferred_time) ? lead.preferred_time.join(', ') : lead.preferred_time} />
                  <Field label="Город" value={lead.city} />
                  {lead.location && <Field label="Локация" value={lead.location} />}
                  {lead.email && <Field label="Email" value={lead.email} />}
                  {lead.telegram && <Field label="Telegram" value={lead.telegram} />}
                  <Field label="Связь" value={Array.isArray(lead.contact_methods) ? lead.contact_methods.join(', ') : lead.contact_methods} />
                </div>

                {lead.comment && (
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 border border-gray-100">{lead.comment}</p>
                )}
              </div>

              {lead.answers && typeof lead.answers === 'object' && Object.keys(lead.answers).length > 0 && (
                <>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                    className="w-full flex items-center justify-between px-5 py-3 bg-gray-50/50 border-t border-gray-100 text-sm text-indigo-600 hover:bg-indigo-50/50 transition-colors"
                  >
                    <span className="font-medium">Ответы на вопросы ({Object.keys(lead.answers).length})</span>
                    <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isExpanded && (
                    <div className="px-5 py-4 border-t border-gray-100 space-y-3">
                      {QUESTIONS_ORDER.filter((key) => lead.answers[key]).map((key) => (
                        <div key={key}>
                          <p className="text-xs font-medium text-gray-400 mb-0.5">{QUESTIONS_MAP[key]}</p>
                          <p className="text-sm text-gray-800">
                            {Array.isArray(lead.answers[key]) ? lead.answers[key].join(', ') : lead.answers[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PaymentBadge({ status }) {
  const styles = {
    paid: 'bg-green-50 text-green-700 border-green-200',
    pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    failed: 'bg-red-50 text-red-700 border-red-200',
    refunded: 'bg-gray-50 text-gray-600 border-gray-200',
  }
  const labels = { paid: 'Оплачено', pending: 'Ожидает', failed: 'Не оплачено', refunded: 'Возврат' }
  const s = status || 'pending'
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${styles[s] || styles.pending}`}>
      {labels[s] || s}
    </span>
  )
}

function Field({ label, value }) {
  if (!value) return null
  return (
    <div>
      <span className="text-gray-400 text-xs">{label}</span>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  )
}

function formatDate(str) {
  if (!str) return ''
  try {
    return new Date(str).toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return str }
}
