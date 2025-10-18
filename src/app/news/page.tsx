// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },      // <— News link
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-xl transition ${
      pathname === href
        ? "bg-white/10 text-white"
        : "text-white/80 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-[#0b1e3a]/70 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="text-xl">🎓</span>
          <span className="text-lg">UniHero</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition"
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path
              d={open ? "M4 4 L16 16 M16 4 L4 16" : "M3 6h14M3 10h14M3 14h14"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1e3a]/90 backdrop-blur">
          <div className="container mx-auto flex flex-col p-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-3 rounded-xl mb-1 ${linkClass(l.href)}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="h-1" />
          </div>
        </div>
      )}
    </header>
  );
}
