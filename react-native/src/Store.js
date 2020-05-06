import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    loggedInUser: null,
    events: []
}

// Actions 
const UPDATE_EVENTS = 'UpdateEvents'

// Action Creators
export const updateEvents = (events) => {
    return {
        type: UPDATE_EVENTS,
        events: events
    }
}

// Reducers
const updateEventsReducer = (state, action) => {
    return newState = {
        ...state,
        events: action.events
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_EVENTS: return updateEventsReducer(state, action)
        default:            return state
    }
}

export default store = createStore(reducer)