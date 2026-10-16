# Social card (`public/og.png`)

The image Discord, X, and Slack show when the site is linked. `card.html` is
the source; it is rendered with headless Chrome so the real Archivo webfont
(condensed through its width axis, like the site) is used, then downscaled
from 2x for crisp text.

Regenerate after changing the headline, tagline, or the shots it features:

```bash
# 1. render at 2x (2400x1260)
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,630 \
  --virtual-time-budget=8000 --allow-file-access-from-files \
  --screenshot="$(pwd -W)/scripts/og/og-2x.png" \
  "file:///$(pwd -W)/scripts/og/card.html"

# 2. downscale to the 1200x630 the metadata declares
node -e "require('sharp')('scripts/og/og-2x.png').resize(1200,630,{fit:'cover'}).png({compressionLevel:9,palette:true,quality:92,effort:10}).toFile('public/og.png')"
```

Notes:

- 1200x630 is fixed by `openGraph.images` in `app/layout.jsx`. Changing the
  size means changing both.
- Palette PNG lands around 80KB on the flat grey canvas. Plain PNG is several
  times that, which is needlessly heavy for an embed.
- The shot deck sits to the right of "ROBLOX UI,". If the headline or its size
  changes, check the comma still clears the back card.
- `og-2x.png` is a scratch file; delete it after step 2.
