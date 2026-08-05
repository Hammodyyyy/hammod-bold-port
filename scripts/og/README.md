# Social card (`public/og.png`)

The image Discord, X, and Slack show when the site is linked. `card.html` is
the source; it is rendered with headless Chrome so the real Kanit / Inter /
Space Mono webfonts are used, then downscaled from 2x for crisp text.

Regenerate after changing the wordmark, tagline, or the shots it features:

```bash
# 1. render at 2x (2400x1260)
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,630 \
  --virtual-time-budget=8000 \
  --screenshot=scripts/og/og-2x.png \
  "file://$(pwd)/scripts/og/card.html"

# 2. downscale to the 1200x630 the metadata declares
node -e "require('sharp')('scripts/og/og-2x.png').resize(1200,630,{fit:'cover'}).png({compressionLevel:9,palette:true,quality:92,effort:10}).toFile('public/og.png')"
```

Notes:

- 1200x630 is fixed by `openGraph.images` in `src/app/layout.tsx`. Changing the
  size means changing both.
- Palette PNG lands around 140KB with no visible banding on the violet glow.
  Plain PNG is ~650KB, which is needlessly heavy for an embed.
- Keep the wordmark inside the left column. At 132px it overflowed and Chrome
  clipped the `Y`; 118px with `white-space: nowrap` fits.
