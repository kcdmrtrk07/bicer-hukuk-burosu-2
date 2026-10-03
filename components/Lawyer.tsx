import { lawyer } from '../content/site';

export default function Lawyer() {
  return (
    <section className="lawyer" id="avukat">
      <div className="lawyerText">
        <div className="lawyerHead">
          <span className="meta">AVUKAT</span>
          <h2 className="lawyerName">{lawyer.name}</h2>
          <p className="lawyerRole">{lawyer.role}</p>
        </div>
        <div className="lawyerBody">
          {lawyer.paragraphs.map((p) => (
            <p className="prose" key={p}>
              {p}
            </p>
          ))}
          {lawyer.details.length > 0 && (
            <dl className="details">
              {lawyer.details.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <div className="lawyerFoot">
          <span>BİÇER HUKUK BÜROSU</span>
          <a className="cta" href="#iletisim">
            İLETİŞİM <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
