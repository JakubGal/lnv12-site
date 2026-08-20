import { Countdown } from "./components/Countdown";
import { ResultsArchive } from "./components/ResultsArchive";
import { FACEBOOK_GROUP_URL, FACEBOOK_URL, PHOTO_ALBUMS, REGISTRATION_URL, RESULT_YEARS } from "./data";

const openNewTab = { target: "_blank", rel: "noreferrer" } as const;

export default function Home() {
  return (
    <main>
      <section className="hero" id="domov">
        <nav className="nav shell" aria-label="Hlavná navigácia">
          <a className="brand" href="#domov" aria-label="LNV12 – domov">
            <span className="brand-mark">12</span>
            <span className="brand-copy">
              <strong>LNV</strong>
              <small>Ludanická nočná výzva</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#o-vyzve">O výzve</a>
            <a href="#vysledky">Výsledky</a>
            <a href="#galeria">Galéria</a>
            <a href="#otazky">Otázky</a>
          </div>
          <a className="nav-cta" href={REGISTRATION_URL} {...openNewTab}>
            Registrovať sa
          </a>
        </nav>

        <nav className="mobile-nav shell" aria-label="Mobilná navigácia">
          <a href="#o-vyzve">O výzve</a>
          <a href="#vysledky">Výsledky</a>
          <a href="#galeria">Galéria</a>
          <a href="#otazky">Otázky</a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">21. – 22. augusta 2026 · Ludanice</p>
            <h1>
              Dvanásť hodín.<br />
              <span>Tvoj rytmus.</span><br />
              Jedna noc.
            </h1>
            <p className="hero-slogan"><span>Každý krok</span> píše príbeh.</p>
            <p className="lede">
              Nie je to závod. Je to spoločná noc pre rodiny, partie aj jednotlivcov.
              Bež alebo kráčaj a prejdi toľko kilometrov, koľko chceš a dokážeš.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={REGISTRATION_URL} {...openNewTab}>
                Chcem sa zúčastniť <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost" href="#o-vyzve">
                Ako to funguje <span aria-hidden="true">↓</span>
              </a>
            </div>
            <Countdown />
          </div>

          <div className="poster-wrap">
            <div className="poster-glow" />
            <img src="/lnv12-2026-poster.webp" alt="Plagát LNV12 2026 s bežcami pod nočnou oblohou" />
            <div className="poster-note">
              <span>Štartovné</span>
              <strong>dobrovoľné</strong>
            </div>
          </div>
        </div>

        <div className="event-strip shell" aria-label="Základné informácie o podujatí">
          <div><span>Štart</span><strong>18:00</strong></div>
          <div><span>Koniec</span><strong>06:00</strong></div>
          <div><span>Trvanie</span><strong>12 hodín</strong></div>
          <div><span>Miesto</span><strong>Ludanice</strong></div>
        </div>
      </section>

      <section className="manifesto section" id="o-vyzve">
        <div className="shell manifesto-grid">
          <div className="section-heading">
            <p className="section-kicker">O výzve</p>
            <h2>Nejde o prvé miesto.<br />Ide o ďalší krok.</h2>
          </div>
          <div className="manifesto-copy">
            <p className="manifesto-lede">
              LNV12 spája rodiny, partie aj jednotlivcov — od najmenších po
              najstarších — v jednej spoločnej nočnej výzve.
            </p>
            <p>
              Tempo, vzdialenosť aj prestávky sú na tebe. Individuálny štart a koniec,
              tma nad Ludanicami a výhľady smerom na Tribeč a Považský Inovec robia z
              každej účasti osobný príbeh.
            </p>
          </div>
        </div>

        <div className="shell steps-grid">
          <article className="step-card">
            <span>01</span><div className="step-icon" aria-hidden="true">●</div>
            <h3>Vyraz</h3><p>Príď s vlastným cieľom. Nemusíš nič dokazovať ostatným.</p>
          </article>
          <article className="step-card featured">
            <span>02</span><div className="step-icon" aria-hidden="true">→</div>
            <h3>Choď svojím tempom</h3><p>Bež, kráčaj, oddychuj. Zbieraj kilometre po svojom.</p>
          </article>
          <article className="step-card">
            <span>03</span><div className="step-icon" aria-hidden="true">◎</div>
            <h3>Vráť sa s príbehom</h3><p>Ráno nie je dôležité poradie, ale zážitok, ktorý zostane.</p>
          </article>
        </div>
      </section>

      <section className="night-route section">
        <div className="route-art" aria-hidden="true">
          <span className="route-moon">◐</span>
          <span className="route-line line-one" />
          <span className="route-line line-two" />
          <span className="route-dot dot-one" />
          <span className="route-dot dot-two" />
          <span className="route-dot dot-three" />
        </div>
        <div className="shell route-grid">
          <div>
            <p className="section-kicker">Jedna noc · mnoho ciest</p>
            <h2>Od súmraku<br />až do rána.</h2>
          </div>
          <div className="timeline" aria-label="Časový priebeh podujatia">
            <div className="timeline-row active"><time>18:00</time><div><strong>Spoločný začiatok</strong><p>Začíname v Ludaniciach.</p></div></div>
            <div className="timeline-row"><time>Noc</time><div><strong>Tvoja vlastná výzva</strong><p>Beh, turistika, prestávky a kilometre podľa seba.</p></div></div>
            <div className="timeline-row"><time>06:00</time><div><strong>Ranný koniec</strong><p>Dvanásť hodín uzavrieme opäť v Ludaniciach.</p></div></div>
          </div>
        </div>
      </section>

      <section className="results section" id="vysledky">
        <div className="shell">
          <div className="results-intro">
            <div className="section-heading dark-heading">
              <p className="section-kicker">Výsledky a história</p>
              <h2>Kilometre, ktoré<br />si zaslúžia pamäť.</h2>
            </div>
          <p>
              Tu budú žiť overené štatistiky, výrazné výkony aj výsledky z jednotlivých
              ročníkov. Vyber si rok a pozri jeho archív.
          </p>
          </div>
          <ResultsArchive years={RESULT_YEARS} />
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <div className="shell gallery-heading">
          <div className="section-heading">
            <p className="section-kicker">Fotogaléria</p>
            <h2>Noci, na ktoré<br />sa nezabúda.</h2>
          </div>
          <p>Fotografie budeme ukladať podľa ročníkov, aby sa k nim dalo kedykoľvek vrátiť.</p>
        </div>

        <div className="shell trail-feature">
          <div className="trail-copy">
            <span>Trať 2026</span>
            <h3>Pozri si trasu tohtoročnej výzvy.</h3>
            <p>Krátke video z trate ti ukáže, čo ťa čaká medzi Ludanicami a nočnou krajinou.</p>
          </div>
          <video controls preload="metadata" poster="/lnv12-2026-poster.webp">
            <source src="/media/lnv12-trail-2026.mp4" type="video/mp4" />
            Tvoj prehliadač nepodporuje prehrávanie videa.
          </video>
        </div>

        <div className="shell gallery-grid">
          <article className="gallery-card gallery-card-image">
            <img src="/lnv12-2026-poster.webp" alt="Plagát Ludanickej nočnej výzvy 2026" />
            <div className="gallery-overlay"><span>Aktuálny ročník</span><h3>2026</h3><p>Plagát, informácie a video trate</p></div>
          </article>
          <a className="gallery-card gallery-card-image gallery-card-link" href={PHOTO_ALBUMS["2025"]} aria-label="Otvoriť fotogalériu LNV12 2025 v Google Fotkách" {...openNewTab}>
            <img src="/lnv12-2025-poster.png" alt="Plagát Ludanickej nočnej výzvy 2025" />
            <div className="gallery-overlay"><span>Google Fotky</span><h3>2025</h3><p>Otvoriť celý album ↗</p></div>
          </a>
          <a className="gallery-card gallery-card-image gallery-card-link" href={PHOTO_ALBUMS["2024"]} aria-label="Otvoriť fotogalériu LNV12 2024 v Google Fotkách" {...openNewTab}>
            <img src="/lnv12-2024-poster.png" alt="Plagát Ludanickej nočnej výzvy 2024" />
            <div className="gallery-overlay"><span>Google Fotky</span><h3>2024</h3><p>Otvoriť celý album ↗</p></div>
          </a>
        </div>
        <div className="shell gallery-cta">
          <p>Ďalšie fotografie, výsledky a príbehy nájdeš v skupine Bežci spod Tribeča.</p>
          <a href={FACEBOOK_GROUP_URL} {...openNewTab}>Otvoriť Facebook skupinu <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="faq section" id="otazky">
        <div className="shell faq-grid">
          <div className="section-heading">
            <p className="section-kicker">Praktické informácie</p>
            <h2>Dobré vedieť<br />pred štartom.</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Musím ísť celých 12 hodín?<span>＋</span></summary>
              <p>Nie. Čas, vzdialenosť aj prestávky si určuješ sám alebo sama.</p>
            </details>
            <details>
              <summary>Je to bežecký pretek?<span>＋</span></summary>
              <p>Nie. LNV12 je osobná výzva pre beh aj turistiku. Rebríček je spomienkou na výkony, nie podmienkou účasti.</p>
            </details>
            <details>
              <summary>Koľko stojí štartovné?<span>＋</span></summary>
              <p>Štartovné je dobrovoľné.</p>
            </details>
            <details>
              <summary>Čo si mám priniesť?<span>＋</span></summary>
              <p>Čelovku, reflexné prvky, nabitý telefón, vodu, jedlo a oblečenie primerané nočnému počasiu.</p>
            </details>
            <details>
              <summary>Kde nájdem aktuálne oznamy?<span>＋</span></summary>
              <p>Organizačné novinky priebežne zverejňujeme na Facebooku a dôležité informácie pridáme aj sem.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="shell final-cta-inner">
          <div>
            <p className="section-kicker">21. augusta 2026 · 18:00</p>
            <h2>Stretni sa<br />s nocou.</h2>
          </div>
          <div>
            <p>Registrácia je otvorená. Vyplň krátky formulár a priprav sa na svoju dvanásťhodinovú výzvu.</p>
            <a className="button button-primary" href={REGISTRATION_URL} {...openNewTab}>
              Registrovať sa <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand" href="#domov" aria-label="LNV12 – späť hore">
            <span className="brand-mark">12</span><span className="brand-copy"><strong>LNV</strong><small>Ludanická nočná výzva</small></span>
          </a>
          <p>Beh · turistika · noc · Ludanice</p>
          <div className="footer-links">
            <a href={FACEBOOK_URL} {...openNewTab}>Facebook ↗</a>
            <a href={FACEBOOK_GROUP_URL} {...openNewTab}>Skupina ↗</a>
            <a href="#domov">Späť hore ↑</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 LNV12</span><span>Vytvorené pre komunitu v Ludaniciach.</span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Rýchle mobilné akcie">
        <a href="#vysledky">Výsledky</a>
        <a href={REGISTRATION_URL} {...openNewTab}>Registrovať sa <span aria-hidden="true">↗</span></a>
      </nav>
    </main>
  );
}
