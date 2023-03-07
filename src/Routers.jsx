import React from 'react'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import Home from 'pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={ <Home /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers