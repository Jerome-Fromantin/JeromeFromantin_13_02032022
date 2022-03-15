import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import axios from 'axios'
import Account from '../composants/Account'
//import { store } from '../redux/store'

function User() {
    const { edit } = useParams()
    const userFirstName = ""
    const userLastName = ""
    console.log(userFirstName)
    console.log(userLastName)
    const [firstName, setFirstName] = useState(userFirstName)
    const [lastName, setLastName] = useState(userLastName)

    // Fonction utilisée pour enregistrer le nom modifié.
    function saveData() {
        const userFirstName = document.getElementById('user_first_name')
        const userLastName = document.getElementById('user_last_name')
        setFirstName(userFirstName.value)
        setLastName(userLastName.value)
    }

    // Fonction utilisée pour annuler le nom modifié.
    function cancelData() {
        setFirstName("")
        setLastName("")
    }

    async function getProfileData() {
        const response1 = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
            headers: {"Authorization": "Authorization Bearer " + localStorage.getItem('response_login_token1')}
        })
        console.log(response1.data.body.firstName)
        // Ci-dessus affiche : Tony
        console.log(response1.data.body.lastName)
        // Ci-dessus affiche : Stark
        localStorage.setItem('firstName1', response1.data.body.firstName)
        localStorage.setItem('lastName1', response1.data.body.lastName)

        const response2 = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
            headers: {"Authorization": "Authorization Bearer " + localStorage.getItem('response_login_token2')}
        })
        console.log(response2.data.body.firstName)
        // Ci-dessus affiche : Steve
        console.log(response2.data.body.lastName)
        // Ci-dessus affiche : Rogers
        localStorage.setItem('firstName2', response2.data.body.firstName)
        localStorage.setItem('lastName2', response2.data.body.lastName)
    }
    getProfileData()

    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Profile Page</title>
            </Helmet>
            <main className="main bg-dark">
                {!edit ? (
                    <div className="header">
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
                        <Link to="/profile/:id/:edit">
                            <button className="edit-button">Edit Name</button>
                        </Link>
                    </div>
                ) : (
                    <div className="header">
                        <h1>Welcome back</h1>
                        <div className="profile-edit">
                            <input type="text" id="user_first_name" className="user-input" placeholder={firstName}/>
                            <input type="text" id="user_last_name" className="user-input" placeholder={lastName}/>
                        </div>
                        <div className="profile-edit">
                            <button className="edit-buttons" onClick={saveData}>Save</button>
                            <button className="edit-buttons" onClick={cancelData}>Cancel</button>
                        </div>
                    </div>
                )}
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescr="Available Balance"
                linkPath="/transactions/:id" transButton="View transactions"/>
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescr="Available Balance"
                linkPath="/transactions/:id" transButton="View transactions"/>
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescr="Current Balance"
                linkPath="/transactions/:id" transButton="View transactions"/>
            </main>
        </HelmetProvider>
    )
}

export default User
