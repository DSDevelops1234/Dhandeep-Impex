// src/App.tsx

import { Routes, Route } from 'react-router-dom'
import MainHeader from './components/Header/MainHeader'
import HomePage from './pages/HomePage'
import NewInPage from './pages/NewInPage'
import { SpeedInsights } from '@vercel/speed-insights/react'
import ProductModal from '@/components/ProductModal'
import JeansPage from './pages/JeansPage'
import TrousersPage from './pages/TrousersPage'
import CargoPage from './pages/CargoPage'
import SalePage from './pages/SalePage'
import AuthPage from './pages/AuthPage'
import BuyNowPage from './pages/BuyNowPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage' // <-- NEW
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-background text-black dark:text-white">
      <SpeedInsights />
      <MainHeader />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-in" element={<NewInPage />} />
          <Route path="/jeans" element={<JeansPage />} />
          <Route path="/trousers" element={<TrousersPage />} />
          <Route path="/cargo" element={<CargoPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/BuyNowPage" element={<BuyNowPage />} />
          {/* New CheckoutPage route with nested tabs */}
          <Route path="/checkoutpage/*" element={<CartPage />} />

          {/* NEW: Wishlist Page */}
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </main>
      <Toaster />
      <ProductModal />
    </div>
  )
}

export default App