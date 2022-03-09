import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import axios from 'axios'

function Signin() {
    async function test() {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", {
            "email": "tony@stark.com",
            "password": "password123"
          })
          console.log(response)
          console.log(response.data.body.token)
          localStorage.setItem('token_login', response.data.body.token);
    }
    test()
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
                            <label htmlFor="username">Username</label
                            ><input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label
                            ><input type="password" id="password" />
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
