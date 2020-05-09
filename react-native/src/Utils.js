import axios from 'axios'

import { apiEndpoint } from './API'

import { logIn, updateEventInterest, updateVenues } from './Store'

// @spader Speed wise, it'd be better to use a map. But I don't anticipate these arrays having more
// than 500 entries in them, so who cares.
export const findEvent = (events, id) => {
    for (let event of events) {
        if (event.id === id) {
            return event
        }
    }

    return null
}

export const findVenue = (venues, id) => {
    for (let venue of venues) {
        if (venue.id === id) {
            return venue
        }
    }

    return null
}

export const getInterestState = (interests, event) => {
    for (let interest of interests) {
        if (interest.event === event.id) {
            return interest.status
        }
    }

    return InterestState.None
}


// @spader This gets called after login or sign up
export const fetchInfoAfterLogin = (user, dispatch) => {
    dispatch(logIn(user))

    axios
        .post(apiEndpoint('/event_interest/'), {
            user: user.id
        })
        .then(response => {
            dispatch(updateEventInterest(response.data))
        })
        .catch(error => {
            console.log(error)
            console.log('could not get event status')
        })
}

export const fetchVenuesForLoadedEvents = (events, dispatch) => {
    let venueIds = []
    for (let event of events) {
        venueIds.push(event.venue)
    }

    axios
        .post(apiEndpoint('/venues/'), {
            ids: venueIds
        })
        .then(response => {
            let venues = response.data
            dispatch(updateVenues(venues))
        })
        .catch(error => {
            // @spader @debug
            console.log('Failed to retrieve venue data.');
            console.log(error);
        });
}
