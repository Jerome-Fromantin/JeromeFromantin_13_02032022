import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { saveToken } from '../redux/store'
import { getLogin } from '../services/services'

function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    //console.log(username)
    // Ci-dessus affiche au départ : <empty string>
    // Ajout d'un "f", affiche : f
    // Retrait du "f", affiche : <empty string>
    
    //console.log(password)
    // Ci-dessus affiche au départ : <empty string>
    // Ajout d'un "f", affiche : f
    // Retrait du "f", affiche : <empty string>

    const dispatch = useDispatch()

    async function authentication(event) {
        event.preventDefault()
        try {
            const response = await getLogin(username, password)
            const token = response.data.body.token
            dispatch(saveToken(token))
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Login Page</title>
            </Helmet>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={authentication}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={username} onChange={(e) => {
                                setUsername(e.target.value)
                            }}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type="submit" className="sign-in-button-link">
                            <span className="sign-in-button">Sign In</span>
                        </button>
                    </form>
                </section>
            </main>
        </HelmetProvider>
    )
}

export default Signin
