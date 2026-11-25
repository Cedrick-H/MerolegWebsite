import { MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { site } from '../data/site.js'

export default function ContactCTA({ onQuote }) {
  return (
    <section id="contact" className="section cta-wrap">
      <div className="container">
        <Reveal>
          <div className="cta">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Tell us what you need. We'll send a clear quote and a timeline within one business day.</p>
            </div>
            <div className="cta__actions">
              <button className="btn btn--dark" onClick={() => onQuote()}>Request a Quote</button>
              <a className="btn btn--white" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello! I have a printing and branding enquiry.')}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp us</a>
              <a className="btn btn--ghost" href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={18} /> {site.phone}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
