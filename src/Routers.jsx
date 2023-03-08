import React from 'react'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Sobre from 'pages/Sobre/Sobre'
import Agentes from 'pages/Agentes/Agentes'
import Mapas from 'pages/Mapas/Mapas'
import Armas from 'pages/Armas/Armas'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={ <Home /> }/>
        <Route path='/sobre'   element={ <Sobre /> } />
        <Route path='/agentes' element={ <Agentes /> } />
        <Route path='/mapas'   element={ <Mapas /> } />
        <Route path='/armas'   element={ <Armas /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers