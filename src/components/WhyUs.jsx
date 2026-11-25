import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { reasons, stats } from '../data/site.js'
import designing from '../assets/images/designing.jpg'

export default function WhyUs() {
  return (
    <section id="why-us" className="section section--dark">
      <div className="container why">
        <Reveal className="why__visual">
          <img src={designing} alt="Design studio desk with monitor and colour swatches" />
          <div className="why__stats">
            {stats.map((s) => (<div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>))}
          </div>
        </Reveal>
        <div>
          <SectionHeading light eyebrow="Why choose us" title="Craft, speed and care in every job" text="We combine creative design with serious printing capability, so your project looks right and arrives on time." />
          <div className="reasons">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="reason">
                  <div className="reason__icon"><Icon name={r.icon} size={22} /></div>
                  <div><h3>{r.title}</h3><p>{r.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
