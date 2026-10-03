import { media, process as content } from '../content/site';

const pad = (n: number) => String(n).padStart(2, '0');

export default function Process() {
  return (
    <section className="process" id="surec">
      <header className="processHead">
        <span className="meta">SÜREÇ</span>
        <h2 className="sectionTitle">
          {content.title[0]}
          <br />
          {content.title[1]}
        </h2>
      </header>
      <figure className="frame processFigure" data-reveal>
        <img src={media.process} alt={content.imageAlt} decoding="async" />
      </figure>
      <ol className="processSteps">
        {content.steps.map((step, i) => (
          <li key={step.name}>
            <span className="processNum">{pad(i + 1)}</span>
            <h3>{step.name}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
