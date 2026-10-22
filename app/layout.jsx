import "./globals.css";
import { Archivo } from "next/font/google";

// One variable family. The width axis does the work: condensed for display
// type, normal width for reading.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });

const TITLE = "Hammody · Roblox UI Design & Studio Implementation";
const DESC = "Roblox UI designed and built in Studio. Shops, HUDs, menus and full systems, priced per screen from $60 and delivered working inside Roblox Studio. Trusted by creators including DoBig and Novaly.";

export const metadata = {
  metadataBase: new URL("https://hammody.me"),
  title: TITLE,
  description: DESC,
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website", url: "https://hammody.me/",
    title: TITLE, description: DESC,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE, description: DESC,
    images: ["/og.png"],
  },
};

export const viewport = { themeColor: "#ebebe8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
