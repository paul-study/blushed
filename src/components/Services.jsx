import { Sparkles, Flower2, Droplets, Eye } from 'lucide-react';
import { SERVICES } from '../data/services';
import useReveal from '../hooks/useReveal';

const ICONS = { Sparkles, Flower2, Droplets, Eye };

export default function Services({ onSelect }) {
  const ref = useReveal();
  return (
    <section id="services" className="section">
      <div className="container reveal" ref={ref}>
        <p className="script accent">What we offer</p>
        <h2>Services</h2>
        <div className="grid services-grid">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.id} className="card">
                <Icon size={32} strokeWidth={1} />
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <p className="price">{s.price}</p>
                <a href="#booking" className="btn btn-outline" onClick={() => onSelect(s.name)}>
                  Book This Service
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
