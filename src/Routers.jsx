import React from 'react'
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers