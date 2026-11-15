import React from 'react'
import Navbar from './components/Navbar.jsx'
import AppRoute from './Routes/AppRoute.jsx'


const App = () => {
  return (
    <div className='bg-gray-600 h-screen'>
      <Navbar />
      <AppRoute />
    </div>
  )
}

export default App
