import {GET_OFFERS, DELETE_OFFER, GET_OFFER_BY_ID} from "../actions/typesoffer";

const initialState = {
    offers: [],
    offer: {}
};

const employeesReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_OFFERS:
            return {...state, offers: payload};

        case DELETE_OFFER:
            return {...state, offers: state.offers.filter((offer) => offer.id !== payload)};

        case GET_OFFER_BY_ID:
            return {...state, OFFER: payload};

        default:
            return state;
    }
}

export default employeesReducer;

