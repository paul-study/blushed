import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  const [service, setService] = useState(null);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services onSelect={(name) => setService({ name })} />
        <Gallery />
        <Booking service={service} />
        <Location />
      </main>
      <Footer />
    </>
  );
}
