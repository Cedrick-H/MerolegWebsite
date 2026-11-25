import { useCallback, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import QuoteModal from './components/QuoteModal.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const [quote, setQuote] = useState({ open: false, service: '' })
  const openQuote = useCallback((service = '') => setQuote({ open: true, service: typeof service === 'string' ? service : '' }), [])
  const closeQuote = useCallback(() => setQuote((q) => ({ ...q, open: false })), [])

  return (
    <>
      <Navbar onQuote={openQuote} />
      <main><Home onQuote={openQuote} /></main>
      <Footer />
      <QuoteModal open={quote.open} service={quote.service} onClose={closeQuote} />
    </>
  )
}
