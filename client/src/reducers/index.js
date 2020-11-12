import {combineReducers} from 'redux';

import videoListReducer from './videoListReducer';
import searchTermReducer from './searchTermReducer';
// import selectedVideo from './selectedVideoReducer';
import selectedVideoReducer from './selectedVideoReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    videoList: videoListReducer,
    searchTerm: searchTermReducer,
    selectedVideo: selectedVideoReducer,
    auth: authReducer,
    form: formReducer
});