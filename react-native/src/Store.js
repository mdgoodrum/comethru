import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    loggedInUser: null,
    events: []
}

// Actions 
const UPDATE_EVENTS = 'UpdateEvents'
const LOG_IN = 'LogIn'
const LOG_OUT = 'LogOut'

// Action Creators
export const updateEvents = (events) => {
    return {
        type: UPDATE_EVENTS,
        events: events
    }
}

export const logIn = (username) =>{
    return {
        type: LOG_IN,
        username: username
    }
}

export const logOut = () =>{
    return {
        type: LOG_IN,
        username: null
    }
}


// Reducers
const updateEventsReducer = (state, action) => {
    return {
        ...state,
        events: action.events
    }
}

const authReducer = (state, action) => {
    return {
        ...state,
        loggedInUser: action.username
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:        return authReducer(state, action)
        case LOG_OUT:       return authReducer(state, action)
        case UPDATE_EVENTS: return updateEventsReducer(state, action)
        default:            return state
    }
}

export default store = createStore(reducer)