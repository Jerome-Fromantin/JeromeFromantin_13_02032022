import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Signin from './pages/signin'
import User from './pages/user'
import Transactions from './pages/transactions'
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<NotLoggedIn><Signin/></NotLoggedIn>}/>
          <Route path="profile" element={<LoggedIn><User/></LoggedIn>}/>
          <Route path="transactions" element={<LoggedIn><Transactions/></LoggedIn>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
