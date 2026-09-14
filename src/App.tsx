import { HashRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AirportPage from './pages/AirportPage'
import OfferPage from './pages/OfferPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airport/:airportId" element={<AirportPage />} />
            <Route path="/airport/:airportId/offer/:offerId" element={<OfferPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
