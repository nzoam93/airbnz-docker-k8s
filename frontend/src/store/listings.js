import csrfFetch from "./csrf";


//ACTION CONSTANTS
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
export const REMOVE_LISTING = 'listings/REMOVE_LISTING';
export const CLEAR_LISTINGS = 'listings/CLEAR_LISTINGS';

//ACTION CREATORS
const receive_listings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
})

const recieve_listing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
})

const remove_listing = (listingId) => ({
    type: REMOVE_LISTING,
    listingId
})

//this is used to clear the listings before the search
export const clear_listings = () => ({
    type: CLEAR_LISTINGS
})


//CUSTOM SELECTORS

//returns an array of all the listings in state
export const getListings = (state) => {
    if (state.listings){
        return Object.values(state.listings);
    }
    else {
        return [];
    }
}

//returns a single listing in state
export const getListing = (listingId) => (state) => {
    if(state.listings && state.listings[listingId]){
        return state.listings[listingId];
    }
    else {
        return null;
    }
}


//THUNK ACTION CREATORS

//fetch all the listings from backend (no search)
// export const fetchListings = () => async (dispatch) => {
//     const response = await fetch ('/api/listings');
//     if (response.ok){
//         const listings = await response.json();
//         dispatch(receive_listings(listings));
//     }
// }

//fetch all the listings from backend (with search)
export const fetchListings = (search_terms) => async (dispatch) => {
    //the ?search= is a way to add something into params in the backend
    let response;
    if (search_terms){
        response = await fetch (`/api/listings/?search=${search_terms}`);
    } else {
        response = await fetch (`/api/listings/`);
    }
    if (response.ok){
        const listings = await response.json();
        dispatch(receive_listings(listings));
    }
}

//fetch the specified listing from backend
export const fetchListing = (listingId) => async (dispatch) => {
    const response = await fetch (`/api/listings/${listingId}`);
    if(response.ok){
        const listing = await response.json();
        dispatch(recieve_listing(listing));
    }
}

//create a new listing in the backend
export const createListing = (listing) => async (dispatch) => {
    const response = await csrfFetch (`/api/listings`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const listing = await response.json();
        dispatch(recieve_listing(listing));
    }
}

//update an existing listing in the backend
export const updateListing = (listing) => async (dispatch) => {
    const response = await csrfFetch (`/api/listings/${listing.id}`, {
        method: `PUT`,
        body: JSON.stringify(listing),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const listing = await response.json();
        dispatch(recieve_listing(listing));
    }
}

//remove a listing in the backend
export const deleteListing = (listingId) => async (dispatch) => {
    const response = await csrfFetch (`/api/listings/${listingId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(remove_listing(listingId));
    }
}


//LISTINGS REDUCER (THIS IS WHAT CHANGES STATE)
const listingsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_LISTINGS:
            return {...state, ...action.listings}
        case RECEIVE_LISTING:
            return {...state, [action.listing.id]: action.listing}
        case REMOVE_LISTING:
            const newState = {...state};
            delete newState[action.listingId];
            return newState;
        case CLEAR_LISTINGS:
            return {};
        default:
            return state;
    }
}

export default listingsReducer;
