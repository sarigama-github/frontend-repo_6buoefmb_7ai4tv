import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FileDown, LogOut, FileText, Clock, CheckCircle2 } from 'lucide-react'

function Badge({ children, color }) {
  const map = {
    gray:'bg-white/10 text-white/70',
    blue:'bg-blue-500/20 text-blue-300',
    green:'bg-emerald-500/20 text-emerald-300',
    dark:'bg-emerald-700/20 text-emerald-400'
  }
  return <span className={`px-2 py-0.5 rounded-full text-xs ${map[color]}`}>{children}</span>
}

function CardCurse({ item, onClick }) {
  return (
    <div onClick={onClick} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 cursor-pointer">
      <div className="flex items-center justify-between text-white">
        <div className="font-semibold">{item.ruta}</div>
        <Badge color={item.badge.color}>{item.badge.text}</Badge>
      </div>
      <div className="text-white/70 text-sm mt-1">Încărcare: {item.incarcare} | ETA: {item.eta}</div>
      <div className="text-white/80 text-sm mt-2 flex items-center gap-4">
        <span>Marfă: {item.marfa}</span>
        <span>Șofer: {item.sofer}</span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
        <span className="text-emerald-300">●</span> Confirmat
        <span className="text-emerald-300">●</span> Încărcat
        <span className="text-emerald-300">●</span> În tranzit
        <span className="text-white/50">○</span> Livrat
      </div>
      <div className="mt-2 text-[11px] text-white/60">Apeluri pentru status: 0 azi</div>
    </div>
  )
}

function PortalClient() {
  const [tab, setTab] = useState('active')
  const [panel, setPanel] = useState(null)

  const active = [
    {ruta:'Lungulețu → București (Depozit X)', badge:{text:'În tranzit', color:'green'}, incarcare:'27 nov, 08:30', eta:'27 nov, 11:15', marfa:'Cartofi (22 t)', sofer:'I. Popescu'},
    {ruta:'Lungulețu → Pitești (Depozit Y)', badge:{text:'Încărcat', color:'blue'}, incarcare:'27 nov, 07:45', eta:'27 nov, 10:00', marfa:'Varză (18 t)', sofer:'M. Ionescu'},
  ]

  const istor = [
    ['12.11.2025','Lungulețu → București','Cartofi 20 t','Livrat','Fără incidente'],
    ['05.11.2025','Lungulețu → Pitești','Varză 18 t','Livrat','Întârziere 30 min'],
  ]

  const docs = [
    ['CMR – 12.11.2025 – L → B','PDF'],
    ['Factură – 12.11.2025 – 4.500 RON','PDF'],
  ]

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-[220px,1fr] gap-6">
        <aside className="hidden md:block">
          <div className="text-white/60 text-xs mb-2">Portal clienți (DEMO) • Depozit legume București</div>
          <nav className="space-y-2">
            <button onClick={()=>setTab('active')} className={`w-full text-left px-3 py-2 rounded-lg ${tab==='active'?'bg-white/10 text-white':'text-white/80 hover:bg-white/5'}`}>Curse active</button>
            <button onClick={()=>setTab('history')} className={`w-full text-left px-3 py-2 rounded-lg ${tab==='history'?'bg-white/10 text-white':'text-white/80 hover:bg-white/5'}`}>Istoric curse</button>
            <button onClick={()=>setTab('docs')} className={`w-full text-left px-3 py-2 rounded-lg ${tab==='docs'?'bg-white/10 text-white':'text-white/80 hover:bg-white/5'}`}>Documente & facturi</button>
            <button disabled className="w-full text-left px-3 py-2 rounded-lg text-white/40 border border-white/10">Setări (curând)</button>
          </nav>
        </aside>

        <main>
          {/* Tabs top on mobile */}
          <div className="md:hidden flex gap-2 mb-4">
            <button onClick={()=>setTab('active')} className={`px-3 py-2 rounded-full text-sm ${tab==='active'?'bg-white/10 text-white':'text-white/80 border border-white/10'}`}>Curse active</button>
            <button onClick={()=>setTab('history')} className={`px-3 py-2 rounded-full text-sm ${tab==='history'?'bg-white/10 text-white':'text-white/80 border border-white/10'}`}>Istoric</button>
            <button onClick={()=>setTab('docs')} className={`px-3 py-2 rounded-full text-sm ${tab==='docs'?'bg-white/10 text-white':'text-white/80 border border-white/10'}`}>Documente</button>
          </div>

          {tab==='active' && (
            <div className="grid md:grid-cols-2 gap-4">
              {active.map((item, i) => (
                <CardCurse key={i} item={item} onClick={()=>setPanel(item)} />
              ))}
            </div>
          )}

          {tab==='history' && (
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-white/10 text-white/80">
                  <tr>
                    {['Dată încărcare','Rută','Marfă','Status final','Observații'].map((h,i)=>(<th key={i} className="text-left px-4 py-2">{h}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {istor.map((r, i)=> (
                    <tr key={i} className="border-t border-white/10">
                      {r.map((c,j)=>(<td key={j} className="px-4 py-2 text-white/80">{c}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab==='docs' && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {docs.map((d,i)=> (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-white/80 mb-3"><FileText className="w-4 h-4" /> {d[0]}</div>
                  <button className="inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg"><FileDown className="w-4 h-4"/> Descarcă</button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Panel detalii */}
      {panel && (
        <div className="fixed inset-0 bg-black/50 flex justify-end" onClick={()=>setPanel(null)}>
          <div className="w-full max-w-md h-full bg-slate-900 border-l border-white/10 p-6 overflow-y-auto" onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Detalii cursă</h3>
              <button className="text-white/60" onClick={()=>setPanel(null)}>Închide</button>
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <div><span className="text-white/60">Rută:</span> {panel.ruta}</div>
              <div><span className="text-white/60">Marfă:</span> {panel.marfa}</div>
              <div><span className="text-white/60">Șofer:</span> {panel.sofer}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> Timpi efectivi: Încărcare 08:35 • Plecare 09:00 • ETA 11:15</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400"/> Ultimul status: În tranzit</div>
              <a href="#" className="inline-flex items-center gap-2 text-sm bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg"><FileDown className="w-4 h-4"/> Descarcă CMR (PDF)</a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default PortalClient
