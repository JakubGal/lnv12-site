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
  assert.match(html, /id="vysledky"/);
  assert.match(html, /id="galeria"/);
  assert.match(html, /1FAIpQLSeUIPDplANcoHDe4oJgq2XC4y0WJfv8PoZ7759JTRmaWPHPiA/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("includes custom-domain and poster assets", async () => {
  const cname = await readFile(new URL("../dist/client/CNAME", import.meta.url), "utf8");
  assert.equal(cname.trim(), "lnv.sk");
  await access(new URL("../dist/client/.nojekyll", import.meta.url));
  await access(new URL("../dist/client/lnv12-2026-poster.webp", import.meta.url));
  await access(new URL("../dist/client/lnv12-2026-poster.jpg", import.meta.url));
  await access(new URL("source-assets/lnv12-2026-poster-original.png", root));
});
