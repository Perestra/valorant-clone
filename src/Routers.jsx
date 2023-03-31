import React from 'react'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Sobre from 'pages/Sobre/Sobre'
import Agents from 'pages/Agents/Agents'
import Agent from 'pages/Agent/Agent'
import Maps from 'pages/Maps/Maps'
import Arsenal from 'pages/Arsenal/Arsenal'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={ <Home /> }/>
        <Route path='/sobre'   element={ <Sobre /> } />
        <Route path='/agentes' element={ <Agents /> } />
        <Route path='/agentes/:agent' element={ <Agent /> }/>
        <Route path='/mapas'   element={ <Maps /> } />
        <Route path='/arsenal'   element={ <Arsenal /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers