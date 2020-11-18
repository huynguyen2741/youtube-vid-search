/*
    TODO:
        handle error if sign in failed.
        construct initiate_state for isSignedIn, isValid, userId
        handle SIGN_IN and SIGN_OUT

*/
import React from 'react';

export default (state = null, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {...action.payload};
        default:
            return state;
    }
    return false;
};