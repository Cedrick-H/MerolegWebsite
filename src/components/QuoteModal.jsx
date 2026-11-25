import { useEffect, useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import Modal from './Modal.jsx'
import { site, services } from '../data/site.js'

const empty = { name: '', email: '', phone: '', service: '', details: '' }
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!emailRx.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.details.trim().length < 10) e.details = 'Tell us a little more (at least 10 characters).'
  return e
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? 'field--error' : ''}`}>
      <span>{label}</span>
      {children}
      {error && <em role="alert">{error}</em>}
    </label>
  )
}

export default function QuoteModal({ open, service, onClose }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (open) { setValues({ ...empty, service: service || '' }); setErrors({}); setSent(false) }
  }, [open, service])

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value }
    setValues(next)
    if (errors[k]) setErrors({ ...errors, [k]: validate(next)[k] })
  }

  const waLink = () => {
    const msg = `Hello! I'd like a quotation.\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\nDetails: ${values.details}`
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return
    setSent(true)
    window.open(waLink(), '_blank', 'noopener,noreferrer')
  }

  return (
    <Modal open={open} onClose={onClose} title="Request a quote">
      {sent ? (
        <div className="quote-done">
          <CheckCircle2 size={48} />
          <h3>Thank you, {values.name.split(' ')[0]}!</h3>
          <p>Your request has been prepared in WhatsApp. If it didn't open, tap the button below to send it to us.</p>
          <a className="btn btn--primary" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Open WhatsApp</a>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="quote-form">
          <h3>Request a Quote</h3>
          <p className="quote-form__lead">Tell us about your project and we'll reply within one business day.</p>
          <div className="grid-2">
            <Field error={errors.name} label="Full name"><input value={values.name} onChange={set('name')} placeholder="Jane Doe" autoComplete="name" /></Field>
            <Field error={errors.phone} label="Phone"><input value={values.phone} onChange={set('phone')} placeholder="+250 7xx xxx xxx" autoComplete="tel" /></Field>
          </div>
          <Field error={errors.email} label="Email"><input type="email" value={values.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" /></Field>
          <Field error={errors.service} label="Service needed">
            <select value={values.service} onChange={set('service')}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </Field>
          <Field error={errors.details} label="Project details"><textarea rows="4" value={values.details} onChange={set('details')} placeholder="Quantity, size, deadline, anything that helps us quote accurately." /></Field>
          <button className="btn btn--primary btn--block" type="submit">Send via WhatsApp</button>
        </form>
      )}
    </Modal>
  )
}
