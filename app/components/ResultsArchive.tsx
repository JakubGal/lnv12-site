"use client";

import { useState } from "react";
import type { ResultYear } from "../data";

export function ResultsArchive({ years }: { years: ResultYear[] }) {
  const [activeYear, setActiveYear] = useState(years[0].year);
  const active = years.find((year) => year.year === activeYear) ?? years[0];
  const hasArchiveData = Boolean(
    active.results.length || active.stats?.length || active.disciplines?.length || active.highlights?.length,
  );

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
            <h3>{active.title}</h3>
          </div>
          <span className="status-chip">{active.status}</span>
        </div>

        {hasArchiveData ? (
          <div className="archive-data">
            {active.stats?.length ? (
              <div className="archive-stats" aria-label={`Súhrnné štatistiky ${active.year}`}>
                {active.stats.map((stat) => (
                  <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
                ))}
              </div>
            ) : null}

            {active.disciplines?.length ? (
              <div className="discipline-grid" aria-label={`Štatistiky podľa disciplín ${active.year}`}>
                {active.disciplines.map((discipline) => (
                  <article key={discipline.label}>
                    <span>{discipline.label}</span>
                    <strong>{discipline.distanceKm.toLocaleString("sk-SK")} km</strong>
                    <small>
                      {discipline.laps} okruhov
                      {discipline.participants !== undefined
                        ? ` · ${discipline.participants} účastníkov`
                        : ""}
                    </small>
                  </article>
                ))}
              </div>
            ) : null}

            {active.highlights?.length ? (
              <div className="performance-list">
                <h4>Výrazné výkony</h4>
                {active.highlights.map((highlight) => (
                  <article className="performance-row" key={`${highlight.label}-${highlight.name}`}>
                    <span>{highlight.label}</span>
                    <div><strong>{highlight.name}</strong><small>{highlight.detail}</small></div>
                    <strong>
                      {highlight.distanceKm !== undefined
                        ? `${highlight.distanceKm.toLocaleString("sk-SK")} km`
                        : "Účasť"}
                    </strong>
                  </article>
                ))}
              </div>
            ) : null}

            {active.results.length ? (
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
            ) : null}

            <div className="archive-source">
              <p>{active.note}</p>
              {active.sourceUrl ? (
                <a href={active.sourceUrl} target="_blank" rel="noreferrer">
                  {active.sourceLabel ?? "Zobraziť zdroj"} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="empty-results">
            <span className="empty-moon" aria-hidden="true">◐</span>
            <div>
              <strong>Archív čaká na dáta</strong>
              <p>{active.note}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
