import crypto from 'crypto'
import { getDb, ensureTable } from './lib/db.js'

function generateToken(params, password) {
  const withPassword = { ...params, Password: password }
  const sorted = Object.keys(withPassword).sort()
  const concatenated = sorted.map((key) => withPassword[key]).join('')
  return crypto.createHash('sha256').update(concatenated).digest('hex')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // 1. Save lead to DB
    await ensureTable()
    const db = getDb()
    const body = req.body

    const answers = {}
    for (const [key, value] of Object.entries(body)) {
      if (key.startsWith('q') && /^q\d+$/.test(key)) {
        answers[key] = value
      }
    }

    // 2. Create T-Bank payment
    const terminalKey = process.env.TBANK_TERMINAL_KEY
    const password = process.env.TBANK_PASSWORD

    if (!terminalKey || !password) {
      return res.status(500).json({ error: 'Payment not configured' })
    }

    const origin = req.headers.origin || req.headers.referer?.replace(/\/+$/, '') || 'https://veselo-nine.vercel.app'
    const orderId = `veselo-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`

    await db.execute({
      sql: `INSERT INTO leads (child_age, format, preferred_time, city, location, parent_name, contact_methods, email, telegram, comment, answers, source, order_id, payment_status, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        body.childAge || '',
        JSON.stringify(body.format || []),
        JSON.stringify(body.preferredTime || []),
        body.city || '',
        body.location || '',
        body.parentName || '',
        JSON.stringify(body.contactMethods || []),
        body.email || '',
        body.telegram || '',
        body.comment || '',
        JSON.stringify(answers),
        body.source || '',
        orderId,
        'pending',
        body.createdAt || new Date().toISOString(),
      ],
    })

    const params = {
      TerminalKey: terminalKey,
      Amount: 500,
      OrderId: orderId,
      Description: 'Весело — подбор занятий',
      SuccessURL: `${origin}/?payment=success`,
      FailURL: `${origin}/?payment=fail`,
      NotificationURL: `${origin}/api/payment-notify`,
    }

    params.Token = generateToken(params, password)

    const tbankRes = await fetch('https://securepay.tinkoff.ru/v2/Init', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })

    const tbankData = await tbankRes.json()

    if (!tbankData.Success || !tbankData.PaymentURL) {
      console.error('T-Bank Init error:', tbankData)
      return res.status(502).json({ error: 'Payment init failed', details: tbankData.Message })
    }

    return res.status(200).json({ paymentUrl: tbankData.PaymentURL })
  } catch (err) {
    console.error('payment error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
