'use client';

import { useState } from 'react';
import { approach, media } from '../content/site';

const pad = (n: number) => String(n).padStart(2, '0');

export default function Approach() {
  const [active, setActive] = useState(0);

  return (
    <section className="approach" id="yaklasim">
      <div className="approachText">
        <span className="meta">YAKLAŞIM</span>
        <h2 className="sectionTitle">{approach.title}</h2>
        <p className="prose">{approach.intro}</p>
        <ol className="approachList">
          {approach.items.map((item, i) => (
            <li key={item.name}>
              <button
                type="button"
                className="approachItem"
                aria-pressed={i === active}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="num">{pad(i + 1)}</span>
                <span className="approachName">{item.name}</span>
                <span className="approachDesc">{item.text}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <figure className="frame approachStage" data-reveal>
        <img src={media.approach} alt={approach.imageAlt} data-focus={active} decoding="async" />
        <figcaption className="approachCount" aria-hidden="true">
          {pad(active + 1)} / {pad(approach.items.length)} &nbsp; {approach.items[active].name.toLocaleUpperCase('tr')}
        </figcaption>
      </figure>
    </section>
  );
}
