import { buro, media } from '../content/site';

export default function Buro() {
  return (
    <section className="buro" id="buro">
      <div className="buroText">
        <div>
          <span className="meta">BÜRO</span>
          <h2 className="sectionTitle">{buro.title}</h2>
          {buro.paragraphs.map((p) => (
            <p className="prose" key={p}>
              {p}
            </p>
          ))}
        </div>
        <ul className="buroNotes" aria-hidden="true">
          {buro.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
      <figure className="frame buroFigure" data-reveal>
        <img src={media.buro} alt={buro.imageAlt} decoding="async" />
      </figure>
    </section>
  );
}
