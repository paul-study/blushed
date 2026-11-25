import { NAV_LINKS, SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="script footer-brand">{SITE.name}</p>
        <nav aria-label="Footer">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <p className="copy">© {SITE.name} — {SITE.location}</p>
      </div>
    </footer>
  );
}
