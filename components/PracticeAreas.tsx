'use client';

import { useState } from 'react';
import { areas, media } from '../content/site';

const pad = (n: number) => String(n).padStart(2, '0');

export default function PracticeAreas() {
  const [active, setActive] = useState(-1);
  const shown = active >= 0;
  return (
    <section className="areas" id="calisma-alanlari">
      <div className="areasMain">
        <header className="areasHead">
          <div>
            <span className="meta">ÇALIŞMA ALANLARI</span>
            <h2 className="sectionTitle">{areas.title}</h2>
          </div>
          <p className="prose">{areas.intro}</p>
        </header>

        <ol className="areasIndex" onMouseLeave={() => setActive(-1)}>
          {areas.items.map((item, i) => (
            <li key={item.name}>
              <a
                href="#iletisim"
                className="areaRow"
                data-active={i === active}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(-1)}
              >
                <span className="num">{pad(i + 1)}</span>
                <span className="areaName">{item.name}</span>
                <span className="areaDesc">{item.text}</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <figure className="frame areasFigure" data-show={shown}>
        <img src={media.areas} alt={areas.imageAlt} decoding="async" />
        <figcaption aria-hidden="true">
          {shown && (
            <>
              <span className="num">{pad(active + 1)}</span>
              <span className="areasCaption">{areas.items[active].name}</span>
            </>
          )}
        </figcaption>
      </figure>
    </section>
  );
}
