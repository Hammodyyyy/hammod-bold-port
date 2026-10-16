// Regenerates the derivatives in public/ from the originals in assets-src/.
//   node scripts/optimize-images.mjs
//
// The site was shipping a 2000x2000 290KB client logo into a 36px slot and
// full-size 1080p JPEGs into 240px marquee tiles. Everything below is emitted
// as WebP at the sizes actually rendered, with the widest variant kept for the
// lightbox.
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'assets-src';
const OUT = 'public';

// [directory, output widths, quality]
const JOBS = [
  ['work', [480, 960, 1600], 80],
  ['clients', [72], 90],
  ['avatars', [96, 224], 90],
];

async function run() {
  let saved = 0;
  let before = 0;
  let after = 0;
  // records the width each derivative actually came out at, so srcset never
  // claims a size that does not exist
  const manifest = {};

  for (const [dir, widths, quality] of JOBS) {
    const inDir = path.join(SRC, dir);
    const outDir = path.join(OUT, dir);
    if (!existsSync(inDir)) continue;
    await mkdir(outDir, { recursive: true });

    for (const file of await readdir(inDir)) {
      if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
      const inPath = path.join(inDir, file);
      const base = file.replace(/\.[^.]+$/, '');
      before += (await stat(inPath)).size;

      const meta = await sharp(inPath).metadata();

      const entries = [];
      const seen = new Set();

      for (const w of widths) {
        // never upscale past the source, and skip a width already covered
        const real = Math.min(w, meta.width ?? w);
        if (seen.has(real)) continue;
        seen.add(real);

        const outPath = path.join(outDir, `${base}-${w}.webp`);
        await sharp(inPath)
          .resize({ width: real, withoutEnlargement: true })
          .webp({ quality })
          .toFile(outPath);
        after += (await stat(outPath)).size;
        saved += 1;
        entries.push({ src: `/${dir}/${base}-${w}.webp`, w: real });
      }

      manifest[`${dir}/${base}`] = entries;
    }
  }

  await writeFile('src/lib/images.json', JSON.stringify(manifest, null, 2) + '\n');

  const kb = (n) => `${Math.round(n / 1024)}KB`;
  console.log(`wrote ${saved} files: ${kb(before)} of sources -> ${kb(after)} of derivatives`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
