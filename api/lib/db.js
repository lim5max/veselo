import { createClient } from '@libsql/client'

let _client

export function getDb() {
  if (!_client) {
    _client = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })
  }
  return _client
}

export async function ensureTable() {
  const db = getDb()
  await db.execute(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      child_age TEXT,
      child_gender TEXT,
      format TEXT,
      preferred_time TEXT,
      city TEXT,
      location TEXT,
      parent_name TEXT,
      contact_methods TEXT,
      email TEXT,
      telegram TEXT,
      comment TEXT,
      answers TEXT,
      source TEXT,
      order_id TEXT,
      payment_status TEXT DEFAULT 'pending',
      created_at TEXT DEFAULT (datetime('now'))
    )
  `)
  // Add columns if table already exists without them
  await db.execute(`ALTER TABLE leads ADD COLUMN child_gender TEXT`).catch(() => {})
  await db.execute(`ALTER TABLE leads ADD COLUMN order_id TEXT`).catch(() => {})
  await db.execute(`ALTER TABLE leads ADD COLUMN payment_status TEXT DEFAULT 'pending'`).catch(() => {})
}
