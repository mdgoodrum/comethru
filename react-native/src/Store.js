import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    loggedInUser: null,
    events: [],
    venues: [],
    interests: []
}

// Actions 
const UPDATE_EVENTS = 'UpdateEvents'
const UPDATE_VENUES = 'UpdateVenues'
const UPDATE_EVENT_INTEREST = 'UpdateEventInterest'
const LOG_IN = 'LogIn'
const LOG_OUT = 'LogOut'

// Action Creators
export const updateEvents = (events) => {
    return {
        type: UPDATE_EVENTS,
        events: events
    }
}

export const updateVenues = (venues) => {
    return {
        type: UPDATE_VENUES,
        venues: venues
    }
}

export const updateEventInterest = (interests) => {
    return {
        type: UPDATE_EVENT_INTEREST,
        interests: interests
    }
}

export const logIn = (user) =>{
    return {
        type: LOG_IN,
        user: user
    }
}

export const logOut = () =>{
    return {
        type: LOG_IN,
        user: null
    }
}


// Reducers
const updateEventsReducer = (state, action) => {
    return {
        ...state,
        events: action.events
    }
}

const updateVenuesReducer = (state, action) => {
    console.log(action.venues)
    return {
        ...state,
        venues: action.venues
    }
}
const updateEventInterestReducer = (state, action) => {
    return {
        ...state,
        interests: action.interests
    }
}


const authReducer = (state, action) => {
    return {
        ...state,
        loggedInUser: action.user
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:                return authReducer(state, action)
        case LOG_OUT:               return authReducer(state, action)
        case UPDATE_EVENTS:         return updateEventsReducer(state, action)
        case UPDATE_VENUES:         return updateVenuesReducer(state, action)
        case UPDATE_EVENT_INTEREST: return updateEventInterestReducer(state, action)
        default:                    return state
    }
}

export default store = createStore(reducer)