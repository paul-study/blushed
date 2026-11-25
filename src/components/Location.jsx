import { Mail, MapPin, Clock, AtSign } from 'lucide-react';
import { SITE } from '../data/site';
import useReveal from '../hooks/useReveal';

export default function Location() {
  const ref = useReveal();
  return (
    <section id="location" className="section section-tint">
      <div className="container reveal" ref={ref}>
        <p className="script accent">Come visit us</p>
        <h2>Location</h2>
        <div className="location-grid">
          <iframe
            title="Map of Dunedin, New Zealand"
            className="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Dunedin,+New+Zealand&output=embed"
          />
          <div className="info">
            <p><MapPin size={20} strokeWidth={1.25} /> <span><strong>{SITE.location}</strong><br />{SITE.address}</span></p>
            <div className="hours">
              <Clock size={20} strokeWidth={1.25} />
              <ul>
                {SITE.hours.map(([d, h]) => <li key={d}><span>{d}</span><span>{h}</span></li>)}
              </ul>
            </div>
            <p><Mail size={20} strokeWidth={1.25} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p><AtSign size={20} strokeWidth={1.25} /> <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
