import { createStore } from "redux"
import { produce } from "immer"

// State initial
const initialState = {
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

// Store.
export const store = createStore(reducer, initialState)