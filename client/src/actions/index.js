import youtube from '../api/youtube'
import axios from 'axios';
import pageServer from '../api/pageServer';
import history from '../history';

const API_KEY = process.env.REACT_APP_API_KEY;

// get the list of video from the Youtube Search API
export const getVideoList = searchTerm => async dispatch => {
    if (searchTerm != null) {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm,
                key: API_KEY,
                type: 'video',
                part: 'snippet',
                maxResults: 20
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
    SIGNIN:
        validate if the user with username and password exist
            YES => return payload
            NO => alert the user to enter correct info.
*/
export const signIn = formValues => async (dispatch, getState) => {
    const response = await pageServer.post('/signin', formValues);
    // console.log(response.data.correctUser);
    if (!response.data.correctUser) {
        window.alert("Username or Password is incorrect. Please try again");
    }
    else {
        dispatch({
            type: 'SIGN_IN',
            payload: response.data
        });
        history.push('/');
    }
}


export const signOut = () => dispatch => {
    dispatch({
        type: 'SIGN_OUT'
    });
}

// create and return data of new user.
export const createUser = (formValues) => async (dispatch, getState) => {
    const response = await pageServer.post('/createuser', formValues);

    if (response.data.userExisted) {
        window.alert("User alreayd exist. Please change to new username");
    }

    else {
        dispatch({
            type: 'CREATE_USER',
            payload: response.data
        });
        history.push('/');
    }
}