import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { RESOURCES } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <section className="relative">
      <div className="decor left-2 -top-2 text-3xl animate-floatY">📘</div>
      <SectionHeader title="Explore Our Resources" subtitle="Everything you need to study smarter" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {RESOURCES.map((r) => (
          <Card key={r.title} title={r.title} desc={r.desc} icon={<span>{r.icon}</span>} />
        ))}
      </div>
    </section>
  );
}
