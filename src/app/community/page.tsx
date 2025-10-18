import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data";

export default function CommunityPage() {
  return (
    <section>
      <SectionHeader title="What Students Say 💬" subtitle="Real stories from our learners" />
      <div className="grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} text={t.text_en} author={t.author} />)}
      </div>
      <div className="mt-6">
        <a href="https://t.me/UniHero_news" className="inline-flex items-center gap-2 rounded-2xl bg-unihero-accent px-5 py-2.5 font-medium shadow hover:scale-[1.02] transition">
          📢 Join @UniHero_news
        </a>
      </div>
    </section>
  );
}
