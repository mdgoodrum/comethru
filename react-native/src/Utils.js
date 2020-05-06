export const findEvent = (events, id) => {
    for (let event of events) {
        if (event.id === id) {
            return event
        }
    }

    return null
}