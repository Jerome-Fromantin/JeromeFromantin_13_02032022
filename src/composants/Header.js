import React from 'react'
import { useParams, Link } from 'react-router-dom'
import logo from '../img/argentBankLogo.png'

function Header() {
    const { id } = useParams()
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
                {!id ? (
                    <Link to="/login" className="main-nav-link main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;Sign In
                    </Link>
                ) : (<div>
                    <Link to="/profile/:id" className="main-nav-link main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;Tony
                    </Link>
                    <Link to="/" className="main-nav-link main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        &nbsp;Sign Out
                    </Link>
                </div>)}
            </div>
        </nav>
    </div>)
}

export default Header
