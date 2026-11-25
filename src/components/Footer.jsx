import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import mark from '../assets/logos/logo-mark.svg'
import { navLinks, services, site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img src={mark} alt="" className="footer__mark" />
          <p className="footer__about">Graphic design, commercial printing, corporate branding and promotional products, all under one roof.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>{navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{services.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><Phone size={16} /><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
            <li><Mail size={16} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><MapPin size={16} />{site.address}</li>
            <li><Clock size={16} />{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer__bar container">
        <span>© {new Date().getFullYear()} All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
