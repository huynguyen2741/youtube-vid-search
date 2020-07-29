import {combineReducers} from 'redux';

import videoListReducer from './videoListReducer';
import searchTermReducer from './searchTermReducer';
import selectedVideo from './selectedVideoReducer';
import selectedVideoReducer from './selectedVideoReducer';

export default combineReducers({
    videoList: videoListReducer,
    searchTerm: searchTermReducer,
    selectedVideo: selectedVideoReducer
});