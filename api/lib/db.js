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
      created_at TEXT DEFAULT (datetime('now'))
    )
  `)
}
