import { ReactNode } from "react";

export default function Card({ title, desc, icon }: { title: string; desc: string; icon?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow transition hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute -right-3 -top-3 text-5xl opacity-10">✨</div>
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
    </div>
  );
}
