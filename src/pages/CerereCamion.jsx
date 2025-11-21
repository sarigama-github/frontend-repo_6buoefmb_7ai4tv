import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Info } from 'lucide-react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-2">Cererea ta a fost trimisă</h2>
        <p className="text-gray-600 mb-6">În mod normal îți răspundem în 30–60 de minute în timpul programului (Luni–Sâmbătă). Pentru urgențe, sună-ne direct.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-5 py-2 rounded-full bg-slate-900 text-white font-semibold">Înapoi la pagina principală</Link>
          <Link to="/portal-client" className="px-5 py-2 rounded-full bg-emerald-500 text-white font-semibold">Vezi portalul clienților</Link>
        </div>
      </div>
    </div>
  )
}

function CerereCamion() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    tipClient: '', tipMarfa: '', altMarfa: '', tonaj: '', data: '', interval: '',
    adresaIncarcare: '', localitateIncarcare: '', adresaDescarcare: '', localitateDescarcare: '',
    extra: { ajutor: false, programare: false }, nume: '', telefon: '', email: '', observatii: ''
  })

  const validate = () => {
    const e = {}
    if (!form.tipClient) e.tipClient = 'Alege tipul de client'
    if (!form.tipMarfa) e.tipMarfa = 'Alege tipul de marfă'
    if (!form.tonaj || Number(form.tonaj) <= 0) e.tonaj = 'Completează tonaj estimat'
    if (!form.data) e.data = 'Alege data încărcării'
    if (!form.interval) e.interval = 'Alege intervalul orar'
    if (!form.adresaIncarcare || !form.localitateIncarcare) e.incarcare = 'Completează adresa și localitatea de încărcare'
    if (!form.adresaDescarcare || !form.localitateDescarcare) e.descarcare = 'Completează adresa și localitatea de descărcare'
    if (!form.nume) e.nume = 'Completează numele de contact'
    if (!/^\+?\d{9,15}$/.test(form.telefon)) e.telefon = 'Număr de telefon invalid'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const inputCls = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1'
  const err = (k) => errors[k] && <p className="text-red-600 text-xs mt-1">{errors[k]}</p>

  if (submitted) return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />
      <Success />
      <Footer />
    </div>
  )

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white text-slate-900 rounded-xl shadow-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Cere camion pentru marfa ta</h1>
          <p className="text-gray-600 mb-6">Completează detaliile de mai jos și te contactăm pentru confirmare și preț.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Tip client *</label>
                <select className={inputCls} value={form.tipClient} onChange={e=>setForm({...form, tipClient:e.target.value})}>
                  <option value="">Selectează</option>
                  <option>Fermier / producător</option>
                  <option>Depozit / trader</option>
                  <option>Fabrică / alt client B2B</option>
                </select>
                {err('tipClient')}
              </div>
              <div>
                <label className={labelCls}>Tip marfă *</label>
                <div className="flex gap-2">
                  <select className={inputCls} value={form.tipMarfa} onChange={e=>setForm({...form, tipMarfa:e.target.value})}>
                    <option value="">Selectează</option>
                    <option>Cartofi</option>
                    <option>Varză</option>
                    <option>Morcovi</option>
                    <option>Marfă generală</option>
                    <option>Altceva</option>
                  </select>
                </div>
                {err('tipMarfa')}
              </div>
              <div>
                <label className={labelCls}>Tonaj estimat (tone) *</label>
                <div className="relative">
                  <input className={inputCls} type="number" min="1" step="0.1" value={form.tonaj} onChange={e=>setForm({...form, tonaj:e.target.value})} />
                  <div className="absolute right-2 top-2 text-gray-400" title="Estimativ, nu trebuie să fie perfect. Ne ajustăm la telefon."><Info className="w-5 h-5"/></div>
                </div>
                {err('tonaj')}
              </div>
              <div>
                <label className={labelCls}>Data încărcării *</label>
                <input className={inputCls} type="date" value={form.data} onChange={e=>setForm({...form, data:e.target.value})} />
                {err('data')}
              </div>
              <div>
                <label className={labelCls}>Interval oră încărcare *</label>
                <select className={inputCls} value={form.interval} onChange={e=>setForm({...form, interval:e.target.value})}>
                  <option value="">Selectează</option>
                  <option>Dimineață (06:00–10:00)</option>
                  <option>Prânz (10:00–14:00)</option>
                  <option>După-amiază (14:00–18:00)</option>
                </select>
                {err('interval')}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Adresă încărcare *</label>
                <input className={inputCls} value={form.adresaIncarcare} onChange={e=>setForm({...form, adresaIncarcare:e.target.value})} />
                <input className={`${inputCls} mt-2`} placeholder="Localitate" value={form.localitateIncarcare} onChange={e=>setForm({...form, localitateIncarcare:e.target.value})} />
                {err('incarcare')}
              </div>
              <div>
                <label className={labelCls}>Adresă descărcare *</label>
                <input className={inputCls} value={form.adresaDescarcare} onChange={e=>setForm({...form, adresaDescarcare:e.target.value})} />
                <input className={`${inputCls} mt-2`} placeholder="Localitate" value={form.localitateDescarcare} onChange={e=>setForm({...form, localitateDescarcare:e.target.value})} />
                {err('descarcare')}
              </div>
            </div>

            <div>
              <label className={labelCls}>Servicii extra</label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" checked={form.extra.ajutor} onChange={e=>setForm({...form, extra:{...form.extra, ajutor:e.target.checked}})} /> Ajutor la încărcare/descărcare</label>
                <label className="inline-flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" checked={form.extra.programare} onChange={e=>setForm({...form, extra:{...form.extra, programare:e.target.checked}})} /> Programare la depozit</label>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className={labelCls}>Nume persoană de contact *</label>
                <input className={inputCls} value={form.nume} onChange={e=>setForm({...form, nume:e.target.value})} />
                {err('nume')}
              </div>
              <div>
                <label className={labelCls}>Telefon *</label>
                <input className={inputCls} value={form.telefon} onChange={e=>setForm({...form, telefon:e.target.value})} placeholder="ex: +40722111222" />
                {err('telefon')}
              </div>
              <div>
                <label className={labelCls}>Email (opțional)</label>
                <input className={inputCls} value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Observații</label>
              <textarea className={inputCls} rows="3" value={form.observatii} onChange={e=>setForm({...form, observatii:e.target.value})} />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-transform hover:-translate-y-0.5" type="submit">Trimite cererea</button>
              <a className="text-slate-900 underline" href={`mailto:contact@aso-logistic.ro?subject=Cerere%20camion&body=${encodeURIComponent(JSON.stringify(form, null, 2))}`}>sau trimite pe email</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CerereCamion
