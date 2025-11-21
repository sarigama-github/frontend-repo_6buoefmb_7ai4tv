import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle2, FileText, Phone, ArrowRight, BadgeCheck, MapPin, Truck, BarChart3, ShieldCheck, Timer, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

function Stat({ label, value, sub }) {
  return (
    <div className="card p-4 text-center subtle-glow">
      <div className="text-2xl font-bold text-white heading">{value}</div>
      <div className="text-white/70 text-sm">{label}</div>
      {sub && <div className="text-emerald-300/90 text-xs mt-1">{sub}</div>}
    </div>
  )
}

function ValueCard({ icon:Icon, title, points, accent="emerald" }) {
  const tone = accent === 'orange' ? 'text-orange-300' : 'text-emerald-300'
  return (
    <div className="card p-5 subtle-glow">
      <div className={`inline-flex items-center gap-2 text-sm ${tone} mb-2`}><Icon className="w-4 h-4"/> {title}</div>
      <ul className="space-y-2 text-white/80 text-sm">
        {points.map((p,i)=> (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className={`w-4 h-4 mt-0.5 ${tone}`} /> <span>{p}</span></li>
        ))}
      </ul>
    </div>
  )
}

function HormoziStrip() {
  return (
    <section className="py-14 bg-slate-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-3">Oferta pe care e greu s-o refuzi</h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">Dacă nu-ți reducem apelurile de status cu minim 30% și nu scurtăm confirmarea cu cel puțin 20 de minute în primele 60 de zile, te ajutăm gratis încă o lună să atingem ținta. Fără scuze. Rezultat sau muncim până iese.</p>
      </div>
    </section>
  )
}

function PainGain() {
  const bullets = [
    ['Prea multe întreruperi', 'Reducem apelurile repetitive cu notificări automate și portal cu ETA live.'],
    ['Timp mort între curse', 'Planificare strânsă + retururi monetizate = mai puțin gol.'],
    ['Documente împrăștiate', 'CMR + facturi + avize într-un singur loc, la un click.'],
    ['Confirmări lente', 'Reacție în 30–60 min cu info complet, nu “vedem noi”.'],
  ]
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-4">Problema</h2>
          <ul className="space-y-3 text-white/80">
            {bullets.map(([h, _], i)=>(
              <li key={i} className="card p-4">{h}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-4">Soluția</h2>
          <ul className="space-y-3 text-white/80">
            {bullets.map(([_, s], i)=>(
              <li key={i} className="card p-4 border-emerald-500/30">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Truck className="w-4 h-4" /> Transport marfă din Lungulețu în toată țara
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 heading">
              Camionul tău la timp, fără 10 telefoane în plus.
            </h1>
            <p className="text-white/80 text-lg mb-6">
              Formular online, notificări automate și portal clienți. Mai puțin timp pierdut, mai multă marfă livrată.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/cerere-camion" className="btn-primary">
                Cere camion în 2 minute <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portal-client" className="btn-ghost">
                Vezi demo portal clienți
              </Link>
              <Link to="/agroute-simulator" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 px-4 py-2 rounded-full font-semibold">
                Calculează ROI <BarChart3 className="w-4 h-4"/>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10 inline-flex items-center gap-2 bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-semibold shadow">
              <BadgeCheck className="w-4 h-4 text-emerald-600" /> Nou – Portal clienți 2025 (DEMO)
            </div>
            <div className="card p-4 shadow-2xl subtle-glow">
              <div className="bg-slate-800/80 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-white/80 text-sm"><MapPin className="w-4 h-4"/> Portal clienți</div>
                  <div className="text-xs text-white/60">DEMO</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
                    <div className="text-white/80 text-sm mb-2">Curse active</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span>Lungulețu → București</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs">În tranzit</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span>București → Pitești</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs">Încărcat</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
                    <div className="text-white/80 text-sm mb-2">Istoric livrări</div>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>12.11 – Lungulețu → București – Livrat</li>
                      <li>05.11 – Lungulețu → Pitești – Livrat</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
                    <div className="text-white/80 text-sm mb-2">Documente & facturi</div>
                    <div className="text-white/60 text-sm">CMR, facturi, avize</div>
                  </div>
                  <div className="bg-slate-900/60 border border-white/10 rounded-lg p-3">
                    <div className="text-white/80 text-sm mb-2">Status în timp real</div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-emerald-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              <Stat label="livrări la timp" value="98%" sub="SLA respectat" />
              <Stat label="RON marfă în 2024" value="3,4 mil." sub="creștere YoY" />
              <Stat label="camioane la dispoziție" value="8" sub="acoperire 100%" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes section */}
      <section className="py-16 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-8">Ce câștigi în 90 de zile</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <ValueCard icon={Phone} title="-40% apeluri status" points={["Notificări automate pentru clienți","Portal cu ETA în timp real","Mai puține întreruperi la birou"]} />
            <ValueCard icon={Truck} title="+1 cursă/zi flotă" points={["Planificare mai strânsă","Încărcări fără blocaje","Retururi monetizate"]} />
            <ValueCard icon={Timer} title="2h/zi salvate" points={["Formular online clar","Documente la un loc","Programări standardizate"]} />
            <ValueCard icon={Trophy} title="Oferta mai competitivă" points={["Răspuns în <60 min","SLA livrare + transparență","Raportare clară pentru B2B"]} accent="orange" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-8">Cum funcționează</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3 text-white">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold">Pas 1 – Trimiți cererea</h3>
              </div>
              <p className="text-white/70 text-sm">Completezi formularul de ‘Cere camion’ sau apeși pe WhatsApp. Spui ce marfă ai, de unde și până unde.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3 text-white">
                <Phone className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold">Pas 2 – Confirmăm cursa</h3>
              </div>
              <p className="text-white/70 text-sm">În maxim 30–60 de minute primești confirmarea cursei și prețul.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-3 text-white">
                <MapPin className="w-5 h-5 text-orange-400" />
                <h3 className="font-semibold">Pas 3 – Urmărești marfa în portal</h3>
              </div>
              <p className="text-white/70 text-sm">Vezi statusul cursei în portal sau prin SMS/WhatsApp – fără să mai suni de 5 ori.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof + comparison */}
      <section className="py-16 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-4">De ce ASO</h2>
            <p className="text-white/70 mb-4">Flotă proprie, experiență în marfă agricolă și generală, timpi buni la încărcare/descărcare, comunicare curată. Nu promitem rocket science, promitem livrare.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Top Afaceri micro-întreprinderi Lungulețu (2024–2025)","Flotă proprie – camioane pentru marfă agricolă + generală","Experiență: mii de tone din Lungulețu către București","Programări la depozite, documente la un loc"].map((b, i) => (
                <div key={i} className="card p-4 text-white/80 text-sm">{b}</div>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <div className="text-white/90 font-semibold mb-3">Comparativ – cum arată o zi de lucru</div>
            <div className="grid grid-cols-2 text-sm text-white/70">
              <div>
                <div className="text-white/60 mb-2">Fără ASO</div>
                <ul className="space-y-2 list-disc list-inside">
                  <li>6–8 apeluri pentru status</li>
                  <li>Documente răspândite în email</li>
                  <li>ETA estimat "după experiență"</li>
                </ul>
              </div>
              <div>
                <div className="text-white/60 mb-2">Cu ASO</div>
                <ul className="space-y-2 list-disc list-inside">
                  <li>0–2 apeluri (notificări automate)</li>
                  <li>CMR și facturi la un click</li>
                  <li>ETA în portal + SMS</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-xs text-white/60">Impact tipic: -40% apeluri, +1 cursă/zi flotă (prin reducerea timpilor morți).</div>
          </div>
        </div>
      </section>

      {/* Preview portal */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white heading">Cum arată portalul tău</h2>
            <Link to="/portal-client" className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-2">Vezi demo complet <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {title:'Curse active', rows:[{r:'Lungulețu → București', s:'În tranzit', c:'bg-emerald-500/20 text-emerald-300'},{r:'București → Pitești', s:'Livrat', c:'bg-emerald-700/20 text-emerald-400'}]},
              {title:'Istoric livrări', rows:[{r:'12.11 – Lungulețu → București', s:'Livrat', c:'bg-emerald-700/20 text-emerald-400'}]},
              {title:'Documente & facturi', rows:[{r:'CMR – 12.11.2025 – L → B', s:'PDF', c:'bg-white/10 text-white/70'}]},
              {title:'Status în timp real', rows:[{r:'L → B – 75% progres', s:'ETA 11:15', c:'bg-blue-500/20 text-blue-300'}]},
            ].map((card, idx) => (
              <div key={idx} className="card p-5">
                <div className="text-white/80 text-sm mb-3">{card.title}</div>
                <div className="space-y-2">
                  {card.rows.map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-white/80 text-sm">
                      <span>{row.r}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${row.c}`}>{row.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HormoziStrip />
      <PainGain />

      {/* Testimonial */}
      <section className="py-14 bg-slate-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3"/>
          <blockquote className="text-white/80 text-lg">“După ce am trecut clienții mari pe portal, telefoanele cu ‘unde e camionul?’ aproape au dispărut. Am câștigat timp la birou și am reușit să mai prindem câte un retur.”</blockquote>
          <div className="text-white mt-3 font-semibold">Manager Depozit – București</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-900/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white heading mb-8">Întrebări frecvente</h2>
          <div className="grid md:grid-cols-2 gap-6 text-white/80 text-sm">
            {[
              ['Lucrați doar cu Lungulețu?','Punctul nostru principal e Lungulețu, dar transportăm în toată țara.'],
              ['Transportați și alt tip de marfă?','Da, și marfă generală – nu doar legume.'],
              ['Cât de repede confirmați?','În mod normal 30–60 de minute în program.'],
              ['Aveți portal pentru clienți?','Da, acesta este un demo. Realul va avea login și notificări.'],
              ['Cum pot cere camion?','Completezi formularul sau ne scrii direct pe WhatsApp.'],
              ['Emiteți factură?','Da, și găsești documentele în portal.']
            ].map((f, i) => (
              <div key={i} className="card p-5">
                <div className="font-semibold text-white mb-2">{f[0]}</div>
                <p className="text-white/70">{f[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
