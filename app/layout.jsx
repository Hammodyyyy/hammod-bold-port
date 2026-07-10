import "./globals.css";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

const TITLE = "Hammody — Roblox UI Design & Studio Implementation";
const DESC = "Premium UI systems for Roblox games. I design and build production-ready interfaces — shops, HUDs, menus, and systems — implemented directly in Roblox Studio. Trusted by creators including DoBig and Novaly.";

export const metadata = {
  metadataBase: new URL("https://hammody.pages.dev"),
  title: TITLE,
  description: DESC,
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website", url: "https://hammody.pages.dev/",
    title: TITLE, description: DESC,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE, description: DESC,
    images: ["/og.png"],
  },
};

export const viewport = { themeColor: "#080809", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
