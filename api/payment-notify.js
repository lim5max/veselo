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
    const body = req.body
    const password = process.env.TBANK_PASSWORD

    // Verify token from T-Bank
    const { Token, ...paramsWithoutToken } = body
    const expectedToken = generateToken(paramsWithoutToken, password)

    if (Token !== expectedToken) {
      console.error('Invalid payment notification token')
      return res.status(403).json({ error: 'Invalid token' })
    }

    const { OrderId, Status } = body

    // Map T-Bank status to our status
    // T-Bank statuses: AUTHORIZED, CONFIRMED, REJECTED, REFUNDED, etc.
    let paymentStatus = 'pending'
    if (Status === 'CONFIRMED' || Status === 'AUTHORIZED') {
      paymentStatus = 'paid'
    } else if (Status === 'REJECTED' || Status === 'DEADLINE_EXPIRED' || Status === 'CANCELED') {
      paymentStatus = 'failed'
    } else if (Status === 'REFUNDED' || Status === 'PARTIAL_REFUNDED') {
      paymentStatus = 'refunded'
    }

    await ensureTable()
    const db = getDb()

    await db.execute({
      sql: `UPDATE leads SET payment_status = ? WHERE order_id = ?`,
      args: [paymentStatus, OrderId],
    })

    // T-Bank expects "OK" in response
    return res.status(200).send('OK')
  } catch (err) {
    console.error('payment-notify error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
