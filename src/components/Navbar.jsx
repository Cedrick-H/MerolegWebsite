import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logos/logo-full.svg'
import { navLinks } from '../data/site.js'

export default function Navbar({ onQuote }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" aria-label="Home"><img src={logo} alt="Company logo" /></a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <button className="btn btn--primary nav__cta-mobile" onClick={() => { setOpen(false); onQuote() }}>Request a Quote</button>
        </nav>
        <button className="btn btn--primary nav__cta" onClick={() => onQuote()}>Request a Quote</button>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
