import { combineReducers } from 'redux';
import songs from './songs';
import selectedSong from './selectedSong';
var myReducer =  combineReducers({
    songs,
    selectedSong
});

export default myReducer;

