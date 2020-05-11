import axios from 'axios'

import { apiEndpoint } from './API'

import { updateEvents, updateEventInterest, updateVenues } from './Store'

// @spader Speed wise, it'd be better to use a map. But I don't anticipate these arrays having more
// than 500 entries in them, so who cares.
export const findEvent = (events, id) => {
    return events[id]
}

export const findVenue = (venues, id) => {
    return venues[id]
}

export const getInterestState = (interests, event) => {
    for (let interest of interests) {
        if (interest.event === event.id) {
            return interest.status
        }
    }

    return InterestState.None
}

export const fetchEvents = (dispatch) => {
    axios
    .post(apiEndpoint('/events/'))
    .then(response => {
        let events = response.data.reduce((events, event) => (
            events[event.id] = event,
            events
        ), {})
        dispatch(updateEvents(events))
        fetchVenuesForLoadedEvents(events, dispatch)
    })
    .catch(error => {
        // @spader @debug
        console.log('Failed to retrieve event data.');
        console.log(error);
    });

}

export const fetchVenuesForLoadedEvents = (events, dispatch) => {
    let venueIds = []
    for (let [id, event] of Object.entries(events)) {
        venueIds.push(event.venue)
    }

    axios
        .post(apiEndpoint('/venues/'), {
            ids: venueIds
        })
        .then(response => {
            let venues = response.data.reduce((venues, item) => (
                venues[item.id] = item,
                venues
            ), {})
            
            dispatch(updateVenues(venues))
        })
        .catch(error => {
            // @spader @debug
            console.log('Failed to retrieve venue data.');
            console.log(error);
        });
}

// @spader This gets called after login or sign up
export const fetchInfoAfterLogin = (user, dispatch) => {
    axios
    .post(apiEndpoint('/event_interest/'), {
        user: user.id
    })
    .then(response => {
        // Convert the bare array to an object
        let interests = response.data.reduce((interests, item) => (
            interests[item.id] = item,
            interests
        ), {})
        
        dispatch(updateEventInterest(response.data))
    })
    .catch(error => {
        console.log(error)
        console.log('could not get event status')
    })
}