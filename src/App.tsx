import { Routes, Route } from 'react-router-dom'
import MainHeader from './components/header/MainHeader'
import HomePage from './pages/HomePage'
import NewInPage from './pages/NewInPage'
import JeansPage from './pages/JeansPage'
import TrousersPage from './pages/TrousersPage'
import CargoPage from './pages/CargoPage'
import SalePage from './pages/SalePage'
import AuthPage from './pages/AuthPage'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
        </Routes>
      </main>
    </div>
  )
}

export default App

