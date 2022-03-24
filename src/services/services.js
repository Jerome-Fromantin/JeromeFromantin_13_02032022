import axios from 'axios'

// Requête pour récupérer le token de connexion.
export const getLogin = (email, password) => {
    return axios.post("http://localhost:3001/api/v1/user/login", {
        "email": email,
        "password": password
    })
}

// Requête pour récupérer le profil correspondant au token.
export const getProfile = () => {
    return axios.post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
    })
}

// Requête pour mettre à jour le profil correspondant au token.
export const updateProfile = (firstName, lastName) => {
    return axios.put("http://localhost:3001/api/v1/user/profile", {
        "firstName": firstName,
        "lastName": lastName
    }, {
        headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
    })
}