import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getToken1, getToken2, getName, getPass } from '../redux/store'

function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const testname = localStorage.getItem('username')
        console.log('Le username est "' + testname + '".')
    }, [username])

    useEffect(() => {
        const testpass = localStorage.getItem('password')
        console.log('Le password est "' + testpass + '".')
    }, [password])

    // Fonction utilisée au remplissage du 1er input.
    function handleName(event) {
        setUsername({username : event.target.value})
        let name = event.target.value
        localStorage.setItem('username', name)
        dispatch(getToken1())
        dispatch(getName())
    }

    // Fonction utilisée au remplissage du 2ème input.
    function handlePass(event) {
        setPassword({password : event.target.value})
        let pass = event.target.value
        localStorage.setItem('password', pass)
        dispatch(getToken2())
        dispatch(getPass())
    }

    //console.log(username)
    // Ci-dessus affiche au départ : <empty string>
    // Ajout d'un "f", affiche : Object { username: "f" }
    // Retrait du "f", affiche : Object { username: "" }
    
    //console.log(password)
    // Ci-dessus affiche au départ : <empty string>
    // Ajout d'un "f", affiche : Object { password: "f" }
    // Retrait du "f", affiche : Object { password: "" }

    const dispatch = useDispatch()

    async function getDBData() {
        const response1 = await axios.post("http://localhost:3001/api/v1/user/login", {
            "email": "tony@stark.com",
            "password": "password123"
        })
        //console.log(response1.data.body.token)
        // Ci-dessus affiche le token extrait de la réponse, renouvelé à chaque frappe quel que soit le champ.
        //console.log(response1.config.data)
        // Ci-dessus affiche : {"email":"tony@stark.com","password":"password123"}
        localStorage.setItem('token_login1', response1.data.body.token)
        localStorage.setItem('name_pass1', response1.config.data)

        const response2 = await axios.post("http://localhost:3001/api/v1/user/login", {
            "email": "steve@rogers.com",
            "password": "password456"
        })
        //console.log(response2.data.body.token)
        // Ci-dessus affiche le token extrait de la réponse, renouvelé à chaque frappe quel que soit le champ.
        //console.log(response2.config.data)
        // Ci-dessus affiche : {"email":"steve@rogers.com","password":"password456"}
        localStorage.setItem('token_login2', response2.data.body.token)
        localStorage.setItem('name_pass2', response2.config.data)
    }
    getDBData()

    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Login Page</title>
            </Helmet>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={handleName}/>
                            {/*<input type="text" id="username" value={username}
                            onChange={(e) => setUsername(e.target.value)}/>*/}
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={handlePass}/>
                            {/*<input type="password" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}/>*/}
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label>
                        </div>
                        <Link to="/profile/:id" className="sign-in-button-link">
                            <div className="sign-in-button">Sign In</div>
                        </Link>
                    </form>
                </section>
            </main>
        </HelmetProvider>
    )
}

export default Signin
