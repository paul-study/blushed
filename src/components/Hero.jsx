import { useState } from 'react';
import { SITE } from '../data/site';

export default function Hero() {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {logoOk ? (
          <img
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            className="hero-logo"
            onError={() => setLogoOk(false)}
          />
        ) : (
          <div className="hero-logo-placeholder">
            <span className="script">Blushed</span>
            <span className="serif-caps">BY BELLE</span>
          </div>
        )}
        <p className="script tagline">Enhancing your natural beauty</p>
        <p className="intro">
          A boutique beauty studio in {SITE.location} offering nails, facials, dermal needling,
          and lash &amp; brow tinting in a calm, welcoming space.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn btn-primary">Book an Appointment</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </section>
  );
}
