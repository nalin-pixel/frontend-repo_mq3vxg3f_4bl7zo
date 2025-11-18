export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #fff, var(--brand-cream))' }} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 border-t" style={{ borderColor: 'var(--brand-gold-200)' }}>
        <div className="grid md:grid-cols-4 gap-8 text-sm text-neutral-700">
          <div>
            <div className="text-2xl font-serif text-neutral-900">DeMillan Salon</div>
            <p className="mt-3">Elegant color and precision care in Fresno, CA.</p>
          </div>
          <div>
            <div className="text-neutral-900 font-semibold">Visit</div>
            <p className="mt-3">66 E Escalon Suite 114<br/>Fresno, California 93710</p>
          </div>
          <div>
            <div className="text-neutral-900 font-semibold">Hours</div>
            <p className="mt-3">Mon–Fri 9–7<br/>Sat 9–4<br/>Sun by appointment</p>
          </div>
          <div>
            <div className="text-neutral-900 font-semibold">Contact</div>
            <p className="mt-3">+1 559-930-5351<br/>hello@demillan.com</p>
            <div className="mt-3">Instagram: @demillan_salon</div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} DeMillan Salon. All rights reserved.</div>
          <nav className="flex gap-6">
            <a href="#about" className="hover:text-neutral-700">About</a>
            <a href="#services" className="hover:text-neutral-700">Services</a>
            <a href="#gallery" className="hover:text-neutral-700">Gallery</a>
            <a href="#appointment" className="hover:text-neutral-700">Book</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
