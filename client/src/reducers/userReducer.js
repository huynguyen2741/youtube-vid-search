/*
    TODO:
        handle error if sign in failed.
        construct initiate_state for isSignedIn, isValid, userId
        handle SIGN_IN and SIGN_OUT

*/
import React from 'react';

const INITIAL_STATE = {
    signedIn: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {...action.payload, signedIn: true};
        case 'SIGN_IN':
            return {...action.payload, signedIn: true};
        case 'SIGN_OUT':
            return {signedIn: false};
        default:
            return state;
    }
    return false;
};