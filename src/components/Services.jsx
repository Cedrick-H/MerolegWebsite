import { ArrowUpRight } from 'lucide-react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/site.js'

export default function Services({ onQuote }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading eyebrow="What we do" title="Everything your brand needs, under one roof" text="Four disciplines, one team. Pick one service or let us run the whole project." />
        <div className="cards-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="service-card">
                <div className="service-card__icon"><Icon name={s.icon} size={28} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <button className="link-arrow" onClick={() => onQuote(s.title)}>Get a quote <ArrowUpRight size={16} /></button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
