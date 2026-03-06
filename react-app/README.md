# Veselo React App

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Form submission API

The quiz form sends `POST` JSON to:

- `VITE_LEAD_API_URL` (if set)
- otherwise `/api/lead`

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Example:

```env
VITE_LEAD_API_URL=https://your-domain.com/api/lead
```

Payload includes all form answers +:

- `source: "veselo-web"`
- `createdAt: <ISO datetime>`
