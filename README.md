# UniHero — Production-ready (SEO + Telegram Contact)

This project is ready to deploy at **https://unihero.uz**.

## SEO
- `robots.ts` and `sitemap.ts` created
- canonical + OpenGraph + JSON-LD set for domain https://unihero.uz

## Contact Form
Create `.env.local`:
```
TELEGRAM_BOT_TOKEN=YOUR_BOTFATHER_TOKEN
TELEGRAM_CHAT_ID=7711916897
```
> Chat ID provided by you. Make your bot an admin of the target group if needed.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build && npm run start
```

## Deploy (Vercel)
- `vercel` → import repo → set env vars above → attach custom domain `unihero.uz`.
```
A  @  CNAME  cname.vercel-dns.com
```
