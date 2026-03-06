import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'module'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: resolve(__dirname, '..', '.env.local') })

function apiPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api/')) return next()

        const route = req.url.replace(/^\/api\//, '').split('?')[0]
        try {
          const mod = await server.ssrLoadModule(`../api/${route}.js`)
          const body = await new Promise((resolve) => {
            let data = ''
            req.on('data', (chunk) => (data += chunk))
            req.on('end', () => {
              try { resolve(JSON.parse(data)) } catch { resolve(data || undefined) }
            })
          })
          const fakeReq = { method: req.method, headers: req.headers, body, query: {} }
          const fakeRes = {
            statusCode: 200,
            status(code) { this.statusCode = code; return this },
            json(data) {
              res.writeHead(this.statusCode, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify(data))
            },
          }
          await mod.default(fakeReq, fakeRes)
        } catch (err) {
          console.error('API error:', err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: err.message }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiPlugin()],
})
