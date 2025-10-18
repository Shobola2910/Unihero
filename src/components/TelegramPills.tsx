// src/components/TelegramPills.tsx
export default function TelegramPills() {
  const pills = [
    { href: "https://t.me/UniHero_news",  icon: "📣", text: "@UniHero_news" },
    { href: "https://t.me/UniHero_BOT",   icon: "🤖", text: "@UniHero_BOT" },
    { href: "https://t.me/UniHero_admin", icon: "👤", text: "@UniHero_admin" },
  ];

  return (
    <div className="rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-3">
        {pills.map((p) => (
          <a
            key={p.text}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative inline-flex items-center gap-2
              rounded-full px-4 py-2
              text-white font-semibold tracking-wide
              bg-gradient-to-br from-[#12244d] via-[#1a2d57] to-[#21407a]
              ring-1 ring-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_6px_20px_rgba(0,0,0,.35)]
              transition-all duration-200
              hover:scale-[1.03] hover:-translate-y-0.5 hover:ring-white/30
              focus:outline-none focus:ring-2 focus:ring-sky-400
            "
          >
            <span className="text-xl drop-shadow">{p.icon}</span>
            <span className="underline decoration-white/40 underline-offset-2">
              {p.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
