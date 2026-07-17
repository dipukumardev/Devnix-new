import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devnix | Digital Agency - Web Development, SEO & Digital Marketing",
  description:
    "Devnix is a full-service digital agency offering web development, SEO management, UI/UX design, digital marketing, and more. Transform your digital presence with us.",
  keywords: [
    "digital agency",
    "web development",
    "SEO",
    "digital marketing",
    "UI/UX design",
    "branding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning: extensions (e.g. ColorZilla) inject attributes like cz-shortcut-listen on <body> before React hydrates. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
