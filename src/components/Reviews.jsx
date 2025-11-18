import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Marybell Rodriguez',
    text: 'A very special THANK YOU for doing my hair. I have been getting so many compliments. Sandy is a very talented stylist. Thank you so much for really listening to what I wanted.....you got it just right. By the way, your head massages are the best!'
  },
  {
    name: 'kayla holbrook',
    text: 'Sandy was Great! First time there. Defiantly recommend an appointment but all the stylists have their own business cards right up front. Prices were a little more than I expected but well within the range for what I got done. Would recommend them to friends and family.'
  },
  {
    name: 'Crystal marshall',
    text: 'This place is amazing and the owner is just the sweetest ❤️ she also gives the best scalp massages ever and the only one to ever get my hair exactly how I invisioned it ❤️'
  },
  {
    name: 'Justine Bergman',
    text: 'The only place I trust to touch my hair only place I would recommend she is honest and if you listen to her advice on hair damage and how to keep your hair healthy and beautiful this is the place to go!!!'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--brand-cream), #fff)' }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">Reviews</h2>
          <p className="mt-4 text-neutral-700">Words from our clients, presented with simple, editorial spacing.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.blockquote key={r.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative p-8 rounded-3xl bg-white/70 backdrop-blur border" style={{ borderColor: 'var(--brand-gold-200)' }}>
              <div className="text-neutral-800 leading-relaxed">“{r.text}”</div>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{ background: 'var(--brand-brown)' }}>
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-neutral-700">{r.name}</div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
