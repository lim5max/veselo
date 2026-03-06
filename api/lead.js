import { getDb, ensureTable } from './lib/db.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await ensureTable()
    const db = getDb()
    const body = req.body

    const answers = {}
    for (const [key, value] of Object.entries(body)) {
      if (key.startsWith('q') && /^q\d+$/.test(key)) {
        answers[key] = value
      }
    }

    await db.execute({
      sql: `INSERT INTO leads (child_age, format, preferred_time, city, location, parent_name, contact_methods, email, telegram, comment, answers, source, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        body.createdAt || new Date().toISOString(),
      ],
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('lead save error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
