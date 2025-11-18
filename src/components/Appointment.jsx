import { motion } from 'framer-motion'

export default function Appointment() {
  return (
    <section id="appointment" className="relative py-24 md:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-pink), var(--brand-cream))' }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl p-10 md:p-16 bg-white/60 backdrop-blur border" style={{ borderColor: 'var(--brand-gold-200)', boxShadow: '0 24px 80px rgba(77,54,42,0.18)'}}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">Book Your Appointment</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">66 E Escalon Suite 114, Fresno, California 93710</p>
              <p className="mt-1 text-neutral-800 font-medium">+1 559-930-5351</p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white" style={{ background: 'var(--brand-brown)', boxShadow: '0 8px 30px rgba(77,54,42,0.25)' }}>
                  Book Now
                </a>
                <a href="tel:+15599305351" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-neutral-800" style={{ border: '1px solid var(--brand-gold-200)' }}>
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl p-6 bg-white/70 border" style={{ borderColor: 'var(--brand-gold-200)' }}>
                <div className="grid grid-cols-2 gap-6 text-sm text-neutral-700">
                  <div>
                    <div className="text-neutral-500">Hours</div>
                    <div className="mt-2">Mon–Fri: 9am – 7pm</div>
                    <div>Sat: 9am – 4pm</div>
                    <div>Sun: By appointment</div>
                  </div>
                  <div>
                    <div className="text-neutral-500">Contact</div>
                    <div className="mt-2">Instagram: @demillan_salon</div>
                    <div>Email: hello@demillan.com</div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-[28px]" style={{ border: '1px solid var(--brand-cream)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
