import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import Sun from './components/Sun'
import NotFound from './components/NotFound'
import PageNavBar from './components/PageNavBar'
import PlanetShow from './components/PlanetShow'
import Bodies from './components/Bodies'

const App = () => {

  return (
    <main className='site-wrapper'>
      <BrowserRouter basename="/le_systeme_solaire" >
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Sun />} />
          <Route path="/bodies/:id" element={<PlanetShow />} />
          <Route path="/bodies" element={<Bodies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
