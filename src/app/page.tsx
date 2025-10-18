"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { RESOURCES } from "@/lib/data";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl p-10 shadow-xl section-animated">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl font-semibold md:text-5xl flex items-center gap-3">
          <img alt="UniHero" src="/logo.png" className="h-10 w-10 rounded-xl" />
          UniHero — For Students, By Students
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-white/90">
          A friendly community with exam prep guides, assignment templates, and daily motivation — all in one place.
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="https://t.me/UniHero_news" className="rounded-2xl bg-unihero-accent px-5 py-2.5 font-medium shadow hover:scale-[1.02] transition animate-pulseGlow">
            Join the Community
          </Link>
          <a href="/resources" className="rounded-2xl border border-white/20 px-5 py-2.5 font-medium hover:bg-white/10 transition">
            Explore Resources
          </a>
        </div>

        {/* decorative emojis */}
        <div className="decor -right-4 -top-4 text-6xl animate-floatY">📚</div>
        <div className="decor -left-4 bottom-4 text-5xl animate-floatY">💡</div>
      </section>

      {/* ABOUT */}
      <section className="py-16 relative">
        <div className="decor left-2 -top-2 text-4xl animate-floatY">🎓</div>
        <SectionHeader title="Our Story" subtitle="We believe learning should be inspiring, collaborative, and accessible." />
        <p className="text-white/85 max-w-3xl">
          UniHero started with a simple idea — make student life easier. With community support, clear study guides,
          and simple tools, every student can grow with confidence.
        </p>
      </section>

      {/* RESOURCES */}
      <section className="py-16 relative">
        <div className="decor right-2 -top-2 text-4xl animate-floatY">🧠</div>
        <SectionHeader title="Explore Resources" subtitle="Everything you need to study smarter" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((r) => (
            <Card key={r.title} title={r.title} desc={r.desc} icon={<span>{r.icon}</span>} />
          ))}
        </div>
        <div className="mt-6">
          <a href="https://t.me/UniHero_BOT" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 hover:bg-white/10 transition">
            🤖 Need personal help? → @UniHero_BOT
          </a>
        </div>
      </section>
    </>
  );
}
