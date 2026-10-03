import { footer, lawyer, nav } from '../content/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerCols">
        <a className="brand" href="#top" aria-label="Biçer Hukuk Bürosu, sayfanın başına dön">
          <span className="brandName">BİÇER</span>
          <span className="brandSub">HUKUK BÜROSU</span>
        </a>
        <nav aria-label="Alt menü">
          <span className="meta">NAVIGATION</span>
          <ul>
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <span className="meta">INFORMATION</span>
          <ul>
            <li>{lawyer.name}</li>
            <li>{lawyer.role}</li>
          </ul>
        </div>
      </div>
      <p className="footerMark" aria-hidden="true">
        BİÇER
      </p>
      <div className="footerBase">
        <p>{footer.copyright}</p>
        <p>{footer.disclaimer}</p>
      </div>
    </footer>
  );
}
