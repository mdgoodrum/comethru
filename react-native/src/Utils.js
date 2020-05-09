import axios from 'axios'

import { apiEndpoint } from './API'

import { logIn, updateEventInterest } from './Store'

export const findEvent = (events, id) => {
    for (let event of events) {
        if (event.id === id) {
            return event
        }
    }

    return null
}

export const eventInterest = (events, user) => {

}

// @spader This gets called after login or sign up
export const fetchInfoAfterLogin = (user, dispatch) => {
    dispatch(logIn(user))

    console.log(user)
    axios
        .post(apiEndpoint('/event_interest/'), {
            user: user.pk
        })
        .then(response => {
            dispatch(updateEventInterest(response.data))
        })
        .catch(error => {
            console.log(error)
            console.log('could not get event status')
        })
}