import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Portfolio from '../components/Portfolio.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ContactCTA from '../components/ContactCTA.jsx'

export default function Home({ onQuote }) {
  return (
    <>
      <Hero onQuote={onQuote} />
      <Services onQuote={onQuote} />
      <Portfolio onQuote={onQuote} />
      <WhyUs />
      <Testimonials />
      <ContactCTA onQuote={onQuote} />
    </>
  )
}
