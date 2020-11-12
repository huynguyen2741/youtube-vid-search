import youtube from '../api/youtube'
import axios from 'axios';
import pageServer from '../api/pageServer';

const API_KEY = process.env.REACT_APP_API_KEY;
const server = axios.connec

export const getVideoList = searchTerm => async dispatch => {
    // console.log('searchterm' + searchTerm);
    if (searchTerm != null) {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm,
                key: API_KEY,
                type: 'video',
                part: 'snippet',
                maxResults: 3
            }
        });

        dispatch({type: 'GET_VIDEOS', payload: response.data.items});
    }
}

export const setSearchTerm = (searchTerm = null) => dispatch =>
    dispatch({
        type: 'SET_SEARCHTERM',
        payload: searchTerm
    })

export const setSelectedVideo = (selectedVideo) => dispatch => {
    // console.log(selectedVideo);
    dispatch({
        type: 'SELECTED_VIDEO',
        payload: selectedVideo
    })
}

/*
    TODO:
        if sign in pass, return what type of payload
        if error, how to handle the error 
*/
export const signIn = formValues => (dispatch, getState) => {
    const response = pageServer.post('/signin', formValues);

    dispatch({
        type: 'SIGN_IN',
        payload: response.data
    });
}