"use client";

import { useState } from "react";
import type { ResultYear } from "../data";

export function ResultsArchive({ years }: { years: ResultYear[] }) {
  const [activeYear, setActiveYear] = useState(years[0].year);
  const active = years.find((year) => year.year === activeYear) ?? years[0];

  return (
    <div className="results-module">
      <div className="year-tabs" role="tablist" aria-label="Vyberte ročník výsledkov">
        {years.map((year) => (
          <button
            type="button"
            role="tab"
            aria-selected={year.year === active.year}
            className={year.year === active.year ? "active" : ""}
            onClick={() => setActiveYear(year.year)}
            key={year.year}
          >
            {year.year}
          </button>
        ))}
      </div>

      <div className="leaderboard" role="tabpanel" aria-label={`Výsledky ${active.year}`}>
        <div className="leaderboard-heading">
          <div>
            <span>{active.label}</span>
            <h3>Najlepší účastníci · {active.year}</h3>
          </div>
          <span className="status-chip">{active.status}</span>
        </div>

        {active.results.length > 0 ? (
          <div className="results-table">
            <div className="result-row result-labels">
              <span>Poradie</span><span>Meno</span><span>Kategória</span><span>Vzdialenosť</span>
            </div>
            {active.results.map((result) => (
              <div className="result-row" key={`${active.year}-${result.rank}-${result.name}`}>
                <strong>{String(result.rank).padStart(2, "0")}</strong>
                <span>{result.name}</span>
                <span>{result.category ?? "—"}</span>
                <strong>{result.distanceKm.toLocaleString("sk-SK")} km</strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <span className="empty-moon" aria-hidden="true">◐</span>
            <div>
              <strong>Rebríček čaká na dáta</strong>
              <p>{active.note}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
