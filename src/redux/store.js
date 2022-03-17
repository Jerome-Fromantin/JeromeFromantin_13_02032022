import { createStore } from "redux"
import { produce } from "immer"

// State initial
const initialState = {
    username: "",
    password: "",
    token: localStorage.getItem('token'),
    profile: {}
}

// Action creators
export const saveToken = (token) => ({type: "saveToken", payload: token})
export const deleteToken = () => ({type: "deleteToken"})
export const saveProfile = (profile) => ({type: "saveProfile", payload: profile})

// Reducer
function reducer(state = initialState, action) {
    if (action.type === "saveToken") {
        localStorage.setItem('token', action.payload)
        return produce(state, draft => {
            draft.token = action.payload
        })
    }
    
    if (action.type === "deleteToken") {
        localStorage.removeItem('token')
        return produce(state, draft => {
            draft.token = ""
        })
    }
    
    if (action.type === "saveProfile") {
        return produce(state, draft => {
            draft.profile = action.payload
        })
    }

    // Sinon on retourne le state initial.
    return state
}

// Rassemble les données en un state qu'il garde dans le localStorage.
function saveToLocalStorage(state) {
    try {
        localStorage.getItem('token')
        state = 'token: "' + localStorage.token + '"'
        localStorage.setItem('persistedState', state)
    }
    catch(e) {
        console.warn(e)
    }
    
}

// Charge la chaîne du localStorage et la convertit en objet. Si invalide, c'est dit "undefined".
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('persistedState')
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    }
    catch(e) {
        console.warn(e)
        return undefined
    }
}

// Store.
export const store = createStore(reducer, loadFromLocalStorage())

store.subscribe(() => {
    saveToLocalStorage(store.getState())
    const result = localStorage.getItem('persistedState')
    console.log(result)
})
