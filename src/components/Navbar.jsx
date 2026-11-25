import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="wordmark" onClick={close}>{SITE.name}</a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#booking" className="btn btn-primary" onClick={close}>Book Now</a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} strokeWidth={1.25} /> : <Menu size={24} strokeWidth={1.25} />}
        </button>
      </div>
    </header>
  );
}
