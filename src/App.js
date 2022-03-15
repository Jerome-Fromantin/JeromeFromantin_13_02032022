import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Signin from './pages/signin'
import User from './pages/user'
import Transactions from './pages/transactions'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Signin/>}/>
          <Route path="profile/:id" element={<User/>}/>
          <Route path="profile/:id/:edit" element={<User/>}/>
          <Route path="transactions/:id" element={<Transactions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
