import youtube from '../api/youtube';

const API_KEY = process.env.REACT_APP_API_KEY;

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

export const setSelectedVideo = (selectedVideo = null) => dispatch =>
    dispatch({
        type: 'SELECTED_VIDEO',
        payload: selectedVideo
    })