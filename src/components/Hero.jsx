import { ArrowRight, Palette, Printer, Shirt } from 'lucide-react'
import printing from '../assets/images/printing.jpg'
import designing from '../assets/images/designing.jpg'
import Reveal from './Reveal.jsx'

export default function Hero({ onQuote }) {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal><span className="eyebrow">Printing House &amp; Branding Studio</span></Reveal>
          <Reveal delay={80}>
            <h1>We Design.<br />We Print.<br /><span className="accent">We Brand.</span></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero__lead">From the first sketch to the final delivery, we turn your ideas into striking print, memorable brands and products people love to hold.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__actions">
              <a href="#services" className="btn btn--dark">Explore Our Services <ArrowRight size={18} /></a>
              <button className="btn btn--outline" onClick={() => onQuote()}>Request a Quote</button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero__visual">
          <div className="hero__img hero__img--main"><img src={printing} alt="Large-format press printing colourful posters" /></div>
          <div className="hero__img hero__img--small"><img src={designing} alt="Designer working on a layout" /></div>
          <div className="hero__badge"><strong>1,500+</strong><span>projects delivered</span></div>
          <span className="hero__block hero__block--a" /><span className="hero__block hero__block--b" />
        </Reveal>
      </div>

      <div className="strip">
        <div className="container strip__inner">
          <span><Palette size={18} /> Graphic Design</span>
          <span><Printer size={18} /> Commercial Printing</span>
          <span><Palette size={18} /> Corporate Branding</span>
          <span><Shirt size={18} /> Promotional Products</span>
        </div>
      </div>
    </section>
  )
}
