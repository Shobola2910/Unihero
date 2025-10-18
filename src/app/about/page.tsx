import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="relative">
      <div className="decor right-2 -top-2 text-3xl animate-floatY">🌱</div>
      <SectionHeader title="Our Story" subtitle="For Students, By Students" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/5 p-6">
          <h3 className="font-semibold mb-2">Mission</h3>
          <p className="text-white/80">
            UniHero creates a clear, encouraging, and simple learning environment for students.
          </p>
          <ul className="mt-3 list-disc pl-5 text-white/75">
            <li>Support through community</li>
            <li>Share resources and methods</li>
            <li>Boost motivation and growth</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/5 p-6">
          <h3 className="font-semibold mb-2">Timeline</h3>
          <ol className="space-y-2 text-white/80">
            <li>2023 — Launch</li>
            <li>2024 — 1K+ student community</li>
            <li>2025 — UniHero Bot & expanded resources</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
