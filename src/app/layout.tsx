import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_TEL, SITE_URL } from "@/lib/site-contact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Devnix builds custom software, business automation, CRMs, websites, and mobile apps. A full-service digital agency helping businesses scale with modern technology.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Custom Software, CRM, Websites & Automation`,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteDescription,
  keywords: [
    "digital agency",
    "custom software",
    "CRM development",
    "business automation",
    "web development",
    "mobile app development",
    "SEO",
    "digital marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Custom Software, CRM, Websites & Automation`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Custom Software, CRM, Websites & Automation`,
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: siteDescription,
  email: SITE_EMAIL,
  telephone: SITE_PHONE_TEL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_PHONE_TEL,
    email: SITE_EMAIL,
    contactType: "customer service",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
