import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white text-slate-900 rounded-xl shadow-xl p-6">
          <div className="text-center mb-4">
            <img src="/flame-icon.svg" alt="ASO" className="w-12 h-12 mx-auto mb-2" />
            <h1 className="text-xl font-bold">Portal clienți ASO Warehouse & Logistic</h1>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="email@exemplu.ro" />
            </div>
            <div>
              <label className="block text-sm mb-1">Parolă</label>
              <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="••••••••" />
            </div>
            <Link to="/portal-client" className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold">Intră în portal (DEMO)</Link>
          </div>

          <div className="text-center text-sm text-gray-600 mt-4">
            <a href="/" className="underline">Înapoi la site</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login
