import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Account from '../composants/Account'

function User() {
    const { edit } = useParams()
    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Profile Page</title>
            </Helmet>
            <main className="main bg-dark">
                {!edit ? (
                    <div className="header">
                        <h1>Welcome back<br />Tony Jarvis!</h1>
                        <Link to="/profile/:id/:edit">
                            <button className="edit-button">Edit Name</button>
                        </Link>
                    </div>
                ) : (
                    <div className="header">
                        <h1>Welcome back</h1>
                        <div className="profile-edit">
                            <input type="text" id="user_first_name" className="user-input" placeholder="Tony"/>
                            <input type="text" id="user_last_name" className="user-input" placeholder="Jarvis"/>
                        </div>
                        <div className="profile-edit">
                            <button className="edit-buttons">Save</button>
                            <button className="edit-buttons">Cancel</button>
                        </div>
                    </div>
                )}
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescr="Available Balance"
                linkPath="/profile/:id/:transChecking" transButton="View transactions"/>
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescr="Available Balance"
                linkPath="/profile/:id/:transSavings" transButton="View transactions"/>
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescr="Current Balance"
                linkPath="/profile/:id/:transCreditCard" transButton="View transactions"/>
            </main>
        </HelmetProvider>
    )
}

export default User
