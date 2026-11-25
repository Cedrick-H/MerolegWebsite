import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Trusted by businesses that care how they look" />
        <div className="cards-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="testimonial">
                <Quote size={28} className="testimonial__q" />
                <div className="stars">{[0, 1, 2, 3, 4].map((n) => <Star key={n} size={16} fill="currentColor" />)}</div>
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <span className="avatar">{t.name.split(' ').map((w) => w[0]).join('')}</span>
                  <span><strong>{t.name}</strong><small>{t.role}</small></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
