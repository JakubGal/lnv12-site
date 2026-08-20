# LNV12 — Ludanická nočná výzva

Statická stránka podujatia pripravená pre bezplatný GitHub Pages hosting a doménu `lnv.sk`.

Originálny plnofarebný plagát je bezpečne uložený v `source-assets/`; web používa menšie optimalizované verzie z `public/`.

## Čo stránka obsahuje

- registráciu cez aktuálny Google formulár,
- termín, čas, základné pravidlá a odpočítavanie,
- rebríčky po ročníkoch,
- overené štatistiky a výrazné výkony z rokov 2024 a 2025,
- odkazy na fotoalbumy 2024 a 2025,
- video trate ročníka 2026,
- praktické otázky a odpovede,
- mobilné aj desktopové zobrazenie.

## Spustenie na počítači

Vyžaduje Node.js 22 a pnpm.

```bash
pnpm install
pnpm dev
```

Produkčný export vytvoríte a skontrolujete príkazom:

```bash
pnpm run check
```

Výsledok pripravený na publikovanie bude v `dist/client`.

## Ako doplniť výsledky

Otvorte `app/data.ts` a v príslušnom ročníku nahraďte prázdne pole `results` overenými údajmi:

```ts
results: [
  { rank: 1, name: "Meno Priezvisko", distanceKm: 82.4, category: "Beh" },
  { rank: 2, name: "Meno Priezvisko", distanceKm: 76.1, category: "Turistika" },
]
```

Poradie, desatinná čiarka aj kilometre sa na stránke zobrazia automaticky.

## Ako doplniť fotografie

1. Vložte optimalizované fotografie do `public/gallery/ROK/` (napríklad `public/gallery/2025/start.jpg`).
2. V `app/page.tsx` nahraďte archívnu kartu obrázkom alebo pridajte ďalšie galériové karty.
3. Pred zverejnením skontrolujte, že máte súhlas na použitie fotografií.

Odporúčaná veľkosť jednej fotografie je približne 1600 px na dlhšej strane a do 500 kB.

Aktuálne verejné albumy sú uložené v `PHOTO_ALBUMS` v `app/data.ts`. Video trate je v
`public/media/lnv12-trail-2026.mp4`; atribút `preload="metadata"` zabraňuje stiahnutiu
celého videa pred spustením prehrávania.

## Bezplatné publikovanie

Workflow `.github/workflows/deploy-pages.yml` pri každom odoslaní na vetvu `main`:

1. zostaví statickú stránku,
2. spustí kontrolné testy,
3. publikuje obsah cez GitHub Pages.

V GitHub repozitári treba v **Settings → Pages → Build and deployment** zvoliť **GitHub Actions**. Súbor `CNAME` už nastavuje vlastnú doménu `lnv.sk`; DNS záznamy domény treba nasmerovať na GitHub Pages podľa pokynov, ktoré GitHub zobrazí pri vlastnej doméne.
