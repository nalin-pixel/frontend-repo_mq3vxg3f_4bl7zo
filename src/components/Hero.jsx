import { motion } from 'framer-motion'

const brand = {
  pink: 'var(--brand-pink)',
  cream: 'var(--brand-cream)',
  gold: 'var(--brand-gold)',
  brown: 'var(--brand-brown)'
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient using brand tones */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(234,217,209,0.6),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif text-neutral-900 tracking-tight leading-tight"
          >
            Fall in Love with Your Hair
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-neutral-700 text-lg leading-relaxed max-w-xl font-light"
          >
            DeMillan Salon crafts effortless, luminous color and precision finishes. Elegant blonding, seamless blends, and healthy hair—always.
          </motion.p>

          {/* Micro details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-700"
          >
            <div className="pr-6 border-r border-[color:var(--brand-gold-200)]/50">
              <div className="font-semibold text-neutral-900">12+ years</div>
              <div className="opacity-70">crafting color</div>
            </div>
            <div className="pr-6 border-r border-[color:var(--brand-gold-200)]/50">
              <div className="font-semibold text-neutral-900">2,000+</div>
              <div className="opacity-70">happy clients</div>
            </div>
            <div>
              <div className="font-semibold text-neutral-900">Premium care</div>
              <div className="opacity-70">healthy, glossy results</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#appointment" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(234,217,209,0.5)]" style={{ background: 'var(--brand-pink)', boxShadow: '0 8px 24px rgba(119,86,70,0.18), inset 0 1px 0 rgba(255,255,255,0.3)' }}>
              Book an Appointment
            </a>
            <a href="#services" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-neutral-800" style={{ border: '1px solid var(--brand-gold-200)' }}>
              Explore services
            </a>
          </motion.div>
        </div>

        {/* Image framed in arch/circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Arch frame */}
            <div className="relative rounded-t-[160px] rounded-b-[24px] overflow-hidden" style={{ border: '1px solid var(--brand-gold-200)', boxShadow: '0 12px 40px rgba(77,54,42,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="DeMillan Salon"
                className="h-[520px] w-full object-cover"
              />
            </div>
            {/* Thin halo */}
            <div className="absolute -inset-3 rounded-t-[172px] rounded-b-[32px]" style={{ border: '1px solid var(--brand-cream)', opacity: 0.6 }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
