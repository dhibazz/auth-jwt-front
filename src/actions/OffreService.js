import axios from "axios";
import {GET_OFFERS, DELETE_OFFER, GET_OFFER_BY_ID} from "../actions/typesoffer";

const baseURL = "http://localhost:8080/api/Offre";



  export const getOffers = () => async dispatch => {
    const response = await axios.get(`${baseURL}/getAllOffres`);

    dispatch({
        type: GET_OFFERS,
        payload: response.data,
    });

    return response; 
};
  


export const addNewOffer = async (offer) => {
    // debugger
    await fetch('http://localhost:8080/api/Offre/addOffre', {
        method: 'POST',
        body: JSON.stringify(offer),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        } 
    });
    return offer
}

export const updateOffer = async (offer) => {
    // debugger
    await fetch(`http://localhost:8080/api/Offre/updateOffre/${offer.id}`, {
        method: 'PUT',
        body: JSON.stringify(offer),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        } 
    });
    return offer
}

export const deleteOffer = async (offer) => {
    await fetch(`http://localhost:8080/api/Offre/deleteOffre/${offer.id}`, {
        method: 'DELETE'
    });
    return offer
}
