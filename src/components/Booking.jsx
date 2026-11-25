import { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BOOKING_OPTIONS } from '../data/services';
import { SITE } from '../data/site';
import useReveal from '../hooks/useReveal';

const ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`;
const EMPTY = { name: '', email: '', phone: '', service: '', datetime: '', notes: '' };

export default function Booking({ service }) {
  const ref = useReveal();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (service) setForm((f) => ({ ...f, service }));
  }, [service]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('loading');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New booking request from ${form.name}`,
          _template: 'table',
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Service: form.service || 'Not specified',
          'Preferred Date & Time': form.datetime || 'Not specified',
          Notes: form.notes || '-',
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const field = (id, label, input, err) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {input}
      {err && <span className="error-text">{err}</span>}
    </div>
  );

  return (
    <section id="booking" className="section">
      <div className="container narrow reveal" ref={ref}>
        <p className="script accent">Let&apos;s get you glowing</p>
        <h2>Book an Appointment</h2>
        <form className="booking-form" onSubmit={submit} noValidate>
          {field('name', 'Full Name *', <input id="name" value={form.name} onChange={set('name')} required autoComplete="name" />, errors.name)}
          {field('email', 'Email Address *', <input id="email" type="email" value={form.email} onChange={set('email')} required autoComplete="email" />, errors.email)}
          {field('phone', 'Phone Number *', <input id="phone" type="tel" value={form.phone} onChange={set('phone')} required autoComplete="tel" />, errors.phone)}
          {field(
            'service',
            'Service',
            <select id="service" value={form.service} onChange={set('service')}>
              <option value="">Select a service…</option>
              {BOOKING_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>,
          )}
          {field('datetime', 'Preferred Date & Time', <input id="datetime" type="datetime-local" value={form.datetime} onChange={set('datetime')} />)}
          {field('notes', 'Additional Notes / Requests', <textarea id="notes" rows={4} value={form.notes} onChange={set('notes')} />)}
          <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <><Loader2 className="spin" size={18} /> Sending…</> : 'Send Booking Request'}
          </button>
          <p className="fallback">
            Prefer email? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </form>
      </div>
      {status === 'success' && (
        <div className="toast success" role="status" onClick={() => setStatus('idle')}>
          <CheckCircle2 size={20} /> Thank you! Your request has been sent — Belle will be in touch soon.
        </div>
      )}
      {status === 'error' && (
        <div className="toast error" role="alert" onClick={() => setStatus('idle')}>
          <AlertCircle size={20} /> Something went wrong. Please try again or email {SITE.email}.
        </div>
      )}
    </section>
  );
}
