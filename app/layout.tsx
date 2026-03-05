import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lopes2tech.ch"),
  title: "Paulo Lopes - Link in Bio",
  description: "AI Automation Specialist & Software Engineer. Websites, branding & automation for Swiss entrepreneurs.",
  keywords: [
    "Paulo Lopes",
    "Paulo Reizinho",
    "Paulo Lopes Reizinho",
    "Lopes2Tech",
    "AI Automation",
    "Websites",
    "Branding",
    "Switzerland",
    "Zurich"
  ],
  authors: [{ name: "Paulo Lopes Reizinho", url: "https://www.lopes2tech.ch" }],
  creator: "Paulo Lopes Reizinho",
  openGraph: {
    title: "Paulo Lopes - Link in Bio",
    description: "AI Automation Specialist & Software Engineer. Websites, branding & automation for Swiss entrepreneurs.",
    url: "https://www.lopes2tech.ch",
    siteName: "Paulo Lopes Link in Bio",
    images: [
      {
        url: "/avatar.png",
        width: 400,
        height: 400,
        alt: "Paulo Lopes - AI Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Paulo Lopes - Link in Bio",
    description: "AI Automation Specialist & Software Engineer. Websites, branding & automation for Swiss entrepreneurs.",
    images: ["/avatar.png"],
  },
  icons: {
    icon: "/logo_c.svg",
    apple: "/logo_c.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
