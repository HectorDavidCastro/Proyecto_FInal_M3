import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LogInPage } from './pages/LogInPage'
import { RecetasPage } from './pages/RecetasPage'
import { Guaradadaspage } from './pages/Guaradadaspage'


function App() {
  

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/LogIn" element={<LogInPage/>}/>
          <Route path="/Recetas" element={<RecetasPage/>}/>
          <Route path="/RecetasGuardadas" element={<Guaradadaspage/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default App
