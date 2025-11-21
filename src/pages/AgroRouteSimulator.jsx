import Header from '../components/Header'
import Footer from '../components/Footer'
import { useMemo, useState } from 'react'
import { Calculator, Sparkles } from 'lucide-react'

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
  const [rate, setRate] = useState(0.12) // margine netă

  const annualRevenue = useMemo(() => trucks * days * revPerDay, [trucks, days, revPerDay])
  const lostNow = useMemo(() => annualRevenue * (loss/100), [annualRevenue, loss])
  const lostAfter = useMemo(() => annualRevenue * (target/100), [annualRevenue, target])
  const recovered = useMemo(() => lostNow - lostAfter, [lostNow, lostAfter])
  const profitImpact = useMemo(() => recovered * rate, [recovered, rate])
  const paybackMonths = useMemo(() => {
    const monthly = profitImpact / 12
    const projectCostMonthly = 1500 // RON/lună (DEMO)
    if (monthly <= 0) return '—'
    return (projectCostMonthly / monthly).toFixed(1)
  }, [profitImpact])

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
            <div className="mb-4">
              <label className="block text-sm mb-2">Țintă după digitalizare (%) – țintă: {target}%</label>
              <input type="range" min="0" max="30" value={target} onChange={e=>setTarget(Math.min(Number(e.target.value), loss))} className="w-full" />
              <div className="text-xs text-white/50 mt-1">Ținta nu poate depăși valoarea actuală.</div>
            </div>
            <div className="mb-2">
              <label className="block text-sm mb-2">Marjă netă (%)</label>
              <input type="range" min="5" max="25" value={rate*100} onChange={e=>setRate(Number(e.target.value)/100)} className="w-full" />
              <div className="text-xs text-white/60">{Math.round(rate*100)}% marjă netă presupusă</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Stat label="Venit anual estimat" value={currency(annualRevenue)} />
              <Stat label={`Bani pierduți acum (${loss}%)`} value={currency(lostNow)} />
              <Stat label={`După digitalizare (${target}%)`} value={currency(lostAfter)} />
              <Stat label="Diferența – recuperat" value={currency(recovered)} highlight />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Stat label="Impact pe profit (net)" value={currency(profitImpact)} />
              <Stat label="Payback estimat" value={`${paybackMonths} luni`} />
            </div>
            <div className="text-white/80 text-sm">
              Doar prin reducerea pierderii de capacitate de la <strong>{loss}%</strong> la <strong>{target}%</strong> recuperezi aproximativ <strong>{currency(recovered)}</strong> pe an. Cu o marjă netă de <strong>{Math.round(rate*100)}%</strong>, impactul direct în profit este ~ <strong>{currency(profitImpact)}</strong>.
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-semibold"><Calculator className="w-4 h-4"/> Cere o simulare personalizată</a>
              <a href="/cerere-camion" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full font-semibold"><Sparkles className="w-4 h-4"/> Începe cu o cursă pilot</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgroRouteSimulator
