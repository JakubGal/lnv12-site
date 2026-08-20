import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const htmlFile = new URL("../dist/client/index.html", import.meta.url);

test("exports the complete Slovak LNV12 site", async () => {
  const html = await readFile(htmlFile, "utf8");

  assert.match(html, /<html lang="sk">/);
  assert.match(html, /LNV12 \| Ludanická nočná výzva/);
  assert.match(html, /Dvanásť hodín/);
  assert.match(html, /Každý krok/);
  assert.match(html, /mobile-action-bar/);
  assert.match(html, /Mobilná navigácia/);
  assert.doesNotMatch(html, /Staršie ročníky/);
  assert.match(html, /id="vysledky"/);
  assert.match(html, /id="galeria"/);
  assert.match(html, /1FAIpQLSeUIPDplANcoHDe4oJgq2XC4y0WJfv8PoZ7759JTRmaWPHPiA/);
  assert.match(html, /975 km/);
  assert.match(html, /Michaela Hubinská/);
  assert.match(html, /2 475 km/);
  assert.match(html, /Jozef Trsťan/);
  assert.match(html, /Mia Brezinová/);
  assert.match(html, /Janko Kušš/);
  assert.match(html, /t44mW6GGp3nFvVn49/);
  assert.match(html, /PcTa5WBSh8ub52ED9/);
  assert.match(html, /lnv12-trail-2026\.mp4/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("includes custom-domain and poster assets", async () => {
  const cname = await readFile(new URL("../dist/client/CNAME", import.meta.url), "utf8");
  assert.equal(cname.trim(), "lnv.sk");
  await access(new URL("../dist/client/.nojekyll", import.meta.url));
  await access(new URL("../dist/client/lnv12-2026-poster.webp", import.meta.url));
  await access(new URL("../dist/client/lnv12-2026-poster.jpg", import.meta.url));
  await access(new URL("../dist/client/lnv12-2025-poster.png", import.meta.url));
  await access(new URL("../dist/client/lnv12-2024-poster.png", import.meta.url));
  await access(new URL("../dist/client/media/lnv12-trail-2026.mp4", import.meta.url));
  await access(new URL("source-assets/lnv12-2026-poster-original.png", root));
});

test("keeps display typography readable across responsive layouts", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /h1\s*\{[\s\S]*?line-height:\s*1\.02;/);
  assert.match(css, /\.section-heading h2\s*\{[\s\S]*?line-height:\s*1\.1;/);
  assert.match(css, /\.route-grid h2[^\n]*\/1\.06 Impact/);
  assert.match(css, /\.trail-copy h3[^\n]*\/1\.08 Impact/);
  assert.match(css, /\.final-cta h2[^\n]*\/1\.02 Impact/);
});
