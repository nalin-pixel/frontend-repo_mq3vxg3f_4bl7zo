import { Palette, Scissors, Brush, Sparkles, Waves, Hand } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Balayage & Ombres',
    desc: 'Hand-painted dimension with airy, seamless blends and luminous tone.',
    icon: Brush
  },
  {
    title: 'Highlights',
    desc: 'Foiled precision and lived-in brightness tailored to your complexion.',
    icon: Sparkles
  },
  {
    title: 'Color & Correction',
    desc: 'Precision color mapping and transformative correction with care-first formulas.',
    icon: Palette
  },
  {
    title: 'Brazilian Blowout',
    desc: 'Smooth, glossy control with frizz reduction and effortless styling.',
    icon: Waves
  },
  {
    title: 'Bellami Extensions',
    desc: 'Premium length and fullness with custom color matching and blending.',
    icon: Scissors
  },
  {
    title: 'Nails',
    desc: 'Minimal, refined nail artistry with a clean, natural aesthetic.',
    icon: Hand
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px_300px_at_80%_10%, rgba(234,217,209,0.45), transparent_70%)' }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">Services</h2>
          <p className="mt-4 text-neutral-700">A curated menu focused on healthy hair, luxury finishes, and enduring style.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl p-6 bg-white/80 backdrop-blur border" style={{ borderColor: 'var(--brand-gold-200)', boxShadow: '0 12px 40px rgba(77,54,42,0.08)'}}>
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(234,217,209,0.6), rgba(255,255,255,0.8))', border: '1px solid var(--brand-gold-200)' }}>
                  <Icon className="w-5 h-5 text-neutral-800" />
                </div>
                <div className="w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition" style={{ background: 'var(--brand-pink)' }} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
