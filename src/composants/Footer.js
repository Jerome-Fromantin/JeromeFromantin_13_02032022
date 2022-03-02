import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (<div>
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
        <div className="footer-text">
            <p>Lien provisoire</p>
            <p>
                <Link to="/user" className="link_apropos">User</Link>
            </p>
        </div>
    </div>)
}

export default Footer
