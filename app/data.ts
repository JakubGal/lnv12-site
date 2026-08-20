export type Result = {
  rank: number;
  name: string;
  distanceKm: number;
  category?: string;
};

export type ResultYear = {
  year: string;
  label: string;
  status: string;
  note: string;
  results: Result[];
};

// Add verified finishers here after each edition. The table renders automatically.
export const RESULT_YEARS: ResultYear[] = [
  {
    year: "2026",
    label: "Aktuálny ročník",
    status: "21. – 22. augusta",
    note: "Výsledky zverejníme po skončení podujatia.",
    results: [],
  },
  {
    year: "2025",
    label: "Archív",
    status: "Dopĺňame",
    note: "Overené výsledky ročníka 2025 pripravujeme na zverejnenie.",
    results: [],
  },
  {
    year: "2024",
    label: "Archív",
    status: "Dopĺňame",
    note: "Staršie výsledky postupne digitalizujeme.",
    results: [],
  },
  {
    year: "Staršie",
    label: "História LNV",
    status: "Pripravujeme",
    note: "Máte výsledky alebo fotografie zo starších ročníkov? Ozvite sa nám cez Facebook.",
    results: [],
  },
];

export const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeUIPDplANcoHDe4oJgq2XC4y0WJfv8PoZ7759JTRmaWPHPiA/viewform?pli=1";

export const FACEBOOK_URL =
  "https://www.facebook.com/100055726104070/photos/1589891889544999/";
