import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Appointment from './components/Appointment'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[color:var(--page-bg)] text-neutral-900">
      {/* Global subtle noise + vignette */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #000 0, transparent 60%)' }} />

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Appointment />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
