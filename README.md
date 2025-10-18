# UniHero — For Students, By Students 🎓

Next.js 14 + Tailwind + Framer Motion. SEO-ready and GitHub-ready.

## Local Dev
```bash
npm install
cp .env.local.example .env.local
# edit .env.local
npm run dev
```

## Env Vars
```
NEXT_PUBLIC_SITE_URL=https://unihero.org
TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOTFATHER_TOKEN
TELEGRAM_CHAT_ID=7711916897
```

## Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial unihero"
git branch -M main
git remote add origin https://github.com/<you>/unihero.git
git push -u origin main
```

## Deploy (Vercel)
- Import repo → add env vars above
- Add your domain (unihero.org or unihero.uz)
- DNS: A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com

## SEO
- robots.ts + sitemap.ts use `NEXT_PUBLIC_SITE_URL` for canonical base
- Submit sitemap to Google Search Console
