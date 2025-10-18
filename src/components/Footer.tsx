// src/components/Footer.tsx
import TelegramPills from "@/components/TelegramPills";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1D3A] text-white/90">
      <div className="container mx-auto max-w-6xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 py-6">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} UniHero — For Students, By Students
        </p>

        {/* Yangi pill-blok */}
        <TelegramPills />
      </div>
    </footer>
  );
}
