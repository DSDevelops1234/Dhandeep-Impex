// import { Routes, Route } from 'react-router-dom'
// import MainHeader from './components/Header/MainHeader'
// import HomePage from './pages/HomePage'
// import NewInPage from './pages/NewInPage'
// import JeansPage from './pages/JeansPage'
// import TrousersPage from './pages/TrousersPage'
// import CargoPage from './pages/CargoPage'
// import SalePage from './pages/SalePage'
// import AuthPage from './pages/AuthPage'
// import { SpeedInsights } from '@vercel/speed-insights/react';
// import BuyNowPage from './pages/BuyNowPage';
// import { Toaster } from 'react-hot-toast';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white dark:bg-dark-background text-black dark:text-white">
//       <SpeedInsights />
//       <MainHeader />
//       <main className="pt-16">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/new-in" element={<NewInPage />} />
//           <Route path="/jeans" element={<JeansPage />} />
//           <Route path="/trousers" element={<TrousersPage />} />
//           <Route path="/cargo" element={<CargoPage />} />
//           <Route path="/sale" element={<SalePage />} />
//           <Route path="/auth" element={<AuthPage />} />
//           <Route path="/buy-now" element={<BuyNowPage />} />
//         </Routes>
//         <Toaster />
//       </main>
//     </div>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/Header/MainHeader';
import HomePage from './pages/HomePage';
import NewInPage from './pages/NewInPage';
import JeansPage from './pages/JeansPage';
import TrousersPage from './pages/TrousersPage';
import CargoPage from './pages/CargoPage';
import SalePage from './pages/SalePage';
import AuthPage from './pages/AuthPage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import BuyNowPage from './pages/BuyNowPage';
import { Toaster } from 'react-hot-toast';

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
          <Route path="/buy-now" element={<BuyNowPage />} />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
}

export default App;