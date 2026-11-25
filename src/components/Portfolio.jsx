import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Modal from './Modal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { categories, projects } from '../data/site.js'
import branding from '../assets/images/branding.jpg'
import printing from '../assets/images/printing.jpg'
import designing from '../assets/images/designing.jpg'

const images = { branding, printing, designing }
const serviceFor = { 'Graphic Design': 'Graphic Design', Printing: 'Commercial Printing', Branding: 'Corporate Branding', Packaging: 'Commercial Printing', Promotional: 'Promotional Products' }

function Thumb({ p }) {
  return (
    <img src={images[p.image]} alt={p.title} loading="lazy"
      style={{ objectPosition: p.origin, transformOrigin: p.origin, '--zoom': p.zoom }} />
  )
}

export default function Portfolio({ onQuote }) {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const list = useMemo(() => (active === 'All' ? projects : projects.filter((p) => p.category === active)), [active])

  return (
    <section id="portfolio" className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects we're proud of" text="A small look at what we've designed, printed and branded for our clients." />
        <div className="filters" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={active === c} className={`chip ${active === c ? 'chip--active' : ''}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>

        <div className="portfolio-grid">
          {list.map((p) => (
            <button key={p.id} className="project" onClick={() => setSelected(p)}>
              <div className="project__img"><Thumb p={p} /></div>
              <div className="project__meta">
                <span>{p.category}</span>
                <h3>{p.title}</h3>
              </div>
              <span className="project__go"><ArrowRight size={18} /></span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title} wide>
        {selected && (
          <div className="project-detail">
            <div className="project-detail__img"><Thumb p={selected} /></div>
            <div className="project-detail__body">
              <span className="eyebrow">{selected.category}</span>
              <h3>{selected.title}</h3>
              <p>{selected.text}</p>
              <button className="btn btn--primary" onClick={() => { const s = serviceFor[selected.category]; setSelected(null); onQuote(s) }}>Start a similar project</button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
