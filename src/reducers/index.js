import {combineReducers} from 'redux';

import videoListReducer from './videoListReducer';
import searchTermReducer from './searchTermReducer';

export default combineReducers({
    videoList: videoListReducer,
    searchTerm: searchTermReducer,
});