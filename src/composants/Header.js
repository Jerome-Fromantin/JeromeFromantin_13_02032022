import React from 'react'
import { Link } from 'react-router-dom'
//import '../styles/styles.css'

function Header() {
    return (<div className="header">
        <span className="nav">
            <Link to="/" className="link_accueil">Accueil</Link>
            <Link to="/sign-in" className="link_apropos">Sign in</Link>
            <Link to="/user" className="link_apropos">User</Link>
        </span>
    </div>)
}

export default Header
