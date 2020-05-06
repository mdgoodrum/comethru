import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    loggedInUser: null
}

// Actions 

// Reducers
const defaultReducer = (state, action) => {
    return state
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default: return defaultReducer(state, action)
    }
}

export default store = createStore(reducer)