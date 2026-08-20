"use client";

import { useEffect, useState } from "react";

const START = new Date("2026-08-21T18:00:00+02:00").getTime();
const END = new Date("2026-08-22T06:00:00+02:00").getTime();

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (now === null) {
    return (
      <div className="countdown countdown-static" aria-label="Termín podujatia">
        <span>Najbližšia výzva</span>
        <strong>21. augusta 2026 · 18:00</strong>
      </div>
    );
  }

  if (now >= END) {
    return (
      <div className="countdown countdown-static" aria-live="polite">
        <span>Ročník 2026</span>
        <strong>Ďakujeme za spoločnú noc.</strong>
      </div>
    );
  }

  if (now >= START) {
    return (
      <div className="countdown countdown-live" aria-live="polite">
        <span className="live-dot" aria-hidden="true" />
        <strong>Výzva práve prebieha</strong>
        <span>Držíme vám palce až do 06:00.</span>
      </div>
    );
  }

  const difference = START - now;
  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);
  const seconds = Math.floor((difference / 1_000) % 60);
  const units = [
    [days, "dní"],
    [hours, "hod"],
    [minutes, "min"],
    [seconds, "sek"],
  ];

  return (
    <div className="countdown" aria-label="Odpočítavanie do štartu" aria-live="polite">
      <span className="countdown-label">Do štartu zostáva</span>
      <div className="countdown-units">
        {units.map(([value, label]) => (
          <span className="countdown-unit" key={String(label)}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
