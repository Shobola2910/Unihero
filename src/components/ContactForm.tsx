"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setErr(null);
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
        honey: fd.get("hp")
      })
    });
    setLoading(false);
    if (res.ok) { setSent(true); (e.currentTarget as HTMLFormElement).reset(); }
    else { const d = await res.json().catch(()=>({})); setErr(d.error || "Failed to send"); }
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <input name="name" placeholder="Name" className="w-full rounded-2xl bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" required />
      <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" required />
      <textarea name="message" rows={4} placeholder="Message" className="w-full rounded-2xl bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" required />
      <input name="hp" className="hidden" tabIndex={-1} autoComplete="off" />
      <button disabled={loading} className="rounded-2xl bg-unihero-accent px-5 py-2.5 font-medium shadow hover:scale-[1.02] transition">
        {loading ? "Sending..." : sent ? "✅ Sent!" : "Send Message"}
      </button>
      {err && <p className="text-red-300 text-sm">{err}</p>}
    </form>
  );
}
