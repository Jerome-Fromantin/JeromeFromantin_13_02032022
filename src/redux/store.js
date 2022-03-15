import { createStore } from "redux"
//import { produce } from "immer"

// State initial
const initialState = {
    username: "",
    password: ""
}

// Action creators
export const getUsername = () => ({type: "getUsername"})
export const getPassword = () => ({type: "getPassword"})

// Reducer
function reducer(state = initialState, action) {
    if (action.type === "getUsername") {
        localStorage.getItem('username')
    }

    if (action.type === "getPassword") {
        localStorage.getItem('password')
        /*return produce(state, draft => {
            draft.password = action.payload
        })*/
    }

    // Sinon on retourne le state initial.
    return state
}

// Rassemble les données en un state qu'il garde dans le localStorage.
function saveToLocalStorage(state) {
    try {
        localStorage.getItem('username')
        localStorage.getItem('password')
        state = '{username: "' + localStorage.username + '", password: "' + localStorage.password + '"}'
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
