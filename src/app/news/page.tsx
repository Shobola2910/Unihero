// src/app/news/page.tsx
import SectionHeader from "@/components/SectionHeader";
import fs from "fs/promises";
import path from "path";

type NewsItem = { id: string; date: string; title: string; body: string; link?: string };

async function getNews(): Promise<NewsItem[]> {
  const file = path.join(process.cwd(), "public", "news.json");
  try {
    const json = await fs.readFile(file, "utf-8");
    const data = JSON.parse(json) as NewsItem[];
    // eng so'nggi yangiliklar tepada bo'lsin
    return data.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="container mx-auto max-w-5xl py-10">
      <SectionHeader title="News 🗞️" subtitle="Latest updates from UniHero" />
      {news.length === 0 ? (
        <p className="opacity-70">No news yet.</p>
      ) : (
        <ul className="space-y-4">
          {news.map((n) => (
            <li key={n.id} className="rounded-2xl bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-sm opacity-70">{new Date(n.date).toLocaleDateString()}</div>
              <h3 className="mt-1 text-lg font-semibold">{n.title}</h3>
              <p className="mt-1 opacity-85">{n.body}</p>
              {n.link ? (
                <a
                  href={n.link}
                  className="mt-3 inline-block rounded-xl bg-unihero-accent px-4 py-2 font-medium hover:scale-[1.02] transition"
                >
                  Read more →
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
