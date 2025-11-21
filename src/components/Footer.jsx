function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-white font-semibold mb-2">ASO Warehouse & Logistic</h4>
          <p className="text-sm">Lungulețu, Dâmbovița, România</p>
          <p className="text-sm">Telefon: +40 000 000 000</p>
          <p className="text-sm">Email: contact@aso-logistic.ro</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Linkuri utile</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/cerere-camion" className="hover:text-white">Cere camion</a></li>
            <li><a href="/portal-client" className="hover:text-white">Portal clienți</a></li>
            <li><a href="/dispatch-cockpit" className="hover:text-white">Dispatch Cockpit</a></li>
            <li><a href="/agroute-simulator" className="hover:text-white">AgroRoute Simulator</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact rapid</h4>
          <div className="flex gap-3">
            <a href="https://wa.me/40000000000" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">WhatsApp</a>
            <a href="tel:+40000000000" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">Sună acum</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        Demo construit de BuiltToScale – sistemul real poate fi conectat la camioane, SMS și contabilitate.
      </div>
    </footer>
  )
}

export default Footer
