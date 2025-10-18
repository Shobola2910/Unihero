export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/80">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2025 UniHero — For Students, By Students 🎓</p>
        <div className="flex flex-wrap items-center gap-4">
          <a className="underline hover:text-white" href="https://t.me/Unihero_admin">👤 @UniHero_admin</a>
          <a className="underline hover:text-white" href="https://t.me/UniHero_news">📢 @UniHero_news</a>
          <a className="underline hover:text-white" href="https://t.me/UniHero_BOT">🤖 @UniHero_BOT</a>
        </div>
      </div>
    </footer>
  );
}
