import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { saveProfile } from '../redux/store'
import { updateProfile } from '../services/services'
import Account from '../composants/Account'

function User() {
    const [edit, setEdit] = useState(false)
    const profileData = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    // Fonction utilisée pour enregistrer le nom modifié.
    async function saveData() {
        const editFirstName = document.getElementById('user_first_name')
        const editLastName = document.getElementById('user_last_name')
        const response = await updateProfile(editFirstName.value, editLastName.value)
        const updatedProfile = response.data.body
        dispatch(saveProfile(updatedProfile))
        setEdit(false)
    }

    // Fonction utilisée pour annuler la modification en cours.
    function cancelData() {
        setEdit(false)
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Profile Page</title>
            </Helmet>
            <main className="main bg-dark">
                {!edit ? (
                    <div className="header">
                        <h1>Welcome back<br />{profileData.firstName} {profileData.lastName}!</h1>
                        <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
                    </div>
                ) : (
                    <div className="header">
                        <h1>Welcome back</h1>
                        <div className="profile-edit">
                            <input type="text" id="user_first_name" className="user-input"
                            placeholder={profileData.firstName}/>
                            <input type="text" id="user_last_name" className="user-input"
                            placeholder={profileData.lastName}/>
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
