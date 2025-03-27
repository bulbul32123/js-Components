import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/common/nav/Navbar'
import Footer from './components/common/footer/Footer'
import TemplatesPage from './pages/TemplatesPage';
import ComponentsPage from './pages/ComponentsPage';
import Account from './pages/Account';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
export default function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login';

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/templates' element={<TemplatesPage />} />
        <Route path='/components' element={<ComponentsPage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  )
}
