import "./globals.css";
import { Anton, Inter, Space_Mono, Instrument_Serif } from "next/font/google";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://hammody.pages.dev"),
  title: "Hammody — Roblox UI/UX & Motion Designer",
  description: "Most Roblox UI is forgettable. Mine isn't. UI/UX & motion design for Roblox games — shops, quests, crafting, stores.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website", url: "https://hammody.pages.dev/",
    title: "Hammody — Roblox UI/UX & Motion Designer",
    description: "Most Roblox UI is forgettable. Mine isn't.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammody — Roblox UI/UX & Motion Designer",
    description: "Most Roblox UI is forgettable. Mine isn't.",
    images: ["/og.png"],
  },
};

export const viewport = { themeColor: "#f3eee2", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
