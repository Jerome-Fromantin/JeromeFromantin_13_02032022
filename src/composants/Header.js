import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToken, saveProfile } from '../redux/store'
import { getProfile } from '../services/services'
import logo from '../img/argentBankLogo.png'

function Header() {
    const token = useSelector((state) => state.token)
    const profileData = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        async function getUserProfile() {
            const response = await getProfile()
            const profileData = response.data.body
            dispatch(saveProfile(profileData))
        }
        if (token) getUserProfile()
    }, [dispatch, token])

    function signOut() {
        dispatch(deleteToken())
    }

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
                {!token ? (
                    <Link to="/login" className="main-nav-link main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;Sign In
                    </Link>
                ) : (<div>
                    <Link to="/profile" className="main-nav-link main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;{profileData.firstName}
                    </Link>
                    <Link to="/" className="main-nav-link main-nav-item" onClick={signOut}>
                        <i className="fa fa-sign-out"></i>
                        &nbsp;Sign Out
                    </Link>
                </div>)}
            </div>
        </nav>
    </div>)
}

export default Header
