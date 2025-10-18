// src/app/community/page.tsx
import SectionHeader from "@/components/SectionHeader";

export default function CommunityPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <SectionHeader
        title="Community 🤝"
        subtitle="Join UniHero updates & chats on Telegram"
      />

      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
        <p className="opacity-80">
          We’re moving student discussions to Telegram. Join to get updates and ask questions.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://t.me/UniHero_news"
            className="inline-flex items-center gap-2 rounded-2xl bg-unihero-accent px-5 py-2.5 font-medium shadow hover:scale-[1.02] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            📣 Join News Channel
          </a>

          <a
            href="https://t.me/UniHero_BOT"
            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-2.5 font-medium hover:bg-white/15 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            🤖 Order Bot
          </a>

          <a
            href="https://t.me/UniHero_admin"
            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-2.5 font-medium hover:bg-white/15 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            👤 Admin
          </a>
        </div>
      </div>
    </div>
  );
}
