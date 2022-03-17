import React, { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { saveProfile } from '../redux/store'
import { updateProfile } from '../services/services'
import Account from '../composants/Account'
//import { store } from '../redux/store'

function User() {
    const [edit, setEdit] = useState(false)
    const profileData = useSelector((state) => state.profile)
    console.log(profileData)
    //const { edit } = useParams()
    //const userFirstName = ""
    //const userLastName = ""
    //console.log(userFirstName)
    //console.log(userLastName)
    const [firstName, setFirstName] = useState("") //(userFirstName)
    const [lastName, setLastName] = useState("") //(userLastName)

    const dispatch = useDispatch()

    //useEffect(() => {
        /*async function getUpdatedProfile() {
            const response = await updateProfile(firstName, lastName)
            const updatedProfile = response.data.body
            console.log(updatedProfile)
            dispatch(saveProfile(updatedProfile))
        }*/
    //}, [dispatch])

    // Fonction utilisée pour enregistrer le nom modifié.
    function saveData() {
        const editFirstName = document.getElementById('user_first_name')
        const editLastName = document.getElementById('user_last_name')
        console.log(editFirstName.value)
        console.log(editLastName.value)
        setFirstName(editFirstName.value)
        setLastName(editLastName.value)
        console.log(firstName)
        console.log(lastName)
        //getUpdatedProfile()
        setEdit(false)
    }

    // Fonction utilisée pour annuler le nom modifié.
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
