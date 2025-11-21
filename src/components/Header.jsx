import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="ASO" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-tight">ASO Warehouse & Logistic</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Acasă</NavLink>
          <NavLink to="/cerere-camion" className={navLinkClass}>Cere camion</NavLink>
          <NavLink to="/portal-client" className={navLinkClass}>Portal clienți</NavLink>
          <NavLink to="/dispatch-cockpit" className={navLinkClass}>Dispatch Cockpit</NavLink>
          <NavLink to="/agroute-simulator" className={navLinkClass}>Simulator profit</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/40000000000" target="_blank" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a href="tel:+40000000000" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <Phone className="w-4 h-4" />
            Sună acum
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="px-4 py-3 space-y-2 bg-slate-900/95">
            <NavLink to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">Acasă</NavLink>
            <NavLink to="/cerere-camion" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">Cere camion</NavLink>
            <NavLink to="/portal-client" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">Portal clienți</NavLink>
            <NavLink to="/dispatch-cockpit" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">Dispatch Cockpit</NavLink>
            <NavLink to="/agroute-simulator" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">Simulator profit</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
