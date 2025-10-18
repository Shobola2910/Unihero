import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message, honey } = await req.json();
  if (honey) return NextResponse.json({ ok: true });
  if (!name || !email || !message)
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId)
    return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });

  const text = `📩 UniHero Contact\n• Name: ${name}\n• Email: ${email}\n• Message: ${message}`;

  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text })
  });
  if (!r.ok) return NextResponse.json({ ok: false, error: await r.text() }, { status: 500 });
  return NextResponse.json({ ok: true });
}
