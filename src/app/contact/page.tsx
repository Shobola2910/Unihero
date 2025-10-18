import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative">
      <div className="decor left-2 -top-2 text-3xl animate-floatY">☎️</div>
      <SectionHeader title="Contact" subtitle="We'd love to hear from you" />
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm />
        <div className="rounded-2xl bg-white/5 p-5 space-y-2">
          <p>👤 Admin: <a className="underline" href="https://t.me/Unihero_admin">@UniHero_admin</a></p>
          <p>🤖 Order Bot: <a className="underline" href="https://t.me/UniHero_BOT">@UniHero_BOT</a></p>
          <p>📢 News: <a className="underline" href="https://t.me/UniHero_news">@UniHero_news</a></p>
        </div>
      </div>
    </section>
  );
}
