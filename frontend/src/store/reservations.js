import csrfFetch from "./csrf";


//ACTION CONSTANTS
export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION';

//ACTION CREATORS
const receive_reservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const recieve_reservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

const remove_reservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})


//CUSTOM SELECTORS

//returns an array of all the reservations in state
export const getReservations = (state) => {
    if (state.reservations){
        return Object.values(state.reservations);
    }
    else {
        return [];
    }
}

//returns a single reservation in state
export const getReservation = (reservationId) => (state) => {
    if(state.reservations && state.reservations[reservationId]){
        return state.reservations[reservationId];
    }
    else {
        return null;
    }
}


//THUNK ACTION CREATORS

//fetch all the reservations from backend
export const fetchReservations = () => async (dispatch) => {
    const response = await fetch('/api/reservations');
    if (response.ok){
        const reservations = await response.json();
        dispatch(receive_reservations(reservations));
    }
}

//fetch the specified reservation from backend
export const fetchReservation = (reservationId) => async (dispatch) => {
    const response = await fetch(`/api/reservations/${reservationId}`);
    if(response.ok){
        const reservation = await response.json();
        dispatch(recieve_reservation(reservation));
    }
}

//create a new reservation in the backend
export const createReservation = (reservation) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations`, {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const reservation = await response.json();
        dispatch(recieve_reservation(reservation));
    }
}

//update an existing reservation in the backend
export const updateReservation = (reservation) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: `PUT`,
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const reservation = await response.json();
        dispatch(recieve_reservation(reservation));
    }
}

//remove a reservation in the backend
export const deleteReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(remove_reservation(reservationId));
    }
}


//reservationS REDUCER (THIS IS WHAT CHANGES STATE)
const reservationsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_RESERVATIONS:
            // return {...state, ...action.reservations}
            return {...action.reservations}
        case RECEIVE_RESERVATION:
            return {...state, [action.reservation.id]: action.reservation}
        case REMOVE_RESERVATION:
            const newState = {...state};
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;
