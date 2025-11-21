import Header from '../components/Header'
import Footer from '../components/Footer'
import { Truck, PhoneCall, TrendingDown, MapPin } from 'lucide-react'
import { useState } from 'react'

function KPI({ label, value, sub, good }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="text-sm text-white/70">{label}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {sub && <div className={`text-xs mt-1 ${good ? 'text-emerald-300' : 'text-orange-300'}`}>{sub}</div>}
    </div>
  )
}

function JobCard({ j, onClick }) {
  return (
    <div onClick={onClick} className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 cursor-pointer">
      <div className="text-white font-medium">{j.route}</div>
      <div className="text-white/70 text-xs">{j.cargo} • {j.client}</div>
      <div className="text-white/60 text-xs mt-1">Plecare {j.start} • ETA {j.eta}</div>
      <div className="text-white/60 text-[11px] mt-1 inline-flex items-center gap-1"><Truck className="w-3 h-3"/> {j.truck}</div>
    </div>
  )
}

function DispatchCockpit() {
  const [selected, setSelected] = useState(null)
  const board = {
    pending:[{route:'L → B', cargo:'Cartofi 20 t', client:'Depozit X', start:'08:00', eta:'11:15', truck:'TRK-01'}],
    planned:[{route:'L → Pitești', cargo:'Varză 18 t', client:'Depozit Y', start:'09:00', eta:'11:00', truck:'TRK-03'}],
    running:[{route:'B → Târgoviște', cargo:'Marfă generală', client:'Client Z', start:'07:30', eta:'09:00', truck:'TRK-02'}],
    done:[{route:'L → B', cargo:'Morcovi 22 t', client:'Depozit X', start:'06:00', eta:'08:30', truck:'TRK-05'}],
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Dispatch Cockpit (DEMO intern)</h1>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Doar pentru dispecer / administrator</span>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-6">
          <div>
            <h2 className="font-semibold mb-3">Today at a glance</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <KPI label="Curse de azi" value="7" />
              <KPI label="Camioane active" value="5 / 5" />
              <KPI label="Apeluri status" value="3" sub="↓ 40% vs. luna trecută" good />
              <KPI label="Km pe gol estimați azi" value="40 km" />
            </div>
            <div className="text-xs text-white/60">Obiectiv: reducere apeluri status cu 50% în 90 de zile</div>

            {/* Mock map */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-white/70 text-sm mb-2">Hartă simplificată</div>
              <div className="relative h-40 bg-slate-900 rounded-lg">
                <div className="absolute left-6 top-8 text-xs text-white/70 flex items-center gap-1"><MapPin className="w-3 h-3"/> Lungulețu</div>
                <div className="absolute left-40 bottom-6 text-xs text-white/70 flex items-center gap-1"><MapPin className="w-3 h-3"/> București</div>
                <div className="absolute right-6 top-10 text-xs text-white/70 flex items-center gap-1"><MapPin className="w-3 h-3"/> Pitești</div>
                <div className="absolute left-14 top-16 right-32 h-1 bg-white/10 rounded-full">
                  <div className="absolute left-1/2 -top-2 inline-flex items-center gap-1 text-[10px] text-emerald-300"><Truck className="w-3 h-3"/> În tranzit</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Board curse – azi</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                ['De confirmat','pending'],
                ['Planificat','planned'],
                ['În derulare','running'],
                ['Finalizat','done'],
              ].map(([title, key]) => (
                <div key={key} className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-white/80 text-sm mb-2">{title}</div>
                  <div className="space-y-2 min-h-[120px]">
                    {board[key].map((j,i)=>(
                      <JobCard key={i} j={j} onClick={()=>setSelected(j)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {selected && (
              <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">Detalii cursă – {selected.route}</div>
                  <button onClick={()=>setSelected(null)} className="text-white/60">Închide</button>
                </div>
                <div className="text-sm text-white/80 space-y-2">
                  <div>Client: {selected.client} • Camion: {selected.truck}</div>
                  <div>Timeline: Confirmat → Încărcat → În tranzit → Livrat</div>
                  <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm"><PhoneCall className="w-4 h-4"/> Trimite update client (DEMO)</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DispatchCockpit
