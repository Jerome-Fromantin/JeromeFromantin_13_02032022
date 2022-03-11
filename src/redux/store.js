/* FICHIER EN COURS DE MODIFICATION !! */

import { createStore } from "redux"
//import { produce } from "immer"

// State initial
const initialState = {
    username: "",
    password: ""
}

// Action creators
export const getToken = () => ({type: "getToken"})
export const getName = () => ({type: "getName"})
export const getPass = () => ({type: "getPass"})

// Reducer
function reducer(state = initialState, action) { // state = initialState
    if (action.type === "getToken") {
        console.log("Token")
        console.log(localStorage.getItem('token_login1'))
    }

    if (action.type === "getName") {
        //console.log("Name")
        console.log(localStorage.getItem('username'))
    }

    if (action.type === "getPass") {
        //console.log("Pass")
        console.log(localStorage.getItem('password'))
        /*return produce(state, draft => {
            draft.password = action.payload
        })*/
    }

    // Sinon on retourne le state initial.
    return state
}

// Convertit l'objet en chaîne et le garde dans le localStorage.
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem('persistedState', serialisedState)
    }
    catch(e) {
        console.warn(e)
    }
    
}

// Charge la chaîne du localStorage et la reconvertit en objet. Si invalide, c'est dit "undefined".
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

//const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : ""
//const persistedState = localStorage.getItem('reduxState') ? localStorage.getItem('reduxState') : ""

// Store.
export const store = createStore(reducer, loadFromLocalStorage())

store.subscribe(() => {
    //console.log(localStorage.getItem('username'))
    //console.log(localStorage.getItem('password'))

    //localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    //localStorage.setItem('reduxState', store.getState())
    saveToLocalStorage(store.getState())
    const result = localStorage.getItem('persistedState')
    //const result = store.getState()
    console.log(result)
    //const result2 = JSON.stringify(store.getState())
    //console.log(result2)
})
