export default function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <blockquote className="rounded-2xl bg-white/5 p-6 border border-white/10 shadow-soft">
      <p className="text-white/90">“{text}”</p>
      <footer className="mt-3 text-white/70">— {author}</footer>
    </blockquote>
  );
}
