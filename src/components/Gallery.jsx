import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516822791620-8dda3d74f885?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px_300px_at_20%_0%, rgba(234,217,209,0.45), transparent_70%)' }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">Gallery</h2>
          <p className="mt-4 text-neutral-700">Transformations and signature finishes captured in soft, natural light.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-3xl overflow-hidden bg-white/70 border" style={{ borderColor: 'var(--brand-gold-200)', boxShadow: '0 16px 40px rgba(77,54,42,0.12)'}}>
              <img src={src} alt="DeMillan work" className="h-64 w-full object-cover" />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition" style={{ background: 'linear-gradient(to top, rgba(234,217,209,0.45), rgba(255,255,255,0))' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
