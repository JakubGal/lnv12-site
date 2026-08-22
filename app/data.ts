export type Result = {
  rank: number;
  name: string;
  distanceKm: number;
  category?: string;
};

export type ArchiveStat = {
  value: string;
  label: string;
};

export type DisciplineSummary = {
  label: string;
  participants?: number;
  laps: number;
  distanceKm: number;
};

export type PerformanceHighlight = {
  label: string;
  name: string;
  distanceKm?: number;
  detail: string;
};

export type ResultYear = {
  year: string;
  label: string;
  title: string;
  status: string;
  note: string;
  results: Result[];
  stats?: ArchiveStat[];
  disciplines?: DisciplineSummary[];
  highlights?: PerformanceHighlight[];
  sourceUrl?: string;
  sourceLabel?: string;
};

// Add verified finishers here after each edition. The table renders automatically.
export const RESULT_YEARS: ResultYear[] = [
  {
    year: "2026",
    label: "Aktuálny ročník",
    title: "Štatistiky a najlepšie výkony · 2026",
    status: "21. – 22. augusta 2026",
    note: "Súhrn je spracovaný z prezenčných listín organizátorov. Jeden okruh mal 7,5 km; chôdza je určená podľa označenia CH v listinách.",
    stats: [
      { value: "263", label: "účastníkov" },
      { value: "544", label: "okruhov" },
      { value: "4 080 km", label: "spolu" },
    ],
    disciplines: [
      { label: "Bežci", participants: 229, laps: 489, distanceKm: 3667.5 },
      { label: "Chodci", participants: 34, laps: 55, distanceKm: 412.5 },
    ],
    highlights: [
      {
        label: "Chôdza",
        name: "Pavol Uhlár",
        distanceKm: 60,
        detail: "8 okruhov · najviac medzi chodcami",
      },
      {
        label: "Chôdza",
        name: "Andrea Skorčová",
        distanceKm: 30,
        detail: "4 okruhy",
      },
      {
        label: "Deti",
        name: "Ondrej Danko",
        distanceKm: 52.5,
        detail: "7 okruhov · najlepší detský výkon",
      },
      {
        label: "Ocenenie",
        name: "Juraj Goga · Vladimír Čerňan · Markéta Vrbická",
        detail: "najstarší účastníci · ročník narodenia 1947",
      },
    ],
    results: [
      { rank: 1, name: "Michal Drienovský", distanceKm: 90, category: "Beh · 12 okruhov" },
      { rank: 2, name: "Martin Bažila", distanceKm: 82.5, category: "Beh · 11 okruhov" },
      { rank: 2, name: "Ondrej Janovič", distanceKm: 82.5, category: "Beh · 11 okruhov" },
      { rank: 4, name: "Ján Miroslav Furík", distanceKm: 75, category: "Beh · 10 okruhov" },
      { rank: 4, name: "Miroslav Nemeth", distanceKm: 75, category: "Beh · 10 okruhov" },
    ],
  },
  {
    year: "2025",
    label: "Druhý ročník",
    title: "Štatistiky a výrazné výkony · 2025",
    status: "22. – 23. augusta 2025",
    note: "Overený súhrn druhého ročníka Ludanickej nočnej výzvy.",
    results: [],
    stats: [
      { value: "153", label: "účastníkov" },
      { value: "330", label: "okruhov" },
      { value: "2 475 km", label: "spolu" },
    ],
    highlights: [
      { label: "Beh", name: "Jozef Trsťan", distanceKm: 75, detail: "10 okruhov · najviac medzi bežcami" },
      { label: "Beh", name: "Jozef Bielich", distanceKm: 67.5, detail: "9 okruhov" },
      { label: "Beh", name: "Jakub Bucha", distanceKm: 67.5, detail: "9 okruhov" },
      { label: "Chôdza", name: "Filip Kmeťo", distanceKm: 60, detail: "8 okruhov · najviac medzi chodcami" },
      { label: "Chôdza", name: "Patrik Kmeťo", distanceKm: 52.5, detail: "7 okruhov" },
      { label: "Deti", name: "Mia Brezinová", distanceKm: 22.5, detail: "3 okruhy · najlepší detský výkon" },
      {
        label: "Ocenenie",
        name: "Gabriela Doležajová · Stanislav Gerhát · Helena Košecká",
        detail: "medzi najstaršími účastníkmi",
      },
      { label: "Beh", name: "Janko Kušš", distanceKm: 30, detail: "4 okruhy · 75 rokov" },
    ],
    sourceUrl: "https://www.facebook.com/groups/788216162580730/",
    sourceLabel: "Zdroj: súhrn Bežcov spod Tribeča na Facebooku",
  },
  {
    year: "2024",
    label: "Prvý ročník",
    title: "Štatistiky a výrazné výkony · 2024",
    status: "26. júla 2024",
    note: "Overené súhrnné údaje z prvého ročníka Ludanickej nočnej výzvy.",
    results: [],
    stats: [
      { value: "39", label: "účastníkov" },
      { value: "130", label: "okruhov" },
      { value: "975 km", label: "spolu" },
    ],
    disciplines: [
      { label: "Bežci", laps: 74, distanceKm: 555 },
      { label: "Chodci", laps: 25, distanceKm: 187.5 },
      { label: "Cyklisti", laps: 31, distanceKm: 232.5 },
    ],
    highlights: [
      { label: "Cyklistika", name: "Marek Košecký", distanceKm: 165, detail: "22 okruhov · 2 655 nastúpaných metrov" },
      { label: "Chôdza", name: "Pavol Uhlár", distanceKm: 52.5, detail: "7 okruhov · celých 12 hodín" },
      { label: "Chôdza", name: "Patrik Kmeťo", distanceKm: 45, detail: "6 okruhov · celých 12 hodín" },
      { label: "Beh", name: "Michaela Hubinská", distanceKm: 45, detail: "6 okruhov · najviac medzi bežkyňami" },
      { label: "Beh", name: "Martin Brezina", distanceKm: 45, detail: "6 okruhov · najviac medzi bežcami" },
      { label: "Beh", name: "Ján Kušš", distanceKm: 30, detail: "4 okruhy · najstarší účastník, 74 rokov" },
    ],
    sourceUrl: "https://www.facebook.com/groups/788216162580730/permalink/1386003902801950/",
    sourceLabel: "Zdroj: súhrn organizátorov na Facebooku",
  },
];

export const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeUIPDplANcoHDe4oJgq2XC4y0WJfv8PoZ7759JTRmaWPHPiA/viewform?pli=1";

export const FACEBOOK_URL =
  "https://www.facebook.com/100055726104070/photos/1589891889544999/";

export const FACEBOOK_GROUP_URL =
  "https://www.facebook.com/groups/788216162580730/";

export const PHOTO_ALBUMS = {
  "2026": "https://photos.app.goo.gl/JQQRNWjiKKaZaVyR7",
  "2024": "https://photos.app.goo.gl/t44mW6GGp3nFvVn49",
  "2025": "https://photos.app.goo.gl/PcTa5WBSh8ub52ED9",
} as const;
