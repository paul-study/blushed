export const SERVICES = [
  { id: 'nails', name: 'Nails', icon: 'Sparkles', description: 'Manicures, gel polish, nail art, and enhancements.', price: 'From $—' },
  { id: 'facials', name: 'Facials', icon: 'Flower2', description: 'Customized, rejuvenating skin treatments.', price: 'From $—' },
  { id: 'dermal-needling', name: 'Dermal Needling', icon: 'Droplets', description: 'Collagen-induction therapy for smooth, glowing skin.', price: 'From $—' },
  { id: 'lash-brow', name: 'Lash & Eyebrow Tinting', icon: 'Eye', description: 'Defined, effortless lashes and brows.', price: 'From $—' },
];

export const BOOKING_OPTIONS = [...SERVICES.map((s) => s.name), 'Multiple Services'];
