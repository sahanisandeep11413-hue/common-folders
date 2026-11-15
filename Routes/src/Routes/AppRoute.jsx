
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Contect from '../components/Contect.jsx'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contect" element={<Contect />} />
    </Routes>
  )
}

export default AppRoute
