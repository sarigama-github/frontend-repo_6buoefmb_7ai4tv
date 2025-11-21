import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useMemo, useState } from 'react'

function Stat({ label, value, highlight }) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' : 'bg-white/5 border-white/10 text-white'}`}>
      <div className="text-sm text-white/70">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}

function currency(n) {
  return new Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'RON', maximumFractionDigits: 0 }).format(n)
}

function AgroRouteSimulator() {
  const [trucks, setTrucks] = useState(5)
  const [days, setDays] = useState(250)
  const [revPerDay, setRevPerDay] = useState(2750)
  const [loss, setLoss] = useState(15)
  const [target, setTarget] = useState(10)

  const annualRevenue = useMemo(() => trucks * days * revPerDay, [trucks, days, revPerDay])
  const lostNow = useMemo(() => annualRevenue * (loss/100), [annualRevenue, loss])
  const lostAfter = useMemo(() => annualRevenue * (target/100), [annualRevenue, target])
  const recovered = useMemo(() => lostNow - lostAfter, [lostNow, lostAfter])

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Câți bani pierzi pe drum în fiecare an?</h1>
          <p className="text-white/70">Joacă-te cu slider-ele și vezi ce înseamnă 5–15% capacitate pierdută pentru flota ta.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="mb-4">
              <label className="block text-sm mb-2">Număr camioane: {trucks}</label>
              <input type="range" min="1" max="10" value={trucks} onChange={e=>setTrucks(Number(e.target.value))} className="w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Zile lucrătoare / an</label>
              <input type="number" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10" value={days} onChange={e=>setDays(Number(e.target.value))} />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Venit mediu / camion / zi (RON)</label>
              <input type="number" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10" value={revPerDay} onChange={e=>setRevPerDay(Number(e.target.value))} />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Capacitate pierdută (%) – acum: {loss}%</label>
              <input type="range" min="0" max="30" value={loss} onChange={e=>setLoss(Number(e.target.value))} className="w-full" />
            </div>
            <div>
              <label className="block text-sm mb-2">Țintă după digitalizare (%) – țintă: {target}%</label>
              <input type="range" min="0" max="loss" value={target} onChange={e=>setTarget(Math.min(Number(e.target.value), loss))} className="w-full" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Stat label="Venit anual estimat" value={currency(annualRevenue)} />
              <Stat label={`Bani pierduți acum (${loss}%)`} value={currency(lostNow)} />
              <Stat label={`După digitalizare (${target}%)`} value={currency(lostAfter)} />
              <Stat label="Diferența – recuperat" value={currency(recovered)} highlight />
            </div>
            <div className="text-white/80 text-sm">
              Doar prin reducerea pierderii de capacitate de la <strong>{loss}%</strong> la <strong>{target}%</strong> recuperezi aproximativ <strong>{currency(recovered)}</strong> pe an. Proiectul nostru digital costă o fracțiune din asta.
            </div>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-semibold">Programează un call de 30 minute</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgroRouteSimulator
