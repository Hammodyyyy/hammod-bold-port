/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nothing on this site needs a server: no API routes, no ISR, no dynamic
  // rendering. A static export therefore deploys anywhere (Cloudflare Pages,
  // Netlify, Vercel, plain object storage) with no adapter. Drop this line if
  // you later add a route handler or want ISR.
  output: 'export',

  // next/image's default loader needs a server to optimise on the fly, and the
  // shots are already pre-sized to WebP by scripts/optimize-images.mjs, so the
  // built-in optimiser would be redundant work.
  images: { unoptimized: true },
};

export default nextConfig;
