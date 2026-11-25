import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY, GALLERY_CATEGORIES } from '../data/gallery';
import useReveal from '../hooks/useReveal';

function Picture({ item, large }) {
  if (item.src) return <img src={item.src} alt={item.title} loading="lazy" />;
  return (
    <div
      role="img"
      aria-label={item.title}
      className="placeholder-img"
      style={{
        background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
        aspectRatio: large ? '4/3' : item.ratio,
      }}
    >
      <span className="script">{item.title}</span>
    </div>
  );
}

export default function Gallery() {
  const ref = useReveal();
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const items = GALLERY.filter((g) => filter === 'All' || g.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="gallery" className="section section-tint">
      <div className="container reveal" ref={ref}>
        <p className="script accent">Our work</p>
        <h2>Gallery</h2>
        <div className="tabs" role="tablist">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={filter === c ? 'active' : ''}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="masonry">
          {items.map((item) => (
            <button key={item.id} className="masonry-item" onClick={() => setActive(item)} aria-label={`View ${item.title}`}>
              <Picture item={item} />
            </button>
          ))}
        </div>
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
            <X size={28} strokeWidth={1.25} />
          </button>
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            <Picture item={active} large />
            <p>{active.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
