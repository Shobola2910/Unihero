"use client";
import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  /** YYYY-MM format: e.g. "2024-10" */
  date: string;
  title: string;
  emoji?: string;
  image?: string;
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/** 🔹 UniHero milestones — xohlasangiz ko‘paytirib boring */
const EVENTS: TimelineItem[] = [
  { date: "2024-10", title: "2 anonym founders",                 emoji: "🧑‍🤝‍🧑" },
  { date: "2024-12", title: "UniHero Bot created",               emoji: "🤖" },
  { date: "2025-03", title: "Focused more on AI detectors & tools", emoji: "🧠" },
  { date: "2025-05", title: "100 students success",              emoji: "🎉" },
].sort((a,b)=>a.date.localeCompare(b.date));

function formatLabel(d: string) {
  const [y,m] = d.split("-").map(Number);
  const mm = Math.max(1, Math.min(12, m || 1));
  return `${y} · ${MONTHS[mm-1]}`;
}

export default function TimelineAuto() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const dragRef = useRef<{startX:number; startLeft:number} | null>(null);

  // Auto-scroll + mouse-yo‘nalish bo‘yicha tezlashish
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();

    const base = 0.16;   // px/ms — bazaviy tezlik
    const factor = 0.60; // sichqoncha markazdan uzoqlashsa tezlashish koeff.

    // seamless loop: kontentni 2x qilib render qilganmiz,
    // shuning uchun scrollLeft ni oraliqda aylantiramiz
    const max = el.scrollWidth / 2;

    const loop = (t: number) => {
      const dt = t - last; last = t;
      if (!isDragging) {
        const center = window.innerWidth / 2;
        const rel = Math.max(-1, Math.min(1, (mouseX - center) / center)); // -1..1
        const speed = (base + Math.abs(rel) * factor * base) * dt;
        const dir = rel >= 0 ? 1 : -1;
        el.scrollLeft += speed * dir;
      }
      if (el.scrollLeft >= max) el.scrollLeft = 0;
      if (el.scrollLeft <= 0)   el.scrollLeft = max;

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [mouseX, isDragging]);

  // Drag (mouse/touch) qo‘llab-quvvatlash
  function onPointerDown(e: React.PointerEvent) {
    const el = scrollerRef.current!;
    setDragging(true);
    el.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startLeft: el.scrollLeft };
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragRef.current) return;
    const el = scrollerRef.current!;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startLeft - dx;
  }
  function onPointerUp(e: React.PointerEvent) {
    const el = scrollerRef.current!;
    try { el.releasePointerCapture(e.pointerId); } catch {}
    setDragging(false);
    dragRef.current = null;
  }

  const all = [...EVENTS, ...EVENTS]; // seamless loop uchun 2 nusxa

  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0E1F43] t
