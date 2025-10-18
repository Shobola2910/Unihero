import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://unihero.uz"),
  alternates: { canonical: "/" },
  title: "UniHero — For Students, By Students",
  description: "Student community with exam prep, resources and motivation.",
  openGraph: {
    title: "UniHero — For Students, By Students",
    description: "Community, resources, exam prep, and daily motivation for students.",
    images: ["/og-image.png"],
    url: "https://unihero.uz",
    siteName: "UniHero",
  },
  icons: { icon: "/icon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased selection:bg-unihero-accent/30">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pt-28 pb-24 relative">{children}</main>
        <Footer />
        <Script id="ld-org" type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Organization",
            name:"UniHero",
            url:"https://unihero.uz",
            logo:"https://unihero.uz/icon.png",
            sameAs:["https://t.me/UniHero_news","https://t.me/Unihero_admin"]
          })}}/>
      </body>
    </html>
  );
}
