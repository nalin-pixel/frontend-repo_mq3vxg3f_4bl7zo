import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background:
        'radial-gradient(600px 300px at 10% 10%, rgba(234,217,209,0.5), transparent 70%), radial-gradient(400px 200px at 90% 20%, rgba(255,255,255,0.5), transparent 70%)' }} />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(77,54,42,0.18)', border: '1px solid var(--brand-gold-200)' }}>
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" alt="Artist at work" className="w-full h-[520px] object-cover" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">About DeMillan</h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            DeMillan Salon specializes in luminous color and healthy hair. Our craft blends editorial precision with a soft, romantic finish for a look that feels effortless and refined.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              'Balayage & Ombres',
              'Highlights',
              'Precision Color',
              'Color Correction',
              'Brazilian Blowouts',
              'Haircuts',
              'Bellami Extensions',
              'Nails'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--brand-pink)' }} />
                <span className="text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-white/70 backdrop-blur" style={{ border: '1px solid var(--brand-gold-200)' }}>
            <p className="text-neutral-700">
              Specialists in Balayage, Ombres, Highlights, Precision Color, Color Correction, Brazilian Blowouts, Haircuts, Bellami Hair Extensions, and Nails—with a focus on healthy hair and seamless blends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
