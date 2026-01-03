import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    description: "AI Automation Specialist & Software Engineer",
    url: "https://www.lopes2tech.ch", // Assuming this or similar as canonical, or the deployed link-in-bio URL
    siteName: "Paulo Lopes Link in Bio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Lopes - Link in Bio",
    description: "AI Automation Specialist & Software Engineer",
    creator: "@lopes2tech", // Assuming handle based on instagram
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
