import SectionHeader from "@/components/SectionHeader";

const posts = [
  { title: "📢 SUPP Exam Guide Released!", date: "October 2025", desc: "Check out our step-by-step guide with useful examples and tips." },
];

export default function EventsPage() {
  return (
    <section className="relative">
      <div className="decor right-2 -top-2 text-3xl animate-floatY">📅</div>
      <SectionHeader title="Latest News" subtitle="Updates, guides, and community highlights" />
      <div className="grid gap-4">
        {posts.map((p, i) => (
          <article key={i} className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-white/70 text-sm">{p.date}</p>
            <p className="mt-2 text-white/85">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
