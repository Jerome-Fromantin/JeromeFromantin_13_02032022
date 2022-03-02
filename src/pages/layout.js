import React from 'react'
import { Outlet } from 'react-router-dom'
import '../css/main.css'
import Header from '../composants/Header'
import Footer from '../composants/Footer'

function Layout() {
    return (<div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>)
}

export default Layout
