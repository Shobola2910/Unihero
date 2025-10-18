"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const link = "hover:opacity-80 transition";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/5 shadow" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold flex items-center gap-2">
          <img alt="UniHero logo" src="/logo.png" className="h-7 w-7" /> <span>UniHero</span>
        </Link>
        <div className="hidden gap-6 md:flex">
          <Link href="/" className={link}>Home</Link>
          <Link href="/about" className={link}>About</Link>
          <Link href="/resources" className={link}>Resources</Link>
          <Link href="/events" className={link}>Events</Link>
          <Link href="/contact" className={link}>Contact</Link>
          <a href="/news" className="hover:opacity-80">News</a>
        </div>
        <button
          aria-label="Open Menu"
          className="md:hidden rounded-xl border border-white/20 px-3 py-1.5 hover:bg-white/10 transition"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#0A1F44] border-t border-white/10 shadow-soft">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            <Link onClick={()=>setOpen(false)} href="/" className={link}>Home</Link>
            <Link onClick={()=>setOpen(false)} href="/about" className={link}>About</Link>
            <Link onClick={()=>setOpen(false)} href="/resources" className={link}>Resources</Link>
            <Link onClick={()=>setOpen(false)} href="/events" className={link}>Events</Link>
            <Link onClick={()=>setOpen(false)} href="/contact" className={link}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
