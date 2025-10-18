export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 relative">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="text-white/80">{subtitle}</p>}
      {/* Decorative emojis */}
      <div className="decor right-2 top-0 animate-floatY text-2xl">🎓</div>
    </div>
  );
}
