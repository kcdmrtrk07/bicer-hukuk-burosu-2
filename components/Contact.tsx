import type { ReactNode } from 'react';
import { contact, media } from '../content/site';

export default function Contact() {
  const rows = [
    contact.address.length > 0 && { label: 'Adres', node: contact.address.map((line) => <span key={line}>{line}</span>) },
    contact.phone && { label: 'Telefon', node: <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a> },
    contact.email && { label: 'E-posta', node: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
    contact.hours && { label: 'Çalışma saatleri', node: contact.hours },
  ].filter(Boolean) as { label: string; node: ReactNode }[];

  return (
    <section className="contact" id="iletisim">
      <figure className="frame contactImage">
        <img src={media.contact} alt={contact.imageAlt} decoding="async" />
      </figure>
      <div className="contactInner">
        <div className="contactLead">
          <span className="meta">İLETİŞİM</span>
          <h2 className="contactTitle">
            {contact.title[0]}
            <br />
            {contact.title[1]}
          </h2>
        </div>
        <div className="contactCard">
          <span className="meta">{contact.firm}</span>
          <p className="contactPerson">{contact.person}</p>
          <p className="lawyerRole">{contact.role}</p>
          {rows.length > 0 && (
            <dl className="details">
              {rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.node}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
