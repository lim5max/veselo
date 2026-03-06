import { getDb, ensureTable } from './lib/db.js'

const ADMIN_LOGIN = process.env.ADMIN_LOGIN || 'veselo_admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ne_veselo_password'

function checkAuth(req) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Basic ')) return false
  const decoded = Buffer.from(auth.slice(6), 'base64').toString()
  const [login, password] = decoded.split(':')
  return login === ADMIN_LOGIN && password === ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    await ensureTable()
    const db = getDb()
    const result = await db.execute('SELECT * FROM leads ORDER BY id DESC')

    const leads = result.rows.map((row) => ({
      ...row,
      format: tryParse(row.format),
      preferred_time: tryParse(row.preferred_time),
      contact_methods: tryParse(row.contact_methods),
      answers: tryParse(row.answers),
    }))

    return res.status(200).json({ leads })
  } catch (err) {
    console.error('leads fetch error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

function tryParse(str) {
  try { return JSON.parse(str) } catch { return str }
}
