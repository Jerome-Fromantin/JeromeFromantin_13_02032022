import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/argentBankLogo.png'

function Header() {
    return (<div>
        <nav className="main-nav">
            <Link to="/" className="main-nav-link main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/sign-in" className="main-nav-link main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;Sign In
                </Link>
            </div>
        </nav>
    </div>)
}

export default Header
