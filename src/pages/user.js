import React from 'react'
import { Helmet } from 'react-helmet'
import Account from '../composants/Account'

function User() {
    return (<div>
        <Helmet>
            <title>Argent Bank - Profile Page</title>
        </Helmet>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79"
            amountDescr="Available Balance" transButton="View transactions"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42"
            amountDescr="Available Balance" transButton="View transactions"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30"
            amountDescr="Current Balance" transButton="View transactions"/>
        </main>
    </div>)
}

export default User
