import { media, publications } from '../content/site';

const pad = (n: number) => String(n).padStart(2, '0');

export default function Publications() {
  const [featured, ...rest] = publications.items;

  return (
    <section className="publications" id="yayinlar">
      <header className="pubHead">
        <div>
          <span className="meta">YAYINLAR</span>
          <h2 className="sectionTitle">{publications.title}</h2>
        </div>
        <p className="prose">{publications.intro}</p>
      </header>

      <a className="pubFeatured" href={featured.href}>
        <figure className="frame" data-reveal>
          <img src={media.publications} alt={publications.imageAlt} decoding="async" />
        </figure>
        <div className="pubBody">
          <span className="pubMeta">
            <span className="num">01</span> {featured.kind.toLocaleUpperCase('tr')}
          </span>
          <h3>{featured.title}</h3>
          <p>{featured.text}</p>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </div>
      </a>

      <div className="pubSide">
        {rest.map((item, i) => (
          <a className="pubSmall" href={item.href} key={item.title}>
            <div className="pubBody">
              <span className="pubMeta">
                <span className="num">{pad(i + 2)}</span> {item.kind.toLocaleUpperCase('tr')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
