"use client";
import { useEffect, useState } from "react";

const QUOTES = [
  "Kelajak tayyorgarlik ko‘radiganlarga tegishli.",
  "Bahoga emas, o‘sishga o‘qi.",
  "Har kuni bitta sahifa — afsuslardan uzoq."
];

export default function QuoteRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % QUOTES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-2xl bg-white/5 p-8 text-center">
      <p className="text-xl">{QUOTES[i]} <span className="block text-white/70 text-sm">EN: Motivational student quote</span></p>
    </div>
  );
}
