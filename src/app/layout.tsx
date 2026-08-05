import type { Metadata, Viewport } from 'next';
import { Inter, Kanit, Space_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

// Self-hosted at build time, so there is no render-blocking request to
// fonts.googleapis.com and no layout shift while the webfont arrives.
const display = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const TITLE = 'Hammody · Roblox UI Design & Studio Implementation';
const DESC =
  'Premium UI systems for Roblox games. I design, animate, and build interfaces (shops, HUDs, menus, and full systems) that arrive working inside Roblox Studio, with responsive scaling and interactive states. Trusted by creators including DoBig and Novaly.';

export const metadata: Metadata = {
  metadataBase: new URL('https://hammody.me'),
  title: TITLE,
  description: DESC,
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: 'https://hammody.me/',
    title: TITLE,
    description: DESC,
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0C0C0C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
