import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutProject } from './pages/AboutProject'
import { Meal } from './pages/Meal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-project" element={<AboutProject />} />
      <Route path="/meal" element={<Meal />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
