import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import CerereCamion from './pages/CerereCamion'
import PortalClient from './pages/PortalClient'
import DispatchCockpit from './pages/DispatchCockpit'
import AgroRouteSimulator from './pages/AgroRouteSimulator'
import Login from './pages/Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cerere-camion" element={<CerereCamion />} />
        <Route path="/portal-client" element={<PortalClient />} />
        <Route path="/dispatch-cockpit" element={<DispatchCockpit />} />
        <Route path="/agroute-simulator" element={<AgroRouteSimulator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
