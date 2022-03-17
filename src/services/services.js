import axios from 'axios'

export const getLogin = (email, password) => {
    return axios.post("http://localhost:3001/api/v1/user/login", {
        "email": email,
        "password": password
    })
}

export const getProfile = () => {
    return axios.post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
    })
}

export const updateProfile = (firstName, lastName) => {
    return axios.put("http://localhost:3001/api/v1/user/profile", {
        "firstName": firstName,
        "lastName": lastName
    }, {
        headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
    })
}