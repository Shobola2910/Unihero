import SectionHeader from "@/components/SectionHeader";

export default function MotivationPage() {
  return (
    <section className="relative">
    <div className="decor right-2 -top-2 text-3xl animate-floatY">✨</div>
      <SectionHeader title="Motivation" subtitle="Daily inspiration for students" />
      <div className="rounded-2xl bg-white/5 p-8 text-center">
        <p className="text-xl">The future belongs to those who prepare today.</p>
        <p className="mt-2 text-white/70 text-sm">More rotating quotes can be added later.</p>
      </div>
    </section>
  );
}
